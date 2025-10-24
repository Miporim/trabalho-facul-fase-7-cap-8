import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

interface Params {
  id: string;
}

// GET para um produto específico
export async function GET(request: Request, context: { params: Promise<Params> }) {
  const params = await context.params;
  const id = parseInt(params.id, 10);
  const product = products.find(p => p.id === id);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
  }
}

// PUT para atualizar um produto
export async function PUT(request: Request, context: { params: Promise<Params> }) {
  const params = await context.params;
  const id = parseInt(params.id, 10);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
  }

  const updatedData = await request.json();
  products[index] = { ...products[index], ...updatedData };

  return NextResponse.json(products[index]);
}

// DELETE para remover um produto
export async function DELETE(request: Request, context: { params: Promise<Params> }) {
  const params = await context.params;
  const id = parseInt(params.id, 10);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
  }

  const [deletedProduct] = products.splice(index, 1);

  return NextResponse.json(deletedProduct);
}