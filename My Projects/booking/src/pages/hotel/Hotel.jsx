import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faCircleArrowLeft, faCircleArrowRight, faCircleXmark,} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";


const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/116698800.jpg?k=6e01b69f13477805fba6328099ccbcae59737f9a96df9b3881a5c2e4c585519d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/155579977.jpg?k=0bfdc39a0471280e4cae5fca0177e4c633efcfee3103742237c3d9f6f029eaf8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/233338316.jpg?k=2163a2116140d8e5ee7616fe0c3a4c66d6e2646a5cba22c08d13bbe330d447a6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/116698748.jpg?k=711952ee0cf4ae8637877d482028a8f6dd0e2a50c63d2800aba7da53891e570d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/116698765.jpg?k=8ff646afed3330363458b8813330f562eb473059b9be2ae2bfaeb8506a605cf1&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/116685463.jpg?k=afb5d4ca225abb948e405b7f694e408fb605ca6f3b4202384fbdcac11dc1a1d6&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open &&<div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow"onClick={()=>handleMove(false)} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove(false)}/>
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Radisson Blu Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>19029 Great East Road, 10101 Lusaka, Zambia</span>
          </div>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport pick-up
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg"/>
                </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of Lusaka</h1>
            <p className="hotelDesc">Radisson Blu Hotel Lusaka is offering accommodation in Lusaka. 
            Located around 300 m from Arcades Shopping Mall, the hotel is also 1.4 km away from Manda Hill Shopping Centre. 
            The hotel features a hot tub and shared lounge.The rooms at the hotel are fitted with a seating area. 
            With a private bathroom, rooms at Radisson Blu Hotel Lusaka also boast free WiFi. All units include a wardrobe.
            A buffet breakfast can be enjoyed at the property. At the accommodation you will find a restaurant serving international cuisine. 
            A vegetarian option can also be requested.
           </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
              Couples particularly like the location — they rated it 8.6 for a two-person trip. 
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
