// const Shopify = require('shopify-api-node');
import Shopify from 'shopify-api-node';

const shopify = new Shopify({
    shopName: "seedsofplenty.myshopify.com",
    password: "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",
    apiKey: "438b84812d2903b941ec9bf4513d5411"
});

export default shopify;
// module.exports = shopify;
