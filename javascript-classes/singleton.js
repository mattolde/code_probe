// Example of a Singleton/Namespace

// Create with object literal. This is the preferred way for the following reasons :
// - Easier to read
// - Faster to execute

var app = {
  config: {
    constats: {
      ProviderType: {
        TWITTER: 1,
        FACEBOOK: 2,
        IMAP: 3
      }
    }
  }
};

alert(JSON.stringify(app));

// Create a namespace using the Object() Constructor
// You can also create a similar structure by using the new Object(); instead of an object literal

var app2 = new Object();
app2.config = new Object();
app2.config.constants = new Object();
app2.config.constants.ProviderType = new Object();
app2.config.constants.ProviderType.TWITTER = 1;
app2.config.constants.ProviderType.FACEBOOK = 2;
app2.config.constants.ProviderType.IMAP = 3;

alert(JSON.stringify(app2));
