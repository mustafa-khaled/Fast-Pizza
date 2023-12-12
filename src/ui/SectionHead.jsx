function SectionHead({ title, description }) {
  return (
    <div className="mb-[30px] text-center font-bold">
      <p className="text-sm uppercase text-primary">{title}</p>
      <h2 className="my-[5px] text-xl font-bold uppercase sm:text-3xl">
        {description}
      </h2>
      <p className="text-xs sm:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames ac.
      </p>
    </div>
  );
}

export default SectionHead;
