
var pricingRules = {

};

function Item(sku, name, price){
  this.sku = sku;
  this.name = name;
  this.price = price;
}

function Checkout(pricingRules){

  this.pricingRules = pricingRules;
  this.items = {};

}

Checkout.prototype.scan = function(item){
  this.items[item.sku] = item;
};
