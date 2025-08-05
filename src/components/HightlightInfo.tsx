"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HighlightInfo() {
  const listItems = [
    {
      content: "🎓 GPA: 3.86/4.0 – Học lực xuất sắc tại Hue Industrial College.",
    },
    {
      content:
        "👨‍💻 Dự án tiêu biểu: Enbesu.vn, Shopee Clone, E-Commerce tích hợp AI.",
    },
    {
      content:
        "⚙️ Công nghệ: React.js, Next.js, TypeScript, Laravel, MongoDB, Firebase, Stripe, PayPal, Cloudinary,...",
    },
    {
      content:
        "🏆 Giải thưởng: Học bổng học kỳ 2 (2025), tham gia cuộc thi HUEIC ROBOTCON.",
    },
    {
      content:
        "📜 Chứng chỉ: Python – Koreatech, AI SaaS, React+Laravel, Next.js+Firebase – Udemy.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
      className="mt-10 bg-black/40 backdrop-blur-md rounded-xl p-6 text-white max-w-3xl w-full shadow-lg"
    >
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="text-2xl font-bold text-blue-300 mb-4"
      >
        🌟 Thông tin nổi bật
      </motion.h2>
      <ul className="text-left list-disc list-inside space-y-2 text-sm sm:text-base">
        {listItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
          >
            <strong>{item.content.split(":")[0]}:</strong>
            {item.content.split(":")[1]}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}