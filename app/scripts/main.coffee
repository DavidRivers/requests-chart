require "../styles/main.less"
require "Highcharts" # Pollutes global scope. Bad, bad boy.

document.addEventListener 'DOMContentLoaded', (event) ->
	new (Highcharts.Chart)(
		chart: renderTo: document.body
		series: [ { data: [
			13
			37
			42
		] } ])
