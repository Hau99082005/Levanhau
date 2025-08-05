"use client";

import Image from "next/image";
import ConfettiEffect from "@/components/Confetti";
import HighlightInfo from "@/components/HightlightInfo";
import { ParticlesBg } from "@/components/ParticlesBg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900 text-center p-8 overflow-hidden">
      {/* Hiệu ứng hoa đào rơi */}
      <ParticlesBg />

      {/* Hiệu ứng confetti */}
      <ConfettiEffect />

      {/* Ảnh avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
      >
        <Image
          src="/images/Le van hau.jpg"
          alt="Lê Văn Hậu"
          width={180}
          height={180}
          className="rounded-full border-4 border-blue-400 shadow-2xl mb-6 ring-4 ring-indigo-500 z-10"
          style={{ boxShadow: "0 0 40px 10px #3b82f6, 0 0 80px 10px #6366f1" }}
        />
      </motion.div>

      {/* Tiêu đề chúc mừng sinh nhật */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        className="text-5xl sm:text-6xl font-extrabold text-blue-400 mb-2 drop-shadow-lg animate-pulse z-10"
        style={{ textShadow: "0 0 20px #6366f1, 0 0 40px #3b82f6" }}
      >
        🎂 Chúc mừng sinh nhật 20 tuổi! 🎉
      </motion.h1>

      {/* Nội dung giới thiệu */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="text-lg sm:text-xl text-gray-200 max-w-2xl font-semibold z-10"
      >
        <strong className="text-blue-300">Lê Văn Hậu</strong>,
        sinh ngày <strong className="text-indigo-300">22/08/2005</strong>,
        hiện đang là sinh viên năm 3 - Chuyên ngành{" "}
        <em className="text-indigo-400">
          Công nghệ thông tin (Ứng dụng phần mềm)
        </em>. Hôm nay là một cột mốc đặc biệt – tuổi 20!
      </motion.p>

      {/* Lời nhắn tuổi 20 */}
      <motion.p
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="mt-4 text-base text-blue-200 italic z-10"
      >
        Tuổi 20 là khởi đầu cho những ước mơ lớn – cùng nhau bước tiếp nào!
      </motion.p>

      {/* Thông tin nổi bật */}
      <HighlightInfo />
    </div>
  );
}