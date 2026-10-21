import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#EFD9CE] via-[#f7e8e1] to-[#DEC0F1] p-4 sm:p-8 overflow-hidden font-sans">
      {/* 배경 장식 블러 구체 (앰비언트 글로우) */}
      <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-[#B79CED]/35 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#DEC0F1]/50 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-60 h-60 rounded-full bg-[#EFD9CE]/60 blur-2xl pointer-events-none" />

      {/* 메인 카드 컨테이너 */}
      <main className="relative z-10 flex flex-1 w-full max-w-2xl flex-col items-center justify-between py-16 px-8 sm:px-14 bg-white/75 backdrop-blur-xl border border-white/70 rounded-3xl shadow-2xl shadow-[#957FEF]/15 text-center my-8">
        
        {/* Next.js 로고 */}
        <div className="flex items-center justify-center mb-8">
          <Image
            className="h-6 w-auto drop-shadow-sm opacity-90"
            src="/next.svg"
            alt="Next.js logo"
            width={110}
            height={24}
            priority
          />
        </div>

        {/* 텍스트 콘텐츠 영역 */}
        <div className="flex flex-col items-center gap-6 w-full max-w-lg">
          {/* 바이브 코딩 배지 (Mauve & Wisteria 포인트) */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#DEC0F1]/45 text-[#4A2D82] border border-[#B79CED]/50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#957FEF] animate-ping" />
            바이브 코딩이 어려운가요?
          </span>

          {/* 제목: 3줄 가운데 정렬 & 포인트 그라데이션 */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-center break-keep">
            <span className="bg-gradient-to-r from-[#957FEF] via-[#856EE0] to-[#B79CED] bg-clip-text text-transparent">
              방가방가,
            </span>
            <br />
            <span className="text-[#2E1E4A]">
              오늘도
              <br />
              <span className="bg-gradient-to-r from-[#957FEF] via-[#856EE0] to-[#B79CED] bg-clip-text text-transparent">
                화이팅
              </span>
              입니다!
            </span>
          </h1>

          {/* 제목 아래 원형 사진 */}
          <div className="my-2 p-1.5 rounded-full bg-gradient-to-tr from-[#EFD9CE] via-[#B79CED] to-[#957FEF] shadow-xl shadow-[#957FEF]/25 hover:scale-105 transition-transform duration-300">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/puppy.jpg"
                alt="강아지 사진"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 128px, 144px"
                priority
              />
            </div>
          </div>

          {/* 본문 텍스트 (조화로운 딥 퍼플/뮤트 텍스트 컬러) */}
          <p className="text-base sm:text-lg leading-relaxed text-[#6B5B82]">
            바이브 코딩 여러분도 할 수 있습니다
          </p>
        </div>

        {/* 버튼 영역 (Soft Periwinkle & Wisteria 포인트 컬러) */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto justify-center">
          <a
            className="flex h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#957FEF] to-[#B79CED] px-7 text-white font-semibold text-sm shadow-lg shadow-[#957FEF]/30 hover:shadow-[#957FEF]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border-2 border-[#B79CED] bg-white/80 px-7 text-[#2E1E4A] font-semibold text-sm hover:bg-[#DEC0F1]/25 hover:border-[#957FEF] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

        {/* 색상 팔레트 안내 칩 (참조된 4가지 색상) */}
        <div className="mt-12 pt-6 border-t border-[#DEC0F1]/50 flex flex-wrap items-center justify-center gap-3 text-xs text-[#6B5B82]">
          <span className="font-medium mr-1">Applied Palette:</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#EFD9CE]/60 text-[#4A2D82] font-mono font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EFD9CE] border border-black/10 inline-block" />
            #EFD9CE
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#DEC0F1]/50 text-[#4A2D82] font-mono font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DEC0F1] inline-block" />
            #DEC0F1
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#B79CED]/30 text-[#4A2D82] font-mono font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B79CED] inline-block" />
            #B79CED
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#957FEF]/20 text-[#2E1E4A] font-mono font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#957FEF] inline-block" />
            #957FEF
          </span>
        </div>
      </main>
    </div>
  );
}
