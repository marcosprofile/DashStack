document.addEventListener("DOMContentLoaded", function () {
  const navItems = {
    render: [
      { text: "Dashboard", selected: true },
      { text: "Products" },
      { text: "Favorites" },
      { text: "Inbox" },
      { text: "Order Lists" },
      { text: "Product Stock" }
    ],
    pages: [
      { text: "Pricing" },
      { text: "Calender" },
      { text: "To-do" },
      { text: "Contact" },
      { text: "Invoice" },
      { text: "UI Elements" },
      { text: "Team" },
      { text: "Tablet" }
    ],
    user: [
      { text: "Settings" },
      { text: "Logout" }
    ]
  };

  Object.keys(navItems).forEach(id => {
    const ul = document.getElementById(id);
    if (ul) {
      navItems[id].forEach(item => {
        const li = document.createElement("li");
        li.classList.add("nav-item");

        const a = document.createElement("a");
        a.href = "#";
        a.textContent = item.text;

        if (item.selected) {
          a.classList.add("selected");
        }

        if (item.text === "Logout") {
          a.addEventListener("click", function () {
            window.location.href = "../login/index.html";
          });
        }

        li.appendChild(a);
        ul.appendChild(li);
      });
    }
  });
});
