'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormControl, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { languages } from '@/shared/config/locales';

interface LanguageSwitcherProps {
  locale: string;
}

export const LanguageSwitcher = ({ locale }: LanguageSwitcherProps) => {
  const [language] = useState(locale);
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    const newLanguage = languages.find((lng) => lng.locale === value);
    if (newLanguage) {
      const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${newLanguage.locale}`);
      router.push(newPathname);
    }
  };

  return (
    <FormControl>
      <Select
        value={language}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'language', id: 'language-switcher' }}
        variant='standard'
        disableUnderline
        sx={{
          color: '#fff',
          backgroundColor: '#0F52BA',
          borderRadius: 1,
          padding: 0.5,
          '.MuiSelect-icon': { color: '#fff' },
        }}
      >
        {languages.map((lng) => (
          <MenuItem value={lng.locale} key={lng.locale}>
            {lng.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
