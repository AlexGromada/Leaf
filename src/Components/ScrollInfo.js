import React , {useEffect, useState}from 'react'
import "./ScrollInfo.css"
import pic1 from "../img_folder/Juice_img.png"
import pic2 from "../img_folder/salad1.jpg"
import pic3 from "../img_folder/salad2.jpg"

export default function ScrollInfo() {

  let mainText1 = "Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read Some text to read";
  let mainText2 = "Відкрий світ виборювачок змін та видатних учених, мрії яких змінили сьогодення. Право голосу, рівні права, теорія відноснос Відкрий світ виборювачок змін та видатних учених, мрії яких змінили сьогодення. Право голосу, рівні права, теорія відноснос";
  let mainText3 = "Відкрий світ виборювачок змін та видатних учених, мрії яких змінили сьогодення. Право голосу, рівні права, теорія відноснос Відкрий світ виборювачок змін та видатних учених, мрії яких змінили сьогодення. Право голосу, рівні права, теорія відноснос";
  let title1 = "Some text to read";
  let title2 = "Some text to read2";
  let title3 = "Some text to read3";

  let imgArray = [pic1, pic2, pic3]
  let textArray = [mainText1, mainText2, mainText3]
  let titleArray = [title1, title2, title3]
  let [Index, ChangeIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      ChangeIndex(Index => (Index===imgArray.length-1 ? 0 : Index+1))
    }, 10000);
    
    return () => clearInterval(timer);
  });
  
  const backScroll = () => {
    ChangeIndex(Index => (Index === 0 ? Index = 2 : Index-=1))
  }

  const forwardScroll = () => {
    ChangeIndex(Index => (Index===imgArray.length-1 ? 0 : Index+1))
  }

  var ScrollImage = imgArray[Index]
  var ScrollText = textArray[Index]
  var ScrollTitle = titleArray[Index]

  return (
      <div className='ScrollInfo' style={{backgroundImage: `url(${ScrollImage})`}}>
        <div className='TextInsideScroll'>
          <div>
            <p className='ScrollTitle'>{ScrollTitle}</p>
            <p className='ScrollMainText'>{ScrollText}</p>
          </div>
          <div className='Scroll_and_MoreInfoBtn'>
            <button onClick={backScroll} className='ScrollBack' />
            <button className='MoreInfoBtn_ScrollInfo'>
              <a href='/#'>Детальніше</a>
            </button>
            <button onClick={forwardScroll} className='ScrollForward'/>
          </div>
        </div>
      </div>
  )
}