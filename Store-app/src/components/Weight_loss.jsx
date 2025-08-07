
import React from "react";
import mass_pic_1 from '../assets/Thermopro-600x600.jpg'
import mass_pic_2 from '../assets/cla_60_softgels.1-1-600x600.jpg'
import mass_pic_3 from '../assets/mass-gainer-3.jpg'

import { Link } from "react-router-dom";

function Weight_loss() {
    
  return (
    <div className="cotainer-fluid">
        <div className="container">
            <div className="row">
                <div className="col mt-5" id="mass-hero-col">
                    <div id="mass-hero">
                        <h1>Weight Loss</h1>
                         <p>If you are looking for an effective fat burner in Pakistan, look no further than our high-quality yet affordable fat burning supplements.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="mass-gainer-back">
                        <div id="mass-img-side">
                            <img src={mass_pic_1} alt="img" width={'200px'}/>
                        </div>
                        <div id="mass-name-back">
                            <p>
                                <b>
                                   Thermopro (Fat Destroyer) Mega Sale!
                                </b>
                            </p>
                        </div>
                        <div id="mass-star-price-back">
                            <div id="mass-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="mass-price">
                                <p>
                                    <b>
                                        <del style={{color:'gray'}}>
                                            Rs 5000.00    
                                        </del> - <br />
                                        Rs 1999.00
                                    </b>
                                </p>
                            </div>
                            <div id="mass-btn-back">
                               <Link to="/Thermopro">
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="mass-gainer-back">
                        <div id="mass-img-side">
                            <img src={mass_pic_2} alt="img" width={'200px'}/>
                        </div>
                        <div id="mass-name-back">
                            <p>
                                <b>
                                    CLA (FOR A LEAN AND SHREDDED BODY)
                                </b>
                            </p>
                        </div>
                        <div id="mass-star-price-back">
                            <div id="mass-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="mass-price">
                                <p>
                                    <b>
                                       <del style={{color:'gray'}}>
                                            ₨6,000.00
                                        </del> – <br /> ₨3,149.00
                                    </b>
                                </p>
                            </div>
                            <div id="mass-btn-back">
                                 <Link to="/Cla">
                                     <button>Shop Now</button>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="mass-gainer-back">
                        <div id="mass-img-side">
                            <img src={mass_pic_3} alt="img" width={'200px'}/>
                        </div>
                        <div id="mass-name-back">
                            <p>
                                <b>
                                   High Protein Diet Meal Replacement Mega Sale!
                                </b>
                            </p>
                        </div>
                        <div id="mass-star-price-back">
                            <div id="mass-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="mass-price">
                                <p>
                                    <b>
                                        <del style={{color:'gray'}}>
                                            Rs10000.00    
                                        </del> – <br />₨4,999.00
                                    </b>
                                </p>
                            </div>
                            <div id="mass-btn-back">
                                <Link to="/High_protienDiet">
                                     <button>Shop Now</button>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

            <div className="row">
                <div className="col">
                    <div id="gainer-detail-hero">
                        <p>
                            We are offering a competitive price for our mass gainer products so that everyone can get the most 
                            out of them and gain their desired body weight. So, if you are willing to build your mass with 
                            imported & high-quality products, we are here with our best weight gainer supplement!
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="gainer-1">
                        <h4>
                           ALL IN ONE (Ultimate Mass Gainer)
                        </h4>
                        <p>
                            The product contains optimal dosages of Creatine, Monohydrate, Digezyme, Soya Protein, and L-Glutamine,
                             allowing you to build muscles without buying hundreds of other weight-gain protein shakes. 
                             It is also good in taste, so you can treat your taste buds while building your body.

                             It’s available for only Rs 6,099 - Rs 9,999/-, so you can save bucks while building the macho body you’ve already dreamed of. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="gainer-2">
                       <h4> Total Mass Matrix </h4>
                       <p>                      
                            Our Total Mass Matrix is another nutritious mass gainer protein powder made with calorie-rich natural ingredients.
                            It is made for those who want bulky bodies and muscle mass that takes away everyone’s breath. 
                            It has an optimal 2:1 carb-to-protein ratio and a whopping 490 calories per serving. In addition, 
                            every cup of supplement provides 30g of protein which is essential for muscle growth. 
                            Available for only Rs 8,699/-, this amazing blend has milk protein concentrated in it also which 
                            promises a slow yet rewarding release of protein into the body. Simply put, your body will keep 
                            getting the nutrition all day!
                       </p>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="gainer-3">
                        <h4>
                            Pure Fine Oats
                        </h4>
                        <p>
                            Nothing sounds as healthy as oats. They are the simplest way to gain weight. This product is made from 100% natural Scottish oats that are ground to the finest consistency.
                        </p>
                        <p>
                            This is one of the cheapest weight gain options available with high soluble fiber, low GI carbohydrates,
                             iron, calcium, zinc, and vitamin E. <br />
                             Available at Rs 4,499/-, this fine powder can be blended into liquids for quick drinking. 
                             In addition, it has beta-glucans, which promise exceptional immune health.  <br />
                             Pure Fine Oats has a low GI, which helps reduce body fat while helping you gain lean mass that upscales your personality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Weight_loss;
