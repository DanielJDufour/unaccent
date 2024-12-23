const test = require("flug");
const unaccent = require("./unaccent.js");

const cases = [
  ["ʻĀhuimanu", "Ahuimanu"],
  ["ʻĀinaloa", "Ainaloa"],
  ["Haʻikū-Pauwela", "Haiku-Pauwela"],
  ["Hāʻōʻū", "Haou"],
  ["Hanapēpē", "Hanapepe"],
  ["Hagåtña", "Hagatna"],
  ["Hīlea", "Hilea"],
  ["Hôtel de la Mer", "Hotel de la Mer"],
  ["Mayagüez", "Mayaguez"],
  ["San José", "San Jose"],
  ["Utqiaġvik", "Utqiagvik"],
  ["ÆDEM", "AEDEM"],
  ["curriculum vitæ", "curriculum vitae"],
  ["Suderø", "Sudero"],
  ["sýsla", "sysla"],
  ["Trongisvágsfjørður", "Trongisvagsfjordur"]
  // ["𝔩", "l"]
];

cases.forEach(([original, expected]) => {
  test(original, ({ eq }) => {
    const actual = unaccent(original);
    eq(actual, expected);
  });
});
