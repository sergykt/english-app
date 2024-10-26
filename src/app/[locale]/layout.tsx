import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
import { Roboto } from 'next/font/google';
import { Header } from '@/widgets/Header';
import { type PageParams } from '@/shared/model/pageParams';
import theme from '@/shared/ui/styles/theme';

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

const LocaleLayout = async ({ children, params }: Readonly<PageParams>) => {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={roboto.variable}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Stack sx={{ minHeight: '100%' }}>
                <Header />
                <Box
                  component='main'
                  sx={{ flex: '1 1 0', height: 'max-content', pt: 'var(--header-height)' }}
                >
                  {children}
                </Box>
              </Stack>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
