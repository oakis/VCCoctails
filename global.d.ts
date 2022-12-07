interface IDrink {
  idDrink: string;
  strDrink: null | string;
  strDrinkAlternate: null | string;
  strTags: null | string;
  strVideo: null | string;
  strCategory: null | string;
  strIBA: null | string;
  strAlcoholic: null | string;
  strGlass: null | string;
  strInstructions: null | string;
  strInstructionsES: null | string;
  strInstructionsDE: null | string;
  strInstructionsFR: null | string;
  strInstructionsIT: null | string;
  "strInstructionsZH-HANS": null | string;
  "strInstructionsZH-HANT": null | string;
  strDrinkThumb: null | string;
  strIngredient1: null | string;
  strIngredient2: null | string;
  strIngredient3: null | string;
  strIngredient4: null | string;
  strIngredient5: null | string;
  strIngredient6: null | string;
  strIngredient7: null | string;
  strIngredient8: null | string;
  strIngredient9: null | string;
  strIngredient10: null | string;
  strIngredient11: null | string;
  strIngredient12: null | string;
  strIngredient13: null | string;
  strIngredient14: null | string;
  strIngredient15: null | string;
  strMeasure1: null | string;
  strMeasure2: null | string;
  strMeasure3: null | string;
  strMeasure4: null | string;
  strMeasure5: null | string;
  strMeasure6: null | string;
  strMeasure7: null | string;
  strMeasure8: null | string;
  strMeasure9: null | string;
  strMeasure10: null | string;
  strMeasure11: null | string;
  strMeasure12: null | string;
  strMeasure13: null | string;
  strMeasure14: null | string;
  strMeasure15: null | string;
  strImageSource: null | string;
  strImageAttribution: null | string;
  strCreativeCommonsConfirmed: null | string;
  dateModified: null | string;
}

interface ISearch {
  drinks: IDrink[];
}
