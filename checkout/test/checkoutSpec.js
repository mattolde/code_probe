describe("Checkout", function() {

  var checkout, itemAppleTv, itemMacBookPro, itemVGA, itemSuperIpad;

  beforeEach(function() {

    checkout = new Checkout({});

    itemAppleTv = new Item('atv', 'Apple TV', 109.50);
    itemMacBookPro = new Item('mbp', 'MacBook Pro', 1399.99);
    itemVGA = new Item('vga', 'VGA adaptor', 30.00);
    itemSuperIpad = new Item('ipd', 'Super iPad', 549.99);

  });

  afterEach(function(){
    checkout.removeAllItems();
  });


  it('should create a new checkout', function() {

    expect(checkout).toBeDefined();

  });


  it('should scan a new item into checkout', function() {

    checkout.scan(itemAppleTv);

    expect(checkout.items.atv.name).toBe('Apple TV');

  });


  it('should increase the quantity of the item when scanned into checkout more then once', function() {

    checkout.scan(itemAppleTv);

    expect(checkout.getItemCount()).toBe(1);

    checkout.scan(itemMacBookPro);

    expect(checkout.getItemCount()).toBe(2);

    checkout.scan(itemVGA);

    expect(checkout.getItemCount()).toBe(3);

  });


  it('should scan multiple items into checkout', function(){

    checkout.scan(itemAppleTv);
    checkout.scan(itemMacBookPro);
    checkout.scan(itemVGA);

    expect(checkout.getItemCount()).toBe(3);

  });


  it('should scan multiple quantities of the same item into checkout', function(){

    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);
    checkout.scan(itemAppleTv);

    expect(checkout.items.atv.quantity).toBe(4);

  });


  it('should remove all items from checkout', function(){

    checkout.scan(itemAppleTv);
    checkout.scan(itemMacBookPro);
    checkout.scan(itemVGA);

    expect(checkout.getItemCount()).toBe(3);

    checkout.removeAllItems();

    expect(checkout.getItemCount()).toBe(0);

  });


  it('should calculate checkout total', function(){

    checkout.scan(itemAppleTv);
    checkout.scan(itemMacBookPro);
    checkout.scan(itemVGA);
    checkout.scan(itemSuperIpad);

    expect(checkout.total()).toBe(2089.48);

  });

});
