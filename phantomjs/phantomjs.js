var phantom = require('phantom');

phantom.create(function(ph){

    ph.createPage(function(page){

        // open page to be converted to PDF
        // Set PDF size to letter - 33.87 × 100.51 cm
        // page.set('viewportSize', { width :  '8.5in', height : '11in'});
        page.set('paperSize', { format: 'Letter', orientation: 'portrait', margin: '1cm' });

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
