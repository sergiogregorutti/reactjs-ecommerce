import { BsFillCartFill } from 'react-icons/bs';
import './styles.scss';

function CartWidget() {
  return (
    <a href="#" class="cart-widget">
      <BsFillCartFill className="icon" />
      <span class="badge">3</span>
    </a>
  );
}

export default CartWidget;
