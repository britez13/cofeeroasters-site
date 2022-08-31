import React from 'react';
import PlanStyle from '../styles/Plan.styled';

const Plan = () => {
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
      <section className='try'></section>
    </PlanStyle>
  );
};

export default Plan;
