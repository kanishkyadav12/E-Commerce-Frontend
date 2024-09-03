import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

 const Layout = ({ Children }) => {
  return (
    <div>
      <Navbar />
      <div>{Children}</div>
      <Footer />
    </div>
  );
};

export default Layout;