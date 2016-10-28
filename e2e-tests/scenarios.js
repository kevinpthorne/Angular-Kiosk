'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /mainView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/mainView");
  });


  describe('mainView', function() {

    beforeEach(function() {
      browser.get('index.html#!/mainView');
    });


    it('should render mainView when user navigates to /mainView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('eventView', function() {

    beforeEach(function() {
      browser.get('index.html#!/eventView');
    });


    it('should render eventView when user navigates to /eventView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
