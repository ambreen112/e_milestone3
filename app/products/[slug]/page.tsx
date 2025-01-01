import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Fetch product data directly in the component using async/await
const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } =await  params;

  // Fetch product data from Sanity based on the dynamic slug
  const product = await client.fetch(
   ` *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      description,
      price,
      "slug": slug.current,
      "categoryName": category->name,
      "imagesUrls": images[].asset->url
    }`,
    { slug } // Passing the slug as a parameter
  );

  if (!product) {
    return <div>Product not found</div>; // Return a fallback if product is not found
  }

  
    return (
      <>
        <div className="container mx-auto px-4 py-8">
          {/* Product Images Section */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {product.imagesUrls.map((url: string, idx: number) => (
              <div key={idx} className="w-1/3 sm:w-1/4 lg:w-1/5 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={url}
                  alt= "image"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
    
          {/* Product Details Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600 mb-8">${product.price}</p>
    
            {/* Add to Cart Button */}
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </>
    );
    
  
};

export default ProductPage; 