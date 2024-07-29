import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MostSellingProductsCarousel = ({ products }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Most Selling Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="item" key={product._id} onClick={() => handleProductClick(product._id)}>
            <div className="card" style={{ width: '11rem' }}>
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                {/* <a href={product.link} className="btn btn-primary">Buy Now</a> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MostSellingProductsCarousel;
