
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

  appleTvDeal: function(){

    // 3 for 2 deal on Apple TVs. e.g. buy 3 Apple TVs, you will pay the price of 2 only

    var self = this;

    each(this.items, function(item){

      if(item.sku === 'atv'){

        if(item.quantity >= 3){

          var discount = -109.50 * Math.floor(item.quantity / 3);

          self.discounts.push(['Buy 3 Apple TVs pay the price of 2', discount]);

        }

      }

    });

  },

  superIpadDeal: function(){

    // Super iPad will have a bulk discounted applied, where the price will drop to $499.99 each, if someone buys more than 4

    var self = this;

    each(this.items, function(item){

      if(item.sku === 'ipd'){

        if(item.quantity >= 4){

          // give discount on each super ipad
          var discount = Math.abs((item.price - 499.99) * item.quantity) * -1;

          self.discounts.push(['$499.99 on each Super iPad when more then 4 are purchased', discount]);

        }
      }

    });

  },

  macbookProDeal: function(){

    var self = this;

    each(this.items, function(item){

      if(item.sku === 'mbp'){

        var itemMbp = item;

        // apply discount only if VGA adapter has been scanned into checkout

        each(self.items, function(itemSearch){

          if(itemSearch.sku === 'vga'){

            var itemVga = itemSearch;

            var discountedVGACount = itemMbp.quantity >= itemVga.quantity ? itemVga.quantity : itemMbp.quantity;

            // remove the price for VGA adapter

            var discount = Math.abs(itemVga.price * discountedVGACount) * -1;

            self.discounts.push(['Free VGA adapter with MacBook Pro purchase', discount]);

          }


        });

      }

    });

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
  this.discounts = [];

}


Checkout.prototype.scan = function(item){

  if(this.items[item.sku] === undefined){

    this.items[item.sku] = item;
    this.items[item.sku].quantity = 1;

  } else {

    this.items[item.sku].quantity++;

  }

};


Checkout.prototype.removeAllDiscounts = function(){
  this.discounts = [];
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


Checkout.prototype.total = function(){

  // Remove discounts so they are not applied twice

  this.removeAllDiscounts();



  // Calculate pricing rules on checkout items

  var self = this;

  each(this.pricingRules, function(pricingRuleFunction){

    pricingRuleFunction.call(self);

  });



  // Calculate checkout total
  var total = 0.00;

  each(this.items, function(item){
    total += item.quantity * item.price;
  });



  // Apply discount amounts to total
  if(this.discounts.length > 0){
    each(this.discounts, function(discount){
      total += discount[1];
    });
  }



  // round total to 2 decimal places
  return Math.round(total * 100) / 100;

};
