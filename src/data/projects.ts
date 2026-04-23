export interface Project {
  classes: string;
  title: {
    it: string;
    en: string;
  };
  description: {
    it: string;
    en: string;
  };
  img: string;
  alt: string;
  url?: string;
  readme?: string;
  preview: boolean;
  repo_visibility: boolean;
  badges?: string[];
}

export const projects: Project[] = [
  {
    classes: 'featured webapp',
    title: {
      it: "StatPilot",
      en: "StatPilot"
    },
    description: {
      it: "Web app interattiva per analisi statistica dei dati, addestramento di modelli di machine learning, e spiegazione dei modelli",
      en: "Interactive web application for statistical data analysis, machine learning modeling, and model explainability"
    },
    img: "/project_banners/banner-statpilot.png",
    alt: "statpilot web app",
    url: "https://statpilot.onrender.com/",
    readme: "https://github.com/elena563/statpilot",
    preview: true,
    repo_visibility: true,
    badges: ["Python", "Flask", "Data Science"]
  },
  {
    classes: 'featured website',
    title: {
      it: "Blacklisted M3dia",
      en: "Blacklisted M3dia"
    },
    description: {
      it: "Sito web per un fotografo con una forte passione per le supercar e i motori in generale",
      en: "Website for a photographer with a strong passion for supercars and motors in general"
    },
    img: "/project_banners/banner-blacklisted.png",
    alt: "sito web blacklisted m3dia",
    url: "https://blacklistedm3dia.com/it",
    readme: "https://github.com/elena563/new-portfolio/blob/main/public/readme/README_bm.md",
    preview: true,
    repo_visibility: false,
    badges: ["Nextjs", "MongoDB", "Javascript"]
  },
  {
    classes: 'featured website',
    title: {
      it: "Antonio Accardi Isteroscopia",
      en: "Antonio Accardi Isteroscopia"
    },
    description: {
      it: "Sito web per un ginecologo specializzato in Isteroscopia",
      en: "Website for a gynecologist specialized in hysteroscopy in Palermo, Italy"
    },
    img: "/project_banners/banner-isteroscopia.png",
    alt: "sito web isteroscopia",
    url: "http://www.isteroscopia.eu/pagine/",
    readme: "https://github.com/elena563/new-portfolio/blob/main/public/readme/README_ister.md",
    preview: true,
    repo_visibility: false,
    badges: ["Web Design"]
  },
  {
    classes: 'featured webapp',
    title: {
      it: "SpotiType",
      en: "SpotiType"
    },
    description: {
      it: "Web app interattiva che, data una playlist Spotify o una lista di 5 canzoni, ti dirà che tipo di ascoltatore sei",
      en: "Interactive web application that, given a Spotify playlist or a list of 5 songs, can tell you what kind of listener you are"
    },
    img: "/project_banners/banner-spotitype.png",
    alt: "statpilot web app",
    url: "https://spotitype.vercel.app/",
    readme: "https://github.com/elena563/spotitype",
    preview: false,
    repo_visibility: true,
    badges: ["Python", "Flask", "Machine Learning", "under maintenance"]
  },
  {
    classes: 'featured website',
    title: {
      it: "Professor Navid Nobani",
      en: "Professor Navid Nobani"
    },
    description: {
      it: "Sito web vetrina per un professore universitario, che lo presenta attraverso i suoi lavori e i corsi tenuti",
      en: "Showcase website for a university professor, presenting his work and the courses he teaches"
    },
    img: "/project_banners/banner-nobani.png",
    alt: "progetto di sito web Professor Navid Nobani",
    url: "https://nobani.it/",
    preview: true,
    repo_visibility: false,
    badges: ["Astrojs"]
  },
  {
    classes: 'featured',
    title: {
      it: "WordViz",
      en: "WordViz"
    },
    description: {
      it: "Libreria Python per visualizzare e analizzare word embeddings, utile nel campo del Natural Language Processing",
      en: "Python library for word embeddings visualization and analysis, useful in Natural Language Processing"
    },
    img: "/project_banners/banner-wordviz.png",
    alt: "wordviz python library",
    readme: "https://github.com/elena563/wordviz",
    preview: false,
    repo_visibility: true,
    badges: ["Python", "Gensim", "Matplotlib", "Plotly"]
  },
  {
    classes: 'featured website',
    title: {
      it: "Save the Shark",
      en: "Save the Shark"
    },
    description: {
      it: "Sito web per un'organizzazione no-profit che protegge squali e tutta la vita marina in generale",
      en: "Website for a no-profit organisation protecting sharks and all sea life in general"
    },
    img: "/project_banners/banner-savetheshark.png",
    alt: "Progetto di sito web Save the Shark",
    url: "https://savetheshark.netlify.app/",
    readme: "https://github.com/elena563/save_the_shark",
    preview: true,
    repo_visibility: true,
    badges: ["Hugo", "Stripe", "Expressjs"]
  },
  {
    classes: 'featured website',
    title: {
      it: "Mauro Bianchi Fisioterapista",
      en: "Mauro Bianchi Fisioterapista"
    },
    description: {
      it: "Progetto di landing page per un fisioterapista, completo di CV ed elenco di terapie offerte",
      en: "Landing page project for a physiotherapist, complete with CV and list of therapies offered"
    },
    img: "/project_banners/banner-bianchi.png",
    alt: "progetto di sito web Mauro Bianchi Fisioterapista",
    url: "https://maurobianchi.netlify.app/",
    preview: true,
    repo_visibility: false
  },
  {
    classes: 'featured webapp',
    title: {
      it: "MarketMint Dashboard Criptovalute",
      en: "MarketMint Dashboard Criptovalute"
    },
    description: {
      it: "Piattaforma dinamica per tracciare i trend delle criptovalute e insights del mercato in tempo reale",
      en: "Dynamic platform for tracking cryptocurrency trends and market insights in real time"
    },
    img: "/project_banners/banner-crypto.png",
    alt: "MarketMint dashboard criptovalute",
    url: "https://marketmint.netlify.app/",
    readme: "https://github.com/elena563/marketmint",
    preview: true,
    repo_visibility: true,
    badges: ["React"]
  },
  {
    classes: 'featured website',
    title: {
      it: "Hotel Sogno in Maremma",
      en: "Hotel Sogno in Maremma"
    },
    description: {
      it: "Sito web per un hotel 4 stelle nella Maremma toscana in Italia",
      en: "Website for a charming 4 stars hotel nestled in the heart of the Tuscan Maremma, Italy"
    },
    img: "/project_banners/banner-hotel.png",
    alt: "Progetto di sito web Hotel Sogno in Maremma",
    url: "https://hotelsognoinmaremma.netlify.app/",
    readme: "https://github.com/elena563/hotel_sogno_in_maremma",
    preview: true,
    repo_visibility: true,
    badges: ["Javascript"]
  },
  {
    classes: 'website',
    title: {
      it: "Autofficina Martelli",
      en: "Autofficina Martelli"
    },
    description: {
      it: "Progetto di landing page in design moderno per un'officina di riparazione auto storica",
      en: "Landing page project in a modern design for an historical car repair garage"
    },
    img: "/project_banners/banner-autofficina.png",
    alt: "autofficina martelli sito web vetrina frontend",
    url: "https://autofficinamartelli.netlify.app/",
    preview: true,
    repo_visibility: false,
    badges: ["Web Design"]
  },
  {
    classes: 'featured webapp',
    title: {
      it: "Hashtag Generator",
      en: "Hashtag Generator"
    },
    description: {
      it: "Interfaccia web intuitiva per generare con l'AI hashtag efficaci e puliti per annunci di prodotti online",
      en: "Intuitive web interface to generate with AI effective and clean hashtags for online product listings"
    },
    img: "/project_banners/banner-hashtag.png",
    alt: "hashtag generator web app",
    url: "https://hashtaggenerator.streamlit.app/",
    readme: "https://github.com/elena563/hashtag_generator",
    preview: true,
    repo_visibility: true,
    badges: ["Python", "Streamlit", "AI", "Langchain"]
  },
  {
    classes: 'featured website',
    title: {
      it: "Energym Centro Fitness",
      en: "Energym Centro Fitness"
    },
    description: {
      it: "Progetto di landing page per una palestra che offre varie attività",
      en: "Landing page project for a gym offering various activities"
    },
    img: "/project_banners/banner-energym.png",
    alt: "Progetto di sito web palestra Energym",
    url: "https://energymfit.netlify.app/",
    readme: "https://github.com/elena563/energym",
    preview: true,
    repo_visibility: false
  },
  {
    classes: 'website hidden',
    title: {
      it: "SB00 Reseller Store",
      en: "SB00 Reseller Store"
    },
    description: {
      it: "Frontend di un sito e-commerce per un rivenditore di sneakers e abbigliamento",
      en: "Frontend of an e-commerce site for a sneakers and clothes reseller"
    },
    img: "/project_banners/banner-sb00.png",
    alt: "Progetto di sito web SB00 Reseller Store",
    url: "https://sb00.netlify.app/",
    readme: "https://github.com/elena563/sb00",
    preview: true,
    repo_visibility: true,
    badges: ["Javascript"]
  }
];
