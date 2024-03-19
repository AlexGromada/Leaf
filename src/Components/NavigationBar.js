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
            <AdvancedImage cldImg={cld.image("leaf/LeafLogo")} alt='Leaf' />
            <div className="NavBar">
                <div className="search">
                    <Link to= "/Leaf/restaurants">Відчинені ресторани</Link>
                    <div>
                        <a href="/#"><AdvancedImage cldImg={cld.image("leaf/search")} alt="Downloading error"/>Search</a>
                        <a href="/#"><AdvancedImage cldImg={cld.image("leaf/navigation")} alt="Downloading error"/>Find us</a>
                    </div>
                </div>
                <nav>
                    <Link to = "/Leaf/menu">Меню</Link>
                    <Link to= "/#">Стратегія впливу</Link>
                    <a href = "/#">Якість та гігієна</a>
                    <a href = "/#">Кар'єра</a>
                </nav>
            </div>
        </header>
    )
}