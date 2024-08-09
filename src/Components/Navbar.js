import React, { useEffect, useState } from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useCart } from './Pages/Adminside/CartContext'
const Navbar = () => {
  const userlogin = localStorage.getItem("user");
  const navigate = useNavigate();
  const { cartItems } = useCart();
const [cartCount, setCartCount] = useState(0);

useEffect(() => {
   
  setCartCount(cartItems.length);
}, [cartItems]);


  const Logout=()=>{
    localStorage.clear("user")
    alert("Logout Sucessfully")
    navigate("/log")
  }
  return (
    <div>
       <div>
  <div className="note">
    <center>
      <p className>NEW FEATURE ALERT: You can now Favourite Products, allowing faster adding to your basket on core
        lines.</p>
    </center>
  </div>
  <div className="d-flex">
   
    <div className>
    
     <Link to='/' ><img src="/Images/logo.png" alt className="logo" /></Link>
    </div>
    <div className="phone ">
      <a href='Tel:+442035041721'><i className="bi bi-telephone" />+442035041721</a>
    </div>
   
  </div>
  <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link ms-5 text-white " aria-current="page" href="/">HOME</a>
       
          <div className="dropdown">
 <Link to="/deparments"><button
    className="btn navbarsa dropdown-toggle text-white"
    type="button"
    id="dropdownMenuButton"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="true"
  >
    DEPARTMENTS
  </button></Link> 
  <div className="dropdown-menu homenavbar " aria-labelledby="dropdownMenuButton">
    <div className="d-flex flex-wrap">
      <div className="d-flex flex-column flex-md-row ">
        <div className="me-5 mb-3 mb-md-0 ">
       <Link to='/category/batteries' className='foodsnv' ><p className="foodsnv ms-3 d-inline">Batteries</p> </Link>  <br/><br/>
          <p className="foodsnv ms-3 d-inline">FOOD&DRINK</p>
          <Link className="dropdown-item" to="/category/foodanddrinks/drinks">
            DRINK
          </Link>
          <Link className="dropdown-item" to="/category/foodanddrinks/foods">
            FOOD
          </Link>
          <p className="foodsnv ms-3 d-inline">SmokingProducts</p>

          <Link className="dropdown-item" to="/category/smoking/lighter">
            Lighter & Matches
          </Link>
          <Link className="dropdown-item" to="/category/smoking/electrical">
            Electrical
          </Link>
          <Link className="dropdown-item" to="/category/smoking/essentional">
            Smoking Essential
          </Link>

          <p className="foodsnv ms-3 d-inline">Bathroom</p>
          <Link className="dropdown-item" to="/category/bathroom/bathroommain">
            Bathroom Scale
          </Link>
          <Link className="dropdown-item" to="/category/bathroom/mirrormain">
            Mirror
          </Link>
          <Link className="dropdown-item" to="/category/bathroom/showermain">
            Shower Curtains
          </Link>
          <Link className="dropdown-item" to="/category/bathroom">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Pound Line</p>
          <Link className="dropdown-item" to="/category/poundline/bathroombeauty">
            Bathroom/Cosmetics
          </Link>
          <Link className="dropdown-item" to="/category/poundline/electric">
            Electrical
          </Link>
          <Link className="dropdown-item" to="/category/poundline/firstaid">
            First Aid/Pharmacy
          </Link>
          <Link className="dropdown-item" to="/category/poundline">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Textile</p>
          <Link className="dropdown-item" to="/category/textilesaccessories/aprons">
            Aprons
          </Link>
          <Link className="dropdown-item" to="/category/textilesaccessories/bedding">
            Bedding
          </Link>
          <Link className="dropdown-item" to="/category/textilesaccessories/clothing">
            Clothing
          </Link>
          <Link className="dropdown-item" to="/category/textiles-Accessories">
            view all
          </Link>
        </div>
        <div className="me-5 mb-3 mb-md-0">
        <Link to='/phoneaccessories' ><p className="foodsnv ms-3 d-inline">Phone Accessories</p></Link> <br/> <br/>
        <p className="foodsnv ms-3 d-inline">Diy</p>
          <Link className="dropdown-item" to="/category/diye/freshner">
            Air Freshners
          </Link>
          <Link className="dropdown-item" to="/category/diye/akonobol">
            Akzonobel
          </Link>
          
          <Link className="dropdown-item" to="/category/diye">
            view all
          </Link>

          <p className="foodsnv ms-3 d-inline">Electrical</p>
          <Link className="dropdown-item" to="/category/electricalde/clock">
            COLCKS
          </Link>
          <Link className="dropdown-item" to="/category/electricalde/cameras">
            DUMMY CAMERAS
          </Link>
          <Link className="dropdown-item" to="/category/electricalde/digital">
            DIGITAL ACCESSORIES
          </Link>
          <Link className="dropdown-item" to="/category/electricalde">
            view all
          </Link>

          <p className="foodsnv ms-3 d-inline">CHINA</p>
          <Link className="dropdown-item" to="/category/chinaproducts/cookware">
            COOKWARE
          </Link>
          <Link className="dropdown-item" to="/category/chinaproducts/crockery">
            CROCKERY
          </Link>
          <Link className="dropdown-item" to="/category/chinaproducts/dinner">
            DINNER SETS
          </Link>
          <Link className="dropdown-item" to="/category/chinaproducts">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Pest Control</p>
          <Link className="dropdown-item" to="/category/pestcontrol/rentokil">
            RENTOKIL
          </Link>
          <Link className="dropdown-item" to="/category/pestcontrol/stv">
           STV INTERNATIONAL
          </Link>
          <p className="foodsnv ms-3 d-inline">Toiletries</p>
          <Link className="dropdown-item" to="/category/toiletries/babay">
            Baby Care
          </Link>
          <Link className="dropdown-item" to="/category/toiletries/cotton">
            Cotton Wool
          </Link>
         
          <Link className="dropdown-item" to="/category/toiletries">
            view all
          </Link>

         
          
        </div>
        <div className="me-5 mb-3 mb-md-0">
        <Link to='/category/obstical'><p className="foodsnv ms-3 d-inline">OBSOLETE</p> </Link><br/> <br/>
        <p className="foodsnv ms-3 d-inline">HOUSE HOLD</p>
          <Link className="dropdown-item" to="/category/householdcleaners/freshn">
            Air Freshner
          </Link>
          <Link className="dropdown-item" to="/category/householdcleaners/car">
            Car Care
          </Link>
          <Link className="dropdown-item" to="/category/householdcleaners/bleech">
            Bleach
          </Link>
          <Link className="dropdown-item" to="/category/householdcleaners">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Kitchenware</p>
          <Link className="dropdown-item" to="/category/kitechenwear/bakeware">
            Bakeware
          </Link>
          <Link className="dropdown-item" to="/category/kitechenwear/bareware">
           Bareware
          </Link>
          
          <Link className="dropdown-item" to="/category/kitechenwear">
           View all
          </Link>

          <p className="foodsnv ms-3 d-inline">Pet Products</p>
          <Link className="dropdown-item" to="/category/petproducts/birds">
            Bird Products
          </Link>
          <Link className="dropdown-item" to="/category/petproducts/cat">
            Cat Products
          </Link>
         
          <Link className="dropdown-item" to="/category/petproducts">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Kids Products</p>
          <Link className="dropdown-item" to="/category/kidsproduct/babyproducts">
            Baby Products
          </Link>
          <Link className="dropdown-item" to="/category/kidsproduct/kidssto">
           Kids Storage
          </Link>
          <Link className="dropdown-item" to="/category/kidsproduct">
           View all
          </Link>
          <p className="foodsnv ms-3 d-inline">Gardening</p>
          <Link className="dropdown-item" to="/category/gardening/bbq">
            Bbq
          </Link>
          <Link className="dropdown-item" to="/category/gardening/bird">
           Birdcare
          </Link>
         
          <Link className="dropdown-item" to="/category/gardening">
           View all
          </Link>

        </div>
        <div className="me-5 mb-3 mb-md-0">
        <p className="foodsnv ms-3 d-inline">Party Ware</p>
          <Link className="dropdown-item" to="/baloon">
            Balloon Weights
          </Link>
          <Link className="dropdown-item" to="/category/partyware/pumps">
           Baloons Pumps
          </Link>
          <Link className="dropdown-item" to="/category/partyware/banner">
            Banners
          </Link>
          <Link className="dropdown-item" to="/category/partyware">
            view all
          </Link>
          
          <p className="foodsnv ms-3 d-inline">Glassware</p>
          <Link className="dropdown-item" to="/category/glassweare/cakes">
            Cakestands
          </Link>
          <Link className="dropdown-item" to="/category/glassweare/crystal">
            Crystal
          </Link>
         
          <Link className="dropdown-item" to="/category/glassweare">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Hardware</p>
          <Link className="dropdown-item" to="/category/hardware/furniture">
            Furniture
          </Link>
          <Link className="dropdown-item" to="/category/hardware/mats">
           Mats & Rugs
          </Link>
          <Link className="dropdown-item" to="/category/hardware">
           View all
          </Link>
          <p className="foodsnv ms-3 d-inline">Home & Decore</p>
          <Link className="dropdown-item" to="/category/homedecore/st">
            St George
          </Link>
          <Link className="dropdown-item" to="/category/homedecore/candel">
            Candels
          </Link>
          <Link className="dropdown-item" to="/category/homedecore">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Disposable Bags</p>
          <Link className="dropdown-item" to="/category/disposible/disposible">
            Bin Bag
          </Link>
          <Link className="dropdown-item" to="/category/disposible/tablewear">
            Disposible Tablewear
          </Link>
          <Link className="dropdown-item" to="/category/disposible">
            view all
          </Link>
        </div>
        <div className="me-5 mb-3 mb-md-0">
        
          <p className="foodsnv ms-3 d-inline">Plastic Houseware</p>
          <Link className="dropdown-item" to="/category/plastichousewares/foodcon">
            Food Containers
          </Link>
          <Link className="dropdown-item" to="/category/plastichousewares/kidsplas">
           Kids Plastic Products
          </Link>
          
          <Link className="dropdown-item" to="/category/plastichousewares">
           View all
          </Link>

          <p className="foodsnv ms-3 d-inline">Seasonal Sports</p>
          <Link className="dropdown-item" to="/category/seasonalsports/cooler">
            Cooler Bags
          </Link>
          <Link className="dropdown-item" to="/category/seasonalsports/flask">
            Flasks
          </Link>
         
          <Link className="dropdown-item" to="/category/seasonalsports">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Stationery</p>
          <Link className="dropdown-item" to="/category/stationery/art&craft">
            Art & Craft
          </Link>
          <Link className="dropdown-item" to="/category/stationery/books">
           Books
          </Link>
          <Link className="dropdown-item" to="/category/stationery">
           View all
          </Link>
          <p className="foodsnv ms-3 d-inline">Cleaning Matterials</p>
          <Link className="dropdown-item" to="/category/cleaning/brushware">
            Brushware
          </Link>
          <Link className="dropdown-item" to="/category/cleaning/duster">
            Cloths And Dusters
          </Link>
          <Link className="dropdown-item" to="/category/cleaning">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Artifical Flower</p>
          <Link className="dropdown-item" to="/category/flowers/artifical">
            Artifical Trees
          </Link>
          <Link className="dropdown-item" to="/category/flowers/bouquet">
            Bouquets
          </Link>
          <Link className="dropdown-item" to="/category/flowers">
            view all
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

             
          <Link className="nav-link ms-5 text-white" to="/Supersunday">SUPER SUNDAY OFFERS</Link>
          <Link className="nav-link ms-5 text-white" to="/Palletdeals">PALLETS DEALS</Link>
          <Link className="nav-link ms-5 text-white" to="/Shopbybrand">SHOP BY BRAND</Link>
          <Link className="nav-link ms-5 text-white" to="/newarriv">NEW ARRIVALS</Link>
          <div className=" login">
      <Link to="/Register" className="mt-2 text-decoration-none text-white"><i className="bi bi-person" />REGISTER &nbsp;|&nbsp;</Link>
      {userlogin?(

<Link to=""  onClick={Logout} className=" snavl mt-3  text-decoration-none text-white"><i className="bi bi-person" />LOGOUT</Link>

):(

<Link to="/log" className=" snavl mt-3  text-decoration-none text-white"><i className="bi bi-person" />LOGIN</Link>
)
}
    </div>
   <div className="cart scart mt-1 ms-4 text-decoration-none text-white position-relative">
        <Link to="/addtocart" className="text-decoration-none text-white">
         <h5><i className="bi bi-cart" />  ({cartCount})</h5> 
        </Link>
      </div>
        </div>
        
      </div>
    </div>
  </nav>
  {/* <div className="container ">
    <div className='row d-flex freedd'>
    <div className=" col-lg-2 col-md-2 col-sm-12 d-flex">
      <a href className="text-decoration-none mt-1 ms-4">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/d111f8175d1341dc869b9e957676bdfb.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1">
        <a href className="text-decoration-none  "> FREE UK DELIVERY AVAILABLE
        </a>
      </div>
    </div>
    <div className=" col-lg-2 col-md-2 col-sm-12 export d-flex ">
      <a href className="text-decoration-none mt-1">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/491b00b8e0974e549fb58b25678df23a.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1 ">
        <a href className="text-decoration-none"> EXPORT &amp; FMCG SALES INFO</a>
      </div>
    </div>
    <div className=" col-lg-2 col-md-2 col-sm-12 export d-flex">
      <a href className="text-decoration-none mt-1 ms-4">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/df15fb3cb3c44772b63088dd8b72acea.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1">
        <a href className="text-decoration-none">AMAZON &amp; EBAY SELLER GUIDE</a>
      </div>
    </div>
    <div className=" col-lg-2 col-md-2 col-sm-12 export d-flex">
      <a href className="text-decoration-none mt-1 ms-4">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/2b8af9cd62a84861b239107437c01880.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1">
        <a href className="text-decoration-none "> HELP / FAQ</a>
      </div>
    </div>
  </div>
  </div> */}
</div>

    </div>
  )
}

export default Navbar