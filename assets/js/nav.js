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
      { text: "Table" }
    ],
    user: [
      { text: "Settings" },
      { text: "Logout" }
    ]
  };

  const nav = document.querySelector("nav");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");

  const logoImg = document.createElement("img");
  logoImg.src = "../../assets/img/logo.svg";
  logoImg.alt = "Logo DashStack";

  logoDiv.appendChild(logoImg);
  nav.appendChild(logoDiv);

  function updateSelectedNavItem() {
    const currentPath = window.location.pathname;
    document.querySelectorAll(".nav-item a").forEach(link => {
      if (currentPath.includes(`/${link.textContent.replace(/\s+/g, "").toLowerCase()}/`)) {
        link.classList.add("selected");
      } else {
        link.classList.remove("selected");
      }
    });
  }

  function handleNavClick(event, link) {
    event.preventDefault();

    document.querySelectorAll(".nav-item a").forEach(link => link.classList.remove("selected"));
    link.classList.add("selected");

    window.location.href = link.href;
  }

  Object.keys(navItems).forEach(id => {
    if (id !== "render") {
      const divider = document.createElement("div");
      divider.classList.add("divider");
      nav.appendChild(divider);

      if (id === "pages") {
        const title = document.createElement("h2");
        title.classList.add("title");
        title.textContent = "PAGES";
        nav.appendChild(title);
      }
    }

    const ul = document.createElement("ul");
    ul.classList.add("nav-items");
    ul.id = id;

    navItems[id].forEach(item => {
      const li = document.createElement("li");
      li.classList.add("nav-item");

      const a = document.createElement("a");

      if (item.text === "Logout") {
        a.href = "../login/index.html";
      } else {
        a.href = `../${item.text.replace(/\s+/g, "").toLowerCase()}/index.html`;
      }
      
      a.textContent = item.text;

      li.appendChild(a);
      ul.appendChild(li);

      a.addEventListener("click", (event) => handleNavClick(event, a));
    });

    nav.appendChild(ul);
  });

  updateSelectedNavItem();
});
