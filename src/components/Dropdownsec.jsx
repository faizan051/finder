import React from 'react'
import { Button, Col, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import styled from 'styled-components'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DropdownStyle from '../Styles/DropdownStyle.css';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import { Divider } from '@material-ui/core';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import LocalAtmOutlined from '@material-ui/icons/LocalAtmOutlined';
import Proptype from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
      width: 300 + theme.spacing(3) * 2,
      
    },
    margin: {
      height: theme.spacing(3),
    },
  }));



const PrettoSlider = withStyles({
    root: {
      color: '#fd5631',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

const Dropdownsec = (props) => {
    

    
  return (

   

    <div className='d-flex main-class row '>
    <Col lg="2"  className='d-flex mx-3 mx-md-1 col-sm-12'>
    <HomeOutlinedIcon style={{fontSize:"30px", fill:"#9691a4"}}/>
    <DropdownButton id="dropdown-basic-button" title="For Rent" style={{backgroundColor: 'white'}}>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </Col>
    <Divider style={{width:"10px", color:"black", backgroundColor:"black"}}/>
    <Col lg="2" className='d-flex mx-3 mx-md-1'>
    <LocationOnOutlinedIcon style={{fontSize:"30px" ,fill:"#9691a4"}}/>
    <DropdownButton id="dropdown-basic-button" title="Location" style={{backgroundColor: 'white'}}>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </Col>
    <Divider style={{width:"10px", color:"black", backgroundColor:"black"}}/>
    <Col lg="2" className='d-flex mx-3 mx-md-1'>
    <ViewAgendaOutlinedIcon style={{fontSize:"30px", fill:"#9691a4"}}/>
    <DropdownButton id="dropdown-basic-button" title="Prototype" style={{backgroundColor: 'white'}}>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </Col>
    <Divider style={{width:"10px", color:"black", backgroundColor:"black"}}/>
    <Col lg="2" className='d-flex mx-3 md-mx-3 align-content-center'>
    <LocalAtmOutlined style={{fontSize:"30px", fill:"#9691a4"}}/>
    <Typography gutterBottom className="mx-2 memd-3 mt-1">Price</Typography>
      <PrettoSlider className="mx-2  RangeSlide align-items-center" valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} />
    </Col>
<Col lg="1" className='d-flex mx-3 me-md-5 '>
    <Button className='py-2 px-3' style={{backgroundColor:"#fd5631"}}><SearchIcon style={{color:"white"}}/></Button>
</Col>
    </div>
  )
}

export default Dropdownsec