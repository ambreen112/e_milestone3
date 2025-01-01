import Image from "next/image";
import { client } from "@/sanity/lib/client";

// Fetch data from Sanity
async function getdata() {
  const fetchData = await client.fetch(`
    *[_type == 'heroimage'] {
      image4 {
        asset -> {
          url
        }
      },
      image5 {
        asset -> {
          url
        }
      }
    }
  `);
  return fetchData;
}

// Next.js page component
export default async function Hero() {
  const data = await getdata();

  return (
  <>
      {data.map((val: any, i: any) => (
        <div key={i}>
         <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 ">
  <div className="mb-8 flex flex-wrap justify-between md:mb-16">
    <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
      <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
        Explore New Arrival Of Bags
      </h1>
      <p className="leading-relaxed text-gray-600 mx-w-md">
        At SmartBigBuy, we curate only the finest, most exclusive products to bring you unmatched quality and style. Discover premium items that elevate your lifestyle because you deserve the best.
      </p>
    </div>

    <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 flex-col ">
      <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg  shadow-xl md:left-16 md:top-16 lg:ml-0 flex flex-row space-x-0 mt-14">
        {/* First Image */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <Image
            className="w-full h-full object-cover"
            src={val.image4?.asset?.url} // Access the image URL correctly
            alt="Hero Image"
            width={400}
            height={450}
            priority
            layout="responsive" // Makes the image responsive
          />
        </div>

        {/* Second Image */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <Image
            className="w-full h-full object-cover"
            src={val.image5?.asset?.url} // Access the image URL correctly
            alt="Hero Image"
            width={420}
            height={400}
            priority
            layout="responsive" // Makes the image responsive
          />
        </div>
      </div>
    </div>
  </div>
</section>
</div>
      ))}
</>
      )
    }

