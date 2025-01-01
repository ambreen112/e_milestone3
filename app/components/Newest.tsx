import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";


// Fetch data from Sanity
async function getdata() {
  const fetchData = await client.fetch(`
    *[_type == "product"] [0...12]{
      _id,
      price,
      name,
      slug,
      "imagesUrls": images[].asset->url
    }
  `);
  return fetchData;
}

export default async function Newest() {
  const data = await getdata();
  
  return (
    <>
      {/* Only show this once, outside the map loop */}
      <section>
        <div>
          <h1 className="text-center font-sans text-5xl font-bold">Newest Arrival</h1>
        </div>
      </section>

     {/* Map through products and render each one */}
{data.map((val: any, i: any) => (
  <div key={i}>
    <section className="flex flex-wrap justify-around items-start space-x-6 mt-20">
      {/* Render each image with name and price underneath */}
      {val.imagesUrls.map((url: string, idx: number) => (
        <div key={idx} className="flex flex-col items-center mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          {/* Image */}
          <Image 
            className="border-s-violet-400 rounded-lg" 
            src={url} 
            alt={`Product image ${idx + 1}`} 
            width={300} 
            height={200} // You can adjust this based on your preferred size
          />
          {/* Name and Price below each image */}
          <h2 className="mt-2 text-lg font-semibold text-center">{val.name}</h2>
          <p className="text-xl text-green-600 text-center">${val.price}</p>
        
         {/* Link to the product page */}
         <Link href={`/products/${val.slug.current}`}
  className="text-blue-600">View Details
</Link>


        </div>
      ))}
    </section>
  </div>
))}

    </>
  );
}
