import React from "react";
import whey_pic_1 from '../assets/whey-protien-1.jpg';
import Whey_pic_2 from '../assets/Whey-Protein-Front-Pic-600x600.jpg';
import Whey_pic_3 from '../assets/Diet-Iso-1-600x600.jpg';
import Whey_pic_4 from '../assets/Pea-front-600x600.jpg';
import Whey_pic_5 from '../assets/DMR-1-600x600.jpg';
import Whey_pic_6 from '../assets/Micellar-Casein-600x600.jpg';
import Whey_pic_7 from '../assets/all_recovery.png';
import Whey_pic_8 from '../assets/1-600x600.png';
import pre_pic_1 from '../assets/1080-by-1080-px-PNG-1-300x300.png';
import pre_pic_2 from '../assets/Pre-Workout-2.jpg';
import pre_pic_3 from '../assets/Pre-Workout-3.jpg';
import pre_pic_4 from '../assets/Pre-Workout-4.jpg';
import pre_pic_5 from '../assets/Pre-Workout-5.jpg';
import pre_pic_6 from '../assets/Pre-Workout-6.jpg';
import pre_pic_7 from '../assets/Pre-Workout-7.jpg';
// import mass_pic_1 from '../assets/mass-gainer-1.jpg';
// import mass_pic_2 from '../assets/mass-gainer-2.jpg';
// import mass_pic_3 from '../assets/mass-gainer-3.jpg';
import mass_pic_1 from '../assets/Thermopro-600x600.jpg';
import mass_pic_2 from '../assets/cla_60_softgels.1-1-600x600.jpg';
import mass_pic_3 from '../assets/mass-gainer-3.jpg';
import { Link } from 'react-router-dom';
function Shop(){

    return(
        <>
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
                </div>
            </div>
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
            
                    </div>
                </div>
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
        
                    </div>
                </div>

            <div className="cotainer-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col mt-5" id="mass-hero-col">
                            <div id="mass-hero">
                                <h1>Weight Gainers</h1>
                                 <p>If you are in search of highly nutritious weight gain protein shakes, you are at the right place here. 
                                    Made with premium quality ingredients, our mass gainer protein shakes are perfect for people who want 
                                    rapid mass and muscle growth.</p>
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
                                            Total Mass Matrix
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
                                                 ₨12,000.00 
                                                </del><br />
                                                ₨8,949.00
                                            </b>
                                        </p>
                                    </div>
                                    <div id="mass-btn-back">
                                       <Link to="/Total_mass_matrix">
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
                                              All in One Recovery
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
                                              ₨9,549.00 –<br /> ₨13,999.00
                                            </b>
                                        </p>
                                    </div>
                                    <div id="mass-btn-back">
                                         <Link to="/All_recovery">
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
                                            Protein Porridge 360
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
                                                    ₨15000.00    
                                                </del> – <br />₨9,999.00
                                            </b>
                                        </p>
                                    </div>
                                    <div id="mass-btn-back">
                                        <Link to="/Protein_Porridge">
                                             <button>Shop Now</button>
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
        
                 
                </div>
            </div>
        </>
    )
}
export default Shop;