import React, { useState } from 'react';

import whey1 from '../assets/Total-mass-jpeg-600x600.jpg';
import halal from '../assets/Halal-Good-Logo-300x160-1-300x160.jpg';
const Total_mass_matrix = () => {
  // Replace with your actual image URLs
  const images = [
    whey1,
  ];

  const [featuredImage, setFeaturedImage] = useState(images[0]); // default image

const variants = [
  { id: 2, flavor: 'Chocolate silk', weight: '2 kg(4.4 lbs)', price: 8949.00 },
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


const productName = "Total Mass Matrix";
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
                                    Total Mass Matrix
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
                                 <p style={{fontWeight:'500'}}>
                                    Note:Total Mass Matrix sets a new benchmark in mass weight gainers. Its supercharged calorie 
                                    dense formula is designed for anyone looking to bulk up and increase muscle mass. The TPW™ 
                                    Nutrition Team have used an optimal 2:1 carb to protein ratio which delivers over 490
                                     calories per serving, plus over 30g of premium grade protein. It is the ideal high
                                      calorie shake to help support your weight and mass gain goals, without adding 
                                      unwanted fat.
                                </p>
                                
                            </div>
                            {/* <div id="whey-advantages-back">
                                <ul>
                                    <li>Premium grade fast and slow acting proteins.</li>
                                    <li>Up to 21g of protein.</li>
                                    <li>Over 5g of filling fibre.</li>
                                    <li>Less than 4g of sugar per serving.</li>
                                    <li>Delicious flavours.</li>
                                    <li>Rich in complex carbohydrates.</li>
                                    <li>Low GI oats.</li>
                                    <li>Less than 300 calories.</li>
                                    <li>Added Vitamins & Minerals.</li>
                                    <li>Easy to make.</li>
                                </ul>
                            </div> */}
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

export default Total_mass_matrix;
