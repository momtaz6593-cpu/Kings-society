export type { Product } from "./shirts";
import { MEN_SHIRTS, BOYS_SHIRTS } from "./shirts";
import { MEN_PANTS, BOYS_PANTS } from "./pants";
import { MEN_SNEAKERS, BOYS_SNEAKERS } from "./sneakers";
import { MEN_JACKETS, BOYS_JACKETS } from "./jackets";
import { MEN_ACCESSORIES, BOYS_ACCESSORIES } from "./accessories";
import { MEN_HOODIES, BOYS_HOODIES } from "./hoodies";

export const MEN_DATA: Record<string, any[]> = {
  shirts: MEN_SHIRTS,
  pants: MEN_PANTS,
  sneakers: MEN_SNEAKERS,
  jackets: MEN_JACKETS,
  accessories: MEN_ACCESSORIES,
  hoodies: MEN_HOODIES,
};

export const BOYS_DATA: Record<string, any[]> = {
  shirts: BOYS_SHIRTS,
  pants: BOYS_PANTS,
  sneakers: BOYS_SNEAKERS,
  jackets: BOYS_JACKETS,
  accessories: BOYS_ACCESSORIES,
  hoodies: BOYS_HOODIES,
};

// 🔍 সার্চের জন্য সব প্রোডাক্টের একটি সম্মিলিত অ্যারে (Single Combined Array)
export const ALL_PRODUCTS = [
  ...MEN_SHIRTS,
  ...BOYS_SHIRTS,
  ...MEN_PANTS,
  ...BOYS_PANTS,
  ...MEN_SNEAKERS,
  ...BOYS_SNEAKERS,
  ...MEN_JACKETS,
  ...BOYS_JACKETS,
  ...MEN_ACCESSORIES,
  ...BOYS_ACCESSORIES,
  ...MEN_HOODIES,
  ...BOYS_HOODIES,
];