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
    
    // Sobre Nós
    missao: "Missão",
    missaoTexto: "Prestar serviços de engenharia, consultoria, inspeção e formação profissional com foco na eficiência, segurança e proteção ambiental.",
    visao: "Visão",
    visaoTexto: "Ser uma empresa de referência nacional e internacional na área da engenharia e consultoria.",
    valores: "Valores",
    valoresTexto: "Comprometimento, qualidade, responsabilidade ambiental, inovação, formação contínua.",
    
    // Serviços
    engenharia: "Engenharia",
    engDesc: "AVAC, Hidráulica, Elétrica",
    consultoria: "Consultoria",
    consDesc: "Gestão de Projetos e Consultoria Técnica",
    formacao: "Formação",
    formDesc: "Programas de Capacitação Profissional",
    saibaMais: "Saiba mais",
    
    // Rodapé
    direitos: "Todos os direitos reservados.",
    contateNos: "Contacte-nos:"
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
    
    // About Us
    missao: "Mission",
    missaoTexto: "To provide engineering, consulting, inspection and professional training services focused on efficiency, safety and environmental protection.",
    visao: "Vision",
    visaoTexto: "To be a national and international reference company in engineering and consulting.",
    valores: "Values",
    valoresTexto: "Commitment, quality, environmental responsibility, innovation, continuous training.",
    
    // Services
    engenharia: "Engineering",
    engDesc: "HVAC, Hydraulic, Electrical",
    consultoria: "Consulting",
    consDesc: "Project Management and Technical Consulting",
    formacao: "Training",
    formDesc: "Professional Training Programs",
    saibaMais: "Learn more",
    
    // Footer
    direitos: "All rights reserved.",
    contateNos: "Contact us:"
  }
};

function changeLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;
  translatePage();
}

function translatePage() {
  const lang = localStorage.getItem('preferredLanguage') || 'pt';
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Aplicar tradução quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  translatePage();
});