// /src/components/Frame28.tsx

import React from 'react';

const Frame28 = () => {
  return (
    <div className="absolute flex flex-row justify-center items-center px-14 py-4 gap-3 
                    border border-black/10 rounded-full"
         style={{ width: '218px', height: '52px', left: 'calc(50% - 218px/2)', top: '1548px' }}>
      {/* "View All" Button */}
      <button className="text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded-full 
                        transition duration-200 ease-in-out">
        View All
      </button>
    </div>
  );
};

export default Frame28;
