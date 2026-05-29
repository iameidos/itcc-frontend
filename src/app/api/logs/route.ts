import { NextResponse } from 'next/server';
import { getLogs } from '@/lib/logging/log-store';

export async function GET() {
  const logs = getLogs();

  return NextResponse.json({
    total: logs.length,
    logs,
  });
}
