angular.module('slideshow', []).directive('clojure', function() {
  var l = '<pre><code class=\"clojure\">';
  var r = '</code></pre>';
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      var html = element.html();
      element.html(l+html+r);
    }
  }
});
