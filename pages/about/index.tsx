import MainLayout from "../../components/MainLayout";
import Router from "next/router";

export default function About({title}) {
  const linkClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={'About Page'}>
      <h1>{title}</h1>

      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts</button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
 const response =  await fetch('http://localhost:4200/about')
 const data = await response.json()

 return {
  title: data.title
 }
}