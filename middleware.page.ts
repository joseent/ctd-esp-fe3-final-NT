import { NextRequest, NextResponse } from 'next/server';
import { URL_DOMAIN } from 'constantes/urls';

export function middleware(req:NextRequest, res: NextResponse) {
  

  const cookieCheckout = req.cookies.get("access-checkout");
  const cookieConfirmacionCompras = req.cookies.get("access-confirmacion");
  const url = req.nextUrl.pathname;

  if(url.includes("/confirmacion-compra") && !cookieConfirmacionCompras) {
    // Si no existe la cookie, redireccionar a la página de login
    return NextResponse.redirect(`${URL_DOMAIN}`);
  }
  if(url.includes("/checkout") && !cookieCheckout) {
    // Si no existe la cookie, redireccionar a la página de login
    return NextResponse.redirect(`${URL_DOMAIN}`);
  }

  return NextResponse.next();
}

