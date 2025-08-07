import React, { useState } from 'react';

import whey1 from '../assets/all_recovery.png';
import whey2 from '../assets/3-600x600.png';
import whey3 from '../assets/2-600x600.png';
import halal from '../assets/Halal-Good-Logo-300x160-1-300x160.jpg';
const All_recovery = () => {
  // Replace with your actual image URLs
  const images = [
    whey1,
    whey2,
    whey3
  ];

  const [featuredImage, setFeaturedImage] = useState(images[0]); // default image

const variants = [
  { id: 1, flavor: 'Chocolate silk', weight: '1 kg(2.2 lbs & 14 Serving)', price: 9549.00 },
  { id: 2, flavor: 'Chocolate silk', weight: '2 kg(4.4 lbs & 28 Serving', price: 13999.00 },
];

const [selectedFlavor, setSelectedFlavor] = useState(variants[0].flavor);
const [selectedWeight, setSelectedWeight] = useState(variants[0].weight);

const selectedVariant = variants.find(
  v => v.flavor === selectedFlavor && v.weight === selectedWeight
);

const [quantity, setQuantity] = useState(1);

const handleIncrement = () => {
  setQuantity(prev => prev + 1);
};

const handleDecrement = () => {
  setQuantity(prev => (prev > 1 ? prev - 1 : 1));
};


const productName = " All In One Recovery";
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingIndex = cart.findIndex(
      (item) =>
        item.name === productName &&
        item.flavor === selectedFlavor &&
        item.weight === selectedWeight
    );

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: selectedVariant.id,
        name: productName,
        flavor: selectedFlavor,
        weight: selectedWeight,
        price: selectedVariant.price,
        quantity: quantity,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));

    alert(
      `Added to cart:\n${selectedFlavor} - ${selectedWeight}\nQuantity: ${quantity}\nTotal: ₨${(
        selectedVariant.price * quantity
      ).toLocaleString()}`
    );
  };


  return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row" id='whey-protien-row1'>
                        <div className="col" id='whey-gallery-back'>
                            <div className="product-gallery container mt-4">
                                <div className="row">
                                    <div className="col-lg-6 mx-auto" id='gallery-back'>
                                        {/* Featured Image */}
                                        <div className="featured-image mb-3">
                                        <img src={featuredImage} alt="Featured" className="img-fluid" />
                                        </div>

                                        {/* Thumbnails */}
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
                                <h3>
                                   All In One Recovery
                                </h3>
                            </div>
                            <div id="whey-details-few" className='mt-5'>
                                <span>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </span>
                                
                            </div>
                            <div id="whey-advantages-back">
                                <ul>
                                    <li>Packed with scientifically proven ingredients to enhance recovery.</li>
                                    <li>Added carbohydrate blend.</li>
                                    <li>Added electrolytes to restore mineral levels.</li>
                                    <li>25g of protein per shake.</li>
                                    <li>Contain Cherry Extract to reduce inflammation.</li>
                                    <li>Contains Creatine to enhance post workout energy production</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-5">
                            <div id="halal-img-back">
                                <img src={halal} alt="" />
                            </div>
                            <div id="whey-protien-form-back">
                                <div className="variation-form p-4 border rounded shadow-sm mt-4">
                                        <h5 className="mb-3">Choose Your Options</h5>

                                        {/* Flavor Dropdown */}
                                         <div className="mb-3">
                                            <label className="form-label">Flavor</label>
                                            <select
                                            className="form-select"
                                            value={selectedFlavor}
                                            onChange={(e) => setSelectedFlavor(e.target.value)}
                                            >
                                            {[...new Set(variants.map(v => v.flavor))].map(flavor => (
                                                <option key={flavor} value={flavor}>{flavor}</option>
                                            ))}
                                            </select>
                                        </div>


                                        {/* Weight Dropdown */}
                                        <div className="mb-3">
                                            <label className="form-label">Weight</label>
                                            <select
                                            className="form-select"
                                            value={selectedWeight}
                                            onChange={(e) => setSelectedWeight(e.target.value)}
                                            >
                                            {[...new Set(variants.map(v => v.weight))].map(weight => (
                                                <option key={weight} value={weight}>{weight}</option>
                                            ))}
                                            </select>
                                        </div>

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
                                            ₨ {selectedVariant ? selectedVariant.price.toLocaleString() : 'N/A'}
                                        </span>
                                        <br />
                                        <strong>Total Price: </strong>
                                        <span style={{ fontSize: '18px', color: '#dc3545' }}>
                                            ₨ {selectedVariant ? (selectedVariant.price * quantity).toLocaleString() : 'N/A'}
                                        </span>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button
                                            className="btn btn-primary"
                                            disabled={!selectedVariant}
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
        </>
  );
};

export default All_recovery;
