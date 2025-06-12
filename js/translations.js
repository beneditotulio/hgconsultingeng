const translations = {
  pt: {
    // Navegação
    inicio: "Início",
    sobre: "Sobre Nós",
    servicos: "Serviços",
    projetos: "Projetos",
    contacto: "Contacto",
    
    // Página Inicial
    bemVindo: "Bem-vindo à HG Consulting & Engineering",
    descricaoServicos: "Oferecemos serviços de engenharia, consultoria e formação com foco em qualidade e sustentabilidade.",
    
    // Carrossel
    solucoesEngenharia: "Soluções em Engenharia",
    expertiseProj: "Expertise em projetos AVAC, hidráulica e elétrica",
    consultoriaEsp: "Consultoria Especializada",
    gestaoProjetos: "Gestão de projetos e consultoria técnica",
    formacaoProf: "Formação Profissional",
    capacitacao: "Capacitação e desenvolvimento técnico",
    
    // Serviços
    nossosServicos: "Nossos Serviços",
    engenharia: "Engenharia",
    engDesc: "AVAC, Hidráulica, Elétrica",
    consultoria: "Consultoria",
    consDesc: "Gestão de Projetos e Consultoria Técnica",
    formacao: "Formação",
    formDesc: "Programas de Capacitação Profissional",
    saibaMais: "Saiba mais"
  },
  en: {
    // Navigation
    inicio: "Home",
    sobre: "About Us",
    servicos: "Services",
    projetos: "Projects",
    contacto: "Contact",
    
    // Home Page
    bemVindo: "Welcome to HG Consulting & Engineering",
    descricaoServicos: "We offer engineering, consulting and training services focused on quality and sustainability.",
    
    // Carousel
    solucoesEngenharia: "Engineering Solutions",
    expertiseProj: "Expertise in HVAC, hydraulic and electrical projects",
    consultoriaEsp: "Specialized Consulting",
    gestaoProjetos: "Project management and technical consulting",
    formacaoProf: "Professional Training",
    capacitacao: "Technical development and training",
    
    // Services
    nossosServicos: "Our Services",
    engenharia: "Engineering",
    engDesc: "HVAC, Hydraulic, Electrical",
    consultoria: "Consulting",
    consDesc: "Project Management and Technical Consulting",
    formacao: "Training",
    formDesc: "Professional Training Programs",
    saibaMais: "Learn more"
  }
};

function changeLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;
  updateFlagIcons(lang);
  translatePage();
}

function updateFlagIcons(lang) {
  document.querySelectorAll('.flag-icon').forEach(icon => {
    icon.classList.toggle('active', icon.dataset.lang === lang);
  });
}

function translatePage() {
  const lang = localStorage.getItem('preferredLanguage') || 'pt';
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
}

// Aplicar tradução quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
  updateFlagIcons(savedLang);
  translatePage();
});