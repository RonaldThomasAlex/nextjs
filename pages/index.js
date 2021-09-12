import Link from "next/link";
function Home() {
  return (
    <>
      <h1>Next js pre-rendering</h1>
      <div>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </div>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
}
export default Home;
