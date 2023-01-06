import { useEffect, useState } from 'react';
import defaultTheme, { themes } from 'settings/theme';
import useSettingsStore from 'store/system/settings';

export const useTheme = () => {
  const [state, setState] = useState(defaultTheme);
  const theme = useSettingsStore(({ theme }) => theme);

  useEffect(() => {
    setState(themes[theme]?.value ?? defaultTheme);
  }, [theme]);

  return [state];
};
