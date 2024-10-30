export function Section2() {
  return (
    <section className="py-12 text-center relative">
      <span className="padded text-amber-600 font-medium">Services</span>
      <h2 className="padded mt-2 font-bold text-[32px] leading-9">Personalized services</h2>
      <p className="padded mt-6">
        Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis
        semper id sit ornare maecenas lectus sed.
      </p>
      <ul className="padded mt-16 grid grid-cols-2 gap-12">
        <li className="flex flex-col space-y-4">
          <strong className="font-medium text-xl leading-[22px]">Et mauris</strong>
          <span>
            Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu
            accumsan tristique.
          </span>
        </li>
        <li className="flex flex-col space-y-4">
          <strong className="font-medium text-xl leading-[22px]">Eget sit</strong>
          <span>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis
            natoque leo, massa.
          </span>
        </li>
        <li className="flex flex-col space-y-4">
          <strong className="font-medium text-xl leading-[22px]">Imperdiet pellentesque</strong>
          <span>
            Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient
            tristique nulla.
          </span>
        </li>
        <li className="flex flex-col space-y-4">
          <strong className="font-medium text-xl leading-[22px]">Non libero</strong>
          <span>
            Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros,
            consectetur viverra.
          </span>
        </li>
      </ul>
      <img className="absolute left-0 -z-10" src="/images/mobile/feature2-rectangle.png" alt="" />
      <img className="mt-16 mx-auto shadow-image" src="/images/mobile/feature2.png" alt="Smartphone design" />
    </section>
  );
}
