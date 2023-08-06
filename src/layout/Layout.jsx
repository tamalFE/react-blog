import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="pb-60">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
