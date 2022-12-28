import { FaUser } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import { BsFillCreditCardFill } from 'react-icons/bs';
import checkIconMobile from '../../assets/mobile/checkpoint.svg';

const Contents = () => {
  const customer = useSpring({ customers: 10245, from: 0 });
  const card = useSpring({ cards: 12045, from: 0 });

  return (
    <section className="md:flex px-0 text-shadow-two">
      <div className="font-boild flex flex-col bg-gradient-to-b shadow-2xl rounded-[24px] from-white/40 to-transparent md:px-24 md:w-[35%] md:ml-[70px] items-center">
        <div className="mt-16 gap-8 flex md:self-start">
          <FaUser size={'22px'} className="mt-[12px]" />
          <div className="text-[26px] md:text-[32px]">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-[13px] md:text-[26px] font-semibold mb-[36px]">
              Customer
            </p>
          </div>
        </div>
        <div className="gap-8 flex md:self-start mb-16">
          <BsFillCreditCardFill size={'22px'} className="mt-[12px]" />
          <div className="text-[26px] md:text-[32px]">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-[13px] md:text-[26px] font-semibold mb-[36px]">
              Credit Card
            </p>
          </div>
        </div>
      </div>
      <div className="text-[13px] flex flex-col w-[100%] mt-[90px] font-semibold md:mt-0 md:ml-[17%] md:text-[16px]">
        <div className="check-contents">
          <img src={checkIconMobile} alt="check point" />
          <p>1. Card reports send to your phone every week</p>
        </div>
        <div className="check-contents">
          <img src={checkIconMobile} alt="check point" />
          <p>2. Card reports send to your phone every week</p>
        </div>
        <div className="check-contents">
          <img src={checkIconMobile} alt="check point" />
          <p>3. Card reports send to your phone every week</p>
        </div>
      </div>
    </section>
  );
};
export default Contents;
