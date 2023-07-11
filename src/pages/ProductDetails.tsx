import { useParams } from "react-router-dom";
import ProductDetailsComponent from "../component/ProductDetails/ProductDetails";
import { products } from "../product.json";
import { useEffect, useState } from "react";
const ProductDetails = () => {
  const { productSlug } = useParams();
  console.log("products", products);
  const thisProduct = products.find((prod: any) => {
    if (prod.slug === productSlug) {
      return prod;
    }
  });
  console.log("thisProduct, ", thisProduct);

  const [shouldRenderComponent, setShouldRenderComponent] = useState(false);

  useEffect(() => {
    setShouldRenderComponent(true);
  }, []);

  return (
    <div>
      {shouldRenderComponent && (
        <ProductDetailsComponent product={thisProduct} />
      )}
    </div>
  );
};

export default ProductDetails;
