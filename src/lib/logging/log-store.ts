export interface LogEntry {
  level: 'info' | 'warn' | 'error';
  message: string;
  timestamp: string;
  meta?: Record<string, unknown>;
}

const logs: LogEntry[] = [];

export function addLog(entry: LogEntry) {
  logs.push(entry);

  if (logs.length > 500) logs.shift();
}

export function getLogs() {
  return logs;
}
