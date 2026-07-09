import homeIt from './it/home';
import homeEn from './en/home';
import pagesIt from './it/pages';
import pagesEn from './en/pages';

export const languages = ['it', 'en'] as const;
export type Lang = typeof languages[number];

export function makeT(lang: Lang) {
  return (key: keyof typeof ui['it']) => ui[lang][key] ?? ui['it'][key];
}

export const ui = {
  it: {
    ...homeIt,
    ...pagesIt,
  },
  en: {
    ...homeEn,
    ...pagesEn,
  },
} as const;

export function t(lang: Lang, key: keyof typeof ui['it']) {
  return ui[lang][key] ?? ui['it'][key];
}