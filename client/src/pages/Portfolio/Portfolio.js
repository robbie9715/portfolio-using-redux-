import React from "react";
import '../../assets/scss/portfolio.scss'
import searcher from'../../assets/icons/figma/searcher.svg'
import arrow1 from'../../assets/icons/figma/arrow1.svg'
import card1 from'../../assets/icons/figma/card1.svg'
import card2 from'../../assets/icons/figma/card2.svg'
import card3 from'../../assets/icons/figma/card3.svg'
import card4 from'../../assets/icons/figma/card4.svg'
import card5 from'../../assets/icons/figma/card5.svg'
import card6 from'../../assets/icons/figma/card6.svg'
import Photocard from "./Photocard";
import pt from'../../assets/icons/figma/pt.svg'
import { GoSearch } from 'react-icons/go';

const Photocard_data=[
    {
        cardphoto:card1,
        cardicon:pt
    },
    {
        cardphoto:card2,
        cardicon:pt
    },
    {
        cardphoto:card3,
        cardicon:pt
    },
    {
        cardphoto:card4,
        cardicon:pt
    },
    {
        cardphoto:card5,
        cardicon:pt
    },
    {
        cardphoto:card6,
        cardicon:pt
    }
]
function Portfolio() {

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
            <div className="card-list row">                
                {Photocard_data.map((item, index) => (
                    <Photocard
                        key={index}
                        cardphoto={item.cardphoto}
                        cardicon={item.cardicon}
                    />))}
            </div>
        </div>
        
    )
}

export default Portfolio