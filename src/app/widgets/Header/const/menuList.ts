interface PageLink {
  title: string;
  href: string;
}

export const pagesList: PageLink[] = [
  {
    title: 'navBar.games',
    href: '/ru/games',
  },
  {
    title: 'navBar.about',
    href: '/ru/about',
  },
];

export const settingsList: PageLink[] = [
  {
    title: 'navBar.profile',
    href: '/profile',
  },
  {
    title: 'navBar.logout',
    href: '/logout',
  },
];
