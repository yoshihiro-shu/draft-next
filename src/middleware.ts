import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}