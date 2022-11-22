
import OrderStyle from "../styles/Order.styled"

const Order = ({choices}: any) => {
  return (
    <OrderStyle>
      <div className="order">
        <p className="subheading">Order summary</p>
        <p className="summary">
          "I drink my coffee as{' '}
          {choices.preferences ? (
            <span>{choices.preferences}</span>
          ) : (
            <span className="incomplete"></span>
          )}{' '}
          , with a{' '}
          {choices.beanType ? (
            <span>{choices.beanType}</span>
          ) : (
            <span className="incomplete"></span>
          )}{' '}
          type of bean. <span>{choices.quantity}</span> ground a la{' '}
          {choices.grindOption ? (
            <span>{choices.grindOption}</span>
          ) : (
            <span className="incomplete"></span>
          )}
          , sent to me{' '}
          {choices.deliveries ? (
            <span>{choices.deliveries}</span>
          ) : (
            <span className="incomplete"></span>
          )}
          "
        </p>
      </div>
    </OrderStyle>
  );
};

export default Order