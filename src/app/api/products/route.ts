import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(request: Request) {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const newProductData = await request.json();

  if (!newProductData.title || !newProductData.price) {
    return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 });
  }

  const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

  const newProduct = {
    id: newId,
    ...newProductData,
  };

  products.push(newProduct);

  return NextResponse.json(newProduct, { status: 201 });
}