import type { APIRoute } from 'astro';
import { iconPng } from '../lib/images';

export const GET: APIRoute = async () =>
  new Response(await iconPng(180), { headers: { 'Content-Type': 'image/png' } });
