import Image from 'next/image';

const StatsWithImage = () => {
  return (
    <section className="bg-gray-100 py-12">
      {/* Container for Image and Text */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/school.jpg" // Path from the 'public' folder
            alt="Showcase"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Stats Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-bold text-gray-800">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <div>
            <h2 className="text-4xl font-bold text-blue-600">200+</h2>
            <p className="text-gray-600">International Brands</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-600">2,000+</h2>
            <p className="text-gray-600">High-Quality Products</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-600">30,000+</h2>
            <p className="text-gray-600">Happy Customers</p>
            <h1 className="text-xl text-gray-700">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </h1>
          </div>

          {/* Fake Shop Now Button */}
          <div className="mt-8">
            <button className="bg-black text-white font-satoshi text-[16px] py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsWithImage;
