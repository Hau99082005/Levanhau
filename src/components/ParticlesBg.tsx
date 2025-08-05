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
      {/* Background network particles */}
      <Particles
        id="tsparticles-main"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            color: { value: ["#2563eb", "#6366f1", "#0ea5e9", "#334155"] },
            links: { 
              enable: true, 
              color: "#2563eb", 
              opacity: 0.3,
              distance: 150,
              width: 1
            },
            move: { 
              enable: true, 
              speed: 1.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce"
            },
            number: { value: 40 },
            opacity: { 
              value: 0.5,
              animation: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
              }
            },
            shape: { type: "circle" },
            size: { 
              value: { min: 2, max: 5 },
              animation: {
                enable: true,
                speed: 2,
                size_min: 1,
                sync: false
              }
            },
          },
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />
      
      {/* Enhanced petal particles */}
      <Particles
        id="tsparticles-petal"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { 
              value: 25,
              density: {
                enable: true,
                value_area: 800
              }
            },
            move: {
              enable: true,
              direction: "bottom",
              speed: { min: 0.8, max: 2.5 },
              outModes: { 
                default: "out",
                bottom: "out",
                left: "bounce-horizontal",
                right: "bounce-horizontal"
              },
              straight: false,
              random: true,
              gravity: { 
                enable: true, 
                acceleration: 0.04,
                maxSpeed: 3
              },
           
            },
            opacity: { 
              value: { min: 0.6, max: 0.9 },
              animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
              }
            },
            size: { 
              value: { min: 18, max: 35 },
              animation: {
                enable: true,
                speed: 0.5,
                size_min: 15,
                sync: false
              }
            },
            rotate: {
              value: { min: 0, max: 360 },
              animation: { 
                enable: true, 
                speed: { min: 1, max: 4 }, 
                sync: false 
              },
            },
            shape: {
              type: ["polygon", "star", "circle"],
              options: {
                polygon: {
                  sides: { min: 5, max: 6 },
                },
                star: {
                  sides: { min: 5, max: 8 },
                  inset: 2
                }
              },
            },
            color: { 
              value: [
                "#fce7f3", // light pink
                "#fbcfe8", // pink-200
                "#f9a8d4", // pink-300
                "#f472b6", // pink-400
                "#ec4899", // pink-500
                "#e879f9", // fuchsia-400
                "#c084fc", // purple-400
                "#a78bfa", // violet-400
                "#93c5fd", // blue-300
                "#bfdbfe"  // blue-200
              ]
            },
            stroke: {
              width: { min: 0, max: 2 },
              color: {
                value: ["#ffffff", "#f8fafc"]
              }
            },
            shadow: {
              enable: true,
              color: "#000000",
              blur: 5,
              offset: {
                x: 1,
                y: 2
              }
            },
            life: {
              duration: {
                sync: false,
                value: { min: 3, max: 8 }
              },
              count: 0,
              delay: {
                random: {
                  enable: true,
                  minimumValue: 0.5
                },
                value: 1
              }
            }
          },
          emitters: {
            direction: "bottom",
            life: {
              count: 0,
              duration: 0.1,
              delay: 2
            },
            rate: {
              delay: 0.3,
              quantity: 2
            },
            size: {
              width: 100,
              height: 0
            },
            position: {
              x: { min: 0, max: 100 },
              y: -5
            }
          }
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      
      {/* Sparkle particles for extra magic */}
      <Particles
        id="tsparticles-sparkle"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 15 },
            move: {
              enable: true,
              direction: "none",
              speed: 0.3,
              random: true,
              straight: false,
              outModes: { default: "bounce" }
            },
            opacity: { 
              value: { min: 0.1, max: 0.8 },
              animation: {
                enable: true,
                speed: 3,
                opacity_min: 0,
                sync: false
              }
            },
            size: { 
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 5,
                size_min: 0.5,
                sync: false
              }
            },
            shape: { type: "star" },
            color: { 
              value: ["#ffffff", "#fbbf24", "#f59e0b", "#fde047"]
            },
            life: {
              duration: {
                sync: false,
                value: { min: 1, max: 3 }
              },
              count: 0
            }
          }
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
    </>
  );
}