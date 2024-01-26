import React from 'react'
import "./Footer_component.css"
import Logo from "../img_folder/header_img.png"
import Youtube from "../img_folder/YouTube_logo.svg"
import Facebook from "../img_folder/Facebook_logo.svg"
import Instagram from "../img_folder/Instagram_logo.svg"
import TikTok from "../img_folder/TikTok_logo.svg"
import X from '../img_folder/X_logo.svg'

export default function Footer(){
  return (
    <div name = "footer_main">
      <div name = "More_Info">
          <div>
              <p>Leaf в Україні</p>
              <a href='/#'>Leaf в Україні</a>
              <a href='/#'>Зворотний зв'язок</a>
              <a href='/#'>Знайти нас</a>
          </div>
          <div>
              <p>Кар'єра</p>
              <a href='/#'>Кар'єра</a>
              <a href='/#'>Запитання та відповіді</a>
              <a href='/#'>Зарплатний калькулятор</a>
          </div>
          <div>
              <p>Стратегія впливу</p>
              <a href='/#'>Стратегія впливу</a>
              <a href='/#'>Бережемо планету</a>
              <a href='/#'>Робочі місця</a>
          </div>
          <div>
              <p>Якість та гігієна</p>
              <a href='/#'>Якість та гігієна</a>
              <a href='/#'>Гігієна в ресторанах</a>
              <a href='/#'>Якість продукції</a>
          </div>
      </div>
      <div name = "Our_Media_links">
        <a href='/#'><img src={Youtube} alt = "YouTube"/></a>
        <a href='/#'><img src={Facebook} alt = "Facebook"/></a>
        <a href='/#'><img src={Instagram} alt = "Instagram"/></a>
        <a href='/#'><img src={TikTok} alt = "TikTok"/></a>
        <a href='/#'><img src={X} alt = "X"/></a>
      </div>
      <div name = "black_line"/>
      <a href='/#'>Політика конфіденційності</a>
      <a href='/#'>Положення та умови</a>
      <p>Усі права захищені ©2023 Leaf®</p>
      <img src={Logo} alt="out Logo"/>
    </div>
  )
}
