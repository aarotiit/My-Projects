// Event listeners for the navigation toggle button //

document.addEventListener("DOMContentLoaded", function () {
  const buttonToggle = document.getElementById("menu-toggle");
  const navigation = document.getElementById("primary-navigation");

  buttonToggle.addEventListener("click", function () {
    // Toggle visibility class //
    navigation.classList.toggle("open");

    // Updating aria-expanded for accessibility //
    const expanded =
      buttonToggle.getAttribute("aria-expanded") === "true" || false;
    buttonToggle.setAttribute("aria-expanded", !expanded);

    // Updating the button label //

    buttonToggle.setAttribute(
      "aria-label",
      expanded ? "Open menu" : "Close menu"
    );
  });
});
