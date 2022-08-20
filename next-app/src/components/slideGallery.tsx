import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function SlideGallery() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <Image
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVzaCUyMHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/make-time-for-the-things-that-benefit-you-picture-id1187354788?b=1&k=20&m=1187354788&s=170667a&w=0&h=oQhtG34MXgyxvRtiby-qWyHCkj9C7fxt4XMDRvBWZt4="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
