import es from 'antd/es/locale/es_ES';
import en from 'antd/lib/locale/en_US';

export const languages = {
  es: { name: 'es', value: es, nativeName: 'Español', index: 1 },
  en: { name: 'en', value: en, nativeName: 'English', index: 0 }
};

export const customDetector = {
  name: 'myCustomDetector',
  lookup() {
    const storageConfig = localStorage.getItem('config');
    try {
      const config = JSON.parse(storageConfig);
      return config?.state?.lang;
    } catch (error) {
      return 'es';
    }
  }
};

export default es;
