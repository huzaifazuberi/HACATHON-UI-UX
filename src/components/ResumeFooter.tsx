import React from "react";

const ResumeFooter: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "1240px",
        height: "177px",
        left: "100px",
        top: "0px", // Removed space above by setting top to 0
        backgroundColor: "#f1f1f1", // Light gray background
        padding: "20px",
        borderRadius: "10px", // Rounded corners for a soft look
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow for a lifted effect
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "207px",
        }}
      >
        {/* Frame 51 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "35px",
            width: "248px",
            height: "177px",
          }}
        >
          <div
            style={{
              fontFamily: "'Integral CF'",
              fontWeight: "700",
              fontSize: "33.4545px",
              lineHeight: "40px",
              color: "#000000",
            }}
          >
            SHOP.CO
          </div>
          <div
            style={{
              fontFamily: "'Satoshi'",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            We have clothes that suit your style and which you’re proud to
            wear. From women to men.
          </div>
        </div>

        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
          }}
        >
          {/* Twitter Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              width: "28px",
              height: "28px",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_As_of_2021.svg" // Insert your icon link here
              alt="Twitter"
              style={{
                width: "16px",
                height: "16px",
              }}
            />
          </a>

          {/* Facebook Icon */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              width: "28px",
              height: "28px",
              backgroundColor: "#000000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" // Insert your icon link here
              alt="Facebook"
              style={{
                width: "16px",
                height: "16px",
              }}
            />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              width: "28px",
              height: "28px",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" // Insert your icon link here
              alt="Instagram"
              style={{
                width: "16px",
                height: "16px",
              }}
            />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              width: "28px",
              height: "28px",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" // Insert your icon link here
              alt="GitHub"
              style={{
                width: "16px",
                height: "16px",
              }}
            />
          </a>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          marginTop: "15px",
        }}
      >
        {/* Visa */}
        <div
          style={{
            position: "relative",
            width: "46.61px",
            height: "30.03px",
            backgroundColor: "#1434CB",
            border: "0.224107px solid #D6DCE5",
            boxShadow: "0px 4px 8px rgba(183, 183, 183, 0.08)",
            borderRadius: "5.37857px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Visa_Logo.png" // Visa logo
            alt="Visa"
            style={{ width: "24px", height: "16px" }}
          />
        </div>

        {/* MasterCard */}
        <div
          style={{
            position: "relative",
            width: "46.61px",
            height: "30.03px",
            backgroundColor: "#FF5F00",
            border: "0.224107px solid #D6DCE5",
            boxShadow: "0px 4px 8px rgba(183, 183, 183, 0.08)",
            borderRadius: "5.37857px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Mastercard_Logo.svg" // MasterCard logo
            alt="MasterCard"
            style={{ width: "24px", height: "16px" }}
          />
        </div>

        {/* PayPal */}
        <div
          style={{
            position: "relative",
            width: "46.61px",
            height: "30.03px",
            backgroundColor: "#003087",
            border: "0.224107px solid #D6DCE5",
            boxShadow: "0px 4px 8px rgba(183, 183, 183, 0.08)",
            borderRadius: "5.37857px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal_logo_2014.svg" // PayPal logo
            alt="PayPal"
            style={{ width: "24px", height: "16px" }}
          />
        </div>
      </div>

      {/* Footer Text */}
      <div
        style={{
          position: "absolute",
          width: "269px",
          height: "19px",
          left: "100px",
          top: "2959px",
          fontFamily: "'Satoshi'",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "19px",
          color: "rgba(0, 0, 0, 0.6)",
          textAlign: "right",
        }}
      >
        © 2000-2021, All rights reserved
      </div>
    </div>
  );
};

export default ResumeFooter;
