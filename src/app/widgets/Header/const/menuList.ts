import { routes } from '@/shared/config/routes';

interface PageLink {
  title: string;
  href: string;
}

export const pagesList: PageLink[] = [
  {
    title: 'navBar.games',
    href: routes.games,
  },
  {
    title: 'navBar.about',
    href: routes.about,
  },
];

export const settingsList: PageLink[] = [
  {
    title: 'navBar.profile',
    href: routes.profile,
  },
  {
    title: 'navBar.logout',
    href: routes.home,
  },
];
