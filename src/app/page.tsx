"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

// Component ParticlesBg
const ParticlesBg = () => {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; speed: number }[]
  >([]); // <-- thêm kiểu dữ liệu cho state

  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-pink-300 rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.speed + 3}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </>
  );
};

// Component ConfettiEffect
const ConfettiEffect = () => {
  const [confetti, setConfetti] = useState<
    {
      id: number;
      x: number;
      y: number;
      color: string;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
    }[]
  >([]); // <-- thêm kiểu dữ liệu cho state

  useEffect(() => {
    const confettiArray = [];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    
    for (let i = 0; i < 100; i++) {
      confettiArray.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 2,
        speedY: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }
    setConfetti(confettiArray);
  }, []);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              transform: `rotate(${piece.rotation}deg)`,
              animation: `confettiFall 3s linear infinite`,
              animationDelay: `${piece.id * 0.02}s`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes confettiFall {
          to {
            transform: translateY(100vh) rotate(720deg);
          }
        }
      `}</style>
    </>
  );
};

// Component HighlightInfo
const HighlightInfo = () => {
  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-indigo-800/30 to-blue-800/30 rounded-xl backdrop-blur-sm border border-blue-400/30 max-w-lg mx-auto z-10 relative">
      <h3 className="text-xl font-bold text-yellow-300 mb-3">🌟 Thông tin nổi bật</h3>
      <ul className="text-blue-200 space-y-2">
        <li>🎓 Sinh viên IT năm 3</li>
        <li>💻 Chuyên ngành Ứng dụng phần mềm</li>
        <li>🎂 Tuổi 20 - Khởi đầu mới</li>
        <li>⭐ Đam mê công nghệ</li>
      </ul>
    </div>
  );
};

// Component Con rồng thực tế
const DragonAnimation = () => {
  return (
    <>
      <div
        className="absolute pointer-events-none z-30"
        style={{
          left: "50%",
          top: "50%",
          width: 400,
          height: 400,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 120,
            height: 120,
            transform: "translate(-50%, -50%)",
            animation: "dragonFly 15s linear infinite",
            transformOrigin: "50% 50%",
          }}
        >
          {/* SVG con rồng thực tế */}
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <defs>
              <filter id="dragonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="dragonBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:"#dc2626", stopOpacity:1}} />
                <stop offset="50%" style={{stopColor:"#b91c1c", stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"#991b1b", stopOpacity:1}} />
              </linearGradient>
              <linearGradient id="dragonWing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:"#7c2d12", stopOpacity:0.8}} />
                <stop offset="100%" style={{stopColor:"#431407", stopOpacity:0.9}} />
              </linearGradient>
            </defs>
            
            {/* Cánh rồng phía sau */}
            <path
              d="M40 30 Q25 20 15 35 Q20 50 35 45 Q45 40 40 30"
              fill="url(#dragonWing)"
              stroke="#451a03"
              strokeWidth="1"
              opacity="0.7"
              style={{
                animation: "wingFlap 0.5s ease-in-out infinite alternate"
              }}
            />
            <path
              d="M80 30 Q95 20 105 35 Q100 50 85 45 Q75 40 80 30"
              fill="url(#dragonWing)"
              stroke="#451a03"
              strokeWidth="1"
              opacity="0.7"
              style={{
                animation: "wingFlap 0.5s 0.1s ease-in-out infinite alternate"
              }}
            />
            
            {/* Thân rồng chính */}
            <ellipse
              cx="60"
              cy="60"
              rx="25"
              ry="12"
              fill="url(#dragonBodyGrad)"
              stroke="#7f1d1d"
              strokeWidth="1"
              filter="url(#dragonGlow)"
            />
            
            {/* Cổ và đầu rồng */}
            <ellipse
              cx="60"
              cy="40"
              rx="15"
              ry="8"
              fill="url(#dragonBodyGrad)"
              stroke="#7f1d1d"
              strokeWidth="1"
            />
            
            <ellipse
              cx="60"
              cy="28"
              rx="12"
              ry="6"
              fill="url(#dragonBodyGrad)"
              stroke="#7f1d1d"
              strokeWidth="1"
            />
            
            {/* Mắt rồng */}
            <ellipse cx="58" cy="26" rx="2" ry="2" fill="#fef3c7" />
            <ellipse cx="58" cy="26" rx="1" ry="1" fill="#dc2626" />
            <ellipse cx="62" cy="26" rx="2" ry="2" fill="#fef3c7" />
            <ellipse cx="62" cy="26" rx="1" ry="1" fill="#dc2626" />
            
            {/* Sừng rồng */}
            <path
              d="M55 22 L53 15 L57 18 Z"
              fill="#fbbf24"
              stroke="#92400e"
              strokeWidth="0.5"
            />
            <path
              d="M65 22 L67 15 L63 18 Z"
              fill="#fbbf24"
              stroke="#92400e"
              strokeWidth="0.5"
            />
            
            {/* Mũi và miệng */}
            <ellipse cx="60" cy="32" rx="4" ry="2" fill="#7f1d1d" />
            <path
              d="M56 32 Q60 34 64 32"
              stroke="#451a03"
              strokeWidth="1"
              fill="none"
            />
            
            {/* Đuôi rồng */}
            <path
              d="M35 60 Q20 65 15 75 Q18 80 25 75 Q30 70 35 60"
              fill="url(#dragonBodyGrad)"
              stroke="#7f1d1d"
              strokeWidth="1"
            />
            <path
              d="M85 60 Q100 65 105 75 Q102 80 95 75 Q90 70 85 60"
              fill="url(#dragonBodyGrad)"
              stroke="#7f1d1d"
              strokeWidth="1"
            />
            
            {/* Chân rồng */}
            <ellipse cx="50" cy="70" rx="4" ry="8" fill="url(#dragonBodyGrad)" />
            <ellipse cx="70" cy="70" rx="4" ry="8" fill="url(#dragonBodyGrad)" />
            
            {/* Móng vuốt */}
            <path d="M48 76 L46 80 M50 76 L48 80 M52 76 L54 80" stroke="#451a03" strokeWidth="1" strokeLinecap="round"/>
            <path d="M68 76 L66 80 M70 76 L68 80 M72 76 L74 80" stroke="#451a03" strokeWidth="1" strokeLinecap="round"/>
            
            {/* Hơi thở lửa */}
            <g style={{ animation: "breatheFire 1s ease-in-out infinite alternate" }}>
              <path
                d="M45 30 Q35 25 25 30 Q30 35 35 33 Q40 31 45 30"
                fill="rgba(248,113,113,0.6)"
              />
              <path
                d="M42 32 Q32 27 22 32 Q27 37 32 35 Q37 33 42 32"
                fill="rgba(251,146,60,0.8)"
              />
              <path
                d="M40 34 Q30 29 20 34 Q25 39 30 37 Q35 35 40 34"
                fill="rgba(254,240,138,0.9)"
              />
            </g>
            
            {/* Chi tiết vảy trên thân */}
            <g opacity="0.3">
              <ellipse cx="55" cy="55" rx="2" ry="1" fill="#451a03" />
              <ellipse cx="65" cy="58" rx="2" ry="1" fill="#451a03" />
              <ellipse cx="60" cy="62" rx="2" ry="1" fill="#451a03" />
              <ellipse cx="52" cy="65" rx="2" ry="1" fill="#451a03" />
              <ellipse cx="68" cy="65" rx="2" ry="1" fill="#451a03" />
            </g>
          </svg>
        </div>
      </div>
      <style jsx>{`
        @keyframes dragonFly {
          0% {
            transform: rotate(0deg) translate(170px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translate(170px) rotate(-360deg);
          }
        }
        @keyframes wingFlap {
          0% { transform: rotateY(0deg) scaleX(1); }
          100% { transform: rotateY(20deg) scaleX(0.8); }
        }
        @keyframes breatheFire {
          0% { opacity: 0.4; transform: scale(0.8); }
          100% { opacity: 0.9; transform: scale(1.2); }
        }
      `}</style>
    </>
  );
};

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900 text-center p-8 overflow-hidden">
        {/* Hiệu ứng hoa đào rơi */}
        <ParticlesBg />

        {/* Hiệu ứng confetti */}
        <ConfettiEffect />

        {/* Ảnh avatar */}
        <div className="relative flex items-center justify-center mb-6">
          {/* Vòng tỏa sáng vàng nhiều lớp */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 240 + i * 30,
                height: 240 + i * 30,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: `radial-gradient(circle, rgba(253,224,71,${0.25 - i * 0.03}) 0%, rgba(253,224,71,${0.15 - i * 0.02}) 70%, transparent 100%)`,
                zIndex: 1,
                filter: `blur(${2 + i}px)`,
                animation: `pulse ${2 + i * 0.5}s ease-in-out infinite alternate`,
              }}
            />
          ))}

          {/* Nhiều sparkle vàng lấp lánh */}
          {[...Array(48)].map((_, i) => {
            const layer = Math.floor(i / 16);
            const count = 16;
            const angle = ((i % count) / count) * 2 * Math.PI + (layer === 1 ? Math.PI / count : layer === 2 ? Math.PI / (count * 2) : 0);
            const radius = 120 + (i % 3) * 20 + layer * 25;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={i + "sparkle"}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  width: 18 + (i % 4) * 3,
                  height: 18 + (i % 4) * 3,
                  zIndex: 2,
                  pointerEvents: "none",
                  filter: "drop-shadow(0 0 12px #fde047)",
                  animation: `twinkle ${1.2 + (i % 3) * 0.3}s ${(i * 0.1).toFixed(2)}s infinite alternate`,
                }}
              >
                <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                  <g>
                    <polygon
                      points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8"
                      fill="#fde047"
                      opacity="0.9"
                    />
                    <polygon
                      points="10,2 11,8 18,10 11,12 10,18 9,12 2,10 9,8"
                      fill="#fff"
                      opacity="0.6"
                    />
                  </g>
                </svg>
              </div>
            );
          })}

          {/* Avatar - Ảnh đại diện cho bạn */}
          <div
            className="z-10 transform transition-all duration-300 hover:scale-110 hover:rotate-3"
            style={{
              animation: "avatarFloat 3s ease-in-out infinite",
            }}
          >
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center border-4 border-blue-300 shadow-2xl ring-4 ring-indigo-400 overflow-hidden"
                 style={{
                   boxShadow: "0 0 50px 15px #3b82f6, 0 0 100px 20px #6366f1",
                 }}>
              {/* Avatar với ảnh thật hoặc initials */}
              <Image
                src="/images/Le van hau.jpg" 
                alt="Lê Văn Hậu" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = 'none';
                  if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                    (img.nextSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              width={192}
              height={192}
              />
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-6xl font-bold text-white" style={{display: 'none'}}>
                LVH
              </div>
            </div>
          </div>
        </div>

        {/* Con rồng bay quanh avatar */}
        <DragonAnimation />

        {/* Tiêu đề */}
        <h1
          className="text-5xl sm:text-6xl font-extrabold text-blue-400 mb-2 drop-shadow-lg z-10 relative"
          style={{ 
            textShadow: "0 0 20px #6366f1, 0 0 40px #3b82f6",
            animation: "titlePulse 2s ease-in-out infinite alternate"
          }}
        >
          🎂 Chúc mừng sinh nhật 20 tuổi! 🎉
        </h1>

        {/* Nội dung giới thiệu */}
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl font-semibold z-10 relative transform transition-all duration-300 hover:scale-105">
          <strong className="text-blue-300">Lê Văn Hậu</strong>, sinh ngày{" "}
          <strong className="text-indigo-300">22/08/2005</strong>, hiện đang là
          sinh viên năm 3 - Chuyên ngành{" "}
          <em className="text-indigo-400">Công nghệ thông tin (Ứng dụng phần mềm)</em>. Hôm nay là một cột mốc đặc biệt – tuổi 20!
        </p>

        {/* Lời nhắn */}
        <p className="mt-4 text-base text-blue-200 italic z-10 relative transform transition-all duration-300 hover:scale-105">
          Tuổi 20 là khởi đầu cho những ước mơ lớn – cùng nhau bước tiếp nào!
        </p>

        {/* Info nổi bật */}
        <HighlightInfo />
      </div>

      {/* Global CSS Animations */}
      <style jsx>{`
        @keyframes avatarFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes titlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes twinkle {
          0% { opacity: 0.8; transform: scale(1) rotate(0deg); }
          100% { opacity: 0.3; transform: scale(1.3) rotate(180deg); }
        }
      `}</style>
    </>
  );
}