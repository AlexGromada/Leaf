import React from 'react'
import "./Info_box.css"

export default function InfoBox(props){
  return (
    <div className='Info_box'>
      <div className='info_box_img_container'><img src={props.image} alt='Downloading error'/></div>
      <p className='Title'>{props.title}</p>
      <p className='MainText'>{props.mainText}</p>
      <button className='MoreInfoBtn'>
        <a href='/#'>Детальніше</a>
      </button>
    </div>
  )
}