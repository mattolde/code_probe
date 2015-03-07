describe("Item", function() {

  it("should create a new item", function() {

    var item = new Item('atv','Apple TV', 109.50 );

    expect(item.sku).toBe('atv');
    expect(item.name).toBe('Apple TV');
    expect(item.price).toBe(109.50);


  });

});
