function unaccent(str) {
  const translations = [
    ["ï", "i"],
    ["ü", "u"],
    ["ß", "ss"],

    // A
    ["À", "A"],
    ["Â", "A"],
    ["Ā", "A"],
    ["Á", "A"],
    ["Ã", "A"],
    ["Ä", "A"],
    ["Å", "A"],
    ["Æ", "AE"],
    ["å", "a"],
    ["ā", "a"],
    ["á", "a"],
    ["ã", "a"],
    ["ä", "a"],
    ["â", "a"],
    ["ą", "a"],
    ["à", "a"],
    ["æ", "ae"],
    ["ă", "a"],

    ["ç", "c"],
    ["ć", "c"],
    ["č", "c"],

    ["Ð", "D"],
    ["đ", "d"],
    ["é", "e"],
    ["ê", "e"],
    ["ë", "e"],
    ["ě", "e"],
    ["è", "e"],
    ["ē", "e"],
    ["ə", "e"],

    // g
    ["ġ", "g"],
    ["ğ", "g"],
    ["ģ", "g"],

    ["ẖ", "h"],
    ["ı", "i"],
    ["ī", "i"],
    ["î", "i"],
    ["í", "i"],
    ["í", "i"],
    ["ì", "i"],
    ["ì", "i"],
    ["j", "j"],
    ["ĺ", "l"],
    ["ł", "l"],
    ["ľ", "l"],
    ["ļ", "l"],
    ["ń", "n"],
    ["ñ", "n"],
    ["ŋ", "n"],
    ["ň", "n"],
    ["ņ", "n"],
    ["ø", "o"],
    ["õ", "o"],
    ["ô", "o"],
    ["ö", "o"],
    ["ō", "o"],
    ["ó", "o"],
    ["ổ", "o"],
    ["ò", "o"],
    ["ð", "d"],
    ["ř", "r"],
    ["ș", "s"],
    ["š", "s"],
    ["ş", "s"],
    ["ț", "t"],
    ["ť", "t"],
    ["ţ", "t"],
    ["ṯ", "t"],
    ["ţ", "t"],
    ["ū", "u"],
    ["ű", "u"],
    ["ŭ", "u"],
    ["ý", "y"],
    ["ż", "z"],
    ["ž", "z"],
    ["ź", "z"],

    // remove single apostrophes
    ["'", ""],
    ["ʻ", ""]
  ];

  for (let i = 0; i < translations.length; i++) {
    const pair = translations[i];
    const _from = pair[0];
    const _to = pair[1];

    str = str.replace(new RegExp(_from, "g"), _to);
  }

  return str;
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return unaccent;
  });
}

if (typeof module === "object") {
  module.exports = unaccent;
  module.exports.default = unaccent;
}

if (typeof self === "object") {
  self.unaccent = unaccent;
}

if (typeof window === "object") {
  window.unaccent = unaccent;
}
