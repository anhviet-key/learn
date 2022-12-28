import Cards from '../../assets/desktop/isocard.svg';
const Slogan = () => {
  return (
    <section className="relative text-[36px] my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-[48px] text-shadow-two">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p>
          Eran<span className="text-purple-300"> More </span>
        </p>
        <p children> Pay less </p>
        <button className="text-[20px] px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-lg active:bg-pink-500 hover:bg-pink-500 transition-all duration-300 md:text-[24px] md:px-8 md:py-[8px]">
          Start
        </button>
      </div>
      <div className="mt-[69px] md:absolute md:right-[-5rem]">
        <img src={Cards} alt="Credit cả" />
      </div>
    </section>
  );
};

export default Slogan;
