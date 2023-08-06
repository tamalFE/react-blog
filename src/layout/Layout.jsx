import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <NavBar />
      <div className="min-h-[80vh] pb-52">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
