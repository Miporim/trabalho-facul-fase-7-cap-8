// src/app/(components)/ProductCard.tsx
import { Product } from '@/lib/data';
import { FaEdit, FaTrash } from 'react-icons/fa';
export interface ProductCardProps {
    product: Product;
    onEdit: () => void;
    onDelete: () => void;
}

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
    return (
        <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">{product.title}</h3>
            <p className="text-lg mt-2">R$ {product.price.toFixed(2)}</p>
            <div className="mt-4 flex gap-2 align-center justify-between">
                <button onClick={onEdit} className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                    <FaEdit /> Editar
                </button>
                <button onClick={onDelete} className="text-red-500 hover:text-red-700 flex items-center gap-1">
                    <FaTrash /> Excluir
                </button>
            </div>
        </div>
    );
}