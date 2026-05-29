import fs from 'fs';
import path from 'path';

export function getSlugsFromFolder(folder: string) {
  const dir = path.join(process.cwd(), 'src/app', folder);

  return fs
    .readdirSync(dir)
    .filter((name) => !name.startsWith('_') && !name.includes('.'))
    .map((name) => name); // slug = folder name
}
