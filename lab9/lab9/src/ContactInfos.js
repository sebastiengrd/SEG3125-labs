import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ContactInfos = () => {
    return ( 
        <div className="contact-infos-container" style={{
            position: "absolute",
            top: "30vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
        }}>

            <Form>
                <h2 style={{textAlign: "center"}}>Contact infos</h2>

                <p style={{textAlign : "center"}}>Please Enter your contact informations.</p>
                
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Province</Form.Label>
                        <select name="tag" id="add_tag" className="form-control selectpicker">
                            <option>QC</option>
                            <option>ON</option><option>3</option>
                        </select>

                    </Form.Group>

                    
                </Row>

                <Button className="generic-button">Order Now</Button>

                

            </Form>
        </div>
     );
}
 
export default ContactInfos;