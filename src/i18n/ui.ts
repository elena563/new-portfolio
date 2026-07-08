export const languages = ['it', 'en'] as const;
export type Lang = typeof languages[number];

export function makeT(lang: Lang) {
  return (key: keyof typeof ui['it']) => ui[lang][key] ?? ui['it'][key];
}

export const ui = {
  it: {
    'nav.about': 'Chi sono',
    'nav.solutions': 'Soluzioni',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contatti',

    'home.meta-description': '',

    'hero.title': 'Dal concept al <span>software</span>',
    'hero.subtitle': 'Aiuto startup, professionisti e aziende a progettare e sviluppare <strong>prodotti digitali</strong> utilizzando tecnologie moderne e un approccio full-stack.',
    'hero.cta1': 'Parliamo del tuo progetto',
    'hero.cta2': 'Scopri i miei lavori',
    'numbers.1': 'Progetti sviluppati',
    'numbers.2': 'Clienti supportati',
    'numbers.3': 'Anni di esperienza',

    'about.title': 'Ciao! Sono Elena',
    'about.text': `<p>Sono una sviluppatrice e studentessa di Informatica con una laurea in Statistica, con base a Milano. Mi occupo di sviluppo web e applicazioni digitali, combinando esperienza utente, funzionalità e dati.</p><br>
    <p>Progetto e sviluppo <strong>applicazioni e siti web moderni</strong> utilizzando tecnologie come React, Next.js, TypeScript e Python.<br> Il mio percorso tra Statistica e Informatica mi ha portata a unire pensiero analitico e sviluppo software, con un interesse crescente per i dati e le applicazioni dell'intelligenza artificiale.</p><br>
    <p>Mi piace seguire l'intero processo di sviluppo: <span class="approach">comprendere</span> un problema, <span class="approach">progettare</span> una soluzione e <span class="approach">trasformarla</span> in qualcosa di concreto, utile e utilizzabile.</p>`,
    'about.swdev': 'Sviluppo Software',
    'about.ai': 'Intelligenza Artificiale',
    'about.areas': 'Software, dati e AI sono le aree in cui sto costruendo il mio percorso professionale.',

    'solutions.title': 'Come posso aiutarti',
    'solutions.text': '',
    'solutions.1.title': '',
    'solutions.1.subtitle': '',
    'solutions.1.text': '',
    'solutions.2.title': '',
    'solutions.2.subtitle': '',
    'solutions.2.text': '',
    'solutions.3.title': '',
    'solutions.3.subtitle': '',
    'solutions.3.text': '',

    'case-studies.title': 'Case Study',
    'case-studies.text': 'Una selezione di progetti su cui ho lavorato, alcuni più recenti, altri evolutisi insieme a me. Ogni lavoro nasce da esigenze diverse, ma con un obiettivo comune: trasformare idee e requisiti in soluzioni digitali funzionali e facili da utilizzare.<br><br>',
    'case-studies.cta': 'Scopri di più',

    'reviews.title': 'Dicono di me',

    'contact.title': '',
    'contact.text': '',
    'contact.form.name': '',
    'contact.form.email': '',
    'contact.form.message': '',
    'contact.form.submit': '',

    'footer.contacts.title': 'Contatti',
    'footer.position': 'Milano - Italia',
    'footer.social': 'Trovami su',
  },
  en: {
    'nav.about': 'About me',
    'nav.solutions': 'Solutions',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',

    'home.meta-description': '',

    'hero.title': 'From concept to <span>software</span>',
    'hero.subtitle': 'I help startups, professionals, and companies design and develop <strong>digital products</strong> using modern technologies and a full-stack approach.',
    'hero.cta1': 'Let\'s talk about your project',
    'hero.cta2': 'Discover my works',
    'numbers.1': 'Projects developed',
    'numbers.2': 'Clients supported',
    'numbers.3': 'Years of experience',

    'about.title': 'Hi there! This is Elena',
    'about.text': `<p>I'm a developer and Computer Science student with a degree in Statistics, based in Milan. I work on web and digital applications, combining user experience, functionality, and data.</p><br>
    <p>I design and develop <strong>modern applications and websites</strong> using technologies such as React, Next.js, TypeScript, and Python. <br> My journey between Statistics and Computer Science has led me to combine analytical thinking and software development, with a growing interest in data and artificial intelligence applications.</p><br>
    <p>I enjoy following the entire development process: <span class="approach">understanding</span> a problem, <span class="approach">designing</span> a solution, and <span class="approach">transforming it</span> into something concrete, useful, and usable.</p>`,
    'about.swdev': 'Software Development',
    'about.ai': 'Artificial Intelligence',
    'about.areas': 'Software, data, and AI are the areas in which I am building my professional path.',

    'solutions.title': 'How I can help you',
    'solutions.text': '',
    'solutions.1.title': '',
    'solutions.1.subtitle': '',
    'solutions.1.text': '',
    'solutions.2.title': '',
    'solutions.2.subtitle': '',
    'solutions.2.text': '',
    'solutions.3.title': '',
    'solutions.3.subtitle': '',
    'solutions.3.text': '',

    'case-studies.title': 'Case Studies',
    'case-studies.text': 'A selection of projects I\'ve worked on, some more recent, others that have evolved alongside me. Each project stems from different needs, but with a common goal: to transform ideas and requirements into functional, easy-to-use digital solutions.<br><br>',
    'case-studies.cta': 'Discover more',

    'reviews.title': 'What they say about me',

    'contact.title': '',
    'contact.text': '',
    'contact.form.name': '',
    'contact.form.email': '',
    'contact.form.message': '',
    'contact.form.submit': '',

    'footer.contacts.title': 'Contacts',
    'footer.position': 'Milan - Italy',
    'footer.social': 'Find me on',
  },
} as const;

export function t(lang: Lang, key: keyof typeof ui['it']) {
  return ui[lang][key] ?? ui['it'][key];
}