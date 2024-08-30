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

  const handleProductClick = (product) => {
    const formattedName = product.name
      .replace(/\s+/g, '-')        // Replace spaces with hyphens
      .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
      .toLowerCase();             // Convert to lowercase

    // Navigate to the product page with the formatted name
    navigate(`/product/${formattedName}`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Most Selling Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="item" key={product._id} onClick={() => handleProductClick(product)}>
            <div className="card  " style={{ width: '16rem' }}>
              <img
                src={`https://api.homeessentialshive.co.uk/${product.image.replace(/\\/g, '/')}`}
                className="card-img-top mostseling"
                alt={product.name}
              />
              <div className="card-body ">
                <p onClick={() => handleProductClick(product)} className="h5 mostseling card-title text-danger">{product.name}</p>
                            <div class="ratingss ">
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
            </div>
                <p className="h4 card-text align-center">${product.price}</p>
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
