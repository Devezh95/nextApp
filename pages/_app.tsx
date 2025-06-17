import NextNProgress from "nextjs-progressbar";
import "../styles.css/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      {/* <style jsx global>{`
          body {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        `}</style> */}
    </>
  );
}
