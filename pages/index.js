import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing you oder");
    router.push("/product");
  };
  return (
    <>
      <h1>Home Page</h1>
      <h2>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product">
          <a>Product</a>
        </Link>
      </h2>
      <button onClick={handleClick}>Place oder</button>
    </>
  );
}
export default Home;
