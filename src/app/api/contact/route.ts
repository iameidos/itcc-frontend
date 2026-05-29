import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, token } = body;

    if (!token) {
      return NextResponse.json({ error: 'Token reCAPTCHA tidak ditemukan' }, { status: 400 });
    }

    // Verifikasi token ke Google
    const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const result = await verify.json();

    if (!result.success || result.score < 0.5) {
      return NextResponse.json({ error: 'Verifikasi reCAPTCHA gagal' }, { status: 400 });
    }

    // TODO: Kirim email atau simpan ke database
    // Contoh:
    // await sendEmail({ name, email, phone, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Terjadi kesalahan server' }, { status: 500 });
  }
}
