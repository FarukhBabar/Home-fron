import React, { useEffect } from 'react'
import "./admin.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Adminnavbar = () => {
  const userlogin = localStorage.getItem("user");
  const navigate = useNavigate();
  const Logout=()=>{
    localStorage.clear("user")
    alert("Logout Sucessfully")
     useEffect(()=>{
        navigate('/')
    },[])
  }
  return (
    <div>
        <div>
  <nav className="navbar navbar-expand-lg navbar-dark" >
    <div className="container-fluid">
      <a className="navbar-brand fw-bold" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/adminsunday">SundayOffer</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/listpal">Palletdeals</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/listarr">New Arrivals</Link></li>
        
          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Department
            </a>
            <ul className="dropdown-menu adminside">
              
            
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 FoodandDrink
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listfood">Foods</Link></li>
                  <li><Link className="dropdown-item" to="/listdrink">Drinks</Link></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                 
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Smoking
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listlighter">Lighter & Matches</Link></li>
                  <li><Link className="dropdown-item" to="/listelectric">Electrical</Link></li>
                  <li><Link className="dropdown-item" to="/listsmokigess">Smoking Essentials</Link></li>
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pound Lines
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listbathrom">Bathroom / Cosmetics / Beauty</Link></li>
                  <li><Link className="dropdown-item" to="/listfirstaid">First Aid/Pharmacy/Personal</Link></li>
                  <li><Link className="dropdown-item" to="/listelectricde">Electrical</Link></li>
                  <li><Link className="dropdown-item" to="/listdiytools">Diy/Tools</Link></li>
                  <li><Link className="dropdown-item" to="/listdisposiblepo">Disposible</Link></li>
                  <li><Link className="dropdown-item" to="/listcraftpo">Craft</Link></li>
                  <li><Link className="dropdown-item" to="/listcarpo">Carproduct</Link></li>
                  <li><Link className="dropdown-item" to="/listcandels">Candeles Products</Link></li>
                  <li><Link className="dropdown-item" to="/listfoodpound">Food & Drink</Link></li>
                  <li><Link className="dropdown-item" to="/listshoecar">Shoe Care</Link></li>
                  <li><Link className="dropdown-item" to="/liststationery">Stationery</Link></li>
                  <li><Link className="dropdown-item" to="/listpotoy">Toys</Link></li>
                  <li><Link className="dropdown-item" to="/listpestcon">Pest </Link></li>
                  <li><Link className="dropdown-item" to="/listlightergas">Lighter Gas</Link></li>
                  <li><Link className="dropdown-item" to="/listloundryiron">Loundry Iron</Link></li>
                  <li><Link className="dropdown-item" to="/listkitchenwearpound">Kitchwear</Link></li>
                  <li><Link className="dropdown-item" to="/listhoiserypound">Hosiery</Link></li>
                  <li><Link className="dropdown-item" to="/listhouseholdclpound">Household Cleaning</Link></li>
                  <li><Link className="dropdown-item" to="/listhouseholdpr">Household Products</Link></li>
                  <li><Link className="dropdown-item" to="/listreading">Reading</Link></li>
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Bathroom
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listbathromde">Bathroom Scales</Link></li>
                  <li><Link className="dropdown-item" to="/listmirror">Mirrors</Link></li>
                  <li><Link className="dropdown-item" to="/listshower">Shower</Link></li>
                  <li><Link className="dropdown-item" to="/listbathmate">Bathmates</Link></li>
                  <li><Link className="dropdown-item" to="/listbathacess">Bathroom Acessories</Link></li>
                  <li><Link className="dropdown-item" to="/listshowhead">Shower Heads</Link></li>
                 
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Disposible
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listdisposible">Bin Bag</Link></li>
                  <li><Link className="dropdown-item" to="/listTablewear">Table Wear</Link></li>
                
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Laundry
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listaiers">Airers</Link></li>
                  <li><Link className="dropdown-item" to="/listioring">Ironing Boards</Link></li>
                  <li><Link className="dropdown-item" to="/listlaacess">Loundry Acessories</Link></li>
                  <li><Link className="dropdown-item" to="/listbagsl">Bags</Link></li>
                  <li><Link className="dropdown-item" to="/listbascketst">Backetstorage</Link></li>
                  <li><Link className="dropdown-item" to="/listluggage">Luggage</Link></li>
                </ul>
              </li>
              <li><Link className="dropdown-item" to="/listbatteries">Batteries</Link></li>
              <li><Link className="dropdown-item" to="/listphone">Phone Accessories</Link></li>
              <li><Link className="dropdown-item" to="/listobstical">OBSOLETE</Link></li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Textileaccessories
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listaprons">Aprons</Link></li>
                  <li><Link className="dropdown-item" to="/listbedding">Bedding</Link></li>
                  <li><Link className="dropdown-item" to="/listclothing">Clothing</Link></li>
                   <li><Link className="dropdown-item" to="/listcurtains">Curtains</Link></li> 
                    <li><Link className="dropdown-item" to="/listtablecover">Tablecover</Link></li>
                     <li><Link className="dropdown-item" to="/listteatowel">Tea/Towel</Link></li>
                      <li><Link className="dropdown-item" to="/listtowelaccessories">Towel/Accessories</Link></li>
                 
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Diy
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listfreshner">Air Freshner</Link></li>
                  <li><Link className="dropdown-item" to="/listakonobol">Akzonobol</Link></li>
                  <li><Link className="dropdown-item" to="/listbarrettine">Barrettine</Link></li> 
                  <li><Link className="dropdown-item" to="/listbartolin">Bartoline</Link></li> 
                  <li><Link className="dropdown-item" to="/listbirdbrand">Birdbrand</Link></li>
                  <li><Link className="dropdown-item" to="/listblack">Blackspur</Link></li>
                  <li><Link className="dropdown-item" to="/listbonit">Bonit</Link></li>
                  <li><Link className="dropdown-item" to="/listbostik">Bostik</Link></li>
                  <li><Link className="dropdown-item" to="/listbriwax">Briwax</Link></li>
                  <li><Link className="dropdown-item" to="/listbrook">Brook</Link></li>
                  <li><Link className="dropdown-item" to="/listcarproduct">Car Products</Link></li>
                  <li><Link className="dropdown-item" to="/listcarplan">Car Plan</Link></li>
                  <li><Link className="dropdown-item" to="/listchamois">Chamois</Link></li>
                  <li><Link className="dropdown-item" to="/listcommand">Command</Link></li>
                  <li><Link className="dropdown-item" to="/listcoral">Coral</Link></li>
                  <li><Link className="dropdown-item" to="/listcrown">Crown Paints</Link></li>
                  <li><Link className="dropdown-item" to="/listdekton">Dekton</Link></li>
                  <li><Link className="dropdown-item" to="/listdemsum">Demsum</Link></li>
                  <li><Link className="dropdown-item" to="/listdarper">Darper</Link></li>
                  <li><Link className="dropdown-item" to="/listedco">Edco</Link></li>
                  <li><Link className="dropdown-item" to="/listever">Ever</Link></li>
                  <li><Link className="dropdown-item" to="/listexitex">Exitex</Link></li>
                  <li><Link className="dropdown-item" to="/listfit">Fit For Job</Link></li>
                  <li><Link className="dropdown-item" to="/listglobal">Global</Link></li>
                  <li><Link className="dropdown-item" to="/listgas">Gas </Link></li>
                  <li><Link className="dropdown-item" to="/listgorila">Gorila Glue </Link></li>
                  <li><Link className="dropdown-item" to="/listhagsen">Hagesan </Link></li>
                  <li><Link className="dropdown-item" to="/listhardware">Hardware tools </Link></li>
                  <li><Link className="dropdown-item" to="/listharris">Harris </Link></li>
                  <li><Link className="dropdown-item" to="/listhilka">Hilka </Link></li> 
                  <li><Link className="dropdown-item" to="/listhumnrol">Humnrol </Link></li>
                  <li><Link className="dropdown-item" to="/listjbwel">Jbwel </Link></li>
                  <li><Link className="dropdown-item" to="/listkilrock">Kilrock </Link></li>
                  <li><Link className="dropdown-item" to="/listladder">Ladder </Link></li> 
                  <li><Link className="dropdown-item" to="/listlocktile">Locktile </Link></li>
                  <li><Link className="dropdown-item" to="/listlynwood">Lynwood </Link></li>
                  <li><Link className="dropdown-item" to="/listmisc">Misc </Link></li> 
                  <li><Link className="dropdown-item" to="/listoxford">Oxford </Link></li>
                  <li><Link className="dropdown-item" to="/listpestco">Pest Control </Link></li>
                  <li><Link className="dropdown-item" to="/listplasplug">Plas Plugs </Link></li>
                  <li><Link className="dropdown-item" to="/listprimacar">Prima Car Product </Link></li>
                  <li><Link className="dropdown-item" to="/listrolson">Rolson  </Link></li>
                  <li><Link className="dropdown-item" to="/listronseal">Ronseal </Link></li>
                  <li><Link className="dropdown-item" to="/listrustins">Rustins </Link></li>
                  <li><Link className="dropdown-item" to="/listsecureit">Secureit </Link></li>
                  <li><Link className="dropdown-item" to="/listsecrup">Secruplumb </Link></li>
                  <li><Link className="dropdown-item" to="/listshortage">Shortage </Link></li>
                  <li><Link className="dropdown-item" to="/listsoudal">Soudal </Link></li> 
                  <li><Link className="dropdown-item" to="/liststarpak">Starpak </Link></li>
                  <li><Link className="dropdown-item" to="/liststerling">Sterling </Link></li>
                  <li><Link className="dropdown-item" to="/listtableaue">Tableaue </Link></li>
                  <li><Link className="dropdown-item" to="/listtricycle">Tricycle </Link></li>
                  <li><Link className="dropdown-item" to="/listultratrap">Ultratape </Link></li>
                  <li><Link className="dropdown-item" to="/listvacuum">Vacuum </Link></li>
                  <li><Link className="dropdown-item" to="/listvelcro">Velcro </Link></li>
                  <li><Link className="dropdown-item" to="/listvfmpaint">Vfmpaint </Link></li>
                  <li><Link className="dropdown-item" to="/listwd40">Wd40 </Link></li>
                  <li><Link className="dropdown-item" to="/listwerner">Werner </Link></li>
                  <li><Link className="dropdown-item" to="/listyelelock">Yelelock </Link></li>
                  <li><Link className="dropdown-item" to="/listunicon">Unicon </Link></li>
                  <li><Link className="dropdown-item" to="/listamtech">Amtech Tools </Link></li>
                  <li><Link className="dropdown-item" to="/listantiqux">Antiqux </Link></li>
                  <li><Link className="dropdown-item" to="/listultratrap">Ultratape </Link></li>
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Electrical
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listclock">Clock</Link></li>
                  <li><Link className="dropdown-item" to="/listcamera">Camera</Link></li>
                  <li><Link className="dropdown-item" to="/listdigital">Digital Accessories</Link></li>
                <li><Link className="dropdown-item" to="/listelectricalaccesso">Electrical Accessories</Link></li>
                <li><Link className="dropdown-item" to="/listironele">Iron</Link></li>
                <li><Link className="dropdown-item" to="/listdorbells">Dorbells</Link></li>
                <li><Link className="dropdown-item" to="/listearephone">Earephone</Link></li>
                <li><Link className="dropdown-item" to="/listhairbody">Hairbody</Link></li>
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  China
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listcookware">Cookware</Link></li>
                  <li><Link className="dropdown-item" to="/listcrockery">Crockery</Link></li>
                  <li><Link className="dropdown-item" to="/listdinner">Dinner</Link></li> 
                  <li><Link className="dropdown-item" to="/listdrinkingglass">Drinkingg Glass</Link></li>
                  <li><Link className="dropdown-item" to="/listglasstablewear">Glass Tablewear</Link></li>
                  <li><Link className="dropdown-item" to="/listhomebaking">Home Baking</Link></li>
                  <li><Link className="dropdown-item" to="/listmugcups">Mug Cups</Link></li>
                  <li><Link className="dropdown-item" to="/liststorageaccessories">Storage Accessories</Link></li> 
                 
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pestcontrol
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listrentokil">Rentokils</Link></li>
                  <li><Link className="dropdown-item" to="/liststv">STV International</Link></li>
                  
                  
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Toiletries
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listcotton">Cotton</Link></li>
                  <li><Link className="dropdown-item" to="/listbabay">Babycare</Link></li>
                  <li><Link className="dropdown-item" to="/listgiftsets">Gift Sets</Link></li>
                  <li><Link className="dropdown-item" to="/listhair">Hair Products</Link></li>
                  <li><Link className="dropdown-item" to="/listhand">Hand Wash</Link></li>
                  <li><Link className="dropdown-item" to="/listhealth">Health Care</Link></li>
                  <li><Link className="dropdown-item" to="/listmouthwash">Mouthwash</Link></li>
                  <li><Link className="dropdown-item" to="/listperfume">Perfumes</Link></li>
                  <li><Link className="dropdown-item" to="/listsanitary">Sanitary</Link></li>
                  <li><Link className="dropdown-item" to="/listsaving">Saving</Link></li>
                  <li><Link className="dropdown-item" to="/listshampo">Shampo</Link></li>
                  <li><Link className="dropdown-item" to="/listshowerge">Shower Gel</Link></li>
                  <li><Link className="dropdown-item" to="/listskincare">Skin Care</Link></li>
                  <li><Link className="dropdown-item" to="/listsoapbar">Soap Bar</Link></li>
                  <li><Link className="dropdown-item" to="/listtoothbrush">Tooth Brush</Link></li> 
                  <li><Link className="dropdown-item" to="/listtoothpast">Tooth Past</Link></li> 
                  <li><Link className="dropdown-item" to="/listafrica">West Africa</Link></li> 
                  <li><Link className="dropdown-item" to="/listdeodrant">Deodorant</Link></li>

                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                HOusehold Cleaners
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listfreshn">Airfreshner</Link></li>
                  <li><Link className="dropdown-item" to="/listcar">Car Care</Link></li>
                  <li><Link className="dropdown-item" to="/listbleech">Bleech</Link></li>
                 
                </ul>
              </li>
              
            </ul>
          </li>
          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Department
            </a>
            <ul className="dropdown-menu adminside">
              
              <li>
               
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Kitechenwear
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listbakeware">Bakeware</Link></li>
                  <li><Link className="dropdown-item" to="/listbareware">Barewear</Link></li>
                  <li><Link className="dropdown-item" to="/listchrom">Chrome</Link></li>
                  <li><Link className="dropdown-item" to="/listcookwar">Cookwear</Link></li>
                  <li><Link className="dropdown-item" to="/listkettles">Kettles</Link></li>
                  <li><Link className="dropdown-item" to="/listcultery">Cultery</Link></li>
                  <li><Link className="dropdown-item" to="/listkitechenacc">Kitechenacc</Link></li>
                  <li><Link className="dropdown-item" to="/listkitechenbin">Kitechenbin</Link></li>
                  <li><Link className="dropdown-item" to="/listkitechenga">Kitechenga</Link></li>
                  <li><Link className="dropdown-item" to="/listkitechenkni">Kitechen Knife</Link></li>
                  <li><Link className="dropdown-item" to="/listscalekitechen">Scale kitechen</Link></li> 
                  <li><Link className="dropdown-item" to="/listplastickitechen">Plastic kitechen</Link></li> 
                  <li><Link className="dropdown-item" to="/listsimplehuman">Simple Human</Link></li>
                  <li><Link className="dropdown-item" to="/listbread">Bread</Link></li>
                  <li><Link className="dropdown-item" to="/listtea">Tea/Coffee</Link></li>
                  <li><Link className="dropdown-item" to="/listtray">Tray</Link></li>
                  <li><Link className="dropdown-item" to="/listwater">Water Filter</Link></li>
                  <li><Link className="dropdown-item" to="/listwooden">Wooden</Link></li>
                  <li><Link className="dropdown-item" to="/listcatering">Catering</Link></li>
                 
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Pet Products
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listbirds">Birds</Link></li>
                  <li><Link className="dropdown-item" to="/listcat">Cat</Link></li>
                 
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Kidsproducts
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listbaby">Baby Products</Link></li>
                  <li><Link className="dropdown-item" to="/listkidssto">Kids Storage</Link></li>
                  <li><Link className="dropdown-item" to="/listcharater">Kids Charater</Link></li>
                
                 
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Gardening
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listbbq">BBQ</Link></li>
                  <li><Link className="dropdown-item" to="/listbird">Birds Care</Link></li>
                  <li><Link className="dropdown-item" to="/listcamping">Camping</Link></li>
                  <li><Link className="dropdown-item" to="/listfertilizer">Fertilizer</Link></li>
                  <li><Link className="dropdown-item" to="/listfuritur">Furniture</Link></li>
                  <li><Link className="dropdown-item" to="/listgiftware">Giftware</Link></li>
                  <li><Link className="dropdown-item" to="/listgrowing">Growing Media</Link></li>
                  <li><Link className="dropdown-item" to="/listlightening">Lightening</Link></li>
                  <li><Link className="dropdown-item" to="/listplanters">Planters</Link></li>
                  <li><Link className="dropdown-item" to="/listtools">Tools & Accessories</Link></li>
                  <li><Link className="dropdown-item" to="/listwatering">Watering</Link></li>
                  <li><Link className="dropdown-item" to="/listwinterfules">Winterfules</Link></li>
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Partyware
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listbaloon">Baloons Weight</Link></li>
                  <li><Link className="dropdown-item" to="/listpumps">Pumps</Link></li>
                  <li><Link className="dropdown-item" to="/listbanner">Banner</Link></li>
                  <li><Link className="dropdown-item" to="/listbirthdaybadge">Birthdaybadge</Link></li>
                  <li><Link className="dropdown-item" to="/listbowsribbon">Bowsribbon</Link></li>
                  <li><Link className="dropdown-item" to="/listfancydress">Fancydress</Link></li>
                  <li><Link className="dropdown-item" to="/listtissuepaper">Tissuepaper</Link></li>
                  <li><Link className="dropdown-item" to="/listcandeles">Candles</Link></li>
                  <li><Link className="dropdown-item" to="/listgiftbags">Giftbags</Link></li>
                   <li><Link className="dropdown-item" to="/listweding">Weding</Link></li>
                   <li><Link className="dropdown-item" to="/listpartycards">Partycards</Link></li> <li><Link className="dropdown-item" to="/listpartyaccessories">Partyaccessories</Link></li> 
                   <li><Link className="dropdown-item" to="/listcellowrap">Cellowrap</Link></li>  <li><Link className="dropdown-item" to="/listpartypoppers">Partypoppers</Link></li> 
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Glassware
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listcrystal">Crystal</Link></li>
                  <li><Link className="dropdown-item" to="/listcakes">Cakes Stands</Link></li>
                  <li><Link className="dropdown-item" to="/listcrokery">Crokery</Link></li>
                  <li><Link className="dropdown-item" to="/listdrinkingglass">Drinking glass</Link></li>
                  <li><Link className="dropdown-item" to="/listglassdecorative">Glass Decorative</Link></li>
                  <li><Link className="dropdown-item" to="/listglasstumbler">Glasstumbler</Link></li>
                  <li><Link className="dropdown-item" to="/listglassvass">Glassvass</Link></li>
                  <li><Link className="dropdown-item" to="/listglassstorage">Glassstorage</Link></li>
                  <li><Link className="dropdown-item" to="/listglasstableware">Glasstableware</Link></li>
                  <li><Link className="dropdown-item" to="/listpyrex">Pyrex</Link></li>
                  <li><Link className="dropdown-item" to="/listkliner">Kliner</Link></li>
                  
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hardware
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listfurniture">Furniture</Link></li>
                  <li><Link className="dropdown-item" to="/listmats">Mats & Rugs</Link></li>  
                 <li><Link className="dropdown-item" to="/listmetalbuck">Metalbuck</Link></li>
                 
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Home & Decor
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listcandel">Candels</Link></li>
                  <li><Link className="dropdown-item" to="/listst">ST George</Link></li>
                  <li><Link className="dropdown-item" to="/listfathersday">Fathers Day</Link></li>
                  <li><Link className="dropdown-item" to="/listframsmirror">Frams & Mirror</Link></li>
                  <li><Link className="dropdown-item" to="/listgiftwareh">Gift Ware</Link></li>
                  <li><Link className="dropdown-item" to="/listincense">Incense</Link></li>
                  <li><Link className="dropdown-item" to="/listmemorial">Memorial</Link></li>
                  <li><Link className="dropdown-item" to="/listsouvenirs">Souvenirs</Link></li>
                  <li><Link className="dropdown-item" to="/listwedding">wedding</Link></li>
                  

                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Plastic Houseware
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listfoodcon">Food Container</Link></li>
                  <li><Link className="dropdown-item" to="/listkidsplas">KidsPlastic</Link></li>
                 <li><Link className="dropdown-item" to="/listmelmanioutdoor">Melmanioutdoor</Link></li>
                  <li><Link className="dropdown-item" to="/listkidsbathroom">Kidsbathroom</Link></li>
                  <li><Link className="dropdown-item" to="/listplasticcabnit">Plasticcabnit</Link></li>
                  <li><Link className="dropdown-item" to="/listhandwash">Handwash</Link></li>
                  <li><Link className="dropdown-item" to="/listhealthcaree">Healthcaree</Link></li>
                  
                
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Seasonalsportsmain
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listcooler">Cooler</Link></li>
                  <li><Link className="dropdown-item" to="/listflask">Flask</Link></li>
                  <li><Link className="dropdown-item" to="/listdinner">Dinner</Link></li> 
                  <li><Link className="dropdown-item" to="/listhotwater">Hotwater</Link></li> 
                  <li><Link className="dropdown-item" to="/listpicnic">Picnic</Link></li> 
                  <li><Link className="dropdown-item" to="/listsportbootel">Sportbootel</Link></li> 
                  <li><Link className="dropdown-item" to="/listumbrella">Umbrella</Link></li>
                  <li><Link className="dropdown-item" to="/listtowelssport">Towelssport</Link></li> 
                 
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Stationary
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listart&craft">Art & Craft</Link></li>
                  <li><Link className="dropdown-item" to="/listbooks">Books</Link></li>
                    <li><Link className="dropdown-item" to="/listdiaries">Diaries</Link></li> 
                   <li><Link className="dropdown-item" to="/listkids">Kids</Link></li> 
                    <li><Link className="dropdown-item" to="/listmailing">Mailing</Link></li> 
                     <li><Link className="dropdown-item" to="/listoffice/home">Office/Home</Link></li> 
                
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cleaning Matterial
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listbrushware">Brushware</Link></li>
                  <li><Link className="dropdown-item" to="/listduster">Cloth & Duster</Link></li>
                  <li><Link className="dropdown-item" to="/listgloves">Gloves</Link></li>
                  <li><Link className="dropdown-item" to="/listmops">Mops</Link></li>
                  <li><Link className="dropdown-item" to="/listsponge">Sponge</Link></li>
                
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Artifical Flowers
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listartifical">Artifical Trees</Link></li>
                  <li><Link className="dropdown-item" to="/listbouquet">Bouquets</Link></li> 
                   <li><Link className="dropdown-item" to="/listgarland">Garland</Link></li> 
                    <li><Link className="dropdown-item" to="/listsinglestem">Singlestem</Link></li> 
                     <li><Link className="dropdown-item" to="/listwreaths">Wreaths</Link></li> 
                 
                </ul>
              </li>
            </ul>
          </li>
          
        </ul>
         <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item dropdown me-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User Panel
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <li>
                  <Link className="dropdown-item" to="/oderslist">
                    Oders List
                  </Link>
                </li>
                 <li>
                  <Link className="dropdown-item" to="/listcontact">
                    Contact Users
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    User Panel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/userdata">
                    Users
                  </Link>
                </li>
               <li className="nav-item">
              {userlogin ? (
                <Link to="/" onClick={Logout} className="nav-link text-decoration-none text-dark">
                  <i className="bi bi-person" /> Logout
                </Link>
              ) : (
                <Link to="/log" className="nav-link text-decoration-none text-dark">
                  <i className="bi bi-person" /> Login
                </Link>
              )}
            </li>
                
              </ul>
            </li>
           
          </ul>
      </div>
    </div>
  </nav>
</div>

    
    </div>
  )
}

export default Adminnavbar