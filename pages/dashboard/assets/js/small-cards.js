document.addEventListener("DOMContentLoaded", function () {
  const smallCardsContainer = document.querySelector(".small-cards");
  const cardsData = [
    { title: "Total User", value: "40,689", icon: "icon-purple.svg", trend: "8.5%", trendText: "Up from yesterday", trendClass: "up", graph: "graph-up.svg", color: "purple" },
    { title: "Total Order", value: "10,293", icon: "icon-yellow.svg", trend: "1.3%", trendText: "Up from past week", trendClass: "up", graph: "graph-up.svg", color: "yellow" },
    { title: "Total Sales", value: "$89,000", icon: "icon-green.svg", trend: "4.3%", trendText: "Down from yesterday", trendClass: "down", graph: "graph-down.svg", color: "green" },
    { title: "Total Pending", value: "2,040", icon: "icon-orange.svg", trend: "1.8%", trendText: "Up from yesterday", trendClass: "up", graph: "graph-up.svg", color: "orange" }
  ];

  if (smallCardsContainer) {
    cardsData.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      cardElement.innerHTML = `
        <div class="top">
          <div class="left">
            <h3>${card.title}</h3>
            <h2>${card.value}</h2>
          </div>
          <div class="icon ${card.color}">
            <img src="../../assets/img/${card.icon}" alt="Icon ${card.color}">
          </div>
        </div>
        <div class="bottom">
          <img src="../../assets/img/${card.graph}" alt="Graph">
          <p><span class="${card.trendClass}">${card.trend}</span> ${card.trendText}</p>
        </div>
      `;

      smallCardsContainer.appendChild(cardElement);
    });
  }
});
