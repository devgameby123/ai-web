import "./home.css"
import "./globals.css"
import Card from '../../components/Card';
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
      <Carousel className='top-gap' images={images} />
      <div className='container-content'>
        <Card image="/Card/co1.jpg"/>
        <Card image="/Card/co1.jpg"/>
        <Card image="/Card/co1.jpg"/>
      </div>
    </>
  )
}
