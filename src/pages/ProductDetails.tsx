import { useParams } from "react-router-dom";
import ProductDetailsComponent from "../component/ProductDetails/ProductDetails";
import products from "../product.json";
const ProductDetails = () => {
  const { productSlug } = useParams();
  const thisProduct = products.products.find((prod: any) => {
    prod.slug === productSlug;
  });
  console.log("thisProduct, ", thisProduct);

  return (
    <div>
      <ProductDetailsComponent />
    </div>
  );
};

export default ProductDetails;
