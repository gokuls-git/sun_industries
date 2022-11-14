import Footer from "./Footer";
import Menu from "./Menu";
const CommonLayout = ({ children, props }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
