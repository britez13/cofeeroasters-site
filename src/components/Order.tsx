
import OrderStyle from "../styles/Order.styled"

const Order = ({choices}: any) => {
  return (
    <OrderStyle>
      <div className="order">
        <p className="subheading">Order summary</p>
        <div className="summary">
          “
          {
            !choices.preferences ? (
              <p>
                {' '}
                I drink my cofee as <span className="incomplete"></span>
              </p>
            ) : choices.preferences === 'Capsule' ? (
              <p>
                I drink my cofee using <span>{choices.preferences + 's'}</span>
              </p>
            ) : (
              <p>
                I drink my coffe as <span>{choices.preferences}</span>
              </p>
            )

            //  (
            //   " " <span>{choices.preferences}</span>
            // ) : (
            //   <span className="incomplete"></span>
            // )
          }{' '}
          , with a{' '}
          {choices.beanType ? (
            <span>{choices.beanType}</span>
          ) : (
            <span className="incomplete"></span>
          )}{' '}
          type of bean.{' '}
          {choices.quantity ? (
            <span>{choices.quantity + ' '}</span>
          ) : (
            <span className="incomplete"></span>
          )}{' '}
          {choices.preferences === 'Capsule' ? null : choices.grindOption ? (
            <p>
              ground a la <span>{choices.grindOption}</span>
            </p>
          ) : (
            <p>
              ground a la <span className="incomplete"></span>
            </p>
          )}
          , sent to me{' '}
          {choices.deliveries ? (
            <span>{choices.deliveries}</span>
          ) : (
            <span className="incomplete"></span>
          )}
          .”
        </div>
      </div>
    </OrderStyle>
  );
};

export default Order