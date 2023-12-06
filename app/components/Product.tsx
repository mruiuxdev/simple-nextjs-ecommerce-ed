import { priceFormat } from "@/util/priceFormat";
import Image from "next/image";

const Product = ({ name, image, price }: ProductType) => {
  return (
    <div>
      <Image src={image} alt={name} width={400} height={400} />
      <h1>{name}</h1>
      {priceFormat(price as number)}
    </div>
  );
};

export default Product;
