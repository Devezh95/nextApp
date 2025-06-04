import Link from "next/link";
import Head from "next/head";

export default function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name='keywords' content='next,javascript'></meta>
        <meta name='description' content='this is youtube'></meta>
        <meta charSet='utf-8'/>
    </Head>
      <nav>
        <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/posts"}>posts</Link>
      </nav>

      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        :global(nav a) {
          color: #fff;
          text-decoration: none;
        }

        main {
           
            padding: 3rem
        }
      `}</style>
    </>
  );
}
