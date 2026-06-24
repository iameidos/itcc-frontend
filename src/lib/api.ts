const API_URL = process.env.API_URL;

export async function apiFetch(
  endpoint: string,
  options?: RequestInit
) {
  const res = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}