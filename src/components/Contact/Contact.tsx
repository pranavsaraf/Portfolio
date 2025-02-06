import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Let's Connect | Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:pranavsaraf422@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:pranavsaraf422@gmail.com">pranavsaraf422@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919970706869"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919970706869">(+91) 9970706869</a>
        </div>  
      </div>
    </Container>
  )
}