import homeIt from './it/home';
import homeEn from './en/home';

export const languages = ['it', 'en'] as const;
export type Lang = typeof languages[number];

export function makeT(lang: Lang) {
  return (key: keyof typeof ui['it']) => ui[lang][key] ?? ui['it'][key];
}

export const ui = {
  it: {
    ...homeIt,
  },
  en: {
    ...homeEn
  },
} as const;

export function t(lang: Lang, key: keyof typeof ui['it']) {
  return ui[lang][key] ?? ui['it'][key];
}