describe("Checkout", function() {

  it("should create a new checkout", function() {

    var checkout = new Checkout(pricingRules);

    expect(typeof checkout.items === 'object').toBe(true);
    expect(typeof checkout.pricingRules === 'object').toBe(true);

  });

  it("should scan a new item into checkout", function() {

    var item = new Item('atv', 'Apple TV', 109.50);
    var checkout = new Checkout(pricingRules);
    checkout.scan(item);

    expect(checkout.items.atv.name).toBe('Apple TV');
  });

  it("should increase the quantity of the item when scanned into checkout", function() {
    expect(true).toBe(false);
  });

});
