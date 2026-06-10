function Categories() {
  const categories = [
    "Fashion",
    "Mobiles",
    "Electronics",
    "Beauty",
    "Home",
    "Appliances",
    "Furniture",
    "Toys",
    "Sports",
    "Books",
  ];

  return (
    <div className="categories">
      {categories.map((category) => (
        <div
          className="category-card"
          key={category}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default Categories;