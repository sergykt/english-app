import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from '@/shared/config/locales';

export const routing = defineRouting({
  locales,
  defaultLocale: 'ru',
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
