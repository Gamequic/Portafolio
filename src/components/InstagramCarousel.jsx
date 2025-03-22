import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 📌 Componente para cada publicación de Instagram embebida
const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "10px",
          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
          margin: "auto",
          maxWidth: "600px",
          minWidth: "600px",
          minHeight: "400px",
          maxHeight: "400px",
          padding: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></blockquote>
    </div>
  );
};

// 📌 Componente para una imagen con enlace a Instagram
const InstagramImage = ({ url, image }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="relative w-full h-full block">
      {/* 📌 Logo de Instagram en la esquina superior */}
      <div className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md">
        <img src="https://static.cdninstagram.com/rsrc.php/v4/yI/r/VsNE-OHk_8a.png" alt="Instagram" className="w-6 h-6" />
      </div>
      {/* 📌 Imagen con tamaño uniforme */}
      <img
        src={image}
        alt="Instagram Post"
        className="w-[600px] h-[400px] object-cover rounded-lg shadow-lg mx-auto"
      />
    </a>
  );
};

// 📌 Componente del carrusel de Instagram
const InstagramCarousel = () => {
  const carouselItems = [
    { type: "embed", url: "https://www.instagram.com/p/DFN9MCSJocH/" },
    { type: "embed", url: "https://www.instagram.com/p/DFwHHN9yVuV/" },
    { type: "embed", url: "https://www.instagram.com/p/DGojE-7Oji9/" },
    { type: "embed", url: "https://www.instagram.com/p/DFypPbey5oL/" },
    { type: "image", url: "https://www.instagram.com/p/DE8gVNuSg2T/", image: "/Media/Fidel.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    pauseOnHover: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center w-[80vw] h-[60vh]">
      <Slider {...settings} className="w-full max-w-lg h-full">
        {carouselItems.map((item, index) => (
          <div key={index} className="flex justify-center items-center h-full">
            {item.type === "embed" ? (
              <InstagramEmbed url={item.url} />
            ) : (
              <InstagramImage url={item.url} image={item.image} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramCarousel;
