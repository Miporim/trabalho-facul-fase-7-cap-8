// src/app/(components)/ProductsList.tsx

import { ProductCard } from "./ProductCard";

// Interface do produto
export interface Product {
    id: number;
    title: string;
    price: number;
}

// Função para buscar produtos (pode ser reutilizada)
async function getProducts(): Promise<Product[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${baseUrl}/api/products`, {
        next: { revalidate: 60 } // ISR: revalida a cada 60 segundos
    });

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return res.json();
}

// Componente de lista de produtos (agora async, pode ser usado em Server Components)
export const ProductsList = async () => {
    const products = await getProducts();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};