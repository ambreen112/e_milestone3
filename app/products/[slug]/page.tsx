import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Fetch product data directly in the component using async/await
const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } =  params;

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
            <p className="text-base text-gray-600 mb-6 ml-72 mr-72">{product.description}</p>
            <div className="flex justify-center gap-2">
            <p className="text-2xl font-semibold text-green-600 mb-8">${product.price}</p>
    <p className="text-red-600 line-through text-xl font-bold ">$1000</p>
    </div>
    <p className=" text-sm text-gray-600 font-semibold">shipping charges $100</p>
            {/* Add to Cart Button */}
            <div className="flex justify-center gap-3 mt-2">     
            <Link href="/cart">
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
        type="button">
        Add to Cart
      </button>
    </Link>

            <button
             className="bg-gray-400 text-white py-1 px-3 rounded-sm text-lg hover:bg-blue-700 transition duration-300"
             type="button">
              Check out
            </button>
            </div>
            </div>
            
          </div>
      
      </>
    );
    
  
};

export default ProductPage; 