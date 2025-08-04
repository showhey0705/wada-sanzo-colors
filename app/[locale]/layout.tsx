import { Layout } from "../../components/Layout/Layout";
import StyledComponentsRegistry from "../../lib/registry";
import { GlobalStyle } from "../../styles";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { FavoritesProvider } from "@/components/FavoritesProvider/FavoritesProvider";
import { initTranslations } from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const i18nNamespaces = ['common'];

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t('header.title'),
    description: t('aboutPage.bookText1'),
    metadataBase: new URL("https://www.wada-sanzo-colors.com"),
    alternates: {
      canonical: "/",
    },
    authors: [{ name: "Paul Ungerer", url: "https://github.com/pung-one" }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: t('header.title'),
      url: "https://www.wada-sanzo-colors.com",
      siteName: t('header.title'),
      type: "website",
      description: t('aboutPage.bookText1'),
    },
  };
}

const AvenirLTStdBook = localFont({
  src: "../AvenirLTStd-Book.otf",
  display: "swap",
  variable: "--AvenirLTStdBook",
});

export default async function RootLayout({ children, params: { locale } }: Props) {
  const googleClientId = process.env.GOOGLE_ID;
  
  if (!googleClientId) {
    console.error("GOOGLE_ID environment variable is not set");
  }

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} className={AvenirLTStdBook.variable}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />

          <GoogleOAuthProvider clientId={googleClientId || ""}>
            <AuthProvider>
              <FavoritesProvider>
                <TranslationsProvider
                  namespaces={i18nNamespaces}
                  locale={locale}
                  resources={resources}
                >
                  <Layout>{children}</Layout>
                </TranslationsProvider>
              </FavoritesProvider>
            </AuthProvider>
          </GoogleOAuthProvider>
        </StyledComponentsRegistry>

        <Analytics />
      </body>
    </html>
  );
}