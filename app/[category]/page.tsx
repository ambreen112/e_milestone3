
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next"; // Import the Metadata type

// Function to fetch data based on the category
async function getData(category: string) {
  const query = `*[_type == "product" && category->title == "${category}"]{
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->title
  }`;

  const data = await client.fetch(query);
  return data;
}

interface Product {
  _id: string;
  imageUrl: string;
  price: number;
  name: string;
  slug: { current: string };
  categoryName: string;
}

// Defining the PageProps interface for dynamic routes
interface PageProps {
  params: {
    category: string;
  };
}

// Generate metadata for the category page (for SEO)
export function generateMetadata({ params }: PageProps): Metadata {
  const { category } = params;
  return {
    title: `Explore ${category} Products`,
    description: `Browse the best ${category} products, carefully curated just for you!`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = params;

  // Fetch the data using the category
  const data: Product[] = await getData(category);

  return (
    <>
      <section>
        <div>
          <h1 className="text-center font-sans text-5xl font-bold">Our New Products for {category}</h1>
        </div>
      </section>

      {/* Map through products and render each one */}
      <section className="flex flex-wrap justify-around items-start space-x-6 mt-20">
        {data.map((val) => (
          <div
            key={val._id}
            className="flex flex-col items-center mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            {/* Render image */}
            <Image
              className="border-s-violet-400 rounded-lg"
              src={val.imageUrl}
              alt={`Product image of ${val.name}`}
              width={300}
              height={200} // You can adjust this based on your preferred size
            />
            {/* Name and Price */}
            <h2 className="mt-2 text-lg font-semibold text-justify">{val.name}</h2>
            <p className="text-xl text-green-600 text-center">${val.price}</p>

            {/* Link to the product page */}
            <Link href={`/products/${val.slug.current}`} className="text-blue-600">
              View Details
            </Link>
          </div>
        ))}
        </section>
        </>
  )
}
  
