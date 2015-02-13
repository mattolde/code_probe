var phantom = require('phantom');

// Set PDF size to letter - 33.87 × 100.51 cm
// phantom.paperSize = { format: 'Letter', orientation: 'portrait', margin: '1cm' };

phantom.create(function(ph){

    ph.createPage(function(page){

        // open page to be converted to PDF
        page.open('http://phantomjs.org/api/webpage/property/paper-size.html', function(status){

            console.log('opened google?', status);

            page.evaluate(function(){
                return document.title;
            }, function(result){

                console.log('Page title is ', result);

                page.render('test.pdf');
                ph.exit();

            });

        });

    });

});
