const projectData = [
  {
    id: "01",
    name: "Fintelligent",
    date: "01/2024",
    desc: "Financial service integrated with Plaid API to help users track spending and promote financial education. Offers breakdown of net worth by assets and liabilities and by specific accounts like cash, investments, credit, and loans.",
    img: "public/projects/fintelligent.png",
    stack: [
      '<i class="devicon-react-plain green-text font-6"></i>',
      '<i class="devicon-typescript-plain green-text font-6"></i>',
      "<img src='public/icons/plaid.svg' />",
    ],
    links: {
      github: "https://github.com/ashlxyzhang/Fintelligent",
      web: "https://fintelligent.ashs.world/",
    },
  },
  {
    id: "02",
    name: "Whimsiway",
    date: "02/2024",
    desc: "Offers insights into past car accidents in Texas, enabling users to identify the top 5 most accident-prone areas in a city. Also includes a route planner with accurate Mapbox GL interactivate map to help users avoid accident hotspots.",
    img: "public/projects/whimsiway.png",
    stack: [
      '<i class="devicon-flask-plain green-text font-6"></i>',
      '<i class="devicon-react-plain green-text font-6"></i>',
      '<i class="devicon-nodejs-plain green-text font-6"></i>',
    ],
    links: {
      github: "https://github.com/ericliu-12/WhimsiWay",
      web: "https://whimsiway.ashs.world/",
    },
  },
  {
    id: "03",
    name: "Curious Collections",
    date: "03/2024",
    desc: "Automated and concise system for keeping track of album inventory made for a local small business, Curious Collections. Features a Notion database/querying, recommendation algorithm for albums, and a song tune recognizer.",
    img: "public/projects/collections.png",
    stack: [
      '<i class="devicon-notion-plain green-text font-6"></i>',
      "<img src='public/icons/spotify.svg' />",
      '<i class="devicon-tailwindcss-plain green-text font-6"></i>',
    ],
    links: {
      github: "https://github.com/ashlxyzhang/build4good",
      web: "https://collections.ashs.world/",
    },
  },
];

function projects({ id, name, date, desc, img, stack, links }) {
  return `<div class="flex gap-4 mb-4">
            <div class="flex center-v w-40">
              <img
                class="drop-shadow"
                src="${img}"
                alt="${name}"
              />
            </div>
            <div class="flex flex-col around-h w-60 mx-4">
              <div class="flex mb-4">
                <div class="flex flex-col">
                  <div class="flex mb-4 gap-2 between-h">
                    <div class="flex gap-4">
                      <p class="orange-text"><strong>${id}</strong></p>
                      <p class="grey-text"><strong>${name.toUpperCase()}</strong></p>
                    </div>
                  </div>
                  <p class="font-light grey-text">${desc}</p>
                </div>
                <div class="orange-text">
                  <strong>${date}</strong>
                </div>
              </div>
              <div class="flex between-h h-6">
                <div class="flex gap-6">
                  ${stack.join("")}
                </div>
                <div class="flex gap-4">
                  <a href="${
                    links.github
                  }" target="_blank" rel="noopener noreferrer"><img src="public/icons/github-orange.svg" alt="GitHub" /></a>
                  <a href="${
                    links.web
                  }" target="_blank" rel="noopener noreferrer"><img src="public/icons/globe.svg" alt="GitHub" /></a>
                </div>
              </div>
            </div>
          </div>`;
}

function render() {
  const container = document.getElementById("project-container");
  projectData.forEach((project, index) => {
    const html = projects(project);
    container.innerHTML += html;
    if (index !== projectData.length - 1) {
      container.innerHTML += `<hr class="mb-4">`;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});
