import { Product } from './models/product.js';

const listProduct = document.querySelector('.list-products');

// function render list product
const renderListProduct = (products) => {
  const listContainer = products
    .map((product) => {
      return `<li class="list-item col-sm-6 col-3">
          <a href="" class="card">
            <div class="card-add-product">
                <button class="card-button">Add to cart</button>
            </div>
            <div class="card-image">
              <img src="./assets/imgs/dog-image.png" alt="card-image" />
            </div>
            <div class="card-content">
              <h3 class="card-title">${product.title}</h3>
              <p class="card-information">
                <span class="card-variant">
                  Gene:
                  <span class="card-option">${product.gender}</span>
                </span>
                <span class="dot">&#x2022;</span>
                <span class="card-variant">
                  Age:
                  <span class="card-option">${product.age} months</span>
                </span>
              </p>
              <p class="card-price">${product.price} VND</p>
            </div>
          </a>
    </li>`;
    })
    .join('');
  listProduct.innerHTML = listContainer;
};

const mapDataToProduct = (data) => {
  return data.map((item) => new Product(item));
};

// fetch data pets
const fetchProductData = () => {
  fetch('data/card-pet.json')
    .then((response) => response.json())
    .then((data) => {
      const products = mapDataToProduct(data);
      renderListProduct(products);
    })
    .catch((error) => console.error('Error loading data:', error));
};

fetchProductData();
