import React from "react";
import whey_pic_1 from '../assets/whey-protien-1.jpg';
import Whey_pic_2 from '../assets/Whey-Protein-Front-Pic-600x600.jpg';
import Whey_pic_3 from '../assets/Diet-Iso-1-600x600.jpg';
import Whey_pic_4 from '../assets/Pea-front-600x600.jpg';
import Whey_pic_5 from '../assets/DMR-1-600x600.jpg';
import Whey_pic_6 from '../assets/Micellar-Casein-600x600.jpg';
import Whey_pic_7 from '../assets/all_recovery.png';
import Whey_pic_8 from '../assets/1-600x600.png';
import { Link } from 'react-router-dom';

function Protien_powder() {
  return (
    <div className="cotainer-fluid">
        <div className="container">
            <div className="row">
                <div className="col mt-5" id="protien-hero-col">
                    <div id="protien-hero">
                        <h1>Protein Powder Products</h1>
                         <p>Unleash the power of high-quality nutrition with our whey protein supplements. 
                            Specially formulated to meet the demands of active individuals, our whey protein
                             provides an excellent source of protein to support muscle growth and repair.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="whey-protien-back">
                        <div id="whey-img-side">
                            <img src={whey_pic_1} alt="img" width={'200px'}/>
                        </div>
                        <div id="whey-name-back">
                            <p>
                                <b>
                                      Whey Protein 80 – The <br />
                                    Protein Works™ (UK)
                                </b>
                            </p>
                        </div>
                        <div id="whey-star-price-back">
                            <div id="whey-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="whey-price">
                                <p>
                                    <b>
                                        Rs 5990.00 - <br />
                                        Rs 17499.00
                                    </b>
                                </p>
                            </div>
                            <div id="whey-btn-back">
                                 <Link to="/Whey_protien">
                                    <button>Shop Now</button>
                                </Link>                              
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="whey-protien-back">
                        <div id="whey-img-side">
                            <img src={Whey_pic_2} alt="img" width={'200px'}/>
                        </div>
                        <div id="whey-name-back">
                            <p>
                                <b>
                                      Whey Protien By PHN
                                </b>
                            </p>
                        </div>
                        <div id="whey-star-price-back">
                            <div id="whey-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="whey-price">
                                <p>
                                    <b>
                                       ₨6,999.00 – <br /> ₨14,999.00
                                    </b>
                                </p>
                            </div>
                            <div id="whey-btn-back">
                                <Link to="/Whey_protien_phn">
                                    <button>Shop Now</button>
                                </Link>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="whey-protien-back">
                        <div id="whey-img-side">
                            <img src={Whey_pic_3} alt="img" width={'200px'}/>
                        </div>
                        <div id="whey-name-back">
                            <p>
                                <b>
                                    Whey Protein Isolate 90 – <br />The Protein Works™ (UK)
                                </b>
                            </p>
                        </div>
                        <div id="whey-star-price-back">
                            <div id="whey-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="whey-price">
                                <p>
                                    <b>
                                        ₨13,149.00 – <br /> ₨24,999.00
                                    </b>
                                </p>
                            </div>
                            <div id="whey-btn-back">
                               <Link to="/Whey_protien_isolate">
                                    <button>Shop Now</button>
                                </Link>   
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="whey-protien-back">
                        <div id="whey-img-side">
                            <img src={Whey_pic_2} alt="img" width={'200px'}/>
                        </div>
                        <div id="whey-name-back">
                            <p>
                                <b>
                                   Pea Protein Isolate by <br />Pure Health Nutrition – <br /> MEGA SALE!
                                </b>
                            </p>
                        </div>
                        <div id="whey-star-price-back">
                            <div id="whey-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="whey-price">
                                <p>
                                    <b>
                                        ₨5,649.00 – <br />₨8,749.00   
                                    </b>
                                </p>
                            </div>
                            <div id="whey-btn-back">
                                <Link to="/Pea_protien_isolate">
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
                    <div id="whey-protien-back">
                        <div id="whey-img-side">
                            <img src={Whey_pic_4} alt="img" width={'200px'}/>
                        </div>
                        <div id="whey-name-back">
                            <p>
                                <b>Pea Protein
                                </b>
                            </p>
                        </div>
                        <div id="whey-star-price-back">
                            <div id="whey-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="whey-price">
                                <p>
                                    <b>
                                        <del style={{color:'gray'}}>
                                            ₨10,000.00
                                        </del> <br />
                                        ₨6,749.00 
                                    </b>
                                </p>
                            </div>
                            <div id="whey-btn-back">
                                <Link to="/Pea_protien">
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
                    <div id="whey-protien-back">
                        <div id="whey-img-side">
                            <img src={Whey_pic_6} alt="img" width={'200px'}/>
                        </div>
                        <div id="whey-name-back">
                            <p>
                                <b>
                                    Micellar Casein – <br /> The Protein Works™ (UK)
                                </b>
                            </p>
                        </div>
                        <div id="whey-star-price-back">
                            <div id="whey-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="whey-price">
                                <p>
                                    <b>
                                      ₨9,549.00 – <br />₨16,749.00
 
                                    </b>
                                </p>
                            </div>
                            <div id="whey-btn-back">
                                <Link to="/Micellar_casein">
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                  <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
                    <div id="whey-protien-back">
                        <div id="whey-img-side">
                            <img src={Whey_pic_7} alt="img" width={'200px'}/>
                        </div>
                        <div id="whey-name-back">
                            <p>
                                <b>
                                   All In One Recovery
                                </b>
                            </p>
                        </div>
                        <div id="whey-star-price-back">
                            <div id="whey-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="whey-price">
                                <p>
                                    <b>
                                      ₨9,549.00 – <br />₨13,999.00
 
                                    </b>
                                </p>
                            </div>
                            <div id="whey-btn-back">
                                 <Link to="/All_recovery">
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                  <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
                    <div id="whey-protien-back">
                        <div id="whey-img-side">
                            <img src={Whey_pic_8} alt="img" width={'200px'}/>
                        </div>
                        <div id="whey-name-back">
                            <p>
                                <b>
                                   High Protein Diet Meal <br />Replacement Mega Sale!
                                </b>
                            </p>
                        </div>
                        <div id="whey-star-price-back">
                            <div id="whey-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="whey-price">
                                <p>
                                    <b>
                                        <del style={{color:'gray'}}>
                                            ₨10,000.00
                                        </del> <br />
                                      ₨4,999.00
 
                                    </b>
                                </p>
                            </div>
                            <div id="whey-btn-back">
                                 <Link to="/High_protienDiet">
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
                    <div id="whey-protien-back">
                        <div id="whey-img-side">
                            <img src={whey_pic_1} alt="img" width={'200px'}/>
                        </div>
                        <div id="whey-name-back">
                            <p>
                                <b>
                                   Protein Porridge 360
                                </b>
                            </p>
                        </div>
                        <div id="whey-star-price-back">
                            <div id="whey-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="whey-price">
                                <p>
                                    <b>
                                      ₨9,549.00 – <br />₨16,749.00
 
                                    </b>
                                </p>
                            </div>
                            <div id="whey-btn-back">
                                 <Link to="/Protein_Porridge">
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div id="protien-detail-hero">
                        <p>
                            Our whey protein price in Pakistan is guaranteed to be the lowest. Apart from that, 
                            our products are Halal certified, lab tested and are of the best quality. Experience
                            the difference with every scoop, and take your fitness to the next level!
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="protien-1">
                        <h4>
                            Whey Protein 80 - Concentrate (Most Recommended)
                        </h4>
                        <p>
                            We present you our best-selling Whey Protein, which is a must-have for your daily workouts and healthy and active lifestyle. 
                            Our UK-imported Whey Protein 80 packs a tremendous amount of protein of around 20 g in a 25 g Scoop. Moreover, it also contains 4.5 g BCAAs and 3.5 g Glutamine per Serving. 
                            If our 80% protein content doesn’t make you realize its greatness, then the starting price of only Rs 4199/- might motivate you to head to our product page and get one for yourself.
                            Excel your muscle growth experience with Whey Protein 80 and achieve the body you always dreamt of!
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="protien-2">
                       <h4> Pea Protein</h4>
                       <p>
                                                    
                        Introducing The Protein Work’s Pea Protein, a revolutionary plant-based protein supplement designed to meet the needs of today's health-conscious consumers. 
                        Carefully crafted using only non-GMO, sustainably sourced peas, our pea protein is a rich source of essential amino acids, making it an ideal choice for those who follow a vegan or vegetarian diet. 
                        Elevate your protein shakes in Pakistan with pea protein’s delicious taste and smooth texture. Our pea protein is perfect for mixing into smoothies, shakes, and other recipes. 
                        And now, for a limited time, enjoy all the benefits of our premium pea protein for an unbeatable  price in Pakistan of just Rs 5999. Take your health and fitness to the next level with The Protein Factory's Pea Protein.
                       </p>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="protien-3">
                        <h4>
                            Pure Health Nutrition 100% Whey Protein Isolate.
                        </h4>
                        <p>
                            Boost your fitness and nutrition game with Pure Health Nutrition 100% Whey Protein Isolate. Made from the highest quality whey, PHN 100% whey protein isolate is the ultimate source of fast-acting protein for active individuals and athletes.
                        </p>
                        <p>
                            With its quick absorption rate and low-calorie count, our whey protein isolate is the perfect addition to your pre- or post-workout routine, and the list of the best protein shakes in Pakistan. And now, for a limited time,  get your hands on this premium protein supplement starting at just Rs 7999! 
                       Take advantage of this incredible opportunity to support your muscles, boost your performance, and achieve your fitness goals with Pure Health Nutrition 100% Whey Protein Isolate.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="protien-4">
                        <h4>
                            All-In-One Ultimate Mass Gainer
                        </h4>
                        <p>
                            Unleash your full potential with The Protein Work’s ALL-IN-ONE Ultimate Mass Gainer. Designed for individuals looking to build lean muscle mass, our all-in-one formula combines high-quality proteins, complex carbohydrates, creatine and glutamine to support your workout and recovery. 
                            With a delicious taste and smooth texture, our mass gainer is the ultimate tool for reaching your fitness goals. And now, for a limited time, get your hands on this comprehensive nutrition solution which has the most affordable price in Pakistan. Starting from only Rs 6999! 
                            
                        </p>
                        <p>
                            Take advantage of this chance to fuel your muscles and transform your physique with The Protein Work's ALL-IN-ONE Ultimate Mass Gainer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Protien_powder;
