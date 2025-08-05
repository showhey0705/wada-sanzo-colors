import { Layout } from "../components/Layout/Layout";
import StyledComponentsRegistry from "../lib/registry";
import { GlobalStyle } from "../styles";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { FavoritesProvider } from "@/components/FavoritesProvider/FavoritesProvider";

export const metadata: Metadata = {
  title: "A Dictionary of Color Combinations",
  description: "Interactive adaptation of Wada Sanzo's famous color collection with 159 colors and 348 color combinations.",
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
    title: "A Dictionary of Color Combinations",
    url: "https://www.wada-sanzo-colors.com",
    siteName: "A Dictionary of Color Combinations",
    type: "website",
    description: "Interactive adaptation of Wada Sanzo's famous color collection with 159 colors and 348 color combinations.",
  },
};

const AvenirLTStdBook = localFont({
  src: "./AvenirLTStd-Book.otf",
  display: "swap",
  variable: "--AvenirLTStdBook",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const googleClientId = process.env.GOOGLE_ID;
  
  if (!googleClientId) {
    console.error("GOOGLE_ID environment variable is not set");
  }

  return (
    <html lang="en" className={AvenirLTStdBook.variable}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />

          <GoogleOAuthProvider clientId={googleClientId || ""}>
            <AuthProvider>
              <FavoritesProvider>
                <Layout>{children}</Layout>
              </FavoritesProvider>
            </AuthProvider>
          </GoogleOAuthProvider>
        </StyledComponentsRegistry>

        <Analytics />
      </body>
    </html>
  );
}