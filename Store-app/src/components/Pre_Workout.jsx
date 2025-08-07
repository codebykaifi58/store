import React from "react";
import pre_pic_1 from '../assets/1080-by-1080-px-PNG-1-300x300.png';
import pre_pic_2 from '../assets/Pre-Workout-2.jpg';
import pre_pic_3 from '../assets/Pre-Workout-3.jpg';
import pre_pic_4 from '../assets/Pre-Workout-4.jpg';
import pre_pic_5 from '../assets/Pre-Workout-5.jpg';
import pre_pic_6 from '../assets/Pre-Workout-6.jpg';
import pre_pic_7 from '../assets/Pre-Workout-7.jpg';
import { Link } from "react-router-dom";
function Pre_Workout() {
  return (
    <div className="cotainer-fluid">
        <div className="container">
            <div className="row">
                <div className="col mt-5" id="pre-hero-col">
                    <div id="pre-hero">
                        <h1>Pre & Intra-workout</h1>
                         <p>
                            Are you joining a gym or looking to boost your daily exercise routine to maintain 
                            or improve your physical fitness? If so, you must know about the best pre-workout
                            supplements that can help you!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="pre-workout-back">
                        <div id="pre-img-side">
                            <img src={pre_pic_1} alt="img" width={'200px'}/>
                        </div>
                        <div id="pre-name-back">
                            <p>
                                <b>
                                      Creatine Monohydrate <br /> by PHN
                                </b>
                            </p>
                        </div>
                        <div id="pre-star-price-back">
                            <div id="pre-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="pre-price">
                                <p>
                                    <b>
                                        <del style={{color:'gray'}}>
                                            Rs 5000.00    
                                        </del> - <br />
                                        ₨3,499.00
                                    </b>
                                </p>
                            </div>
                            <div id="pre-btn-back">
                                 <Link to="/Creatine_monohydrate">
                                     <button>Shop Now</button>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="pre-workout-back">
                        <div id="pre-img-side">
                            <img src={pre_pic_2} alt="img" width={'200px'}/>
                        </div>
                        <div id="pre-name-back">
                            <p>
                                <b>
                                      Omega 3 by PHN
                                </b>
                            </p>
                        </div>
                        <div id="pre-star-price-back">
                            <div id="pre-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="pre-price">
                                <p>
                                    <b>
                                       <del style={{color:'gray'}}>
                                        ₨2000.00
                                        </del> – <br />1,299.00
                                    </b>
                                </p>
                            </div>
                            <div id="pre-btn-back">
                                <Link to="/Omega3">
                                     <button>Shop Now</button>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="pre-workout-back">
                        <div id="pre-img-side">
                            <img src={pre_pic_1} alt="img" width={'200px'}/>
                        </div>
                        <div id="pre-name-back">
                            <p>
                                <b>
                                    Nitroboost Extreme <br /> Preworkout – Extreme Pump!
                                </b>
                            </p>
                        </div>
                        <div id="pre-star-price-back">
                            <div id="pre-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="pre-price">
                                <p>
                                    <b>
                                        <del style={{color:'gray'}}>
                                            Rs5000.00    
                                        </del> – <br /> Rs2,999.00
                                    </b>
                                </p>
                            </div>
                            <div id="pre-btn-back">
                               <Link to="/Nitroboost_pre">
                                     <button>Shop Now</button>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <div id="pre-workout-back">
                        <div id="pre-img-side">
                            <img src={pre_pic_3} alt="img" width={'200px'}/>
                        </div>
                        <div id="pre-name-back">
                            <p>
                                <b>
                                  Omega 3
                                </b>
                            </p>
                        </div>
                        <div id="pre-star-price-back">
                            <div id="pre-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="pre-price">
                                <p>
                                    <b>
                                        <del style={{color:'gray'}}>
                                            ₨6000.00    
                                        </del> – <br />Rs3,499.00 
                                    </b>
                                </p>
                            </div>
                            <div id="pre-btn-back">
                                <Link to="/Omega">
                                     <button>Shop Now</button>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
                    <div id="pre-workout-back">
                        <div id="pre-img-side">
                            <img src={pre_pic_4} alt="img" width={'200px'}/>
                        </div>
                        <div id="pre-name-back">
                            <p>
                                <b>
                                    Multivitamin Ultra
                                </b>
                            </p>
                        </div>
                        <div id="pre-star-price-back">
                            <div id="pre-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="pre-price">
                                <p>
                                    <b>
                                       <del style={{color:'gray'}}>
                                            ₨6000.00    
                                        </del> – <br />Rs3,499.00   
                                    </b>
                                </p>
                            </div>
                            <div id="pre-btn-back">
                                <Link to="/Multivitamin_Ultra">
                                     <button>Shop Now</button>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
                    <div id="pre-workout-back">
                        <div id="pre-img-side">
                            <img src={pre_pic_6} alt="img" width={'200px'}/>
                        </div>
                        <div id="pre-name-back">
                            <p>
                                <b>
                                    VITAMIN D3 TABLETS
                                </b>
                            </p>
                        </div>
                        <div id="pre-star-price-back">
                            <div id="pre-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="pre-price">
                                <p>
                                    <b>
                                      <del style={{color:'gray'}}>
                                        Rs6000.00
                                        </del> – <br />₨3,849.00
 
                                    </b>
                                </p>
                            </div>
                            <div id="pre-btn-back">
                                 <Link to="/Vitamin_d3">
                                     <button>Shop Now</button>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
                  <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
                    <div id="pre-workout-back">
                        <div id="pre-img-side">
                            <img src={pre_pic_7} alt="img" width={'200px'}/>
                        </div>
                        <div id="pre-name-back">
                            <p>
                                <b>
                                   Zinc And Magnesium <br /> (Ultimate Testosterone Booster)
                                </b>
                            </p>
                        </div>
                        <div id="pre-star-price-back">
                            <div id="pre-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div id="pre-price">
                                <p>
                                    <b>
                                      <del style={{color:'gray'}}>
                                        Rs3000.00
                                        </del> – <br />₨2,149.00
 
                                    </b>
                                </p>
                            </div>
                            <div id="pre-btn-back">
                                <Link to="/Zinc_And_Magnesium">
                                     <button>Shop Now</button>
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div id="pre-detail-hero">
                        <p>
                           At The Protein Factory, we proudly serve affordable yet reliable pre and intra-workout supplements.
                            Our supplements are made up of 100% natural ingredients such as creatine, amino acids, and vitamins, 
                            which can help make your body energetic enough to meet your daily workout goals. We import our
                             products directly from the UK.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="pre-1">
                        <h4>
                            T-Factor Testosterone Booster
                        </h4>
                        <p>
                            Designed to increase your body's testosterone levels naturally, our T-Factor Testosterone Booster
                             by The Protein Works™ features powerful ingredients such as D-Aspartic Acid, Fenugreek Extract,
                              and Zinc. These ingredients have been shown to enhance testosterone production. <br />
                              Regular use of the T-Factor Testosterone Booster can help improve muscle growth, strength,
                               and endurance, making it a must-have for any serious athlete or fitness enthusiast.
                                 Give your body the boost with T- Factor-Testosterone Booster!
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="pre-2">
                       <h4> BCAA Tablets</h4>
                       <p>                         
                        Our BCAA Tablets offer a convenient and effective way to improve your workout performance and recovery.
                         Formulated with a blend of branched-chain amino acids (BCAAs), including Leucine, Isoleucine, and Valine, 
                         our supplements help reduce muscle fatigue, support protein synthesis, and promote muscle growth. 
                         This product is ideal for those who want to maximize their training gains.
                       </p>

                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Pre_Workout;
