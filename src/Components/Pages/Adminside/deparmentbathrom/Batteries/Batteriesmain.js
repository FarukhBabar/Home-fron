
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import Batteriescards from './Batteriescards';
// import { Link } from 'react-router-dom';

// const  Batteriesmain = () => {
//   const [users, setUsers] = useState([]);
//    const [showFullText, setShowFullText] = useState(false);

//   const toggleText = () => {
//     setShowFullText(!showFullText);}

//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/Batteriesfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <>
//      <div className='container'>
//         <div className='row'>
//           <div className='col'>
//             <h5>Run your devices with a D battery</h5>
//             <div className='content'>
//               {showFullText ? (
//                 <p>
//                    Hive is a platform that offers high-quality D batteries. In the old days, electronic devices stopped working due to electricity failure, but now it's not like that.
//                   These D batteries can be used in various devices, from small watches to large geezers. It gives 1.5 volts as output, sufficient for home appliances' smooth running.  The diameter of the D battery is 61.5 MM x 33Mm <br/>
//                   <b>Why choose home essentials to buy D battery</b> <br/>
//                 Home Essential Hive is the largest product-selling brand in the UK, offering D batteries at affordable rates. We have years of experience in serving our clients across the UK. We ensure that we provide quality products to our customers so that they build trust in us. We cater to your desires and offer different types of D batteries that suit your requirements. Call us today to buy cell batteries at budget-friendly rates that reduce your financial stress and energy. Our dedicated customer care officers are available 24/7 to guide you. These premium-quality cells will enhance the health of your electronic devices. 
//                   <br/>
//                   <b>Easier life with cell battery </b><br/>
//                  The cell battery have made the life easy. Now people do not have to worry about long electric cables and adaptors.  The cables and adapters are only used for charging these batteries. The devices can be installed at runtime.<br/> 
//                   <b>Benefits </b><br/>
//                   Ever-lasting
//                 . Cell batteries are long-lasting. Their life span is from 3 to 10 years, but some  exceptional batteries can last for 25 years.<br/>
//                  . High-quality material.
//                   These batteries are made up of high-quality material that protects electronic devices from being damaged.<br/>
//                  . Rechargeable
//                   The D batteries are easily rechargeable. It consumes less electricity during charging.<br/>
//                  . Safety standards
//                   These batteries have been designed according to safety standards. A person can easily touch it without fear of electric shock.<br/>
//                 .  Flexible devices
//                   With the invention of D batteries, electronic devices have become flexible. Their portability feature allows you to carry them everywhere you want.<br/>

//                   <b>
//                     Battery cells are the best option
//                   </b><br/>
//                  As the demand for D batteries has increased, batteries of various types like nickel-cadmium and (NICD) and Nickle-metal highdryed. These types of batteries are available in different brands like  Panasonic, Energiser, Duracell, Rayovac, and Tenergy are available. The capacity of these batteries starts at 3000 mAh, and the maximum capacity is 20000 mAh. Battery cells are available in beautiful, small packaging. They are best for radios, wristwatches, electronic machines, and flashlights. These premium-quality batteries enhance the life of devices.
//                 </p>
//               ) : (
//                 <p>
                 
//                  Are you looking for a long-lasting D battery that provides more power to your electronic devices? Then you are on the right track Home Essential
                  
//                 </p>
//               )}
//                <Link onClick={toggleText} className='mb-2'>
//               {showFullText ? 'Read less' : 'Read more'}
//             </Link>
//             </div>
           
//           </div>
//         </div>
//       </div>
   
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Batteriescards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
    
// </>
//   );
// }

// export default  Batteriesmain;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import Drinkcard from './Drinkcard';

// const  Drinkpage = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/drifreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Drinkcard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default  Drinkpage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Batteriesmain = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/Batteriesfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/batteries" />
        ))}
      </div>
    </div>
  );
}

export default Batteriesmain;