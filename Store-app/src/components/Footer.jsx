import React from "react";
import logo from '../assets/footer-logo.png';
function Footer(){

    return(
        <>  
 <div id="footer-logo">
                            <img src={logo} alt="" />
                        </div>
            <div className="container-fluid" id="footer">
                       
                   <div className="row">
                        <div className="col">
                                 <div id="footer-link-back">

                                        <div id="footer-copy">
                                        <p>
                                            Copyright 2025 ©All Rights Reserved.  | &nbsp;   
                                            <span>
                                                <i>Cash on Delivery</i>
                                            </span>
                                        </p>
                                        
                                    </div>

                                    <div id="footer-ul-back">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Shop</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">RETURNED & REFUND POLICY</a></li>
                                            <li><a href="#">TERMS & CONDITION</a></li>
                                        </ul>
                                    </div>
                                    
                                    
                                </div>
                        </div>
                   </div>
            </div>
        
        </>
    )
}
export default Footer;