import React from 'react'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Shopbybrand = () => {
  return (
    <div>
       <div>
  <h2 className="shopbybrand">INDUSTRY-LEADING BRANDS</h2>
  <center><hr className="w-25" /></center> 
  <h2 className="FEATURED">FEATURED BRANDS</h2>
  <div className="container">
    <div className="row bybrn justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/Giftmakercard"> <img src="./Images/Group 49.png" alt className="featur1" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/Brighthomly"> <img src="./Images/Group 50.png" alt className="featur1" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <img src="./Images/Group 55.png" alt className="featur1" />
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <img src="./Images/Group 54.png" alt className="featur1" />
        </div>
      </div>
    </div>
    <div className="row bybrn  justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12"><div>
          <img src="./Images/Group 48.png" alt className="featur1" />
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12"><div>
          <img src="./Images/Group 46.png" alt className="featur1" />
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12"><div>
          <img src="./Images/Group 47.png" alt className="featur1" />
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12"><div>
          <img src="./Images/Group 52.png" alt className="featur1" />
        </div>
      </div>
    </div>
    <div className="row bybrn  justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <img src="./Images/Group 53.png" alt className="featur1" />
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <img src="./Images/Group 51.png" alt className="featur1" />
        </div>
      </div>
    </div>
  </div>
  {/* <h2 className="FEATURED">BRANDS INDEX</h2>
  <u className="brand"><h2 className="brand">Brands: 0-9</h2></u> */}
  {/* <div className="d-flex ms-5">
    <div><a href>
        <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/1001.jpg" className="brandlog" alt />
      </a></div>
    <div><a href>
        <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/151%20PRODUCTS.jpg" alt className="brandlog" />
      </a> </div>
  </div>
  <u className="brand"><h2 className="brand">Brands:A</h2></u>
  <div>
    <div className="d-flex ms-5">
      <div><a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/acctim.jpg" alt className="brandlog" />
        </a> </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ADDIS-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ADIDAS.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/AIRWICK.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/AIRPURE.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/58.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ANTIQUAX.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/APAC.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/59.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/AQUAFRESH.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/AJAX.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/AKZONOBEL.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ALBERTO%20BALSAM.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/AMALFI.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/AMBI%20PUR.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ARALDITE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ARIEL.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ARM%20&%20HAMMER%20.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ASEPSO.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ASEVI.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:B</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BABY%20BIO.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/70.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BAR%20KEEPERS%20FREIND.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BARRETTINE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BERGER-.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BARRETTINE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BARTOLINE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BAYLIS%20&%20HARDING.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BEAUTY%20FORMULAS.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BESTWAY.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BG.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BIC.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BIG%20D.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BIG%20K.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BIOMED-.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BOSTIK.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BOND%20IT.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BLOO.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BREVILLE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/41.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:C</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CAR%20PRIDE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CARLUBE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CARPLAN.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/62%20-%20Copy.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/41.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CBEEBIES.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/71.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/BLOO.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CHATSWORTH.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CHILTERN%20WOVE.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CIF.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CLARADENT.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CLEAN%20&%20CLEAR.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/42.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/COLGATE.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/COMFORT-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/4.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/COTTON%20TREE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CREST-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/CURVER.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:D</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/DR%20BECKMANN-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/DR%20JOHNSONS.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/D-C-FIX.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/DAEWOO.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/DAZ-.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/52.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/43.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/DOFF.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/DOMESTOS.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/78.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:E</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/E%20PACK-IT.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/63.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ECOBAG.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/37.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ELLIOTT.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ENLIVEN.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ENRICO.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/44.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ESSENTIAL-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/17.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:F</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/FABRIC%20MAGIC.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/FACE%20FACTS.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/FAIRY.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/FALCON%20ENAMEL.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/FARGRO.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/FLOELLA.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/FLOPRO.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/FROGTAPE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/FUN%20TIME.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/FUNGUS%20CLEAR.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:G</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/GARDENKRAFT.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/GARDMAN.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/GEEPAS.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/GIFTMAKER.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/GREEN%20BLADE.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:H</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/HADEN.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/14.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/46%20-%20Copy.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/64.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/HG.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:I</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/IMPERIAL%20LEATHER.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/INFAPOWER.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/INSECTO.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/INTEX.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:J</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/JUMP.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/73.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/JEYES.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/JCB.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/JVL.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:K</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/26.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/48.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/KITCHENCRAFT.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/KIWI.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/KITCHEN%20DEVILS.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:L</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/LOREAL%20MEN.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/LAY-Z.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/LENOR-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/LEVINGTON.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/LYNWOOD.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:M</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/M%20Y.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/MARIGOLD-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/MARKSMAN.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/MASTERPLAST-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/MR%20MUSCLE.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:N</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/NENUCO.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/NEUTRADOL.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/NEUTROGENA.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/NIPPON.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/NENUCO.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:O</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/O%20CUISINE-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/O%20KEEFFES.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/OMINO%20BIANCO.jpg " alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/OXFORD-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ORAL%20B.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:P</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/PAINT%20FACTORY.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/PALMERS.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/PALMOLIVE-.jpg " alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/51.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/PANASONIC-.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:Q</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/QUEEN%20OF%20CAKES.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/QUEST.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:R</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/RACAN.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/RAPIDE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ROLLS%20RAZOR.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/RTRMAX.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:S</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/SELLOTAPE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/SECHELLE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/SIMPLE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/SENSODYNE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/SPONTEX.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:T</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/TABLEAU-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/TALA-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/TAYLORS%20EYE%20WITNESS-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/TETROSYL.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/TIPP-EX-.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:U</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/UNI-COM.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/UHU-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ULTRATAPE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/32%20-%20Copy.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/33%20-%20Copy.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:V</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/VALDERMA.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/VANISH.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/VASELINE.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/69.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/veet.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:W</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/WAHL.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/WEEDOL.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/57.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/WISDOM.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/WILKINSON%20SWORD.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:X</h2></u>
    <div className="d-flex mt-5 ms-5">
    </div>
    <u className="brand"><h2 className="brand">Brands:Y</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/YARDLEY.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
    <u className="brand"><h2 className="brand">Brands:Z</h2></u>
    <div className="d-flex mt-5 ms-5">
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ZAMO.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ZERO%20IN.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ZIG%20ZAG.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ZIP-.jpg" alt className="brandlog" />
        </a>
      </div>
      <div>
        <a href>
          <img src="https://www.efghousewares.co.uk//Content/14/PageBuilderImage/ZOFLORA.jpg" alt className="brandlog" />
        </a>
      </div>
    </div>
  </div> */}
</div>
<Footer/>
    </div>
  )
}

export default Shopbybrand