import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar"
import ScrollInfo from "./Components/ScrollInfo"
import InfoBox from './Components/Info_box';
import BigInfoBox from './Components/BigInfo_box';
import Footer from './Components/Footer_component';
import LittleInfoBox_img1 from "./img_folder/salad1.jpg"
import InfoBoxImg from "./img_folder/InfoBox2.jpg"
import Danger from "./img_folder/Danger.jpg"
import Juice from "./img_folder/Juice_img.png"
import LittleInfo from './Components/LittleInfo_box';
import GreenEarth from "./img_folder/GreenEarth.jpg"
import WorkWithUs from "./img_folder/WorkWithUs.avif"

function App() {
  return (
    <div>
      <header>
          <NavBar/>
      </header>
      <main>
        <ScrollInfo/>
        <div>
          <InfoBox image = {Danger} title = "Правила безпеки" mainText = "Шановні гості, під час повітряної тривоги або за відсутності електроенергії заклад не працюватиме. Після завершення тривоги чи відновлення постачання електроенергії нам потрібний час, аби відкрити заклади."/>
          <InfoBox image = {InfoBoxImg} title = "Завітати чи замовити?" mainText = "Велика кількість наших клієнтів надає перевагу відвідуванню , але через війну не всі ресторани Leaf працюють у даний момент. Ви можете дізнатись які заклади відчинені у вашому місті та де вони знаходяться , а також перевірити наявність функції доставки у них натиснувши на клавішу 'Детільніше'."/>
        </div>
        <BigInfoBox image = {Juice} title = "Соки тепер у Leaf" mainText = "Нещодавно у нашому меню відбулось важливе оновлення. Тепер ви можете замовити сік на будь який смак. Усі продукти з яких виготовляється продукція свіжа і зберігається у відповідних умовах. Між іншим просто зараз у наших ресторанах проходить голосування соки переможці якого будуть додані у меню першими. Неодмінно завітайте та голосуйте за свого фаворита!" />
        <div>
          <LittleInfo image = {WorkWithUs} title = "Робота у Leaf" mainText = "Приєднуйтесь до команди Leaf. З нами ти зможеш поєднати навчання , роботу та відпочинок. " />
          <LittleInfo image = {LittleInfoBox_img1} title = "Нова продукція" mainText = "У цьому розділі можна переглянути список усії наших новинок." />
          <LittleInfo image = {GreenEarth} title = "Зелена Земля" mainText = "Наш благодійний проект 'Зелена Земаля' працює задля покращення екології в Україні. Зробімо світ краще разом!" />
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;