
describe('ngBreakpoint', function () {

  var $breakpoint,
    defaultBreakpoints = {
      xs: '(max-width: 480px)',
      sm: '(min-width: 481px) and (max-width: 768px)',
      md: '(min-width: 769px) and (max-width: 991px)',
      lg: '(min-width: 992px)'
    },
    mediaMatches = {
      xs: false,
      sm: false,
      md: false,
      lg: false
    },
    customBreakpoints = {
      kiosk: '(min-width: 1401px) and (max-width: 1800px) and (min-aspect-ratio: 4/3)',
      tv: 'tv and (scan: progressive)'
    };

  describe('$breakpoint.init', function () {

    var $rootScope,
      $breakpoint;

    beforeEach(module('ngBreakpoint'));

    beforeEach(inject(function (_$rootScope_, _$breakpoint_) {
      $breakpoint = _$breakpoint_;
      $rootScope = _$rootScope_.$new();
    }));

    it('should init breakpoint object in rootScope', function () {
      $breakpoint.init();
      expect($rootScope.breakpoint).toBeDefined();
    });

    if (window.matchMedia(defaultBreakpoints.xs).matches) {
      it('should update xs breakpoint in rootScope when window width <= 480px', function () {
        $breakpoint.init();
        $rootScope.$digest();
        var xs = angular.extend(mediaMatches, { xs: true });
        expect($rootScope.breakpoint).toEqual(xs);
      });
    }

    if (window.matchMedia(defaultBreakpoints.sm).matches) {
      it('should update xs breakpoint in rootScope when window width > 480px && <= 768px', function () {
        $breakpoint.init();
        $rootScope.$digest();
        var sm = angular.extend(mediaMatches, { sm: true });
        expect($rootScope.breakpoint).toEqual(sm);
      });
    }

    if (window.matchMedia(defaultBreakpoints.md).matches) {
      it('should update xs breakpoint in rootScope when window width > 768px && <= 991px', function () {
        $breakpoint.init();
        $rootScope.$digest();
        var md = angular.extend(mediaMatches, { md: true });
        expect($rootScope.breakpoint).toEqual(md);
      });
    }

    if (window.matchMedia(defaultBreakpoints.lg).matches) {
      it('should update xs breakpoint in rootScope when window width > 992px', function () {
        $breakpoint.init();
        $rootScope.$digest();
        var lg = angular.extend(mediaMatches, { lg: true });
        expect($rootScope.breakpoint).toEqual(lg);
      });
    }

  });

  describe('$breakpoint.get', function () {

    beforeEach(module('ngBreakpoint'));

    it('should return default breakpoints', inject(function ($breakpoint) {
      expect($breakpoint.get()).toEqual(defaultBreakpoints);
    }));

  });

  describe('$breakpoint.set', function () {

    var $breakpointProvider;

    beforeEach(function () {

      angular
        .module('ngBreakpointTest', [])
        .config(function (_$breakpointProvider_) {
          $breakpointProvider = _$breakpointProvider_;
        });

      module('ngBreakpoint', 'ngBreakpointTest');

      inject(function () {});

    });

    it('should override default breakpoints', function () {
      $breakpointProvider.set(customBreakpoints);
      expect($breakpointProvider.$get().get()).toEqual(customBreakpoints)
    });

  });

  describe('breakpoint directive', function () {

    beforeEach(module('ngBreakpoint'));

    it('should exists', inject(function ($injector) {
      expect($injector.has('breakpointDirective')).toBe(true);
    }));

  });

});