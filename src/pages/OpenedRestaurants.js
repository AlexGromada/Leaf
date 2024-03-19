import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react';
import "./OpenedRestaurants.css"
import { useState } from 'react';
import JSON from "../JSON/OpenedRestaurants.json"
import NavigationBar from "../Components/NavigationBar"

export default function OpenedRestaurants() {

    let cld = new Cloudinary({
        cloud: {
            cloudName: "dzifbqu3y"
        }
    });
    
    const [City, NewCity] = useState('')
    const [Region, NewRegion] = useState('')

    let CurentCity= JSON.region.filter(item => item.City === City)
    let CurentRestaurant = JSON.restaurants.filter(item => item?.place?.includes(City)).filter(item => item?.place?.includes(Region))

    return (
        <div className='OpenedRestaurants'>
            <NavigationBar/>
            <AdvancedImage cldImg={cld.image("leaf/FindUs")}/>
            <h1>Знайдіть найближчий до вас заклад Leaf</h1>
            <form name="OpenedRestaurants">
                <label>
                    Оберіть місто закладу
                    <div className='CustomCitySelect'>
                        <div className='CustomArrowBlock'/>
                        <div className='CityField' tabIndex="-1">
                            <span>{City}</span>
                        </div>
                        <ul>
                            <li onClick={e => {NewCity(e.target.innerText); NewRegion("")}}>Odesa</li>
                            <li onClick={e => {NewCity(e.target.innerText); NewRegion("")}}>Lviv</li>
                            <li onClick={e => {NewCity(e.target.innerText); NewRegion("")}}>Lugansk</li>
                            <li onClick={e => {NewCity(e.target.innerText); NewRegion("")}}>Crimea</li>
                            <li onClick={e => {NewCity(e.target.innerText); NewRegion("")}}>Donetsk</li>
                            <li onClick={e => {NewCity(e.target.innerText); NewRegion("")}}>Kyiv</li>
                            <li onClick={e => {NewCity(e.target.innerText); NewRegion("")}}>Vinitsa</li>
                            <li onClick={e => {NewCity(e.target.innerText); NewRegion("")}}>Dnipro</li>
                            <li onClick={e => {NewCity(e.target.innerText); NewRegion("")}}>Belgrad</li>
                        </ul>
                    </div>
                </label>
                <label className={City === '' ? "none" : ""}>
                    Оберіть район закладу
                    <div className='CustomCitySelect'>
                        <div className='CustomArrowBlock'/>
                        <div className='RegionField' tabIndex="-1">
                            <span>{Region}</span>
                        </div>
                        <ul onChange={e => NewRegion(e.target.value)}>
                            <li value=""></li>
                            { CurentCity.map(item => <li key={item.id} value={item.name} onClick={e => {NewRegion(e.target.innerText)}}>{item.name}</li>)}
                        </ul>
                    </div>
                </label>
            </form>
            <div>
                {CurentRestaurant.map(item => <Results key={item.id} info={item.info} opened={item.opened} delivery={item.delivery}/>)}
            </div>
        </div>
    )
}

function Results(props){
    return(
        <div className='results'>
            <p>{props.info}</p>
            <div>
                <div className={props.opened === true? "green_circle" : "red_circle"}/>
                <p>Відчинено</p>
                <div className={props.delivery === true? "green_circle" : "red_circle"}/>
                <p>Доставка</p>
            </div>
        </div>
    )
}