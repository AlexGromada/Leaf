import React, { useState } from 'react'
import "./FindUs.css"
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/react"
import JSON from "../JSON/FindUs.json"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/FooterComponent"

export default function FindUs() {
    
    const CityList = JSON.Cities
    const [SelectedCity, NewSelectedCity] = useState("")
    const CityData = JSON.CityData[SelectedCity]

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dzifbqu3y'
        }
    });

    return (
        <div className='FindUs'>
            <NavigationBar />
                <AdvancedImage cldImg={cld.image("leaf/FindUs")}/>
                <form>
                    <select onChange={e => NewSelectedCity(e.target.value)}>
                        <option value="empty_option"> </option>
                        {CityList.map(item => <option key = {item} value={item}>{item}</option>)}
                    </select>
                    <select>
                        <option value={"empty_option"}> </option>
                        {CityData?.regions?.map(item  => <option key={item} value={item}>{item}</option>)}
                    </select>
                </form>
            <Footer />
        </div>
    )
}