import { createPortal } from 'react-dom';
import ModalStyle from '../styles/Modal.styled';
import Order from './Order';

const Modal = ({ choices, modal, setIsModalOpen }: any) => {
  const modalRef: any = document.getElementById('modal');
  const bodyHeight = document.body?.scrollHeight;
  console.log(modal);

  return createPortal(
    <ModalStyle>
      
        <div className="container">
          <div className="heading">
            <h1>Order summary</h1>
          </div>
          <div className="body">
            <p className="summary">
              "I drink my coffee as <span>{choices.preferences}</span>, with a{' '}
              <span>{choices.beanType}</span> type of bean.{' '}
              <span>{choices.quantity}</span> ground a la{' '}
              <span>{choices.grindOption}</span>, sent to me{' '}
              <span>{choices.deliveries}</span>"
            </p>
            <p className="guide">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.{' '}
            </p>
            <div>
              <p>$14.00/mo</p>
              <button onClick={() => setIsModalOpen(prev => !prev)}>Checkout</button>
            </div>
          </div>
      </div>
    </ModalStyle>,
    modalRef
  );
};

export default Modal;
