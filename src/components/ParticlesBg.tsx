/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function ParticlesBg() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles-main"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            color: { value: ["#2563eb", "#6366f1", "#0ea5e9", "#334155"] },
            links: { enable: true, color: "#2563eb", opacity: 0.3 },
            move: { enable: true, speed: 1.2 },
            number: { value: 40 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } },
          },
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />
      <Particles
        id="tsparticles-petal"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 40 }, // tăng số lượng
            move: {
              enable: true,
              direction: "bottom",
              speed: { min: 1.2, max: 3.2 }, // tăng tốc độ
              outModes: { default: "out" },
              straight: false,
              random: true,
              gravity: { enable: true, acceleration: 0.06 },
            },
            opacity: { value: 1 },
            size: { value: { min: 24, max: 48 } }, // tăng kích thước
            rotate: {
              value: { min: 0, max: 360 },
              animation: { enable: true, speed: 3, sync: false },
            },
            shape: {
              type: ["polygon", "circle"],
              options: {
                polygon: {
                  sides: 5,
                },
              },
            },
            color: { value: ["#f9a8d4", "#f472b6", "#fbcfe8", "#fda4af", "#fff0f6"] }, // thêm màu sáng
          },
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10, // đảm bảo nổi lên trên
          pointerEvents: "none",
        }}
      />
    </>
  );
}