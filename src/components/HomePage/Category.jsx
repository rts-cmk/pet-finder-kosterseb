import './Category.scss';

const Category = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['Cats', 'Dogs', 'Birds', 'Other'];

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;