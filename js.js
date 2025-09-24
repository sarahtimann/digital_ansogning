"use strict";

const storedTheme = localStorage.getItem("storedTheme");
console.log("Stored theme: ", storedTheme);

// Funktion som opdaterer knaptekst baseret på det aktuelle tema
function updateButtonText(themeToggle, currentTheme) {
  if (currentTheme === "light" || currentTheme === "") {
    themeToggle.textContent = "Dark mode"; // Skift til mørkt tema
  } else {
    themeToggle.textContent = "Light mode"; // Skift til lyst tema
  }
}

// If-sætning som sørger for at temaet er sat ved sideindlæsning
if (storedTheme) {
  document.body.setAttribute("data-filter", storedTheme); // Sæt tema fra localStorage, enten mørkt eller lyst fra sidste besøg
} else {
  document.body.setAttribute("data-filter", "light"); // Ellers sæt til lyst som standard
}

const themeToggle = document.querySelector("#theme-toggle"); // Tema skifte knap
if (themeToggle) {
  const initialTheme = document.body.getAttribute("data-filter"); // Hent det aktuelle tema
  updateButtonText(themeToggle, initialTheme); // Opdater knaptekst ved indlæsning

  themeToggle.addEventListener("click", function () {
    // Ved klik på knappen
    const currentTheme = document.body.getAttribute("data-filter"); // Hent det aktuelle tema
    let targetTheme; // Variabel til det nye tema

    // Skift mellem lyst og mørkt tema
    if (currentTheme === "light" || currentTheme === "") {
      // Hvis det aktuelle tema er lyst eller tomt
      targetTheme = "dark"; // Skift til mørkt tema
    } else {
      targetTheme = "light"; // Ellers skift til lyst tema
    }

    document.body.setAttribute("data-filter", targetTheme); // Anvend det nye tema
    localStorage.setItem("storedTheme", targetTheme); // Gem det nye tema i localStorage

    updateButtonText(themeToggle, targetTheme); // Opdater knaptekst baseret på temaet

    console.log("Theme changed to:", targetTheme); // Log det nye tema til konsollen
  });
}
