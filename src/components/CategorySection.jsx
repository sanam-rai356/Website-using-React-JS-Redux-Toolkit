import Mencategory from "../assets/images/man.jpg";
import Womencategory from "../assets/images/women.jpg";
import kidcategory from "../assets/images/kid.jpg";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: "Men",
      img: Mencategory,
    },

    {
      id: 2,
      title: "Women",
      img: Womencategory,
    },

    {
      id: 3,
      title: "Kids",
      img: kidcategory,
    },
  ];
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative h-64 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={category.img}
              alt="category img"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-20 left-9">
              <p className="text-xl font-bold">{category.title}</p>
              <p className="text-gray-600">View All</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategorySection;
