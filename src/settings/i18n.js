import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { customDetector } from './lang';
const languageDetector = new LanguageDetector();
languageDetector.addDetector(customDetector);

i18n
  // detect user language
  .use(languageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    detection: {
      order: ['myCustomDetector']
    },
    debug: false,
    fallbackLng: 'es',
    resources: {
      es: {
        translation: {
      }
     },
      en: {
        translation: {
      }
    }
   }
  });

export default i18n;
