import React from "react"
import '../../assets/scss/portfolio.scss'

const Photocard=({cardphoto, cardicon})=>{

    return(
        <div className="card col-xl-4 col-md-6 col-sm-12">
            <div className="main-card">                        
                <img className="mainpt" src={cardphoto} alt="photocard"/> 
                <p className="CT1 t4 white ">Streaming</p>
                <p className="t2 fw white">
                    Monthly Collaborative Digital Marketing Sessions
                </p>
                <div className="CPT">
                    <img className="pt" src={cardicon} alt="icon"/>
                    <p className="t4 white fw">Jane Cooper</p>
                </div>
            </div>
        </div>

    )
}

export default Photocard
