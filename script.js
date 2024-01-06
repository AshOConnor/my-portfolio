// JavaScript code to dynamically add project cards
const projectsContainer = document.getElementById("projects");
const viewAllButton = document.getElementById("view-all-button");

const projects = [
  {
    title: "Lunardo Cinema",
    description:
      "I developed a Cinema website as part of my Web Programming Subject, utilising PHP, CSS, and JavaScript. The project involved initial website creation with HTML and CSS. Subsequent assignments required the implementation of PHP, debugging tools, the integration of a ticketing system and booking retrieval.",
    image: {
      src: "img/lunardo.jpeg",
      alt: "Lunardo Cinema Index Page",
      link: "https://github.com/AshOConnor/wp",
    },
  },
  {
    title: "AcentaDollar",
    description:
      "This Finance & Budgeting Application mock-up was a collaborative project for my Building IT Systems subject at RMIT. We developed it using Python, HTML, CSS, and JavaScript, connected it to a database, and hosted it on DigitalOcean.",
    image: {
      src: "img/acenta.png",
      alt: "Acenta Website Logo",
      link: "https://github.com/AshOConnor/AcentaDollar",
    },
  },
  {
    title: "Weather Application",
    description:
      "This weather application, developed using HTML, CSS, and JavaScript, utilises an API key to provide real-time weather information from around the world. This application was created by following a tutorial on YouTube.",
    image: {
      src: "img/weatherapp.png",
      alt: "Weather App Image",
      link: "https://github.com/AshOConnor/Weather-App",
    },
  },
  {
    title: "JavaScript Calculator",
    description:
      "A simple calculator built with Javascript. This is something that I learnt while completing the Frontend Masters Bootcamp. It involved basic HTML, CSS and mostly JavaScript.",
    image: {
      src: "img/calculator.png",
      alt: "JavaScript Calculator Img",
      link: "https://github.com/AshOConnor/Calculator",
    },
  },
  {
    title: "Technodrome Inc",
    description:
      "Technodrome Inc, a team project during our studies at RMIT, marked our early exploration into web development. It consisted of basic HTML and CSS.",
    image: {
      src: "img/technodrome.png",
      alt: "Technodrome Inc Image",
      link: "https://github.com/AshOConnor/Technodrome-Inc",
    },
  },
  // Add more projects as needed...
];

const cardLimit = 3; // Number of cards to initially view
let viewingAll = false;

function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const titleElement = document.createElement("h3");
  titleElement.textContent = project.title;

  const imageElement = document.createElement("img");
  imageElement.src = project.image.src;
  imageElement.alt = project.image.alt;

  const imageLinkElement = document.createElement("a");
  imageLinkElement.href = project.image.link;
  imageLinkElement.appendChild(imageElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = project.description;

  projectCard.appendChild(titleElement);
  projectCard.appendChild(imageLinkElement);
  projectCard.appendChild(descriptionElement);

  return projectCard;
}

function scrollToLastProject() {
  const projects = document.querySelectorAll(".project-card");
  const lastProject = projects[projects.length - 2];
  lastProject.scrollIntoView({ behavior: "smooth", block: "start" });
}

function displayProjects(limit) {
  projectsContainer.innerHTML = ""; // Clear the container

  for (let i = 0; i < limit; i++) {
    const projectCard = createProjectCard(projects[i]);
    projectsContainer.appendChild(projectCard);
  }

  if (limit < projects.length) {
    viewAllButton.style.display = "block";
  } else {
    viewAllButton.style.display = "none";
  }
}

viewAllButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default action of the anchor tag

  if (!viewingAll) {
    displayProjects(projects.length);
    scrollToLastProject();
    viewAllButton.textContent = "View Less";
  } else {
    displayProjects(cardLimit);
    viewAllButton.textContent = "View All";
  }

  viewingAll = !viewingAll;
});

// Initially display the first set of projects
displayProjects(cardLimit);

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // Smooth scroll to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Add smooth behavior
  });
}

// function to serve submit button for form.
// document.getElementById("submitButton").addEventListener("click", function () {
//   document.getElementById("form").submit();
// });
