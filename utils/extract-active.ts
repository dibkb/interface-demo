export function extractActivepath(pathname: string) {
  const arr = pathname.split("/");
  let idx = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] === "home") {
      idx = i + 1;
      break;
    }
  }
  return arr[idx];
}
