import react from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Loader from './Loader';
function Header(){
const [cartCount, setCartCount] = useState(0);
const [cartTotal, setCartTotal] = useState(0);
  const [loader, setLoader] = useState(true); // ✅ BOOLEAN

  // ✅ Show loader for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false); // just set to false
    }, 3000);

    return () => clearTimeout(timer);
  }, []);



useEffect(() => {
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setCartCount(count);
    setCartTotal(total);
  };

  updateCart(); // on load

  window.addEventListener("storage", updateCart);
  window.addEventListener("cartUpdated", updateCart); // ✅ custom event

  return () => {
    window.removeEventListener("storage", updateCart);
    window.removeEventListener("cartUpdated", updateCart); // ✅ cleanup
  };
}, []);


    return(
        <>
          {loader ? (
           <Loader/>
            ):(
              <>
{/* <!-- Top Info Bar --> */}
<div className="top-bar d-none d-lg-flex justify-content-between bg-dark text-white small py-1">
  <div>WELCOME TO 58 NUTRITION STATION</div>
  <div>WE SELL UK IMPORTED SUPPLEMENTS AT THE BEST PRICES IN AZAD KASHMIR</div>
</div>

{/* <!-- Main Navbar --> */}
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div className="container">
    {/* <!-- Logo (center on mobile, left on desktop) --> */}
    <a className="navbar-brand order-1 order-lg-0 mx-auto mx-lg-0" href="#">
      <img src={logo} alt="Logo" height="50"/>
    </a>

    {/* <!-- Cart button always visible --> */}
    <Link to="/Cart" className="btn btn-outline-primary order-2 order-lg-3 ms-lg-auto">
      <span className="d-lg-none">🛒 {cartCount}</span>
      <span className="d-none d-lg-inline">₨ {cartTotal.toLocaleString()} | Cart ({cartCount})</span>
    </Link>


    {/* <!-- Toggle button --> */}
    <button className="navbar-toggler order-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* <!-- Navbar Links content --> */}
    <div className="collapse navbar-collapse order-lg-2" id="mainNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item"><Link className="nav-Link" to="/">Home</Link></li>
        <li className="nav-item dropdown">
          <Link className="nav-Link dropdown-toggle" to="#" data-bs-toggle="dropdown">Categories</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Protien_powder">Protein Powders</Link></li>
            <li><Link className="dropdown-item" to="/Weight_gainer">Weight Gainers</Link></li>
            <li><Link className="dropdown-item" to="/Pre_workout">Pre &amp; Intra‑workout</Link></li>
            <li><Link className="dropdown-item" to="/Weight_loss">Weight Loss</Link></li>
          </ul>
        </li>
        <li className="nav-item"><Link className="nav-Link" to="/Whey_protien_isolate">Shop</Link></li> 
        <li className="nav-item"><Link className="nav-Link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-Link" to="/contact">Contact</Link></li>
      </ul>

      {/* <form className="d-flex ms-lg-3 my-2 my-lg-0">
        <input className="form-control" type="search" placeholder="Search"/>
      </form> */}

      <ul className="navbar-nav ms-lg-3">
        <li className="nav-item"><a className="nav-Link" href="#">Login / Register</a></li>
      </ul>
    </div>
  </div>
</nav>


</>

      )}
        </>
    )
}

export default Header;