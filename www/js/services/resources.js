angular.module('Quesos')
  .factory('Customers', function ($resource, API) {
    return $resource(API.customers, {
      id: '@id'
    },{
      update: {
        method: 'put'
      }  
    })
  })
  .factory('Products', function ($resource, API) {
    return $resource(API.products, {
      id: '@id'
    },{
      update: {
        method: 'put'
      }
    })
  })
  .factory('Orders', function ($resource, API) {
    return $resource(API.orders, {
      id: '@id'
    },{
      update: {
        method: 'put'
      }  
    })
  })
  .factory('Payments', function ($resource, API) {
    return $resource(API.payments, {
      id: '@id'
    },{
      update: {
        method: 'put'
      }  
    })
  })
  .factory('OrderDetails', function ($resource, API) {
    return $resource(API.order_details, {
      id: '@id'
    },{
      update: {
        method: 'put'
      }  
    })
  });