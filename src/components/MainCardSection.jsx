import React from 'react'
import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'
import MainSecStyle from '../Styles/MainSecStyle.css';


const Section = styled.div`
margin-top: 5%;
`

const MainCardSection = () => {
  return (
 <Section>
      <div className="d-flex row row-col-lg-12 ms-lg-5 ms-md-5">
      <div  className="MainCard col-lg-3 ms-lg-5 col-md-3">
      <Card className="Cardwidth col-sm-12 ">
      <Card.Img variant="top" src="./img/image2.png" />
      <Card.Body>
        <Card.Title className="text-center fw-bold fs-5 mt-4">Buy a Property</Card.Title>
        <Card.Text className='text-center fw-light'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-center'><Button className='Card-Button' >Find a Home</Button></div>
      </Card.Body>
    </Card>
      </div>

      <div className="MainCard col-lg-3 ms-lg-5 col-md-3">
      <Card className="Cardwidth ">
      <Card.Img variant="top" src="./img/image1.png" />
      <Card.Body>
        <Card.Title className="text-center fw-bold fs-5 mt-4">Sell a Property</Card.Title>
        <Card.Text className='text-center fw-light'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-center'><Button className='Card-Button' >Place an Ad</Button></div>
      </Card.Body>
    </Card>
      </div>

      <div lg="3" className="MainCard col-lg-3 ms-lg-5 col-md-3">
      <Card className="Cardwidth ">
      <Card.Img variant="top" src="./img/image3.png" />
      <Card.Body>
        <Card.Title className="text-center fw-bold fs-5 mt-4">Rent a Property</Card.Title>
        <Card.Text className='text-center fw-light'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-center'><Button className='Card-Button' >Find a Rental</Button></div>
      </Card.Body>
    </Card>
      </div>

      </div>
 </Section>
  )
}

export default MainCardSection