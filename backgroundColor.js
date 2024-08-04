let theme = [
  ["#050C9C", "#3572EF", "#3ABEF9", "#a7e6ffbf", "#a7e6ff"],
  ["#468585", "#50B498", "#9CDBA6", "#DEF9C4bf", "#DEF9C4"],
  ["#17153B", "#2E236C", "#433D8B", "#C8ACD6bf", "#C8ACD6"],
  ["#F0A8D0", "#F7B5CA", "#FFC6C6", "#FFEBD4bf", "#FFEBD4"],
  ["#322C2B", "#803D3B", "#AF8260", "#E4C59Ebf", "#E4C59E"],
  ["#352F44", "#5C5470", "#B9B4C7", "#FAF0E6bf", "#FAF0E6"],
  ["#480032", "#DF0054", "#FF8B6A", "#FFD6C2bf", "#FFD6C2"],
  ["#C63D2F", "#E25E3E", "#FF9B50", "#FFBB5Cbf", "#FFBB5C"],
];

let rootVariables = [
  "--gradient-color-1",
  "--gradient-color-2",
  "--gradient-color-3",
  "--player-box-color",
  "--player-box-color-active",
];

let root = document.querySelector(":root");

function changeTheme(themeIdx) {
  rootVariables.forEach((variable, idx) => {
    root.style.setProperty(variable, theme[themeIdx][idx]);
  });
}

// changeTheme(2);

let changeThemeDiv = document.getElementsByClassName("change-theme")[0];

console.log(changeThemeDiv);

// add circles as buttons for the colors in the div (changeTheme)
theme.forEach((color, idx) => {
  let circle = document.createElement("button");
  circle.classList.add("circle");
  circle.style.background = `linear-gradient(45deg, ${color[0]}, ${color[1]}, ${color[2]})`;
  changeThemeDiv.appendChild(circle);

  circle.addEventListener("click", function () {
    changeTheme(idx);
  });
});
