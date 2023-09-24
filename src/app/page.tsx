import "./home.css"
import "./globals.css"
import Card from '../../components/Card';
import Card2 from '../../components/Card2';
import Carousel from '../../components/Carousel'


const images = [
  '/image1.jpg',
  '/image2.jpg',
];
const CardImage = [
  '/Card/co4.jpeg',
  '/Card/co4.jpeg',
  '/Card/co4.jpeg',
  '/Card/co4.jpeg',
]



function renderCardImage(){
    let TagImageOut = [];

    for(let i=0;i<CardImage.length;i++){
        TagImageOut.push(
          <Card2 classNameCTN="container-card2" classNameC="container-image2"  image={CardImage[i]} w={266} h={344}/>
        )
    }
    return TagImageOut;
}

export default function Home() {

  return (
    <>
      
      <Carousel className='top-gap' images={images} />
      <h1>Trending</h1>
      <div className='container-content'>
        <Card classNameCTN="container-card1" classNameC="container-image1" classNameTag="tagCategory back-color-red" image="/Card/co1.jpg"/>
        <Card classNameCTN="container-card1" classNameC="container-image1" classNameTag="tagCategory back-color-red" image="/Card/co1.jpg"/>
        <Card classNameCTN="container-card1" classNameC="container-image1" classNameTag="tagCategory back-color-red" image="/Card/co1.jpg"/>
      </div>
      <h1>COMEDY</h1>
      <div id="COMEDY" className="container-content-sm">
        {renderCardImage()}
      </div>
      <h1>HORROR</h1>
      <div id="HORROR" className="container-content-sm">
        {renderCardImage()}
      </div>
      <h1>ANIME</h1>
      <div id="ANIME" className="container-content-sm">
        {renderCardImage()}
      </div>
      <h1>SERIES</h1>
      <div id="SERIES" className="container-content-sm">
        {renderCardImage()}
      </div>
      <h1>CARTOON</h1>
      <div id="CARTOON" className="container-content-sm">
        {renderCardImage()}
      </div>
    </>
  )
}
