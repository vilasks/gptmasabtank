import Carousel from 'react-bootstrap/Carousel';
import logo from '../../assets/masabtankgpt.jpg';
import "./index.css";
function MyCarousel(){

    return <>
    
        <Carousel variant='dark' className='d-flex justify-content-center'>
            <Carousel.Item>
                <img style={{height: '500px'}} src={logo} alt='logo'/>
                <Carousel.Caption className='position-absolute top-50 start-50 translate-middle'>
                    <h1  style={{color:'black'}}>First Slide</h1>
                    <p style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi fugit dolores ut. Obcaecati itaque temporibus facilis tenetur velit voluptatum molestiae, ea ratione praesentium illo pariatur similique fuga in aperiam.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '500px'}} src={logo} alt='logo'/>
                <Carousel.Caption className='position-absolute top-50 start-50 translate-middle'>
                    <h1 style={{color:'black'}}>Second Slide</h1>
                    <p style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi fugit dolores ut. Obcaecati itaque temporibus facilis tenetur velit voluptatum molestiae, ea ratione praesentium illo pariatur similique fuga in aperiam.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    
    </>
}

export default MyCarousel;