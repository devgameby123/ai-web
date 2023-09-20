import Carousel from '../../components/Carousel'
import Navbar from '../../components/Navbar'


export default function Home() {

  const images = [
    '/image1.jpg',
    '/image2.jpg',
  ];

  return (
    <>
      <Navbar/>
      <Carousel images={images} />
    </>
  )
}
