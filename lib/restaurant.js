/**
 *
 * @namespace faker.restaurant
 */
var restaurant = function (faker) {
    var self = this;
    
    /**
     * model
     *
     * @method faker.restaurant.name
     */
    self.name = function () {
      return faker.random.arrayElement(faker.definitions.restaurant.name);
    };
    self.rating = function () {
      return faker.random.arrayElement(faker.definitions.restaurant.rating);
    };
    self.area = function () {
      return faker.random.arrayElement(faker.definitions.restaurant.area);
    };
  
  }
  
  module['exports'] = restaurant;