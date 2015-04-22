require "../styles/main.less"
require "Highcharts" # Pollutes global scope. Bad like a bad bot!

days = require("../data/categorized_domain_requests.json").categorized_domain_requests
humanSeries = []
goodBotSeries = []
badBotSeries = []
whitelistSeries = []

dateToUTC = (date) ->
	year = date.split("-")[0]
	month = date.split("-")[1] - 1
	day = parseInt(date.split("-")[2])
	Date.UTC(year, month, day)

startDate = dateToUTC(days[0].summary_date)

days.forEach (entry) ->
	humanSeries.push entry.human_total
	goodBotSeries.push entry.good_bot_total
	badBotSeries.push entry.bad_bot_total
	whitelistSeries.push entry.whitelist_total
	return;

document.addEventListener "DOMContentLoaded", () ->
	chart = new (Highcharts.Chart)(
		chart:
			renderTo: document.getElementById "chart"
			zoomType: "x"
		title: { text: "Daily Domain Requests by Category" }
		type: "datetime"
		xAxis:
			type: "datetime"
			dateTimeLabelFormats: { day: "%b %e, %Y" }
		yAxis:
			title: { text: "Domain Requests" }
		plotOptions:
			series: { pointStart: startDate }
		series: [
			{ id: 1, name: "Humans", color: "#000", data: humanSeries, pointInterval: 24 * 3600 * 1000 }
			{ id: 2, name: "Good Bots", color: "green", data: goodBotSeries, pointInterval: 24 * 3600 * 1000  }
			{ id: 3, name: "Bad Bots", color: "red", data: badBotSeries, pointInterval: 24 * 3600 * 1000 }
			{ id: 4, name: "Whitelisted", color: "#ccc", data: whitelistSeries, pointInterval: 24 * 3600 * 1000  } ])
	
	document.getElementById("form").addEventListener "submit", (evt) ->
		evt.preventDefault()

		requestsValue = parseInt document.getElementsByName("requests")[0].value
		requestsDate = dateToUTC document.getElementsByName("date")[0].value

		seriesID
		seriesRadios = document.getElementsByName "series"
		i = 0
		length = seriesRadios.length
		while i < length
			if seriesRadios[i].checked
				seriesID = parseInt seriesRadios[i].value
				break
			i++

		chart.get(seriesID).addPoint({x: requestsDate, y: requestsValue})
