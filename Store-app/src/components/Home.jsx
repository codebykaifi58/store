import React  from "react";
import Crousel from './Crousel';
import { useState, useEffect } from "react";

import product_1 from '../assets/product_1.png';
import product_2 from '../assets/product_2.png';
import product_3 from '../assets/product_3.png';
import product_4 from '../assets/product_4.png';
import product_5 from '../assets/product_5.png';

import { Link } from 'react-router-dom';

function Home(){
 const words = ["Categories", "Categories"];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setSpeed(75);
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
        setSpeed(150);
      }

      // Word is fully typed
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // Word is fully deleted
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);



    return(
        <>
            <Crousel/>
           
          


            <div className="container-fluid" id="product-hero">
                <div className="container">
                    <div className="row">
                        <div className="col" id="hero-col">
                             <div id="hero-magic-back" className="mt-5">
                                <p>Product<span className="typewriter"> {text}</span><span className="cursor">|</span></p>
                            </div>
                        </div>
                    </div>
                    
                   <div className="row" id="product-row">
                            {/* Product 1 */}
                            <div className="col-md-4 mb-4">
                                <div id="product_1" className="text-center">
                                    <div id="p1_img">
                                    <img src={product_1} alt="" className="img-fluid" />
                                    </div>
                                    <h4>PROTEIN <span>POWDERS</span></h4>
                                    <div id="p1_btn">
                                        <Link to="/Protien_powder">
                                            <button>Shop Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="col-md-4 mb-4">
                                <div id="product_2" className="text-center">
                                    <div id="p2_img">
                                    <img src={product_2} alt="" className="img-fluid" />
                                    </div>
                                    <h4>WEIGHT <span>GAINER</span></h4>
                                    <div id="p2_btn">
                                         <Link to="/Weight_Gainer">
                                            <button>Shop Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="col-md-4 mb-4">
                                <div id="product_3" className="text-center">
                                    <div id="p3_img">
                                    <img src={product_3} alt="" className="img-fluid" />
                                    </div>
                                    <h4>PRE & <span>INTRA WORKOUT</span></h4>
                                    <div id="p3_btn">
                                         <Link to="/Pre_Workout">
                                            <button>Shop Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                             {/* Product 4 */}
                            <div className="col-md-4 mb-4">
                                <div id="product_4" className="text-center">
                                    <div id="p4_img">
                                    <img src={product_4} alt="" className="img-fluid" />
                                    </div>
                                    <h4>FAT <span>LOSS</span></h4>
                                    <div id="p4_btn">
                                         <button>Shop Now </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 5 */}
                            <div className="col-md-4 mb-4">
                                <div id="product_5" className="text-center">
                                    <div id="p5_img">
                                    <img src={product_5} alt="" className="img-fluid" />
                                    </div>
                                    <h4>HEALTHY <span>FOODS</span></h4>
                                    <div id="p5_btn">
                                         <button>Shop Now   </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 6 */}
                            <div className="col-md-4 mb-4">
                                <div id="product_6" className="text-center">
                                    <div id="p6_img">
                                    <img src={product_1} alt="" className="img-fluid" />
                                    </div>
                                    <h4>CREATINE <span>POWDERS</span></h4>
                                    <div id="p6_btn">
                                         <button >Shop Now  </button>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div id="show-more-btn">
                                <button>Show More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col mt-5" id="about-hero-col1">
                            <h1>About 58-NS</h1>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    Welcome to <a href="#">58 Nutrition Station</a>, your premier destination for <b>premium-quality supplements</b>
                                     and accessories in <b>Azad Kashmir</b>. At The Protein Factory, we are dedicated to delivering a 
                                     diverse range of exceptional products sourced globally, ensuring you receive only the 
                                     best for your health and wellness needs.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    We are proud to be the official distributors of <b>THE PROTEIN WORKS™ (UK) </b> in <b> Azad Kashmir, </b>
                                    a brand renowned for its commitment to high-quality sports nutrition products. Our 
                                    partnership with THE PROTEIN WORKS™ ensures that all products available through our
                                    platform are manufactured in the UK, adhering to stringent quality control standards
                                     that guarantee excellence.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    In addition to <b>THE PROTEIN WORKS™,</b> we have formed strategic alliances with <b> Pure Health 
                                    Nutrition </b> and <b>Forever Youthful</b>, leading innovators in health and wellness.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    Whether you’re a fitness enthusiast, athlete, or someone looking to enhance your health naturally,
                                     <b>58 Nutrtion Station</b> has everything you need to support your health goals. Our top-selling 
                                     categories include protein powders, health supplements, and fitness accessories, all 
                                     available at competitive prices to fit your lifestyle and budget.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>
                                    Our Top-selling Categories supplements
                                </h2>
                                <p>
                                    We take pride in offering a diverse range of product categories that cater to a broad range of fitness goals. Our top-selling categories are listed below:
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>
                                    Protein Powders
                                </h3>
                                <p>
                                    Protein is an essential part of any fitness goal, and our protein powders have become a customer
                                     favorite. We offer a huge variety of high-quality options, ranging from Whey Protein 80 – 
                                     The Protein Works™ (UK) and Pea Protein to ALL IN ONE (Ultimate Mass Gainer).

                                     All of our products are made with premium quality ingredients.

                                     Our products are carefully selected to ensure that they meet the highest quality standards,
                                      so you can be confident that you’re making a healthy choice.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>
                                    Pre & Intra Workout
                                </h3>
                                <p>
                                    Our Pre & Intra-workout category includes a variety of supplements designed to help you get
                                     maximum results out of your workouts.

                                    From our BCAA Tablets, Raze Extreme and T-factor-Testosterone Booster,
                                     to Performance Vitamins, we provide all types of pre and intra-workout 
                                     supplements that help generate an extra boost of energy during your intense exercise.
                                </p>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col">
                             <h2>   What Differentiates TPF from Others?</h2>
                                <p>
                                    At The Protein Factory, we pride ourselves in being the leading provider of supplements and accessories in Pakistan. Our commitment to quality and customer satisfaction is what sets us apart from the competition.

                                Here are some of the ways we differentiate ourselves from others in the industry:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home;