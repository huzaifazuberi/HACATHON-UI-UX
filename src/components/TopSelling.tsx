import React from 'react';

const TopSelling = () => {
  return (
    <div>
      {/* Top Selling Title */}
      <div className="absolute flex items-center justify-center text-center font-bold text-3xl leading-14" 
           style={{ width: '346px', height: '58px', left: 'calc(50% - 346px/2 - 1px)', top: '1728px' }}>
        Top Selling
      </div>

      {/* Discount Tag */}
      <div className="absolute flex items-center justify-center px-3 py-1 gap-3 bg-red-100 rounded-full" 
           style={{ width: '31px', height: '16px', left: '231px', top: '2219px' }}>
        <span className="text-red-500 text-xs font-medium">-20%</span>
      </div>

      {/* Ratings */}
      <div className="absolute flex items-center gap-3" style={{ width: '160.7px', height: '19px', left: '100px', top: '2190px' }}>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
          ))}
        </div>
        <span className="text-black text-sm font-medium">5.0/5</span>
      </div>

      {/* More Ratings */}
      <div className="absolute flex items-center gap-3" style={{ width: '137.9px', height: '19px', left: '415px', top: '2190px' }}>
        <div className="flex gap-1">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
          ))}
        </div>
        <span className="text-black text-sm font-medium">4.0/5</span>
      </div>

      {/* Product Ratings */}
      <div className="absolute flex items-center gap-3" style={{ width: '113.09px', height: '19px', left: '730px', top: '2190px' }}>
        <div className="flex gap-1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
          ))}
        </div>
        <span className="text-black text-sm font-medium">3.0/5</span>
      </div>

      {/* Product Ratings */}
      <div className="absolute flex items-center gap-3" style={{ width: '150px', height: '19px', left: '1045px', top: '2190px' }}>
        <div className="flex gap-1">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
          ))}
        </div>
        <span className="text-black text-sm font-medium">4.5/5</span>
      </div>

      {/* Product Cards Section */}
      <div className="absolute flex gap-6" style={{ left: '100px', top: '1841px' }}>
        <div className="bg-gray-100 rounded-lg overflow-hidden" style={{ width: '295px' }}>
          <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(pic5.png)', height: '444px', backgroundSize: 'cover' }} />
          <div className="p-4">
            <h3 className="font-bold text-xl">Vertical Striped Shirt</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold text-2xl">$212</span>
              <span className="text-gray-400 line-through">$232</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden" style={{ width: '295px' }}>
          <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(pic6.png)', height: '444px', backgroundSize: 'cover' }} />
          <div className="p-4">
            <h3 className="font-bold text-xl">Courage Graphic T-shirt</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold text-2xl">$145</span>
              <span className="text-gray-400 line-through">$155</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden" style={{ width: '295px' }}>
          <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(pic7.png)', height: '444px', backgroundSize: 'cover' }} />
          <div className="p-4">
            <h3 className="font-bold text-xl">Loose Fit Bermuda Shorts</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold text-2xl">$145</span>
              <span className="text-gray-400 line-through">$160</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden" style={{ width: '295px' }}>
          <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(pic8.png)', height: '444px', backgroundSize: 'cover' }} />
          <div className="p-4">
            <h3 className="font-bold text-xl">Faded Skinny Jeans</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold text-2xl">$80</span>
              <span className="text-gray-400 line-through">$90</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Names */}
      <div className="absolute flex justify-between gap-13" style={{ left: '100px', top: '2155px', width: 'calc(100% - 200px)' }}>
        
       
      </div>

      {/* Product Prices */}
      <div className="absolute flex justify-between gap-12" style={{ left: '100px', top: '2217px', width: 'calc(100% - 200px)' }}>
        
      </div>
    </div>
  );
};

export default TopSelling;
