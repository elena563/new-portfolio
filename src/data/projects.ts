import type { ImageMetadata } from 'astro';
import bannerMamachef from '../assets/project_banners/banner-mamachef.webp';
import bannerWordviz from '../assets/project_banners/banner-wordviz.webp';
import bannerNod from '../assets/project_banners/banner-nod.webp';
import bannerStatpilot from '../assets/project_banners/banner-statpilot.webp';
import bannerSpaceadmin from '../assets/project_banners/banner-spaceadmin.webp';
import bannerBlacklisted from '../assets/project_banners/banner-blacklisted.webp';
import bannerIsteroscopia from '../assets/project_banners/banner-isteroscopia.webp';
import bannerSpotiType from '../assets/project_banners/banner-spotitype.webp';
import bannerNobani from '../assets/project_banners/banner-nobani.webp';
import bannerReviews from '../assets/project_banners/banner-reviews.webp';
import bannerSavetheshark from '../assets/project_banners/banner-savetheshark.webp';
import bannerCrypto from '../assets/project_banners/banner-crypto.webp';
import bannerHotel from '../assets/project_banners/banner-hotel.webp';
import bannerHashtag from '../assets/project_banners/banner-hashtag.webp';

export type ProjectCategory = 'featured' | 'webapp' | 'data' | 'website';

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
  img: ImageMetadata;
  alt: string;
  order?: Partial<Record<ProjectCategory, number>>;
  url?: string;
  readme?: string;
  preview: boolean;
  repo_visibility: boolean;
  badges?: string[];
  more_info?: {
    it: {
      title?: string;
      text: string;
    }[];
    en: {
      title?: string;
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
    img: bannerMamachef,
    alt: 'mamachef web app',
    order: {
      featured: 1,
      webapp: 2,
    },
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
    description_more: {
      it: `WordViz nasce per rendere più immediata un'attività comune nell'analisi degli embedding: esplorarne la struttura attraverso similarità, clustering e riduzione della dimensionalità.<br>
La libreria raccoglie in un'interfaccia semplice diversi passaggi che normalmente richiederebbero implementazioni separate, trasformandoli in visualizzazioni interattive e personalizzabili accessibili attraverso poche righe di codice.`,
      en: `WordViz is designed to make a common activity in embedding analysis more accessible: exploring their structure through similarity, clustering, and dimensionality reduction.<br>
The library consolidates several steps that would normally require separate implementations into a simple interface, transforming them into interactive and customizable visualizations accessible through a few lines of code.`,
    },
    img: bannerWordviz,
    alt: 'wordviz python library',
    readme: 'https://github.com/elena563/wordviz',
    preview: false,
    repo_visibility: true,
    badges: ['Python', 'Matplotlib', 'Gensim', 'Plotly'],
    more_info: {
      it: [
        {
          title: 'Semplicità',
          text: `WordViz gestisce internamente operazioni come riduzione della dimensionalità, clustering e calcolo delle distanze, lasciando all'utente la possibilità di concentrarsi sull'esplorazione dei propri embedding.<br>
Le visualizzazioni sono configurabili attraverso metriche e parametri dedicati, così da mantenere un equilibrio tra semplicità d'uso e controllo sull'analisi.`,
        },
        {
          title: 'Loading Universale',
          text: `L'oggetto EmbeddingLoader semplifica il caricamento degli embedding, gestendo sia il download sia il caricamento diretto da file e supportando diversi formati.<br>
Una volta caricati, gli embedding possono essere passati direttamente al Visualizer, senza richiedere ulteriori operazioni di preparazione.`,
        },
        {
          title: 'Visualizzazioni Dedicate',
          text: `WordViz offre visualizzazioni progettate specificamente per l'analisi degli embedding, tra cui esplorazione delle parole più simili, heatmap di similarità e distanze, dendrogrammi e rappresentazioni bidimensionali e tridimensionali.<br>
La libreria include inoltre strumenti per personalizzare l'aspetto delle visualizzazioni attraverso palette e temi predefiniti e funzionalità dedicate alla gestione dei plot più affollati, come il posizionamento automatico delle label.`,
        },
        {
          text: `È in programma lo sviluppo di un'interfaccia grafica che permetterà di esplorare le funzionalità di WordViz anche senza utilizzare direttamente Python.`,
        },
      ],
      en: [
        {
          title: 'Simplicity',
          text: `WordViz handles internally operations such as dimensionality reduction, clustering, and distance calculation, allowing the user to focus on exploring their own embeddings.<br>
The visualizations are configurable through dedicated metrics and parameters, maintaining a balance between ease of use and control over the analysis.`,
        },
        {
          title: 'Universal Loading',
          text: `The EmbeddingLoader object simplifies the loading of embeddings, handling both downloads and direct file loading while supporting various formats.<br>
Once loaded, the embeddings can be passed directly to the Visualizer, without requiring additional preparation steps.`,
        },
        {
          title: 'Dedicated Visualizations',
          text: `WordViz offers visualizations specifically designed for embedding analysis, including exploration of most similar words, similarity and distance heatmaps, dendrograms, and two- and three-dimensional representations.<br>
The library also includes tools for customizing the appearance of visualizations through predefined palettes and themes, as well as features for managing more crowded plots, such as automatic label placement.`,
        },
        {
          text: `An interface will be developed to allow users to explore WordViz's features without directly using Python.`,
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
    img: bannerNod,
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
    classes: 'webapp data',
    card_dim: 'large',
    title: {
      it: 'StatPilot',
      en: 'StatPilot',
    },
    description: {
      it: 'Web app interattiva per analisi statistica dei dati, addestramento di modelli di machine learning, e spiegazione dei modelli',
      en: 'Interactive web application for statistical data analysis, machine learning modeling, and model explainability',
    },
    description_more: {
      it: "StatPilot nasce con l'obiettivo di offrire un ambiente completamente no-code per svolgere rapidamente piccole attività di data science, senza rinunciare alla possibilità di approfondire i dati e i modelli utilizzati. L'app accompagna l'utente dall'upload di un dataset alla sua analisi, fino all'addestramento e all'interpretazione di modelli di machine learning, attraverso un flusso semplice e leggero.",
      en: 'StatPilot is designed to offer a completely no-code environment for quickly performing small data science tasks, without sacrificing the opportunity to delve deeper into the data and models used. The app guides the user from uploading a dataset to its analysis, up to the training and interpretation of machine learning models, through a simple and lightweight workflow.',
    },
    img: bannerStatpilot,
    alt: 'statpilot web app',
    order: {
      webapp: 3,
    },
    url: 'https://statpilot.onrender.com/',
    readme: 'https://github.com/elena563/statpilot',
    preview: true,
    repo_visibility: true,
    badges: ['Python', 'Flask', 'Pandas', 'Scikit-learn', 'SHAP'],
    more_info: {
      it: [
        {
          title: 'Analisi dei dati',
          text: `L'utente può caricare un dataset e ottenere una prima analisi esplorativa senza configurazioni preliminari. StatPilot identifica automaticamente il tipo delle variabili, numeriche, qualitative e testuali, e adatta le analisi disponibili di conseguenza, restituendo statistiche descrittive, distribuzioni e correlazioni sia in formato numerico che attraverso visualizzazioni.`,
        },
        {
          title: 'Machine Learning',
          text: `La sezione Machine Learning permette di scegliere tra tre modelli di classificazione e tre di regressione, selezionare il target e addestrare il modello direttamente dall'interfaccia.<br>
Oltre alle metriche di valutazione, è possibile utilizzare il modello su nuove osservazioni per ottenere predizioni.`,
        },
        {
          title: 'Explainable AI',
          text: `StatPilot utilizza SHAP per analizzare il comportamento dei modelli a diversi livelli.<br>
L'analisi globale permette di osservare l'importanza delle variabili nel comportamento complessivo del modello, mentre l'analisi locale consente di spiegare una singola predizione specificando l'indice dell'osservazione da analizzare.`,
        },
        {
          title: 'Validazione dei Dataset',
          text: `Rendere l'applicazione utilizzabile con dataset diversi ha richiesto di gestire numerosi casi legati alla struttura e alla qualità degli input. Ho sviluppato un sistema di validazione degli input che controlla i dati forniti dall'utente e intercetta le condizioni che potrebbero compromettere le successive fasi di analisi o modellazione.`,
        },
      ],
      en: [
        {
          title: 'Data Analysis',
          text: `The user can upload a dataset and obtain an initial exploratory analysis without preliminary configurations. StatPilot automatically identifies the type of variables, numeric, qualitative and textual, and adapts the available analyses accordingly, returning descriptive statistics, distributions and correlations both in numeric format and through visualizations.`,
        },
        {
          title: 'Machine Learning',
          text: `The Machine Learning section allows users to choose from three classification and three regression models, select the target variable, and train the model directly from the interface.<br>
In addition to evaluation metrics, the model can be used on new observations to obtain predictions.`,
        },
        {
          title: 'Explainable AI',
          text: `StatPilot uses SHAP to analyze model behavior at different levels.<br>
Global analysis allows users to observe the importance of variables in the overall model behavior, while local analysis enables the explanation of a single prediction by specifying the index of the observation to be analyzed.`,
        },
        {
          title: 'Dataset Validation',
          text: `Making the application usable with different datasets required handling numerous cases related to the structure and quality of the input. I developed an input validation system that checks the data provided by the user and intercepts conditions that could compromise the subsequent phases of analysis or modeling.`,
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
    img: bannerSpaceadmin,
    alt: 'NOD Space Admin platform',
    order: {
      webapp: 1,
    },
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
    img: bannerBlacklisted,
    alt: 'sito web blacklisted m3dia',
    url: 'https://blacklistedm3dia.com/it',
    preview: true,
    repo_visibility: false,
    badges: ['Nextjs', 'MongoDB', 'Javascript', 'Figma', 'tailwindcss'],
  },
  {
    classes: 'featured website',
    card_dim: 'small',
    title: {
      it: 'Antonio Accardi Isteroscopia',
      en: 'Antonio Accardi Isteroscopia',
    },
    description: {
      it: 'Redesign del vecchio sito web di un ginecologo specializzato in Isteroscopia',
      en: 'Redesign of the old website for a gynecologist specialized in hysteroscopy in Palermo, Italy',
    },
    img: bannerIsteroscopia,
    alt: 'sito web isteroscopia',
    url: 'http://www.isteroscopia.eu/pagine/',
    preview: true,
    repo_visibility: false,
    badges: ['css'],
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
    img: bannerSpotiType,
    alt: 'spotitype web app',
    url: 'https://spotitype.vercel.app/',
    readme: 'https://github.com/elena563/spotitype',
    preview: true,
    repo_visibility: true,
    badges: ['Reactjs', 'tailwindcss', 'Python', 'Flask', 'Scikit-learn'],
  },
  {
    classes: 'website',
    card_dim: 'small',
    title: {
      it: 'Professor Navid Nobani',
      en: 'Professor Navid Nobani',
    },
    description: {
      it: 'Sito web vetrina per un professore universitario, che lo presenta attraverso i suoi lavori e i corsi tenuti',
      en: 'Showcase website for a university professor, presenting his work and the courses he teaches',
    },
    img: bannerNobani,
    alt: 'progetto di sito web Professor Navid Nobani',
    url: 'https://nobani.it/',
    preview: true,
    repo_visibility: false,
    badges: ['Astrojs', 'tailwindcss'],
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
    img: bannerReviews,
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
    img: bannerSavetheshark,
    alt: 'Progetto di sito web Save the Shark',
    url: 'https://savetheshark.netlify.app/',
    readme: 'https://github.com/elena563/save_the_shark',
    preview: true,
    repo_visibility: true,
    badges: ['Hugo', 'Stripe', 'Expressjs', 'css'],
  },
  {
    classes: 'webapp',
    card_dim: 'small',
    title: {
      it: 'MarketMint Dashboard Criptovalute',
      en: 'MarketMint Dashboard Cryptocurrencies',
    },
    description: {
      it: 'Piattaforma dinamica per tracciare i trend delle criptovalute e insights del mercato in tempo reale',
      en: 'Dynamic platform for tracking cryptocurrency trends and market insights in real time',
    },
    img: bannerCrypto,
    alt: 'MarketMint dashboard criptovalute',
    url: 'https://marketmint.netlify.app/',
    readme: 'https://github.com/elena563/marketmint',
    preview: true,
    repo_visibility: true,
    badges: ['Reactjs'],
  },
  {
    classes: 'website',
    card_dim: 'small',
    title: {
      it: 'Hotel Sogno in Maremma',
      en: 'Hotel Sogno in Maremma',
    },
    description: {
      it: 'Sito web per un hotel 4 stelle nella Maremma toscana in Italia',
      en: 'Website for a charming 4 stars hotel nestled in the heart of the Tuscan Maremma, Italy',
    },
    img: bannerHotel,
    alt: 'Progetto di sito web Hotel Sogno in Maremma',
    url: 'https://hotelsognoinmaremma.netlify.app/',
    readme: 'https://github.com/elena563/hotel_sogno_in_maremma',
    preview: true,
    repo_visibility: true,
    badges: ['Javascript', 'css'],
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
    img: bannerHashtag,
    alt: 'hashtag generator web app',
    url: 'https://hashtaggenerator.streamlit.app/',
    readme: 'https://github.com/elena563/hashtag_generator',
    preview: true,
    repo_visibility: true,
    badges: ['Python', 'Streamlit', 'Langchain'],
  },
];
