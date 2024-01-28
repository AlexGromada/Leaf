import React, { useState } from "react";
import "./MenuPage.css"
import Search from "../Components/NavBar";
import Hamburger from "../img_folder/hamburger.png"
import Burger from "../img_folder/burger.avif"
import Onigiri from "../img_folder/onigiri.png"
import Salad from "../img_folder/InfoBox2.jpg"

export default function FoodMenu() {

  const menuItems = [
    { id: 1, name: 'hamburger', categories: ['hamburger', 'sandwich', 'beef'], imgUrl: Hamburger},
    { id: 2, name: 'BuRgEr', categories: ['burger'], imgUrl: Burger },
    { id: 3, name: "Onigiri", categories: ['vegeterian', 'onigiri'], imgUrl: Onigiri},
    { id: 4, name: "Salad", categories: ['vegeterian', 'salad'], imgUrl: Salad},
    { id: 5, name: 'hamburger', categories: ['hamburger', 'sandwich', 'beef'], imgUrl: Hamburger},
    { id: 6, name: 'BuRgEr', categories: ['burger'], imgUrl: Burger },
    { id: 7, name: "Onigiri", categories: ['vegeterian', 'onigiri'], imgUrl: Onigiri},
    { id: 8, name: "Salad", categories: ['vegeterian', 'salad'], imgUrl: Salad},
    { id: 9, name: 'hamburger', categories: ['hamburger', 'sandwich', 'beef'], imgUrl: Hamburger},
    { id: 10, name: 'BuRgEr', categories: ['burger'], imgUrl: Burger },
    { id: 11, name: "Onigiri", categories: ['vegeterian', 'onigiri'], imgUrl: Onigiri},
    { id: 12, name: "Salad", categories: ['vegeterian', 'salad'], imgUrl: Salad},
    { id: 13, name: 'hamburger', categories: ['hamburger', 'sandwich', 'beef'], imgUrl: Hamburger},
    { id: 14, name: 'BuRgEr', categories: ['burger'], imgUrl: Burger },
    { id: 15, name: "Onigiri", categories: ['vegeterian', 'onigiri'], imgUrl: Onigiri},
    { id: 16, name: "Salad", categories: ['vegeterian', 'salad'], imgUrl: Salad},
    { id: 17, name: 'hamburger', categories: ['hamburger', 'sandwich', 'beef'], imgUrl: Hamburger},
    { id: 18, name: 'BuRgEr', categories: ['burger'], imgUrl: Burger },
    { id: 19, name: "Onigiri", categories: ['vegeterian', 'onigiri'], imgUrl: Onigiri},
    { id: 20, name: "Salad", categories: ['vegeterian', 'salad'], imgUrl: Salad},
    { id: 21, name: 'hamburger', categories: ['hamburger', 'sandwich', 'beef'], imgUrl: Hamburger},
    { id: 22, name: 'BuRgEr', categories: ['burger'], imgUrl: Burger },
    { id: 23, name: "Onigiri", categories: ['vegeterian', 'onigiri'], imgUrl: Onigiri},
    { id: 24, name: "Salad", categories: ['vegeterian', 'salad'], imgUrl: Salad},
    { id: 25, name: 'hamburger', categories: ['hamburger', 'sandwich', 'beef'], imgUrl: Hamburger},
    { id: 26, name: 'BuRgEr', categories: ['burger'], imgUrl: Burger },
    { id: 27, name: "Onigiri", categories: ['vegeterian', 'onigiri'], imgUrl: Onigiri},
    { id: 28, name: "Salad", categories: ['vegeterian', 'salad'], imgUrl: Salad},
    { id: 29, name: 'hamburger', categories: ['hamburger', 'sandwich', 'beef'], imgUrl: Hamburger},
    { id: 30, name: 'BuRgEr', categories: ['burger'], imgUrl: Burger },
    { id: 31, name: "Onigiri", categories: ['vegeterian', 'onigiri'], imgUrl: Onigiri},
    { id: 32, name: "Salad", categories: ['vegeterian', 'salad'], imgUrl: Salad},
    { id: 33, name: 'hamburger', categories: ['hamburger', 'sandwich', 'beef'], imgUrl: Hamburger},
    { id: 34, name: 'BuRgEr', categories: ['burger'], imgUrl: Burger },
    { id: 35, name: "Onigiri", categories: ['vegeterian', 'onigiri'], imgUrl: Onigiri},
    { id: 36, name: "Salad", categories: ['vegeterian', 'salad'], imgUrl: Salad},
    { id: 37, name: 'hamburger', categories: ['hamburger', 'sandwich', 'beef'], imgUrl: Hamburger},
    { id: 38, name: 'BuRgEr', categories: ['burger'], imgUrl: Burger },
    { id: 39, name: "Onigiri", categories: ['vegeterian', 'onigiri'], imgUrl: Onigiri},
    { id: 40, name: "Salad", categories: ['vegeterian', 'salad'], imgUrl: Salad},
  ]


  const [category, setCategory] = useState('');
  let currentMenuItems = menuItems;
  if (category) {
    currentMenuItems = menuItems.filter(item =>
      item?.categories?.includes(category)
    )
  }

  return (
    <div>
      <Search/>
      <div className="FoodMenu">
        <CategoryMenu setCategory={setCategory} />
        <div className="CurentMenu">
          {currentMenuItems.map(item =>
            <MenuItem key={item.id} item={item} />
          )}
        </div>
      </div>
    </div>
  )


  function CategoryMenu({ setCategory }) {
    return (
      <div  className="CategoryMenu">
        <button className={category==='hamburger' ? "ChosenBtnBorder" : ""} onClick={() => setCategory('hamburger')}>
          Hamburgers
        </button>
        <button className="ChosenBtnBorder" onClick={() => setCategory('burger')}>
          Burger
        </button>
        <button onClick={() => setCategory('onigiri')}>
          Onigiri
        </button>
        <button onClick={() => setCategory('salad')}>
          Salad
        </button>
        <button onClick={() => setCategory('vegeterian')}>
          Vegeterian
        </button>
      </div>
    )
  }

  function MenuItem({ item }) {
    return(
      <div className="MenuItem">
        <img src={item.imgUrl} alt="Downloading error"/>
        <h3>{item.name}</h3>
      </div>
    ) 
  }
}
// const [elements, setElements] = useState([]);
// function addElement() {
//   const element = {id: elements.length, text: 'hello world'}
//   setElements([...elements, element]);
//   console.log(elements)
// }

// return (
//   <div>
//     <div onClick={addElement}>Add Element</div>
//     {elements.map((element) => {
//       return <div key={element.id}>{element.text}</div>
//     })}
//   </div>
// )