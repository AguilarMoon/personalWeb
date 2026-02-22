
      // Función para cambiar entre modos
      function toggleTheme() {
        const body = document.body;
        const themeText = document.getElementById("theme-text");

        body.classList.toggle("formal-mode");

        if (body.classList.contains("formal-mode")) {
          themeText.textContent = "MODO TRON";
          localStorage.setItem("theme", "formal");
        } else {
          themeText.textContent = "MODO FORMAL";
          localStorage.setItem("theme", "tron");
        }
      }

      // Cargar tema guardado
      window.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme");
        const body = document.body;
        const themeText = document.getElementById("theme-text");

        if (savedTheme === "formal") {
          body.classList.add("formal-mode");
          themeText.textContent = "MODO TRON";
        }
      });

      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Efecto de parpadeo de neón
      const neonTitles = document.querySelectorAll(".neon-text, .seccion h2");

      setInterval(() => {
        const randomTitle =
          neonTitles[Math.floor(Math.random() * neonTitles.length)];
        randomTitle.style.animation = "none";
        setTimeout(() => {
          randomTitle.style.animation = "";
        }, 100);
      }, 3000);
