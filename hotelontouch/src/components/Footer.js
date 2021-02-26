import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import MailIcon from '@material-ui/icons/Mail';
import PublicIcon from '@material-ui/icons/Public';
import Wave from 'react-wavify'
const Container=styled.div`
  background:#0069D9;
 color:#fff;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
 padding-bottom:30px;
`
const Quick=styled.div`
@media(max-width:400px){
  text-align:center;
}
@media(max-width:800px){
  padding: 0px 10px
  margin-bottom:5px;
}
`
const About=styled.div`
@media(max-width:500px){
  padding: 0px 10px
}
p{
  margin:0;
}
`
const Contact=styled.div`
padding-bottom:25px;
@media(max-width:400px){
  text-align:center;
}
`
const Body=styled.body`
display:flex;
flex-direction:column;
`
function Footer(){
    return(
      <Body>
        <Wave fill='#0069D9'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.5,
          points: 3
        }}
 /> 
  <Container>
        <About>
                <h4>About us</h4>
                <p>In Todays Generation the Hotel Industries are changing rapidly so this platform will manage the in house needs of hotels like </p>
                <p>laundry service, Room Service Management, Bar, Restraunt Order Management.</p>
                <div className="icons">
                   <a href="https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch" style={{marginRight:'5px'}}><FontAwesomeIcon icon={faGithub} size='2x' color='white' style={{marginTop:'10px'}}/></a>
                   </div>
        </About>
           <Quick>
               <h4>Quick Links</h4>
                <a href="/" style={{color:"#fff"}}><li style={{listStyle:'none'}}>Privacy Policy</li></a>
                <a href="/"  style={{color:"#fff"}}><li style={{listStyle:'none'}}>Terms & Conditions</li></a>
                <a href="/"  style={{color:"#fff"}}><li style={{listStyle:'none'}}>Disclaimer</li></a>
          </Quick>
            <Contact>
                <h4>Contact Us</h4>
                <a href="/"  style={{color:"#fff"}}><li style={{listStyle:'none'}}><MailIcon/>ayanbiswas184@gmail.com</li></a>
                <a href="/" style={{color:"#fff"}}><li style={{listStyle:'none'}}><PublicIcon/>HotelOnTouch</li></a>
             </Contact>
  </Container>
</Body>
    );
}
export default Footer;