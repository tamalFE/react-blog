import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    // <div>
    //   <div className="navbar bg-base-100">
    //     <div className="flex-1">
    //       <a className="btn btn-ghost normal-case text-xl">বার্তা</a>
    //     </div>
    //     <div className="flex-none">
    //       <ul className="menu menu-horizontal px-1">
    //         <li>
    //           <NavLink to={'/'}>হোম</NavLink>
    //         </li>
    //         {categories.map((category) => (
    //           <li key={category.id}>
    //             <a>{category.name}</a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="relative">
      <NavBar />
      <div className="min-h-[80vh] pb-64">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
