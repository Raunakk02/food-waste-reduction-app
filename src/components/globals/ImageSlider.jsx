import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = ({ banners }) => {
  return (
    <Carousel infiniteLoop autoPlay showThumbs={false}>
      {banners.map((banner, i) => {
        return (
          <Image
            objectFit={'fill'}
            src={banner.image}
            key={i}
            w="100%"
            h="100%"
          />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
