"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border-2 border-[#DEC0F1] bg-white/90 px-4 py-3 text-[#2E1E4A] placeholder:text-[#6B5B82]/60 focus:border-[#957FEF] focus:outline-none transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="w-full rounded-2xl bg-[#DEC0F1]/30 border border-[#B79CED]/50 p-6 text-center">
        <p className="font-bold text-[#2E1E4A]">입력해 주셔서 감사합니다!</p>
        {/* 아직 실제 전송 기능은 연결되지 않음 */}
        <p className="mt-2 text-sm text-[#6B5B82]">
          문의 전송 기능은 준비 중입니다.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex w-full flex-col gap-5 text-left"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-[#2E1E4A]">
          이름 <span className="text-[#957FEF]">*</span>
        </span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="홍길동"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-[#2E1E4A]">
          메일주소 <span className="text-[#957FEF]">*</span>
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="example@email.com"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-[#2E1E4A]">문의 내용</span>
        <textarea
          name="message"
          rows={5}
          placeholder="궁금한 점을 자유롭게 적어 주세요."
          className={`${inputClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="mt-2 flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#957FEF] to-[#B79CED] px-7 text-white font-semibold text-sm shadow-lg shadow-[#957FEF]/30 hover:shadow-[#957FEF]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
      >
        보내기
      </button>
    </form>
  );
}
