import { Container,FloatingLabel,Form } from "react-bootstrap"


function LoginComponent(){
    

    return <>

        <Container>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="User Name/Email ID"/>
            </FloatingLabel>
        </Container>
    
    </>
}

export default LoginComponent