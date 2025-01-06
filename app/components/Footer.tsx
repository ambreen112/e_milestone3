import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return(
       
       
         
          <nav className="md:ml-auto flex justify-center gap-6 mt-9">
            <Link href={"https://www.linkedin.com"}>
              <Image src={"/link.jpg"} alt="link" width={50} height={50} />
            </Link>
            <Link href={"https://www.facebook.com"}>
              <Image src={"/f1.jpg"} alt="facebook" width={60} height={50} />
            </Link>
            <Link href={"https://www.twitter.com"}>
              <Image src={"/twit.jpg"} alt="twitter" width={55} height={50} />
            </Link>
          </nav>
         
        
      
    )      
}