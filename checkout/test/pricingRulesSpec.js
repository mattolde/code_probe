describe("Pricing Rules", function() {
  var checkout, itemAppleTv, itemMacBookPro, itemVGA;

  beforeEach(function() {
    // test with pricing rules
    checkout = new Checkout(pricingRules);
    itemAppleTv = new Item('atv', 'Apple TV', 109.50);
    itemMacBookPro = new Item('mbp', 'MacBook Pro', 1399.99);
    itemVGA = new Item('vga', 'VGA adaptor', 30.00);
  });

  afterEach(function(){
    checkout.removeAllItems();
  });


  // 3 for 2 deal on Apple TVs. e.g. buy 3 Apple TVs, you will pay the price of 2 only
  it("should charge for only two Apple TVs when three are purchased", function() {

    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);

    expect(checkout.total()).toBe(219.00);
  });

  // Super iPad will have a bulk discounted applied, where the price will drop to $499.99 each, if someone buys more than 4
  it("should charge give a bulk discount of $499.99 on each Super iPad when more then 4 are purchased", function() {

    expect(true).toBe(false);

  });

  // bundle in a free VGA adapter free of charge with every MacBook Pro sold
  it("should receive a free VGA adapter for every Macbook Pro purchased", function() {

    expect(true).toBe(false);

  });

});
