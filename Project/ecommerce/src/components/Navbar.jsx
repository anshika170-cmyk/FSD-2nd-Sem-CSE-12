import {
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

function Navbar({
  search,
  setSearch,
  login,
  isLoggedIn,
  cartCount,
}) {
  return (
    <nav className="navbar">
      <div className="logo">
        ShopKart
      </div>

      <div className="search-box">
        <FaSearch />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search..."
        />
      </div>

      <button onClick={login}>
        {isLoggedIn
          ? "Logout"
          : "Login"}
      </button>

      <div className="cart-icon">
        <FaShoppingCart />
        {cartCount}
      </div>
    </nav>
  );
}

export default Navbar;