import React from 'react'
import "./BigInfo_box.css"

export default function BigInfoBox(props){
  return (
    <div className='BigInfo'>
      <div className='big_info_img_container'><img src={props.image} alt='Downloading error'/></div>
      <div className='BigInfo_info_container'>
        <p className='BigTitle'>{props.title}</p>
        <p>{props.mainText}</p>
        <button className='MoreInfoBtn_BigInfo_box'>
          <a href='/#'>Детальніше</a>
        </button>
      </div>
    </div>
  )
}