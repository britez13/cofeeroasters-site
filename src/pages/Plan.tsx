import { useState } from 'react';
import Modal from '../components/Modal';
import Order from '../components/Order';
import PlanStyle from '../styles/Plan.styled';

const Plan = () => {
  const [choices, setChoices] = useState({
    preferences: '',
    beanType: '',
    quantity: '',
    grindOption: '',
    deliveries: '',
  });
  const [isAccordionOpen, setIsAccordionOpen] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDisplay = (e: any) => {
    if (e.target.dataset.accordionPosition === 'first') {
      if (isAccordionOpen.first) {
        setIsAccordionOpen((prev) => ({ ...prev, first: false }));
      } else {
        setIsAccordionOpen((prev) => ({ ...prev, first: true }));
      }
    } else if (e.target.dataset.accordionPosition === 'second') {
      if (isAccordionOpen.second) {
        setIsAccordionOpen((prev) => ({ ...prev, second: false }));
      } else {
        setIsAccordionOpen((prev) => ({ ...prev, second: true }));
      }
    } else if (e.target.dataset.accordionPosition === 'third') {
      if (isAccordionOpen.third) {
        setIsAccordionOpen((prev) => ({ ...prev, third: false }));
      } else {
        setIsAccordionOpen((prev) => ({ ...prev, third: true }));
      }
    } else if (e.target.dataset.accordionPosition === 'fourth') {
      if (isAccordionOpen.fourth) {
        setIsAccordionOpen((prev) => ({ ...prev, fourth: false }));
      } else {
        setIsAccordionOpen((prev) => ({ ...prev, fourth: true }));
      }
    } else if (e.target.dataset.accordionPosition === 'fifth') {
      if (isAccordionOpen.fifth) {
        setIsAccordionOpen((prev) => ({ ...prev, fifth: false }));
      } else {
        setIsAccordionOpen((prev) => ({ ...prev, fifth: true }));
      }
    }
  };

  let getSiblings = function (e: any) {
    // for collecting siblings
    let siblings: any = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
      return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };

  const getSpanClassName = (accordionPosition: any, choiceSelected: string) => {
    const valueToCheck = isAccordionOpen[`${accordionPosition}`];

    if (
      isAccordionOpen[`${accordionPosition}`] &&
      choices[`${choiceSelected}`]
    ) {
      return 'selected';
    } else if (
      !isAccordionOpen[`${accordionPosition}`] &&
      choices[`${choiceSelected}`]
    ) {
      return 'selected close';
    } else {
      return '';
    }
  };

  const handleChange = (e: any) => {
    // console.log(e.target.parentElement.className = "active")

    e.target.parentElement.className = 'active';

    const parentContainer = e.target.parentElement;
    // const nextSiblings = parentContainer.nextElementSibling;
    // const previousSiblings = parentContainer.previousElementSibling;

    const siblings = getSiblings(parentContainer);

    siblings.forEach((item: any) => {
      item.classList.remove('active');
    });

    if (e.target.name === 'preferences') {
      setChoices((prev) => ({ ...prev, preferences: e.target.value }));
    } else if (e.target.name === 'bean type') {
      setChoices((prev) => ({ ...prev, beanType: e.target.value }));
    } else if (e.target.name === 'quantity') {
      setChoices((prev) => ({ ...prev, quantity: e.target.value }));
    } else if (e.target.name === 'grind option') {
      setChoices((prev) => ({ ...prev, grindOption: e.target.value }));
    } else if (e.target.name === 'deliveries') {
      setChoices((prev) => ({ ...prev, deliveries: e.target.value }));
    }
  };

  const handleSubmit = (e: any) => {

    e.preventDefault()

    if (
      choices.preferences &&
      choices.beanType &&
      choices.quantity &&
      choices.grindOption &&
      choices.deliveries
    ) {
      setIsModalOpen(true);
    }
  };

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
        <div className="inside-nav">
          <ol>
            <li>
              <a href="#preferences">
                <span className={getSpanClassName('first', 'preferences')}>
                  01
                </span>
                <p className={isAccordionOpen.first ? 'active' : ''}>
                  Preferences
                </p>
              </a>
            </li>
            <li>
              <a href="#beanType">
                <span className={getSpanClassName('second', 'beanType')}>
                  02
                </span>
                <p className={isAccordionOpen.second ? 'active' : ''}>
                  Bean Type
                </p>
              </a>
            </li>
            <li>
              <a href="#quantity">
                <span className={getSpanClassName('third', 'quantity')}>
                  03
                </span>
                <p className={isAccordionOpen.third ? 'active' : ''}>
                  Quantity
                </p>
              </a>
            </li>
            <li>
              <a href="#grindOption">
                <span className={getSpanClassName('fourth', 'grindOption')}>
                  04
                </span>
                <p className={isAccordionOpen.fourth ? 'active' : ''}>
                  Grind Option
                </p>
              </a>
            </li>
            <li>
              <a href="#deliveries">
                <span className={getSpanClassName('fifth', 'deliveries')}>
                  05
                </span>
                <p className={isAccordionOpen.fifth ? 'active' : ''}>
                  Deliveries
                </p>
              </a>
            </li>
          </ol>
        </div>

        <form id="form">
          <fieldset>
            <legend
              id="preferences"
              data-accordion-position="first"
              onClick={handleDisplay}
            >
              How do you drink your cofee?
            </legend>

            <div
              className={
                isAccordionOpen.first
                  ? 'radio-container active'
                  : 'radio-container'
              }
            >
              <label htmlFor="capsule">
                <h3>Capsule</h3>
                <p>Compatible with Nespresso systems and similar brewers</p>
                <input
                  name="preferences"
                  id="capsule"
                  type="radio"
                  value="Capsule"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="filter">
                <h3>Filter</h3>
                <p>
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
                <input
                  name="preferences"
                  id="filter"
                  type="radio"
                  value="Filter"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="espresso">
                <h3>Espresso</h3>
                <p>
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
                <input
                  name="preferences"
                  id="espresso"
                  type="radio"
                  value="Espresso"
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend
              id="beanType"
              data-accordion-position="second"
              onClick={handleDisplay}
            >
              What type of cofee?
            </legend>

            <div
              className={
                isAccordionOpen.second
                  ? 'radio-container active'
                  : 'radio-container'
              }
            >
              <label htmlFor="single origin">
                <h3>Single origin</h3>
                <p>
                  Distinct, high quality coffee from a specific family-owned
                  farm
                </p>
                <input
                  name="bean type"
                  id="single origin"
                  type="radio"
                  value="Single Origin"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="decaf">
                <h3>Decaf</h3>
                <p>
                  Just like regular coffee, except the caffeine has been removed
                </p>
                <input
                  name="bean type"
                  id="decaf"
                  type="radio"
                  value="Decaf"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="blended">
                <h3>Blended</h3>
                <p>
                  Combination of two or three dark roasted beans of organic
                  coffees
                </p>
                <input
                  name="bean type"
                  id="blended"
                  type="radio"
                  value="Blended"
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend
              id="quantity"
              data-accordion-position="third"
              onClick={handleDisplay}
            >
              How much would you like?
            </legend>

            <div
              className={
                isAccordionOpen.third
                  ? 'radio-container active'
                  : 'radio-container'
              }
            >
              <label htmlFor="250g">
                <h3>250g</h3>
                <p>
                  Perfect for the solo drinker. Yields about 12 delicious cups.
                </p>
                <input
                  name="quantity"
                  id="250g"
                  type="radio"
                  value="250g"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="500g">
                <h3>500g</h3>
                <p>
                  Perfect option for a couple. Yields about 40 delectable cups.
                </p>
                <input
                  name="quantity"
                  id="500g"
                  type="radio"
                  value="500g"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="1000g">
                <h3>1000g</h3>
                <p>
                  Perfect for offices and events. Yields about 90 delightful
                  cups.
                </p>
                <input
                  name="quantity"
                  id="1000g"
                  type="radio"
                  value="1000g"
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend
              id="grindOption"
              data-accordion-position="fourth"
              onClick={handleDisplay}
            >
              Want us to grind them?
            </legend>

            <div
              className={
                isAccordionOpen.fourth
                  ? 'radio-container active'
                  : 'radio-container'
              }
            >
              <label htmlFor="wholebean">
                <h3>Wholebean</h3>
                <p>Best choice if you cherish the full sensory experience</p>
                <input
                  name="grind option"
                  id="wholebean"
                  type="radio"
                  value="Wholebean"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="filter2">
                <h3>Filter</h3>
                <p>
                  For drip or pour-over coffee methods such as V60 or Aeropress
                </p>
                <input
                  name="grind option"
                  id="filter2"
                  type="radio"
                  value="Filter"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="cafetiere">
                <h3>Cafetiére</h3>
                <p>
                  Course ground beans specially suited for french press coffee
                </p>
                <input
                  name="grind option"
                  id="cafetiere"
                  type="radio"
                  value="Cafetiére"
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend
              id="deliveries"
              data-accordion-position="fifth"
              onClick={handleDisplay}
            >
              How often should we deliver?
            </legend>

            <div
              className={
                isAccordionOpen.fifth
                  ? 'radio-container active'
                  : 'radio-container'
              }
            >
              <label htmlFor="every week">
                <h3>Every week</h3>
                <p>$14.00 per shipment. Includes free first-class shipping.</p>
                <input
                  name="deliveries"
                  id="every week"
                  type="radio"
                  value="Every week"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="every 2 weeks">
                <h3>Every 2 weeks</h3>
                <p>$17.25 per shipment. Includes free priority shipping.</p>
                <input
                  name="deliveries"
                  id="every 2 weeks"
                  type="radio"
                  value="Every 2 weeks"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="every month">
                <h3>Every month</h3>
                <p>$22.50 per shipment. Includes free priority shipping.</p>
                <input
                  name="deliveries"
                  id="every month"
                  type="radio"
                  value="Every month"
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>

          <Order choices={choices} />

          <button className="submit-btn" onClick={handleSubmit}>
            Create my plan!
          </button>
        </form>
      </section>

      {/* <Modal
        choices={choices}
        modal={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      /> */}

      {isModalOpen && <Modal choices={choices} setIsModalOpen={setIsModalOpen} />}
    </PlanStyle>
  );
};

export default Plan;
