(function (angular) {

  /**
   * @ngdoc object
   * @name ngBreakpoint
   * @description
   * Adds responsive design (breakpoint) bindings to templates
   */
  angular
    .module('ngBreakpoint', [])
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
      /**
       * @ngdoc function
       * @name set
       * @description
       * Sets custom breakpoints during the config phase of the module
       */
      set: function (customBreakpoints) {
        if (customBreakpoints) {
          breakpoints = customBreakpoints;
        }
      },
      /**
       * @ngInject
       */
      $get: function ($rootScope, $window) {
        return {
          /**
           * @ngdoc function
           * @name init
           * @description
           * Initializes media query listeners based on breakpoints defined
           */
          init: function () {

            var mediaQuery = {},
              mediaQueryListener = {};

            $rootScope.breakpoint = {};

            angular.forEach(breakpoints, function (query, breakpoint) {
              mediaQuery[breakpoint] = $window.matchMedia(query);
              mediaQueryListener[breakpoint] = function (mediaQuery) {
                // Trigger digest cycle
                $rootScope.$evalAsync(function () {
                  // Update breakpoint
                  $rootScope.breakpoint[breakpoint] = mediaQuery.matches;
                });
              };
              // Listen for media query changes
              mediaQuery[breakpoint].addListener(mediaQueryListener[breakpoint]);
              // Execute first media query check
              mediaQueryListener[breakpoint](mediaQuery[breakpoint]);
            });

          },
          /**
           * @ngdoc function
           * @name get
           * @description
           * Gets default or custom breakpoints from service
           */
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
  function breakpointDirective($breakpoint) {
    return {
      restrict: 'A',
      scope: {},
      controller: function breakpointLink() {
        $breakpoint.init();
      }
    };
  }

})(angular);