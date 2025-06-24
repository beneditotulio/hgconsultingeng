const translations = {
  pt: {
    // Navegação
    inicio: "Início",
    sobre: "Sobre Nós",
    servicos: "Serviços",
    projetos: "Projetos",
    contacto: "Contacto",
    nossasLocalizacoes: "Nossas Localizações",
    
    // Página Inicial
    bemVindo: "Bem-vindo à HG Consulting & Engineering",
    descricaoServicos: "Oferecemos serviços de engenharia, consultoria e formação com foco em qualidade e sustentabilidade.",
    especialidades: "Especialistas em localização do utilitário, detecção de fugas, gps & escaneamento de betão, realinhamento de tubos e reabilitação, CCTV e inspeção de dutos; electromecânica; perfuração mineira e transportes de inertes.",
    
    // Sobre Nós
    quemSomos: "Quem Somos",
    sobreDesc: "HG Consulting & Engineering, Lda é um consórcio inovador localizado em Moçambique e África do Sul, fornecendo soluções avançadas em diagnósticos de tubulações, avaliação avançada da condição de activos e localização, radar de penetração no solo, pesquisas, detecção de fugas e serviços de reabilitação de dutos; electromecânica; perfuração mineira e transportes de inertes. Liderada por uma equipe dinâmica de profissionais experientes e especialistas, o consórcio oferece a estratégia mais apropriada para lidar com a sua gestão avançada de serviços públicos/privados, nas áreas de actuação.",
    missao: "Missão",
    missaoTexto: "Prestar serviços de consultoria e engenharia de padrão internacional nas áreas de electromecânica e automação industrial, detecção e correcção de fugas (água, petróleo e gás) e mineração (perfuração e transporte de inertes) a preços competitivos baseados numa relação de negócio saudável com os nossos clientes.",
    visao: "Visão",
    visaoTexto: "Ser uma empresa de referência nacional e internacional na prestação de serviços de consultoria e engenharia nas áreas de actuação e contribuir para desenvolvimento de Moçambique.",
    valores: "Valores",
    valoresTexto: "Transparência, Integridade, Competitividade, Empatia e Colaboração.",
    
    // Carrossel
    solucoesEngenharia: "Soluções em Engenharia",
    expertiseProj: "Expertise em projetos AVAC, hidráulica e eléctrica",
    consultoriaEsp: "Consultoria Especializada",
    gestaoProjetos: "Gestão de projetos e consultoria técnica",
    formacaoProf: "Formação Profissional",
    capacitacao: "Capacitação e desenvolvimento técnico",
    
    // Serviços
    nossosServicos: "Nossos Serviços",
    engenharia: "Engenharia",
    engDesc: "AVAC, Hidráulica, Eléctrica",
    consultoria: "Consultoria",
    consDesc: "Gestão de Projetos e Consultoria Técnica",
    formacao: "Formação",
    formDesc: "Programas de Capacitação Profissional",
    saibaMais: "Saiba mais",

    // Footer
    direitos: "Todos os direitos reservados.",
    contateNos: "Contacte-nos:",
    mozambique: "Moçambique",
    southAfrica: "África do Sul",
    endereco: "Endereço",
    contacteNos: "Contacte-nos",
    nome: "Nome",
    email: "Email",
    assunto: "Assunto",
    mensagem: "Mensagem",
    enviar: "Enviar",
    telefones: "Telefones"
  },
  en: {
    // Navigation
    inicio: "Home",
    sobre: "About Us",
    servicos: "Services",
    projetos: "Projects",
    contacto: "Contact",
    nossasLocalizacoes: "Our Locations",
    
    // Home Page
    bemVindo: "Welcome to HG Consulting & Engineering",
    descricaoServicos: "We offer engineering, consulting and training services focused on quality and sustainability.",
    especialidades: "Specialists in utility location, leak detection, GPS & concrete scanning, pipe realignment and rehabilitation, CCTV and pipeline inspection; electromechanics; mining drilling and inert transport.",
    
    // About Us
    quemSomos: "Who We Are",
    sobreDesc: "HG Consulting & Engineering, Ltd is an innovative consortium located in Mozambique and South Africa, providing advanced solutions in pipeline diagnostics, advanced asset condition assessment and location, ground penetration radar, surveys, leak detection and pipeline rehabilitation services; electromechanics; mining drilling and inert transport. Led by a dynamic team of experienced professionals and specialists, the consortium offers the most appropriate strategy to deal with your advanced public/private services management in the areas of operation.",
    missao: "Mission",
    missaoTexto: "To provide international standard consulting and engineering services in the areas of electromechanics and industrial automation, leak detection and correction (water, oil and gas) and mining (drilling and inert transport) at competitive prices based on a healthy business relationship with our customers.",
    visao: "Vision",
    visaoTexto: "To be a national and international reference company in providing consulting and engineering services in our areas of expertise and contribute to Mozambique's development.",
    valores: "Values",
    valoresTexto: "Transparency, Integrity, Competitiveness, Empathy and Collaboration.",
    
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
    saibaMais: "Learn more",

    // Footer
    direitos: "All rights reserved.",
    contateNos: "Contact us:",
    mozambique: "Mozambique",
    southAfrica: "South Africa",
    endereco: "Address",
    contacteNos: "Contact Us",
    nome: "Name",
    email: "Email",
    assunto: "Subject",
    mensagem: "Message",
    enviar: "Send",
    telefones: "Phones"
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