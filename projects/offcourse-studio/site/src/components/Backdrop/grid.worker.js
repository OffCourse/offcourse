import { generateGrid as gg, generateElements as ge } from "./helpers";

export async function generateGrid(args) {
  return gg(args);
}
export async function generateElements(args) {
  return ge(args);
}
