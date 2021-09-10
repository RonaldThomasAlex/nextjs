import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const id = router.query.productid;
  return (
    <div>
      <h1>Detail about product {id}</h1>
    </div>
  );
}

export default ProductDetail;
