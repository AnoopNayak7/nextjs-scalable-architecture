import { NextResponse } from 'next/server';

export function middleware(req: any, ev: any) {
  const cspHeader =
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
  ev.response.headers.set('Content-Security-Policy', cspHeader);
  return NextResponse.next();
}
