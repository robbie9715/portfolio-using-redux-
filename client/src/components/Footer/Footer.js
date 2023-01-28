import React from "react";
import '../../assets/scss/footer.scss'
import footericon from '../../assets/icons/footer/footericon.svg'


const Footer = () =>{
    return(
        <div className="footer row" >
            <p className="footertitle col-md-6 col-sm-12">Copyright © 2022. Designed by Themesflat</p>
            <img className="footer-iconset col-md-6 col-sm-12" src={footericon}/>
        </div>           
    )

}

export default Footer