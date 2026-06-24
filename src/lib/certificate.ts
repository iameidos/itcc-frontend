import { apiFetch } from './api';

export async function getCertificate(
  nomorSertifikat: string
) {
  const filter = {
    where: {
      nomor_sertifikat: nomorSertifikat,
    },
    include: ['perusahaan', 'iso'],
  };

  const data = await apiFetch(
    `/sertifikats?filter=${encodeURIComponent(
      JSON.stringify(filter)
    )}`
  );

  return data?.[0] ?? null;
}