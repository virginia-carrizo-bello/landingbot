import sharp from 'sharp';
import { site } from '../content/site';

const INK = '#16121f';
const VIOLET = '#5b2ee0';
const LIME = '#c8f23c';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Corta un texto en líneas de hasta `max` caracteres. */
function wrap(text: string, max: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    if ((line + ' ' + word).trim().length > max) {
      lines.push(line.trim());
      line = word;
    } else {
      line += ' ' + word;
    }
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

/** Ícono de marca (burbuja de chat). Se reutiliza en favicon y apple-touch-icon. */
export function logoSvg(size: number, radius = size * 0.22): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${(radius / size) * 64}" fill="${VIOLET}"/>
  <path d="M32 14c-10.5 0-19 7.4-19 16.5 0 4.9 2.5 9.3 6.4 12.3L18 51l8.6-4.6c1.7.4 3.5.6 5.4.6 10.5 0 19-7.4 19-16.5S42.5 14 32 14Z" fill="${LIME}"/>
  <circle cx="24.5" cy="30.5" r="2.6" fill="${INK}"/><circle cx="32" cy="30.5" r="2.6" fill="${INK}"/><circle cx="39.5" cy="30.5" r="2.6" fill="${INK}"/>
</svg>`;
}

/** Imagen Open Graph 1200x630 generada en build con los textos de site.ts. */
export async function ogPng(): Promise<Uint8Array> {
  const lines = wrap(site.seo.ogHeadline, 24);
  const headline = lines
    .map((l, i) => `<text x="80" y="${250 + i * 82}" font-size="72" font-weight="800" fill="#ffffff">${esc(l)}</text>`)
    .join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" font-family="Segoe UI, Helvetica, Arial, DejaVu Sans, sans-serif">
  <rect width="1200" height="630" fill="${INK}"/>
  <circle cx="1080" cy="560" r="300" fill="${VIOLET}" opacity="0.55"/>
  <circle cx="1130" cy="90" r="120" fill="${LIME}" opacity="0.9"/>
  <g transform="translate(80 70)">${logoSvg(72).replace(/<svg[^>]*>|<\/svg>/g, '').replace(/^/, '<g transform="scale(1.125)">') + '</g>'}</g>
  <text x="180" y="125" font-size="52" font-weight="800" fill="#ffffff">${esc(site.brand)}</text>
  ${headline}
  <rect x="80" y="${250 + lines.length * 82 - 20}" width="140" height="8" rx="4" fill="${LIME}"/>
  <text x="80" y="${250 + lines.length * 82 + 50}" font-size="34" fill="#d9d4e6">${esc(site.seo.ogTagline)}</text>
</svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Uint8Array(buf);
}

export async function iconPng(size: number): Promise<Uint8Array> {
  const buf = await sharp(Buffer.from(logoSvg(size, 0))).png().toBuffer();
  return new Uint8Array(buf);
}
