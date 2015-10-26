(function () {

  angular
    .module('breakpointDemo', ['ngBreakpoint'])
    .config(breakpointConfig);

  function breakpointConfig($breakpointProvider) {

    $breakpointProvider.set({
      xs: '(max-width: 480px)',
      sm: '(min-width: 481px) and (max-width: 768px)',
      md: '(min-width: 769px) and (max-width: 991px)',
      lg: '(min-width: 992px)'
    });

  }

})();