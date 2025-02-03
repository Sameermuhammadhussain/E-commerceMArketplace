import { fetchProducts } from "@/app/lib/api";

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProducts(params.id);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-500 mt-2">{product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
