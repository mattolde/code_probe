describe("Pricing Rules", function() {
  var checkout, itemAppleTv, itemMacBookPro, itemVGA;

  beforeEach(function() {

    // test with pricing rules
    checkout = new Checkout(pricingRules);

    itemAppleTv = new Item('atv', 'Apple TV', 109.50);
    itemMacBookPro = new Item('mbp', 'MacBook Pro', 1399.99);
    itemVGA = new Item('vga', 'VGA adaptor', 30.00);
    itemSuperIpad = new Item('ipd', 'Super iPad', 549.99);

  });

  afterEach(function(){
    checkout.removeAllDiscounts();
    checkout.removeAllItems();
  });


  it("should charge for only two Apple TVs when three are purchased", function() {

    // 3 for 2 deal on Apple TVs. e.g. buy 3 Apple TVs, you will pay the price of 2 only

    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);

    expect(checkout.total()).toBe(219.00);

  });

  it("should charge for only two Apple TVs when three are purchased multiple times", function() {

    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);

    expect(checkout.total()).toBe(219.00);

    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);

    expect(checkout.total()).toBe(438.00);

    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);

    expect(checkout.total()).toBe(657.00);

  });


  it('should apply Apple TV discount with another item in checkout', function(){

    // SKUs Scanned: atv, atv, atv, vga Total expected: $249.00

    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);
    checkout.scan(itemVGA);

    expect(checkout.total()).toBe(249.00);

  });


  it("should give a bulk discount of $499.99 on each Super iPad when more then 4 are purchased", function() {

    // Super iPad will have a bulk discounted applied, where the price will drop to $499.99 each, if someone buys more than 4

    checkout.scan(itemSuperIpad);
    checkout.scan(itemSuperIpad);
    checkout.scan(itemSuperIpad);
    checkout.scan(itemSuperIpad);

    // No discount
    expect(checkout.total()).toBe(1999.96);

    checkout.scan(itemSuperIpad);

    // Discount applied
    expect(checkout.total()).toBe(2499.95);

    checkout.scan(itemSuperIpad);
    checkout.scan(itemSuperIpad);

    expect(checkout.total()).toBe(3499.93);

  });


  it('should apply Super iPad bulk discount with other another item in checkout', function(){

    // SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd Total expected: $2718.95

    checkout.scan(itemAppleTv);
    checkout.scan(itemSuperIpad);
    checkout.scan(itemSuperIpad);
    checkout.scan(itemAppleTv);
    checkout.scan(itemSuperIpad);
    checkout.scan(itemSuperIpad);
    checkout.scan(itemSuperIpad);

    expect(checkout.total()).toBe(2718.95);

  });


  it('should apply free vga adapter for each macbook pro purchased', function(){

    // Bundle in a free VGA adapter free of charge with every MacBook Pro sold

    checkout.scan(itemMacBookPro);
    checkout.scan(itemMacBookPro);
    checkout.scan(itemVGA);
    checkout.scan(itemVGA);

    expect(checkout.total()).toBe(2799.98);

    checkout.scan(itemVGA);

    expect(checkout.total()).toBe(2829.98);

    checkout.scan(itemMacBookPro);
    checkout.scan(itemMacBookPro);
    checkout.scan(itemMacBookPro);

    expect(checkout.total()).toBe(6999.95);

  });


  it("should not receive a free VGA adapter for Macbook Pro purchased if VGA adapter is not added to checkout", function() {

    checkout.scan(itemMacBookPro);

    expect(checkout.total()).toBe(1399.99);

  });


  it('should apply the Macbook Pro special with another item in checkout', function(){

    // SKUs Scanned: mbp, vga, ipd Total expected: $1949.98

    checkout.scan(itemMacBookPro);
    checkout.scan(itemVGA);
    checkout.scan(itemSuperIpad);

    expect(checkout.total()).toBe(1949.98);

  });


  it('should apply all specials when items are in checkout', function(){

    // SKUs Scanned: atv, atv, atv, mbp, vga, ipd, ipd, ,ipd , ipd  Total expected: $3618.95

    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);

    checkout.scan(itemMacBookPro);
    checkout.scan(itemVGA);

    checkout.scan(itemSuperIpad);
    checkout.scan(itemSuperIpad);
    checkout.scan(itemSuperIpad);
    checkout.scan(itemSuperIpad);

    expect(checkout.total()).toBe(3618.95);

  });


});
