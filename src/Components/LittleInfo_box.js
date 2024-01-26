import React from "react";
import "./LittleInfo_box.css"

export default function LittleInfo(props){
    return(
        <div className="LittleInfo">
            <div className="ImgContainer"><img src={props.image} alt="Downloading error"/></div>
            <p className="LittleBoxTitle">{props.title}</p>
            <p className="LittleBoxMainText">{props.mainText}</p>
            <button className="MoreInfoBtn_LittleInfo"><a href="/#">Детальніше</a></button>
        </div>
    )
}