import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Department from './Components/Pages/Department';
import FoodandDrink from './Components/Pages/FoodandDrink';
import Smoking from './Components/Pages/Smoking';
import Lighter from './Components/Pages/Adminside/Smoking/Lighter';
import Poundline from './Components/Pages/Poundline';
import Electric from './Components/Pages/Adminside/deparmentbathrom/Electricde/Electric';
import Diytools from './Components/Pages/Diytools';
import Partybin from './Components/Pages/Partybin';
import Candels from './Components/Pages/Candels';
import Shopbybrand from './Components/Pages/Shopbybrand';
import Newarrivals from './Components/Pages/Adminside/NewArrevals/Newarrivals';
import Giftcard from './Components/Pages/Giftcard';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Adminside from './Components/Pages/Adminside/Adminside';
import Form from './Components/Pages/Adminside/Sundayoffer/Form'; 
import Listofproducts from './Components/Pages/Adminside/Sundayoffer/Listofproducts';
import Update from './Components/Pages/Adminside/Sundayoffer/Update';
import Sundaypage from "./Components/Pages/Adminside/Sundayoffer/Sundayoffer"
import Pallet from './Components/Pages/Adminside/Palletdeals/Pallet';
import Form1 from "./Components/Pages/Adminside/Palletdeals/Form1"
import Listofpallet from "./Components/Pages/Adminside/Palletdeals/Listofpallet"
import Updatepallet from "./Components/Pages/Adminside/Palletdeals/Updatepallet"
import NewForm from './Components/Pages/Adminside/NewArrevals/NewForm';
import Listofnewarrivals from './Components/Pages/Adminside/NewArrevals/Listofnewarrivals';
import Newupdate from './Components/Pages/Adminside/NewArrevals/Newupdate';
import FoodForm from './Components/Pages/Adminside/Foods/FoodForm';
import Listoffoods from './Components/Pages/Adminside/Foods/Listoffoods';
import Updatefoods from './Components/Pages/Adminside/Foods/Updatefoods';
import Foodsproduct from './Components/Pages/Adminside/Foods/Foodsproduct';
import Drinkform from './Components/Pages/Adminside/Drinks/Drinkform';
import Listofdrink from './Components/Pages/Adminside/Drinks/Listofdrink';
import Updatedrink from './Components/Pages/Adminside/Drinks/Updatedrink';
import Drinkproduct from './Components/Pages/Adminside/Drinks/Drinkproduct';
import Lighterform from './Components/Pages/Adminside/Smoking/Lighterform';
import Listoflighter from './Components/Pages/Adminside/Smoking/Listoflighter';
import Updatelighter from './Components/Pages/Adminside/Smoking/Updatelighter';
import Electricalform from "./Components/Pages/Adminside/Electrical/Electricalform"
import  Listofelectrical from "./Components/Pages/Adminside/Electrical/Listofelectrical"
import Updateelectrical from './Components/Pages/Adminside/Electrical/Updateelectrical'
import Electricalde from './Components/Pages/Adminside/Electrical/Electricalde';
import Smokingessentials from './Components/Pages/Adminside/SmokingEssentials/Smokingessentials';
import Smokingessform from './Components/Pages/Adminside/SmokingEssentials/Smokingessform';
import Smokingesslist from './Components/Pages/Adminside/SmokingEssentials/Smokingesslist';
import Updatesmokingess from './Components/Pages/Adminside/SmokingEssentials/Updatesmokingess';
import Blog from './Components/Footerpages/Blog';
import Hotwater from './Components/Footerpages/Hotwater';
import Privacy from './Components/Footerpages/Privacy';
import Termscondition from './Components/Footerpages/Terms&condition';
import Cookies from './Components/Footerpages/Cookies';
import Contactus from './Components/Footerpages/Contactus';
import Aboutus from './Components/Footerpages/Aboutus';
import Delivery from './Components/Footerpages/Delivery';
import Export from './Components/Footerpages/Export';
import Faq from './Components/Footerpages/Faq';
import Bathroomform from './Components/Pages/Adminside/Poudliene/Bathroom/Bathroomform';
import Bathroomlist from './Components/Pages/Adminside/Poudliene/Bathroom/Bathroomlist';
import Updatebathroom from './Components/Pages/Adminside/Poudliene/Bathroom/Updatebathroom';
import Bathroomp from './Components/Pages/Adminside/Poudliene/Bathroom/Bathroomp';
import Contactuser from './Components/Pages/Adminside/Contactuser';
import Sundayoffersinglr from './Components/Pages/Adminside/Sundayoffer/Sundayoffersinglr';
import { CartProvider } from './Components/Pages/Adminside/CartContext';
import Addtocart from './Components/Pages/Adminside/Addtocart';
import Smokingsinglepage from './Components/Pages/Adminside/SmokingEssentials/Smokingsinglepage';
import Lightersinglepage from './Components/Pages/Adminside/Smoking/Lightersinglepage';
import Bathroomsingle from './Components/Pages/Adminside/Poudliene/Bathroom/Bathroomsingle';
import Palletsingle from './Components/Pages/Adminside/Palletdeals/Palletsingle';
import Newarrivalsingr from './Components/Pages/Adminside/NewArrevals/Newarrivalsingr';
import Foodssingle from './Components/Pages/Adminside/Foods/Foodssingle';
import Electricalsinglepage from './Components/Pages/Adminside/Electrical/Electricalsinglepage';
import Drinkssingle from './Components/Pages/Adminside/Drinks/Drinkssingle';
import Debathroom from './Components/Pages/Adminside/deparmentbathrom/Debathroom';
import Bathroomformde from './Components/Pages/Adminside/deparmentbathrom/Bathroomscale.js/Bathroomformde';
import Bathroomlistde from './Components/Pages/Adminside/deparmentbathrom/Bathroomscale.js/Bathroomlistde';
import Updatebathroomde from './Components/Pages/Adminside/deparmentbathrom/Bathroomscale.js/Updatebathroomde';
import Bathroommain from './Components/Pages/Adminside/deparmentbathrom/Bathroomscale.js/Bathroommain';
import Bathroomsinglede from './Components/Pages/Adminside/deparmentbathrom/Bathroomscale.js/Bathroomsinglede';
import Mirrorform from "./Components/Pages/Adminside/deparmentbathrom/Mirror/Mirrorform"
import Mirrorlist from './Components/Pages/Adminside/deparmentbathrom/Mirror/Mirrorlist'
import Updatemirror from './Components/Pages/Adminside/deparmentbathrom/Mirror/Updatemirror'
import Mirrormain from './Components/Pages/Adminside/deparmentbathrom/Mirror/Mirrormain'
import Mirrorsinglepage from './Components/Pages/Adminside/deparmentbathrom/Mirror/Mirrorsinglepage'
import Showerform from './Components/Pages/Adminside/deparmentbathrom/Shower/Showerform';
import Showerlist from './Components/Pages/Adminside/deparmentbathrom/Shower/Showerlist';
import Showerupdate from './Components/Pages/Adminside/deparmentbathrom/Shower/Showerupdate';
import Showermain from './Components/Pages/Adminside/deparmentbathrom/Shower/Showermain';
import Showersingle from './Components/Pages/Adminside/deparmentbathrom/Shower/Showersingle';
import Bathmatsmain from './Components/Pages/Adminside/deparmentbathrom/Bathmats/Bathmatsmain';
import Bathmatssinglr from './Components/Pages/Adminside/deparmentbathrom/Bathmats/Bathmatssinglr';
import Bathmatsform from './Components/Pages/Adminside/deparmentbathrom/Bathmats/Bathmatsform';
import Bathmatslist from './Components/Pages/Adminside/deparmentbathrom/Bathmats/Bathmatslist';
import Bathmatsupdate from './Components/Pages/Adminside/deparmentbathrom/Bathmats/Bathmatsupdate';
import Bathacessoriessingle from './Components/Pages/Adminside/deparmentbathrom/Bathroomacessories/Bathacessoriessingle';
import Bathacessories from './Components/Pages/Adminside/deparmentbathrom/Bathroomacessories/Bathacessories';
import Bathacessroiesform from './Components/Pages/Adminside/deparmentbathrom/Bathroomacessories/Bathacessroiesform';
import Bathacessorieslist from './Components/Pages/Adminside/deparmentbathrom/Bathroomacessories/Bathacessorieslist';
import Bathacessoriesupdate from './Components/Pages/Adminside/deparmentbathrom/Bathroomacessories/Bathacessoriesupdate';
import Showhead from './Components/Pages/Adminside/deparmentbathrom/Showershead/Showhead';
import Showheadsingle from './Components/Pages/Adminside/deparmentbathrom/Showershead/Showheadsingle'
import Showheadform from './Components/Pages/Adminside/deparmentbathrom/Showershead/Showheadform'
import Showheadlist from './Components/Pages/Adminside/deparmentbathrom/Showershead/Showheadlist'
import Showheadupdate from './Components/Pages/Adminside/deparmentbathrom/Showershead/Showheadupdate'
import Disposiblecat from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposiblesub/Disposiblecat'
import Disposibleform from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposibleform'
import Disposiblelist from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposiblelist'
import Disposibleupdate from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposibleupdate'
import Disposiblemain from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposiblemain'
import Disposiblesingle from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposiblesingle'
import Tablewearform from './Components/Pages/Adminside/deparmentbathrom/Disposible/Tablewear/Tablewearform'
import Tablewearlist from './Components/Pages/Adminside/deparmentbathrom/Disposible/Tablewear/Tablewearlist'
import Tablewearupdate from './Components/Pages/Adminside/deparmentbathrom/Disposible/Tablewear/Tablewearupdate'
import Tablewear from './Components/Pages/Adminside/deparmentbathrom/Disposible/Tablewear/Tablewear';
import Tablewearsingle from './Components/Pages/Adminside/deparmentbathrom/Disposible/Tablewear/Tablewearsingle'
import Loundrysubcat from './Components/Pages/Adminside/deparmentbathrom/Laundry/Loundrysubcat';
import Airers from './Components/Pages/Adminside/deparmentbathrom/Laundry/Airers/Airers'
import Airerssingle from './Components/Pages/Adminside/deparmentbathrom/Laundry/Airers/Airerssingle'
import Airersform from './Components/Pages/Adminside/deparmentbathrom/Laundry/Airers/Airersform'
import Airerslist from './Components/Pages/Adminside/deparmentbathrom/Laundry/Airers/Airerslist'
import Airersupdate from './Components/Pages/Adminside/deparmentbathrom/Laundry/Airers/Airersupdate'
import Iorining from './Components/Pages/Adminside/deparmentbathrom/Laundry/Ironing Board/Iorining'
import Ioriningsingle from './Components/Pages/Adminside/deparmentbathrom/Laundry/Ironing Board/Ioriningsingle'
import Ironingform from './Components/Pages/Adminside/deparmentbathrom/Laundry/Ironing Board/Ironingform'
import Ironinglist from './Components/Pages/Adminside/deparmentbathrom/Laundry/Ironing Board/Ironinglist'
import Ioriningupdate from './Components/Pages/Adminside/deparmentbathrom/Laundry/Ironing Board/Ioriningupdate'
import Adminnavbar from './Components/Pages/Adminside/Adminnavbar';
import Laacess from './Components/Pages/Adminside/deparmentbathrom/Laundry/Laundryacessories/Laacess';
import Laacessform from'./Components/Pages/Adminside/deparmentbathrom/Laundry/Laundryacessories/Laacessfrom'
import Laacesslist from './Components/Pages/Adminside/deparmentbathrom/Laundry/Laundryacessories/Laacesslist'
import Laacesssingle from './Components/Pages/Adminside/deparmentbathrom/Laundry/Laundryacessories/Laacesssingle'
import Laacessupdate from './Components/Pages/Adminside/deparmentbathrom/Laundry/Laundryacessories//Laacessupdate'
import Kitechendde from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechendde';
import Leaning from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Leaning';
import Gardeningmain from './Components/Pages/Adminside/deparmentbathrom/Gardening/Gardeningmain';
import Homedecoremain from './Components/Pages/Adminside/deparmentbathrom/Home decore/Homedecoremain';
import Tolitriesmain from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Tolitriesmain';
import Diymainpage from './Components/Pages/Adminside/deparmentbathrom/Diy/Diymainpage';
import Artificalmain from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalmain';
import Stationerymain from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Stationerymain';
import Textilesmainpage from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Textilesmainpage';
import Houseclenermain from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Houseclenermain';
import Plastichousewearmain from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Plastichousewearmain';
import Petproductsmain from './Components/Pages/Adminside/deparmentbathrom/Pet products/Petproductsmain';
import Chinamain from './Components/Pages/Adminside/deparmentbathrom/China/Chinamain';
import Hardwaremain from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Hardwaremain';
import Seasonalsportsmain from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Seasonalsportsmain';
import Pestcontromain from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Pestcontromain';
import Kidsmain from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Kidsmain';
import Glasswaremain from './Components/Pages/Adminside/deparmentbathrom/Glassware/Glasswaremain';
import Electricaldemain from './Components/Pages/Adminside/deparmentbathrom/Electrical/Electricaldemain';
import Partywaremain from './Components/Pages/Adminside/deparmentbathrom/Partyware/Partywaremain';
import Batteriesmain from './Components/Pages/Adminside/deparmentbathrom/Batteries/Batteriesmain'
import Batteriessinge from './Components/Pages/Adminside/deparmentbathrom/Batteries/Batteriessinge'
import Batteriesupdate from './Components/Pages/Adminside/deparmentbathrom/Batteries/Batteriesupdate';
import Batteriesform from './Components/Pages/Adminside/deparmentbathrom/Batteries/Batteriesform'
import Batterieslist from './Components/Pages/Adminside/deparmentbathrom/Batteries/Batterieslist'
import Phone from './Components/Pages/Adminside/deparmentbathrom/Phoneaccessories/Phone';
import Phonesingle from './Components/Pages/Adminside/deparmentbathrom/Phoneaccessories/Phonesingle';
import Phoneform from './Components/Pages/Adminside/deparmentbathrom/Phoneaccessories/Phoneform';
import Phonelist from './Components/Pages/Adminside/deparmentbathrom/Phoneaccessories/Phonelist';
import Phoneupdate from './Components/Pages/Adminside/deparmentbathrom/Phoneaccessories/Phoneupdate';
import Obticalform from './Components/Pages/Adminside/deparmentbathrom/Obsticals/Obticalform';
import Obsticallist from './Components/Pages/Adminside/deparmentbathrom/Obsticals/Obsticallist';
import Obsticalupdate from './Components/Pages/Adminside/deparmentbathrom/Obsticals/Obsticalupdate';
import Obstical from './Components/Pages/Adminside/deparmentbathrom/Obsticals/Obstical';
import Obticalsigle from './Components/Pages/Adminside/deparmentbathrom/Obsticals/Obticalsigle';
import Electricform from './Components/Pages/Adminside/deparmentbathrom/Electricde/Electricform';
import Electriclist from './Components/Pages/Adminside/deparmentbathrom/Electricde/Electriclist';
import Electricupdate from './Components/Pages/Adminside/deparmentbathrom/Electricde/Electricupdate';
import Electricsingle from './Components/Pages/Adminside/deparmentbathrom/Electricde/Electricsingle';
import Firstaidform from './Components/Pages/Adminside/deparmentbathrom/Firstaidpharmacy/Firstaidform';
import Firstaidlist from './Components/Pages/Adminside/deparmentbathrom/Firstaidpharmacy/Firstaidlist';
import Firstaidupdate from './Components/Pages/Adminside/deparmentbathrom/Firstaidpharmacy/Firstaidupdate';
import Firstaidmain from './Components/Pages/Adminside/deparmentbathrom/Firstaidpharmacy/Firstaidmain';
import Firstaidsingle from './Components/Pages/Adminside/deparmentbathrom/Firstaidpharmacy/Firstaidsingle';
import Aprons from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Aprons/Aprons';
import Apronssingle from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Aprons/Apronssingle';
import Apronsform from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Aprons/Apronsform';
import Apronsupdate from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Aprons/Apronsupdate';
import Apronslist from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Aprons/Apronslist'
import Beddingform from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Bedding/Beddingform';
import Beddinglist from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Bedding/Beddinglist';
import Beddingupdate from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Bedding/Beddingupdate';
import Bedding from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Bedding/Bedding';
import Beddingsingle from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Bedding/Beddingsingle';
import Clothing from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Clothing/Clothing';
import Clothingsingle from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Clothing/Clothingsingle';
import Clothingform from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Clothing/Clothingform';
import Clothinglist from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Clothing/Clothinglist';
import Clothingupdate from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Clothing/Clothingupdate';
import Freshnerform from './Components/Pages/Adminside/deparmentbathrom/Diy/Airfrechner/Freshnerform';
import Freshnerlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Airfrechner/Freshnerlist';
import Freshnerupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Airfrechner/Freshnerupdate';
import Freshner from './Components/Pages/Adminside/deparmentbathrom/Diy/Airfrechner/Freshner';
import Freshnersingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Airfrechner/Freshnersingle';
import Akonobol from './Components/Pages/Adminside/deparmentbathrom/Diy/Akzonobel/Akonobol';
import Akonobolsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Akzonobel/Akonobolsingle';
import Akonobolform from './Components/Pages/Adminside/deparmentbathrom/Diy/Akzonobel/Akonobolform';
import Akonobolist from './Components/Pages/Adminside/deparmentbathrom/Diy/Akzonobel/Akonobolist';
import Akonobolupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Akzonobel/Akonobolupdate';
import Clockform from './Components/Pages/Adminside/deparmentbathrom/Electrical/Clock/Clockform';
import Clocklist from './Components/Pages/Adminside/deparmentbathrom/Electrical/Clock/Clocklist';
import Clockupdate from './Components/Pages/Adminside/deparmentbathrom/Electrical/Clock/Clockupdate';
import Clock from './Components/Pages/Adminside/deparmentbathrom/Electrical/Clock/Clock';
import Clocksingle from './Components/Pages/Adminside/deparmentbathrom/Electrical/Clock/Clocksingle';
import Cameras from './Components/Pages/Adminside/deparmentbathrom/Electrical/Cameras/Cameras';
import Camerasingle from './Components/Pages/Adminside/deparmentbathrom/Electrical/Cameras/Camerasingle';
import Camerasform from './Components/Pages/Adminside/deparmentbathrom/Electrical/Cameras/Camerasform';
import Cameraslist from './Components/Pages/Adminside/deparmentbathrom/Electrical/Cameras/Cameraslist';
import Camerasupdate from './Components/Pages/Adminside/deparmentbathrom/Electrical/Cameras/Camerasupdate';
import Digitalform from './Components/Pages/Adminside/deparmentbathrom/Electrical/Digitalaccessories/Digitalform';
import Digitallist from './Components/Pages/Adminside/deparmentbathrom/Electrical/Digitalaccessories/Digitallist';
import Digitalupdate from './Components/Pages/Adminside/deparmentbathrom/Electrical/Digitalaccessories/Digitalupdate';
import Digital from './Components/Pages/Adminside/deparmentbathrom/Electrical/Digitalaccessories/Digital';
import Digitalsingle from './Components/Pages/Adminside/deparmentbathrom/Electrical/Digitalaccessories/Digitalsingle';
import Cookwareform from './Components/Pages/Adminside/deparmentbathrom/China/Cookware/Cookwareform';
import Cookwarelist from './Components/Pages/Adminside/deparmentbathrom/China/Cookware/Cookwarelist';
import Cookwareupdate from './Components/Pages/Adminside/deparmentbathrom/China/Cookware/Cookwareupdate';
import Cookware from './Components/Pages/Adminside/deparmentbathrom/China/Cookware/Cookware';
import Cookwaresingle from './Components/Pages/Adminside/deparmentbathrom/China/Cookware/Cookwaresingle';
import Crockery from './Components/Pages/Adminside/deparmentbathrom/China/Crockery/Crockery';
import Crockerysingle from './Components/Pages/Adminside/deparmentbathrom/China/Crockery/Crockerysingle';
import Crockeryform from './Components/Pages/Adminside/deparmentbathrom/China/Crockery/Crockeryform';
import Crockerylist from './Components/Pages/Adminside/deparmentbathrom/China/Crockery/Crockerylist';
import Crockeryupdate from './Components/Pages/Adminside/deparmentbathrom/China/Crockery/Crockeryupdate';
import Dinner from './Components/Pages/Adminside/deparmentbathrom/China/Dinnersets/Dinner';
import Dinnersingel from './Components/Pages/Adminside/deparmentbathrom/China/Dinnersets/Dinnersingel';
import Dinnerform from './Components/Pages/Adminside/deparmentbathrom/China/Dinnersets/Dinnerform';
import Dinnerlist from './Components/Pages/Adminside/deparmentbathrom/China/Dinnersets/Dinnerlist';
import Dinnerupload from './Components/Pages/Adminside/deparmentbathrom/China/Dinnersets/Dinnerupload';
import Rentokil from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Rentokil/Rentokil';
import Rentokilform from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Rentokil/Rentokilform';
import Rentokillist from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Rentokil/Rentokillist';
import Rntokilupdate from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Rentokil/Rntokilupdate';
import RentokilSingle from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Rentokil/RentokilSingle';
import Stv from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/STVinternational/Stv';
import StvSingle from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/STVinternational/Stvsingle';
import Stvform from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/STVinternational/Stvform';
import Stvlist from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/STVinternational/Stvlist';
import Stvupdate from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/STVinternational/Stvupdate';
import Cottonform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Cottonwhool/Cottonform'
import Cottonlist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Cottonwhool/Cottonlist'
import Cottonupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Cottonwhool/Cottonupdate'
import Cotton from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Cottonwhool/Cotton'
import Cottonsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Cottonwhool/Cottonsingle'
import Babaycareform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Babycare/Babaycareform';
import Babaylist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Babycare/Babaylist';
import Babayupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Babycare/Babayupdate';
import Babycare from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Babycare/Babycare';
import Babaysingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Babycare/Babaysingle';
import Freshnform from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Airfresh/Freshnform';
import Freshnlist from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Airfresh/Freshnlist';
import Freshnupdate from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Airfresh/Freshnupdate';
import Freshn from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Airfresh/Freshn';
import Freshnsingle from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Airfresh/Freshnsingle';
import Carform from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Carcare/Carform';
import Car from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Carcare/Car';
import Carsingle from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Carcare/Carsingle';
import Carlist from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Carcare/Carlist';
import Carupdate from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Carcare/Carupdate';
import Bleechform from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Bleech/Bleechform';
import Bleecklist from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Bleech/Bleecklist';
import Bleeckupdate from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Bleech/Bleeckupdate';
import Bleech from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Bleech/Bleech';
import Bleechsingl from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Bleech/Bleechsingl';
import Bakeware from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Bakeware/Bakeware';
import Bakewaresingle from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Bakeware/Bakewaresingle';
import Bakewareform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Bakeware/Bakewareform';
import Bakewarelist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Bakeware/Bakewarelist';
import Bakewareupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Bakeware/Bakewareupdate';
import Barewear from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Barewear/Barewear';
import Barewearsingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Barewear/Barewearsingl';
import Barewearform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Barewear/Barewearform';
import Barewearlist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Barewear/Barewearlist';
import Barewearupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Barewear/Barewearupdate';
import Birdsform from './Components/Pages/Adminside/deparmentbathrom/Pet products/Birdsproduct/Birdsform';
import Birdslist from './Components/Pages/Adminside/deparmentbathrom/Pet products/Birdsproduct/Birdslist';
import Birdsupdate from './Components/Pages/Adminside/deparmentbathrom/Pet products/Birdsproduct/Birdsupdate';
import Birds from './Components/Pages/Adminside/deparmentbathrom/Pet products/Birdsproduct/Birds';
import Birdssingl from './Components/Pages/Adminside/deparmentbathrom/Pet products/Birdsproduct/Birdssingl';
import Cat from './Components/Pages/Adminside/deparmentbathrom/Pet products/Catproducts/Cat';
import Catsingle from './Components/Pages/Adminside/deparmentbathrom/Pet products/Catproducts/Catsingle';
import Catform from './Components/Pages/Adminside/deparmentbathrom/Pet products/Catproducts/Catform';
import Catlist from './Components/Pages/Adminside/deparmentbathrom/Pet products/Catproducts/Catlist';
import Catupdate from './Components/Pages/Adminside/deparmentbathrom/Pet products/Catproducts/Catupdate';
import Baby from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Babyproducts/Baby';
import Babysingle from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Babyproducts/Babysingle';
import Babyform from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Babyproducts/Babyform';
import Babylist from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Babyproducts/Babylist';
import Babyupdate from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Babyproducts/Babyupdate';
import Kidssto from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/KidsStorage/Kidssto';
import Kidsstoform from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/KidsStorage/Kidsstoform';
import Kidsstolist from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/KidsStorage/Kidsstolist';
import Kisstoupdate from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/KidsStorage/Kisstoupdate';
import Kidsstosingl from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/KidsStorage/Kidsstosingl';
import Bbqform from './Components/Pages/Adminside/deparmentbathrom/Gardening/BBq/Bbqform';
import Bbqlist from './Components/Pages/Adminside/deparmentbathrom/Gardening/BBq/Bbqlist';
import Bbqupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/BBq/Bbqupdate';
import Bbq from './Components/Pages/Adminside/deparmentbathrom/Gardening/BBq/Bbq';
import Bbqsingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/BBq/Bbqsingl';
import Birdcareform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Birdcare/Birdcareform';
import Birdlist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Birdcare/Birdlist';
import Birdupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Birdcare/Birdupdate';
import Birdsingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Birdcare/Birdsingle';
import Bird from './Components/Pages/Adminside/deparmentbathrom/Gardening/Birdcare/Bird';
import Baloon from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloons/Baloon';
import Baloonsingl from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloons/Baloonsingl';
import Baloonform from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloons/Baloonsform';
import Baloonlist from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloons/Baloonlist';
import Baloonupdate from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloons/Baloonupdate';
import Pumpsform from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloonpumps/Pumpsform';
import Pumpslist from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloonpumps/Pumpslist';
import Pumpsupdate from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloonpumps/Pumpsupdate';
import Pumps from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloonpumps/Pumps';
import Pumpssingl from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloonpumps/Pumpssingl';
import Bannerlist from './Components/Pages/Adminside/deparmentbathrom/Partyware/Banner/Bannerlist';
import Bannerupdate from './Components/Pages/Adminside/deparmentbathrom/Partyware/Banner/Bannerupdate';
import Bannerform from './Components/Pages/Adminside/deparmentbathrom/Partyware/Banner/Bannerform';
import Banner from './Components/Pages/Adminside/deparmentbathrom/Partyware/Banner/Banner';
import Bannersingl from './Components/Pages/Adminside/deparmentbathrom/Partyware/Banner/Bannersingl';
import ProtectedRoutes from './ProtectedRoutes'
import Crystalform from './Components/Pages/Adminside/deparmentbathrom/Glassware/Crystal/Crystalform';
import Crystallist from './Components/Pages/Adminside/deparmentbathrom/Glassware/Crystal/Crystallist';
import Crystalupdate from './Components/Pages/Adminside/deparmentbathrom/Glassware/Crystal/Crystalupdate';
import Crystal from './Components/Pages/Adminside/deparmentbathrom/Glassware/Crystal/Crystal';
import Crystalsingl from './Components/Pages/Adminside/deparmentbathrom/Glassware/Crystal/Crystalsingl';
import Cakesform from './Components/Pages/Adminside/deparmentbathrom/Glassware/Cakesstand/Cakesform';
import Cakeslist from './Components/Pages/Adminside/deparmentbathrom/Glassware/Cakesstand/Cakeslist';
import Cakesupdate from './Components/Pages/Adminside/deparmentbathrom/Glassware/Cakesstand/Cakesupdate';
import Cakes from './Components/Pages/Adminside/deparmentbathrom/Glassware/Cakesstand/Cakes';
import Cakessingl from './Components/Pages/Adminside/deparmentbathrom/Glassware/Cakesstand/Cakessing';
import Furniture from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Furniture/Furniture';
import Furnitureform from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Furniture/Furnitureform';
import Furniturelist from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Furniture/Furniturelist';
import Furnitureupdate from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Furniture/Furnitureupdate';
import Furnituresingl from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Furniture/Furnituresingl';
import Mats from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Mats & Rugs/Mats';
import Matssingl from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Mats & Rugs/Matssingl';
import Matsform from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Mats & Rugs/Matsform';
import Matslist from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Mats & Rugs/Matslist';
import Matsupdate from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Mats & Rugs/Matsupdate';
import Candelform from './Components/Pages/Adminside/deparmentbathrom/Home decore/Candels/Candelform';
import Candellist from './Components/Pages/Adminside/deparmentbathrom/Home decore/Candels/Candellist';
import Candelupdate from './Components/Pages/Adminside/deparmentbathrom/Home decore/Candels/Candelupdate';
import Candel from './Components/Pages/Adminside/deparmentbathrom/Home decore/Candels/Candel';
import Candelsingl from './Components/Pages/Adminside/deparmentbathrom/Home decore/Candels/Candelsingl';
import St from './Components/Pages/Adminside/deparmentbathrom/Home decore/St George/St';
import Stsingal from './Components/Pages/Adminside/deparmentbathrom/Home decore/St George/Stsingal';
import STform from './Components/Pages/Adminside/deparmentbathrom/Home decore/St George/STform';
import STlist from './Components/Pages/Adminside/deparmentbathrom/Home decore/St George/STList';
import Stupdate from './Components/Pages/Adminside/deparmentbathrom/Home decore/St George/Stupdate';
import Foodconform from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/FoodContainer/Foodconform';
import Foodconlist from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/FoodContainer/Foodconlist';
import Foodconupdate from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/FoodContainer/Foodconupdate';
import Foodcon from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/FoodContainer/Foodcon';
import Foodconsingl from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/FoodContainer/Foodconsingl';
import Kidsplas from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Kids Plastic Products/Kidsplas';
import Kidsplassingl from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Kids Plastic Products/Kidsplassingl';
import Kidsplasform from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Kids Plastic Products/Kidsplasform';
import Kidsplaslist from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Kids Plastic Products/Kidsplaslist';
import Kidsplasupdate from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Kids Plastic Products/Kidsplasupdate';
import Forgetpassword from './Components/Forgetpassword';
import VerifyOtp from './Components/VerifyOtp';
import Coolerform from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Coolerbags/Coolerform';
import Coolerlist from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Coolerbags/Coolerlist';
import Coolerupdate from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Coolerbags/Coolerupdate';
import Coolerbags from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Coolerbags/Coolerbags';
import Coolersingl from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Coolerbags/Coolersingl';
import Flaskform from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Flask/Flaskform';
import Flasklist from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Flask/Flasklist';
import Flaskupdate from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Flask/Flaskupdate';
import Flas from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Flask/Flas';
import Flasksingl from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Flask/Flasksingl';
import Art from './Components/Pages/Adminside/deparmentbathrom/Statinoery/ART & Craft/Art';
import Artsingle from './Components/Pages/Adminside/deparmentbathrom/Statinoery/ART & Craft/Artsingle';
import Artform from './Components/Pages/Adminside/deparmentbathrom/Statinoery/ART & Craft/Artform';
import Artlist from './Components/Pages/Adminside/deparmentbathrom/Statinoery/ART & Craft/Artlist';
import Artupdate from './Components/Pages/Adminside/deparmentbathrom/Statinoery/ART & Craft/Artupdate';
import Books from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Books/Books';
import Bookssingle from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Books/Bookssingl';
import Booksform from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Books/Booksform';
import Bookslist from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Books/Bookslist';
import Booksupdate from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Books/Booksupdate';
import Brushwareform from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Brushare/Brushwareform';
import Brushwarelist from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Brushare/Brushwarelist';
import Brushwareupload from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Brushare/Brushwareupdate';
import Brushware from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Brushare/Brushware';
import Brushwaresingel from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Brushare/Brushwaresingl';
import Duster from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Clothandduster/Duster';
import Dustersingl from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Clothandduster/Dustersingl';
import Dusterform from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Clothandduster/Dusterform';
import Dusterlist from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Clothandduster/Dusterlist';
import Dusterupdate from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Clothandduster/Dusterupdate';
import Artifical from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalflowers/Artifical';
import Artificallist from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalflowers/Artificallist';
import Artificalupdate from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalflowers/Artificalupdate';
import Artificalsingel from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalflowers/Artificalsingl';
import Artificalform from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalflowers/Artificalform';
import Bouquetform from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Bouquet/Bouquetform';
import Bouquetlist from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Bouquet/Bouquetlist';
import Bouquetupdate from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Bouquet/Bouquetupdate';
import Bouquet from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Bouquet/Bouquet';
import Bouquetsingl from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Bouquet/Bouquetsingl';
import Diytoolspo from './Components/Pages/Adminside/Poudliene/Diytools/Diytoolspo';
import Diytoolssingl from './Components/Pages/Adminside/Poudliene/Diytools/Diytoolssingl';
import Diytoolsform from './Components/Pages/Adminside/Poudliene/Diytools/Diytoolsform';
import Diytoolslist from './Components/Pages/Adminside/Poudliene/Diytools/Diytoolslist';
import Diytoolsupdate from './Components/Pages/Adminside/Poudliene/Diytools/Diytoolsupdate';
import Disposible from './Components/Pages/Adminside/Poudliene/Disposible/Disposible';
import Disposbilesingle from './Components/Pages/Adminside/Poudliene/Disposible/Disposbilesingle';
import Disposibleformpo from './Components/Pages/Adminside/Poudliene/Disposible/Disposibleformpo';
import Disposiblelistpo from './Components/Pages/Adminside/Poudliene/Disposible/Disposiblelistpo';
import Disposibleupdatepo from './Components/Pages/Adminside/Poudliene/Disposible/Disposibleupdatepo';
import Craftform from './Components/Pages/Adminside/Poudliene/Craft/Craftform';
import Craftlist from './Components/Pages/Adminside/Poudliene/Craft/Craftlist';
import Craftupdate from './Components/Pages/Adminside/Poudliene/Craft/Craftupdate';
import Craftsingl from './Components/Pages/Adminside/Poudliene/Craft/Craftsingl';
import Craftpo from './Components/Pages/Adminside/Poudliene/Craft/Craftpo';
import Carpo from './Components/Pages/Adminside/Poudliene/Carproducts/Carpo';
import Carposingl from './Components/Pages/Adminside/Poudliene/Carproducts/Carposingl';
import Carpoform from './Components/Pages/Adminside/Poudliene/Carproducts/Carpoform';
import Carpolist from './Components/Pages/Adminside/Poudliene/Carproducts/Carpolist';
import Carpoupdate from './Components/Pages/Adminside/Poudliene/Carproducts/Carpoupdate';
import Candelesform from './Components/Pages/Adminside/Poudliene/Candeles/Candelesform';
import Candeleslist from './Components/Pages/Adminside/Poudliene/Candeles/Candeleslist';
import Candelesupdate from './Components/Pages/Adminside/Poudliene/Candeles/Candelesupdate';
import Candeles from './Components/Pages/Adminside/Poudliene/Candeles/Candeles';
import Candelessingl from './Components/Pages/Adminside/Poudliene/Candeles/Candelessingl';
import Foodpound from './Components/Pages/Adminside/Poudliene/Foodpoundline/Foodpound';
import Foodposingl from './Components/Pages/Adminside/Poudliene/Foodpoundline/Foodposingl';
import Foodpoform from './Components/Pages/Adminside/Poudliene/Foodpoundline/Foodpoform';
import Foodpolist from './Components/Pages/Adminside/Poudliene/Foodpoundline/Foodpolist';
import Foodpoupdate from './Components/Pages/Adminside/Poudliene/Foodpoundline/Foodpoupdate';
import Shoecare from './Components/Pages/Adminside/Poudliene/Shoecare/Shoecare';
import Shoesingl from './Components/Pages/Adminside/Poudliene/Shoecare/Shoesingl';
import Shoeform from './Components/Pages/Adminside/Poudliene/Shoecare/Shoeform';
import Shoelist from './Components/Pages/Adminside/Poudliene/Shoecare/Shoelist';
import Shoeupdate from './Components/Pages/Adminside/Poudliene/Shoecare/Shoeupdate';
import Stationeryform from './Components/Pages/Adminside/Poudliene/Stationery/Stationeryform';
import Stationerylist from './Components/Pages/Adminside/Poudliene/Stationery/Stationerylist';
import Stationeryupdate from './Components/Pages/Adminside/Poudliene/Stationery/Stationeryupdate';
import Stationerypo from './Components/Pages/Adminside/Poudliene/Stationery/Stationerypo';
import Stationerysingl from './Components/Pages/Adminside/Poudliene/Stationery/Stationerysingl';
import Potoyform from './Components/Pages/Adminside/Poudliene/Toys/Potoyform';
import Potoylist from './Components/Pages/Adminside/Poudliene/Toys/Potoylist';
import Potoyupdate from './Components/Pages/Adminside/Poudliene/Toys/Potoyupdate';
import Potoy from './Components/Pages/Adminside/Poudliene/Toys/Potoy';
import Potoysingl from './Components/Pages/Adminside/Poudliene/Toys/Potoysingl';
import Pestconform from './Components/Pages/Adminside/Poudliene/PestControl/Pestconform';
import Pestconlist from './Components/Pages/Adminside/Poudliene/PestControl/Pestconlist';
import Pstconupdate from './Components/Pages/Adminside/Poudliene/PestControl/Pstconupdate';
import Pestcon from './Components/Pages/Adminside/Poudliene/PestControl/Pestcon';
import Pestconsingl from './Components/Pages/Adminside/Poudliene/PestControl/Pestconsingl';
import Lightergasform from './Components/Pages/Adminside/Poudliene/Lightergas/Lightergasform';
import Lightergaslist from './Components/Pages/Adminside/Poudliene/Lightergas/Lightergaslist';
import Lightergasupdate from './Components/Pages/Adminside/Poudliene/Lightergas/Lightergasupdate';
import Lightergas from './Components/Pages/Adminside/Poudliene/Lightergas/Lightergas';
import Lightergassingl from './Components/Pages/Adminside/Poudliene/Lightergas/Lightergassingl';
import Loundryirform from './Components/Pages/Adminside/Poudliene/Loundryiron/Loundryirform';
import Loundryirlist from './Components/Pages/Adminside/Poudliene/Loundryiron/Loundryirlist';
import Loundryirupdate from './Components/Pages/Adminside/Poudliene/Loundryiron/Loundryirupdate';
import Loundryiron from './Components/Pages/Adminside/Poudliene/Loundryiron/Loundryiron';
import Loundryirsingl from './Components/Pages/Adminside/Poudliene/Loundryiron/Loundryirsingl';
import Kitchenwarepo from './Components/Pages/Adminside/Poudliene/Kitchwear/Kitchenwarepo';
import Kitchenwareposingl from './Components/Pages/Adminside/Poudliene/Kitchwear/Kitchenwareposingl';
import Kitchenwarepoform from './Components/Pages/Adminside/Poudliene/Kitchwear/Kitchenwarepoform';
import Kitchenwarepolist from './Components/Pages/Adminside/Poudliene/Kitchwear/Kitchenwarepolist';
import Kitchenwarepoupdate from './Components/Pages/Adminside/Poudliene/Kitchwear/Kitchenwarepoupdate';
import Hosieryform from './Components/Pages/Adminside/Poudliene/Hosiery/Hosieryform';
import Hosierylist from './Components/Pages/Adminside/Poudliene/Hosiery/Hosierylist';
import Hosieryupdate from './Components/Pages/Adminside/Poudliene/Hosiery/Hosieryupdate';
import Hosiery from './Components/Pages/Adminside/Poudliene/Hosiery/Hosiery';
import Hosierysingl from './Components/Pages/Adminside/Poudliene/Hosiery/Hosierysingl';
import Householdcl from './Components/Pages/Adminside/Poudliene/Householdcleaning/Householdcl';
import Householdclform from './Components/Pages/Adminside/Poudliene/Householdcleaning/Householdclform';
import Householdcllist from './Components/Pages/Adminside/Poudliene/Householdcleaning/Householdcllist';
import Householdclupdate from './Components/Pages/Adminside/Poudliene/Householdcleaning/Householdclupdate';
import Householdclsingl from './Components/Pages/Adminside/Poudliene/Householdcleaning/Householdclsingl';
import Househldpr from './Components/Pages/Adminside/Poudliene/Householdproducts/Househldpr';
import Househldprsingl from './Components/Pages/Adminside/Poudliene/Householdproducts/Househldprsingl';
import Househldprform from './Components/Pages/Adminside/Poudliene/Householdproducts/Househldprform';
import Househldprlist from './Components/Pages/Adminside/Poudliene/Householdproducts/Househldprlist';
import Househldprupdate from './Components/Pages/Adminside/Poudliene/Householdproducts/Househldprupdate';
import Reading from './Components/Pages/Adminside/Poudliene/Reading/Reading';
import Readingsingl from './Components/Pages/Adminside/Poudliene/Reading/Readingsingl';
import Readingform from './Components/Pages/Adminside/Poudliene/Reading/Readingform';
import Readinglist from './Components/Pages/Adminside/Poudliene/Reading/Readinglist';
import Readingupdate from './Components/Pages/Adminside/Poudliene/Reading/Readingupdate';
import Glovesform from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Gloves/Glovesform';
import Gloveslist from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Gloves/Gloveslist';
import Glovesupdate from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Gloves/Glovesupdate';
import Gloves from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Gloves/Gloves';
import Glovessingl from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Gloves/Glovessingl';
import Mopsform from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Mops/Mopsform';
import Mopslist from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Mops/Mopslist';
import Mopsupdate from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Mops/Mopsupdate';
import Mops from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Mops/Mops';
import Mopssingl from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Mops/Mopssingl';
import Sponeform from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Sponge/Sponeform';
import Spongelist from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Sponge/Spongelist';
import Spongeupdate from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Sponge/Spongeupdate';
import Sponge from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Sponge/Sponge';
import Spongesingl from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Sponge/Spongesingl';
import Barrettine from './Components/Pages/Adminside/deparmentbathrom/Diy/Barrettine/Barrettine';
import Barrettinesingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Barrettine/Barrettinesingl';
import Barrettineform from './Components/Pages/Adminside/deparmentbathrom/Diy/Barrettine/Barrettineform';
import Barrettinelist from './Components/Pages/Adminside/deparmentbathrom/Diy/Barrettine/Barrettinelist';
import Barrettineupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Barrettine/Barrettineupdate';
import Bartolin from './Components/Pages/Adminside/deparmentbathrom/Diy/Bartolin/Bartolin';
import Bartolinsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Bartolin/Bartolinsingl';
import Bartolinform from './Components/Pages/Adminside/deparmentbathrom/Diy/Bartolin/Bartolinform';
import Bartolinlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Bartolin/Bartolinlist';
import Bartolinupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Bartolin/Bartolinupdate';
import Birdbrand from './Components/Pages/Adminside/deparmentbathrom/Diy/Birdbrand/Birdbrand';
import Birdbrandsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Birdbrand/Birdbrandsingl';
import Birdbrandform from './Components/Pages/Adminside/deparmentbathrom/Diy/Birdbrand/Birdbrandform';
import Birdbrandlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Birdbrand/Birdbrandlist';
import Birdbrandupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Birdbrand/Birdbrandupdate';
import Blackform from './Components/Pages/Adminside/deparmentbathrom/Diy/Blackspur/Blackform';
import Blacklist from './Components/Pages/Adminside/deparmentbathrom/Diy/Blackspur/Blacklist';
import Blackupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Blackspur/Blackupdate';
import Black from './Components/Pages/Adminside/deparmentbathrom/Diy/Blackspur/Black';
import Blacksingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Blackspur/Blacksingl';
import Bonit from './Components/Pages/Adminside/deparmentbathrom/Diy/Bondit/Bonit';
import Bonitsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Bondit/Bonitsingl';
import Bonitform from './Components/Pages/Adminside/deparmentbathrom/Diy/Bondit/Bonitform';
import Bonitlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Bondit/Bonitlist';
import Bonitupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Bondit/Bonitupdate';
import Bagsform from './Components/Pages/Adminside/deparmentbathrom/Laundry/Bags/Bagsform';
import Bagslist from './Components/Pages/Adminside/deparmentbathrom/Laundry/Bags/Bagslist';
import Bagsupdate from './Components/Pages/Adminside/deparmentbathrom/Laundry/Bags/Bagsupdate';
import Bags from './Components/Pages/Adminside/deparmentbathrom/Laundry/Bags/Bags';
import Bagssingle from './Components/Pages/Adminside/deparmentbathrom/Laundry/Bags/Bagssingl';
import Basketst from './Components/Pages/Adminside/deparmentbathrom/Laundry/Basketstorgae/Basketst';
import Basketstsingle from './Components/Pages/Adminside/deparmentbathrom/Laundry/Basketstorgae/Basketstsingl';
import Basketstform from './Components/Pages/Adminside/deparmentbathrom/Laundry/Basketstorgae/Basketstform';
import Basketstlist from './Components/Pages/Adminside/deparmentbathrom/Laundry/Basketstorgae/Basketstlist';
import Basketstupdate from './Components/Pages/Adminside/deparmentbathrom/Laundry/Basketstorgae/Basketstupdate';
import Luggagesingl from './Components/Pages/Adminside/deparmentbathrom/Laundry/Luggage/Luggagesingl';
import Luggageform from './Components/Pages/Adminside/deparmentbathrom/Laundry/Luggage/Luggageform';
import Luggagelist from './Components/Pages/Adminside/deparmentbathrom/Laundry/Luggage/Luggagelist';
import Luggageupdate from './Components/Pages/Adminside/deparmentbathrom/Laundry/Luggage/Luggageupdate';
import Luggage from './Components/Pages/Adminside/deparmentbathrom/Laundry/Luggage/Luggage';
import Bostikform from './Components/Pages/Adminside/deparmentbathrom/Diy/Bostik/Bostikform';
import Bostiklist from './Components/Pages/Adminside/deparmentbathrom/Diy/Bostik/Bostiklist';
import Bostiksingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Bostik/Bostiksingl';
import Bostikupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Bostik/Bostikupdate';
import Bostik from './Components/Pages/Adminside/deparmentbathrom/Diy/Bostik/Bostik';
import Briwaxform from './Components/Pages/Adminside/deparmentbathrom/Diy/Briwax/Briwaxform';
import Briwaxlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Briwax/Briwaxlist';
import Briwaxsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Briwax/Briwaxsingl';
import Briwaxupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Briwax/Briwaxupdate';
import Briwax from './Components/Pages/Adminside/deparmentbathrom/Diy/Briwax/Briwax';
import Brookform from './Components/Pages/Adminside/deparmentbathrom/Diy/Brookstone/Brookform';
import Brooklist from './Components/Pages/Adminside/deparmentbathrom/Diy/Brookstone/Brooklist';
import Brookupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Brookstone/Brookupdate';
import Brook from './Components/Pages/Adminside/deparmentbathrom/Diy/Brookstone/Brook';
import Brooksingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Brookstone/Brooksingl';
import Carpro from './Components/Pages/Adminside/deparmentbathrom/Diy/CarProduct/Carpro';
import Carprosingle from './Components/Pages/Adminside/deparmentbathrom/Diy/CarProduct/Carprosingl';
import Carproform from './Components/Pages/Adminside/deparmentbathrom/Diy/CarProduct/Carproform';
import Carprolist from './Components/Pages/Adminside/deparmentbathrom/Diy/CarProduct/Carprolist';
import Carproupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/CarProduct/Carproupdate';
import Carplan from './Components/Pages/Adminside/deparmentbathrom/Diy/Carplan/Carplan';
import Carplansingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Carplan/Carplansingl';
import Carplanform from './Components/Pages/Adminside/deparmentbathrom/Diy/Carplan/Carplanform';
import Carplanlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Carplan/Carplanlist';
import Carplanupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Carplan/Carplanupdate';
import Chamois from './Components/Pages/Adminside/deparmentbathrom/Diy/Chamois/Chamois';
import Chamoissingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Chamois/Chamoissingl';
import Chamoisform from './Components/Pages/Adminside/deparmentbathrom/Diy/Chamois/Chamoisform';
import Chamoislist from './Components/Pages/Adminside/deparmentbathrom/Diy/Chamois/Chamoislist';
import Chamoisupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Chamois/Chamoisupdate';
import Command from './Components/Pages/Adminside/deparmentbathrom/Diy/Command/Command';
import Commandsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Command/Commandsingl';
import Commandform from './Components/Pages/Adminside/deparmentbathrom/Diy/Command/Commandform';
import Commandlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Command/Commandlist';
import Commandupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Command/Commandupdate';
import Coralform from './Components/Pages/Adminside/deparmentbathrom/Diy/Coraltools/Coralform';
import Corallist from './Components/Pages/Adminside/deparmentbathrom/Diy/Coraltools/Corallist';
import Coralupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Coraltools/Coralupdate';
import Coral from './Components/Pages/Adminside/deparmentbathrom/Diy/Coraltools/Coral';
import Coralsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Coraltools/Coralsingl';
import Crownform from './Components/Pages/Adminside/deparmentbathrom/Diy/Crownpaint/Crownform';
import Crownlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Crownpaint/Crownlist';
import Crownupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Crownpaint/Crownupdate';
import Crown from './Components/Pages/Adminside/deparmentbathrom/Diy/Crownpaint/Crown';
import Crownsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Crownpaint/Crownsingl';
import Dekton from './Components/Pages/Adminside/deparmentbathrom/Diy/Dekton/Dekton';
import Dektonsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Dekton/Dektonsingl';
import Dektonform from './Components/Pages/Adminside/deparmentbathrom/Diy/Dekton/Dektonform';
import Dektonlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Dekton/Dektonlist';
import Dektonupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Dekton/Dektonupdate';
import Demsumform from './Components/Pages/Adminside/deparmentbathrom/Diy/Demsum/Demsumform';
import Demsumlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Demsum/Demsumlist';
import Demsumupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Demsum/Demsumupdate';
import Demsum from './Components/Pages/Adminside/deparmentbathrom/Diy/Demsum/Demsum';
import Demsumsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Demsum/Demsumsingl';
import Darper from './Components/Pages/Adminside/deparmentbathrom/Diy/Darpertools/Darper';
import Darpersingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Darpertools/Darpersingl';
import Darperform from './Components/Pages/Adminside/deparmentbathrom/Diy/Darpertools/Darperform';
import Darperlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Darpertools/Darperlist';
import Darperupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Darpertools/Darperupdate';
import Edcoform from './Components/Pages/Adminside/deparmentbathrom/Diy/Edco/Edcoform';
import Edcolist from './Components/Pages/Adminside/deparmentbathrom/Diy/Edco/Edcolist';
import Edcoupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Edco/Edcoupdate';
import Edcosingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Edco/Edcosingl';
import Edco from './Components/Pages/Adminside/deparmentbathrom/Diy/Edco/Edco';
import Ever from './Components/Pages/Adminside/deparmentbathrom/Diy/Everbuild/Ever';
import Eversingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Everbuild/Eversingl';
import Everform from './Components/Pages/Adminside/deparmentbathrom/Diy/Everbuild/Everform';
import Everlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Everbuild/Everlist';
import Everupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Everbuild/Everupdate';
import Exitexform from './Components/Pages/Adminside/deparmentbathrom/Diy/Exitex/Exitexform';
import Exitexlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Exitex/Exitexlist';
import Exitexupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Exitex/Exitexupdate';
import Exitex from './Components/Pages/Adminside/deparmentbathrom/Diy/Exitex/Exitex';
import Exitexsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Exitex/Exitexsingl';
import Fit from './Components/Pages/Adminside/deparmentbathrom/Diy/Fit for job/Fit';
import Fitsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Fit for job/Fitsingl';

import Fitupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Fit for job/Fitupdate';
import Fitforform from './Components/Pages/Adminside/deparmentbathrom/Diy/Fit for job/Fitforform'
import Fitforlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Fit for job/Fitforlist'
import Globalform from './Components/Pages/Adminside/deparmentbathrom/Diy/Global tool/Globalforms';
import Globallist from './Components/Pages/Adminside/deparmentbathrom/Diy/Global tool/Globallist';
import Globalupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Global tool/Globalupdate';
import Global from './Components/Pages/Adminside/deparmentbathrom/Diy/Global tool/Global';
import Globalsinngl from './Components/Pages/Adminside/deparmentbathrom/Diy/Global tool/Globalsinngl';
import Gasgo from './Components/Pages/Adminside/deparmentbathrom/Diy/GO GO GAs/Gasgo';
import Gasgosingl from './Components/Pages/Adminside/deparmentbathrom/Diy/GO GO GAs/Gasgosingl';
import Gasgoform from './Components/Pages/Adminside/deparmentbathrom/Diy/GO GO GAs/Gasgoform';
import Gasgolist from './Components/Pages/Adminside/deparmentbathrom/Diy/GO GO GAs/Gasgolist';
import Gasgoupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/GO GO GAs/Gasgoupdate';
import Gorilaform from './Components/Pages/Adminside/deparmentbathrom/Diy/Gorilaglue/Gorilaform';
import Gorilalist from './Components/Pages/Adminside/deparmentbathrom/Diy/Gorilaglue/Gorilalist';
import Gorilaupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Gorilaglue/Gorilaupdtae';
import Gorila from './Components/Pages/Adminside/deparmentbathrom/Diy/Gorilaglue/Gorila';
import Gorilasingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Gorilaglue/Gorilasingl';
import Hagesanform from './Components/Pages/Adminside/deparmentbathrom/Diy/Hagesan/Hagesanform';
import Hagesanlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Hagesan/Hagesanlist';
import Hagesanupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Hagesan/Hagesanupdate';
import Hagesan from './Components/Pages/Adminside/deparmentbathrom/Diy/Hagesan/Hagesan';
import Hagesansingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Hagesan/Hagesansingl';
import Hardwaretools from './Components/Pages/Adminside/deparmentbathrom/Diy/Hardwaretools/Hardwaretools';
import Hardwaretoolssingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Hardwaretools/Hardwaretoolssingl';
import Hardwaretoolsform from './Components/Pages/Adminside/deparmentbathrom/Diy/Hardwaretools/Hardwaretoolsform';
import Hardwaretoolslist from './Components/Pages/Adminside/deparmentbathrom/Diy/Hardwaretools/Hardwaretoolslist';
import Hardwaretoolsupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Hardwaretools/Hardwaretoolsupdate';
import Harris from './Components/Pages/Adminside/deparmentbathrom/Diy/Harris/Harris';
import Harrissingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Harris/Harrissingl';
import Harrisform from './Components/Pages/Adminside/deparmentbathrom/Diy/Harris/Harrisform';
import Harrislist from './Components/Pages/Adminside/deparmentbathrom/Diy/Harris/Harrislist';
import Harrisupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Harris/Harrisupdtae';
import Hilkaform from './Components/Pages/Adminside/deparmentbathrom/Diy/Hilka/Hilkaform';
import Hilkalist from './Components/Pages/Adminside/deparmentbathrom/Diy/Hilka/Hilkalist';
import Hilkaupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Hilka/Hilkaupdate';
import Hilka from './Components/Pages/Adminside/deparmentbathrom/Diy/Hilka/Hilka';
import Hilkasingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Hilka/Hilkasingl';
import Humnrol from './Components/Pages/Adminside/deparmentbathrom/Diy/Humbrol/Humnrol';
import Humnrolsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Humbrol/Humnrolsingl';
import Humnrolform from './Components/Pages/Adminside/deparmentbathrom/Diy/Humbrol/Humnrolform';
import Humnrollist from './Components/Pages/Adminside/deparmentbathrom/Diy/Humbrol/Humnrollist';
import Humnrolupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Humbrol/Humnrolupdate';
import Jbweldform from './Components/Pages/Adminside/deparmentbathrom/Diy/Jbweld/Jbweldform';
import Jbweldlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Jbweld/Jbweldlist';
import Jbweldupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Jbweld/Jbweldupdte';
import Jbweldsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Jbweld/Jbweldsingl';
import Jbweld from './Components/Pages/Adminside/deparmentbathrom/Diy/Jbweld/Jbweld';
import Kilrok from './Components/Pages/Adminside/deparmentbathrom/Diy/Kilrock/Kilrok';
import Kilroksingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Kilrock/Kilroksingl';
import Kilrokform from './Components/Pages/Adminside/deparmentbathrom/Diy/Kilrock/Kilrokform';
import Kilroklist from './Components/Pages/Adminside/deparmentbathrom/Diy/Kilrock/Kilroklist';
import Kilrokupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Kilrock/Kilrokupdate';
import Ladderform from './Components/Pages/Adminside/deparmentbathrom/Diy/Ladders/Ladderform';
import Ladderlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Ladders/Ladderlist';
import Ladderupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Ladders/Ladderupdate';
import Ladder from './Components/Pages/Adminside/deparmentbathrom/Diy/Ladders/Ladder';
import Laddersingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Ladders/Laddersingl';
import Locktile from './Components/Pages/Adminside/deparmentbathrom/Diy/Locktile/Locktile';
import Locktilesingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Locktile/Locktilesingl';
import Locktileform from './Components/Pages/Adminside/deparmentbathrom/Diy/Locktile/Locktileform';
import Locktilelist from './Components/Pages/Adminside/deparmentbathrom/Diy/Locktile/Locktilelist';
import Locktileupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Locktile/Locktileupdate';
import Lynwood from './Components/Pages/Adminside/deparmentbathrom/Diy/Lynwood/Lynwood';
import Lynwoodsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Lynwood/Lynwoodsingl';
import Lynwoodform from './Components/Pages/Adminside/deparmentbathrom/Diy/Lynwood/Lynwoodform';
import Lynwoodlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Lynwood/Lynwoodlist';
import Lynwoodupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Lynwood/Lynwoodupdate';
import Misc from './Components/Pages/Adminside/deparmentbathrom/Diy/Misc/Misc';
import Miscsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Misc/Miscsingl';
import Miscform from './Components/Pages/Adminside/deparmentbathrom/Diy/Misc/Miscform';
import Misclist from './Components/Pages/Adminside/deparmentbathrom/Diy/Misc/Misclist';
import Miscupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Misc/Miscupdate';
import Oxford from './Components/Pages/Adminside/deparmentbathrom/Diy/Oxford Product/Oxford';
import Oxfordsing from './Components/Pages/Adminside/deparmentbathrom/Diy/Oxford Product/Oxfordsing';
import Oxfordform from './Components/Pages/Adminside/deparmentbathrom/Diy/Oxford Product/Oxfordform';
import Oxfordlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Oxford Product/Oxfordlist';
import Oxfordupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Oxford Product/Oxfordupdtae';
import Pestconsing from './Components/Pages/Adminside/deparmentbathrom/Diy/Pestcon/Pestconsing';
import Pestcoform from './Components/Pages/Adminside/deparmentbathrom/Diy/Pestcon/Pestcoform';
import Pestcolist from './Components/Pages/Adminside/deparmentbathrom/Diy/Pestcon/Pestcolist';
import Pestcoupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Pestcon/Pestcoupdate';
import Pestco from './Components/Pages/Adminside/deparmentbathrom/Diy/Pestcon/Pestco';
import Plasplug from './Components/Pages/Adminside/deparmentbathrom/Diy/Plasplugs/Plasplug';
import Plasplugsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Plasplugs/Plasplugsingl';
import Plasplugform from './Components/Pages/Adminside/deparmentbathrom/Diy/Plasplugs/Plasplugform';
import Plaspluglist from './Components/Pages/Adminside/deparmentbathrom/Diy/Plasplugs/Plaspluglist';
import Plasplugupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Plasplugs/Plasplugupdate';
import Primacarform from './Components/Pages/Adminside/deparmentbathrom/Diy/Prima car product/Primacarform';
import Primacarlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Prima car product/Primacarlist';
import Primacarupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Prima car product/Primacarupdate';
import Primacar from './Components/Pages/Adminside/deparmentbathrom/Diy/Prima car product/Primacar';
import Primacarsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Prima car product/Primacarsingl';
import Rolson from './Components/Pages/Adminside/deparmentbathrom/Diy/Rolson tools/Rolson';
import Rolsonsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Rolson tools/Rolsonsingl';
import Rolsonform from './Components/Pages/Adminside/deparmentbathrom/Diy/Rolson tools/Rolsonform';
import Rolsonlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Rolson tools/Rolsonlist';
import Rolsonupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Rolson tools/Rolsonupdate';
import Ronsealform from './Components/Pages/Adminside/deparmentbathrom/Diy/Ronseal/Ronsealform';
import Ronseallist from './Components/Pages/Adminside/deparmentbathrom/Diy/Ronseal/Ronseallist';
import Ronsealupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Ronseal/Ronsealupdate';
import Ronseal from './Components/Pages/Adminside/deparmentbathrom/Diy/Ronseal/Ronseal';
import Ronsealsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Ronseal/Ronsealsingl';
import Rustinsltd from './Components/Pages/Adminside/deparmentbathrom/Diy/Rustinsltd/Rustinsltd';
import Rustinsltdsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Rustinsltd/Rustinsltdsingl';
import Rustinsltdform from './Components/Pages/Adminside/deparmentbathrom/Diy/Rustinsltd/Rustinsltdform';
import Rustinsltdlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Rustinsltd/Rustinsltdlist';
import Rustinsltdupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Rustinsltd/Rustinsltdupdate';
import Secureitform from './Components/Pages/Adminside/deparmentbathrom/Diy/Secureit/Secureitform';
import Secureitlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Secureit/Secureitlist';
import Secureitupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Secureit/Secureitupdate';
import Secureit from './Components/Pages/Adminside/deparmentbathrom/Diy/Secureit/Secureit';
import Secureitsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Secureit/Secureitsingl';
import Secrup from './Components/Pages/Adminside/deparmentbathrom/Diy/Secruplumb/Secrup';
import Secrupsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Secruplumb/Secrupsingl';
import Secrupform from './Components/Pages/Adminside/deparmentbathrom/Diy/Secruplumb/Secrupform';
import Secruplist from './Components/Pages/Adminside/deparmentbathrom/Diy/Secruplumb/Secruplist';
import Secrupupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Secruplumb/Secrupupdate';
import Shortageform from './Components/Pages/Adminside/deparmentbathrom/Diy/Shortage/Shortageform';
import Shortagelist from './Components/Pages/Adminside/deparmentbathrom/Diy/Shortage/Shortagelist';
import Shortageupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Shortage/Shortageupdate';
import Shortage from './Components/Pages/Adminside/deparmentbathrom/Diy/Shortage/Shortage';
import Shortagesingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Shortage/Shortagesingl';
import Soudal from './Components/Pages/Adminside/deparmentbathrom/Diy/Soudal/Soudal';
import Soudalsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Soudal/Soudalsingl';
import Soudalform from './Components/Pages/Adminside/deparmentbathrom/Diy/Soudal/Soudalform';
import Soudallist from './Components/Pages/Adminside/deparmentbathrom/Diy/Soudal/Soudallist';
import Soudalupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Soudal/Soudalupdate';
import Starpackform from './Components/Pages/Adminside/deparmentbathrom/Diy/Starpack/Starpackform';
import Starpacklist from './Components/Pages/Adminside/deparmentbathrom/Diy/Starpack/Starpacklist';
import Starpackupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Starpack/Starpackupdate';
import Starpack from './Components/Pages/Adminside/deparmentbathrom/Diy/Starpack/Starpack';
import Starpacksingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Starpack/Starpacksingl';
import Sterling from './Components/Pages/Adminside/deparmentbathrom/Diy/Sterling/Sterling';
import Sterlingsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Sterling/Sterlingsingl';
import Sterlingform from './Components/Pages/Adminside/deparmentbathrom/Diy/Sterling/Sterlingform';
import Sterlinglist from './Components/Pages/Adminside/deparmentbathrom/Diy/Sterling/Sterlinglist';
import Sterlingupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Sterling/Sterlingupdate';
import Tableaueform from './Components/Pages/Adminside/deparmentbathrom/Diy/Tableaue/Tableaueform';
import Tableauelist from './Components/Pages/Adminside/deparmentbathrom/Diy/Tableaue/Tableauelist';
import Tableaueupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Tableaue/Tableaueupdate';
import Tableaue from './Components/Pages/Adminside/deparmentbathrom/Diy/Tableaue/Tableaue';
import Tableauesingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Tableaue/Tableauesingl';
import Tricycle from './Components/Pages/Adminside/deparmentbathrom/Diy/Tri cycle/Tricycle';
import Tricyclesingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Tri cycle/Tricyclesingl';
import Tricycleform from './Components/Pages/Adminside/deparmentbathrom/Diy/Tri cycle/Tricycleform';
import Tricyclelist from './Components/Pages/Adminside/deparmentbathrom/Diy/Tri cycle/Tricyclelist';
import Tricycleupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Tri cycle/Tricycleupdate';
import Ultratrape from './Components/Pages/Adminside/deparmentbathrom/Diy/Ultratrape/Ultratrape';
import Ultratrapesingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Ultratrape/Ultratrapesingl';
import Ultratrapeform from './Components/Pages/Adminside/deparmentbathrom/Diy/Ultratrape/Ultratrapeform';
import Ultratrapelist from './Components/Pages/Adminside/deparmentbathrom/Diy/Ultratrape/Ultratrapelist';
import Ultratrapeupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Ultratrape/Ultratrapeupdate';
import Vacuum from './Components/Pages/Adminside/deparmentbathrom/Diy/Vacuum/Vacuum';
import Vacuumsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Vacuum/Vacuumsingl';
import Vacuumform from './Components/Pages/Adminside/deparmentbathrom/Diy/Vacuum/Vacuumform';
import Vacuumlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Vacuum/Vacuumlist';
import Vacuumupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Vacuum/Vacuumupdate';
import Velcroform from './Components/Pages/Adminside/deparmentbathrom/Diy/Velcro/Velcroform';
import Velcrolist from './Components/Pages/Adminside/deparmentbathrom/Diy/Velcro/Velcrolist';
import Velcroupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Velcro/Velcroupdate';
import Velcro from './Components/Pages/Adminside/deparmentbathrom/Diy/Velcro/Velcro';
import Velcrosingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Velcro/Velcrosingl';
import VfmPaints from './Components/Pages/Adminside/deparmentbathrom/Diy/Vfm Paints/VfmPaints';
import VfmPaintssingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Vfm Paints/VfmPaintssingl';
import VfmPaintsform from './Components/Pages/Adminside/deparmentbathrom/Diy/Vfm Paints/VfmPaintsform';
import VfmPaintslist from './Components/Pages/Adminside/deparmentbathrom/Diy/Vfm Paints/VfmPaintslist';
import VfmPaintsupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Vfm Paints/VfmPaintsupdate';
import Wd40form from './Components/Pages/Adminside/deparmentbathrom/Diy/Wd40/Wd40form';
import Wd40list from './Components/Pages/Adminside/deparmentbathrom/Diy/Wd40/Wd40list';
import Wd40updtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Wd40/Wd40update';
import Wd40 from './Components/Pages/Adminside/deparmentbathrom/Diy/Wd40/Wd40';
import Wd40singl from './Components/Pages/Adminside/deparmentbathrom/Diy/Wd40/Wd40singl';
import Werner from './Components/Pages/Adminside/deparmentbathrom/Diy/Werner/Werner';
import Wernersingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Werner/Wernersingl';
import Wernerform from './Components/Pages/Adminside/deparmentbathrom/Diy/Werner/Wernerform';
import Wernerlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Werner/Wernerlist';
import Wernerupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Werner/Wernerupdate';
import Yelelock from './Components/Pages/Adminside/deparmentbathrom/Diy/Yele lock/Yelelock';
import Yelelocksingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Yele lock/Yelelocksingal';
import Yelelockform from './Components/Pages/Adminside/deparmentbathrom/Diy/Yele lock/Yelelockform';
import Yelelocklist from './Components/Pages/Adminside/deparmentbathrom/Diy/Yele lock/Yelelocklist';
import Yelelockupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Yele lock/Yelelockupdate';
import Uniconform from './Components/Pages/Adminside/deparmentbathrom/Diy/Unicon/Uniconform';
import Uniconcard from './Components/Pages/Adminside/deparmentbathrom/Diy/Unicon/Uniconcard';
import Uniconlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Unicon/Uniconlist';
import Uniconupdtae from './Components/Pages/Adminside/deparmentbathrom/Diy/Unicon/Uniconupdate';
import Amtechform from './Components/Pages/Adminside/deparmentbathrom/Diy/Amtech tools/Amtechform';
import Amtechlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Amtech tools/Amtechlist';
import Amtechupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Amtech tools/Amtechupdate';
import Antiquxform from './Components/Pages/Adminside/deparmentbathrom/Diy/Antiqux/Antiquxform';
import Antiquxlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Antiqux/Antiquxlist';
import Antiquxupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Antiqux/Antiquxupdate';
import Unicon from './Components/Pages/Adminside/deparmentbathrom/Diy/Unicon/Unicon';
import Uniconsingl from './Components/Pages/Adminside/deparmentbathrom/Diy/Unicon/Uniconsingl';
import Amtech from './Components/Pages/Adminside/deparmentbathrom/Diy/Amtech tools/Amtech';
import Amtechsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Amtech tools/Amtechsingl';
import Antiqux from './Components/Pages/Adminside/deparmentbathrom/Diy/Antiqux/Antiqux';
import Antiquxsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Antiqux/Antiquxsingl';
import Chrome from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Chrome/Chrome';
import Chromesingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Chrome/Chromesingl';
import Chromeform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Chrome/Chromeform';
import Chromelist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Chrome/Chromelist';
import Chromeupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Chrome/Chromeupdtae';
import Cookwar from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Cookware/Cookwar';
import Cookwarsingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Cookware/Cookwaresingl';
import Cookwarform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Cookware/Cookwareform';
import Cookwarlist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Cookware/Cookwarelist';
import Cookwarupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Cookware/Cookwareupdate';
import Kettles from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kettles/Kettles';
import Kettlessingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kettles/Kettlessingl';
import Kettlesform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kettles/Kettlesform';
import Kettleslist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kettles/Kettleslist';
import Kettlesupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kettles/Kettlesupdate';
import Cutlery from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Cutlery/Cutlery';
import Cutlerysingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Cutlery/Cutlerysingl';
import Cutleryform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Cutlery/Cutleryform';
import Cutlerylist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Cutlery/Cutlerylist';
import Cutleryupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Cutlery/Cutleryupdate';
import KitchenACCform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/KitchenACC/KitchenACCform';
import KitchenACClist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/KitchenACC/KitchenACClist';
import KitchenACCupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/KitchenACC/KitchenACCupdate';
import KitchenACC from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/KitchenACC/KitchenACC';
import KitchenACCsingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/KitchenACC/KitchenACCsingl';
import Kitechenbin from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechenbin/Kitechenbin';
import Kitechenbinsingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechenbin/Kitechenbinsingl';
import Kitechenbinform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechenbin/Kitechenbinform';
import Kitechenbinlist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechenbin/Kitechenbinlist';
import Kitechenbinupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechenbin/Kitechenbinupdate';
import Kitechengaform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechengadgets/Kitechengaform';
import Kitechengalist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechengadgets/Kitechengalist';
import Kitechengaupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechengadgets/Kitechengaupdtae';
import Kitechenga from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechengadgets/Kitechenga';
import Kitechengasingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechengadgets/Kitechengasingl';
import KitechenKniform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/kitechenKnife/KitechenKniform';
import KitechenKnilist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/kitechenKnife/KitechenKnilist';
import KitechenKniupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/kitechenKnife/KitechenKniupdtae';
import KitechenKni from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/kitechenKnife/KitechenKni';
import KitechenKnisingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/kitechenKnife/KitechenKnisingl';
import Scaleskiform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/KitechenScales/Scaleskiform';
import Scaleskilist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/KitechenScales/Scaleskilist';
import Scaleskiupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/KitechenScales/Scaleskiupdate';
import Scaleski from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/KitechenScales/Scaleski';
import Scaleskisingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/KitechenScales/Scaleskisingl';
import Plastickiform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Plastickitechenware/Plastickiform';
import Plastickilist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Plastickitechenware/Plastickilist';
import Plastickiupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Plastickitechenware/Plastickiupdtae';
import Plasticki from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Plastickitechenware/Plasticki';
import Plastickisingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Plastickitechenware/Plastickisingl';
import Simplehu from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Simple Human/Simplehu';
import Simplehusingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Simple Human/Simplehusingl';
import Simplehuform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Simple Human/Simplehuform';
import Simplehulist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Simple Human/Simplehulist';
import Simplehuupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Simple Human/Simplehuupdate';
import Breadform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Breadbeans/Breadform';
import Breadlist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Breadbeans/Breadlist';
import Breadupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Breadbeans/Breadupdate';
import Bread from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Breadbeans/Bread';
import Breadsingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Breadbeans/Breadsingl';
import Tea from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Tea/Tea';
import Teasingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Tea/Teasingl';
import Teaform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Tea/Teaform';
import Tealist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Tea/Tealist';
import Teaupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Tea/Teaupdate';
import Traysform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Trays/Traysform';
import Trayslist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Trays/Trayslist';
import Traysupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Trays/Traysupdate';
import Trays from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Trays/Trays';
import Trayssingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Trays/Trayssingl';
import Water from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Waterfilter/Water';
import Watersingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Waterfilter/Watersingl';
import Waterform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Waterfilter/Waterform';
import Waterlist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Waterfilter/Waterlist';
import Waterupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Waterfilter/Waterupdate';
import Woodenform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Wooden/Woodenform';
import Woodenlist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Wooden/Woodenlist';
import Woodenupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Wooden/Woodenupdte';
import Wooden from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Wooden/Wooden';
import Woodensingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Wooden/Woodensingl';
import Catering from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Catering/Catering';
import Cateringsingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Catering/Cateringsingl';
import Cateringform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Catering/Cateringform';
import Cateringlist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Catering/Cateringlist';
import Cateringupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Catering/Cateringupdate';
import Campingform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Camping/Campingform';
import Campinglist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Camping/Campinglist';
import Campingupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Camping/Campingupdate';
import Camping from './Components/Pages/Adminside/deparmentbathrom/Gardening/Camping/Camping';
import Campingsingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Camping/Campingsingl';
import Fertilizer from './Components/Pages/Adminside/deparmentbathrom/Gardening/Fertilizer/Fertilizer';
import Fertilizersingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Fertilizer/Fertilizersingl';
import Furnitur from './Components/Pages/Adminside/deparmentbathrom/Gardening/Furniture/Furnitur';
import Furnituresingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Furniture/Furnituresingl';
import Giftware from './Components/Pages/Adminside/deparmentbathrom/Gardening/Giftware/Giftware';
import Giftwaresingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Giftware/Giftwaresingl';
import Fertilizerform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Fertilizer/Fertilizerform';
import Fertilizerlist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Fertilizer/Fertilizerlist';
import Fertilizerupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Fertilizer/Fertilizerupdate';
import Furniturform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Furniture/Furniturform';
import Furniturlist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Furniture/Furniturlist';
import Furniturupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Furniture/Furniturupdate';
import Giftwareform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Giftware/Giftwareform';
import Giftwarelist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Giftware/Giftwarelist';
import Giftwareupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Giftware/Giftwareupdate';
import Growingform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Growing Media/Growingform';
import Growinglist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Growing Media/Growinglist';
import Growingupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Growing Media/Growingupdate';
import Lighteningform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Lightening/Lighteningform';
import Lighteninglist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Lightening/Lighteninglist';
import Lighteningupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Lightening/Lighteningupdate';
import Plantersform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Planters/Plantersform';
import Planterslist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Planters/Planterslist';
import Plantersupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Planters/Plantersupdate';
import Growing from './Components/Pages/Adminside/deparmentbathrom/Gardening/Growing Media/Growing';
import Growingsingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Growing Media/Growingsingl';
import Lightening from './Components/Pages/Adminside/deparmentbathrom/Gardening/Lightening/Lightening';
import Lighteningsingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Lightening/Lighteningsingl';
import Planters from './Components/Pages/Adminside/deparmentbathrom/Gardening/Planters/Planters';
import Planterssingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Planters/Planterssingl';
import Toolsacceform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Tools&Accessories/Toolsacceform';
import Toolsaccelist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Tools&Accessories/Toolsaccelist';
import Toolsacceupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Tools&Accessories/Toolsaccepdate';
import Wateringform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Watering/Wateringform';
import Wateringlist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Watering/Wateringlist';
import Wateringupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Watering/Wateringupdate';
import Winterfulesform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Winterfules/Winterfulesform';
import Winterfuleslist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Winterfules/Winterfuleslist';
import Winterfulesupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Winterfules/Winterfulesupdate';
import Toolsacce from './Components/Pages/Adminside/deparmentbathrom/Gardening/Tools&Accessories/Toolsacce';
import Toolsaccesingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Tools&Accessories/Toolsaccesingl';
import Watering from './Components/Pages/Adminside/deparmentbathrom/Gardening/Watering/Watering';
import Wateringsingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Watering/Wateringsingl';
import Winterfules from './Components/Pages/Adminside/deparmentbathrom/Gardening/Winterfules/Winterfules';
import Winterfulessingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Winterfules/Winterfulessingl';
import Giftsets from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Gift sets/Giftsets';
import Giftsetssingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Gift sets/Giftsetssingl';
import Hair from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Hair Product/Hair';
import Hairsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Hair Product/Hairsingl';
import Hand from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Handwash/Hand';
import Handsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Handwash/Handsingl';
import Giftsetsform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Gift sets/Giftsetsform';
import Giftsetslist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Gift sets/Giftsetslist';
import Giftsetsupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Gift sets/Giftsetsupdate';
import Handform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Handwash/Handform';
import Handlist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Handwash/Handlist';
import Handupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Handwash/Handupdate';
import Hairform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Hair Product/Hairform';
import Hairlist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Hair Product/Hairlist';
import Hairupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Hair Product/Hairupdate';
import Healthcareform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Healthcare/Healthcareform';
import Healthcarelist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Healthcare/Healthcarelist';
import Healthcareupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Healthcare/Healthcareupdate';
import Mouthwashform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Mouthwash/Mouthwashform';
import Mouthwashlist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Mouthwash/Mouthwashlist';
import Mouthwashupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Mouthwash/Mouthwashupdate';
import Perfumesform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Perfumes/Perfumesform';
import Perfumeslist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Perfumes/Perfumeslist';
import Perfumesupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Perfumes/Perfumesupdate';
import Sanitaryform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Sanitary/Sanitaryform';
import Sanitarylist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Sanitary/Sanitarylist';
import Sanitaryupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Sanitary/Sanitaryupdate';
import Healthcare from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Healthcare/Healthcare';
import Healthcaresingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Healthcare/Healthcaresingl';
import Mouthwash from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Mouthwash/Mouthwash';
import Mouthwashsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Mouthwash/Mouthwashsingl';
import Perfumes from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Perfumes/Perfumes';
import Perfumessingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Perfumes/Perfumessingl';
import Sanitary from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Sanitary/Sanitary';
import Sanitarysingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Sanitary/Sanitarysingl';
import Saving from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Saving/Saving';
import Savingsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Saving/Savingsingl';
import Skincare from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Skincare/Skincare';
import Skincaresingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Skincare/Skincaresingl';
import Shampo from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Shampo/Shampo';
import Shamposingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Shampo/Shamposingl';
import Showergel from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Showergel/Showergel';
import Showergelsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Showergel/Showergelsingl';
import Savingform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Saving/Savingform';
import Savinglist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Saving/Savinglist';
import Savingupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Saving/Savingupdat';
import Shampoform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Shampo/Shampoform';
import Shampolist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Shampo/Shampolist';
import Shampoupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Shampo/Shampoupdate';
import Showergelform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Showergel/Showergelform';
import Showergellist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Showergel/Showergellist';
import Showergelupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Showergel/Showergelupdate';
import Skincareform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Skincare/Skincareform';
import Skincarelist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Skincare/Skincarelist';
import Skincareupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Skincare/Skincareupdate';
import Soapbar from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Soapbar/Soapbar';
import Soapbarsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Soapbar/Soapbarsingl';
import Soapbarform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Soapbar/Soapbarform';
import Soapbarlist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Soapbar/Soapbarlist';
import Soapbarupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Soapbar/Soapbarupdate';
import Toothbrush from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Toothbrush.js/Toothbrush';
import Toothbrushsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Toothbrush.js/Toothbrushsingl';
import Toothbrushform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Toothbrush.js/Toothbrushform';
import Toothbrushlist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Toothbrush.js/Toothbrushlist';
import Toothbrushupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Toothbrush.js/Toothbrushupdate';
import Toothpastform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Toothpast/Toothpastform';
import Toothpastlist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Toothpast/Toothpastlist';
import Toothpastupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Toothpast/Toothpastupdate';
import Toothpast from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Toothpast/Toothpast';
import Toothpastsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Toothpast/Toothpastsingl';
import Africaform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/west Africa/Africaform';
import Africalist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/west Africa/Africalist';
import Africaupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/west Africa/Africaupdate';
import Africa from './Components/Pages/Adminside/deparmentbathrom/Tolitires/west Africa/Africa';
import Africasingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/west Africa/Africasingl';
import Deodrant from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Deodrant/Deodrant';
import Deodrantsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Deodrant/Deodrantsingl';
import Deodrantform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Deodrant/Deodrantform';
import Deodrantlist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Deodrant/Deodrantlist';
import Deodrantupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Deodrant/Deodrantupdate';
import Fatherdaysform from './Components/Pages/Adminside/deparmentbathrom/Home decore/Fatherdays/Fatherdaysform';
import Fatherdayslist from './Components/Pages/Adminside/deparmentbathrom/Home decore/Fatherdays/Fatherdayslist';
import Fatherdaysupdate from './Components/Pages/Adminside/deparmentbathrom/Home decore/Fatherdays/Fatherdaysupdate';
import Fatherdays from './Components/Pages/Adminside/deparmentbathrom/Home decore/Fatherdays/Fatherdays';
import Fatherdayssingl from './Components/Pages/Adminside/deparmentbathrom/Home decore/Fatherdays/Fatherdayssingl';
import Framsmirrorform from './Components/Pages/Adminside/deparmentbathrom/Home decore/Frams&mirror/Framsmirrorform';
import Framsmirrorlist from './Components/Pages/Adminside/deparmentbathrom/Home decore/Frams&mirror/Framsmirrorlist';
import Framsmirrorupdate from './Components/Pages/Adminside/deparmentbathrom/Home decore/Frams&mirror/Framsmirrorupdate';
import Framsmirror from './Components/Pages/Adminside/deparmentbathrom/Home decore/Frams&mirror/Framsmirror';
import Framsmirrorsingl from './Components/Pages/Adminside/deparmentbathrom/Home decore/Frams&mirror/Framsmirrorsingl';
import Giftwarehomeform from './Components/Pages/Adminside/deparmentbathrom/Home decore/Giftwarehome/Giftwarehomeform';
import Giftwarehomelist from './Components/Pages/Adminside/deparmentbathrom/Home decore/Giftwarehome/Giftwarehomelist';
import Giftwarehomeupdate from './Components/Pages/Adminside/deparmentbathrom/Home decore/Giftwarehome/Giftwarehomeupdate';
import Giftwarehome from './Components/Pages/Adminside/deparmentbathrom/Home decore/Giftwarehome/Giftwarehome';
import Giftwarehomesingl from './Components/Pages/Adminside/deparmentbathrom/Home decore/Giftwarehome/Giftwarehomesingl';
import Incense from './Components/Pages/Adminside/deparmentbathrom/Home decore/Incense/Incense';
import Incensesingl from './Components/Pages/Adminside/deparmentbathrom/Home decore/Incense/Incensesingl';
import Incenseform from './Components/Pages/Adminside/deparmentbathrom/Home decore/Incense/Incenseform';
import Incenselist from './Components/Pages/Adminside/deparmentbathrom/Home decore/Incense/Incenselist';
import Incenseupdate from './Components/Pages/Adminside/deparmentbathrom/Home decore/Incense/Incenseupdate';
import Memorials from './Components/Pages/Adminside/deparmentbathrom/Home decore/Memorials/Memorials';
import Memorialssingl from './Components/Pages/Adminside/deparmentbathrom/Home decore/Memorials/Memorialssingl';
import Memorialsform from './Components/Pages/Adminside/deparmentbathrom/Home decore/Memorials/Memorialsform';
import Memorialslist from './Components/Pages/Adminside/deparmentbathrom/Home decore/Memorials/Memorialslist';
import Memorialsupdate from './Components/Pages/Adminside/deparmentbathrom/Home decore/Memorials/Memorialsupdate';
// Admin Layout without Navbar
const AdminLayout = ({ children }) => (
  <>
  <Adminnavbar/>
  <div>{children}</div>
  </>
);

