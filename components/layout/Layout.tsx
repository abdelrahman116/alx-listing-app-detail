import Header from "./Header";
import Footer from "./Footer";

import { PropertyProps } from "@/interfaces";
import Image from "next/image";
const Layout: React.FC<PropertyProps> = ({
  name,
  address,
  rating,
  category,
  price,
  offers,
  image,
  discount,
}) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <h1>Welcome to {name}</h1>
        <p>
          Located in {address.city}, {address.state}, {address.country}
        </p>
        <p>Rating: {rating}</p>
        <p>Categories: {category.join(", ")}</p>
        <p>Price: ${price}</p>
        <p>
          Offers: {offers.bed} beds, {offers.shower} showers, accommodates{" "}
          {offers.occupants} occupants
        </p>
        {discount && <p>Discount: {discount}% off!</p>}
      </main>
      <Image src={image} alt={name} className="w-full h-auto my-4" />
      <Footer />
    </>
  );
};

export default Layout;
