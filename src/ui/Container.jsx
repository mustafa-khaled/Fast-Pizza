function Container({ children }) {
  return (
    <div className="container mx-auto  w-full px-[20px] lg:w-[85%]">
      {children}
    </div>
  );
}

export default Container;
