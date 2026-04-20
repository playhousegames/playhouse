'use client';
import { useEffect, useRef, useState } from 'react';

export default function ArkGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<any>({});
  const animRef = useRef<number>(0);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameState, setGameState] = useState<'idle'|'ready'|'playing'|'gameover'|'win'>('idle');
  const mutedRef = useRef(false);
  const audioCtxRef = useRef<AudioContext|null>(null);

  const PIXEL_FONT = "'Press Start 2P', monospace";
  // Reduced from 480x320 to 480x260 for a more compact hero
  const W = 480, H = 260;
  const ROWS = 4, COLS = 10; // dropped from 5 rows to 4 to fit smaller canvas
  const BW = 42, BH = 14, BPAD = 3;
  const BOFF_X = 9, BOFF_Y = 30;
  const COLORS = ['#d4001a','#ff6b00','#ffd700','#39ff14','#00cfff'];

  function getAudio() {
    if (!audioCtxRef.current) audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    return audioCtxRef.current;
  }

  function beep(freq: number, type: OscillatorType, duration: number, vol: number, freqEnd?: number) {
    if (mutedRef.current) return;
    try {
      const ac = getAudio();
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.type = type;
      o.frequency.setValueAtTime(freq, ac.currentTime);
      if (freqEnd) o.frequency.exponentialRampToValueAtTime(freqEnd, ac.currentTime + duration);
      g.gain.setValueAtTime(vol, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + duration);
      o.start(ac.currentTime); o.stop(ac.currentTime + duration);
    } catch(e) {}
  }

  function sfxPaddle() { beep(220,'square',0.08,0.12,180); }
  function sfxBrick()  { beep(440,'square',0.06,0.15,880); }
  function sfxWall()   { beep(180,'square',0.05,0.1); }
  function sfxLose()   {
    if (mutedRef.current) return;
    try {
      const ac = getAudio();
      [200,170,140,110].forEach((f,i) => {
        const o = ac.createOscillator(); const g = ac.createGain();
        o.connect(g); g.connect(ac.destination); o.type = 'sawtooth'; o.frequency.value = f;
        g.gain.setValueAtTime(0.18, ac.currentTime+i*0.1);
        g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+i*0.1+0.09);
        o.start(ac.currentTime+i*0.1); o.stop(ac.currentTime+i*0.1+0.1);
      });
    } catch(e) {}
  }
  function sfxPowerup() {
    if (mutedRef.current) return;
    try {
      const ac = getAudio();
      [330,440,550,660].forEach((f,i) => {
        const o = ac.createOscillator(); const g = ac.createGain();
        o.connect(g); g.connect(ac.destination); o.type = 'triangle'; o.frequency.value = f;
        g.gain.setValueAtTime(0.12, ac.currentTime+i*0.06);
        g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+i*0.06+0.05);
        o.start(ac.currentTime+i*0.06); o.stop(ac.currentTime+i*0.06+0.06);
      });
    } catch(e) {}
  }
  function sfxWin() {
    if (mutedRef.current) return;
    try {
      const ac = getAudio();
      [262,330,392,523,659,784].forEach((f,i) => {
        const o = ac.createOscillator(); const g = ac.createGain();
        o.connect(g); g.connect(ac.destination); o.type = 'square'; o.frequency.value = f;
        g.gain.setValueAtTime(0.14, ac.currentTime+i*0.1);
        g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+i*0.1+0.09);
        o.start(ac.currentTime+i*0.1); o.stop(ac.currentTime+i*0.1+0.1);
      });
    } catch(e) {}
  }

  function initGame() {
    const s = stateRef.current;
    s.score = 0; s.lives = 3;
    setScore(0); setLives(3);
    s.paddle = { x: W/2-36, y: H-24, w: 72, h: 10 };
    s.ball = { x: W/2, y: H-60, vx: 3.2, vy: -3.2, r: 6, stuck: true };
    s.bricks = [];
    for (let r=0; r<ROWS; r++)
      for (let c=0; c<COLS; c++)
        s.bricks.push({ x: BOFF_X+c*(BW+BPAD), y: BOFF_Y+r*(BH+BPAD), w:BW, h:BH, alive:true, color:COLORS[r], pts:(ROWS-r)*10 });
    s.powerup = null;
    s.phase = 'ready';
    setGameState('ready');
  }

  function launch() {
    const s = stateRef.current;
    if (s.phase === 'ready') { s.ball.stuck = false; s.phase = 'playing'; setGameState('playing'); }
    else if (s.phase === 'gameover' || s.phase === 'win') { initGame(); }
  }

  function drawFrame() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const s = stateRef.current;

    ctx.fillStyle = '#1a0a2e';
    ctx.fillRect(0,0,W,H);
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    [[20,15],[80,40],[150,20],[220,35],[300,10],[380,25],[440,18],[460,50],[30,80],[120,70],[250,60],[350,75],[410,65]].forEach(([x,y]) => ctx.fillRect(x,y,1,1));
    ctx.strokeStyle='#333060'; ctx.lineWidth=1; ctx.strokeRect(0,0,W,H);

    s.bricks?.forEach((b: any) => {
      if (!b.alive) return;
      ctx.fillStyle = b.color; ctx.fillRect(b.x,b.y,b.w,b.h);
      ctx.fillStyle='rgba(255,255,255,0.18)'; ctx.fillRect(b.x,b.y,b.w,3);
      ctx.fillStyle='rgba(0,0,0,0.25)'; ctx.fillRect(b.x,b.y+b.h-3,b.w,3);
    });

    if (s.paddle) {
      ctx.fillStyle='#ffd700'; ctx.fillRect(s.paddle.x,s.paddle.y,s.paddle.w,s.paddle.h);
      ctx.fillStyle='rgba(255,255,255,0.3)'; ctx.fillRect(s.paddle.x,s.paddle.y,s.paddle.w,3);
    }

    if (s.ball) {
      ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(s.ball.x,s.ball.y,s.ball.r,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='rgba(255,215,0,0.6)'; ctx.beginPath(); ctx.arc(s.ball.x-2,s.ball.y-2,s.ball.r*0.4,0,Math.PI*2); ctx.fill();
    }

    if (s.powerup?.alive) {
      ctx.fillStyle='#39ff14'; ctx.fillRect(s.powerup.x-10,s.powerup.y-6,20,12);
      ctx.fillStyle='#0d0620'; ctx.font='6px '+PIXEL_FONT; ctx.textAlign='center';
      ctx.fillText('WIDE',s.powerup.x,s.powerup.y+2);
    }

    if (s.phase==='ready') {
      ctx.fillStyle='rgba(26,10,46,0.75)'; ctx.fillRect(0,H/2-28,W,56);
      ctx.fillStyle='#ffd700'; ctx.font='10px '+PIXEL_FONT; ctx.textAlign='center';
      ctx.fillText('PRESS SPACE OR TAP',W/2,H/2-4);
      ctx.fillStyle='#aaa8d0'; ctx.font='8px '+PIXEL_FONT;
      ctx.fillText('TO LAUNCH BALL',W/2,H/2+14);
    }
    if (s.phase==='gameover') {
      ctx.fillStyle='rgba(26,10,46,0.88)'; ctx.fillRect(0,H/2-44,W,88);
      ctx.fillStyle='#d4001a'; ctx.font='14px '+PIXEL_FONT; ctx.textAlign='center';
      ctx.fillText('GAME OVER',W/2,H/2-12);
      ctx.fillStyle='#ffd700'; ctx.font='8px '+PIXEL_FONT;
      ctx.fillText('SCORE: '+s.score,W/2,H/2+10);
      ctx.fillStyle='#aaa8d0'; ctx.font='7px '+PIXEL_FONT;
      ctx.fillText('CLICK TO PLAY AGAIN',W/2,H/2+28);
    }
    if (s.phase==='win') {
      ctx.fillStyle='rgba(26,10,46,0.88)'; ctx.fillRect(0,H/2-44,W,88);
      ctx.fillStyle='#39ff14'; ctx.font='14px '+PIXEL_FONT; ctx.textAlign='center';
      ctx.fillText('YOU WIN!',W/2,H/2-12);
      ctx.fillStyle='#ffd700'; ctx.font='8px '+PIXEL_FONT;
      ctx.fillText('SCORE: '+s.score,W/2,H/2+10);
      ctx.fillStyle='#aaa8d0'; ctx.font='7px '+PIXEL_FONT;
      ctx.fillText('CLICK TO PLAY AGAIN',W/2,H/2+28);
    }
  }

  function updateGame() {
    const s = stateRef.current;
    if (s.phase !== 'playing') return;
    if (s.ball.stuck) { s.ball.x = s.paddle.x + s.paddle.w/2; return; }

    s.ball.x += s.ball.vx;
    s.ball.y += s.ball.vy;

    if (s.ball.x-s.ball.r < 0) { s.ball.x=s.ball.r; s.ball.vx=Math.abs(s.ball.vx); sfxWall(); }
    if (s.ball.x+s.ball.r > W) { s.ball.x=W-s.ball.r; s.ball.vx=-Math.abs(s.ball.vx); sfxWall(); }
    if (s.ball.y-s.ball.r < 0) { s.ball.y=s.ball.r; s.ball.vy=Math.abs(s.ball.vy); sfxWall(); }

    if (s.ball.y+s.ball.r > H) {
      s.lives--;
      setLives(s.lives);
      sfxLose();
      if (s.lives <= 0) { s.phase='gameover'; setGameState('gameover'); return; }
      s.ball = { x:W/2, y:H-60, vx:3.2, vy:-3.2, r:6, stuck:true };
      s.phase='ready'; setGameState('ready'); return;
    }

    if (s.ball.y+s.ball.r >= s.paddle.y && s.ball.y-s.ball.r <= s.paddle.y+s.paddle.h &&
        s.ball.x >= s.paddle.x-s.ball.r && s.ball.x <= s.paddle.x+s.paddle.w+s.ball.r && s.ball.vy > 0) {
      const hit=(s.ball.x-(s.paddle.x+s.paddle.w/2))/(s.paddle.w/2);
      s.ball.vx=hit*4.5; s.ball.vy=-Math.abs(s.ball.vy);
      const spd=Math.hypot(s.ball.vx,s.ball.vy);
      if (spd>6){s.ball.vx=s.ball.vx/spd*6;s.ball.vy=s.ball.vy/spd*6;}
      if (spd<3){s.ball.vx=s.ball.vx/spd*3.2;s.ball.vy=s.ball.vy/spd*3.2;}
      sfxPaddle();
    }

    s.bricks.forEach((b: any) => {
      if (!b.alive) return;
      if (s.ball.x+s.ball.r>b.x && s.ball.x-s.ball.r<b.x+b.w && s.ball.y+s.ball.r>b.y && s.ball.y-s.ball.r<b.y+b.h) {
        b.alive=false; s.score+=b.pts; setScore(s.score); sfxBrick();
        const oL=(s.ball.x+s.ball.r)-b.x, oR=(b.x+b.w)-(s.ball.x-s.ball.r);
        const oT=(s.ball.y+s.ball.r)-b.y, oB=(b.y+b.h)-(s.ball.y-s.ball.r);
        if (Math.min(oL,oR)<Math.min(oT,oB)) s.ball.vx=-s.ball.vx;
        else s.ball.vy=-s.ball.vy;
        if (!s.powerup && Math.random()<0.12)
          s.powerup={x:b.x+b.w/2,y:b.y+b.h/2,vy:2.5,alive:true};
      }
    });

    if (s.powerup?.alive) {
      s.powerup.y+=s.powerup.vy;
      if (s.powerup.y>H) s.powerup.alive=false;
      if (s.powerup.y+6>=s.paddle.y && s.powerup.x>=s.paddle.x && s.powerup.x<=s.paddle.x+s.paddle.w) {
        s.paddle.w=Math.min(s.paddle.w+30,120); s.powerup.alive=false; sfxPowerup();
      }
    }

    if (s.bricks.every((b: any) => !b.alive)) { s.phase='win'; setGameState('win'); sfxWin(); }
  }

  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      const s = stateRef.current;
      if (s.paddle) s.paddle.x = Math.max(0, Math.min(W-s.paddle.w, e.clientX-r.left-s.paddle.w/2));
    };
    const onTouch = (e: TouchEvent) => {
      e.preventDefault();
      const r = canvas.getBoundingClientRect();
      const s = stateRef.current;
      if (s.paddle) s.paddle.x = Math.max(0, Math.min(W-s.paddle.w, e.touches[0].clientX-r.left-s.paddle.w/2));
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.code==='Space'){e.preventDefault();launch();}
      if (e.code==='ArrowLeft'&&stateRef.current.paddle) stateRef.current.paddle.x=Math.max(0,stateRef.current.paddle.x-20);
      if (e.code==='ArrowRight'&&stateRef.current.paddle) stateRef.current.paddle.x=Math.min(W-stateRef.current.paddle.w,stateRef.current.paddle.x+20);
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('touchmove', onTouch, {passive:false});
    canvas.addEventListener('click', launch);
    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); launch(); }, {passive:false});
    window.addEventListener('keydown', onKey);

    function loop() {
      updateGame();
      drawFrame();
      animRef.current = requestAnimationFrame(loop);
    }
    initGame();
    loop();

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('touchmove', onTouch);
      window.removeEventListener('keydown', onKey);
    };
  }, [started]);

  const toggleMute = () => {
    mutedRef.current = !mutedRef.current;
    setMuted(mutedRef.current);
  };

  return (
    <div style={{ background: '#1a0a2e', borderBottom: '6px solid #d4001a' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '3px solid #333060' }}>
        <span style={{ fontFamily: PIXEL_FONT, fontSize: '10px', color: '#ffd700' }}>SCORE: {score}</span>
        <span style={{ fontFamily: PIXEL_FONT, fontSize: '9px', color: '#aaa8d0' }}>PLAYHOUSE ARCADE</span>
        <span style={{ fontFamily: PIXEL_FONT, fontSize: '10px', color: '#ffd700' }}>LIVES: {lives}</span>
      </div>

      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        style={{ display: 'block', margin: '0 auto', cursor: started ? 'none' : 'default', maxWidth: '100%' }}
      />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '12px 16px', background: '#0d0620', borderTop: '3px solid #333060' }}>
        {!started ? (
          <button
            onClick={() => setStarted(true)}
            style={{ fontFamily: PIXEL_FONT, fontSize: '9px', background: '#d4001a', color: '#ffd700', border: 'none', padding: '10px 20px', cursor: 'pointer', boxShadow: '3px 3px 0 #8b0000', letterSpacing: '1px' }}
          >
            INSERT COIN
          </button>
        ) : (
          <span style={{ fontFamily: PIXEL_FONT, fontSize: '8px', color: '#aaa8d0' }}>
            MOUSE / TOUCH to move &nbsp;|&nbsp; SPACE or CLICK to launch
          </span>
        )}
        {started && (
          <button
            onClick={toggleMute}
            style={{ fontFamily: PIXEL_FONT, fontSize: '8px', background: '#333060', color: muted ? '#d4001a' : '#aaa8d0', border: 'none', padding: '6px 10px', cursor: 'pointer' }}
          >
            SFX: {muted ? 'OFF' : 'ON'}
          </button>
        )}
      </div>
    </div>
  );
}
