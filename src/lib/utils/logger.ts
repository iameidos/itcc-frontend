import { addLog, LogEntry } from '@/lib/logging/log-store';

export function log(level: LogEntry['level'], message: string, meta?: Record<string, unknown>) {
  const entry: LogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    meta,
  };

  console[level](`[${entry.timestamp}] [${level.toUpperCase()}] ${message}`, meta || '');

  addLog(entry);
}
