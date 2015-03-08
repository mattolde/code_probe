describe("Checkout", function() {

  var checkout;

  beforeEach(function() {
    // test with empty pricing rules
    checkout = new Checkout({});
  });

  afterEach(function(){
    checkout.removeAllItems();
  });


  it('should create a new checkout', function() {

    expect(checkout).toBeDefined();

  });


  it('should scan a new item into checkout', function() {

    var item = new Item('atv', 'Apple TV', 109.50);
    checkout.scan(item);

    expect(checkout.items.atv).toBeDefined();

  });


  it('should increase the quantity of the item when scanned into checkout', function() {

    var item1 = new Item('atv', 'Apple TV', 109.50);
    var item2 = new Item('mbp', 'MacBook Pro', 1399.99);
    var item3 = new Item('vga', 'VGA adaptor', 30.00);

    checkout.scan(item1);

    expect(checkout.getItemCount()).toBe(1);

    checkout.scan(item2);

    expect(checkout.getItemCount()).toBe(2);

    checkout.scan(item3);

    expect(checkout.getItemCount()).toBe(3);

  });


  it('should scan multiple items into checkout', function(){

    var item1 = new Item('atv', 'Apple TV', 109.50);
    var item2 = new Item('mbp', 'MacBook Pro', 1399.99);
    var item3 = new Item('vga', 'VGA adaptor', 30.00);

    checkout.scan(item1);
    checkout.scan(item2);
    checkout.scan(item3);

    expect(checkout.getItemCount()).toBe(3);

  });


  it('should scan multiple quantities of the same item into checkout', function(){

    var item = new Item('atv', 'Apple TV', 109.50);

    checkout.scan(item);
    checkout.scan(item);
    checkout.scan(item);
    checkout.scan(item);

    expect(checkout.items.atv.quantity).toBe(4);

  });


  it('should remove all items from checkout', function(){

    var item1 = new Item('atv', 'Apple TV', 109.50);
    var item2 = new Item('mbp', 'MacBook Pro', 1399.99);
    var item3 = new Item('vga', 'VGA adaptor', 30.00);

    checkout.scan(item1);
    checkout.scan(item2);
    checkout.scan(item3);

    checkout.removeAllItems();

    expect(checkout.getItemCount()).toBe(0);

  });


  it('should calculate total', function(){

    var item1 = new Item('atv', 'Apple TV', 109.50);
    var item2 = new Item('mbp', 'MacBook Pro', 1399.99);
    var item3 = new Item('vga', 'VGA adaptor', 30.00);

    checkout.scan(item1);
    checkout.scan(item2);
    checkout.scan(item3);

    expect(checkout.total()).toBe(1539.49);

  });


  it('should calculate total of item with more then one quantity', function(){

    var item = new Item('atv', 'Apple TV', 109.50);

    checkout.scan(item);
    checkout.scan(item);
    checkout.scan(item);

    expect(checkout.total()).toBe(328.50);

  });

});
