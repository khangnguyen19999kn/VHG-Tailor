import { z } from 'zod';

export const THEMES = [
  {
    title: 'Dark',
    value: 'dark',
  },
  {
    title: 'Light',
    value: 'light',
  },
  {
    title: 'System',
    value: 'system',
  },
] as const;
export type Theme = (typeof THEMES)[number]['value'];
export const themeEnum = z.enum(['dark', 'light', 'system']);
export const FONTS = [
  {
    title: 'Sans',
    value: 'font-sans',
  },
  {
    title: 'Mono',
    value: 'font-mono',
  },
] as const;
export type Font = (typeof FONTS)[number]['value'];
export const fontEnum = z.enum(['font-sans', 'font-mono']);
