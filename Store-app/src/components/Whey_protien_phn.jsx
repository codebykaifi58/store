import React, { useState } from 'react';

import whey1 from '../assets/Whey-Protein-Front-Pic-600x600.jpg';
import whey2 from '../assets/Whey-Protein-Back-Pic-600x600.jpg';

const Whey_protien = () => {
  // Replace with your actual image URLs
  const images = [
    whey1,
    whey2,
  ];

  const [featuredImage, setFeaturedImage] = useState(images[0]); // default image

const variants = [
  { id: 1, flavor: 'Chocolate Silk', weight: '1 kg', price: 7999 },
  { id: 2, flavor: 'Chocolate Silk', weight: '2 kg', price: 14999 },
  { id: 3, flavor: 'Strawberry Cream', weight: '1 kg', price: 7999 },
  { id: 4, flavor: 'Strawberry Cream', weight: '2 kg', price: 14999 },
  { id: 5, flavor: 'Vanilla Ice Cream', weight: '1 kg', price: 7999 },
  { id: 6, flavor: 'Vanilla Ice Cream', weight: '2 kg', price: 14999 },
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
                                    Whey Protein 80 – The Protein Works™ (UK)
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
                                    Note: Protein Works used to sell Whey Protein 80 with a 25 g scoop, resulting in 40 servings in 1 kg (2.2 lbs)
                                     and 80 servings in 2 kg (4.4 lbs). There used to be 20 g protein in a 25 g scoop. Recently, the brand has
                                      changed the scoop size to 30 g, resulting in 33 servings in 1 kg (2.2 lbs) and 66 servings (4.4 lbs).
                                       This change has led to an increase in protein content per scoop. Now, there is 22 g protein in a 30 g scoop.
                                </p>
                            </div>
                            <div id="whey-advantages-back">
                                <ul>
                                    <li>Highest Quality Whey Protein</li>
                                    <li>Winner of Best Protein Award in UK</li>
                                    <li>Brand Name: The Protein Works™ (UK)</li>
                                    <li>100% Original. Directly Imported from UK</li>
                                    <li>Extremely high in BCAAs and Glutamine</li>
                                    <li>Approximately 4.5 g BCAAs and 3.5 g Glutamine per serving</li>
                                    <li>Ultra Pure, Premium Grade Whey Protein</li>
                                    <li>66 Servings in 2 kg (4.4 lbs)</li>
                                    <li>20 g Protein in 25 g serving or 22 g Protein in 30 g serving</li>
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
                                            onClick={() => {
                                            alert(
                                                `Added to cart:\n${selectedVariant.flavor} - ${selectedVariant.weight}\nQuantity: ${quantity}\nTotal: ₨${(selectedVariant.price * quantity).toLocaleString()}`
                                            );
                                            }}
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

export default Whey_protien;
