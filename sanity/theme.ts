import { buildTheme } from '@sanity/ui/theme'

// Servia Consulting brand green palette
const serviaGreen = {
  '50':  { hex: '#f0fdf9', title: 'Green 50' },
  '100': { hex: '#ccfbef', title: 'Green 100' },
  '200': { hex: '#99f5df', title: 'Green 200' },
  '300': { hex: '#5eefc6', title: 'Green 300' },
  '400': { hex: '#0ecb7b', title: 'Green 400' },
  '500': { hex: '#0cb570', title: 'Green 500' },
  '600': { hex: '#09a060', title: 'Green 600' },
  '700': { hex: '#077a4a', title: 'Green 700' },
  '800': { hex: '#065c38', title: 'Green 800' },
  '900': { hex: '#005350', title: 'Green 900' },
  '950': { hex: '#002e2c', title: 'Green 950' },
}

export const serviaTheme = buildTheme({
  palette: {
    black:   { hex: '#111111', title: 'Black' },
    white:   { hex: '#ffffff', title: 'White' },
    gray: {
      '50':  { hex: '#f9fafb', title: 'Gray 50' },
      '100': { hex: '#f3f4f6', title: 'Gray 100' },
      '200': { hex: '#e5e7eb', title: 'Gray 200' },
      '300': { hex: '#d1d5db', title: 'Gray 300' },
      '400': { hex: '#9ca3af', title: 'Gray 400' },
      '500': { hex: '#6b7280', title: 'Gray 500' },
      '600': { hex: '#4b5563', title: 'Gray 600' },
      '700': { hex: '#374151', title: 'Gray 700' },
      '800': { hex: '#1f2937', title: 'Gray 800' },
      '900': { hex: '#111827', title: 'Gray 900' },
      '950': { hex: '#030712', title: 'Gray 950' },
    },
    blue:    { '50': { hex: '#eff6ff', title: 'Blue 50' }, '100': { hex: '#dbeafe', title: 'Blue 100' }, '200': { hex: '#bfdbfe', title: 'Blue 200' }, '300': { hex: '#93c5fd', title: 'Blue 300' }, '400': { hex: '#60a5fa', title: 'Blue 400' }, '500': { hex: '#3b82f6', title: 'Blue 500' }, '600': { hex: '#2563eb', title: 'Blue 600' }, '700': { hex: '#1d4ed8', title: 'Blue 700' }, '800': { hex: '#1e40af', title: 'Blue 800' }, '900': { hex: '#1e3a8a', title: 'Blue 900' }, '950': { hex: '#172554', title: 'Blue 950' } },
    purple:  { '50': { hex: '#faf5ff', title: 'Purple 50' }, '100': { hex: '#f3e8ff', title: 'Purple 100' }, '200': { hex: '#e9d5ff', title: 'Purple 200' }, '300': { hex: '#d8b4fe', title: 'Purple 300' }, '400': { hex: '#c084fc', title: 'Purple 400' }, '500': { hex: '#a855f7', title: 'Purple 500' }, '600': { hex: '#9333ea', title: 'Purple 600' }, '700': { hex: '#7e22ce', title: 'Purple 700' }, '800': { hex: '#6b21a8', title: 'Purple 800' }, '900': { hex: '#581c87', title: 'Purple 900' }, '950': { hex: '#3b0764', title: 'Purple 950' } },
    magenta: { '50': { hex: '#fdf4ff', title: 'Magenta 50' }, '100': { hex: '#fae8ff', title: 'Magenta 100' }, '200': { hex: '#f5d0fe', title: 'Magenta 200' }, '300': { hex: '#f0abfc', title: 'Magenta 300' }, '400': { hex: '#e879f9', title: 'Magenta 400' }, '500': { hex: '#d946ef', title: 'Magenta 500' }, '600': { hex: '#c026d3', title: 'Magenta 600' }, '700': { hex: '#a21caf', title: 'Magenta 700' }, '800': { hex: '#86198f', title: 'Magenta 800' }, '900': { hex: '#701a75', title: 'Magenta 900' }, '950': { hex: '#4a044e', title: 'Magenta 950' } },
    red:     { '50': { hex: '#fef2f2', title: 'Red 50' }, '100': { hex: '#fee2e2', title: 'Red 100' }, '200': { hex: '#fecaca', title: 'Red 200' }, '300': { hex: '#fca5a5', title: 'Red 300' }, '400': { hex: '#f87171', title: 'Red 400' }, '500': { hex: '#ef4444', title: 'Red 500' }, '600': { hex: '#dc2626', title: 'Red 600' }, '700': { hex: '#b91c1c', title: 'Red 700' }, '800': { hex: '#991b1b', title: 'Red 800' }, '900': { hex: '#7f1d1d', title: 'Red 900' }, '950': { hex: '#450a0a', title: 'Red 950' } },
    orange:  { '50': { hex: '#fff7ed', title: 'Orange 50' }, '100': { hex: '#ffedd5', title: 'Orange 100' }, '200': { hex: '#fed7aa', title: 'Orange 200' }, '300': { hex: '#fdba74', title: 'Orange 300' }, '400': { hex: '#fb923c', title: 'Orange 400' }, '500': { hex: '#f97316', title: 'Orange 500' }, '600': { hex: '#ea580c', title: 'Orange 600' }, '700': { hex: '#c2410c', title: 'Orange 700' }, '800': { hex: '#9a3412', title: 'Orange 800' }, '900': { hex: '#7c2d12', title: 'Orange 900' }, '950': { hex: '#431407', title: 'Orange 950' } },
    yellow:  { '50': { hex: '#fefce8', title: 'Yellow 50' }, '100': { hex: '#fef9c3', title: 'Yellow 100' }, '200': { hex: '#fef08a', title: 'Yellow 200' }, '300': { hex: '#fde047', title: 'Yellow 300' }, '400': { hex: '#facc15', title: 'Yellow 400' }, '500': { hex: '#eab308', title: 'Yellow 500' }, '600': { hex: '#ca8a04', title: 'Yellow 600' }, '700': { hex: '#a16207', title: 'Yellow 700' }, '800': { hex: '#854d0e', title: 'Yellow 800' }, '900': { hex: '#713f12', title: 'Yellow 900' }, '950': { hex: '#422006', title: 'Yellow 950' } },
    green:   serviaGreen,
    cyan:    { '50': { hex: '#ecfeff', title: 'Cyan 50' }, '100': { hex: '#cffafe', title: 'Cyan 100' }, '200': { hex: '#a5f3fc', title: 'Cyan 200' }, '300': { hex: '#67e8f9', title: 'Cyan 300' }, '400': { hex: '#22d3ee', title: 'Cyan 400' }, '500': { hex: '#06b6d4', title: 'Cyan 500' }, '600': { hex: '#0891b2', title: 'Cyan 600' }, '700': { hex: '#0e7490', title: 'Cyan 700' }, '800': { hex: '#155e75', title: 'Cyan 800' }, '900': { hex: '#164e63', title: 'Cyan 900' }, '950': { hex: '#083344', title: 'Cyan 950' } },
  },
})
