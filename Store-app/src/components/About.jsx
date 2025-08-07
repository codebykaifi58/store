import React from "react";
import logo from '../assets/logo.png';

function About() {
    
    return (
        <>
            <div className="container-fluid" style={{ overflowX: 'hidden' }}>
                <div className="container py-4">
                    <div className="row align-items-start" id="about-row">
                        {/* TEXT COLUMN */}
                        <div className="col-md-7 col-12 mt-4" id="about-hero-text">
                            <h2>ABOUT US</h2>
                            <p><b>58 Nutrition Station</b></p>
                            <p>
                                Welcome to <a href="#">58 Nutrition Station</a>, your premier destination for <b>premium-quality supplements</b>
                                and accessories in <b>Azad Kashmir</b>. At The Protein Factory, we are dedicated to delivering a
                                diverse range of exceptional products sourced globally, ensuring you receive only the
                                best for your health and wellness needs.
                            </p>
                            <p>
                                We are proud to be the official distributors of <b>THE PROTEIN WORKS™ (UK)</b> in <b>Azad Kashmir</b>,
                                a brand renowned for its commitment to high-quality sports nutrition products. Our
                                partnership with THE PROTEIN WORKS™ ensures that all products available through our
                                platform are manufactured in the UK, adhering to stringent quality control standards
                                that guarantee excellence.
                            </p>
                            <p>
                                In addition to <b>THE PROTEIN WORKS™</b>, we have formed strategic alliances with <b>Pure Health
                                Nutrition</b> and <b>Forever Youthful</b>, leading innovators in health and wellness.
                            </p>
                            <p>
                                Whether you’re a fitness enthusiast, athlete, or someone looking to enhance your health naturally,
                                <b>58 Nutrition Station</b> has everything you need to support your health goals. Our top-selling
                                categories include protein powders, health supplements, and fitness accessories, all
                                available at competitive prices to fit your lifestyle and budget.
                            </p>

                            <h4>FOREVER YOUTHFUL</h4>
                            <p>
                                58 Nutrition Station is pleased to announce that we have become an authorized seller of Forever Youthful.
                            </p>
                            <p>
                                At Forever Youthful, the product range will cater to both men and women, meeting a variety of
                                beauty needs ensuring everyone can embrace their most confident self.
                            </p>
                            <p>
                                We pride ourselves on sourcing only the highest quality ingredients and combining nature and
                                science to create premium solutions that deliver real results. Our commitment to excellence
                                extends beyond our products. We strive to provide an unparalleled service experience, making
                                every interaction with us a reflection of our dedication to your well-being.
                            </p>
                            <p>
                                Supporting our local economy is at the heart of our mission. By keeping our manufacturing
                                operations close to home, we not only ensure the highest standards of quality but also
                                contribute to the development of our community.
                            </p>
                        </div>

                        {/* IMAGE COLUMN */}
                        <div className="col-md-5 col-12 text-center mt-4" id="logo-about">
                            <img src={logo} alt="58 Nutrition Station Logo" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;
