import type { APIRoute } from 'astro';
import { ogPng } from '../lib/images';

export const GET: APIRoute = async () =>
  new Response(await ogPng(), { headers: { 'Content-Type': 'image/png' } });
