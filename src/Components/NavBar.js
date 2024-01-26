import React from "react";
import {Link} from "react-router-dom"
import "./NavBar.css"
import FindImg from "../img_folder/find_img.png"
import GpsMark from "../img_folder/gps_mark_img.avif"
import LeafImage from '../img_folder/header_img.png'

export default function NavBar(){
    return(
        <header>
            <img src={LeafImage} alt='Leaf'></img>
            <div className="NavBar">
                <div className="search">
                    <a href="/#">Відкриті ресторани</a>
                    <div>
                        <a href="/#"><img src={FindImg} alt="Downloading error"/>Search</a>
                        <a href="/#"><img src={GpsMark} alt="Downloading error"/>Find us</a>
                    </div>
                </div>
                <nav>
                    <Link to = "/menu">Меню</Link>
                    <a href = "/#">Доставка</a>
                    <a href = "/#">Стратегія впливу</a>
                    <a href = "/#">Якість та гігієна</a>
                    <a href = "/#">Кар'єра</a>
                </nav>
            </div>
        </header>
    )
}