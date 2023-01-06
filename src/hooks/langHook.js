import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import defaultLang, { languages } from 'settings/lang';
import useSettingsStore from 'store/system/settings';

export const useLang = () => {
  const [state, setState] = useState(defaultLang);
  const lang = useSettingsStore(({ lang }) => lang);

  useEffect(() => {
    setState(languages[lang]?.value ?? defaultLang);
    Cookies.set('lang', lang);
  }, [lang]);

  return [state, setState];
};
