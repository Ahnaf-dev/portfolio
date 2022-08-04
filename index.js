const toggle = document.querySelector(".toggle");
const sections = document.querySelectorAll("section");

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

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "intro") {
          resetHL();
          document
            .querySelector(".links li:nth-of-type(1) a")
            .classList.add("hl");
        }

        if (entry.target.id === "technologies") {
          resetHL();

          document
            .querySelector(".links li:nth-of-type(2) a")
            .classList.add("hl");
        }
        if (entry.target.id === "projects") {
          resetHL();

          document
            .querySelector(".links li:nth-of-type(3) a")
            .classList.add("hl");
        }
        if (entry.target.id === "about") {
          resetHL();

          document
            .querySelector(".links li:nth-of-type(4) a")
            .classList.add("hl");
        }
        if (entry.target.id === "contact") {
          resetHL();

          document
            .querySelector(".links li:nth-of-type(5) a")
            .classList.add("hl");
        }
        console.log(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

function resetHL() {
  if (document.querySelectorAll(".hl")) {
    document.querySelectorAll(".hl").forEach((link) => {
      link.classList.remove("hl");
    });
  }
}
