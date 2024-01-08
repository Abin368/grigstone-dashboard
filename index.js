const copyIcon = document.getElementById("copy-icon");
const tooltip = document.getElementById("tooltip");

// Show tooltip on hover
copyIcon.addEventListener("mouseenter", function() {
  tooltip.style.display = "block";
});

// Hide tooltip when mouse leaves the icon
copyIcon.addEventListener("mouseleave", function() {
  tooltip.style.display = "none";
});

// Show tooltip on click
copyIcon.addEventListener("click", function() {
  tooltip.style.display = "block";
});

// Hide tooltip when clicking anywhere outside the tooltip
document.addEventListener("click", function(event) {
  if (!tooltip.contains(event.target) && event.target !== copyIcon) {
    tooltip.style.display = "none";
  }
});