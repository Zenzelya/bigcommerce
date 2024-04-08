export default {
    getWebsiteData: () => {return 'query MyQuery { site { settings { contact { address addressType country email phone } url { vanityUrl } } } }'},
    getCustomerInfo: () => {return 'query GetCustomer { customer { firstName lastName email entityId addressCount customerGroupId attributeCount } }'},
    getProductBySku: (id) => { return `query GetProduct { site { product(sku: "${id}") { id name path sku defaultImage { url(width: 150) } } } }`},
    getProductInventoryById: (id) => {return `query GetProductInventoryBySku { site { product(sku: "${id}") { id addToCartUrl name prices { price { formatted } } sku defaultImage { url(width: 150) } inventory { hasVariantInventory isInStock aggregated { availableToSell warningLevel } } } } }`},
    loginAsCustomer: (id, login, password) => {return `mutation LoginAsCustomer { login(email: "${login}", password: "${password}") { result } }`},
    getShippingAddress: () => { return `query MyQuery { site { checkout { shippingConsignments { address { address1 address2 city company countryCode email firstName lastName phone postalCode stateOrProvince stateOrProvinceCode } } } } }`},
};
