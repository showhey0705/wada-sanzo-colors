import { ColorObject, FavoriteColor, FavoriteCombination } from "@/lib/types";

export function createCombinationArray(data: ColorObject[]) {
  let combinationArray = [];
  for (let i = 1; i <= 348; i++) {
    const combination = {
      id: i,
      combination: data?.filter((color) =>
        color.combinations.some((combi) => combi === i)
      ),
    };
    combinationArray.push(combination);
  }
  return combinationArray;
}

export function isColorBright(rgb: number[]) {
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];
  const brightness = Math.sqrt(r * r * 0.241 + g * g * 0.691 + b * b * 0.068);
  if (brightness > 120) {
    return true;
  } else {
    return false;
  }
}

export async function getRemoteFavData() {
  try {
    console.warn("Database not available, using local storage only");
    return {
      favoriteColors: [],
      favoriteCombinations: [],
      updatedAt: new Date()
    };
  } catch (e) {
    console.error(e);
    return {
      favoriteColors: [],
      favoriteCombinations: [],
      updatedAt: new Date()
    };
  }
}

export async function updateDbFavoriteColor(
  favoriteColorsData: FavoriteColor[]
) {
  console.warn("Database not available, changes saved locally only");
  return new Response("OK", { status: 200 });
}

export async function updateDbFavoriteCombi(
  favoriteCombinationsData: FavoriteCombination[]
) {
  console.warn("Database not available, changes saved locally only");
  return new Response("OK", { status: 200 });
}
