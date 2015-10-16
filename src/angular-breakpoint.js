(function () {

  /**
   * @ngdoc object
   * @name ghsBreakpoint
   * @description
   * Adds responsive design (breakpoint) bindings to templates
   */
  angular
    .module('ghsBreakpoint', [])
    .provider('$breakpoint', breakpointProvider)
    .directive('breakpoint', breakpointDirective);

  /**
   * @ngInject
   */
  function breakpointProvider() {

    /**
     * Default breakpoints
     * @type {{xs: string, sm: string, md: string, lg: string}}
     */
    var breakpoints = {
      xs: '(max-width: 480px)',
      sm: '(min-width: 481px) and (max-width: 768px)',
      md: '(min-width: 769px) and (max-width: 991px)',
      lg: '(min-width: 992px)'
    };

    return {
      set: function (customBreakpoints) {
        if (customBreakpoints) {
          breakpoints = customBreakpoints;
        }
      },
      $get: function () {
        return {
          get: function () {
            return breakpoints;
          }
        }
      }
    };
  }

  /**
   * @ngInject
   */
  function breakpointDirective($rootScope, $window, $breakpoint) {
    return {
      restrict: 'A',
      scope: {},
      link: function breakpointLink(scope) {

        var mediaQuery = {},
          mediaQueryListener = {},
          breakpoints = $breakpoint.get();

        $rootScope.breakpoint = {};

        angular.forEach(breakpoints, function (query, breakpoint) {
          mediaQuery[breakpoint] = $window.matchMedia(query);
          mediaQueryListener[breakpoint] = function (mediaQuery) {
            // Trigger digest cycle
            scope.$evalAsync(function () {
              // Update breakpoint
              $rootScope.breakpoint[breakpoint] = mediaQuery.matches;
            });
          };
          // Listen for media query changes
          mediaQuery[breakpoint].addListener(mediaQueryListener[breakpoint]);
          // Execute first media query check
          mediaQueryListener[breakpoint](mediaQuery[breakpoint]);
        });

      }
    };
  }

})();