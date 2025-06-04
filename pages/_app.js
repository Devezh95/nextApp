import '../styles.css/main.scss'

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        {/* <style jsx global>{`
          body {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        `}</style> */}
      </>
    )
  }
  