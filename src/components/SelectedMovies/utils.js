export const addTranslationIntoRussian = (arr) => {
  const newArr = arr.map((item) => {
    if (item.name === "animated-series") {
      item.ruName = "Мультсериал";
    }
    if (item.name === "anime") {
      item.ruName = "Аниме";
    }
    if (item.name === "cartoon") {
      item.ruName = "Мультфильм";
    }
    if (item.name === "movie") {
      item.ruName = "Фильм";
    }
    if (item.name === "tv-series") {
      item.ruName = "Tелесериал";
    }
    return item;
  });

  return newArr;
};
