# Requests Chart

## [Demo](http://requests-chart.stage.davidrivers.name/)

## Potential Improvements

* Add subtitle to instruct user to either click and drag or pinch to zoom (Couldn't figure out the CoffeeScript syntax to set the value of the "subtitle" key to be a lambda containing a ternary)
* Validation pattern (attribute) for date <code>input</code> could be more complete
* Add es5-shim for greater forEach compatibility (IE < 9)

## Issues with Highcharts

* Expects global variable <code>Highcharts</code>. Not so modular!
* Allows plotting of multiple duplicate points (same x and y on same series). Perhaps this is acceptable or desired?
* Figure out how to manage highcharts adapter dependency with package.json (the adapter wasn't found in the npm module) so I can remove the bower_components dir
