import Image from 'next/image';

const PageProduct = () => {
  const products = [
    {
      name: "Polo with Contrast Trims",
      rating: "4.5/5",
      originalPrice: "$212",
      discountedPrice: "$242",
      discount: "-20%",
      image: "/pic12.png", // Replace with actual image path
    },
    {
      name: "Gradient Graphic T-shirt",
      rating: "3.5/5",
      originalPrice: "$145",
      discountedPrice: "$130",
      discount: "-30%",
      image: "/pic13.png", // Replace with actual image path
    },
    {
      name: "Polo with Tipping Details",
      rating: "4.5/5",
      originalPrice: "$180",
      discountedPrice: "$160",
      discount: "-30%",
      image: "/pic14.png", // Replace with actual image path
    },
    {
      name: "Black Striped T-shirt",
      rating: "4.5/5",
      originalPrice: "$120",
      discountedPrice: "$150",
      discount: "-20%",
      image: "/pic15.png", // Replace with actual image path
    },
  ];

  return (
    <div className="px-4 xl:px-0 py-10">
      <section className="mt-10 grid grid-cols-4 gap-6"> {/* Using grid-cols-4 to fit all in a single line */}
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <div className="text-yellow-500">{product.rating}</div>
              <div className="flex items-baseline space-x-2 mt-2">
                <span className="text-xl font-semibold text-gray-600 line-through">
                  {product.originalPrice}
                </span>
                <span className="text-xl font-semibold text-red-600">
                  {product.discountedPrice}
                </span>
              </div>
              <span className="bg-red-500 text-white text-xs px-2 py-1 mt-2 inline-block rounded-full">
                {product.discount}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PageProduct;

