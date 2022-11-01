const toggle = document.querySelector(".toggle");
const sections = document.querySelectorAll("section");
const header = document.querySelector("header");
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 400,
  grabCursor: true,
});

const form = document.forms[0];
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("active");
  document.querySelector("section#intro .center").classList.toggle("moved");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const params = {
    from_name: document.querySelector("input#name").value,
    email_id: document.querySelector("input#email").value,
    message: document.querySelector("textarea#message").value,
  };

  await emailjs.send("service_ufui1ur", "template_6emjt3b", params);

  document.querySelector(".success").style.display = "block";
  setTimeout(() => {
    document.querySelector(".success").style.display = "none";
  }, 3000);
  document.querySelector("input#name").value = "";
  document.querySelector("input#email").value = "";
  document.querySelector("textarea#message").value = "";
});

// header

let prevY;
window.addEventListener("scroll", (e) => {
  let y = window.pageYOffset;

  if (prevY > y) {
    header.classList.add("up");
    header.classList.remove("down");
  } else {
    header.classList.remove("up");
    header.classList.add("down");
  }

  prevY = y;
});
