import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import {Link} from "react-router-dom"
import "./NavigationBar.css"
export default function NavBar(){

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dzifbqu3y'
        }
      });

    return(
        <header>
            <div>
                <AdvancedImage cldImg={cld.image("leaf/LeafLogo")} alt='Leaf' />
                <div className="NavBar">
                    <div className="search">
                            <a href="/#"><AdvancedImage cldImg={cld.image("leaf/search")} alt="Downloading error"/>Search</a>
                            <Link to="/Leaf/find_us"><AdvancedImage cldImg={cld.image("leaf/navigation")} alt="Downloading error"/>Find us</Link>
                    </div>
                    <nav>
                        <Link to = "/Leaf/menu">Меню</Link>
                        <a href = "/#">Стратегія впливу</a>
                        <a href = "/#">Якість та гігієна</a>
                        <a href = "/#">Кар'єра</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}