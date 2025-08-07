import React, { useState } from 'react';

import pre_pic_2 from '../assets/Pre-Workout-2.jpg';
import halal from '../assets/Halal-Good-Logo-300x160-1-300x160.jpg';

const Omega3 = () => {
  const images = [pre_pic_2];
  const [featuredImage, setFeaturedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 1299.00;

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));




const productName = "Omega 3 by PHN - 30 Capsules";

const addToCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingIndex = cart.findIndex(
    (item) => item.name === productName
  );

  if (existingIndex >= 0) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: Date.now(), // or any static ID if needed
      name: productName,
      price: unitPrice,
      quantity: quantity,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated'));

  alert(
    `Added to cart:\n${productName}\nQuantity: ${quantity}\nTotal: ₨${(
      unitPrice * quantity
    ).toLocaleString()}`
  );
};


  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row" id='whey-protien-row1'>
          <div className="col" id='whey-gallery-back'>
            <div className="product-gallery container mt-4">
              <div className="row">
                <div className="col-lg-6 mx-auto" id='gallery-back'>
                  <div className="featured-image mb-3">
                    <img src={featuredImage} alt="Featured" className="img-fluid" />
                  </div>

                  <div className="thumbnail-images d-flex justify-content-center">
                    {images.map((img, index) => (
                      <div
                        key={index}
                        className={`thumb-wrapper ${img === featuredImage ? 'active' : ''}`}
                        onClick={() => setFeaturedImage(img)}
                      >
                        <img src={img} alt={`Thumbnail ${index}`} className="thumb-img" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col mt-4" id='whey-protien-detail-back'>
            <div id="whey-heading-back">
              <h3>Omega 3 by PHN</h3>
            </div>

            <div id="whey-details-few" className='mt-5'>
              <span>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </span>
              <p style={{ fontWeight: '500' }}>
                Note: The Protein Factory is pleased to announce that we have become authorized sellers 
                of Pure Health Nutrition. PHN’s aim is to provide customers with the best quality supplements 
                at the best prices. All ingredients are imported from premium suppliers; only the packaging is done in Pakistan.
              </p>
            </div>

            <div id="whey-advantages-back">
              <ul>
                <li>Halal Certified</li>
                <li>GMP Certified</li>
                <li>DRAP Certified</li>
                <li>Premium Quality Fish Oil</li>
                <li>Strengthens the Immune System</li>
                <li>Reduces the risk of heart disease</li>
                <li>Maintains blood pressure and cholesterol levels</li>
                <li>Great for the eyes</li>
                <li>Boosts the body and brain</li>
                <li>Improves skin hydration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col mt-5">
            <div id="halal-img-back">
              <img src={halal} alt="Halal Logo" />
            </div>

            <div id="whey-protien-form-back">
              <div className="variation-form p-4 border rounded shadow-sm mt-4">
                <h5 className="mb-3">Product: 30 Capsules</h5>

                {/* Quantity Selector */}
                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <div className="input-group" style={{ maxWidth: '160px' }}>
                    <button className="btn btn-outline-secondary" type="button" onClick={handleDecrement}>−</button>
                    <input
                      type="text"
                      className="form-control text-center"
                      value={quantity}
                      readOnly
                    />
                    <button className="btn btn-outline-secondary" type="button" onClick={handleIncrement}>+</button>
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-3">
                  <strong>Unit Price: </strong>
                  <span style={{ fontSize: '18px', color: '#28a745' }}>
                    ₨ {unitPrice.toLocaleString()}
                  </span>
                  <br />
                  <strong>Total Price: </strong>
                  <span style={{ fontSize: '18px', color: '#dc3545' }}>
                    ₨ {(unitPrice * quantity).toLocaleString()}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="btn btn-primary"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Omega3;
