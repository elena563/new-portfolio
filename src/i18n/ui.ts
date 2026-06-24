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

    'hero.title': 'Dal concept al <span>software</span>',
    'hero.subtitle': '',
    'hero.cta1': '',
    'hero.cta2': '',
    'numbers.1': 'Progetti sviluppati',
    'numbers.2': 'Clienti supportati',
    'numbers.3': 'Anni di esperienza',

    'about.title': 'Ciao! Sono Elena',
    'about.text': '',

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
    'case-studies.text': '',
    'case-studies.cta': '',

    'reviews.title': '',
  },
  en: {
    'nav.about': 'About us',
    'nav.solutions': 'Solutions',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',

    'hero.title': 'From concept to <span>software</span>',
    'hero.subtitle': '',
    'hero.cta1': '',
    'hero.cta2': '',
    'numbers.1': 'Projects developed',
    'numbers.2': 'Clients supported',
    'numbers.3': 'Years of experience',

    'about.title': 'Hi there! This is Elena',
    'about.text': '',

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
    'case-studies.text': '',
    'case-studies.cta': '',

    'reviews.title': '',
  },
} as const;

export function t(lang: Lang, key: keyof typeof ui['it']) {
  return ui[lang][key] ?? ui['it'][key];
}