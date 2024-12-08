import Image from 'next/image';

const Categories = () => {
  return (
    <div style={{ position: 'relative', width: '259px', height: '22px', left: '100px', top: '158px' }}>
      {/* Frame 9: Main Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '12px',
        }}
      >
        {/* Home Category */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            gap: '4px',
            width: '63px',
            height: '16px',
          }}
        >
          <div
            style={{
              width: '43px',
              height: '11px',
              fontFamily: 'Satoshi',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '22px',
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Home
          </div>
          <div
            style={{
              width: '16px',
              height: '16px',
              transform: 'rotate(-90deg)',
              background: 'rgba(0, 0, 0, 0.6)',
            }}
          ></div>
        </div>

        {/* Shop Category */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            gap: '4px',
            width: '57px',
            height: '16px',
          }}
        >
          <div
            style={{
              width: '37px',
              height: '11px',
              fontFamily: 'Satoshi',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '22px',
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Shop
          </div>
          <div
            style={{
              width: '16px',
              height: '16px',
              transform: 'rotate(-90deg)',
              background: 'rgba(0, 0, 0, 0.6)',
            }}
          ></div>
        </div>

        {/* Men Category */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            gap: '4px',
            width: '51px',
            height: '16px',
          }}
        >
          <div
            style={{
              width: '31px',
              height: '11px',
              fontFamily: 'Satoshi',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '22px',
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Men
          </div>
          <div
            style={{
              width: '16px',
              height: '16px',
              transform: 'rotate(-90deg)',
              background: 'rgba(0, 0, 0, 0.6)',
            }}
          ></div>
        </div>

        {/* T-shirts Category */}
        <div
          style={{
            width: '52px',
            height: '22px',
            fontFamily: 'Satoshi',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '22px',
            color: '#000000',
          }}
        >
          T-shirts
        </div>
      </div>
    </div>
  );
};

export default Categories;
