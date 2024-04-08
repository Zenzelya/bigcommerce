import PageManager from '../page-manager';
import queryManager from './queries/store';

const selectElement = document.getElementById('api-request-type-select');
const dataInput = document.getElementById('api-form-query-value');
const resultBlock = document.querySelector('.demo-api-result-block .result-block');
const form = document.querySelector('.demo-api-form');
const loginBlock = document.getElementById('login-as-customer');

export default class TestApi extends PageManager {
    constructor() {
        super();

        this.settings = {
            secToken: '',
            apiMethod: '',
        };
        this.renderManager = {
            getWebsiteData: (data) => { this.renderWebSiteData(data); },
            getCustomerInfo: (data) => { this.renderCustomerData(data); },
            getProductBySku: (data) => { this.renderProduct(data); },
            getProductInventoryById: (data) => { this.renderProductInventory(data); },
            loginAsCustomer: (data) => { this.renderloginCustomer(data); },
            getShippingAddress: (data) => { this.renderShippingAddress(data); },
        };
        this.inputManager = {
            getWebsiteData: () => { this.renderInputs('none', 'block'); },
            getCustomerInfo: () => { this.renderInputs('none', 'none'); },
            getProductBySku: () => { this.renderInputs('block', 'none'); },
            getProductInventoryById: () => { this.renderInputs('none', 'block'); },
            loginAsCustomer: () => { this.renderInputs('block', 'none'); },
            getShippingAddress: () => { this.renderInputs('none', 'none'); },
        };
    }

    onReady() {
        this.settings.apiMethod = selectElement.value;
        this.settings.secToken = form.dataset.token;
        this.renderInputs('none', 'none');
        selectElement.addEventListener('change', this.handleChange.bind(this));
        form.addEventListener('submit', this.handleSubmit.bind(this));
    }
    handleChange(e) {
        dataInput.value = '';
        this.settings.apiMethod = e.target.value;
        this.inputManager[this.settings.apiMethod]();
    }
    handleSubmit(e) {
        const id = dataInput.value || 0;
        const login = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        e.stopPropagation();
        e.preventDefault();
        this.sendRequest(queryManager[selectElement.value](id, login, password));
    }
    sendRequest(query) {
        const _self = this;
        this.resetContent();

        fetch('/graphql', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${_self.settings.secToken}`, // use auto-generated token
            },
            body: JSON.stringify({
                query,
            }),
        })
            .then(res => res.json())
            .then(data => {
                _self.renderManager[this.settings.apiMethod](data);
            })
            .catch(error => console.error(error));
    }
    resetContent() {
        resultBlock.innerHTML = '<h2>Loading...</h2>';
    }
    renderWebSiteData(data) {
        const { url, contact } = data.data.site.settings;
        contact.urlr = url.vanityUrl;
        resultBlock.innerHTML = this.generateList(contact);
    }
    renderCustomerData(data) {
        const { customer } = data.data;

        resultBlock.innerHTML = this.generateList(customer);
    }
    renderProduct(data) {
        if (data.data.site.product === null) {
            resultBlock.innerHTML = '<h3>No product with this SKU</h3>';
            return;
        }

        const {
            path, sku, name, defaultImage,
        } = data.data.site.product;
        let content;

        content = '<div class="product">';
        content += `<a href="${path}">`;
        content += `<img src="${defaultImage.url}">`;
        content += `<p>${name}</p>`;
        content += `<p>${sku}</p>`;
        content += '</a></div>';
        resultBlock.innerHTML = content;
    }
    renderProductInventory(data) {
        if (data.data.site.product === null) {
            resultBlock.innerHTML = '<h3>No product with this SKU</h3>';
            return;
        }

        const { inventory } = data.data.site.product;
        const stock = inventory.isInStock ? 'In Stock' : 'Out of stock';
        let content = '<ul>';
        content += `<li><b>${stock}</b></li>`;
        content += `<li><b>AvailableToSell: </b><b>${inventory.aggregated.availableToSell}</b></li>`;
        content += `<li><b>WarningLevel: </b><b>${inventory.aggregated.warningLevel}</b></li>`;
        content += '</ul>';
        resultBlock.innerHTML = content;
    }
    renderloginCustomer(data) {
        if (data.errors) {
            resultBlock.innerHTML = data.errors[0].message;
            return;
        }
        resultBlock.innerHTML = data.data.login.result;
        window.location.href = '/test-api/';
    }
    renderShippingAddress(data) {
        if (data.data.site.checkout === null) {
            resultBlock.innerHTML = 'Checkout not created';
            return;
        }

        const { address } = data.data.site.checkout.shippingConsignments[0];

        resultBlock.innerHTML = this.generateList(address);
    }
    generateList(data) {
        let content = '<ul>';
        Object.keys(data).forEach(element => {
            content += `<li><span>${element}: </span><b>${data[element]}</b></li>`;
        });
        content += '</ul>';
        return content;
    }
    renderInputs(login, sku) {
        dataInput.style.display = sku;
        loginBlock.style.display = login;
    }
}
