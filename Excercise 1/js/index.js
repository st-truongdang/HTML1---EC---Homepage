import { Product } from './models/product.js';

const listProduct = document.querySelector('.list-products');

// function render list product
const renderListProduct = (card, productList) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item', 'col-sm-6', 'col-3');
  listItem.innerHTML = `
          <a href="" class="card">
            <div class="card-add-product">
                <button class="card-button">Add to cart</button>
            </div>
            <div class="card-image">
              <img src="./assets/imgs/dog-image.png" alt="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">${card.title}</h3>
              <p class="card-information">
                <span class="card-variant">
                  Gene:
                  <span class="card-option">${card.gender}</span>
                </span>
                <span class="dot">&#x2022;</span>
                <span class="card-variant">
                  Age:
                  <span class="card-option">${card.age} months</span>
                </span>
              </p>
              <p class="card-price">${card.price} VND</p>
            </div>
          </a>
      `;
  productList.appendChild(listItem);
};

// fetch data pets
const fetchProductData = () => {
  fetch('data/card-pet.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const product = new Product(item);
        renderListProduct(product, listProduct);
      });
    })
    .catch((error) => console.error('Error loading data:', error));
};

fetchProductData();
