// Load the default language (English)
let currentLanguage = 'en';

const languageData = {
  en: {
    headerTitle: 'Horst',
    projectsLink: 'Projects',
    skillsLink: 'Skills',
    contactLink: 'Contact',
    title:"I'm a Frontend Developer"
  },
  pt: {
    headerTitle: 'Horst',
    projectsLink: 'Projetos',
    skillsLink: 'Competências',
    contactLink: 'Contato',
    title:"Sou Frontend Developer"
  },
  de: {
    headerTitle: 'Horst',
    projectsLink: 'Projekte',
    skillsLink: 'Fähigkeiten',
    contactLink: 'Kontakt',
    title:"Ich bin ein Frontend Developer"
  },
};

function updateLanguageUI() {
  const languageBtn = document.getElementById('languageBtn');
  const headerTitle = document.getElementById('header-title');
  const projectsLink = document.getElementById('projects-link');
  const skillsLink = document.getElementById('skills-link');
  const contactLink = document.getElementById('contact-link');

  languageBtn.innerHTML = `${languageData[currentLanguage].language} <i class="fa fa-caret-down"></i>`;
  headerTitle.innerText = languageData[currentLanguage].headerTitle;
  projectsLink.innerText = languageData[currentLanguage].projectsLink;
  skillsLink.innerText = languageData[currentLanguage].skillsLink;
  contactLink.innerText = languageData[currentLanguage].contactLink;
}

function changeLanguage(language) {
  currentLanguage = language;
  updateLanguageUI();
}

// Initialize the UI with the default language
updateLanguageUI();
