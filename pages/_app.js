import CommonLayout from "../src/components/Layout/CommonLayout";
import "../src/styles/common.scss";
function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
    </>
  );
}

export default MyApp;
