'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { languages } from '@/shared/config/locales';

interface LanguageSwitcherProps {
  locale: string;
}

export const LanguageSwitcher = ({ locale }: LanguageSwitcherProps) => {
  const [language] = useState(locale);
  const router = useRouter();

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    const newLanguage = languages.find((lng) => lng.locale === value);
    if (newLanguage) {
      router.push(`/${newLanguage.locale}`);
    }
  };

  return (
    <FormControl>
      <Select value={language} onChange={handleChange} inputProps={{ 'aria-label': 'language' }}>
        {languages.map((lng) => (
          <MenuItem value={lng.locale} key={lng.locale}>
            {lng.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
