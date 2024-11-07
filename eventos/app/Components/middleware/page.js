import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isAuthRoute = ['/login', '/register'].includes(pathname); // Ajusta las rutas que no requieren autenticación
  const token = request.cookies.get('token')?.value;

  // Si el usuario no está autenticado y trata de acceder a una ruta protegida, redirigir a login
  if (!token && !isAuthRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Si el usuario está autenticado y trata de acceder a la página de login o registro, redirigir a home
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/protected-route'], // Rutas que requieren autenticación
};
