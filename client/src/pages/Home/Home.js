import React from "react";
import '../../assets/scss/portfolio.scss'
import searcher from'../../assets/icons/figma/searcher.svg'
import arrow1 from'../../assets/icons/figma/arrow1.svg'

import pt from'../../assets/icons/figma/pt.svg'
import { GoSearch } from 'react-icons/go';


function Home() {

    return(
        
        <div className="content">
            <div className="header-title">
                <p className="ht t1 white"> NFTs Portfolio</p>
                <p className="ht t2 white"> Below are listed the stats for NFT collections and individual assets that have sold<br></br> for the highest prices. We the data list in descending order.</p>
            </div>
            <div className="middle-title">
                <div className="left-title">
                    <p className="LT t3 black"> Collection </p>
                    <p className="RT t3 grey">Available to Mint</p>
                </div>
                <div className="right-title">
                    <div className="searchPanel">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                    <div className="greypanel width1">                       
                        <p className="t3 white">Perks</p>
                        <img src={arrow1} alt="arrow"/>
                    </div>
                    <div className="greypanel width2">                        
                        <p className="t3 white ">Jane Copper</p>
                        <img src={arrow1} alt="arrow"/>
                    </div>
                </div>
            </div>
            <h1>WELCOME!WELCOME!WELCOME!WELCOME!WELCOME!</h1>
            
        </div>
        
    )
}

export default Home