export function genList(i: number): { id: number; name: string }[] {
  return Array.from({ length: i }, (_, k) => ({ id: k + 1, name: `第${k + 1}个数据` }));
}
