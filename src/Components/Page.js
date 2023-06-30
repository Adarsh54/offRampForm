import Card from 'react-bootstrap/Card';
import { useState } from "react";
import logo from './Images/AvenirBlack.svg';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CleanTextBox from './FormComponents/CleanTextBox';
import './Page.css';
import ConversionTextBox from './FormComponents/ConversionTextBox';
import PaymentMethodBox from './FormComponents/PaymentMethodBox';

function Page(props) {
    const [buy, setBuy] = useState(true);
    const [formData, setFormData] = useState({Payment : "", Name: "", Wallet: ""});  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleNext = (event) => {
        event.preventDefault();
        alert(`You Paid: ${formData.Payment}, Name: ${formData.Name}, WalletNumber: ${formData.Wallet}`);
        props.setPage(props.page + 1); 
        props.setX(1000);
        props.setPage(props.page + 1);
    };

    const handleBuy = () => setBuy(!buy);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyle = {backgroundColor: isHovered ? 'rgb(20, 217, 177)' : 'black'};

    return (
        <Card border={'success '} bg={'light'} text={'dark'} style={{height: "53rem", width: "40rem"}}>            
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Card.Img src={logo} alt="logo" style={{width: "30%"}}/>
                        </Col>
                    </Row>
                </Container>
                <br />
                <Form>
                    <Form.Group className="mb-3" controlId="formName">
                        <CleanTextBox label="You Sell: " isLabel={true}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formWallet">
                        <CleanTextBox label="You Get: " isLabel={false}/>
                        <ConversionTextBox />
                    </Form.Group>
                    <Form.Group>
                        <p>Pay Using: </p>
                    </Form.Group>
                    <Form.Group>
                        <PaymentMethodBox></PaymentMethodBox>
                    </Form.Group>
                    <Form.Group>
                        <button className='sellButton' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={buttonStyle}>Sell Crypto!</button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Page;