function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const service = card.getAttribute("data-service").toLowerCase();
    const location = card.getAttribute("data-location").toLowerCase();

    if (service.includes(input) || location.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

