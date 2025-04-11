import { Cart } from './models/cart.js';
import { CartItem } from './models/cartItem.js';

// map data cart item
const mapDataToCartItem = (data) => {
  return data.map((item) => new CartItem(item));
};

// create function render list cart item
const renderListCartItem = (data) => {
  const cartItem = mapDataToCartItem(data.cartItem);
  return new Cart({
    total: data?.total,
    quantity: data?.quantity,
    cartItem: cartItem,
  });
};

// render UI cart items
const renderCart = (cart) => {
  const cartContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('total-price');
  const cartItemList = cart.cartItem
    .map((item) => {
      return `
            <tr class="cart-list">
                <td class="cart-product-title">${item.title}</td>
                <td class="cart-product-price">${item.price}</td>
                <td class="cart-product-quantity">${item.quantity}</td>
                <td class="cart-product-total">${
                  item.price * item.quantity
                }</td>
            </tr>
        `;
    })
    .join('');
  cartTotal.innerHTML = `${cart.total}`;
  cartContainer.innerHTML = cartItemList;
};

// Fetch cart data from JSON file
const fetchCartData = () => {
  fetch('data/cart.json')
    .then((response) => response.json())
    .then((data) => {
      const cart = renderListCartItem(data);
      renderCart(cart);
    })
    .catch((err) => console.error('Fetch cart data failed:', err));
};

// call fetch data
fetchCartData();
