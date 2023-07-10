import { useParams } from "react-router-dom";
import ProductDetailsComponent from "../component/ProductDetails/ProductDetails";
import { products } from "../product.json";
const ProductDetails = () => {
  const { productSlug } = useParams();
  console.log("products", products);
  const thisProduct = products.find((prod: any) => {
    if (prod.slug === productSlug) {
      return prod;
    }
  });
  console.log("thisProduct, ", thisProduct);

  return (
    <div>
      <ProductDetailsComponent product={thisProduct} />
    </div>
  );
};

export default ProductDetails;
