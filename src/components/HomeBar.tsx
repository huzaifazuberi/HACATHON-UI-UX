import Image from 'next/image';

const HomeBar = () => {
  return (
    <section className="relative">

      {/* Rectangle 3 (Black Background Bar) */}
      <div className="absolute w-[1440px] h-[122px] left-0 top-[797px] bg-black"></div>

      {/* Group Section */}
      <div className="absolute h-[33.16px] left-[6.94%] right-[81.49%] top-[calc(50%-33.16px/2-1327.42px)]">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-white"></div>
      </div>

      {/* Zara Logo */}
      <div className="absolute w-[91px] h-[38px] left-[372.48px] top-[839px]">
        <Image
          src="/zara-logo.svg" // Replace with your actual logo path
          alt="Zara"
          width={91}
          height={38}
        />
      </div>

      {/* Gucci Logo */}
      <div className="absolute w-[156px] h-[36px] left-[569.48px] top-[840px]">
        <Image
          src="/gucci-logo.svg" // Replace with your actual logo path
          alt="Gucci"
          width={156}
          height={36}
        />
      </div>

      {/* Prada Logo */}
      <div className="absolute w-[194px] h-[32px] left-[831.48px] top-[842px]">
        <Image
          src="/prada-logo.svg" // Replace with your actual logo path
          alt="Prada"
          width={194}
          height={32}
        />
      </div>

      {/* Versace Logo */}
      <div className="absolute w-[180px] h-[40px] left-[150px] top-[839px]">
        <Image
          src="/versace-logo.svg" // Replace with your actual logo path
          alt="Versace"
          width={180}
          height={40}
        />
      </div>

      {/* Calvin Klein Logo */}
      <div className="absolute w-[180px] h-[40px] left-[1090px] top-[839px]">
        <Image
          src="/calvin-klein-logo.svg" // Replace with your actual logo path
          alt="Calvin Klein"
          width={180}
          height={55}
        />
      </div>

    </section>
  );
};

export default HomeBar;
