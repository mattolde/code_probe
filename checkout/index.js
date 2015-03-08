
// Helper functions

var each = function(items, callback){

  if(Array.isArray()){

    for(var i=0;i<items.length;i++){
      callback(items[i]);
    }

  } else {

    for(var key in items){

      if(items.hasOwnProperty(key)){
        callback(items[key]);
      }

    }

  }


};


var pricingRules = {
  applTvDeal: function(items){
    return 0;
  },
  superIpadDeal: function(items){
    return 0;
  },
  macbookProDeal: function(items){
    return 0;
  }
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

  if(this.items[item.sku] === undefined){

    this.items[item.sku] = item;
    this.items[item.sku].quantity = 1;

  } else {

    this.items[item.sku].quantity++;

  }

};


Checkout.prototype.removeAllItems = function(){
  this.items = {};
};


Checkout.prototype.getItemCount = function(){
  var count = 0;

  each(this.items, function(){
    count++;
  });

  return count;
};


Checkout.prototype.applySpecial = function(){
  // apply special to checkout
};


Checkout.prototype.total = function(){
  // calculate checkout total
  var total = 0.00;

  each(this.items, function(item){
    total += item.quantity * item.price;
  });

  return total;
};
