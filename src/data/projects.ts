export interface Project {
  classes: string;
  card_dim: 'small' | 'large';
  title: {
    it: string;
    en: string;
  };
  description: {
    it: string;
    en: string;
  };
  description_more?: {
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
  more_info?: {
    it: {
      title: string;
      text: string;
    }[];
    en: {
      title: string;
      text: string;
    }[];
  };
}

export const projects: Project[] = [
  {
    classes: 'featured webapp',
    card_dim: 'large',
    title: {
      it: 'MamaChef',
      en: 'MamaChef',
    },
    description: {
      it: `Applicazione web full-stack per creare ricette, cucinare passo passo e gestire la tua lista della spesa`,
      en: 'Full-stack web application for creating recipes, cooking step by step, and managing your shopping list',
    },
    description_more: {
      it: 'MamaChef nasce da un progetto universitario di Progetto e Sviluppo del Software, sviluppato inizialmente con due colleghi che mi hanno poi dato la possibilità di portare avanti il progetto in autonomia. Il progetto è stato poi migrato in Django e completato in una prima fase, diventando la consegna finale per il corso CS50 Web.',
      en: 'MamaChef was born from a university project of Software Design and Development, initially developed with two colleagues who later gave me the opportunity to carry on the project independently. The project was then migrated to Django and completed in a first phase, becoming the final submission for the CS50 Web course.',
    },
    img: '/project_banners/banner-mamachef.png',
    alt: 'mamachef web app',
    url: 'https://mamachef.alwaysdata.net/',
    readme: 'https://github.com/elena563/mamachef',
    preview: true,
    repo_visibility: true,
    badges: ['Django', 'JavaScript', 'PostgreSQL', 'NLTK'],
    more_info: {
      it: [
        {
          title: 'Progettazione',
          text: `Prima dello sviluppo è stata svolta una fase di raccolta dei requisiti e progettazione, basata sulle esigenze emerse da potenziali utenti.<br>
Tra le funzionalità nate da questa fase ci sono la ricerca delle ricette per ingrediente, la modalità di cucina guidata e la possibilità di aggiungere direttamente gli ingredienti di una ricetta alla propria lista della spesa.`,
        },
        {
          title: 'Validazione Ingredienti con NLP',
          text: `L'inserimento di nuovi ingredienti è uno degli aspetti in cui ho potuto applicare più direttamente le mie conoscenze di data science.<br>
Ogni ingrediente viene sottoposto a diversi livelli di validazione per verificare che sia coerente con gli ingredienti già presenti nel database. Il sistema è in grado di individuare nomi molto simili, suggerire corrispondenze ed evitare duplicati.<br>
Quando l'ingrediente non è già presente, viene inoltre verificato che corrisponda effettivamente a un alimento e viene normalizzato linguisticamente attraverso la lemmatizzazione, così da mantenere uniformi le informazioni nel database.`,
        },
        {
          title: 'Implementazione Full-stack',
          text: `La struttura dell'applicazione integra un modello dati relazionale articolato, logiche backend in Django e interazioni frontend in JavaScript. Ho inoltre sviluppato funzionalità che richiedono coordinamento tra i diversi livelli dell'applicazione, come la modalità di cucina guidata con timer, l'autocomplete degli ingredienti, gli aggiornamenti asincroni della lista della spesa e l'esportazione in PDF.`,
        },
      ],
      en: [
        {
          title: 'Design',
          text: `Prior to development, a requirements-gathering and design phase was conducted, based on needs identified by potential users.<br>
Features resulting from this phase include recipe search by ingredient, a guided cooking mode, and the ability to add a recipe's ingredients directly to one's shopping list.`,
        },
        {
          title: 'Ingredient Validation with NLP',
          text: `Adding new ingredients is one of the areas where I have been able to apply my data science knowledge most directly.<br>
Each ingredient undergoes various levels of validation to ensure consistency with the ingredients already in the database. The system can identify very similar names, suggest matches, and prevent duplicates.<br>
When an ingredient is not already present, the system verifies that it is indeed a food item and normalizes it linguistically through lemmatization to ensure data consistency within the database.`,
        },
        {
          title: 'Full-stack Implementation',
          text: `The application's architecture integrates a complex relational data model, Django-based backend logic, and JavaScript-driven frontend interactions. I also developed features requiring coordination across the application's various layers, such as a guided cooking mode with timers, ingredient autocomplete, asynchronous shopping list updates, and PDF export.`,
        },
      ],
    },
  },
  {
    classes: 'featured data',
    card_dim: 'large',
    title: {
      it: 'WordViz',
      en: 'WordViz',
    },
    description: {
      it: 'Libreria Python per visualizzare e analizzare word embeddings, utile nel campo del Natural Language Processing',
      en: 'Python library for word embeddings visualization and analysis, useful in Natural Language Processing',
    },
    img: '/project_banners/banner-wordviz.png',
    alt: 'wordviz python library',
    readme: 'https://github.com/elena563/wordviz',
    preview: false,
    repo_visibility: true,
    badges: ['Python', 'Matplotlib', 'Gensim', 'Plotly'],
    more_info: {
      it: [
        {
          title: 'test',
          text: ``,
        },
      ],
      en: [
        {
          title: 'test',
          text: ``,
        },
      ],
    },
  },
  {
    classes: 'featured',
    card_dim: 'large',
    title: {
      it: 'NOTONLYDESK',
      en: 'NOTONLYDESK',
    },
    description: {
      it: 'NOTONLYDESK, o NOD, è una startup innovativa che offre una piattaforma flessibile per accedere a una rete di spazi di coworking in tutta Italia e in Europa.',
      en: 'NOTONLYDESK, or NOD, is an innovative startup that offers a flexible platform to access a network of coworking spaces throughout Italy and Europe.',
    },
    description_more: {
      it: "Collaboro con loro, supportando il CTO durante una fase di crescita e sviluppo del prodotto, occupandomi di attività che spaziano dallo sviluppo full-stack alla SEO tecnica, fino all'analisi dei dati e al machine learning.",
      en: 'I collaborate with them, supporting the CTO during a phase of growth and product development, handling activities that range from full-stack development to technical SEO, up to data analysis and machine learning.',
    },
    img: '/project_banners/banner-nod.png',
    alt: 'NOTONLYDESK platform',
    url: 'https://notonlydesk.com/',
    preview: true,
    repo_visibility: false,
    badges: ['Python', 'Django', 'GSC', 'JavaScript', 'Pandas'],
    more_info: {
      it: [
        {
          title: 'Sviluppo Full-stack',
          text: `Ho contribuito allo sviluppo e all'evoluzione della piattaforma, lavorando sia sul frontend che sul backend. Ho realizzato diverse pagine statiche, sviluppato l'External Booking System in Django e costruito gran parte del nuovo gestionale dedicato agli amministratori degli spazi di coworking.<br>
Mi sono inoltre occupata delle scelte tecniche, della manutenzione e degli interventi necessari durante il passaggio del gestionale alla produzione e alla fase di vendita.`,
        },
        {
          title: 'SEO Tecnica',
          text: `All'interno di un sottoteam dedicato, mi occupo della SEO tecnica del sito. Il lavoro comprende analisi e risoluzione di problemi di indicizzazione, l'implementazione di dati strutturati, il miglioramento dell'accessibilità e l'evoluzione del sito verso una navigazione più adatta agli agenti AI.`,
        },
        {
          title: 'Machine Learning',
          text: `Il mio background in statistica mi ha permesso di contribuire anche all'analisi dei dati di prenotazione. Ho iniziato un'attività di analisi previsionale che parte dall'estrazione, dalla pulizia e dall'analisi esplorativa dei dati e che proseguirà con la definizione e la validazione del modello.`,
        },
      ],
      en: [
        {
          title: 'Full-stack Development',
          text: `I contributed to the development and evolution of the platform, working on both the frontend and backend. I created several static pages, developed the External Booking System in Django, and built much of the new management system for coworking space administrators.<br>
I also took care of technical decisions, maintenance, and necessary interventions during the transition of the management system to production and the sales phase.`,
        },
        {
          title: 'Technical SEO',
          text: `Within a dedicated subteam, I handle the technical SEO of the website. The work includes analyzing and resolving indexing issues, implementing structured data, improving accessibility, and evolving the site towards a more AI-friendly navigation.`,
        },
        {
          title: 'Machine Learning',
          text: `My background in statistics has allowed me to contribute to the analysis of booking data. I have started an activity of predictive analysis that begins with data extraction, cleaning, and exploratory analysis, and will continue with the definition and validation of the model.`,
        },
      ],
    },
  },
  {
    classes: 'featured webapp data',
    card_dim: 'large',
    title: {
      it: 'StatPilot',
      en: 'StatPilot',
    },
    description: {
      it: 'Web app interattiva per analisi statistica dei dati, addestramento di modelli di machine learning, e spiegazione dei modelli',
      en: 'Interactive web application for statistical data analysis, machine learning modeling, and model explainability',
    },
    img: '/project_banners/banner-statpilot.png',
    alt: 'statpilot web app',
    url: 'https://statpilot.onrender.com/',
    readme: 'https://github.com/elena563/statpilot',
    preview: true,
    repo_visibility: true,
    badges: ['Python', 'Flask'],
    more_info: {
      it: [
        {
          title: 'test',
          text: ``,
        },
      ],
      en: [
        {
          title: 'test',
          text: ``,
        },
      ],
    },
  },
  {
    classes: 'webapp',
    card_dim: 'large',
    title: {
      it: 'NOD Space Admin',
      en: 'NOD Space Admin',
    },
    description: {
      it: 'Space Admin è una piattaforma gestionale custom sviluppata per gli amministratori degli spazi di coworking di NOD.',
      en: 'Space Admin is a custom management platform developed for the administrators of NOD coworking spaces.',
    },
    description_more: {
      it: 'Il pannello permette di gestire lo spazio a 360°, da prenotazioni e postazioni fino al CRM della versione gratuita, alla pipeline commerciale e alla creazione dei contratti per il piano Pro.<br> Il pannello non è pubblicamente accessibile, ma è possibile richiedere una demo contattando direttamente NOD.',
      en: 'The panel allows for comprehensive space management, from bookings and workstations, to CRM in the free version, sales pipeline, and contract creation for the Pro plan. <br> The panel is not publicly accessible, but a demo can be requested by contacting NOD directly.',
    },
    img: '/project_banners/banner-nod.png',
    alt: 'NOD Space Admin platform',
    url: 'https://notonlydesk.com/',
    preview: true,
    repo_visibility: false,
    badges: ['Python', 'Django', 'JavaScript'],
    more_info: {
      it: [
        {
          title: 'Frontend',
          text: `Ho costruito gran parte delle sezioni del gestionale, traducendo le basi UX/UI definite per il prodotto nelle implementazioni frontend e intervenendo sulle soluzioni tecniche quando sono emersi dubbi o problemi durante le fasi di testing.`,
        },
        {
          title: 'Backend',
          text: `Oltre alle logiche CRUD, ho contribuito a trasformare i flussi di business in funzionalità applicative attraverso l'ORM di Django.<br>
In particolare, ho sviluppato la logica delle sezioni Pipeline e Contratti, permettendo di seguire un lead dal primo contatto fino all'eventuale attivazione di un piano e di gestire le informazioni associate, tra cui date, importi, utenti, servizi personalizzati e reminder.`,
        },
        {
          title: 'Manutenzione',
          text: `Attualmente seguo la manutenzione del gestionale, correggendo bug e introducendo modifiche emerse dai primi test con gli utenti.<br>
Il lavoro è ancora in evoluzione, con l'obiettivo di preparare il prodotto alla vendita.`,
        },
      ],
      en: [
        {
          title: 'Frontend',
          text: `I built much of the management panel, translating the defined UX/UI foundations for the product into frontend implementations and addressing technical solutions when doubts or issues arose during testing phases.`,
        },
        {
          title: 'Backend',
          text: `Beyond CRUD logic, I contributed to transforming business flows into application features through Django's ORM.<br>
In particular, I developed the logic for the Pipeline and Contracts sections, enabling the tracking of a lead from the initial contact to the potential activation of a plan and managing the associated information, including dates, amounts, users, customized services, and reminders.`,
        },
        {
          title: 'Maintenance',
          text: `I currently follow the maintenance of the management system, fixing bugs and introducing changes that have emerged from initial tests with users.<br>
The work is still in progress, with the goal of preparing the product for sale.`,
        },
      ],
    },
  },
  {
    classes: 'featured website',
    card_dim: 'small',
    title: {
      it: 'Blacklisted M3dia',
      en: 'Blacklisted M3dia',
    },
    description: {
      it: 'Sito web per un fotografo con una forte passione per le supercar e i motori in generale',
      en: 'Website for a photographer with a strong passion for supercars and motors in general',
    },
    img: '/project_banners/banner-blacklisted.png',
    alt: 'sito web blacklisted m3dia',
    url: 'https://blacklistedm3dia.com/it',
    preview: true,
    repo_visibility: false,
    badges: ['Nextjs', 'MongoDB', 'Javascript', 'Web Design'],
  },
  {
    classes: 'featured website',
    card_dim: 'small',
    title: {
      it: 'Antonio Accardi Isteroscopia',
      en: 'Antonio Accardi Isteroscopia',
    },
    description: {
      it: 'Sito web per un ginecologo specializzato in Isteroscopia',
      en: 'Website for a gynecologist specialized in hysteroscopy in Palermo, Italy',
    },
    img: '/project_banners/banner-isteroscopia.png',
    alt: 'sito web isteroscopia',
    url: 'http://www.isteroscopia.eu/pagine/',
    preview: true,
    repo_visibility: false,
    badges: ['Web Design'],
  },
  {
    classes: 'featured webapp data',
    card_dim: 'small',
    title: {
      it: 'SpotiType',
      en: 'SpotiType',
    },
    description: {
      it: 'Web app interattiva che, data una playlist Spotify o una lista di 5 canzoni, ti dirà che tipo di ascoltatore sei',
      en: 'Interactive web application that, given a Spotify playlist or a list of 5 songs, can tell you what kind of listener you are',
    },
    img: '/project_banners/banner-spotitype.png',
    alt: 'statpilot web app',
    url: 'https://spotitype.vercel.app/',
    readme: 'https://github.com/elena563/spotitype',
    preview: true,
    repo_visibility: true,
    badges: ['Python', 'Flask', 'Scikit-learn'],
  },
  {
    classes: 'featured website',
    card_dim: 'small',
    title: {
      it: 'Professor Navid Nobani',
      en: 'Professor Navid Nobani',
    },
    description: {
      it: 'Sito web vetrina per un professore universitario, che lo presenta attraverso i suoi lavori e i corsi tenuti',
      en: 'Showcase website for a university professor, presenting his work and the courses he teaches',
    },
    img: '/project_banners/banner-nobani.png',
    alt: 'progetto di sito web Professor Navid Nobani',
    url: 'https://nobani.it/',
    preview: true,
    repo_visibility: false,
    badges: ['Astrojs', 'Web Design'],
  },
  {
    classes: 'featured data',
    card_dim: 'small',
    title: {
      it: 'Analisi Recensioni Amazon Food',
      en: 'Amazon Food Reviews Analysis',
    },
    description: {
      it: 'Analisi esplorativa dei dati delle recensioni di prodotti Amazon, con analisi del sentiment utilizzando Python e tecniche di NLP',
      en: 'Exploratory data analysis of Amazon food reviews, with sentiment analysis using Python and NLP techniques',
    },
    img: '/project_banners/banner-reviews.png',
    alt: 'amazon food reviews analysis',
    readme: 'https://github.com/elena563/food-reviews-analysis',
    preview: false,
    repo_visibility: true,
    badges: ['Python', 'Pandas', 'AI'],
  },
  {
    classes: 'featured website',
    card_dim: 'small',
    title: {
      it: 'Save the Shark',
      en: 'Save the Shark',
    },
    description: {
      it: "Sito web per un'organizzazione no-profit che protegge squali e tutta la vita marina in generale",
      en: 'Website for a no-profit organisation protecting sharks and all sea life in general',
    },
    img: '/project_banners/banner-savetheshark.png',
    alt: 'Progetto di sito web Save the Shark',
    url: 'https://savetheshark.netlify.app/',
    readme: 'https://github.com/elena563/save_the_shark',
    preview: true,
    repo_visibility: true,
    badges: ['Hugo', 'Stripe', 'Expressjs'],
  },
  {
    classes: 'featured webapp',
    card_dim: 'small',
    title: {
      it: 'MarketMint Dashboard Criptovalute',
      en: 'MarketMint Dashboard Cryptocurrencies',
    },
    description: {
      it: 'Piattaforma dinamica per tracciare i trend delle criptovalute e insights del mercato in tempo reale',
      en: 'Dynamic platform for tracking cryptocurrency trends and market insights in real time',
    },
    img: '/project_banners/banner-crypto.png',
    alt: 'MarketMint dashboard criptovalute',
    url: 'https://marketmint.netlify.app/',
    readme: 'https://github.com/elena563/marketmint',
    preview: true,
    repo_visibility: true,
    badges: ['React'],
  },
  {
    classes: 'featured website',
    card_dim: 'small',
    title: {
      it: 'Hotel Sogno in Maremma',
      en: 'Hotel Sogno in Maremma',
    },
    description: {
      it: 'Sito web per un hotel 4 stelle nella Maremma toscana in Italia',
      en: 'Website for a charming 4 stars hotel nestled in the heart of the Tuscan Maremma, Italy',
    },
    img: '/project_banners/banner-hotel.png',
    alt: 'Progetto di sito web Hotel Sogno in Maremma',
    url: 'https://hotelsognoinmaremma.netlify.app/',
    readme: 'https://github.com/elena563/hotel_sogno_in_maremma',
    preview: true,
    repo_visibility: true,
    badges: ['Javascript', 'Web Design'],
  },
  {
    classes: 'featured data',
    card_dim: 'small',
    title: {
      it: 'Hashtag Generator',
      en: 'Hashtag Generator',
    },
    description: {
      it: "Interfaccia web intuitiva per generare con l'AI hashtag efficaci e puliti per annunci di prodotti online",
      en: 'Intuitive web interface to generate with AI effective and clean hashtags for online product listings',
    },
    img: '/project_banners/banner-hashtag.png',
    alt: 'hashtag generator web app',
    url: 'https://hashtaggenerator.streamlit.app/',
    readme: 'https://github.com/elena563/hashtag_generator',
    preview: true,
    repo_visibility: true,
    badges: ['Python', 'Streamlit', 'Langchain'],
  },
];
