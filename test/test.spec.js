
describe('ngBreakpoint', function () {

  var $breakpoint,
    defaultBreakpoints = {
      xs: '(max-width: 480px)',
      sm: '(min-width: 481px) and (max-width: 768px)',
      md: '(min-width: 769px) and (max-width: 991px)',
      lg: '(min-width: 992px)'
    },
    customBreakpoints = {
      kiosk: '(min-width: 1401px) and (max-width: 1800px) and (min-aspect-ratio: 4/3)',
      tv: 'tv and (scan: progressive)'
    };

  describe('$breakpoint.init', function () {

    var $rootScope,
      $breakpoint;

    beforeEach(function () {
      module('ngBreakpoint');
    });

    beforeEach(inject(function (_$rootScope_, _$breakpoint_) {
      $breakpoint = _$breakpoint_;
      $rootScope = _$rootScope_.$new();
    }));

    it('should init breakpoint object in rootScope', function () {
      $breakpoint.init();
      expect($rootScope.breakpoint).toBeDefined();
    });

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