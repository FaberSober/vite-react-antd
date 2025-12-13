export function genList(i: number): { id: number; name: string }[] {
  return Array.from({ length: i }, (_, k) => ({ id: k + 1, name: `第${k + 1}个数据` }));
}

/**
 * @returns 随机生产长size位的字母[a-z]
 */
export function generateId(size = 8) {
  let str = "";
  for (let i = 0; i < size; i++) {
    const code = Math.floor(Math.random() * 26);
    str += String.fromCharCode("a".charCodeAt(0) + code);
  }
  return str;
}
