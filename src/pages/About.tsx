import AboutStyled from '../styles/About.styled';
import UKIllustration from '/assets/about/desktop/illustration-uk.svg';
import CanadaIllustration from '/assets/about/desktop/illustration-canada.svg';
import AustraliaIllustration from '/assets/about/desktop/illustration-australia.svg';

const About = () => {
  return (
    <AboutStyled>
      <section className="hero">
        <h2 className="hero__title">About us</h2>
        <p className="hero__description">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </section>

      <section className="commitment">
        <img
          className="commitment__image"
          src="/assets/about/mobile/image-commitment.jpg"
          alt="Our commitment image"
        />
        <div className="commitment__info">
          <h3 className="commitment__subheading">Our commitment</h3>
          <p className="commitment__description">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>

      <section className="quality">
        <div className="quality__image"></div>
        <div className="quality__info">
          <h3 className="quality__subheading">Uncompromising quality</h3>
          <p className="quality__description">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </section>

      <section className="headquarters">
        <h3 className="headquarters__subheading">Our headquarters</h3>
        <div className="headquarters__main-wrapper">
          <div className="headquarters__item">
            <img className='headquarters__image' src={UKIllustration} alt="United Kingdom illustration" />
            <div className="headquarters__secondary-wrapper">
              <h3 className="headquarters__name">United Kingdom</h3>
              <div className="headquarters__info">
                <p className="headquarters__description">68 Asfordby Rd</p>
                <p className="headquarters__description">Alcaston</p>
                <p className="headquarters__description">SY6 1YA</p>
                <p className="headquarters__description">+44 1241 918425</p>
              </div>
            </div>
          </div>

          <div className="headquarters__item">
            <img src={CanadaIllustration} alt="Canada illustration" />
            <div className="headquarters__secondary-wrapper">
              <h3 className="headquarters__name">Canada</h3>
              <div className="headquarters__info">
                <p className="headquarters__description">
                  1528 Eglinton Avenue
                </p>
                <p className="headquarters__description">Toronto</p>
                <p className="headquarters__description">Ontario M4P 1A6</p>
                <p className="headquarters__description">+1 416 485 2997</p>
              </div>
            </div>
          </div>

          <div className="headquarters__item">
            <img src={AustraliaIllustration} alt="Australia illustration" />
            <div className="headquarters__secondary-wrapper">
              <h3 className="headquarters__name">Australia</h3>
              <div className="headquarters__info">
                <p className="headquarters__description">36 Swanston Street</p>
                <p className="headquarters__description">Kewell</p>
                <p className="headquarters__description">Victoria</p>
                <p className="headquarters__description">+61 4 9928 3629</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AboutStyled>
  );
};

export default About;
