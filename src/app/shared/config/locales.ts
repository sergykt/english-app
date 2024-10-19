export const locales = ['en', 'ru'] as const;

export interface Language {
  locale: string;
  name: string;
}

export const languages: Language[] = [
  {
    locale: 'en',
    name: 'Eng',
  },
  {
    locale: 'ru',
    name: 'Рус',
  },
];
