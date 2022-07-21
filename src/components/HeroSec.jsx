import React from 'react'
import { Dropdown, Button, Form } from 'react-bootstrap'
import Fonts from '../Styles/Fonts.css'
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function valuetext(value) {
  return `${value}`;
}

const HeroSec = () => {
  const classes = useStyles();
  return (
    <div className="MainClass container-fluid">

   <div className='row position-relative Main1 mt-lg-0'>
   <div className='col-lg-6 col-md-6 mt-0'>
    <h1 className='fw-bold'>Easy way to find a perfect property</h1>
<p className="mt-lg-5 mt-md-5">We provide a complete service for the sale, purchase or rental of real estate. We have been operating more than 10 years. Search millions of apartments and houses on Finder.</p>
   </div>
<div className='col-lg-6 order-md-2 order-lg-2 mt-4 col-md-6 mt-md-5 order-1'>
    <img src='./img/hero-image.png' className='w-100 mt-md-5 mt-lg-0' alt=''/>
</div>
   </div>


<div className='row scrool container ms-lg-1 position-absolute MarginClass1 d-flex mb-md-5 mb-5'>
<div className='col-lg-2 d-flex me-lg-5 col-md-2 mt-md-3'>
<HomeIcon className='mt-2'/> <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      <span>Home</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>
  
    <div className='col-lg-2 d-flex me-lg-5 col-md-2 mt-md-3 '>
    <LocationOnIcon className='mt-2'/> <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      <span>Location</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>
    
    <div className='col-lg-2 d-flex me-lg-5 col-md-2 mt-md-3'>

    <ViewDayIcon className='mt-2'/> <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      <span>Property Type</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>
 
    <div className='col-lg-2 d-flex justify-content-between col-md-2 mt-md-3 ms-md-4'>

    <LocalAtmIcon className='mt-2 ms-md-5' />
      <div className='d-flex mt-2 w-75'>
      <span className='ms-lg-2 me-lg-5 me-md-5 ms-md-3'>Price</span>
      <Slider
        defaultValue={45}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        valueLabelDisplay="on"
      />

      </div>
      <div className="MarginClass mt-md-1 mt-0 me-5"><Button className='Sbtn'><SearchIcon/></Button></div>
    </div>
   
</div>
    </div>
  )
}

export default HeroSec