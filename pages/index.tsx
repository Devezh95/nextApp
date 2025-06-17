import Link from "next/link";
import MainLayout from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title={'Home Page'}>
      

      <h1>Hello Next.js</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/posts">Posts</Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias labore impedit perferendis ut harum, blanditiis quas at aut asperiores eveniet ratione id ad aliquid corrupti dolorum amet debitis, nam consectetur!
      </p>
    </MainLayout>
  );
}
