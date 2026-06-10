function ProductGrid({
  products,
  addToCart,
}) {
  return (
    <div className="section">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.name}
            />

            <div className="product-info">
              <h3>{product.name}</h3>

              <p className="price">
                ₹{product.price}
              </p>

              <button
                className="add-btn"
                onClick={() =>
                  addToCart(product)
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;