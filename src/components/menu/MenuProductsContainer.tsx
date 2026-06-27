import { products } from "@/data/products";
import MenuProducts from "./MenuProducts";
import { categories } from "@/data/categories";

const MenuProductsContainer = () => {
  return (
    <section className="space-y-12 sm:space-y-18">
      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category.name,
        );

        return (
          <MenuProducts
            key={category.id}
            categoryId={category.id}
            categoryName={category.name}
            products={categoryProducts}
          />
        );
      })}
    </section>
  );
};

export default MenuProductsContainer;
