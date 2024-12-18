const PROJECTS = [
  {
    id: 1,
    label: "newbie",
    name: "QR Code Component",
    code: "https://github.com/spudoodle/frontendmentor/tree/main/CODE/NEWBIE/qr-code-component",
    live: "https://achal-socials.vercel.app/github/frontendmentor/out/qr-code-component/",
    language: ["vite", "react", "typescript", "tailwind css"],
  },
  {
    id: 2,
    label: "junior",
    name: "Age Calculator App",
    code: "https://github.com/spudoodle/frontendmentor/tree/main/CODE/JUNIOR/age-calculator-app",
    live: "https://achal-socials.vercel.app/github/frontendmentor/out/age-calculator-app/",
    language: ["vite", "react", "typescript", "tailwind css", "playwright"],
  },
  {
    id: 3,
    label: "newbie",
    name: "Results Summary Component",
    code: "https://github.com/spudoodle/frontendmentor/tree/main/CODE/NEWBIE/results-summary-component",
    live: "https://achal-socials.vercel.app/github/frontendmentor/out/results-summary-component/",
    language: ["vite", "react", "typescript", "tailwind css"],
  },
  {
    id: 4,
    label: "newbie",
    name: "Product Preview Card Component",
    code: "https://github.com/spudoodle/frontendmentor/tree/main/CODE/NEWBIE/product-preview-card-component",
    live: "https://achal-socials.vercel.app/github/frontendmentor/out/product-preview-card-component/",
    language: ["vite", "react", "typescript", "tailwind css", "playwright"],
  },
];

let selectedLabel = "ALL";
let searchTerm = "";

const searchInput = document.getElementById("search");
const labelSelector = document.querySelector(".label-selector-btn");
const labelSelectorModal = document.querySelector(".label-selector-modal");
const container = document.getElementById("project-container");

labelSelector.textContent = selectedLabel;
labelSelectorModal.style.display = "none";

labelSelector.addEventListener("click", (e) => {
  labelSelectorModal.style.display =
    labelSelectorModal.style.display === "none" ? "flex" : "none";
});

document.addEventListener("click", (e) => {
  if (labelSelectorModal.style.display === "flex") {
    if (
      !labelSelectorModal.contains(e.target) &&
      !labelSelector.contains(e.target)
    ) {
      labelSelectorModal.style.display = "none";
    }
  }
});

const allLabelBtn = document.querySelectorAll(".label-btn");
allLabelBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    selectedLabel = e.target.name.toUpperCase();
    labelSelector.textContent = selectedLabel;
    labelSelectorModal.style.display = "none";
    filterProjects();
  });
});

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.toLowerCase();
  filterProjects();
});

function renderProjects(filteredProjects) {
  container.innerHTML = "";

  filteredProjects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project-card");

    const languagesList = project.language
      .map((lang) => `<span class="language-tag">- ${lang}</span>`)
      .join("");

    projectElement.innerHTML = `
            <p>&#9679;&nbsp;${project.label}</p>
            <h2>${project.name}</h2>
            <div class="links">
                <a href="${project.code}" target="_blank">Code</a>
                <a href="${project.live}" target="_blank">Live</a>
            </div>
            <div class="languages">
                ${languagesList}
            </div>
        `;

    container.appendChild(projectElement);
  });
}

function filterProjects() {
  let filteredProjects = PROJECTS;

  if (selectedLabel !== "ALL") {
    filteredProjects = filteredProjects.filter(
      (project) => project.label.toUpperCase() === selectedLabel
    );
  }

  if (searchTerm) {
    filteredProjects = filteredProjects.filter((project) =>
      project.name.toLowerCase().includes(searchTerm)
    );
  }

  renderProjects(filteredProjects);
}

filterProjects();
