

import { NextResponse } from "next/server";




export async function GET(request: any) {
  const res = await fetch(`https://`);

  if(!res.ok) throw new Error("deu ruim");

  const data = await res.json();

  console.log(data)

  return NextResponse.json({ data });
}