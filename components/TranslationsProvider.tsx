'use client';

import { I18nextProvider } from 'react-i18next';
import { Resource, createInstance } from 'i18next';
import { useRef, useEffect } from 'react';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

type Props = {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
};

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}: Props) {
  const i18nInstance = useRef(createInstance());

  useEffect(() => {
    if (!i18nInstance.current.isInitialized) {
      i18nInstance.current
        .use(initReactI18next)
        .use(resourcesToBackend((language: string, namespace: string) => 
          import(`../public/locales/${language}/${namespace}.json`)
        ))
        .init({
          lng: locale,
          fallbackLng: 'en',
          supportedLngs: ['en', 'ja'],
          defaultNS: 'common',
          fallbackNS: 'common',
          ns: namespaces,
          resources,
        });
    }
  }, [locale, namespaces, resources]);

  return (
    <I18nextProvider i18n={i18nInstance.current}>
      {children}
    </I18nextProvider>
  );
}