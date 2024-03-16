import { Card } from "react-bootstrap"
import MyNavbar from "../components/Navbar/Navbar"


function About(){
    return <>
        <MyNavbar/>
        <Card>
            <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                    The Government Polytechnic, Masabtank is located at the heart of the city of Hyderabad, Telangana state. 
                    This institution is one of the oldest polytechnics in the state and was established in 1923 with disciplines of Electrical & Mechanical. 
                    It was Originally named as Osmania Central Technical College and was located in the Mint Compound at Saifabad. In 1931, it was renamed as Osmania Technical College. 
                    The institution’s name was changed to Government Polytechnic in 1954 after independence and technical courses were introduced in four branches of study: Automobile, Civil, Electrical and Mechanical. 
                    In 1957, a course in the branch of Tele communications (Electronics) was added. The institution was shifted to the present campus at Masabtank in the academic year 1960-61. 
                    Subsequently, Diploma in Pharmacy was introduced in 1971-72. Later Diploma in Computers was introduced in 1986-87.
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}


export default About