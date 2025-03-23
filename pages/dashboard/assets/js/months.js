document.addEventListener("DOMContentLoaded", function () {
  const flexTitles = document.querySelectorAll(".flex-title");

  if (flexTitles) {
    const currentMonth = new Date().getMonth();

    flexTitles.forEach(flexTitle => {
      const selectElement = document.createElement("select");
      selectElement.classList.add("month-select");
  
      for (let i = 0; i < 12; i++) {
        const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(2025, i));
  
        const optionElement = document.createElement("option");
        optionElement.innerText = monthName;
        optionElement.value = i;
  
        if (i === currentMonth) {
          optionElement.selected = true;
        }
  
        selectElement.appendChild(optionElement);
      }
  
      flexTitle.appendChild(selectElement);
    });
  };
});
