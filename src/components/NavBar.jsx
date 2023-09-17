
// eslint-disable-next-line react/prop-types
function Navbar({handleProduct,handleNavBar}) {
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a >
          <img src="../../public/vite.svg" alt="LWS" className="max-w-[140px]" />
        </a>
        <div className="flex gap-4">
          <a onClick={handleProduct} className="navHome cursor-pointer" id="lws-home"> Home </a>
          <a onClick={handleNavBar} className="navCart cursor-pointer" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
