import Header from '../components/Header';
import { Link } from 'react-router-dom';
import HomeStyled from '../styles/Home.styled';
import coffeeSVG from '../assets/home/desktop/icon-coffee-bean.svg';
import giftSVG from '../assets/home/desktop/icon-gift.svg';
import truckSVG from '../assets/home/desktop/icon-truck.svg';

const Home = () => {
  return (
    <HomeStyled>
      <section className="hero">
        <div className="hero__wrapper">
          <h1 className="hero__title">Great cofee made simple.</h1>
          <p className="hero__description">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link className="hero__link" to="/subscribe">
            Create your plan
          </Link>
        </div>
      </section>

      <section className="collection">
        <h2 className="collection__title">Our collection</h2>
        <div className="collection__wrapper">
          <div className="collection__item">
            <img
              className="collection__image"
              src="../../src/assets/home/desktop/image-gran-espresso.png"
              alt="Gran Espresso image"
            />
            <div>
              <h3 className="collection__subheading">Gran espresso</h3>
              <p className="collection__description">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>

          <div className="collection__item">
            <img
              className="collection__image"
              src="../../src/assets/home/desktop/image-planalto.png"
              alt="Planalto image"
            />
            <div>
              <h3 className="collection__subheading">Planalto</h3>
              <p className="collection__description">
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </div>

          <div className="collection__item">
            <img
              className="collection__image"
              src="../../src/assets/home/desktop/image-piccollo.png"
              alt="Picollo image"
            />
            <div>
              <h3 className="collection__subheading">Picollo</h3>
              <p className="collection__description">
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry
              </p>
            </div>
          </div>

          <div className="collection__item">
            <img
              className="collection__image"
              src="../../src/assets/home/desktop/image-danche.png"
              alt="Danche image"
            />
            <div>
              <h3 className="collection__subheading">Danche</h3>
              <p className="collection__description">
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="choose">
        <h3 className="choose__subheading">Why choose us?</h3>
        <p className="choose__description">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="choose__wrapper">
          <div className="choose__item">
            <img
              className="choose__image"
              src={coffeeSVG}
              alt="Coffee bean image"
            />
            <div>
              <h4 className="choose__name">Best quality</h4>
              <p className="choose__characteristic">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>

          <div className="choose__item">
            <img className="choose__image" src={giftSVG} alt="Gift image" />
            <div>
              <h4 className="choose__name">Exclusive benefits</h4>
              <p className="choose__characteristic">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>

          <div className="choose__item">
            <img className="choose__image" src={truckSVG} alt="Truck image" />
            <div>
              <h4 className="choose__name">Free shipping</h4>
              <p className="choose__characteristic">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <h4 className="process__title">How it works</h4>
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
    </HomeStyled>
  );
};

export default Home;
