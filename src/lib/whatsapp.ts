import { site } from '../content/site';

/** Arma un link wa.me con mensaje precargado. */
export function waLink(number: string, message?: string): string {
  const base = `https://wa.me/${number.replace(/\D/g, '') || number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const contactLink = waLink(site.contact.whatsapp, site.contact.whatsappMessage);
export const demoLink = waLink(site.contact.demoNumber, site.contact.demoMessage);

/** Convierte **texto** en <em>texto</em> (para resaltar palabras en títulos). */
export function highlight(text: string): string {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.replace(/\*\*(.+?)\*\*/g, '<em class="highlight">$1</em>');
}
