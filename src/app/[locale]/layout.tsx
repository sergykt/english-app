import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import theme from '@/shared/ui/theme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const generateMetadata = async () => {
  const messages = await getMessages();
  return {
    title: messages.title,
    description: messages.description,
  };
};

type PageParams = Readonly<{
  params: {
    locale: string;
  };
  children?: React.ReactNode;
}>;

const LocaleLayout = async ({ children, params }: Readonly<PageParams>) => {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={roboto.variable}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
