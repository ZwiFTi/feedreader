/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
         it('should have URL defined & not empty', function() {
           allFeeds.forEach(function(element) {
                    expect(element.url).toBeDefined();
                    expect(!element.url || 0 === element.url.length).toEqual(false);
                  });
         });


        /* Tests that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('should have name defined & not empty', function() {
           allFeeds.forEach(function(element) {
                    expect(element.name).toBeDefined();
                    expect(!element.name || 0 === element.name.length).toEqual(false);
                  });
         });
    });

    /* Test suite that checks if the menu is working as intended */
    describe('The menu', function() {

      /* Test that ensures the menu element is
       * hidden by default.
       */
      it('should be hidden by default', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      /* Test that ensures the menu changes
       * visibility when the menu icon is clicked.
       */
       it('should change visibility when clicked', function() {
         menuIcon = $('.menu-icon-link');

         // Clicks to reveal menu
         menuIcon.click()
         expect($('body').hasClass('menu-hidden')).toBe(false);

         // Clicks to hide menu
         menuIcon.click()
         expect($('body').hasClass('menu-hidden')).toBe(true);
       });

    });

    /* Test suite Initial Entries. */
    describe('Initial Entries', function() {

      /* Test that ensures when the loadFeed function is called and completes
       * its work, there is at least a single .entry element within the
       * .feed container.
       */
       beforeEach(function(done) {
           loadFeed(0, done);
       });

       it('should be one .entry element within the .feed container', function() {
           expect($('.feed .entry').length).toBeGreaterThan(0);
       });
    });

    /* Test suite New Feed Selection */
    describe('New Feed Selection', function() {

      /* Test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
       var initialFeed;
       beforeEach(function(done) {
           loadFeed(0, function() {
             initialFeed =  $('.feed').html();
             loadFeed(2, done);
           });
       });

       // compare previous feed to current feed
       it('content should change when new feed is loaded', function() {
           expect($('.feed').html()).not.toEqual(initialFeed);
       });
    });
}());
