import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
