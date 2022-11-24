import { createPortal } from 'react-dom';
import ModalStyle from '../styles/Modal.styled';
import Order from './Order';

const Modal = ({ choices, modal, setIsModalOpen }: any) => {
  const modalRef: any = document.getElementById('modal');
  console.log(modal);

  return createPortal(
    <ModalStyle>
      <div className="container">
        <div className="heading">
          <h1>Order summary</h1>
        </div>
        <div className="body">
          <div className="summary">
            <p>“</p>
            {choices.preferences === 'Capsule' ? (
              <p>
                I drink my coffee using{' '}
                <span>{choices.preferences + 's '} </span>
              </p>
            ) : (
              <p>
                I drink my coffee as <span>{choices.preferences}</span>
              </p>
            )}{' '}
            <p>, whith a</p>
            <span> {choices.beanType}</span> <p> type of bean </p>
            <span> {choices.quantity}</span>{' '}
            {/* <span>{choices.grindOption}</span>, sent to me{' '} */}
            {choices.preferences === 'Capsule' ? null : (
              <p>
                ground a la
                <span> {choices.grindOption}</span>
              </p>
            )}{' '}
            <p>sent to me</p>
            <span> {choices.deliveries}</span>
            <p>.”</p>
          </div>
          <p className="guide">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{' '}
          </p>
          <div>
            <p>$14.00/mo</p>
            <button onClick={() => setIsModalOpen(false)}>Checkout</button>
          </div>
        </div>
      </div>
    </ModalStyle>,
    modalRef
  );
};

export default Modal;
