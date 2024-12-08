import Image from 'next/image';

const Frame = () => {
  return (
    <div style={{ position: 'relative', margin: '50px auto', maxWidth: '1300px' }}>
      {/* Frame 60 */}
      <div
        style={{
          marginTop: '900px',
          position: 'relative',
          width: '100%',
          height: 'auto',
          background: '#F0F0F0',
          borderRadius: '40px',
          padding: '50px',
          boxSizing: 'border-box',
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontFamily: 'Integral CF, sans-serif',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '58px',
            textAlign: 'center',
            color: '#000000',
            marginBottom: '40px',
          }}
        >
          BROWSE BY DRESS STYLE
        </h1>

        {/* Frames Container */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {/* Frame 61 */}
          <div
            style={{
              position: 'relative',
              width: '350px',
              height: '300px',
              background: '#FFFFFF',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/dress-style-1.png"
              alt="Casual"
              layout="fill"
              objectFit="cover"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                background: '#fff',
                padding: '5px 10px',
                borderRadius: '10px',
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#000',
              }}
            >
              Casual
            </div>
          </div>

          {/* Frame 62 */}
          <div
            style={{
              position: 'relative',
              width: '350px',
              height: '300px',
              background: '#FFFFFF',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/dress-style-2.png"
              alt="Formal"
              layout="fill"
              objectFit="cover"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                background: '#fff',
                padding: '5px 10px',
                borderRadius: '10px',
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#000',
              }}
            >
              Formal
            </div>
          </div>

          {/* Frame 63 */}
          <div
            style={{
              position: 'relative',
              width: '350px',
              height: '300px',
              background: '#FFFFFF',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/dress-style-3.png"
              alt="Gym"
              layout="fill"
              objectFit="cover"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                background: '#fff',
                padding: '5px 10px',
                borderRadius: '10px',
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#000',
              }}
            >
              Gym
            </div>
          </div>

          {/* Frame 64 */}
          <div
            style={{
              position: 'relative',
              width: '350px',
              height: '300px',
              background: '#FFFFFF',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/dress-style-4.png"
              alt="Party"
              layout="fill"
              objectFit="cover"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                background: '#fff',
                padding: '5px 10px',
                borderRadius: '10px',
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#000',
              }}
            >
              Party
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
