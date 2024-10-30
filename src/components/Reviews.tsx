import { ArrowRight } from 'lucide-react';
import { Button } from './elements/Button';
import { Carousel } from './elements/Carousel';

export function Reviews() {
  const slidesData = [
    {
      content: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      author: {
        avatarUrl: '/images/review1.png',
        name: 'Jane Cooper',
        about: '10KWh',
      },
    },
    {
      content: 'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.',
      author: {
        avatarUrl: '/images/review2.png',
        name: 'Ralph Edwards',
        about: '32KWh',
      },
    },
    {
      content: 'Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.',
      author: {
        avatarUrl: '/images/review3.png',
        name: 'Courtney Henry',
        about: '6KWh',
      },
    },
    {
      content: 'Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.',
      author: {
        avatarUrl: '/images/review4.png',
        name: 'Cameron Williamson',
        about: '12KWh',
      },
    },
    {
      content: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      author: {
        avatarUrl: '/images/review2.png',
        name: 'Jane Siled',
        about: '10KWh',
      },
    },
  ];

  return (
    <section className="py-12 flex flex-col bg-purple-900">
      <div className="padded md:flex md:items-center md:gap-6">
        <div className="flex flex-col items-center text-center md:items-start md:text-start">
          <span className="text-amber-300 font-medium lg:text-xl">Join other Sun harvesters</span>
          <h2 className="text-white mt-2 font-bold text-[32px] leading-9 lg:text-[56px] lg:leading-[60px] lg:font-extrabold">Make something awesome</h2>
          <p className="my-6 text-white sm:w-[80%] lg:text-xl">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis
            semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <Button className="mx-auto md:flex-shrink-0">
          Request a Quote
          <ArrowRight />
        </Button>
      </div>
      <Carousel slides={slidesData} />
    </section>
  );
}
