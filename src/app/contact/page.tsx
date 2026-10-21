import Link from "next/link";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#EFD9CE] via-[#f7e8e1] to-[#DEC0F1] p-4 sm:p-8 overflow-hidden font-sans">
      {/* 배경 장식 블러 구체 (메인 페이지와 동일) */}
      <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-[#B79CED]/35 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#DEC0F1]/50 blur-3xl pointer-events-none" />

      {/* 문의 카드 */}
      <main className="relative z-10 flex w-full max-w-lg flex-col items-center gap-8 py-12 px-6 sm:px-12 bg-white/75 backdrop-blur-xl border border-white/70 rounded-3xl shadow-2xl shadow-[#957FEF]/15 my-8">
        <div className="flex flex-col items-center gap-2 text-center break-keep">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#957FEF] via-[#856EE0] to-[#B79CED] bg-clip-text text-transparent">
              문의하기
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#6B5B82]">
            이름과 메일주소를 남겨 주시면 답변드릴게요.
          </p>
        </div>

        <ContactForm />

        <Link
          href="/"
          className="text-sm font-semibold text-[#957FEF] hover:text-[#7D64E6] underline underline-offset-4 decoration-[#B79CED]/70"
        >
          처음으로 돌아가기
        </Link>
      </main>
    </div>
  );
}
