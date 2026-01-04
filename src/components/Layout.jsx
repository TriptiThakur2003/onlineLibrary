import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    // Main application wrapper with background styling
    <div className="app-wrapper">
      {/* Navigation bar component */}
      <Navbar />
      {/* Page content wrapper with responsive centering */}
      <div className="page-wrapper mx-auto maxWidthh">{children}</div>
    </div>
  );
}

export default Layout;
