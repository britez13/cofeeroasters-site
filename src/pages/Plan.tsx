import React, { useRef } from 'react';
import PlanStyle from '../styles/Plan.styled';

const Plan = () => {

  const ref1: any = useRef(null);

  const handleVisibility = () => {
    // console.log(ref1.current.setAttribute('data-visible', 'true'))
    console.log(ref1.current.getAttribute('data-visible'))
    
    if(ref1.current.getAttribute('data-visible') === 'false') {
      ref1.current.setAttribute('data-visible', 'true');
    }
    else {
      ref1.current.setAttribute('data-visible', 'false');
    }
  }

  return (
    <PlanStyle>
      <section className="hero">
        <h3 className="hero__title">Create a plan</h3>
        <p className="hero__description">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>

      <section className="process">
        <div className="process__first-wrapper">
          <div className="process__circle1"></div>
          <div className="process__circle2"></div>
          <div className="process__circle3"></div>
        </div>
        <div className="process__second-wrapper">
          <div className="process__item">
            <h3 className="process__number">01</h3>
            <h4 className="process__name">Pick your coffee</h4>
            <p className="process__description">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="process__item">
            <h3 className="process__number">02</h3>
            <h4 className="process__name">Choose the frequency</h4>
            <p className="process__description">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="process__item">
            <h3 className="process__number">03</h3>
            <h4 className="process__name">Receive and enjoy!</h4>
            <p className="process__description">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </section>

      <section className="options">
        <div className="options__item">
          <button className="options__button" onClick={handleVisibility}>
            <h3 className="options__subheading">
              How do your drink your cofee?
            </h3>
          </button>
          <div className="options__type" data-visible="false" ref={ref1}>
            <button className="options__name">
              <h3 className="options__h3">Capsule</h3>
              <p className="options__description">
                kdlfjdldfjkdljkhkkjhkhkhkhkfjsdalkfjdkjfdf
              </p>
            </button>
            <button className="options__name">
              <h3 className="options__h3">Filter</h3>
              <p className="options__description">
                kdfkkfdfldjfdlkkhkjhkjhkhkjfldjkflakldjf
              </p>
            </button>
            <button className="options__name">
              <h3 className="options__h3">Espresso</h3>
              <p className="options__description">
                kdfklfdkfladflklkhkjhkjhdshkjhkjhkjfldsakfjldjf
              </p>
            </button>
            {/* <button></button>
            <button></button> */}
          </div>
        </div>
      </section>
    </PlanStyle>
  );
};

export default Plan;
