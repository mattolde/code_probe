var baz = Object.create(Object.prototype, {

  // 'foo' is a regular value property
  foo: {writable:true, configurable:true, value:"hello"},

  // bar is a setter and getter (accessor) property.
  bar: {
    configurable:false,
    get: function(){return 10;},
    set: function(value){console.log("Setting o.bar to ", value);}
  }

});

// This will alert "hello"
alert(baz.foo);
