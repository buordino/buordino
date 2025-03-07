const MainPhone = () => {
  return (
    <div
      className="relative  h-[335px] w-[190px]  border-4 border-black rounded-2xl bg-gray-50 "
      style={{ boxShadow: "5px 5px 2.5px 6px rgb(209, 218, 218)" }}
    >
      <div className="absolute inset-0 bg-[#F47564] rounded-[12px]">
        
      </div>
      <span className="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl block mx-auto absolute top-0 left-0 right-0" />
      <span className="absolute -right-2 top-14  border-4 border-black h-7 rounded-md" />
      <span className="absolute -right-2 bottom-36  border-4 border-black h-10 rounded-md" />
    </div>
  );
};

export default MainPhone;
