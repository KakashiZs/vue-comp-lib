// scripts/dts-mv.ts
// 把 /dist 里的 d.ts 移动到子包本身的 dist 里
import { join } from 'node:path';
import { readdir } from 'node:fs/promises';

/** 以根目录为基础解析路径 */
const fromRoot = (...paths: string[]) => join(__dirname, '..', ...paths);

/** 包的 d.ts 产物目录 */
const PKGS_DTS_DIR = fromRoot('dist/packages');

/** 寻找所有需要移动 dts 的包 */
async function match() {
  const res = await readdir(PKGS_DTS_DIR, { withFileTypes: true });
  return res.filter((item: any) => item.isDirectory()).map((item: any) => item.name);
}

match().then((pkgs: string[]) => {
  console.log(pkgs);
});
