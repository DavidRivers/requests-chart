# Requests Chart

## [Demo](http://requests-chart.stage.davidrivers.name/)

## Notes

* helpful with configuring highcharts via browserify-shim (and also avoiding unnecessary jquery dependency): http://ctheu.com/2015/02/14/browserify-in-depth/

## Potential Improvements

* Assumes that the first object in the JSON array is the earliest date and that each object is at a one-day interval. A potential improvement would be to remove this potential point of failure.
* Add subtitle to instruct user to either click and drag or pinch to zoom (Couldn't figure out the CoffeeScript syntax to set the value of the "subtitle" key to be a lambda containing a ternary)
* Validate pattern (attribute) for dates could be more complete
* Maybe add &lt;label&gt;s (use persist-placeholder?)

## TODO

* remove jade and jadeify dependencies if not going to be used
* figure out how to manage highcharts adapter dependency with package.json (the adapter wasn't found in the npm module) so I can remove the bower_components dir
* Add es5-shim for greater forEach compatibility (IE < 9)
