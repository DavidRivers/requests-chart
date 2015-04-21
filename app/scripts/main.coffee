hc = require "highcharts"
require "../styles/main.less"

document.addEventListener "DOMContentLoaded", () ->
	document.body.innerHTML = (require "../views/main.jade")()
