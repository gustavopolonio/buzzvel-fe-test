import { ArrowRight } from 'lucide-react';
import { Button } from './elements/Button';
import { Carousel } from './elements/Carousel';

export function Reviews() {
  const slidesData = [
    {
      content: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      author: {
        avatarUrl: '/images/mobile/review1.png',
        name: 'Jane Cooper',
        about: '10KWh',
      },
    },
    {
      content: 'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.',
      author: {
        avatarUrl: '/images/mobile/review2.png',
        name: 'Ralph Edwards',
        about: '32KWh',
      },
    },
    {
      content: 'Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.',
      author: {
        avatarUrl: '/images/mobile/review3.png',
        name: 'Courtney Henry',
        about: '6KWh',
      },
    },
    {
      content: 'Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.',
      author: {
        avatarUrl: '/images/mobile/review4.png',
        name: 'Cameron Williamson',
        about: '12KWh',
      },
    },
    {
      content: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      author: {
        avatarUrl: '/images/mobile/review2.png',
        name: 'Jane Siled',
        about: '10KWh',
      },
    },
  ];

  return (
    <section className="py-12 text-center flex flex-col items-center bg-purple-900">
      <span className="padded text-amber-300 font-medium">Join other Sun harvesters</span>
      <h2 className="padded text-white mt-2 font-bold text-[32px] leading-9">Make something awesome</h2>
      <p className="padded my-6 text-white">
        Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis
        semper id sit ornare maecenas lectus sed.
      </p>
      <Button>
        Request a Quote
        <ArrowRight />
      </Button>
      <Carousel slides={slidesData} />
    </section>
  );
}
