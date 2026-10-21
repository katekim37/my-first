"use server";

import { Resend } from "resend";

export type ContactState = { ok: boolean; message: string } | null;

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // 브라우저 검사를 우회한 요청 대비 서버에서도 한 번 더 확인
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "이름과 올바른 메일주소를 입력해 주세요." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  if (!apiKey || !to) {
    console.error("[contact] RESEND_API_KEY 또는 CONTACT_TO_EMAIL이 비어 있습니다.");
    return { ok: false, message: "지금은 문의를 보낼 수 없습니다. 잠시 후 다시 시도해 주세요." };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `바이브 코딩 연구소 <${from}>`,
    to,
    replyTo: email,
    subject: `[문의] ${name}님의 문의`,
    text: `이름: ${name}\n메일주소: ${email}\n\n${message || "(문의 내용 없음)"}`,
  });

  if (error) {
    console.error("[contact] Resend 전송 실패:", error);
    return { ok: false, message: "전송에 실패했습니다. 잠시 후 다시 시도해 주세요." };
  }

  return { ok: true, message: "문의가 전송되었습니다. 곧 답변드릴게요!" };
}
