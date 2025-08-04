import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

const defaultNS = 'common';
const getOptions = (locale = 'en', ns: string | string[] = defaultNS) => {
  return {
    debug: process.env.NODE_ENV === 'development',
    supportedLngs: ['en', 'ja'],
    fallbackLng: 'en',
    lng: locale,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
};

export async function initTranslations(locale: string, ns?: string | string[]) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => 
      import(`./public/locales/${language}/${namespace}.json`)
    ))
    .init(getOptions(locale, ns));

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}