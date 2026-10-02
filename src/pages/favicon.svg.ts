import type { APIRoute } from 'astro';
import { logoSvg } from '../lib/images';

export const GET: APIRoute = () => new Response(logoSvg(64), { headers: { 'Content-Type': 'image/svg+xml' } });
