"use client";

import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

export default function ConfettiEffect() {
  const [width, height] = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={150}
      colors={["#f43f5e", "#2563eb", "#6366f1", "#0ea5e9"]}
      gravity={0.2}
      wind={0.02}
      recycle={false}
      run={true}
      initialVelocityY={{ min: -10, max: 10 }}
      initialVelocityX={{ min: -10, max: 10 }}
    />
  );
}
