import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="page-wrapper mx-auto maxWidthh">{children}</div>
    </div>
  );
}

export default Layout;
