"use client";
import React from "react";
import { motion } from "framer-motion";

export function TechStack() {
  const cards = [
    {
      badges: ["MOBILE", "NATIVE"],
      title: "Flutter & Kotlin",
      description:
        "Flutter dipilih sebagai senjata utama guna menghemat waktu dan tenaga lewat pengembangan lintas platform (cross-platform) yang cepat, sedangkan Kotlin tetap diandalkan jika klien memiliki kebutuhan khusus yang menuntut fitur native Android secara optimal.",
      tags: ["Flutter", "Kotlin"],
      color: "blue", // Tema Biru
      bgBase: "bg-blue-50/50",
      bgHover: "bg-blue-100",
      borderColor: "border-blue-100",
      accentColor: "text-blue-600",
      badgeColors: ["bg-blue-500", "bg-blue-300"],
    },
    {
      badges: ["RELATIONAL", "STANDARD"],
      title: "MySQL Database",
      description:
        "Untuk menangani skala database serta tingkat kompleksitas transaksi data klien-klien mereka saat ini, MySQL dinilai masih sangat tangguh, andal, dan efisien. Belum dirasa ada urgensi teknis mendesak untuk berpindah ke database jenis non-relasional lainnya.",
      tags: ["MySQL"],
      color: "amber", // Tema Kuning/Orange
      bgBase: "bg-amber-50/50",
      bgHover: "bg-amber-100",
      borderColor: "border-amber-100",
      accentColor: "text-amber-600",
      badgeColors: ["bg-amber-500", "bg-amber-300"],
    },
    {
      badges: ["SINERGI AI", "100% DUKUNGAN"],
      title: "ChatGPT & VS Code AI",
      description:
        "Alih-alih melarang penggunaan kecerdasan buatan, TMS 100% mendukung penuh pemanfaatan ChatGPT dan ekstensi AI pembantu di VS Code guna mendongkrak kecepatan penulisan boilerplate serta debugging program dengan cepat.",
      tags: ["ChatGPT", "VS Code Extension"],
      color: "purple", // Tema Ungu
      bgBase: "bg-indigo-50/50",
      bgHover: "bg-indigo-100",
      borderColor: "border-indigo-100",
      accentColor: "text-indigo-600",
      badgeColors: ["bg-purple-500", "bg-green-400"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-blue-600 font-bold tracking-widest text-sm mb-2">
          TEKNOLOGI PILIHAN
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
          Tech Stack Pilihan & Sinergi AI
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Keputusan pemilihan teknologi di TMS didasari atas asas efisiensi,
          keandalan, dan optimalisasi pengerjaan proyek klien.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }} // Animasi Scale
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative flex flex-col p-8 rounded-3xl border-2 transition-colors duration-300 cursor-pointer ${item.bgBase} hover:${item.bgHover} ${item.borderColor}`}
          >
            {/* Badges */}
            <div className="flex gap-2 mb-6">
              {item.badges.map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className={`text-[10px] font-bold text-white px-2 py-1 rounded ${item.badgeColors[bIdx]}`}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {item.title}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
              {item.description}
            </p>

            {/* Bottom Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="bg-white border border-slate-200 text-slate-500 text-xs px-3 py-1 rounded-lg shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;