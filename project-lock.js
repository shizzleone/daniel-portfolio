(function () {
  const password = "Daniel2026";
  const storageKey = "daniel-projects-unlocked";
  const unlocked = sessionStorage.getItem(storageKey) === "true";

  document.documentElement.classList.add("project-lock-active");

  function unlock() {
    sessionStorage.setItem(storageKey, "true");
    document.documentElement.classList.remove("project-lock-active");
    const gate = document.querySelector(".project-gate");
    if (gate) gate.remove();
  }

  function buildGate() {
    const gate = document.createElement("section");
    gate.className = "project-gate";
    gate.innerHTML = `
      <div class="project-gate-card">
        <a class="logo" href="./">DJ<span>.</span></a>
        <span>Protected case study</span>
        <h1>Enter password to view this project.</h1>
        <p>This case study is shared privately for portfolio reviews, recruiter conversations, and selected collaborators.</p>
        <form class="project-gate-form">
          <label>Password
            <input type="password" autocomplete="current-password" placeholder="Enter project password" required autofocus>
          </label>
          <button class="primary" type="submit">Unlock project</button>
          <small class="project-gate-error" aria-live="polite"></small>
        </form>
        <a class="secondary" href="./#work">Back to selected work</a>
      </div>
    `;
    document.body.prepend(gate);

    gate.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      const input = gate.querySelector("input");
      const error = gate.querySelector(".project-gate-error");
      if (input.value === password) {
        unlock();
      } else {
        error.textContent = "Incorrect password. Please try again.";
        input.value = "";
        input.focus();
      }
    });
  }

  if (unlocked) {
    document.documentElement.classList.remove("project-lock-active");
  } else {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", buildGate);
    } else {
      buildGate();
    }
  }
})();
