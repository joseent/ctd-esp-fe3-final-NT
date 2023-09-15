import { NextRequest, NextResponse } from 'next/server';

export function middleware(req:NextRequest, res: NextResponse) {
  

//   const cookieCheckout = req.cookies.get("access-checkout");
  const cookieConfirmacionCompras = req.cookies.get("access-confirmacion");
  const url = req.nextUrl.pathname;

  if(url.includes("/confirmacion-compra") && !cookieConfirmacionCompras) {
    // Si no existe la cookie, redireccionar a la página de login
    return NextResponse.redirect("http://localhost:3000/");
  }

  return NextResponse.next();
}

