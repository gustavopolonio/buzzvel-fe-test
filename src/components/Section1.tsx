export function Section1() {
  return (
    <section className="pt-12 pb-[358px] text-center relative sm:pb-12">
      <span className="padded text-amber-600 font-medium lg:text-xl">No more waste</span>
      <h2 className="padded mt-2 font-bold text-[32px] leading-9 lg:text-[56px] lg:leading-[60px] lg:font-extrabold">Pick the Sun</h2>
      <p className="padded mt-6 sm:w-[80%] sm:mx-auto sm:max-w-[900px] lg:text-xl">
        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed
        turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris
        elementum sollicitudin.
      </p>
      <img className="absolute left-0 -z-10 sm:w-[24%]" src="/images/feature1-left-circle.png" alt="" />
      <img className="absolute right-0 -z-10 sm:w-[10%]" src="/images/feature1-right-circle.png" alt="" />
      <div
        className="absolute bottom-12 right-0 w-[358px] sm:static sm:mx-auto sm:mt-16 sm:w-[80%] sm:max-w-screen-2xl"
      >
        <img
          className="w-full h-auto shadow-image"
          src="/images/feature1.png"
          alt="Dashboard design"
          loading="lazy"
        />
      </div>
    </section>
  );
}
