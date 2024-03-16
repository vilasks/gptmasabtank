import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/masabtankgpt.jpg'
function MyCarousel(){

    return <>
    
        <Carousel className='h-4'>
            <Carousel.Item>
                <img src={logo} alt='logo'/>
                <Carousel.Caption>
                    <h1 style={{color:'black'}}>First Slide</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi fugit dolores ut. Obcaecati itaque temporibus facilis tenetur velit voluptatum molestiae, ea ratione praesentium illo pariatur similique fuga in aperiam.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={logo} alt='logo'/>
                <Carousel.Caption>
                    <h1 style={{color:'black'}}>Second Slide</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi fugit dolores ut. Obcaecati itaque temporibus facilis tenetur velit voluptatum molestiae, ea ratione praesentium illo pariatur similique fuga in aperiam.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    
    </>
}

export default MyCarousel;