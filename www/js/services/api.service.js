'use strict';

angular
  .module('Quesos')
  .service('API', function (baseUrl) {

    var toUrl = function (path) {
      return baseUrl+path;
    }

    this.products = toUrl('/products/:id');
    this.customers = toUrl('/customers/:id');
    this.payments = toUrl('/payments/:id');
    this.orders = toUrl('/orders/:id');
    this.order_details = toUrl('/order_details/:id');
  });