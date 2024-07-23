
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Foodcards from './Foodcards';
// import { Link } from 'react-router-dom';

// const  Foodspage = () => {
//   const [users, setUsers] = useState([]);
// const [showFullText, setShowFullText] = useState(false);

//   const toggleText = () => {
//     setShowFullText(!showFullText);
//   };
//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/foodfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <>
     
   
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Foodcards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//      </>
//   );
// }

// export default  Foodspage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../Cardsnew'; // Make sure the path is correct
import { Link } from 'react-router-dom';


const Foodspage = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [users, setUsers] = useState([]);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/foodfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/foods" />
        ))}
      </div>
    </div>
    <div className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Boost your energy with a prime drink online.</h5>
            <div className='content'>
              {showFullText ? (
                <p>
                   online.In the summer season, the body requires more water. At this time, drinks play an important role.
                  Are you searching for an energy drink in hot weather? You have reached your desired place. Home Essentials Hive is the platform that provides prime drinks online. In the summer season, the body requires more water. At this time, drinks play an important role. It charges the energy level, prevents the body from dryness and maintains the stomach functioning. They also keep the body temperature cool. They also maintain the mental level of human beings by preventing them from hypotension. The drinks can be taken at any time, like early in the morning, in hot afternoons, and before sleeping at night, and they will not have any effect on health.<br/>
                  <b>Entertainment with drinks online</b><br/>
                  If a family is planning for entertainment, drinks are an essential item. It provides a sense of tranquillity during parties, family gatherings, events and Picnics. It also pleasures children. They love to drink their favourite flavours that not only make them strong but also make their mood happy. In the post-COVID world, people have stopped going to the market, especially to purchase small goods, so now drinks can be made available online. It will be delivered in 3-4 working days, but it may take seven working days in peak season.<br/>
                  <b>Buy drinks online for better health.</b><br/>
                  In the Humid weather, the demand for drinks has increased, so various varieties of drinks are available, like strawberry juices, lemon drinks, and different varieties of shakes such as mango shakes, banana shakes, apple shakes and many others. Besides this, various types of soft drinks are also present. These drinks are available in high-quality tin packs and disposable glass to maintain heightened. All these drinks are made up by natural fruits that are safe for human health. They not only provide energy but also allow the skin to remain fresh.<br/>
                  <b>
                    Why choose Home Essentials Hive to buy prime drinks online
                  </b><br/>
                  Home Essentials hive ranks among the top-selling UK product brands that offer prime drinks at discounted rates. We have years of experience serving our clients. We ensure to provide premium quality products. We care about your desires, so we provide you with healthy drinks. We have different drinks varieties so you can enjoy various flavours that suit your mood. Contact us to buy energy drinks at cheaper rates that reduce financial stress and energy. Our customer care staff is available round the clock for your assistance. These drinks allow you to have a productive day even during hot weather.
                </p>
              ) : (
                <p>
                  Are you searching for an energy drink in hot weather? You have reached your desired place. Home Essentials Hive is the platform that provides prime drinks 
                  
                </p>
              )}
               <Link onClick={toggleText} className='mb-2'>
              {showFullText ? 'Read less' : 'Read more'}
            </Link>
            </div>
           
          </div>
        </div>
      </div></>
  );
}

export default Foodspage;