// Main Layout with Navbar
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);

const App = () => {
  return (
    <>
     <CartProvider>
      <Routes>
        {/* Admin Routes */}
        <Route element={<ProtectedRoutes/>}>
        <Route path='/adminpanal' element={<AdminLayout><Adminside /></AdminLayout>} />
        <Route path='/adminsunday' element={<AdminLayout><Form /></AdminLayout>} />
        <Route path='/list' element={<AdminLayout><Listofproducts/></AdminLayout>} />
        <Route path='/list/:id' element={<AdminLayout><Update /></AdminLayout>} />
        <Route path='/pallet' element={<AdminLayout><Form1 /></AdminLayout>} />
        <Route path='/listpal' element={<AdminLayout><Listofpallet/></AdminLayout>} />
        <Route path='/listpal/:id' element={<AdminLayout><Updatepallet /></AdminLayout>} />
        <Route path='/newarrivals' element={<AdminLayout><NewForm /></AdminLayout>} />
        <Route path='/listarr' element={<AdminLayout><Listofnewarrivals/></AdminLayout>} />
        <Route path='/listarr/:id' element={<AdminLayout><Newupdate /></AdminLayout>} />
        <Route path='/foodform' element={<AdminLayout><FoodForm /></AdminLayout>} />
        <Route path='/listfood' element={<AdminLayout><Listoffoods/></AdminLayout>} />
        <Route path='/listfood/:id' element={<AdminLayout><Updatefoods /></AdminLayout>} />
        <Route path='/drinkform' element={<AdminLayout><Drinkform /></AdminLayout>} />
        <Route path='/listdrink' element={<AdminLayout><Listofdrink/></AdminLayout>} />
        <Route path='/listdrink/:id' element={<AdminLayout><Updatedrink /></AdminLayout>} />
        <Route path='/lighterform' element={<AdminLayout><Lighterform /></AdminLayout>} />
        <Route path='/listlighter' element={<AdminLayout><Listoflighter/></AdminLayout>} />
        <Route path='/listlighter/:id' element={<AdminLayout><Updatelighter /></AdminLayout>} /> 
        <Route path='/electricalform' element={<AdminLayout><Electricalform /></AdminLayout>} />
        <Route path='/listelectric' element={<AdminLayout><Listofelectrical/></AdminLayout>} />
        <Route path='/listelectric/:id' element={<AdminLayout><Updateelectrical /></AdminLayout>} /> 
        <Route path='/essionaform' element={<AdminLayout><Smokingessform /></AdminLayout>} />
        <Route path='/listsmokigess' element={<AdminLayout><Smokingesslist/></AdminLayout>} />
        <Route path='/listsmokigess/:id' element={<AdminLayout><Updatesmokingess /></AdminLayout>} /> 
        <Route path='/bathform' element={<AdminLayout><Bathroomform /></AdminLayout>} />
        <Route path='/listbathrom' element={<AdminLayout><Bathroomlist/></AdminLayout>} />
        <Route path='/listbathrom/:id' element={<AdminLayout><Updatebathroom /></AdminLayout>} /> 
        <Route path='/listcontact' element={<AdminLayout><Contactuser /></AdminLayout>} />

        <Route path='/bathroomform' element={<AdminLayout><Bathroomformde /></AdminLayout>} />
        <Route path='/listbathromde' element={<AdminLayout><Bathroomlistde/></AdminLayout>} />
        <Route path='/listbathromde/:id' element={<AdminLayout><Updatebathroomde /></AdminLayout>} /> 

        <Route path='/mirrorform' element={<AdminLayout><Mirrorform /></AdminLayout>} />
        <Route path='/listmirror' element={<AdminLayout><Mirrorlist/></AdminLayout>} />
        <Route path='/listmirror/:id' element={<AdminLayout><Updatemirror /></AdminLayout>} /> 

        <Route path='/showerform' element={<AdminLayout><Showerform /></AdminLayout>} />
        <Route path='/listshower' element={<AdminLayout><Showerlist/></AdminLayout>} />
        <Route path='/listshower/:id' element={<AdminLayout><Showerupdate /></AdminLayout>} /> 
       
        <Route path='/bathmateform' element={<AdminLayout><Bathmatsform /></AdminLayout>} />
        <Route path='/listbathmate' element={<AdminLayout><Bathmatslist/></AdminLayout>} />
        <Route path='/listbathmate/:id' element={<AdminLayout><Bathmatsupdate /></AdminLayout>} /> 

        <Route path='/bathacessform' element={<AdminLayout><Bathacessroiesform /></AdminLayout>} />
        <Route path='/listbathacess' element={<AdminLayout><Bathacessorieslist/></AdminLayout>} />
        <Route path='/listbathacess/:id' element={<AdminLayout><Bathacessoriesupdate /></AdminLayout>} /> 

        <Route path='/showheadform' element={<AdminLayout><Showheadform /></AdminLayout>} />
        <Route path='/listshowhead' element={<AdminLayout><Showheadlist/></AdminLayout>} />
        <Route path='/listshowhead/:id' element={<AdminLayout><Showheadupdate /></AdminLayout>} /> 

        <Route path='/disposibleform' element={<AdminLayout><Disposibleform /></AdminLayout>} />
        <Route path='/listdisposible' element={<AdminLayout><Disposiblelist/></AdminLayout>} />
        <Route path='/listdisposible/:id' element={<AdminLayout><Disposibleupdate /></AdminLayout>} /> 

        <Route path='/tablewearform' element={<AdminLayout><Tablewearform /></AdminLayout>} />
        <Route path='/listTablewear' element={<AdminLayout><Tablewearlist/></AdminLayout>} />
        <Route path='/listTablewear/:id' element={<AdminLayout><Tablewearupdate /></AdminLayout>} /> 

        <Route path='/airersform' element={<AdminLayout><Airersform /></AdminLayout>} />
        <Route path='/listaiers' element={<AdminLayout><Airerslist/></AdminLayout>} />
        <Route path='/listairers/:id' element={<AdminLayout><Airersupdate /></AdminLayout>} /> 

        <Route path='/ioringform' element={<AdminLayout><Ironingform /></AdminLayout>} />
        <Route path='/listioring' element={<AdminLayout><Ironinglist/></AdminLayout>} />
        <Route path='/listioring/:id' element={<AdminLayout><Ioriningupdate /></AdminLayout>} /> 

        <Route path='/laacessform' element={<AdminLayout><Laacessform /></AdminLayout>} />
        <Route path='/listlaacess' element={<AdminLayout><Laacesslist/></AdminLayout>} />
        <Route path='/listlaacess/:id' element={<AdminLayout><Laacessupdate /></AdminLayout>} /> 

        <Route path='/batteryform' element={<AdminLayout><Batteriesform /></AdminLayout>} />
        <Route path='/listbatteries' element={<AdminLayout><Batterieslist/></AdminLayout>} />
        <Route path='/listbatteries/:id' element={<AdminLayout><Batteriesupdate /></AdminLayout>} /> 

        <Route path='/phoneform' element={<AdminLayout><Phoneform /></AdminLayout>} />
        <Route path='/listphone' element={<AdminLayout><Phonelist/></AdminLayout>} />
        <Route path='/listphone/:id' element={<AdminLayout><Phoneupdate /></AdminLayout>} /> 
        
        <Route path='/obsticalform' element={<AdminLayout><Obticalform /></AdminLayout>} />
        <Route path='/listobstical' element={<AdminLayout><Obsticallist/></AdminLayout>} />
        <Route path='/listobstical/:id' element={<AdminLayout><Obsticalupdate /></AdminLayout>} /> 

        <Route path='/electricdeform' element={<AdminLayout><Electricform /></AdminLayout>} />
        <Route path='/listelectricde' element={<AdminLayout><Electriclist/></AdminLayout>} />
        <Route path='/listelectricde/:id' element={<AdminLayout><Electricupdate /></AdminLayout>} /> 

        <Route path='/firstaidform' element={<AdminLayout><Firstaidform /></AdminLayout>} />
        <Route path='/listfirstaid' element={<AdminLayout><Firstaidlist/></AdminLayout>} />
        <Route path='/listfirstaid/:id' element={<AdminLayout><Firstaidupdate /></AdminLayout>} /> 

        <Route path='/apronsform' element={<AdminLayout><Apronsform /></AdminLayout>} />
        <Route path='/listaprons' element={<AdminLayout><Apronslist/></AdminLayout>} />
        <Route path='/listaprons/:id' element={<AdminLayout><Apronsupdate /></AdminLayout>} /> 

        <Route path='/beddingform' element={<AdminLayout><Beddingform /></AdminLayout>} />
        <Route path='/listbedding' element={<AdminLayout><Beddinglist/></AdminLayout>} />
        <Route path='/listbedding/:id' element={<AdminLayout><Beddingupdate /></AdminLayout>} />

        <Route path='/clothingform' element={<AdminLayout><Clothingform/></AdminLayout>} />
        <Route path='/listclothing' element={<AdminLayout><Clothinglist/></AdminLayout>} />
        <Route path='/listclothing/:id' element={<AdminLayout><Clothingupdate/></AdminLayout>} />

        <Route path='/freshnerform' element={<AdminLayout><Freshnerform/></AdminLayout>} />
        <Route path='/listfreshner' element={<AdminLayout><Freshnerlist/></AdminLayout>} />
        <Route path='/listfreshner/:id' element={<AdminLayout><Freshnerupdate/></AdminLayout>} />
        
        <Route path='/akonobolform' element={<AdminLayout><Akonobolform/></AdminLayout>} />
        <Route path='/listakonobol' element={<AdminLayout><Akonobolist/></AdminLayout>} />
        <Route path='/listakonobol/:id' element={<AdminLayout><Akonobolupdate/></AdminLayout>} />

        <Route path='/clockform' element={<AdminLayout><Clockform/></AdminLayout>} />
        <Route path='/listclock' element={<AdminLayout><Clocklist/></AdminLayout>} />
        <Route path='/listclock/:id' element={<AdminLayout><Clockupdate/></AdminLayout>} />

        <Route path='/cameraform' element={<AdminLayout><Camerasform/></AdminLayout>} />
        <Route path='/listcamera' element={<AdminLayout><Cameraslist/></AdminLayout>} />
        <Route path='/listcamera/:id' element={<AdminLayout><Camerasupdate/></AdminLayout>} />

        <Route path='/digitalform' element={<AdminLayout><Digitalform/></AdminLayout>} />
        <Route path='/listdigital' element={<AdminLayout><Digitallist/></AdminLayout>} />
        <Route path='/listdigital/:id' element={<AdminLayout><Digitalupdate/></AdminLayout>} />

        <Route path='/cookwareform' element={<AdminLayout><Cookwareform/></AdminLayout>} />
        <Route path='/listcookware' element={<AdminLayout><Cookwarelist/></AdminLayout>} />
        <Route path='/listcookware/:id' element={<AdminLayout><Cookwareupdate/></AdminLayout>} />

        <Route path='/crockeryform' element={<AdminLayout><Crockeryform/></AdminLayout>} />
        <Route path='/listcrockery' element={<AdminLayout><Crockerylist/></AdminLayout>} />
        <Route path='/listcrockery/:id' element={<AdminLayout><Crockeryupdate/></AdminLayout>} />

        <Route path='/dinnerform' element={<AdminLayout><Dinnerform/></AdminLayout>} />
        <Route path='/listdinner' element={<AdminLayout><Dinnerlist/></AdminLayout>} />
        <Route path='/listdinner/:id' element={<AdminLayout><Dinnerupload/></AdminLayout>} />

        <Route path='/rentokilform' element={<AdminLayout><Rentokilform/></AdminLayout>} />
        <Route path='/listrentokil' element={<AdminLayout><Rentokillist/></AdminLayout>} />
        <Route path='/listrentokil/:id' element={<AdminLayout><Rntokilupdate/></AdminLayout>} />

        <Route path='/stvform' element={<AdminLayout><Stvform/></AdminLayout>} />
        <Route path='/liststv' element={<AdminLayout><Stvlist/></AdminLayout>} />
        <Route path='/liststv/:id' element={<AdminLayout><Stvupdate/></AdminLayout>} />

        <Route path='/cottonform' element={<AdminLayout><Cottonform/></AdminLayout>} />
        <Route path='/listcotton' element={<AdminLayout><Cottonlist/></AdminLayout>} />
        <Route path='/listcotton/:id' element={<AdminLayout><Cottonupdate/></AdminLayout>} />
        
        <Route path='/babayform' element={<AdminLayout><Babaycareform/></AdminLayout>} />
        <Route path='/listbabay' element={<AdminLayout><Babaylist/></AdminLayout>} />
        <Route path='/listbabay/:id' element={<AdminLayout><Babayupdate/></AdminLayout>} />

        <Route path='/freshnform' element={<AdminLayout><Freshnform/></AdminLayout>} />
        <Route path='/listfreshn' element={<AdminLayout><Freshnlist/></AdminLayout>} />
        <Route path='/listfreshn/:id' element={<AdminLayout><Freshnupdate/></AdminLayout>} />

        <Route path='/carform' element={<AdminLayout><Carform/></AdminLayout>} />
        <Route path='/listcar' element={<AdminLayout><Carlist/></AdminLayout>} />
        <Route path='/listcar/:id' element={<AdminLayout><Carupdate/></AdminLayout>} />

        <Route path='/bleechform' element={<AdminLayout><Bleechform/></AdminLayout>} />
        <Route path='/listbleech' element={<AdminLayout><Bleecklist/></AdminLayout>} />
        <Route path='/listbleech/:id' element={<AdminLayout><Bleeckupdate/></AdminLayout>} />

        <Route path='/bakewareform' element={<AdminLayout><Bakewareform/></AdminLayout>} />
        <Route path='/listbakeware' element={<AdminLayout><Bakewarelist/></AdminLayout>} />
        <Route path='/listbakeware/:id' element={<AdminLayout><Bakewareupdate/></AdminLayout>} />

        <Route path='/barewareform' element={<AdminLayout><Barewearform/></AdminLayout>} />
        <Route path='/listbareware' element={<AdminLayout><Barewearlist/></AdminLayout>} />
        <Route path='/listbareware/:id' element={<AdminLayout><Barewearupdate/></AdminLayout>} />
        
        <Route path='/birdsform' element={<AdminLayout><Birdsform/></AdminLayout>} />
        <Route path='/listbirds' element={<AdminLayout><Birdslist/></AdminLayout>} />
        <Route path='/listbirds/:id' element={<AdminLayout><Birdsupdate/></AdminLayout>} />

        <Route path='/catform' element={<AdminLayout><Catform/></AdminLayout>} />
        <Route path='/listcat' element={<AdminLayout><Catlist/></AdminLayout>} />
        <Route path='/listcat/:id' element={<AdminLayout><Catupdate/></AdminLayout>} />

        <Route path='/babyform' element={<AdminLayout><Babyform/></AdminLayout>} />
        <Route path='/listbaby' element={<AdminLayout><Babylist/></AdminLayout>} />
        <Route path='/listbaby/:id' element={<AdminLayout><Babyupdate/></AdminLayout>} />
        
        <Route path='/kidsstform' element={<AdminLayout><Kidsstoform/></AdminLayout>} />
        <Route path='/listkidssto' element={<AdminLayout><Kidsstolist/></AdminLayout>} />
        <Route path='/listkidssto/:id' element={<AdminLayout><Kisstoupdate/></AdminLayout>} />

        <Route path='/bbqform' element={<AdminLayout><Bbqform/></AdminLayout>} />
        <Route path='/listbbq' element={<AdminLayout><Bbqlist/></AdminLayout>} />
        <Route path='/listbbq/:id' element={<AdminLayout><Bbqupdate/></AdminLayout>} />

        <Route path='/birdform' element={<AdminLayout><Birdcareform/></AdminLayout>} />
        <Route path='/listbird' element={<AdminLayout><Birdlist/></AdminLayout>} />
        <Route path='/listbird/:id' element={<AdminLayout><Birdupdate/></AdminLayout>} />

        <Route path='/baloonform' element={<AdminLayout><Baloonform/></AdminLayout>} />
        <Route path='/listbaloon' element={<AdminLayout><Baloonlist/></AdminLayout>} />
        <Route path='/listbaloon/:id' element={<AdminLayout><Baloonupdate/></AdminLayout>} />

        <Route path='/pumpsform' element={<AdminLayout><Pumpsform/></AdminLayout>} />
        <Route path='/listpumps' element={<AdminLayout><Pumpslist/></AdminLayout>} />
        <Route path='/listpumps/:id' element={<AdminLayout><Pumpsupdate/></AdminLayout>} />
        
        <Route path='/bannerform' element={<AdminLayout><Bannerform/></AdminLayout>} />
        <Route path='/listbanner' element={<AdminLayout><Bannerlist/></AdminLayout>} />
        <Route path='/listbanner/:id' element={<AdminLayout><Bannerupdate/></AdminLayout>} />

        <Route path='/crystalform' element={<AdminLayout><Crystalform/></AdminLayout>} />
        <Route path='/listcrystal' element={<AdminLayout><Crystallist/></AdminLayout>} />
        <Route path='/listcrystal/:id' element={<AdminLayout><Crystalupdate/></AdminLayout>} />

        <Route path='/cakesform' element={<AdminLayout><Cakesform/></AdminLayout>} />
        <Route path='/listcakes' element={<AdminLayout><Cakeslist/></AdminLayout>} />
        <Route path='/listcakes/:id' element={<AdminLayout><Cakesupdate/></AdminLayout>} />

        <Route path='/furnitureform' element={<AdminLayout><Furnitureform/></AdminLayout>} />
        <Route path='/listfurniture' element={<AdminLayout><Furniturelist/></AdminLayout>} />
        <Route path='/listfurniture/:id' element={<AdminLayout><Furnitureupdate/></AdminLayout>} />

        <Route path='/matsform' element={<AdminLayout><Matsform/></AdminLayout>} />
        <Route path='/listmats' element={<AdminLayout><Matslist/></AdminLayout>} />
        <Route path='/listmats/:id' element={<AdminLayout><Matsupdate/></AdminLayout>} />
        
        <Route path='/candelform' element={<AdminLayout><Candelform/></AdminLayout>} />
        <Route path='/listcandel' element={<AdminLayout><Candellist/></AdminLayout>} />
        <Route path='/listcandel/:id' element={<AdminLayout><Candelupdate/></AdminLayout>} />
        
        <Route path='/stform' element={<AdminLayout><STform/></AdminLayout>} />
        <Route path='/listst' element={<AdminLayout><STlist/></AdminLayout>} />
        <Route path='/listst/:id' element={<AdminLayout><Stupdate/></AdminLayout>} />

        <Route path='/foodconform' element={<AdminLayout><Foodconform/></AdminLayout>} />
        <Route path='/listfoodcon' element={<AdminLayout><Foodconlist/></AdminLayout>} />
        <Route path='/listfoodcon/:id' element={<AdminLayout><Foodconupdate/></AdminLayout>} />
        
        <Route path='/kidsplasform' element={<AdminLayout><Kidsplasform/></AdminLayout>} />
        <Route path='/listkidsplas' element={<AdminLayout><Kidsplaslist/></AdminLayout>} />
        <Route path='/listkidsplas/:id' element={<AdminLayout><Kidsplasupdate/></AdminLayout>} />

        <Route path='/coolerform' element={<AdminLayout><Coolerform/></AdminLayout>} />
        <Route path='/listcooler' element={<AdminLayout><Coolerlist/></AdminLayout>} />
        <Route path='/listcooler/:id' element={<AdminLayout><Coolerupdate/></AdminLayout>} />

        <Route path='/flaskform' element={<AdminLayout><Flaskform/></AdminLayout>} />
        <Route path='/listflask' element={<AdminLayout><Flasklist/></AdminLayout>} />
        <Route path='/listflask/:id' element={<AdminLayout><Flaskupdate/></AdminLayout>} />
        
        <Route path='/art&craftform' element={<AdminLayout><Artform/></AdminLayout>} />
        <Route path='/listart&craft' element={<AdminLayout><Artlist/></AdminLayout>} />
        <Route path='/listart&craft/:id' element={<AdminLayout><Artupdate/></AdminLayout>} />
        
        <Route path='/booksform' element={<AdminLayout><Booksform/></AdminLayout>} />
        <Route path='/listbooks' element={<AdminLayout><Bookslist/></AdminLayout>} />
        <Route path='/listbooks/:id' element={<AdminLayout><Booksupdate/></AdminLayout>} />
        
        <Route path='/brushwareform' element={<AdminLayout><Brushwareform/></AdminLayout>} />
        <Route path='/listbrushware' element={<AdminLayout><Brushwarelist/></AdminLayout>} />
        <Route path='/listbrushware/:id' element={<AdminLayout><Brushwareupload/></AdminLayout>} />

        <Route path='/dusterform' element={<AdminLayout><Dusterform/></AdminLayout>} />
        <Route path='/listduster' element={<AdminLayout><Dusterlist/></AdminLayout>} />
        <Route path='/listduster/:id' element={<AdminLayout><Dusterupdate/></AdminLayout>} />
        
        <Route path='/artificalform' element={<AdminLayout><Artificalform/></AdminLayout>} />
        <Route path='/listartifical' element={<AdminLayout><Artificallist/></AdminLayout>} />
        <Route path='/listartifical/:id' element={<AdminLayout><Artificalupdate/></AdminLayout>} />
        
        <Route path='/bouquetform' element={<AdminLayout><Bouquetform/></AdminLayout>} />
        <Route path='/listbouquet' element={<AdminLayout><Bouquetlist/></AdminLayout>} />
        <Route path='/listbouquet/:id' element={<AdminLayout><Bouquetupdate/></AdminLayout>} />

        <Route path='/diytoolsform' element={<AdminLayout><Diytoolsform/></AdminLayout>} />
        <Route path='/listdiytools' element={<AdminLayout><Diytoolslist/></AdminLayout>} />
        <Route path='/listdiytools/:id' element={<AdminLayout><Diytoolsupdate/></AdminLayout>} />
        
        <Route path='/disposiblepoform' element={<AdminLayout><Disposibleformpo/></AdminLayout>} />
        <Route path='/listdisposiblepo' element={<AdminLayout><Disposiblelistpo/></AdminLayout>} />
        <Route path='/listdisposiblepo/:id' element={<AdminLayout><Disposibleupdatepo/></AdminLayout>} />
        
        <Route path='/craftpoform' element={<AdminLayout><Craftform/></AdminLayout>} />
        <Route path='/listcraftpo' element={<AdminLayout><Craftlist/></AdminLayout>} />
        <Route path='/listcraftpo/:id' element={<AdminLayout><Craftupdate/></AdminLayout>} />
         
        <Route path='/carpoform' element={<AdminLayout><Carpoform/></AdminLayout>} />
        <Route path='/listcarpo' element={<AdminLayout><Carpolist/></AdminLayout>} />
        <Route path='/listcarpo/:id' element={<AdminLayout><Carpoupdate/></AdminLayout>} />
        
        <Route path='/candelsform' element={<AdminLayout><Candelesform/></AdminLayout>} />
        <Route path='/listcandels' element={<AdminLayout><Candeleslist/></AdminLayout>} />
        <Route path='/listcandels/:id' element={<AdminLayout><Candelesupdate/></AdminLayout>} />
        
        <Route path='/foodpoundform' element={<AdminLayout><Foodpoform/></AdminLayout>} />
        <Route path='/listfoodpound' element={<AdminLayout><Foodpolist/></AdminLayout>} />
        <Route path='/listfoodpound/:id' element={<AdminLayout><Foodpoupdate/></AdminLayout>} />
        
        <Route path='/shoecareform' element={<AdminLayout><Shoeform/></AdminLayout>} />
        <Route path='/listshoecar' element={<AdminLayout><Shoelist/></AdminLayout>} />
        <Route path='/listshoecar/:id' element={<AdminLayout><Shoeupdate/></AdminLayout>} />

        <Route path='/stationeryform' element={<AdminLayout><Stationeryform/></AdminLayout>} />
        <Route path='/liststationery' element={<AdminLayout><Stationerylist/></AdminLayout>} />
        <Route path='/liststationery/:id' element={<AdminLayout><Stationeryupdate/></AdminLayout>} />

        <Route path='/potoyform' element={<AdminLayout><Potoyform/></AdminLayout>} />
        <Route path='/listpotoy' element={<AdminLayout><Potoylist/></AdminLayout>} />
        <Route path='/listpotoy/:id' element={<AdminLayout><Potoyupdate/></AdminLayout>} />
        
        <Route path='/pestconform' element={<AdminLayout><Pestconform/></AdminLayout>} />
        <Route path='/listpestcon' element={<AdminLayout><Pestconlist/></AdminLayout>} />
        <Route path='/listpestcon/:id' element={<AdminLayout><Pstconupdate/></AdminLayout>} />
        
        <Route path='/lightergasform' element={<AdminLayout><Lightergasform/></AdminLayout>} />
        <Route path='/listlightergas' element={<AdminLayout><Lightergaslist/></AdminLayout>} />
        <Route path='/listlightergas/:id' element={<AdminLayout><Lightergasupdate/></AdminLayout>} />

        <Route path='/loundryironform' element={<AdminLayout><Loundryirform/></AdminLayout>} />
        <Route path='/listloundryiron' element={<AdminLayout><Loundryirlist/></AdminLayout>} />
        <Route path='/listloundryiron/:id' element={<AdminLayout><Loundryirupdate/></AdminLayout>} />
       
        <Route path='/kitchenwearpoundform' element={<AdminLayout><Kitchenwarepoform/></AdminLayout>}/>
        <Route path='/listkitchenwearpound' element={<AdminLayout><Kitchenwarepolist/></AdminLayout>}/>
        <Route path='/listkitchenwearpound/:id' element={<AdminLayout><Kitchenwarepoupdate/></AdminLayout>}/>

        <Route path='/hoiserypoundform' element={<AdminLayout><Hosieryform/></AdminLayout>}/>
        <Route path='/listhoiserypound' element={<AdminLayout><Hosierylist/></AdminLayout>}/>
        <Route path='/listhoiserypound/:id' element={<AdminLayout><Hosieryupdate/></AdminLayout>}/>
        
        <Route path='/householdclpoundform' element={<AdminLayout><Householdclform/></AdminLayout>}/>
        <Route path='/listhouseholdclpound' element={<AdminLayout><Householdcllist/></AdminLayout>}/>
        <Route path='/listhouseholdclpound/:id' element={<AdminLayout><Householdclupdate/></AdminLayout>}/>
        
        <Route path='/householdprform' element={<AdminLayout><Househldprform/></AdminLayout>}/>
        <Route path='/listhouseholdpr' element={<AdminLayout><Househldprlist/></AdminLayout>}/>
        <Route path='/listhouseholdpr/:id' element={<AdminLayout><Househldprupdate/></AdminLayout>}/>
        
        <Route path='/readingform' element={<AdminLayout><Readingform/></AdminLayout>}/>
        <Route path='/listreading' element={<AdminLayout><Readinglist/></AdminLayout>}/>
        <Route path='/listreading/:id' element={<AdminLayout><Readingupdate/></AdminLayout>}/>
        
        <Route path='/glovesform' element={<AdminLayout><Glovesform/></AdminLayout>}/>
        <Route path='/listgloves' element={<AdminLayout><Gloveslist/></AdminLayout>}/>
        <Route path='/listgloves/:id' element={<AdminLayout><Glovesupdate/></AdminLayout>}/>
        
        <Route path='/mopsform' element={<AdminLayout><Mopsform/></AdminLayout>}/>
        <Route path='/listmops' element={<AdminLayout><Mopslist/></AdminLayout>}/>
        <Route path='/listmops/:id' element={<AdminLayout><Mopsupdate/></AdminLayout>}/>
        
        <Route path='/spongeform' element={<AdminLayout><Sponeform/></AdminLayout>}/>
        <Route path='/listsponge' element={<AdminLayout><Spongelist/></AdminLayout>}/>
        <Route path='/listsponge/:id' element={<AdminLayout><Spongeupdate/></AdminLayout>}/>
        
        <Route path='/barrettineform' element={<AdminLayout><Barrettineform/></AdminLayout>}/>
        <Route path='/listbarrettine' element={<AdminLayout><Barrettinelist/></AdminLayout>}/>
        <Route path='/listbarrettine/:id' element={<AdminLayout><Barrettineupdate/></AdminLayout>}/>
        
        <Route path='/bartolinform' element={<AdminLayout><Bartolinform/></AdminLayout>}/>
        <Route path='/listbartolin' element={<AdminLayout><Bartolinlist/></AdminLayout>}/>
        <Route path='/listbartolin/:id' element={<AdminLayout><Bartolinupdate/></AdminLayout>}/>
        
        <Route path='/birdbrandform' element={<AdminLayout><Birdbrandform/></AdminLayout>}/>
        <Route path='/listbirdbrand' element={<AdminLayout><Birdbrandlist/></AdminLayout>}/>
        <Route path='/listbirdbrand/:id' element={<AdminLayout><Birdbrandupdate/></AdminLayout>}/>
        
        <Route path='/blackform' element={<AdminLayout><Blackform/></AdminLayout>}/>
        <Route path='/listblack' element={<AdminLayout><Blacklist/></AdminLayout>}/>
        <Route path='/listblack/:id' element={<AdminLayout><Blackupdate/></AdminLayout>}/>
        
        <Route path='/bonitform' element={<AdminLayout><Bonitform/></AdminLayout>}/>
        <Route path='/listbonit' element={<AdminLayout><Bonitlist/></AdminLayout>}/>
        <Route path='/listbonit/:id' element={<AdminLayout><Bonitupdate/></AdminLayout>}/>
        
        <Route path='/bagslform' element={<AdminLayout><Bagsform/></AdminLayout>}/>
        <Route path='/listbagsl' element={<AdminLayout><Bagslist/></AdminLayout>}/>
        <Route path='/listbagsl/:id' element={<AdminLayout><Bagsupdate/></AdminLayout>}/>
         
        <Route path='/bascketstform' element={<AdminLayout><Basketstform/></AdminLayout>}/>
        <Route path='/listbascketst' element={<AdminLayout><Basketstlist/></AdminLayout>}/>
        <Route path='/listbascketst/:id' element={<AdminLayout><Basketstupdate/></AdminLayout>}/>

        <Route path='/luggageform' element={<AdminLayout><Luggageform/></AdminLayout>}/>
        <Route path='/listluggage' element={<AdminLayout><Luggagelist/></AdminLayout>}/>
        <Route path='/listluggage/:id' element={<AdminLayout><Luggageupdate/></AdminLayout>}/>
        
        <Route path='/bostikform' element={<AdminLayout><Bostikform/></AdminLayout>}/>
        <Route path='/listbostik' element={<AdminLayout><Bostiklist/></AdminLayout>}/>
        <Route path='/listbostik/:id' element={<AdminLayout><Bostikupdate/></AdminLayout>}/>
        
        <Route path='/briwaxform' element={<AdminLayout><Briwaxform/></AdminLayout>}/>
        <Route path='/listbriwax' element={<AdminLayout><Briwaxlist/></AdminLayout>}/>
        <Route path='/listbriwax/:id' element={<AdminLayout><Briwaxupdate/></AdminLayout>}/>

        <Route path='/brookform' element={<AdminLayout><Brookform/></AdminLayout>}/>
        <Route path='/listbrook' element={<AdminLayout><Brooklist/></AdminLayout>}/>
        <Route path='/listbrook/:id' element={<AdminLayout><Brookupdate/></AdminLayout>}/>

        <Route path='/carproductform' element={<AdminLayout><Carproform/></AdminLayout>}/>
        <Route path='/listcarproduct' element={<AdminLayout><Carprolist/></AdminLayout>}/>
        <Route path='/listcarproduct/:id' element={<AdminLayout><Carproupdate/></AdminLayout>}/>

        <Route path='/carplanform' element={<AdminLayout><Carplanform/></AdminLayout>}/>
        <Route path='/listcarplan' element={<AdminLayout><Carplanlist/></AdminLayout>}/>
        <Route path='/listcarplan/:id' element={<AdminLayout><Carplanupdate/></AdminLayout>}/>
        
        <Route path='/chamoisform' element={<AdminLayout><Chamoisform/></AdminLayout>}/>
        <Route path='/listchamois' element={<AdminLayout><Chamoislist/></AdminLayout>}/>
        <Route path='/listchamois/:id' element={<AdminLayout><Chamoisupdate/></AdminLayout>}/>
        
        <Route path='/commandform' element={<AdminLayout><Commandform/></AdminLayout>}/>
        <Route path='/listcommand' element={<AdminLayout><Commandlist/></AdminLayout>}/>
        <Route path='/listcommand/:id' element={<AdminLayout><Commandupdate/></AdminLayout>}/>
        
        <Route path='/coralform' element={<AdminLayout><Coralform/></AdminLayout>}/>
        <Route path='/listcoral' element={<AdminLayout><Corallist/></AdminLayout>}/>
        <Route path='/listcoral/:id' element={<AdminLayout><Coralupdate/></AdminLayout>}/>
        
        <Route path='/crownform' element={<AdminLayout><Crownform/></AdminLayout>}/>
        <Route path='/listcrown' element={<AdminLayout><Crownlist/></AdminLayout>}/>
        <Route path='/listcrown/:id' element={<AdminLayout><Crownupdate/></AdminLayout>}/>
        
        <Route path='/dektonform' element={<AdminLayout><Dektonform/></AdminLayout>}/>
        <Route path='/listdekton' element={<AdminLayout><Dektonlist/></AdminLayout>}/>
        <Route path='/listdekton/:id' element={<AdminLayout><Dektonupdate/></AdminLayout>}/>
         
        <Route path='/demsumform' element={<AdminLayout><Demsumform/></AdminLayout>}/>
        <Route path='/listdemsum' element={<AdminLayout><Demsumlist/></AdminLayout>}/>
        <Route path='/listdemsum/:id' element={<AdminLayout><Demsumupdate/></AdminLayout>}/>

        <Route path='/darperform' element={<AdminLayout><Darperform/></AdminLayout>}/>
        <Route path='/listdarper' element={<AdminLayout><Darperlist/></AdminLayout>}/>
        <Route path='/listdarper/:id' element={<AdminLayout><Darperupdate/></AdminLayout>}/>
        
        <Route path='/edcoform' element={<AdminLayout><Edcoform/></AdminLayout>}/>
        <Route path='/listedco' element={<AdminLayout><Edcolist/></AdminLayout>}/>
        <Route path='/listedco/:id' element={<AdminLayout><Edcoupdate/></AdminLayout>}/>
        
        <Route path='/everform' element={<AdminLayout><Everform/></AdminLayout>}/>
        <Route path='/listever' element={<AdminLayout><Everlist/></AdminLayout>}/>
        <Route path='/listever/:id' element={<AdminLayout><Everupdate/></AdminLayout>}/>
        
        <Route path='/exitexform' element={<AdminLayout><Exitexform/></AdminLayout>}/>
        <Route path='/listexitex' element={<AdminLayout><Exitexlist/></AdminLayout>}/>
        <Route path='/listexitex/:id' element={<AdminLayout><Exitexupdate/></AdminLayout>}/>
        
        <Route path='/fitform' element={<AdminLayout><Fitforform/></AdminLayout>}/>
        <Route path='/listfit' element={<AdminLayout><Fitforlist/></AdminLayout>}/>
        <Route path='/listfit/:id' element={<AdminLayout><Fitupdate/></AdminLayout>}/>
        
        <Route path='/globalform' element={<AdminLayout><Globalform/></AdminLayout>}/>
        <Route path='/listglobal' element={<AdminLayout><Globallist/></AdminLayout>}/>
        <Route path='/listglobal/:id' element={<AdminLayout><Globalupdate/></AdminLayout>}/>
        
        <Route path='/gasform' element={<AdminLayout><Gasgoform/></AdminLayout>}/>
        <Route path='/listgas' element={<AdminLayout><Gasgolist/></AdminLayout>}/>
        <Route path='/listgas/:id' element={<AdminLayout><Gasgoupdate/></AdminLayout>}/>
        
        <Route path='/goriaform' element={<AdminLayout><Gorilaform/></AdminLayout>}/>
        <Route path='/listgorila' element={<AdminLayout><Gorilalist/></AdminLayout>}/>
        <Route path='/listgorila/:id' element={<AdminLayout><Gorilaupdate/></AdminLayout>}/>
        
        <Route path='/hagsenform' element={<AdminLayout><Hagesanform/></AdminLayout>}/>
        <Route path='/listhagsen' element={<AdminLayout><Hagesanlist/></AdminLayout>}/>
        <Route path='/listhagsen/:id' element={<AdminLayout><Hagesanupdate/></AdminLayout>}/>
        
        <Route path='/hardwareform' element={<AdminLayout><Hardwaretoolsform/></AdminLayout>}/>
        <Route path='/listhardware' element={<AdminLayout><Hardwaretoolslist/></AdminLayout>}/>
        <Route path='/listhardware/:id' element={<AdminLayout><Hardwaretoolsupdate/></AdminLayout>}/>
        
        <Route path='/harrisform' element={<AdminLayout><Harrisform/></AdminLayout>}/>
        <Route path='/listharris' element={<AdminLayout><Harrislist/></AdminLayout>}/>
        <Route path='/listharris/:id' element={<AdminLayout><Harrisupdate/></AdminLayout>}/>
        
        <Route path='/hilkaform' element={<AdminLayout><Hilkaform/></AdminLayout>}/>
        <Route path='/listhilka' element={<AdminLayout><Hilkalist/></AdminLayout>}/>
        <Route path='/listhilka/:id' element={<AdminLayout><Hilkaupdate/></AdminLayout>}/>
          
        <Route path='/humnrolform' element={<AdminLayout><Humnrolform/></AdminLayout>}/>
        <Route path='/listhumnrol' element={<AdminLayout><Humnrollist/></AdminLayout>}/>
        <Route path='/listhumnrol/:id' element={<AdminLayout><Humnrolupdate/></AdminLayout>}/>
            
        <Route path='/jbwelform' element={<AdminLayout><Jbweldform/></AdminLayout>}/>
        <Route path='/listjbwel' element={<AdminLayout><Jbweldlist/></AdminLayout>}/>
        <Route path='/listjbwel/:id' element={<AdminLayout><Jbweldupdate/></AdminLayout>}/>
            
        <Route path='/kilrockform' element={<AdminLayout><Kilrokform/></AdminLayout>}/>
        <Route path='/listkilrock' element={<AdminLayout><Kilroklist/></AdminLayout>}/>
        <Route path='/listkilrock/:id' element={<AdminLayout><Kilrokupdate/></AdminLayout>}/>
            
        <Route path='/ladderform' element={<AdminLayout><Ladderform/></AdminLayout>}/>
        <Route path='/listladder' element={<AdminLayout><Ladderlist/></AdminLayout>}/>
        <Route path='/listladder/:id' element={<AdminLayout><Ladderupdate/></AdminLayout>}/>
         
        <Route path='/locktileform' element={<AdminLayout><Locktileform/></AdminLayout>}/>
        <Route path='/listlocktile' element={<AdminLayout><Locktilelist/></AdminLayout>}/>
        <Route path='/listlocktile/:id' element={<AdminLayout><Locktileupdate/></AdminLayout>}/>
          
        <Route path='/lynwoodform' element={<AdminLayout><Lynwoodform/></AdminLayout>}/>
        <Route path='/listlynwood' element={<AdminLayout><Lynwoodlist/></AdminLayout>}/>
        <Route path='/listlynwood/:id' element={<AdminLayout><Lynwoodupdate/></AdminLayout>}/>
           
        <Route path='/miscform' element={<AdminLayout><Miscform/></AdminLayout>}/>
        <Route path='/listmisc' element={<AdminLayout><Misclist/></AdminLayout>}/>
        <Route path='/listmisc/:id' element={<AdminLayout><Miscupdate/></AdminLayout>}/>
          
        <Route path='/oxfordform' element={<AdminLayout><Oxfordform/></AdminLayout>}/>
        <Route path='/listoxford' element={<AdminLayout><Oxfordlist/></AdminLayout>}/>
        <Route path='/listoxford/:id' element={<AdminLayout><Oxfordupdtae/></AdminLayout>}/>
           
        <Route path='/pestcoform' element={<AdminLayout><Pestcoform/></AdminLayout>}/>
        <Route path='/listpestco' element={<AdminLayout><Pestcolist/></AdminLayout>}/>
        <Route path='/listpestco/:id' element={<AdminLayout><Pestcoupdtae/></AdminLayout>}/> 
            
        <Route path='/plasplugform' element={<AdminLayout><Plasplugform/></AdminLayout>}/>
        <Route path='/listplasplug' element={<AdminLayout><Plaspluglist/></AdminLayout>}/>
        <Route path='/listplasplug/:id' element={<AdminLayout><Plasplugupdtae/></AdminLayout>}/>
         
        <Route path='/primacarform' element={<AdminLayout><Primacarform/></AdminLayout>}/>
        <Route path='/listprimacar' element={<AdminLayout><Primacarlist/></AdminLayout>}/>
        <Route path='/listprimacar/:id' element={<AdminLayout><Primacarupdtae/></AdminLayout>}/>
         
        <Route path='/rolsonform' element={<AdminLayout><Rolsonform/></AdminLayout>}/>
        <Route path='/listrolson' element={<AdminLayout><Rolsonlist/></AdminLayout>}/>
        <Route path='/listrolson/:id' element={<AdminLayout><Rolsonupdtae/></AdminLayout>}/>
        
        <Route path='/ronsealform' element={<AdminLayout><Ronsealform/></AdminLayout>}/>
        <Route path='/listronseal' element={<AdminLayout><Ronseallist/></AdminLayout>}/>
        <Route path='/listronseal/:id' element={<AdminLayout><Ronsealupdtae/></AdminLayout>}/>
        
        <Route path='/rustinsform' element={<AdminLayout><Rustinsltdform/></AdminLayout>}/>
        <Route path='/listrustins' element={<AdminLayout><Rustinsltdlist/></AdminLayout>}/>
        <Route path='/listrustins/:id' element={<AdminLayout><Rustinsltdupdtae/></AdminLayout>}/>
        
        <Route path='/secureitform' element={<AdminLayout><Secureitform/></AdminLayout>}/>
        <Route path='/listsecureit' element={<AdminLayout><Secureitlist/></AdminLayout>}/>
        <Route path='/listsecureit/:id' element={<AdminLayout><Secureitupdtae/></AdminLayout>}/> 

        <Route path='/secrupform' element={<AdminLayout><Secrupform/></AdminLayout>}/>
        <Route path='/listsecrup' element={<AdminLayout><Secruplist/></AdminLayout>}/>
        <Route path='/listsecrup/:id' element={<AdminLayout><Secrupupdtae/></AdminLayout>}/> 
        
        <Route path='/shortageform' element={<AdminLayout><Shortageform/></AdminLayout>}/>
        <Route path='/listshortage' element={<AdminLayout><Shortagelist/></AdminLayout>}/>
        <Route path='/listshortage/:id' element={<AdminLayout><Shortageupdtae/></AdminLayout>}/> 
        
        <Route path='/soudalform' element={<AdminLayout><Soudalform/></AdminLayout>}/>
        <Route path='/listsoudal' element={<AdminLayout><Soudallist/></AdminLayout>}/>
        <Route path='/listsoudal/:id' element={<AdminLayout><Soudalupdtae/></AdminLayout>}/>
        
        <Route path='/starpakform' element={<AdminLayout><Starpackform/></AdminLayout>}/>
        <Route path='/liststarpak' element={<AdminLayout><Starpacklist/></AdminLayout>}/>
        <Route path='/liststarpak/:id' element={<AdminLayout><Starpackupdtae/></AdminLayout>}/>
        
        <Route path='/sterlingform' element={<AdminLayout><Sterlingform/></AdminLayout>}/>
        <Route path='/liststerling' element={<AdminLayout><Sterlinglist/></AdminLayout>}/>
        <Route path='/liststerling/:id' element={<AdminLayout><Sterlingupdtae/></AdminLayout>}/>
        
        <Route path='/tableaueform' element={<AdminLayout><Tableaueform/></AdminLayout>}/>
        <Route path='/listtableaue' element={<AdminLayout><Tableauelist/></AdminLayout>}/>
        <Route path='/listtableaue/:id' element={<AdminLayout><Tableaueupdtae/></AdminLayout>}/>
        
        <Route path='/tricycleform' element={<AdminLayout><Tricycleform/></AdminLayout>}/>
        <Route path='/listtricycle' element={<AdminLayout><Tricyclelist/></AdminLayout>}/>
        <Route path='/listtricycle/:id' element={<AdminLayout><Tricycleupdtae/></AdminLayout>}/>
        
        <Route path='/ultratrapform' element={<AdminLayout><Ultratrapeform/></AdminLayout>}/>
        <Route path='/listultratrap' element={<AdminLayout><Ultratrapelist/></AdminLayout>}/>
        <Route path='/listultratrap/:id' element={<AdminLayout><Ultratrapeupdtae/></AdminLayout>}/>

        <Route path='/vacuumform' element={<AdminLayout><Vacuumform/></AdminLayout>}/>
        <Route path='/listvacuum' element={<AdminLayout><Vacuumlist/></AdminLayout>}/>
        <Route path='/listvacuum/:id' element={<AdminLayout><Vacuumupdtae/></AdminLayout>}/>

        <Route path='/velcroform' element={<AdminLayout><Velcroform/></AdminLayout>}/>
        <Route path='/listvelcro' element={<AdminLayout><Velcrolist/></AdminLayout>}/>
        <Route path='/listvelcro/:id' element={<AdminLayout><Velcroupdtae/></AdminLayout>}/>

        <Route path='/vfmpaintform' element={<AdminLayout><VfmPaintsform/></AdminLayout>}/>
        <Route path='/listvfmpaint' element={<AdminLayout><VfmPaintslist/></AdminLayout>}/>
        <Route path='/listvfmpaint/:id' element={<AdminLayout><VfmPaintsupdtae/></AdminLayout>}/>

        <Route path='/wd40form' element={<AdminLayout><Wd40form/></AdminLayout>}/>
        <Route path='/listwd40' element={<AdminLayout><Wd40list/></AdminLayout>}/>
        <Route path='/listwd40/:id' element={<AdminLayout><Wd40updtae/></AdminLayout>}/>

        <Route path='/wernerform' element={<AdminLayout><Wernerform/></AdminLayout>}/>
        <Route path='/listwerner' element={<AdminLayout><Wernerlist/></AdminLayout>}/>
        <Route path='/listwerner/:id' element={<AdminLayout><Wernerupdtae/></AdminLayout>}/>
        
        <Route path='/yelelockform' element={<AdminLayout><Yelelockform/></AdminLayout>}/>
        <Route path='/listyelelock' element={<AdminLayout><Yelelocklist/></AdminLayout>}/>
        <Route path='/listyelelock/:id' element={<AdminLayout><Yelelockupdtae/></AdminLayout>}/>
        
        <Route path='/uniconform' element={<AdminLayout><Uniconform/></AdminLayout>}/>
        <Route path='/listunicon' element={<AdminLayout><Uniconlist/></AdminLayout>}/>
        <Route path='/listunicon/:id' element={<AdminLayout><Uniconupdtae/></AdminLayout>}/>
        
        <Route path='/amtechform' element={<AdminLayout><Amtechform/></AdminLayout>}/>
        <Route path='/listamtech' element={<AdminLayout><Amtechlist/></AdminLayout>}/>
        <Route path='/listamtech/:id' element={<AdminLayout><Amtechupdate/></AdminLayout>}/>
        
        <Route path='/antiquxform' element={<AdminLayout><Antiquxform/></AdminLayout>}/>
        <Route path='/listantiqux' element={<AdminLayout><Antiquxlist/></AdminLayout>}/>
        <Route path='/listantiqux/:id' element={<AdminLayout><Antiquxupdate/></AdminLayout>}/>
         
        <Route path='/chromform' element={<AdminLayout><Chromeform/></AdminLayout>}/>
        <Route path='/listchrom' element={<AdminLayout><Chromelist/></AdminLayout>}/>
        <Route path='/listchrom/:id' element={<AdminLayout><Chromeupdate/></AdminLayout>}/>
        
        <Route path='/cookwarform' element={<AdminLayout><Cookwarform/></AdminLayout>}/>
        <Route path='/listcookwar' element={<AdminLayout><Cookwarlist/></AdminLayout>}/>
        <Route path='/listcookwar/:id' element={<AdminLayout><Cookwarupdate/></AdminLayout>}/>
        
        <Route path='/kettlesform' element={<AdminLayout><Kettlesform/></AdminLayout>}/>
        <Route path='/listkettles' element={<AdminLayout><Kettleslist/></AdminLayout>}/>
        <Route path='/listkettles/:id' element={<AdminLayout><Kettlesupdate/></AdminLayout>}/>
        
        <Route path='/culteryform' element={<AdminLayout><Cutleryform/></AdminLayout>}/>
        <Route path='/listcultery' element={<AdminLayout><Cutlerylist/></AdminLayout>}/>
        <Route path='/listcultery/:id' element={<AdminLayout><Cutleryupdate/></AdminLayout>}/>
        
        <Route path='/kitechenaccform' element={<AdminLayout><KitchenACCform/></AdminLayout>}/>
        <Route path='/listkitechenacc' element={<AdminLayout><KitchenACClist/></AdminLayout>}/>
        <Route path='/listkitechenacc/:id' element={<AdminLayout><KitchenACCupdate/></AdminLayout>}/> 
        
        <Route path='/kitechenbinform' element={<AdminLayout><Kitechenbinform/></AdminLayout>}/>
        <Route path='/listkitechenbin' element={<AdminLayout><Kitechenbinlist/></AdminLayout>}/>
        <Route path='/listkitechenbin/:id' element={<AdminLayout><Kitechenbinupdate/></AdminLayout>}/> 
        
        <Route path='/Kitechengaform' element={<AdminLayout><Kitechengaform/></AdminLayout>}/>
        <Route path='/listKitechenga' element={<AdminLayout><Kitechengalist/></AdminLayout>}/>
        <Route path='/listKitechenga/:id' element={<AdminLayout><Kitechengaupdate/></AdminLayout>}/>  
        
        <Route path='/kitechenkniform' element={<AdminLayout><KitechenKniform/></AdminLayout>}/>
        <Route path='/listkitechenkni' element={<AdminLayout><KitechenKnilist/></AdminLayout>}/>
        <Route path='/listkitechenkni/:id' element={<AdminLayout><KitechenKniupdate/></AdminLayout>}/>  
        
        <Route path='/scalekitechenform' element={<AdminLayout><Scaleskiform/></AdminLayout>}/>
        <Route path='/listscalekitechen' element={<AdminLayout><Scaleskilist/></AdminLayout>}/>
        <Route path='/listscalekitechen/:id' element={<AdminLayout><Scaleskiupdate/></AdminLayout>}/>  
        
        <Route path='/plastickitechenform' element={<AdminLayout><Plastickiform/></AdminLayout>}/>
        <Route path='/listplastickitechen' element={<AdminLayout><Plastickilist/></AdminLayout>}/>
        <Route path='/listplastickitechen/:id' element={<AdminLayout><Plastickiupdate/></AdminLayout>}/>  
        
        <Route path='/simplehumanform' element={<AdminLayout><Simplehuform/></AdminLayout>}/>
        <Route path='/listsimplehuman' element={<AdminLayout><Simplehulist/></AdminLayout>}/>
        <Route path='/listsimplehuman/:id' element={<AdminLayout><Simplehuupdate/></AdminLayout>}/>  
        
        <Route path='/breadform' element={<AdminLayout><Breadform/></AdminLayout>}/>
        <Route path='/listbread' element={<AdminLayout><Breadlist/></AdminLayout>}/>
        <Route path='/listbread/:id' element={<AdminLayout><Breadupdate/></AdminLayout>}/>  
        
        <Route path='/teaform' element={<AdminLayout><Teaform/></AdminLayout>}/>
        <Route path='/listtea' element={<AdminLayout><Tealist/></AdminLayout>}/>
        <Route path='/listtea/:id' element={<AdminLayout><Teaupdate/></AdminLayout>}/> 
          
        <Route path='/trayform' element={<AdminLayout><Traysform/></AdminLayout>}/>
        <Route path='/listtray' element={<AdminLayout><Trayslist/></AdminLayout>}/>
        <Route path='/listtray/:id' element={<AdminLayout><Traysupdate/></AdminLayout>}/> 
        
        <Route path='/waterform' element={<AdminLayout><Waterform/></AdminLayout>}/>
        <Route path='/listwater' element={<AdminLayout><Waterlist/></AdminLayout>}/>
        <Route path='/listwater/:id' element={<AdminLayout><Waterupdate/></AdminLayout>}/> 
        
        <Route path='/woodenform' element={<AdminLayout><Woodenform/></AdminLayout>}/>
        <Route path='/listwooden' element={<AdminLayout><Woodenlist/></AdminLayout>}/>
        <Route path='/listwooden/:id' element={<AdminLayout><Woodenupdate/></AdminLayout>}/> 
        
        <Route path='/cateringform' element={<AdminLayout><Cateringform/></AdminLayout>}/>
        <Route path='/listcatering' element={<AdminLayout><Cateringlist/></AdminLayout>}/>
        <Route path='/listcatering/:id' element={<AdminLayout><Cateringupdate/></AdminLayout>}/> 
        
        <Route path='/campingform' element={<AdminLayout><Campingform/></AdminLayout>}/>
        <Route path='/listcamping' element={<AdminLayout><Campinglist/></AdminLayout>}/>
        <Route path='/listcamping/:id' element={<AdminLayout><Campingupdate/></AdminLayout>}/> 
        
        <Route path='/fertilizerform' element={<AdminLayout><Fertilizerform/></AdminLayout>}/>
        <Route path='/listfertilizer' element={<AdminLayout><Fertilizerlist/></AdminLayout>}/>
        <Route path='/listfertilizer/:id' element={<AdminLayout><Fertilizerupdate/></AdminLayout>}/> 
        
        <Route path='/furiturform' element={<AdminLayout><Furniturform/></AdminLayout>}/>
        <Route path='/listfuritur' element={<AdminLayout><Furniturlist/></AdminLayout>}/>
        <Route path='/listfuritur/:id' element={<AdminLayout><Furniturupdate/></AdminLayout>}/> 
        
        <Route path='/giftwareform' element={<AdminLayout><Giftwareform/></AdminLayout>}/>
        <Route path='/listgiftware' element={<AdminLayout><Giftwarelist/></AdminLayout>}/>
        <Route path='/listgiftware/:id' element={<AdminLayout><Giftwareupdate/></AdminLayout>}/> 
        
        <Route path='/growingform' element={<AdminLayout><Growingform/></AdminLayout>}/>
        <Route path='/listgrowing' element={<AdminLayout><Growinglist/></AdminLayout>}/>
        <Route path='/listgrowing/:id' element={<AdminLayout><Growingupdate/></AdminLayout>}/> 
        
        <Route path='/lighteningform' element={<AdminLayout><Lighteningform/></AdminLayout>}/>
        <Route path='/listlightening' element={<AdminLayout><Lighteninglist/></AdminLayout>}/>
        <Route path='/listlightening/:id' element={<AdminLayout><Lighteningupdate/></AdminLayout>}/> 
        
        <Route path='/plantersform' element={<AdminLayout><Plantersform/></AdminLayout>}/>
        <Route path='/listplanters' element={<AdminLayout><Planterslist/></AdminLayout>}/>
        <Route path='/listplanters/:id' element={<AdminLayout><Plantersupdate/></AdminLayout>}/> 
        
        <Route path='/toolsform' element={<AdminLayout><Toolsacceform/></AdminLayout>}/>
        <Route path='/listtools' element={<AdminLayout><Toolsaccelist/></AdminLayout>}/>
        <Route path='/listtools/:id' element={<AdminLayout><Toolsacceupdate/></AdminLayout>}/> 
        
        <Route path='/wateringform' element={<AdminLayout><Wateringform/></AdminLayout>}/>
        <Route path='/listwatering' element={<AdminLayout><Wateringlist/></AdminLayout>}/>
        <Route path='/listwatering/:id' element={<AdminLayout><Wateringupdate/></AdminLayout>}/> 
        
        <Route path='/winterfulesform' element={<AdminLayout><Winterfulesform/></AdminLayout>}/>
        <Route path='/listwinterfules' element={<AdminLayout><Winterfuleslist/></AdminLayout>}/>
        <Route path='/listwinterfules/:id' element={<AdminLayout><Winterfulesupdate/></AdminLayout>}/> 
        
        <Route path='/giftsetsform' element={<AdminLayout><Giftsetsform/></AdminLayout>}/>
        <Route path='/listgiftsets' element={<AdminLayout><Giftsetslist/></AdminLayout>}/>
        <Route path='/listgiftsets/:id' element={<AdminLayout><Giftsetsupdate/></AdminLayout>}/> 
        
        <Route path='/handform' element={<AdminLayout><Handform/></AdminLayout>}/>
        <Route path='/listhand' element={<AdminLayout><Handlist/></AdminLayout>}/>
        <Route path='/listhand/:id' element={<AdminLayout><Handupdate/></AdminLayout>}/> 
        
        <Route path='/hairform' element={<AdminLayout><Hairform/></AdminLayout>}/>
        <Route path='/listhair' element={<AdminLayout><Hairlist/></AdminLayout>}/>
        <Route path='/listhair/:id' element={<AdminLayout><Hairupdate/></AdminLayout>}/> 
        
        <Route path='/healthform' element={<AdminLayout><Healthcareform/></AdminLayout>}/>
        <Route path='/listhealth' element={<AdminLayout><Healthcarelist/></AdminLayout>}/>
        <Route path='/listhealth/:id' element={<AdminLayout><Healthcareupdate/></AdminLayout>}/> 
        
        <Route path='/mouthwashform' element={<AdminLayout><Mouthwashform/></AdminLayout>}/>
        <Route path='/listmouthwash' element={<AdminLayout><Mouthwashlist/></AdminLayout>}/>
        <Route path='/listmouthwash/:id' element={<AdminLayout><Mouthwashupdate/></AdminLayout>}/> 
        
        <Route path='/perfumeform' element={<AdminLayout><Perfumesform/></AdminLayout>}/>
        <Route path='/listperfume' element={<AdminLayout><Perfumeslist/></AdminLayout>}/>
        <Route path='/listperfume/:id' element={<AdminLayout><Perfumesupdate/></AdminLayout>}/> 
        
        <Route path='/sanitaryform' element={<AdminLayout><Sanitaryform/></AdminLayout>}/>
        <Route path='/listsanitary' element={<AdminLayout><Sanitarylist/></AdminLayout>}/>
        <Route path='/listsanitary/:id' element={<AdminLayout><Sanitaryupdate/></AdminLayout>}/> 
        
        <Route path='/savingform' element={<AdminLayout><Savingform/></AdminLayout>}/>
        <Route path='/listsaving' element={<AdminLayout><Savinglist/></AdminLayout>}/>
        <Route path='/listsaving/:id' element={<AdminLayout><Savingupdate/></AdminLayout>}/> 
        
        <Route path='/shampoform' element={<AdminLayout><Shampoform/></AdminLayout>}/>
        <Route path='/listshampo' element={<AdminLayout><Shampolist/></AdminLayout>}/>
        <Route path='/listshampo/:id' element={<AdminLayout><Shampoupdate/></AdminLayout>}/> 
        
        <Route path='/showergeform' element={<AdminLayout><Showergelform/></AdminLayout>}/>
        <Route path='/listshowerge' element={<AdminLayout><Showergellist/></AdminLayout>}/>
        <Route path='/listshowerge/:id' element={<AdminLayout><Showergelupdate/></AdminLayout>}/> 
        
        <Route path='/skincareform' element={<AdminLayout><Skincareform/></AdminLayout>}/>
        <Route path='/listskincare' element={<AdminLayout><Skincarelist/></AdminLayout>}/>
        <Route path='/listskincare/:id' element={<AdminLayout><Skincareupdate/></AdminLayout>}/> 
        
        <Route path='/soapbarform' element={<AdminLayout><Soapbarform/></AdminLayout>}/>
        <Route path='/listsoapbar' element={<AdminLayout><Soapbarlist/></AdminLayout>}/>
        <Route path='/listsoapbar/:id' element={<AdminLayout><Soapbarupdate/></AdminLayout>}/>
        
        <Route path='/toothbrushform' element={<AdminLayout><Toothbrushform/></AdminLayout>}/>
        <Route path='/listtoothbrush' element={<AdminLayout><Toothbrushlist/></AdminLayout>}/>
        <Route path='/listtoothbrush/:id' element={<AdminLayout><Toothbrushupdate/></AdminLayout>}/>
        
        <Route path='/toothpastform' element={<AdminLayout><Toothpastform/></AdminLayout>}/>
        <Route path='/listtoothpast' element={<AdminLayout><Toothpastlist/></AdminLayout>}/>
        <Route path='/listtoothpast/:id' element={<AdminLayout><Toothpastupdate/></AdminLayout>}/>
        
        <Route path='/africaform' element={<AdminLayout><Africaform/></AdminLayout>}/>
        <Route path='/listafrica' element={<AdminLayout><Africalist/></AdminLayout>}/>
        <Route path='/listafrica/:id' element={<AdminLayout><Africaupdate/></AdminLayout>}/>
          
        <Route path='/deodrantform' element={<AdminLayout><Deodrantform/></AdminLayout>}/>
        <Route path='/listdeodrant' element={<AdminLayout><Deodrantlist/></AdminLayout>}/>
        <Route path='/listdeodrant/:id' element={<AdminLayout><Deodrantupdate/></AdminLayout>}/>
        
        <Route path='/fathersdayform' element={<AdminLayout><Fatherdaysform/></AdminLayout>}/>
        <Route path='/listfathersday' element={<AdminLayout><Fatherdayslist/></AdminLayout>}/>
        <Route path='/listfathersday/:id' element={<AdminLayout><Fatherdaysupdate/></AdminLayout>}/>
        
        <Route path='/framsmirrorform' element={<AdminLayout><Framsmirrorform/></AdminLayout>}/>
        <Route path='/listframsmirror' element={<AdminLayout><Framsmirrorlist/></AdminLayout>}/>
        <Route path='/listframsmirror/:id' element={<AdminLayout><Framsmirrorupdate/></AdminLayout>}/>
        
        <Route path='/giftwarehform' element={<AdminLayout><Giftwarehomeform/></AdminLayout>}/>
        <Route path='/listgiftwareh' element={<AdminLayout><Giftwarehomelist/></AdminLayout>}/>
        <Route path='/listgiftwareh/:id' element={<AdminLayout><Giftwarehomeupdate/></AdminLayout>}/>
        
        <Route path='/incenseform' element={<AdminLayout><Incenseform/></AdminLayout>}/>
        <Route path='/listincense' element={<AdminLayout><Incenselist/></AdminLayout>}/>
        <Route path='/listincense/:id' element={<AdminLayout><Incenseupdate/></AdminLayout>}/>
        
        <Route path='/memorialform' element={<AdminLayout><Memorialsform/></AdminLayout>}/>
        <Route path='/listmemorial' element={<AdminLayout><Memorialslist/></AdminLayout>}/>
        <Route path='/listmemorial/:id' element={<AdminLayout><Memorialsupdate/></AdminLayout>}/>
        </Route>
        {/* Main Routes */}
        <Route path='/' element={<MainLayout><Home /></MainLayout>} />
        <Route path='/deparments' element={<MainLayout><Department /></MainLayout>} />
        <Route path='/foodanddrinks' element={<MainLayout><FoodandDrink /></MainLayout>} />
        <Route path='/foods' element={<MainLayout><Foodsproduct /></MainLayout>} />
        <Route path='/drinks' element={<MainLayout><Drinkproduct /></MainLayout>} />
        <Route path='/smoking' element={<MainLayout><Smoking /></MainLayout>} />
        <Route path='/lighter' element={<MainLayout><Lighter /></MainLayout>} />
        <Route path='/electrical' element={<MainLayout><Electricalde /></MainLayout>} />
        <Route path='/essentional' element={<MainLayout><Smokingessentials /></MainLayout>} />
        <Route path='/addtocart' element={<MainLayout><Addtocart/></MainLayout>}/>
        <Route path='/poundline' element={<MainLayout><Poundline /></MainLayout>} />
        <Route path='/bathroombeauty' element={<MainLayout><Bathroomp /></MainLayout>} />
       
        
        <Route path='/Diy' element={<MainLayout><Diytools /></MainLayout>} />
        <Route path='/Disposables Party Bin Liners' element={<MainLayout><Partybin /></MainLayout>} />
        
        <Route path='/Candles Air Freshner' element={<MainLayout><Candels /></MainLayout>} />
        <Route path='/Food' element={<MainLayout><Foodsproduct /></MainLayout>} />
        <Route path='/Supersunday' element={<MainLayout><Sundaypage /></MainLayout>} />
        <Route path='/Palletdeals' element={<MainLayout><Pallet /></MainLayout>} />
        <Route path='/Shopbybrand' element={<MainLayout><Shopbybrand /></MainLayout>} />
        <Route path='/newarriv' element={<MainLayout><Newarrivals /></MainLayout>} />
        <Route path='/Giftmakercard' element={<MainLayout><Giftcard /></MainLayout>} />
        <Route path='/Brighthomly' element={<MainLayout><Giftcard /></MainLayout>} />
        <Route path='/log' element={<MainLayout><Login /></MainLayout>} />
        <Route path='/Register' element={<MainLayout><Register /></MainLayout>} />
        <Route path='/blog' element={<MainLayout><Blog /></MainLayout>} />
        <Route path='/hotwater' element={<MainLayout><Hotwater/></MainLayout>} />
        <Route path='/privacy' element={<MainLayout><Privacy/></MainLayout>} />
        <Route path='/termscondition' element={<MainLayout><Termscondition/></MainLayout>} />
        <Route path='/cookies' element={<MainLayout><Cookies/></MainLayout>} />
        <Route path='/contact' element={<MainLayout><Contactus/></MainLayout>} />
        <Route path='/aboutus' element={<MainLayout><Aboutus/></MainLayout>} />
        <Route path='/delivery' element={<MainLayout><Delivery/></MainLayout>} />
        <Route path='/export' element={<MainLayout><Export/></MainLayout>} />
        <Route path='/faq' element={<MainLayout><Faq/></MainLayout>} />
        <Route path='/Supersunday/:id' element={<MainLayout><Sundayoffersinglr/></MainLayout>}/>
        <Route path='/essentional/:id' element={<MainLayout><Smokingsinglepage/></MainLayout>}/>
        <Route path='/lightersingle/:id' element={<MainLayout><Lightersinglepage/></MainLayout>}/>
        <Route path='/bathroomsingle/:id' element={<MainLayout><Bathroomsingle/></MainLayout>}/>
        <Route path='/palletsingle/:id' element={<MainLayout><Palletsingle/></MainLayout>}/>
        <Route path='/newarrsingle/:id' element={<MainLayout><Newarrivalsingr/></MainLayout>}/>
        <Route path='/foodssinglepage/:id' element={<MainLayout><Foodssingle/></MainLayout>}/>
        <Route path='/electricalsinglepage/:id' element={<MainLayout><Electricalsinglepage/></MainLayout>}/>
        <Route path='/drinkssinglepage/:id' element={<MainLayout><Drinkssingle/></MainLayout>}/>

        <Route path='/deparmentbathroom' element={<MainLayout><Debathroom/></MainLayout>}/>
        <Route path='/deparmentdisposible' element={<MainLayout><Disposiblecat/></MainLayout>}/>
        <Route path='/deparmentloundry' element={<MainLayout><Loundrysubcat/></MainLayout>}/>
        <Route path='/bathroommain' element={<MainLayout><Bathroommain/></MainLayout>}/>
        <Route path='/bathroomsinglepage/:id' element={<MainLayout><Bathroomsinglede/></MainLayout>}/>

        <Route path='/mirrormain' element={<MainLayout><Mirrormain/></MainLayout>}/>
        <Route path='/mirrorsinglepage/:id' element={<MainLayout><Mirrorsinglepage/></MainLayout>}/>

        <Route path='/showermain' element={<MainLayout><Showermain/></MainLayout>}/>
        <Route path='/showersinglepage/:id' element={<MainLayout><Showersingle/></MainLayout>}/>

        <Route path='/bathmatesmain' element={<MainLayout><Bathmatsmain/></MainLayout>}/>
        <Route path='/bathmatessinglepage/:id' element={<MainLayout><Bathmatssinglr/></MainLayout>}/>

        <Route path='/bathacessories' element={<MainLayout><Bathacessories/></MainLayout>}/>
        <Route path='/bathacesssinglepage/:id' element={<MainLayout><Bathacessoriessingle/></MainLayout>}/>

        <Route path='/showerhead' element={<MainLayout><Showhead/></MainLayout>}/>
        <Route path='/showerheadsinglepage/:id' element={<MainLayout><Showheadsingle/></MainLayout>}/>

        <Route path='/disposible' element={<MainLayout><Disposiblemain/></MainLayout>}/>
        <Route path='/disposiblesinglepage/:id' element={<MainLayout><Disposiblesingle/></MainLayout>}/>

        <Route path='/tablewear' element={<MainLayout><Tablewear/></MainLayout>}/>
        <Route path='/tablewearsinglepage/:id' element={<MainLayout><Tablewearsingle/></MainLayout>}/>

        <Route path='/airers' element={<MainLayout><Airers/></MainLayout>}/>
        <Route path='/airerssinglepage/:id' element={<MainLayout><Airerssingle/></MainLayout>}/>

        <Route path='/iorining' element={<MainLayout><Iorining/></MainLayout>}/>
        <Route path='/ioriningsinglepage/:id' element={<MainLayout><Ioriningsingle/></MainLayout>}/>

        <Route path='/laacess' element={<MainLayout><Laacess/></MainLayout>}/>
        <Route path='/laacesssinglepage/:id' element={<MainLayout><Laacesssingle/></MainLayout>}/>

        <Route path='/batteries' element={<MainLayout><Batteriesmain/></MainLayout>}/>
        <Route path='/batteriessinglepage/:id' element={<MainLayout><Batteriessinge/></MainLayout>}/>

        <Route path='/phoneaccessories' element={<MainLayout><Phone/></MainLayout>}/>
        <Route path='/phonesinglepage/:id' element={<MainLayout><Phonesingle/></MainLayout>}/>

        <Route path='/obstical' element={<MainLayout><Obstical/></MainLayout>}/>
        <Route path='/obsticalsinglepage/:id' element={<MainLayout><Obticalsigle/></MainLayout>}/>

        <Route path='/electric' element={<MainLayout><Electric/></MainLayout>}/>
        <Route path='/electricsinglepage/:id' element={<MainLayout><Electricsingle/></MainLayout>}/>

        <Route path='/firstaid' element={<MainLayout><Firstaidmain/></MainLayout>}/>
        <Route path='/firstaidsinglepage/:id' element={<MainLayout><Firstaidsingle/></MainLayout>}/>

        <Route path='/freshner' element={<MainLayout><Freshner/></MainLayout>}/>
        <Route path='/freshnersinglepage/:id' element={<MainLayout><Freshnersingle/></MainLayout>}/>

        <Route path='/akonobol' element={<MainLayout><Akonobol/></MainLayout>}/>
        <Route path='/akonobolsinglepage/:id' element={<MainLayout><Akonobolsingle/></MainLayout>}/>
        
        <Route path='/clock' element={<MainLayout><Clock/></MainLayout>}/>
        <Route path='/clocksinglepage/:id' element={<MainLayout><Clocksingle/></MainLayout>}/>

        <Route path='/cameras' element={<MainLayout><Cameras/></MainLayout>}/>
        <Route path='/camerassinglepage/:id' element={<MainLayout><Camerasingle/></MainLayout>}/>

        <Route path='/digital' element={<MainLayout><Digital/></MainLayout>}/>
        <Route path='/digitalsinglepage/:id' element={<MainLayout><Digitalsingle/></MainLayout>}/>

        <Route path='/cookware' element={<MainLayout><Cookware/></MainLayout>}/>
        <Route path='/cookwaresinglepage/:id' element={<MainLayout><Cookwaresingle/></MainLayout>}/>

        <Route path='/crockery' element={<MainLayout><Crockery/></MainLayout>}/>
        <Route path='/crockerysinglepage/:id' element={<MainLayout><Crockerysingle/></MainLayout>}/>

        <Route path='/dinner' element={<MainLayout><Dinner/></MainLayout>}/>
        <Route path='/dinnersinglepage/:id' element={<MainLayout><Dinnersingel/></MainLayout>}/>

        <Route path='/cotton' element={<MainLayout><Cotton/></MainLayout>}/>
        <Route path='/cottonsinglepage/:id' element={<MainLayout><Cottonsingle/></MainLayout>}/>

        <Route path='/babay' element={<MainLayout><Babycare/></MainLayout>}/>
        <Route path='/babysinglepage/:id' element={<MainLayout><Babaysingle/></MainLayout>}/>
        
        <Route path='/freshn' element={<MainLayout><Freshn/></MainLayout>}/>
        <Route path='/freshnsinglepage/:id' element={<MainLayout><Freshnsingle/></MainLayout>}/>

        <Route path='/bleech' element={<MainLayout><Bleech/></MainLayout>}/>
        <Route path='/bleechsinglepage/:id' element={<MainLayout><Bleechsingl/></MainLayout>}/>

        <Route path='/kidssto' element={<MainLayout><Kidssto/></MainLayout>}/>
        <Route path='/kidsstosinglepage/:id' element={<MainLayout><Kidsstosingl/></MainLayout>}/>

        <Route path='/bbq' element={<MainLayout><Bbq/></MainLayout>}/>
        <Route path='/bbqsinglepage/:id' element={<MainLayout><Bbqsingle/></MainLayout>}/>

        <Route path='/bird' element={<MainLayout><Bird/></MainLayout>}/>
        <Route path='/birdinglepage/:id' element={<MainLayout><Birdsingle/></MainLayout>}/>

        <Route path='/baloon' element={<MainLayout><Baloon/></MainLayout>}/>
        <Route path='/baloonsinglepage/:id' element={<MainLayout><Baloonsingl/></MainLayout>}/>

        <Route path='/kitechenwear' element={<MainLayout><Kitechendde/></MainLayout>}/>

        <Route path='/cleaning' element={<MainLayout><Leaning/></MainLayout>}/>

        <Route path='/gardening' element={<MainLayout><Gardeningmain/></MainLayout>}/>

        <Route path='/homedecore' element={<MainLayout><Homedecoremain/></MainLayout>}/>

        <Route path='/toiletries' element={<MainLayout><Tolitriesmain/></MainLayout>}/>

        <Route path='/diye' element={<MainLayout><Diymainpage/></MainLayout>}/>

        <Route path='/flowers' element={<MainLayout><Artificalmain/></MainLayout>}/>

        <Route path='/stationery' element={<MainLayout><Stationerymain/></MainLayout>}/>

        <Route path='/textiles & Accessories' element={<MainLayout><Textilesmainpage/></MainLayout>}/>

        <Route path='/aprons' element={<MainLayout><Aprons/></MainLayout>}/>
        <Route path='/apronssinglepage/:id' element={<MainLayout><Apronssingle/></MainLayout>}/>

        <Route path='/bedding' element={<MainLayout><Bedding/></MainLayout>}/>
        <Route path='/beddingsinglepage/:id' element={<MainLayout><Beddingsingle/></MainLayout>}/>

        <Route path='/clothing' element={<MainLayout><Clothing/></MainLayout>}/>
        <Route path='/clothingsinglepage/:id' element={<MainLayout><Clothingsingle/></MainLayout>}/>

        <Route path='/rentokil' element={<MainLayout><Rentokil/></MainLayout>}/>
        <Route path='/rentokilsinglepage/:id' element={<MainLayout><RentokilSingle/></MainLayout>}/>

        <Route path='/stv' element={<MainLayout><Stv/></MainLayout>}/>
        <Route path='/stvsinglepage/:id' element={<MainLayout><StvSingle/></MainLayout>}/>

        <Route path='/car' element={<MainLayout><Car/></MainLayout>}/>
        <Route path='/carsinglepage/:id' element={<MainLayout><Carsingle/></MainLayout>}/>

        <Route path='/bakeware' element={<MainLayout><Bakeware/></MainLayout>}/>
        <Route path='/bakewaresinglepage/:id' element={<MainLayout><Bakewaresingle/></MainLayout>}/>

        <Route path='/cat' element={<MainLayout><Cat/></MainLayout>}/>
        <Route path='/catsinglepage/:id' element={<MainLayout><Catsingle/></MainLayout>}/>

        <Route path='/bareware' element={<MainLayout><Barewear/></MainLayout>}/>
        <Route path='/barewaresinglepage/:id' element={<MainLayout><Barewearsingl/></MainLayout>}/>

        <Route path='/babyproducts' element={<MainLayout><Baby/></MainLayout>}/>
        <Route path='/babysinglepage/:id' element={<MainLayout><Babysingle/></MainLayout>}/>

        <Route path='/birds' element={<MainLayout><Birds/></MainLayout>}/>
        <Route path='/birdssinglepage/:id' element={<MainLayout><Birdssingl/></MainLayout>}/>

        <Route path='/household Cleaners' element={<MainLayout><Houseclenermain/></MainLayout>}/>

        <Route path='/plastic Housewares' element={<MainLayout><Plastichousewearmain/></MainLayout>}/>

        <Route path='/petproducts' element={<MainLayout><Petproductsmain/></MainLayout>}/>

        <Route path='/chinaproducts' element={<MainLayout><Chinamain/></MainLayout>}/>

        <Route path='/hardware' element={<MainLayout><Hardwaremain/></MainLayout>}/>

        <Route path='/seasonalsports' element={<MainLayout><Seasonalsportsmain/></MainLayout>}/>

        <Route path='/pestcontrol' element={<MainLayout><Pestcontromain/></MainLayout>}/>

        <Route path='/kidsproduct' element={<MainLayout><Kidsmain/></MainLayout>}/>

        <Route path='/glassweare' element={<MainLayout><Glasswaremain/></MainLayout>}/>

        <Route path='/electricalde' element={<MainLayout><Electricaldemain/></MainLayout>}/>

        <Route path='/partyware' element={<MainLayout><Partywaremain/></MainLayout>}/>

        <Route path='/pumps' element={<MainLayout><Pumps/></MainLayout>}/>
        <Route path='/pumpssinglepage/:id' element={<MainLayout><Pumpssingl/></MainLayout>}/>

        <Route path='/banner' element={<MainLayout><Banner/></MainLayout>}/>
        <Route path='/bannersinglepage/:id' element={<MainLayout><Bannersingl/></MainLayout>}/>

        <Route path='/crystal' element={<MainLayout><Crystal/></MainLayout>}/>
        <Route path='/crystalsinglepage/:id' element={<MainLayout><Crystalsingl/></MainLayout>}/>

        <Route path='/cakes' element={<MainLayout><Cakes/></MainLayout>}/>
        <Route path='/cakessinglepage/:id' element={<MainLayout><Cakessingl/></MainLayout>}/>

        <Route path='/furniture' element={<MainLayout><Furniture/></MainLayout>}/>
        <Route path='/furnituresinglepage/:id' element={<MainLayout><Furnituresingl/></MainLayout>}/>

        <Route path='/mats' element={<MainLayout><Mats/></MainLayout>}/>
        <Route path='/matssinglepage/:id' element={<MainLayout><Matssingl/></MainLayout>}/>

        <Route path='/candel' element={<MainLayout><Candel/></MainLayout>}/>
        <Route path='/candelsinglepage/:id' element={<MainLayout><Candelsingl/></MainLayout>}/>

        <Route path='/st' element={<MainLayout><St/></MainLayout>}/>
        <Route path='/stsinglepage/:id' element={<MainLayout><Stsingal/></MainLayout>}/>

        <Route path='/foodcon' element={<MainLayout><Foodcon/></MainLayout>}/>
        <Route path='/foodconsinglepage/:id' element={<MainLayout><Foodconsingl/></MainLayout>}/>

        <Route path='/kidsplas' element={<MainLayout><Kidsplas/></MainLayout>}/>
        <Route path='/kidsplassinglepage/:id' element={<MainLayout><Kidsplassingl/></MainLayout>}/>
        <Route path='/forget' element={<Forgetpassword/>}  />
        <Route path='/verifyotp' element={<VerifyOtp/>}/>
        
        <Route path='/cooler' element={<MainLayout><Coolerbags/></MainLayout>}/>
        <Route path='/coolersinglepage/:id' element={<MainLayout><Coolersingl/></MainLayout>}/>
        
        <Route path='/flask' element={<MainLayout><Flas/></MainLayout>}/>
        <Route path='/flasksinglepage/:id' element={<MainLayout><Flasksingl/></MainLayout>}/>

        <Route path='/art&craft' element={<MainLayout><Art/></MainLayout>}/>
        <Route path='/art&craftsinglepage/:id' element={<MainLayout><Artsingle/></MainLayout>}/>

        <Route path='/books' element={<MainLayout><Books/></MainLayout>}/>
        <Route path='/bookssinglepage/:id' element={<MainLayout><Bookssingle/></MainLayout>}/>

        <Route path='/brushware' element={<MainLayout><Brushware/></MainLayout>}/>
        <Route path='/brushwaresinglepage/:id' element={<MainLayout><Brushwaresingel/></MainLayout>}/>

        <Route path='/duster' element={<MainLayout><Duster/></MainLayout>}/>
        <Route path='/dustersinglepage/:id' element={<MainLayout><Dustersingl/></MainLayout>}/>

        <Route path='/artifical' element={<MainLayout><Artifical/></MainLayout>}/>
        <Route path='/artificalsinglepage/:id' element={<MainLayout><Artificalsingel/></MainLayout>}/>
        
        <Route path='/bouquet' element={<MainLayout><Bouquet/></MainLayout>}/>
        <Route path='/bouquetsinglepage/:id' element={<MainLayout><Bouquetsingl/></MainLayout>}/>

        <Route path='/diytools' element={<MainLayout><Diytoolspo/></MainLayout>}/>
        <Route path='/diytoolssinglepage/:id' element={<MainLayout><Diytoolssingl/></MainLayout>}/>

        <Route path='/disposiblepo' element={<MainLayout><Disposible/></MainLayout>}/>
        <Route path='/disposibleposinglepage/:id' element={<MainLayout><Disposbilesingle/></MainLayout>}/>

        <Route path='/craftpo' element={<MainLayout><Craftpo/></MainLayout>}/>
        <Route path='/craftposinglepage/:id' element={<MainLayout><Craftsingl/></MainLayout>}/>
        
        <Route path='/carpo' element={<MainLayout><Carpo/></MainLayout>}/>
        <Route path='/carposinglepage/:id' element={<MainLayout><Carposingl/></MainLayout>}/>
        
        <Route path='/candeles' element={<MainLayout><Candeles/></MainLayout>}/>
        <Route path='/candelssinglepage/:id' element={<MainLayout><Candelessingl/></MainLayout>}/>

        <Route path='/foodpound' element={<MainLayout><Foodpound/></MainLayout>}/>
        <Route path='/foodpoundsinglepage/:id' element={<MainLayout><Foodposingl/></MainLayout>}/>
        
        <Route path='/shoecare' element={<MainLayout><Shoecare/></MainLayout>}/>
        <Route path='/shoecarsinglepage/:id' element={<MainLayout><Shoesingl/></MainLayout>}/>

        <Route path='/stationerypo' element={<MainLayout><Stationerypo/></MainLayout>}/>
        <Route path='/stationerysinglepage/:id' element={<MainLayout><Stationerysingl/></MainLayout>}/>

        <Route path='/potoy' element={<MainLayout><Potoy/></MainLayout>}/>
        <Route path='/potoysinglepage/:id' element={<MainLayout><Potoysingl/></MainLayout>}/>
        
        <Route path='/pestcon' element={<MainLayout><Pestcon/></MainLayout>}/>
        <Route path='/pestconsinglepage/:id' element={<MainLayout><Pestconsingl/></MainLayout>}/>
        
        <Route path='/lightergas' element={<MainLayout><Lightergas/></MainLayout>}/>
        <Route path='/lightergassinglepage/:id' element={<MainLayout><Lightergassingl/></MainLayout>}/>
        
        <Route path='/loundryiron' element={<MainLayout><Loundryiron/></MainLayout>}/>
        <Route path='/loundryironsinglepage/:id' element={<MainLayout><Loundryirsingl/></MainLayout>}/>

        <Route path='/kitchenwearpound' element={<MainLayout><Kitchenwarepo/></MainLayout>}/>
        <Route path='/kitchenwearpoundsinglepage/:id' element={<MainLayout><Kitchenwareposingl/></MainLayout>}/>

        <Route path='/householdclpound' element={<MainLayout><Householdcl/></MainLayout>}/>
        <Route path='/householdclpoundsinglepage/:id' element={<MainLayout><Householdclsingl/></MainLayout>}/>
        
        <Route path='/householdpr' element={<MainLayout><Househldpr/></MainLayout>}/>
        <Route path='/householdprsinglepage/:id' element={<MainLayout><Househldprsingl/></MainLayout>}/>
        
        <Route path='/reading' element={<MainLayout><Reading/></MainLayout>}/>
        <Route path='/readingsinglepage/:id' element={<MainLayout><Readingsingl/></MainLayout>}/>
        
        <Route path='/gloves' element={<MainLayout><Gloves/></MainLayout>}/>
        <Route path='/glovessinglepage/:id' element={<MainLayout><Glovessingl/></MainLayout>}/>
        
        <Route path='/mops' element={<MainLayout><Mops/></MainLayout>}/>
        <Route path='/mopssinglepage/:id' element={<MainLayout><Mopssingl/></MainLayout>}/>
        
        <Route path='/sponge' element={<MainLayout><Sponge/></MainLayout>}/>
        <Route path='/spongesinglepage/:id' element={<MainLayout><Spongesingl/></MainLayout>}/>

        <Route path='/barrettine' element={<MainLayout><Barrettine/></MainLayout>}/>
        <Route path='/barrettinesinglepage/:id' element={<MainLayout><Barrettinesingle/></MainLayout>}/>

        <Route path='/bartolin' element={<MainLayout><Bartolin/></MainLayout>}/>
        <Route path='/bartolinsinglepage/:id' element={<MainLayout><Bartolinsingle/></MainLayout>}/>

        <Route path='/birdbrand' element={<MainLayout><Birdbrand/></MainLayout>}/>
        <Route path='/birdbrandsinglepage/:id' element={<MainLayout><Birdbrandsingle/></MainLayout>}/>

        <Route path='/black' element={<MainLayout><Black/></MainLayout>}/>
        <Route path='/blacksinglepage/:id' element={<MainLayout><Blacksingle/></MainLayout>}/>
        
        <Route path='/bonit' element={<MainLayout><Bonit/></MainLayout>}/>
        <Route path='/bonitsinglepage/:id' element={<MainLayout><Bonitsingle/></MainLayout>}/>
        
        <Route path='/bagsl' element={<MainLayout><Bags/></MainLayout>}/>
        <Route path='/bagslsinglepage/:id' element={<MainLayout><Bagssingle/></MainLayout>}/>
        
        <Route path='/bascketst' element={<MainLayout><Basketst/></MainLayout>}/>
        <Route path='/bascketstsinglepage/:id' element={<MainLayout><Basketstsingle/></MainLayout>}/>
        
        <Route path='/luggage' element={<MainLayout><Luggage/></MainLayout>}/>
        <Route path='/luggagesinglepage/:id' element={<MainLayout><Luggagesingl/></MainLayout>}/>

        <Route path='/bostik' element={<MainLayout><Bostik/></MainLayout>}/>
        <Route path='/bostiksinglepage/:id' element={<MainLayout><Bostiksingle/></MainLayout>}/>
        
        <Route path='/briwax' element={<MainLayout><Briwax/></MainLayout>}/>
        <Route path='/briwaxsinglepage/:id' element={<MainLayout><Briwaxsingle/></MainLayout>}/>
        
        <Route path='/brook' element={<MainLayout><Brook/></MainLayout>}/>
        <Route path='/brooksinglepage/:id' element={<MainLayout><Brooksingle/></MainLayout>}/>
        
        <Route path='/carproduct' element={<MainLayout><Carpro/></MainLayout>}/>
        <Route path='/carproductsinglepage/:id' element={<MainLayout><Carprosingle/></MainLayout>}/>

        <Route path='/carplan' element={<MainLayout><Carplan/></MainLayout>}/>
        <Route path='/carplansinglepage/:id' element={<MainLayout><Carplansingle/></MainLayout>}/>
        
        <Route path='/chamois' element={<MainLayout><Chamois/></MainLayout>}/>
        <Route path='/chamoissinglepage/:id' element={<MainLayout><Chamoissingle/></MainLayout>}/>
        
        <Route path='/command' element={<MainLayout><Command/></MainLayout>}/>
        <Route path='/commandsinglepage/:id' element={<MainLayout><Commandsingle/></MainLayout>}/>
        
        <Route path='/coral' element={<MainLayout><Coral/></MainLayout>}/>
        <Route path='/coralsinglepage/:id' element={<MainLayout><Coralsingle/></MainLayout>}/>
         
        <Route path='/crown' element={<MainLayout><Crown/></MainLayout>}/>
        <Route path='/crownsinglepage/:id' element={<MainLayout><Crownsingle/></MainLayout>}/>
        
        <Route path='/dekton' element={<MainLayout><Dekton/></MainLayout>}/>
        <Route path='/dektonsinglepage/:id' element={<MainLayout><Dektonsingle/></MainLayout>}/>

        <Route path='/demsum' element={<MainLayout><Demsum/></MainLayout>}/>
        <Route path='/demsumsinglepage/:id' element={<MainLayout><Demsumsingle/></MainLayout>}/>

        <Route path='/darper' element={<MainLayout><Darper/></MainLayout>}/>
        <Route path='/darpersinglepage/:id' element={<MainLayout><Darpersingle/></MainLayout>}/>

        <Route path='/edco' element={<MainLayout><Edco/></MainLayout>}/>
        <Route path='/edcosinglepage/:id' element={<MainLayout><Edcosingle/></MainLayout>}/>

        <Route path='/exitex' element={<MainLayout><Exitex/></MainLayout>}/>
        <Route path='/exitexsinglepage/:id' element={<MainLayout><Exitexsingle/></MainLayout>}/>

        <Route path='/fitforjob' element={<MainLayout><Fit/></MainLayout>}/>
        <Route path='/fitforjobsinglepage/:id' element={<MainLayout><Fitsingle/></MainLayout>}/>
        
        <Route path='/global' element={<MainLayout><Global/></MainLayout>}/>
        <Route path='/globalsinglepage/:id' element={<MainLayout><Globalsinngl/></MainLayout>}/>
        
        <Route path='/gas' element={<MainLayout><Gasgo/></MainLayout>}/>
        <Route path='/gassinglepage/:id' element={<MainLayout><Gasgosingl/></MainLayout>}/>
        
        <Route path='/gorila' element={<MainLayout><Gorila/></MainLayout>}/>
        <Route path='/gorilasinglepage/:id' element={<MainLayout><Gorilasingl/></MainLayout>}/>
        
        <Route path='/hagsen' element={<MainLayout><Hagesan/></MainLayout>}/>
        <Route path='/hagsensinglepage/:id' element={<MainLayout><Hagesansingl/></MainLayout>}/>
        
        <Route path='/hardwareto' element={<MainLayout><Hardwaretools/></MainLayout>}/>
        <Route path='/hardwaretosinglepage/:id' element={<MainLayout><Hardwaretoolssingl/></MainLayout>}/>

        <Route path='/harris' element={<MainLayout><Harris/></MainLayout>}/>
        <Route path='/harrissinglepage/:id' element={<MainLayout><Harrissingl/></MainLayout>}/>
        
        <Route path='/hilka' element={<MainLayout><Hilka/></MainLayout>}/>
        <Route path='/hilkasinglepage/:id' element={<MainLayout><Hilkasingl/></MainLayout>}/>
        
        <Route path='/humnrol' element={<MainLayout><Humnrol/></MainLayout>}/>
        <Route path='/humnrolsinglepage/:id' element={<MainLayout><Humnrolsingl/></MainLayout>}/> 
        
        <Route path='/jbwel' element={<MainLayout><Jbweld/></MainLayout>}/>
        <Route path='/jbwelsinglepage/:id' element={<MainLayout><Jbweldsingl/></MainLayout>}/> 
        
        <Route path='/kilrock' element={<MainLayout><Kilrok/></MainLayout>}/>
        <Route path='/kilrocksinglepage/:id' element={<MainLayout><Kilroksingl/></MainLayout>}/> 
        
        <Route path='/ladder' element={<MainLayout><Ladder/></MainLayout>}/>
        <Route path='/laddersinglepage/:id' element={<MainLayout><Laddersingl/></MainLayout>}/>
        
        <Route path='/locktile' element={<MainLayout><Locktile/></MainLayout>}/>
        <Route path='/locktilesinglepage/:id' element={<MainLayout><Locktilesingl/></MainLayout>}/>

        <Route path='/lynwood' element={<MainLayout><Lynwood/></MainLayout>}/>
        <Route path='/lynwoodsinglepage/:id' element={<MainLayout><Lynwoodsingl/></MainLayout>}/>

        <Route path='/misc' element={<MainLayout><Misc/></MainLayout>}/>
        <Route path='/miscsinglepage/:id' element={<MainLayout><Miscsingl/></MainLayout>}/>

        <Route path='/oxford' element={<MainLayout><Oxford/></MainLayout>}/>
        <Route path='/oxfordsinglepage/:id' element={<MainLayout><Oxfordsing/></MainLayout>}/>

        <Route path='/pestco' element={<MainLayout><Pestco/></MainLayout>}/>
        <Route path='/pestcosinglepage/:id' element={<MainLayout><Pestconsing/></MainLayout>}/>

        <Route path='/plasplug' element={<MainLayout><Plasplug/></MainLayout>}/>
        <Route path='/plasplugsinglepage/:id' element={<MainLayout><Plasplugsingl/></MainLayout>}/>

        <Route path='/primacar' element={<MainLayout><Primacar/></MainLayout>}/>
        <Route path='/primacarsinglepage/:id' element={<MainLayout><Primacarsingl/></MainLayout>}/>

        <Route path='/rolson' element={<MainLayout><Rolson/></MainLayout>}/>
        <Route path='/rolsonsinglepage/:id' element={<MainLayout><Rolsonsingl/></MainLayout>}/>

        <Route path='/ronseal' element={<MainLayout><Ronseal/></MainLayout>}/>
        <Route path='/ronsealsinglepage/:id' element={<MainLayout><Ronsealsingl/></MainLayout>}/>

        <Route path='/rustins' element={<MainLayout><Rustinsltd/></MainLayout>}/>
        <Route path='/rustinssinglepage/:id' element={<MainLayout><Rustinsltdsingl/></MainLayout>}/> 

        <Route path='/secureit' element={<MainLayout><Secureit/></MainLayout>}/>
        <Route path='/secureitsinglepage/:id' element={<MainLayout><Secureitsingl/></MainLayout>}/>

        <Route path='/secrup' element={<MainLayout><Secrup/></MainLayout>}/>
        <Route path='/secrupsinglepage/:id' element={<MainLayout><Secrupsingl/></MainLayout>}/>

        <Route path='/shortage' element={<MainLayout><Shortage/></MainLayout>}/>
        <Route path='/shortagesinglepage/:id' element={<MainLayout><Shortagesingl/></MainLayout>}/>
        
        <Route path='/soudal' element={<MainLayout><Soudal/></MainLayout>}/>
        <Route path='/soudalsinglepage/:id' element={<MainLayout><Soudalsingl/></MainLayout>}/> 
        
        <Route path='/starpak' element={<MainLayout><Starpack/></MainLayout>}/>
        <Route path='/starpaksinglepage/:id' element={<MainLayout><Starpacksingl/></MainLayout>}/> 
        
        <Route path='/sterling' element={<MainLayout><Sterling/></MainLayout>}/>
        <Route path='/sterlingsinglepage/:id' element={<MainLayout><Sterlingsingl/></MainLayout>}/>  
        
        <Route path='/tableaue' element={<MainLayout><Tableaue/></MainLayout>}/>
        <Route path='/tableauesinglepage/:id' element={<MainLayout><Tableauesingl/></MainLayout>}/>
        
        <Route path='/tricycle' element={<MainLayout><Tricycle/></MainLayout>}/>
        <Route path='/tricyclesinglepage/:id' element={<MainLayout><Tricyclesingl/></MainLayout>}/>
         
        <Route path='/ultratrap' element={<MainLayout><Ultratrape/></MainLayout>}/>
        <Route path='/ultratrapsinglepage/:id' element={<MainLayout><Ultratrapesingl/></MainLayout>}/>
        
        <Route path='/vacuum' element={<MainLayout><Vacuum/></MainLayout>}/>
        <Route path='/vacuumsinglepage/:id' element={<MainLayout><Vacuumsingl/></MainLayout>}/> 
        
        <Route path='/velcro' element={<MainLayout><Velcro/></MainLayout>}/>
        <Route path='/velcrosinglepage/:id' element={<MainLayout><Velcrosingl/></MainLayout>}/>
        
        <Route path='/vfmpaint' element={<MainLayout><VfmPaints/></MainLayout>}/>
        <Route path='/vfmpaintsinglepage/:id' element={<MainLayout><VfmPaintssingl/></MainLayout>}/>
        
        <Route path='/wd40' element={<MainLayout><Wd40/></MainLayout>}/>
        <Route path='/wd40singlepage/:id' element={<MainLayout><Wd40singl/></MainLayout>}/>
        
        <Route path='/werner' element={<MainLayout><Werner/></MainLayout>}/>
        <Route path='/wernersinglepage/:id' element={<MainLayout><Wernersingl/></MainLayout>}/>
        
        <Route path='/yelelock' element={<MainLayout><Yelelock/></MainLayout>}/>
        <Route path='/yelelocksinglepage/:id' element={<MainLayout><Yelelocksingl/></MainLayout>}/>
        
        <Route path='/unicon' element={<MainLayout><Unicon/></MainLayout>}/>
        <Route path='/uniconsinglepage/:id' element={<MainLayout><Uniconsingl/></MainLayout>}/>
        
        <Route path='/amtech' element={<MainLayout><Amtech/></MainLayout>}/>
        <Route path='/amtechsinglepage/:id' element={<MainLayout><Amtechsingle/></MainLayout>}/>
        
        <Route path='/antiqux' element={<MainLayout><Antiqux/></MainLayout>}/>
        <Route path='/antiquxsinglepage/:id' element={<MainLayout><Antiquxsingle/></MainLayout>}/>
        
        <Route path='/chrom' element={<MainLayout><Chrome/></MainLayout>}/>
        <Route path='/chromsinglepage/:id' element={<MainLayout><Chromesingl/></MainLayout>}/>
        
        <Route path='/cookwar' element={<MainLayout><Cookwar/></MainLayout>}/>
        <Route path='/cookwarsinglepage/:id' element={<MainLayout><Cookwarsingl/></MainLayout>}/>
        
        <Route path='/kettles' element={<MainLayout><Kettles/></MainLayout>}/>
        <Route path='/kettlessinglepage/:id' element={<MainLayout><Kettlessingl/></MainLayout>}/>
        
        <Route path='/cultery' element={<MainLayout><Cutlery/></MainLayout>}/>
        <Route path='/culterysinglepage/:id' element={<MainLayout><Cutlerysingl/></MainLayout>}/>
        
        <Route path='/kitechenacc' element={<MainLayout><KitchenACC/></MainLayout>}/>
        <Route path='/kitechenaccsinglepage/:id' element={<MainLayout><KitchenACCsingl/></MainLayout>}/>
        
        <Route path='/kitechenbin' element={<MainLayout><Kitechenbin/></MainLayout>}/>
        <Route path='/kitechenbinsinglepage/:id' element={<MainLayout><Kitechenbinsingl/></MainLayout>}/>
        
        <Route path='/kitechenkni' element={<MainLayout><KitechenKni/></MainLayout>}/>
        <Route path='/kitechenknisinglepage/:id' element={<MainLayout><KitechenKnisingl/></MainLayout>}/>
        
        <Route path='/scalekitechen' element={<MainLayout><Scaleski/></MainLayout>}/>
        <Route path='/scalekitechensinglepage/:id' element={<MainLayout><Scaleskisingl/></MainLayout>}/>
        
        <Route path='/plastickitechen' element={<MainLayout><Plasticki/></MainLayout>}/>
        <Route path='/plastickitechensinglepage/:id' element={<MainLayout><Plastickisingl/></MainLayout>}/>
        
        <Route path='/simplehuman' element={<MainLayout><Simplehu/></MainLayout>}/>
        <Route path='/simplehumansinglepage/:id' element={<MainLayout><Simplehusingl/></MainLayout>}/>
        
        <Route path='/bread' element={<MainLayout><Bread/></MainLayout>}/>
        <Route path='/breadsinglepage/:id' element={<MainLayout><Breadsingl/></MainLayout>}/>
        
        <Route path='/tea' element={<MainLayout><Tea/></MainLayout>}/>
        <Route path='/teasinglepage/:id' element={<MainLayout><Teasingl/></MainLayout>}/>  
        
        <Route path='/tray' element={<MainLayout><Trays/></MainLayout>}/>
        <Route path='/traysinglepage/:id' element={<MainLayout><Trayssingl/></MainLayout>}/>
        
        <Route path='/water' element={<MainLayout><Water/></MainLayout>}/>
        <Route path='/watersinglepage/:id' element={<MainLayout><Watersingl/></MainLayout>}/> 
        
        <Route path='/wooden' element={<MainLayout><Wooden/></MainLayout>}/>
        <Route path='/woodensinglepage/:id' element={<MainLayout><Woodensingl/></MainLayout>}/> 
        
        <Route path='/catering' element={<MainLayout><Catering/></MainLayout>}/>
        <Route path='/cateringsinglepage/:id' element={<MainLayout><Cateringsingl/></MainLayout>}/> 
        
        <Route path='/camping' element={<MainLayout><Camping/></MainLayout>}/>
        <Route path='/campingsinglepage/:id' element={<MainLayout><Campingsingle/></MainLayout>}/> 
        
        <Route path='/fertilizer' element={<MainLayout><Fertilizer/></MainLayout>}/>
        <Route path='/fertilizersinglepage/:id' element={<MainLayout><Fertilizersingle/></MainLayout>}/> 
        
        <Route path='/furnitur' element={<MainLayout><Furnitur/></MainLayout>}/>
        <Route path='/furnitursinglepage/:id' element={<MainLayout><Furnituresingle/></MainLayout>}/> 
        
        <Route path='/giftware' element={<MainLayout><Giftware/></MainLayout>}/>
        <Route path='/giftwaresinglepage/:id' element={<MainLayout><Giftwaresingle/></MainLayout>}/>  
        
        <Route path='/growing' element={<MainLayout><Growing/></MainLayout>}/>
        <Route path='/growingsinglepage/:id' element={<MainLayout><Growingsingle/></MainLayout>}/>
        
        <Route path='/lightening' element={<MainLayout><Lightening/></MainLayout>}/>
        <Route path='/lighteningsinglepage/:id' element={<MainLayout><Lighteningsingle/></MainLayout>}/>
        
        <Route path='/planters' element={<MainLayout><Planters/></MainLayout>}/>
        <Route path='/planterssinglepage/:id' element={<MainLayout><Planterssingle/></MainLayout>}/>
        
        <Route path='/tools' element={<MainLayout><Toolsacce/></MainLayout>}/>
        <Route path='/toolssinglepage/:id' element={<MainLayout><Toolsaccesingle/></MainLayout>}/>
        
        <Route path='/watering' element={<MainLayout><Watering/></MainLayout>}/>
        <Route path='/wateringsinglepage/:id' element={<MainLayout><Wateringsingle/></MainLayout>}/>
        
        <Route path='/winterfules' element={<MainLayout><Winterfules/></MainLayout>}/>
        <Route path='/winterfulessinglepage/:id' element={<MainLayout><Winterfulessingle/></MainLayout>}/>
        
        <Route path='/giftsets' element={<MainLayout><Giftsets/></MainLayout>}/>
        <Route path='/giftsetssinglepage/:id' element={<MainLayout><Giftsetssingle/></MainLayout>}/>
        
        <Route path='/hair' element={<MainLayout><Hair/></MainLayout>}/>
        <Route path='/hairsinglepage/:id' element={<MainLayout><Hairsingle/></MainLayout>}/>
        
        <Route path='/hand' element={<MainLayout><Hand/></MainLayout>}/>
        <Route path='/handsinglepage/:id' element={<MainLayout><Handsingle/></MainLayout>}/>
        
        <Route path='/health' element={<MainLayout><Healthcare/></MainLayout>}/>
        <Route path='/healthsinglepage/:id' element={<MainLayout><Healthcaresingle/></MainLayout>}/>
        
        <Route path='/mouthwash' element={<MainLayout><Mouthwash/></MainLayout>}/>
        <Route path='/mouthwashsinglepage/:id' element={<MainLayout><Mouthwashsingle/></MainLayout>}/>
        
        <Route path='/perfumes' element={<MainLayout><Perfumes/></MainLayout>}/>
        <Route path='/perfumessinglepage/:id' element={<MainLayout><Perfumessingle/></MainLayout>}/>
        
        <Route path='/sanitary' element={<MainLayout><Sanitary/></MainLayout>}/>
        <Route path='/sanitarysinglepage/:id' element={<MainLayout><Sanitarysingle/></MainLayout>}/>
        
        <Route path='/saving' element={<MainLayout><Saving/></MainLayout>}/>
        <Route path='/savingsinglepage/:id' element={<MainLayout><Savingsingle/></MainLayout>}/>
        
        <Route path='/skincare' element={<MainLayout><Skincare/></MainLayout>}/>
        <Route path='/skincaresinglepage/:id' element={<MainLayout><Skincaresingle/></MainLayout>}/>
        
        <Route path='/shampo' element={<MainLayout><Shampo/></MainLayout>}/>
        <Route path='/shamposinglepage/:id' element={<MainLayout><Shamposingle/></MainLayout>}/>
        
        <Route path='/showerge' element={<MainLayout><Showergel/></MainLayout>}/>
        <Route path='/showergesinglepage/:id' element={<MainLayout><Showergelsingle/></MainLayout>}/>
        
        <Route path='/soapbar' element={<MainLayout><Soapbar/></MainLayout>}/>
        <Route path='/soapbarsinglepage/:id' element={<MainLayout><Soapbarsingle/></MainLayout>}/>
        
        <Route path='/toothbrush' element={<MainLayout><Toothbrush/></MainLayout>}/>
        <Route path='/toothbrushsinglepage/:id' element={<MainLayout><Toothbrushsingle/></MainLayout>}/>
         
        <Route path='/toothpast' element={<MainLayout><Toothpast/></MainLayout>}/>
        <Route path='/toothpastsinglepage/:id' element={<MainLayout><Toothpastsingle/></MainLayout>}/>
         
        <Route path='/deodrant' element={<MainLayout><Deodrant/></MainLayout>}/>
        <Route path='/deodrantsinglepage/:id' element={<MainLayout><Deodrantsingle/></MainLayout>}/>

        <Route path='/africa' element={<MainLayout><Africa/></MainLayout>}/>
        <Route path='/africasinglepage/:id' element={<MainLayout><Africasingle/></MainLayout>}/>
        
        <Route path='/fathersday' element={<MainLayout><Fatherdays/></MainLayout>}/>
        <Route path='/fathersdaysinglepage/:id' element={<MainLayout><Fatherdayssingl/></MainLayout>}/> 
        
        <Route path='/framsmirror' element={<MainLayout><Framsmirror/></MainLayout>}/>
        <Route path='/framsmirrorsinglepage/:id' element={<MainLayout><Framsmirrorsingl/></MainLayout>}/> 
        
        <Route path='/giftwareh' element={<MainLayout><Giftwarehome/></MainLayout>}/>
        <Route path='/giftwarehsinglepage/:id' element={<MainLayout><Giftwarehomesingl/></MainLayout>}/> 
        
        <Route path='/incense' element={<MainLayout><Incense/></MainLayout>}/>
        <Route path='/incensesinglepage/:id' element={<MainLayout><Incensesingl/></MainLayout>}/>
        
        <Route path='/memorial' element={<MainLayout><Memorials/></MainLayout>}/>
        <Route path='/memorialsinglepage/:id' element={<MainLayout><Memorialssingl/></MainLayout>}/>
      </Routes>
      </CartProvider>
    </>
  );
};

export default App;
