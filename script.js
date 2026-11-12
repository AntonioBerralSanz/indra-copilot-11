const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    siteNav.classList.remove("is-open");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

const clockHands = {
  hour: document.querySelector(".clock-hour"),
  minute: document.querySelector(".clock-minute"),
  second: document.querySelector(".clock-second"),
};
const clockFace = document.querySelector(".clock-face");

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  clockHands.hour.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`;
  clockHands.minute.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
  clockHands.second.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
  clockFace.setAttribute("aria-label", `Hora local: ${now.toLocaleTimeString("es-ES")}`);
}

updateClock();
setInterval(updateClock, 1000);
