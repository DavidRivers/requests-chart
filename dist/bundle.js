(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var badBotSeries, dateToUTC, days, goodBotSeries, humanSeries, startDate, whitelistSeries;

require("../styles/main.less");

require("Highcharts");

days = require("../data/categorized_domain_requests.json").categorized_domain_requests;

humanSeries = [];

goodBotSeries = [];

badBotSeries = [];

whitelistSeries = [];

dateToUTC = function(date) {
  var day, month, year;
  year = date.split("-")[0];
  month = date.split("-")[1] - 1;
  day = parseInt(date.split("-")[2]);
  return Date.UTC(year, month, day);
};

startDate = dateToUTC(days[0].summary_date);

days.forEach(function(entry) {
  humanSeries.push(entry.human_total);
  goodBotSeries.push(entry.good_bot_total);
  badBotSeries.push(entry.bad_bot_total);
  whitelistSeries.push(entry.whitelist_total);
});

document.addEventListener("DOMContentLoaded", function() {
  var chart;
  chart = new Highcharts.Chart({
    chart: {
      renderTo: document.getElementById("chart"),
      zoomType: "x"
    },
    title: {
      text: "Daily Domain Requests by Category"
    },
    type: "datetime",
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        day: "%b %e, %Y"
      }
    },
    yAxis: {
      title: {
        text: "Domain Requests"
      }
    },
    plotOptions: {
      series: {
        pointStart: startDate
      }
    },
    series: [
      {
        id: 1,
        name: "Humans",
        color: "#000",
        data: humanSeries,
        pointInterval: 24 * 3600 * 1000
      }, {
        id: 2,
        name: "Good Bots",
        color: "green",
        data: goodBotSeries,
        pointInterval: 24 * 3600 * 1000
      }, {
        id: 3,
        name: "Bad Bots",
        color: "red",
        data: badBotSeries,
        pointInterval: 24 * 3600 * 1000
      }, {
        id: 4,
        name: "Whitelist",
        color: "#ccc",
        data: whitelistSeries,
        pointInterval: 24 * 3600 * 1000
      }
    ]
  });
  return document.getElementById("form").addEventListener("submit", function(evt) {
    var i, length, requestsDate, requestsValue, seriesID, seriesRadios;
    evt.preventDefault();
    requestsValue = parseInt(document.getElementById("requests").value);
    requestsDate = dateToUTC(document.getElementById("date").value);
    seriesID;
    seriesRadios = document.getElementsByName("series");
    i = 0;
    length = seriesRadios.length;
    while (i < length) {
      if (seriesRadios[i].checked) {
        seriesID = parseInt(seriesRadios[i].value);
        break;
      }
      i++;
    }
    return chart.get(seriesID).addPoint({
      x: requestsDate,
      y: requestsValue
    });
  });
});



},{"../data/categorized_domain_requests.json":2,"../styles/main.less":3,"Highcharts":5}],2:[function(require,module,exports){
module.exports={
    "categorized_domain_requests": [
        {
            "summary_date": "2014-12-05",
            "human_total": 1011,
            "good_bot_total": 23,
            "bad_bot_total": 12842,
            "whitelist_total": 0,
            "overall_total": 13876
        },
        {
            "summary_date": "2014-12-06",
            "human_total": 339,
            "good_bot_total": 44,
            "bad_bot_total": 12810,
            "whitelist_total": 0,
            "overall_total": 13193
        },
        {
            "summary_date": "2014-12-07",
            "human_total": 329,
            "good_bot_total": 32,
            "bad_bot_total": 12768,
            "whitelist_total": 0,
            "overall_total": 13129
        },
        {
            "summary_date": "2014-12-08",
            "human_total": 807,
            "good_bot_total": 17,
            "bad_bot_total": 12786,
            "whitelist_total": 0,
            "overall_total": 13610
        },
        {
            "summary_date": "2014-12-09",
            "human_total": 969,
            "good_bot_total": 30,
            "bad_bot_total": 12764,
            "whitelist_total": 0,
            "overall_total": 13763
        },
        {
            "summary_date": "2014-12-10",
            "human_total": 985,
            "good_bot_total": 22,
            "bad_bot_total": 12666,
            "whitelist_total": 0,
            "overall_total": 13673
        },
        {
            "summary_date": "2014-12-11",
            "human_total": 952,
            "good_bot_total": 21,
            "bad_bot_total": 12766,
            "whitelist_total": 0,
            "overall_total": 13739
        },
        {
            "summary_date": "2014-12-12",
            "human_total": 866,
            "good_bot_total": 28,
            "bad_bot_total": 12762,
            "whitelist_total": 0,
            "overall_total": 13656
        },
        {
            "summary_date": "2014-12-13",
            "human_total": 267,
            "good_bot_total": 26,
            "bad_bot_total": 12710,
            "whitelist_total": 0,
            "overall_total": 13003
        },
        {
            "summary_date": "2014-12-14",
            "human_total": 300,
            "good_bot_total": 30,
            "bad_bot_total": 12757,
            "whitelist_total": 0,
            "overall_total": 13087
        },
        {
            "summary_date": "2014-12-15",
            "human_total": 1979,
            "good_bot_total": 30,
            "bad_bot_total": 8230,
            "whitelist_total": 0,
            "overall_total": 10239
        },
        {
            "summary_date": "2014-12-16",
            "human_total": 985,
            "good_bot_total": 28,
            "bad_bot_total": 244,
            "whitelist_total": 0,
            "overall_total": 1257
        },
        {
            "summary_date": "2014-12-17",
            "human_total": 961,
            "good_bot_total": 29,
            "bad_bot_total": 286,
            "whitelist_total": 0,
            "overall_total": 1276
        },
        {
            "summary_date": "2014-12-18",
            "human_total": 1577,
            "good_bot_total": 17,
            "bad_bot_total": 2733,
            "whitelist_total": 0,
            "overall_total": 4327
        },
        {
            "summary_date": "2014-12-19",
            "human_total": 782,
            "good_bot_total": 23,
            "bad_bot_total": 14884,
            "whitelist_total": 0,
            "overall_total": 15689
        },
        {
            "summary_date": "2014-12-20",
            "human_total": 289,
            "good_bot_total": 29,
            "bad_bot_total": 14731,
            "whitelist_total": 0,
            "overall_total": 15049
        },
        {
            "summary_date": "2014-12-21",
            "human_total": 285,
            "good_bot_total": 24,
            "bad_bot_total": 14704,
            "whitelist_total": 0,
            "overall_total": 15013
        },
        {
            "summary_date": "2014-12-22",
            "human_total": 740,
            "good_bot_total": 21,
            "bad_bot_total": 13631,
            "whitelist_total": 0,
            "overall_total": 14392
        },
        {
            "summary_date": "2014-12-23",
            "human_total": 867,
            "good_bot_total": 27,
            "bad_bot_total": 12517,
            "whitelist_total": 0,
            "overall_total": 13411
        },
        {
            "summary_date": "2014-12-24",
            "human_total": 572,
            "good_bot_total": 21,
            "bad_bot_total": 299,
            "whitelist_total": 0,
            "overall_total": 892
        },
        {
            "summary_date": "2014-12-25",
            "human_total": 385,
            "good_bot_total": 25,
            "bad_bot_total": 203,
            "whitelist_total": 0,
            "overall_total": 613
        },
        {
            "summary_date": "2014-12-26",
            "human_total": 504,
            "good_bot_total": 17,
            "bad_bot_total": 200,
            "whitelist_total": 0,
            "overall_total": 721
        },
        {
            "summary_date": "2014-12-27",
            "human_total": 284,
            "good_bot_total": 33,
            "bad_bot_total": 168,
            "whitelist_total": 0,
            "overall_total": 485
        },
        {
            "summary_date": "2014-12-28",
            "human_total": 265,
            "good_bot_total": 30,
            "bad_bot_total": 182,
            "whitelist_total": 0,
            "overall_total": 477
        },
        {
            "summary_date": "2014-12-29",
            "human_total": 684,
            "good_bot_total": 37,
            "bad_bot_total": 103,
            "whitelist_total": 0,
            "overall_total": 824
        },
        {
            "summary_date": "2014-12-30",
            "human_total": 671,
            "good_bot_total": 23,
            "bad_bot_total": 122,
            "whitelist_total": 0,
            "overall_total": 816
        },
        {
            "summary_date": "2014-12-31",
            "human_total": 502,
            "good_bot_total": 30,
            "bad_bot_total": 115,
            "whitelist_total": 0,
            "overall_total": 647
        },
        {
            "summary_date": "2015-01-01",
            "human_total": 240,
            "good_bot_total": 26,
            "bad_bot_total": 199,
            "whitelist_total": 0,
            "overall_total": 465
        },
        {
            "summary_date": "2015-01-02",
            "human_total": 501,
            "good_bot_total": 21,
            "bad_bot_total": 76,
            "whitelist_total": 0,
            "overall_total": 598
        },
        {
            "summary_date": "2015-01-03",
            "human_total": 290,
            "good_bot_total": 16,
            "bad_bot_total": 82,
            "whitelist_total": 0,
            "overall_total": 388
        },
        {
            "summary_date": "2015-01-04",
            "human_total": 328,
            "good_bot_total": 27,
            "bad_bot_total": 101,
            "whitelist_total": 0,
            "overall_total": 456
        }
    ]
}

},{}],3:[function(require,module,exports){
var css = "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n@import \"//fonts.googleapis.com/css?family=Open+Sans:700,400\";\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  select {\n    background: #fff !important;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('../fonts/glyphicons-halflings-regular.eot');\n  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"\\2a\";\n}\n.glyphicon-plus:before {\n  content: \"\\2b\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20ac\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270f\";\n}\n.glyphicon-glass:before {\n  content: \"\\e001\";\n}\n.glyphicon-music:before {\n  content: \"\\e002\";\n}\n.glyphicon-search:before {\n  content: \"\\e003\";\n}\n.glyphicon-heart:before {\n  content: \"\\e005\";\n}\n.glyphicon-star:before {\n  content: \"\\e006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\e007\";\n}\n.glyphicon-user:before {\n  content: \"\\e008\";\n}\n.glyphicon-film:before {\n  content: \"\\e009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\e010\";\n}\n.glyphicon-th:before {\n  content: \"\\e011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\e012\";\n}\n.glyphicon-ok:before {\n  content: \"\\e013\";\n}\n.glyphicon-remove:before {\n  content: \"\\e014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\e015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\e016\";\n}\n.glyphicon-off:before {\n  content: \"\\e017\";\n}\n.glyphicon-signal:before {\n  content: \"\\e018\";\n}\n.glyphicon-cog:before {\n  content: \"\\e019\";\n}\n.glyphicon-trash:before {\n  content: \"\\e020\";\n}\n.glyphicon-home:before {\n  content: \"\\e021\";\n}\n.glyphicon-file:before {\n  content: \"\\e022\";\n}\n.glyphicon-time:before {\n  content: \"\\e023\";\n}\n.glyphicon-road:before {\n  content: \"\\e024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\e025\";\n}\n.glyphicon-download:before {\n  content: \"\\e026\";\n}\n.glyphicon-upload:before {\n  content: \"\\e027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\e028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\e029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\e030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\e031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\e032\";\n}\n.glyphicon-lock:before {\n  content: \"\\e033\";\n}\n.glyphicon-flag:before {\n  content: \"\\e034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\e035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\e036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\e037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\e038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\e039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\e040\";\n}\n.glyphicon-tag:before {\n  content: \"\\e041\";\n}\n.glyphicon-tags:before {\n  content: \"\\e042\";\n}\n.glyphicon-book:before {\n  content: \"\\e043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\e044\";\n}\n.glyphicon-print:before {\n  content: \"\\e045\";\n}\n.glyphicon-camera:before {\n  content: \"\\e046\";\n}\n.glyphicon-font:before {\n  content: \"\\e047\";\n}\n.glyphicon-bold:before {\n  content: \"\\e048\";\n}\n.glyphicon-italic:before {\n  content: \"\\e049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\e050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\e051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\e052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\e053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\e054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\e055\";\n}\n.glyphicon-list:before {\n  content: \"\\e056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\e057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\e058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\e059\";\n}\n.glyphicon-picture:before {\n  content: \"\\e060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\e062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\e063\";\n}\n.glyphicon-tint:before {\n  content: \"\\e064\";\n}\n.glyphicon-edit:before {\n  content: \"\\e065\";\n}\n.glyphicon-share:before {\n  content: \"\\e066\";\n}\n.glyphicon-check:before {\n  content: \"\\e067\";\n}\n.glyphicon-move:before {\n  content: \"\\e068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\e069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\e070\";\n}\n.glyphicon-backward:before {\n  content: \"\\e071\";\n}\n.glyphicon-play:before {\n  content: \"\\e072\";\n}\n.glyphicon-pause:before {\n  content: \"\\e073\";\n}\n.glyphicon-stop:before {\n  content: \"\\e074\";\n}\n.glyphicon-forward:before {\n  content: \"\\e075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\e076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\e077\";\n}\n.glyphicon-eject:before {\n  content: \"\\e078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\e079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\e080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\e081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\e082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\e083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\e084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\e085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\e086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\e087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\e088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\e089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\e090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\e091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\e092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\e093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\e094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\e095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\e096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\e097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\e101\";\n}\n.glyphicon-gift:before {\n  content: \"\\e102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\e103\";\n}\n.glyphicon-fire:before {\n  content: \"\\e104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\e105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\e106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\e107\";\n}\n.glyphicon-plane:before {\n  content: \"\\e108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\e109\";\n}\n.glyphicon-random:before {\n  content: \"\\e110\";\n}\n.glyphicon-comment:before {\n  content: \"\\e111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\e112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\e113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\e114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\e115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\e116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\e117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\e118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\e119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\e120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\e121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\e122\";\n}\n.glyphicon-bell:before {\n  content: \"\\e123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\e124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\e125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\e126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\e127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\e128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\e129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\e130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\e131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\e132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\e133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\e134\";\n}\n.glyphicon-globe:before {\n  content: \"\\e135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\e136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\e137\";\n}\n.glyphicon-filter:before {\n  content: \"\\e138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\e139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\e140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\e141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\e142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\e143\";\n}\n.glyphicon-link:before {\n  content: \"\\e144\";\n}\n.glyphicon-phone:before {\n  content: \"\\e145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\e146\";\n}\n.glyphicon-usd:before {\n  content: \"\\e148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\e149\";\n}\n.glyphicon-sort:before {\n  content: \"\\e150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\e153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\e155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\e157\";\n}\n.glyphicon-expand:before {\n  content: \"\\e158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\e159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\e160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\e161\";\n}\n.glyphicon-flash:before {\n  content: \"\\e162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\e163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\e164\";\n}\n.glyphicon-record:before {\n  content: \"\\e165\";\n}\n.glyphicon-save:before {\n  content: \"\\e166\";\n}\n.glyphicon-open:before {\n  content: \"\\e167\";\n}\n.glyphicon-saved:before {\n  content: \"\\e168\";\n}\n.glyphicon-import:before {\n  content: \"\\e169\";\n}\n.glyphicon-export:before {\n  content: \"\\e170\";\n}\n.glyphicon-send:before {\n  content: \"\\e171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\e172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\e173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\e174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\e175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\e176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\e177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\e178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\e179\";\n}\n.glyphicon-header:before {\n  content: \"\\e180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\e181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\e182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\e183\";\n}\n.glyphicon-tower:before {\n  content: \"\\e184\";\n}\n.glyphicon-stats:before {\n  content: \"\\e185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\e186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\e187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\e188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\e189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\e190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\e191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\e192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\e193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\e194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\e195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\e197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\e198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\e199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\e200\";\n}\n.glyphicon-cd:before {\n  content: \"\\e201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\e202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\e203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\e204\";\n}\n.glyphicon-copy:before {\n  content: \"\\e205\";\n}\n.glyphicon-paste:before {\n  content: \"\\e206\";\n}\n.glyphicon-alert:before {\n  content: \"\\e209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\e210\";\n}\n.glyphicon-king:before {\n  content: \"\\e211\";\n}\n.glyphicon-queen:before {\n  content: \"\\e212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\e213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\e214\";\n}\n.glyphicon-knight:before {\n  content: \"\\e215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\e216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26fa\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\e218\";\n}\n.glyphicon-bed:before {\n  content: \"\\e219\";\n}\n.glyphicon-apple:before {\n  content: \"\\f8ff\";\n}\n.glyphicon-erase:before {\n  content: \"\\e221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231b\";\n}\n.glyphicon-lamp:before {\n  content: \"\\e223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\e224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\e225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\e226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\e227\";\n}\n.glyphicon-btc:before {\n  content: \"\\e227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\e227\";\n}\n.glyphicon-yen:before {\n  content: \"\\00a5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\00a5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20bd\";\n}\n.glyphicon-rub:before {\n  content: \"\\20bd\";\n}\n.glyphicon-scale:before {\n  content: \"\\e230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\e231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\e232\";\n}\n.glyphicon-education:before {\n  content: \"\\e233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\e234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\e235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\e236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\e237\";\n}\n.glyphicon-oil:before {\n  content: \"\\e238\";\n}\n.glyphicon-grain:before {\n  content: \"\\e239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\e240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\e241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\e242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\e243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\e244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\e245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\e246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\e247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\e248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\e249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\e250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\e251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\e252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\e253\";\n}\n.glyphicon-console:before {\n  content: \"\\e254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\e255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\e256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\e257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\e258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\e259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\e260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333333;\n  background-color: #ffffff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014 \\00A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\00A0 \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #ffffff;\n  background-color: #333333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid,\nbody {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #dddddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dddddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #dddddd;\n}\n.table .table {\n  background-color: #ffffff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #dddddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #dddddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #dddddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-control::-moz-placeholder {\n  color: #999999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999999;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"],\n  input[type=\"time\"],\n  input[type=\"datetime-local\"],\n  input[type=\"month\"] {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-left: 0;\n  padding-right: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.form-group-sm .form-control {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.form-group-sm .form-control,\nselect[multiple].form-group-sm .form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  min-height: 32px;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.form-group-lg .form-control {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.form-group-lg .form-control,\nselect[multiple].form-group-lg .form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  min-height: 38px;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 14.333333px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n  }\n}\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn-default {\n  color: #333333;\n  background-color: #ffffff;\n  border-color: #cccccc;\n}\n.btn-default:hover,\n.btn-default:focus,\n.btn-default.focus,\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n  background-color: #ffffff;\n  border-color: #cccccc;\n}\n.btn-default .badge {\n  color: #ffffff;\n  background-color: #333333;\n}\n.btn-primary {\n  color: #ffffff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary.focus,\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #ffffff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary[disabled],\nfieldset[disabled] .btn-primary,\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus,\n.btn-primary.disabled:active,\n.btn-primary[disabled]:active,\nfieldset[disabled] .btn-primary:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary.active {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #ffffff;\n}\n.btn-success {\n  color: #ffffff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success.focus,\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #ffffff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled,\n.btn-success[disabled],\nfieldset[disabled] .btn-success,\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus,\n.btn-success.disabled:active,\n.btn-success[disabled]:active,\nfieldset[disabled] .btn-success:active,\n.btn-success.disabled.active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success.active {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #ffffff;\n}\n.btn-info {\n  color: #ffffff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:hover,\n.btn-info:focus,\n.btn-info.focus,\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #ffffff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled,\n.btn-info[disabled],\nfieldset[disabled] .btn-info,\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus,\n.btn-info.disabled:active,\n.btn-info[disabled]:active,\nfieldset[disabled] .btn-info:active,\n.btn-info.disabled.active,\n.btn-info[disabled].active,\nfieldset[disabled] .btn-info.active {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #ffffff;\n}\n.btn-warning {\n  color: #ffffff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:hover,\n.btn-warning:focus,\n.btn-warning.focus,\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #ffffff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled,\n.btn-warning[disabled],\nfieldset[disabled] .btn-warning,\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus,\n.btn-warning.disabled:active,\n.btn-warning[disabled]:active,\nfieldset[disabled] .btn-warning:active,\n.btn-warning.disabled.active,\n.btn-warning[disabled].active,\nfieldset[disabled] .btn-warning.active {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #ffffff;\n}\n.btn-danger {\n  color: #ffffff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:hover,\n.btn-danger:focus,\n.btn-danger.focus,\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #ffffff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled,\n.btn-danger[disabled],\nfieldset[disabled] .btn-danger,\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus,\n.btn-danger.disabled:active,\n.btn-danger[disabled]:active,\nfieldset[disabled] .btn-danger:active,\n.btn-danger.disabled.active,\n.btn-danger[disabled].active,\nfieldset[disabled] .btn-danger.active {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #ffffff;\n}\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #ffffff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px solid;\n  content: \"\";\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    left: auto;\n    right: 0;\n  }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 4px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  margin-left: -1px;\n}\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.nav > li.disabled > a {\n  color: #777777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #dddddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee #dddddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #dddddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #dddddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #ffffff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #ffffff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #dddddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #dddddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #ffffff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse,\nbody > .navbar-header,\nbody > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse,\n  body > .navbar-header,\n  body > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand,\n  .navbar > body .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #cccccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #dddddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #dddddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #e7e7e7;\n  color: #555555;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #cccccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333333;\n}\n.navbar-default .btn-link {\n  color: #777777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #cccccc;\n}\n.navbar-inverse {\n  background-color: #222222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #ffffff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #ffffff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #ffffff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #ffffff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #080808;\n  color: #ffffff;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #ffffff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #ffffff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #ffffff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #ffffff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  content: \"/\\00a0\";\n  padding: 0 5px;\n  color: #cccccc;\n}\n.breadcrumb > .active {\n  color: #777777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  text-decoration: none;\n  color: #337ab7;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  margin-left: -1px;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  color: #23527c;\n  background-color: #eeeeee;\n  border-color: #dddddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 2;\n  color: #ffffff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n  cursor: default;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777777;\n  background-color: #ffffff;\n  border-color: #dddddd;\n  cursor: not-allowed;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777777;\n  background-color: #ffffff;\n  cursor: not-allowed;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #ffffff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #ffffff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #ffffff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding: 30px 15px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron,\nbody .jumbotron {\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding: 48px 0;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron,\n  body .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-left: auto;\n  margin-right: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #ffffff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n}\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item {\n  color: #555555;\n}\na.list-group-item .list-group-item-heading {\n  color: #333333;\n}\na.list-group-item:hover,\na.list-group-item:focus {\n  text-decoration: none;\n  color: #555555;\n  background-color: #f5f5f5;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #ffffff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\na.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\na.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\na.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\na.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #ffffff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #dddddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #dddddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #dddddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #dddddd;\n}\n.panel-default {\n  border-color: #dddddd;\n}\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: #f5f5f5;\n  border-color: #dddddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #dddddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #dddddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #ffffff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #ffffff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well,\n#form {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.well blockquote,\n#form blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000000;\n  text-shadow: 0 1px 0 #ffffff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n.close:hover,\n.close:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  -o-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #ffffff;\n  border: 1px solid #999999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n  min-height: 16.42857143px;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.4;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #ffffff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #000000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000000;\n}\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  white-space: normal;\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #ffffff;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #ffffff;\n}\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #ffffff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #ffffff;\n  bottom: -10px;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  -o-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\n    -moz-transition: -moz-transform 0.6s ease-in-out;\n    -o-transition: -o-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000;\n    -moz-perspective: 1000;\n    perspective: 1000;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    left: 0;\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    left: 0;\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    left: 0;\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: 0;\n  color: #ffffff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  line-height: 1;\n  font-family: serif;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203a';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #ffffff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n}\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #ffffff;\n}\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #ffffff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -15px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -15px;\n  }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-footer:before,\n.modal-footer:after,\nbody:before,\nbody:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-footer:after,\nbody:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\nbody,\ntext,\ntspan {\n  font-family: \"Open Sans\", sans-serif;\n}\nlegend {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\nbody {\n  margin: 15px 0;\n}\n.chart-container {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .chart-container {\n    float: left;\n    width: 66.66666667%;\n  }\n}\n#form {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  #form {\n    float: left;\n    width: 33.33333333%;\n  }\n}\n";(require('lessify'))(css); module.exports = css;
},{"lessify":7}],4:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/**
 * @license Highcharts JS v4.1.5 (2015-04-13)
 *
 * Standalone Highcharts Framework
 *
 * License: MIT License
 */


/*global Highcharts */
var HighchartsAdapter = (function () {

var UNDEFINED,
	doc = document,
	emptyArray = [],
	timers = [],
	timerId,
	animSetters = {},
	Fx;

Math.easeInOutSine = function (t, b, c, d) {
	return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};



/**
 * Extend given object with custom events
 */
function augment(obj) {
	function removeOneEvent(el, type, fn) {
		el.removeEventListener(type, fn, false);
	}

	function IERemoveOneEvent(el, type, fn) {
		fn = el.HCProxiedMethods[fn.toString()];
		el.detachEvent('on' + type, fn);
	}

	function removeAllEvents(el, type) {
		var events = el.HCEvents,
			remove,
			types,
			len,
			n;

		if (el.removeEventListener) {
			remove = removeOneEvent;
		} else if (el.attachEvent) {
			remove = IERemoveOneEvent;
		} else {
			return; // break on non-DOM events
		}


		if (type) {
			types = {};
			types[type] = true;
		} else {
			types = events;
		}

		for (n in types) {
			if (events[n]) {
				len = events[n].length;
				while (len--) {
					remove(el, n, events[n][len]);
				}
			}
		}
	}

	if (!obj.HCExtended) {
		Highcharts.extend(obj, {
			HCExtended: true,

			HCEvents: {},

			bind: function (name, fn) {
				var el = this,
					events = this.HCEvents,
					wrappedFn;

				// handle DOM events in modern browsers
				if (el.addEventListener) {
					el.addEventListener(name, fn, false);

				// handle old IE implementation
				} else if (el.attachEvent) {
					
					wrappedFn = function (e) {
						e.target = e.srcElement || window; // #2820
						fn.call(el, e);
					};

					if (!el.HCProxiedMethods) {
						el.HCProxiedMethods = {};
					}

					// link wrapped fn with original fn, so we can get this in removeEvent
					el.HCProxiedMethods[fn.toString()] = wrappedFn;

					el.attachEvent('on' + name, wrappedFn);
				}


				if (events[name] === UNDEFINED) {
					events[name] = [];
				}

				events[name].push(fn);
			},

			unbind: function (name, fn) {
				var events,
					index;

				if (name) {
					events = this.HCEvents[name] || [];
					if (fn) {
						index = HighchartsAdapter.inArray(fn, events);
						if (index > -1) {
							events.splice(index, 1);
							this.HCEvents[name] = events;
						}
						if (this.removeEventListener) {
							removeOneEvent(this, name, fn);
						} else if (this.attachEvent) {
							IERemoveOneEvent(this, name, fn);
						}
					} else {
						removeAllEvents(this, name);
						this.HCEvents[name] = [];
					}
				} else {
					removeAllEvents(this);
					this.HCEvents = {};
				}
			},

			trigger: function (name, args) {
				var events = this.HCEvents[name] || [],
					target = this,
					len = events.length,
					i,
					preventDefault,
					fn;

				// Attach a simple preventDefault function to skip default handler if called
				preventDefault = function () {
					args.defaultPrevented = true;
				};
				
				for (i = 0; i < len; i++) {
					fn = events[i];

					// args is never null here
					if (args.stopped) {
						return;
					}

					args.preventDefault = preventDefault;
					args.target = target;

					// If the type is not set, we're running a custom event (#2297). If it is set,
					// we're running a browser event, and setting it will cause en error in
					// IE8 (#2465).
					if (!args.type) {
						args.type = name;
					}
					

					
					// If the event handler return false, prevent the default handler from executing
					if (fn.call(this, args) === false) {
						args.preventDefault();
					}
				}
			}
		});
	}

	return obj;
}


return {

	/**
	 * Initialize the adapter. This is run once as Highcharts is first run.
	 */
	init: function (pathAnim) {

		/**
		 * Compatibility section to add support for legacy IE. This can be removed if old IE 
		 * support is not needed.
		 */
		if (!doc.defaultView) {
			this._getStyle = function (el, prop) {
				var val;
				if (el.style[prop]) {
					return el.style[prop];
				} else {
					if (prop === 'opacity') {
						prop = 'filter';
					}
					/*jslint unparam: true*/
					val = el.currentStyle[prop.replace(/\-(\w)/g, function (a, b) { return b.toUpperCase(); })];
					if (prop === 'filter') {
						val = val.replace(
							/alpha\(opacity=([0-9]+)\)/, 
							function (a, b) { 
								return b / 100; 
							}
						);
					}
					/*jslint unparam: false*/
					return val === '' ? 1 : val;
				} 
			};
			this.adapterRun = function (elem, method) {
				var alias = { width: 'clientWidth', height: 'clientHeight' }[method];

				if (alias) {
					elem.style.zoom = 1;
					return elem[alias] - 2 * parseInt(HighchartsAdapter._getStyle(elem, 'padding'), 10);
				}
			};
		}

		if (!Array.prototype.forEach) {
			this.each = function (arr, fn) { // legacy
				var i = 0, 
					len = arr.length;
				for (; i < len; i++) {
					if (fn.call(arr[i], arr[i], i, arr) === false) {
						return i;
					}
				}
			};
		}

		if (!Array.prototype.indexOf) {
			this.inArray = function (item, arr) {
				var len, 
					i = 0;

				if (arr) {
					len = arr.length;
					
					for (; i < len; i++) {
						if (arr[i] === item) {
							return i;
						}
					}
				}

				return -1;
			};
		}

		if (!Array.prototype.filter) {
			this.grep = function (elements, callback) {
				var ret = [],
					i = 0,
					length = elements.length;

				for (; i < length; i++) {
					if (!!callback(elements[i], i)) {
						ret.push(elements[i]);
					}
				}

				return ret;
			};
		}

		//--- End compatibility section ---


		/**
		 * Start of animation specific code
		 */
		Fx = function (elem, options, prop) {
			this.options = options;
			this.elem = elem;
			this.prop = prop;
		};
		Fx.prototype = {
			
			update: function () {
				var styles,
					paths = this.paths,
					elem = this.elem,
					elemelem = elem.element; // if destroyed, it is null

				// Animation setter defined from outside
				if (animSetters[this.prop]) {
					animSetters[this.prop](this);

				// Animating a path definition on SVGElement
				} else if (paths && elemelem) {
					elem.attr('d', pathAnim.step(paths[0], paths[1], this.now, this.toD));

				// Other animations on SVGElement
				} else if (elem.attr) {
					if (elemelem) {
						elem.attr(this.prop, this.now);
					}

				// HTML styles
				} else {
					styles = {};
					styles[this.prop] = this.now + this.unit;
					Highcharts.css(elem, styles);
				}
				
				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}

			},
			custom: function (from, to, unit) {
				var self = this,
					t = function (gotoEnd) {
						return self.step(gotoEnd);
					},
					i;

				this.startTime = +new Date();
				this.start = from;
				this.end = to;
				this.unit = unit;
				this.now = this.start;
				this.pos = this.state = 0;

				t.elem = this.elem;

				if (t() && timers.push(t) === 1) {
					timerId = setInterval(function () {
						
						for (i = 0; i < timers.length; i++) {
							if (!timers[i]()) {
								timers.splice(i--, 1);
							}
						}

						if (!timers.length) {
							clearInterval(timerId);
						}
					}, 13);
				}
			},
			
			step: function (gotoEnd) {
				var t = +new Date(),
					ret,
					done,
					options = this.options,
					elem = this.elem,
					i;
				
				if (elem.stopAnimation || (elem.attr && !elem.element)) { // #2616, element including flag is destroyed
					ret = false;

				} else if (gotoEnd || t >= options.duration + this.startTime) {
					this.now = this.end;
					this.pos = this.state = 1;
					this.update();

					this.options.curAnim[this.prop] = true;

					done = true;
					for (i in options.curAnim) {
						if (options.curAnim[i] !== true) {
							done = false;
						}
					}

					if (done) {
						if (options.complete) {
							options.complete.call(elem);
						}
					}
					ret = false;

				} else {
					var n = t - this.startTime;
					this.state = n / options.duration;
					this.pos = options.easing(n, 0, 1, options.duration);
					this.now = this.start + ((this.end - this.start) * this.pos);
					this.update();
					ret = true;
				}
				return ret;
			}
		};

		/**
		 * The adapter animate method
		 */
		this.animate = function (el, prop, opt) {
			var start,
				unit = '',
				end,
				fx,
				args,
				name;

			el.stopAnimation = false; // ready for new

			if (typeof opt !== 'object' || opt === null) {
				args = arguments;
				opt = {
					duration: args[2],
					easing: args[3],
					complete: args[4]
				};
			}
			if (typeof opt.duration !== 'number') {
				opt.duration = 400;
			}
			opt.easing = Math[opt.easing] || Math.easeInOutSine;
			opt.curAnim = Highcharts.extend({}, prop);
			
			for (name in prop) {
				fx = new Fx(el, opt, name);
				end = null;
				
				if (name === 'd') {
					fx.paths = pathAnim.init(
						el,
						el.d,
						prop.d
					);
					fx.toD = prop.d;
					start = 0;
					end = 1;
				} else if (el.attr) {
					start = el.attr(name);
				} else {
					start = parseFloat(HighchartsAdapter._getStyle(el, name)) || 0;
					if (name !== 'opacity') {
						unit = 'px';
					}
				}
	
				if (!end) {
					end = prop[name];
				}
				fx.custom(start, end, unit);
			}	
		};
	},

	/**
	 * Internal method to return CSS value for given element and property
	 */
	_getStyle: function (el, prop) {
		return window.getComputedStyle(el, undefined).getPropertyValue(prop);
	},

	/**
	 * Add an animation setter for a specific property
	 */
	addAnimSetter: function (prop, fn) {
		animSetters[prop] = fn;
	},

	/**
	 * Downloads a script and executes a callback when done.
	 * @param {String} scriptLocation
	 * @param {Function} callback
	 */
	getScript: function (scriptLocation, callback) {
		// We cannot assume that Assets class from mootools-more is available so instead insert a script tag to download script.
		var head = doc.getElementsByTagName('head')[0],
			script = doc.createElement('script');

		script.type = 'text/javascript';
		script.src = scriptLocation;
		script.onload = callback;

		head.appendChild(script);
	},

	/**
	 * Return the index of an item in an array, or -1 if not found
	 */
	inArray: function (item, arr) {
		return arr.indexOf ? arr.indexOf(item) : emptyArray.indexOf.call(arr, item);
	},


	/**
	 * A direct link to adapter methods
	 */
	adapterRun: function (elem, method) {
		return parseInt(HighchartsAdapter._getStyle(elem, method), 10);
	},

	/**
	 * Filter an array
	 */
	grep: function (elements, callback) {
		return emptyArray.filter.call(elements, callback);
	},

	/**
	 * Map an array
	 */
	map: function (arr, fn) {
		var results = [], i = 0, len = arr.length;

		for (; i < len; i++) {
			results[i] = fn.call(arr[i], arr[i], i, arr);
		}

		return results;
	},

	/**
	 * Get the element's offset position, corrected by overflow:auto. Loosely based on jQuery's offset method.
	 */
	offset: function (el) {
		var docElem = document.documentElement,
			box = el.getBoundingClientRect();

		return {
			top: box.top  + (window.pageYOffset || docElem.scrollTop)  - (docElem.clientTop  || 0),
			left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
		};
	},

	/**
	 * Add an event listener
	 */
	addEvent: function (el, type, fn) {
		augment(el).bind(type, fn);
	},

	/**
	 * Remove event added with addEvent
	 */
	removeEvent: function (el, type, fn) {
		augment(el).unbind(type, fn);
	},

	/**
	 * Fire an event on a custom object
	 */
	fireEvent: function (el, type, eventArguments, defaultFunction) {
		var e;

		if (doc.createEvent && (el.dispatchEvent || el.fireEvent)) {
			e = doc.createEvent('Events');
			e.initEvent(type, true, true);
			e.target = el;

			Highcharts.extend(e, eventArguments);

			if (el.dispatchEvent) {
				el.dispatchEvent(e);
			} else {
				el.fireEvent(type, e);
			}

		} else if (el.HCExtended === true) {
			eventArguments = eventArguments || {};
			el.trigger(type, eventArguments);
		}

		if (eventArguments && eventArguments.defaultPrevented) {
			defaultFunction = null;
		}

		if (defaultFunction) {
			defaultFunction(eventArguments);
		}
	},

	washMouseEvent: function (e) {
		return e;
	},


	/**
	 * Stop running animation
	 */
	stop: function (el) {
		el.stopAnimation = true;
	},

	/**
	 * Utility for iterating over an array. Parameters are reversed compared to jQuery.
	 * @param {Array} arr
	 * @param {Function} fn
	 */
	each: function (arr, fn) { // modern browsers
		return Array.prototype.forEach.call(arr, fn);
	}
};
}());

; browserify_shim__define__module__export__(typeof HighchartsAdapter != "undefined" ? HighchartsAdapter : window.HighchartsAdapter);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
(function (global){

; HighchartsAdapter = global.HighchartsAdapter = require("/home/david/Dev/requests-chart/bower_components/highcharts/adapters/standalone-framework.src.js");
; var __browserify_shim_require__=require;(function browserifyShim(module, define, require) {
// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS

/**
 * @license Highcharts JS v4.1.5 (2015-04-13)
 *
 * (c) 2009-2014 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */

// JSLint options:
/*global Highcharts, HighchartsAdapter, document, window, navigator, setInterval, clearInterval, clearTimeout, setTimeout, location, jQuery, $, console, each, grep */
/*jslint ass: true, sloppy: true, forin: true, plusplus: true, nomen: true, vars: true, regexp: true, newcap: true, browser: true, continue: true, white: true */
(function () {
// encapsulated variables
var UNDEFINED,
	doc = document,
	win = window,
	math = Math,
	mathRound = math.round,
	mathFloor = math.floor,
	mathCeil = math.ceil,
	mathMax = math.max,
	mathMin = math.min,
	mathAbs = math.abs,
	mathCos = math.cos,
	mathSin = math.sin,
	mathPI = math.PI,
	deg2rad = mathPI * 2 / 360,


	// some variables
	userAgent = navigator.userAgent,
	isOpera = win.opera,
	isIE = /(msie|trident)/i.test(userAgent) && !isOpera,
	docMode8 = doc.documentMode === 8,
	isWebKit = /AppleWebKit/.test(userAgent),
	isFirefox = /Firefox/.test(userAgent),
	isTouchDevice = /(Mobile|Android|Windows Phone)/.test(userAgent),
	SVG_NS = 'http://www.w3.org/2000/svg',
	hasSVG = !!doc.createElementNS && !!doc.createElementNS(SVG_NS, 'svg').createSVGRect,
	hasBidiBug = isFirefox && parseInt(userAgent.split('Firefox/')[1], 10) < 4, // issue #38
	useCanVG = !hasSVG && !isIE && !!doc.createElement('canvas').getContext,
	Renderer,
	hasTouch,
	symbolSizes = {},
	idCounter = 0,
	garbageBin,
	defaultOptions,
	dateFormat, // function
	globalAnimation,
	pathAnim,
	timeUnits,
	noop = function () { return UNDEFINED; },
	charts = [],
	chartCount = 0,
	PRODUCT = 'Highcharts',
	VERSION = '4.1.5',

	// some constants for frequently used strings
	DIV = 'div',
	ABSOLUTE = 'absolute',
	RELATIVE = 'relative',
	HIDDEN = 'hidden',
	PREFIX = 'highcharts-',
	VISIBLE = 'visible',
	PX = 'px',
	NONE = 'none',
	M = 'M',
	L = 'L',
	numRegex = /^[0-9]+$/,
	NORMAL_STATE = '',
	HOVER_STATE = 'hover',
	SELECT_STATE = 'select',
	marginNames = ['plotTop', 'marginRight', 'marginBottom', 'plotLeft'],
	
	// Object for extending Axis
	AxisPlotLineOrBandExtension,

	// constants for attributes
	STROKE_WIDTH = 'stroke-width',

	// time methods, changed based on whether or not UTC is used
	Date,  // Allow using a different Date class
	makeTime,
	timezoneOffset,
	getTimezoneOffset,
	getMinutes,
	getHours,
	getDay,
	getDate,
	getMonth,
	getFullYear,
	setMilliseconds,
	setSeconds,
	setMinutes,
	setHours,
	setDate,
	setMonth,
	setFullYear,


	// lookup over the types and the associated classes
	seriesTypes = {},
	Highcharts;

// The Highcharts namespace
Highcharts = win.Highcharts = win.Highcharts ? error(16, true) : {};

Highcharts.seriesTypes = seriesTypes;

/**
 * Extend an object with the members of another
 * @param {Object} a The object to be extended
 * @param {Object} b The object to add to the first one
 */
var extend = Highcharts.extend = function (a, b) {
	var n;
	if (!a) {
		a = {};
	}
	for (n in b) {
		a[n] = b[n];
	}
	return a;
};
	
/**
 * Deep merge two or more objects and return a third object. If the first argument is
 * true, the contents of the second object is copied into the first object.
 * Previously this function redirected to jQuery.extend(true), but this had two limitations.
 * First, it deep merged arrays, which lead to workarounds in Highcharts. Second,
 * it copied properties from extended prototypes. 
 */
function merge() {
	var i,
		args = arguments,
		len,
		ret = {},
		doCopy = function (copy, original) {
			var value, key;

			// An object is replacing a primitive
			if (typeof copy !== 'object') {
				copy = {};
			}

			for (key in original) {
				if (original.hasOwnProperty(key)) {
					value = original[key];

					// Copy the contents of objects, but not arrays or DOM nodes
					if (value && typeof value === 'object' && Object.prototype.toString.call(value) !== '[object Array]' &&
							key !== 'renderTo' && typeof value.nodeType !== 'number') {
						copy[key] = doCopy(copy[key] || {}, value);
				
					// Primitives and arrays are copied over directly
					} else {
						copy[key] = original[key];
					}
				}
			}
			return copy;
		};

	// If first argument is true, copy into the existing object. Used in setOptions.
	if (args[0] === true) {
		ret = args[1];
		args = Array.prototype.slice.call(args, 2);
	}

	// For each argument, extend the return
	len = args.length;
	for (i = 0; i < len; i++) {
		ret = doCopy(ret, args[i]);
	}

	return ret;
}

/**
 * Shortcut for parseInt
 * @param {Object} s
 * @param {Number} mag Magnitude
 */
function pInt(s, mag) {
	return parseInt(s, mag || 10);
}

/**
 * Check for string
 * @param {Object} s
 */
function isString(s) {
	return typeof s === 'string';
}

/**
 * Check for object
 * @param {Object} obj
 */
function isObject(obj) {
	return obj && typeof obj === 'object';
}

/**
 * Check for array
 * @param {Object} obj
 */
function isArray(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
}

/**
 * Check for number
 * @param {Object} n
 */
function isNumber(n) {
	return typeof n === 'number';
}

function log2lin(num) {
	return math.log(num) / math.LN10;
}
function lin2log(num) {
	return math.pow(10, num);
}

/**
 * Remove last occurence of an item from an array
 * @param {Array} arr
 * @param {Mixed} item
 */
function erase(arr, item) {
	var i = arr.length;
	while (i--) {
		if (arr[i] === item) {
			arr.splice(i, 1);
			break;
		}
	}
	//return arr;
}

/**
 * Returns true if the object is not null or undefined. Like MooTools' $.defined.
 * @param {Object} obj
 */
function defined(obj) {
	return obj !== UNDEFINED && obj !== null;
}

/**
 * Set or get an attribute or an object of attributes. Can't use jQuery attr because
 * it attempts to set expando properties on the SVG element, which is not allowed.
 *
 * @param {Object} elem The DOM element to receive the attribute(s)
 * @param {String|Object} prop The property or an abject of key-value pairs
 * @param {String} value The value if a single property is set
 */
function attr(elem, prop, value) {
	var key,
		ret;

	// if the prop is a string
	if (isString(prop)) {
		// set the value
		if (defined(value)) {
			elem.setAttribute(prop, value);

		// get the value
		} else if (elem && elem.getAttribute) { // elem not defined when printing pie demo...
			ret = elem.getAttribute(prop);
		}

	// else if prop is defined, it is a hash of key/value pairs
	} else if (defined(prop) && isObject(prop)) {
		for (key in prop) {
			elem.setAttribute(key, prop[key]);
		}
	}
	return ret;
}
/**
 * Check if an element is an array, and if not, make it into an array. Like
 * MooTools' $.splat.
 */
function splat(obj) {
	return isArray(obj) ? obj : [obj];
}


/**
 * Return the first value that is defined. Like MooTools' $.pick.
 */
var pick = Highcharts.pick = function () {
	var args = arguments,
		i,
		arg,
		length = args.length;
	for (i = 0; i < length; i++) {
		arg = args[i];
		if (arg !== UNDEFINED && arg !== null) {
			return arg;
		}
	}
};

/**
 * Set CSS on a given element
 * @param {Object} el
 * @param {Object} styles Style object with camel case property names
 */
function css(el, styles) {
	if (isIE && !hasSVG) { // #2686
		if (styles && styles.opacity !== UNDEFINED) {
			styles.filter = 'alpha(opacity=' + (styles.opacity * 100) + ')';
		}
	}
	extend(el.style, styles);
}

/**
 * Utility function to create element with attributes and styles
 * @param {Object} tag
 * @param {Object} attribs
 * @param {Object} styles
 * @param {Object} parent
 * @param {Object} nopad
 */
function createElement(tag, attribs, styles, parent, nopad) {
	var el = doc.createElement(tag);
	if (attribs) {
		extend(el, attribs);
	}
	if (nopad) {
		css(el, {padding: 0, border: NONE, margin: 0});
	}
	if (styles) {
		css(el, styles);
	}
	if (parent) {
		parent.appendChild(el);
	}
	return el;
}

/**
 * Extend a prototyped class by new members
 * @param {Object} parent
 * @param {Object} members
 */
function extendClass(parent, members) {
	var object = function () { return UNDEFINED; };
	object.prototype = new parent();
	extend(object.prototype, members);
	return object;
}

/**
 * Pad a string to a given length by adding 0 to the beginning
 * @param {Number} number
 * @param {Number} length
 */
function pad(number, length) {
	// Create an array of the remaining length +1 and join it with 0's
	return new Array((length || 2) + 1 - String(number).length).join(0) + number;
}

/**
 * Wrap a method with extended functionality, preserving the original function
 * @param {Object} obj The context object that the method belongs to 
 * @param {String} method The name of the method to extend
 * @param {Function} func A wrapper function callback. This function is called with the same arguments
 * as the original function, except that the original function is unshifted and passed as the first 
 * argument. 
 */
var wrap = Highcharts.wrap = function (obj, method, func) {
	var proceed = obj[method];
	obj[method] = function () {
		var args = Array.prototype.slice.call(arguments);
		args.unshift(proceed);
		return func.apply(this, args);
	};
};


function getTZOffset(timestamp) {
	return ((getTimezoneOffset && getTimezoneOffset(timestamp)) || timezoneOffset || 0) * 60000;
}

/**
 * Based on http://www.php.net/manual/en/function.strftime.php
 * @param {String} format
 * @param {Number} timestamp
 * @param {Boolean} capitalize
 */
dateFormat = function (format, timestamp, capitalize) {
	if (!defined(timestamp) || isNaN(timestamp)) {
		return 'Invalid date';
	}
	format = pick(format, '%Y-%m-%d %H:%M:%S');

	var date = new Date(timestamp - getTZOffset(timestamp)),
		key, // used in for constuct below
		// get the basic time values
		hours = date[getHours](),
		day = date[getDay](),
		dayOfMonth = date[getDate](),
		month = date[getMonth](),
		fullYear = date[getFullYear](),
		lang = defaultOptions.lang,
		langWeekdays = lang.weekdays,

		// List all format keys. Custom formats can be added from the outside. 
		replacements = extend({

			// Day
			'a': langWeekdays[day].substr(0, 3), // Short weekday, like 'Mon'
			'A': langWeekdays[day], // Long weekday, like 'Monday'
			'd': pad(dayOfMonth), // Two digit day of the month, 01 to 31
			'e': dayOfMonth, // Day of the month, 1 through 31
			'w': day,

			// Week (none implemented)
			//'W': weekNumber(),

			// Month
			'b': lang.shortMonths[month], // Short month, like 'Jan'
			'B': lang.months[month], // Long month, like 'January'
			'm': pad(month + 1), // Two digit month number, 01 through 12

			// Year
			'y': fullYear.toString().substr(2, 2), // Two digits year, like 09 for 2009
			'Y': fullYear, // Four digits year, like 2009

			// Time
			'H': pad(hours), // Two digits hours in 24h format, 00 through 23
			'I': pad((hours % 12) || 12), // Two digits hours in 12h format, 00 through 11
			'l': (hours % 12) || 12, // Hours in 12h format, 1 through 12
			'M': pad(date[getMinutes]()), // Two digits minutes, 00 through 59
			'p': hours < 12 ? 'AM' : 'PM', // Upper case AM or PM
			'P': hours < 12 ? 'am' : 'pm', // Lower case AM or PM
			'S': pad(date.getSeconds()), // Two digits seconds, 00 through  59
			'L': pad(mathRound(timestamp % 1000), 3) // Milliseconds (naming from Ruby)
		}, Highcharts.dateFormats);


	// do the replaces
	for (key in replacements) {
		while (format.indexOf('%' + key) !== -1) { // regex would do it in one line, but this is faster
			format = format.replace('%' + key, typeof replacements[key] === 'function' ? replacements[key](timestamp) : replacements[key]);
		}
	}

	// Optionally capitalize the string and return
	return capitalize ? format.substr(0, 1).toUpperCase() + format.substr(1) : format;
};

/** 
 * Format a single variable. Similar to sprintf, without the % prefix.
 */
function formatSingle(format, val) {
	var floatRegex = /f$/,
		decRegex = /\.([0-9])/,
		lang = defaultOptions.lang,
		decimals;

	if (floatRegex.test(format)) { // float
		decimals = format.match(decRegex);
		decimals = decimals ? decimals[1] : -1;
		if (val !== null) {
			val = Highcharts.numberFormat(
				val,
				decimals,
				lang.decimalPoint,
				format.indexOf(',') > -1 ? lang.thousandsSep : ''
			);
		}
	} else {
		val = dateFormat(format, val);
	}
	return val;
}

/**
 * Format a string according to a subset of the rules of Python's String.format method.
 */
function format(str, ctx) {
	var splitter = '{',
		isInside = false,
		segment,
		valueAndFormat,
		path,
		i,
		len,
		ret = [],
		val,
		index;
	
	while ((index = str.indexOf(splitter)) !== -1) {
		
		segment = str.slice(0, index);
		if (isInside) { // we're on the closing bracket looking back
			
			valueAndFormat = segment.split(':');
			path = valueAndFormat.shift().split('.'); // get first and leave format
			len = path.length;
			val = ctx;

			// Assign deeper paths
			for (i = 0; i < len; i++) {
				val = val[path[i]];
			}

			// Format the replacement
			if (valueAndFormat.length) {
				val = formatSingle(valueAndFormat.join(':'), val);
			}

			// Push the result and advance the cursor
			ret.push(val);
			
		} else {
			ret.push(segment);
			
		}
		str = str.slice(index + 1); // the rest
		isInside = !isInside; // toggle
		splitter = isInside ? '}' : '{'; // now look for next matching bracket
	}
	ret.push(str);
	return ret.join('');
}

/**
 * Get the magnitude of a number
 */
function getMagnitude(num) {
	return math.pow(10, mathFloor(math.log(num) / math.LN10));
}

/**
 * Take an interval and normalize it to multiples of 1, 2, 2.5 and 5
 * @param {Number} interval
 * @param {Array} multiples
 * @param {Number} magnitude
 * @param {Object} options
 */
function normalizeTickInterval(interval, multiples, magnitude, allowDecimals, preventExceed) {
	var normalized, 
		i,
		retInterval = interval;

	// round to a tenfold of 1, 2, 2.5 or 5
	magnitude = pick(magnitude, 1);
	normalized = interval / magnitude;

	// multiples for a linear scale
	if (!multiples) {
		multiples = [1, 2, 2.5, 5, 10];

		// the allowDecimals option
		if (allowDecimals === false) {
			if (magnitude === 1) {
				multiples = [1, 2, 5, 10];
			} else if (magnitude <= 0.1) {
				multiples = [1 / magnitude];
			}
		}
	}

	// normalize the interval to the nearest multiple
	for (i = 0; i < multiples.length; i++) {
		retInterval = multiples[i];
		if ((preventExceed && retInterval * magnitude >= interval) || // only allow tick amounts smaller than natural
			(!preventExceed && (normalized <= (multiples[i] + (multiples[i + 1] || multiples[i])) / 2))) {
			break;
		}
	}

	// multiply back to the correct magnitude
	retInterval *= magnitude;
	
	return retInterval;
}


/**
 * Utility method that sorts an object array and keeping the order of equal items.
 * ECMA script standard does not specify the behaviour when items are equal.
 */
function stableSort(arr, sortFunction) {
	var length = arr.length,
		sortValue,
		i;

	// Add index to each item
	for (i = 0; i < length; i++) {
		arr[i].ss_i = i; // stable sort index
	}

	arr.sort(function (a, b) {
		sortValue = sortFunction(a, b);
		return sortValue === 0 ? a.ss_i - b.ss_i : sortValue;
	});

	// Remove index from items
	for (i = 0; i < length; i++) {
		delete arr[i].ss_i; // stable sort index
	}
}

/**
 * Non-recursive method to find the lowest member of an array. Math.min raises a maximum
 * call stack size exceeded error in Chrome when trying to apply more than 150.000 points. This
 * method is slightly slower, but safe.
 */
function arrayMin(data) {
	var i = data.length,
		min = data[0];

	while (i--) {
		if (data[i] < min) {
			min = data[i];
		}
	}
	return min;
}

/**
 * Non-recursive method to find the lowest member of an array. Math.min raises a maximum
 * call stack size exceeded error in Chrome when trying to apply more than 150.000 points. This
 * method is slightly slower, but safe.
 */
function arrayMax(data) {
	var i = data.length,
		max = data[0];

	while (i--) {
		if (data[i] > max) {
			max = data[i];
		}
	}
	return max;
}

/**
 * Utility method that destroys any SVGElement or VMLElement that are properties on the given object.
 * It loops all properties and invokes destroy if there is a destroy method. The property is
 * then delete'ed.
 * @param {Object} The object to destroy properties on
 * @param {Object} Exception, do not destroy this property, only delete it.
 */
function destroyObjectProperties(obj, except) {
	var n;
	for (n in obj) {
		// If the object is non-null and destroy is defined
		if (obj[n] && obj[n] !== except && obj[n].destroy) {
			// Invoke the destroy
			obj[n].destroy();
		}

		// Delete the property from the object.
		delete obj[n];
	}
}


/**
 * Discard an element by moving it to the bin and delete
 * @param {Object} The HTML node to discard
 */
function discardElement(element) {
	// create a garbage bin element, not part of the DOM
	if (!garbageBin) {
		garbageBin = createElement(DIV);
	}

	// move the node and empty bin
	if (element) {
		garbageBin.appendChild(element);
	}
	garbageBin.innerHTML = '';
}

/**
 * Provide error messages for debugging, with links to online explanation 
 */
function error (code, stop) {
	var msg = 'Highcharts error #' + code + ': www.highcharts.com/errors/' + code;
	if (stop) {
		throw msg;
	}
	// else ...
	if (win.console) {
		console.log(msg);
	}
}

/**
 * Fix JS round off float errors
 * @param {Number} num
 */
function correctFloat(num) {
	return parseFloat(
		num.toPrecision(14)
	);
}

/**
 * Set the global animation to either a given value, or fall back to the
 * given chart's animation option
 * @param {Object} animation
 * @param {Object} chart
 */
function setAnimation(animation, chart) {
	globalAnimation = pick(animation, chart.animation);
}

/**
 * The time unit lookup
 */
timeUnits = {
	millisecond: 1,
	second: 1000,
	minute: 60000,
	hour: 3600000,
	day: 24 * 3600000,
	week: 7 * 24 * 3600000,
	month: 28 * 24 * 3600000,
	year: 364 * 24 * 3600000
};


/**
 * Format a number and return a string based on input settings
 * @param {Number} number The input number to format
 * @param {Number} decimals The amount of decimals
 * @param {String} decPoint The decimal point, defaults to the one given in the lang options
 * @param {String} thousandsSep The thousands separator, defaults to the one given in the lang options
 */
Highcharts.numberFormat = function (number, decimals, decPoint, thousandsSep) {
	var lang = defaultOptions.lang,
		// http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_number_format/
		n = +number || 0,
		c = decimals === -1 ?
			mathMin((n.toString().split('.')[1] || '').length, 20) : // Preserve decimals. Not huge numbers (#3793).
			(isNaN(decimals = mathAbs(decimals)) ? 2 : decimals),
		d = decPoint === undefined ? lang.decimalPoint : decPoint,
		t = thousandsSep === undefined ? lang.thousandsSep : thousandsSep,
		s = n < 0 ? "-" : "",
		i = String(pInt(n = mathAbs(n).toFixed(c))),
		j = i.length > 3 ? i.length % 3 : 0;

	return (s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
			(c ? d + mathAbs(n - i).toFixed(c).slice(2) : ""));
};
/**
 * Path interpolation algorithm used across adapters
 */
pathAnim = {
	/**
	 * Prepare start and end values so that the path can be animated one to one
	 */
	init: function (elem, fromD, toD) {
		fromD = fromD || '';
		var shift = elem.shift,
			bezier = fromD.indexOf('C') > -1,
			numParams = bezier ? 7 : 3,
			endLength,
			slice,
			i,
			start = fromD.split(' '),
			end = [].concat(toD), // copy
			startBaseLine,
			endBaseLine,
			sixify = function (arr) { // in splines make move points have six parameters like bezier curves
				i = arr.length;
				while (i--) {
					if (arr[i] === M) {
						arr.splice(i + 1, 0, arr[i + 1], arr[i + 2], arr[i + 1], arr[i + 2]);
					}
				}
			};

		if (bezier) {
			sixify(start);
			sixify(end);
		}

		// pull out the base lines before padding
		if (elem.isArea) {
			startBaseLine = start.splice(start.length - 6, 6);
			endBaseLine = end.splice(end.length - 6, 6);
		}

		// if shifting points, prepend a dummy point to the end path
		if (shift <= end.length / numParams && start.length === end.length) {
			while (shift--) {
				end = [].concat(end).splice(0, numParams).concat(end);
			}
		}
		elem.shift = 0; // reset for following animations

		// copy and append last point until the length matches the end length
		if (start.length) {
			endLength = end.length;
			while (start.length < endLength) {

				//bezier && sixify(start);
				slice = [].concat(start).splice(start.length - numParams, numParams);
				if (bezier) { // disable first control point
					slice[numParams - 6] = slice[numParams - 2];
					slice[numParams - 5] = slice[numParams - 1];
				}
				start = start.concat(slice);
			}
		}

		if (startBaseLine) { // append the base lines for areas
			start = start.concat(startBaseLine);
			end = end.concat(endBaseLine);
		}
		return [start, end];
	},

	/**
	 * Interpolate each value of the path and return the array
	 */
	step: function (start, end, pos, complete) {
		var ret = [],
			i = start.length,
			startVal;

		if (pos === 1) { // land on the final path without adjustment points appended in the ends
			ret = complete;

		} else if (i === end.length && pos < 1) {
			while (i--) {
				startVal = parseFloat(start[i]);
				ret[i] =
					isNaN(startVal) ? // a letter instruction like M or L
						start[i] :
						pos * (parseFloat(end[i] - startVal)) + startVal;

			}
		} else { // if animation is finished or length not matching, land on right value
			ret = end;
		}
		return ret;
	}
};

(function ($) {
	/**
	 * The default HighchartsAdapter for jQuery
	 */
	win.HighchartsAdapter = win.HighchartsAdapter || ($ && {
		
		/**
		 * Initialize the adapter by applying some extensions to jQuery
		 */
		init: function (pathAnim) {
			
			// extend the animate function to allow SVG animations
			var Fx = $.fx;
			
			/*jslint unparam: true*//* allow unused param x in this function */
			$.extend($.easing, {
				easeOutQuad: function (x, t, b, c, d) {
					return -c * (t /= d) * (t - 2) + b;
				}
			});
			/*jslint unparam: false*/
		
			// extend some methods to check for elem.attr, which means it is a Highcharts SVG object
			$.each(['cur', '_default', 'width', 'height', 'opacity'], function (i, fn) {
				var obj = Fx.step,
					base;
					
				// Handle different parent objects
				if (fn === 'cur') {
					obj = Fx.prototype; // 'cur', the getter, relates to Fx.prototype
				
				} else if (fn === '_default' && $.Tween) { // jQuery 1.8 model
					obj = $.Tween.propHooks[fn];
					fn = 'set';
				}
		
				// Overwrite the method
				base = obj[fn];
				if (base) { // step.width and step.height don't exist in jQuery < 1.7
		
					// create the extended function replacement
					obj[fn] = function (fx) {

						var elem;
						
						// Fx.prototype.cur does not use fx argument
						fx = i ? fx : this;

						// Don't run animations on textual properties like align (#1821)
						if (fx.prop === 'align') {
							return;
						}
		
						// shortcut
						elem = fx.elem;
		
						// Fx.prototype.cur returns the current value. The other ones are setters
						// and returning a value has no effect.
						return elem.attr ? // is SVG element wrapper
							elem.attr(fx.prop, fn === 'cur' ? UNDEFINED : fx.now) : // apply the SVG wrapper's method
							base.apply(this, arguments); // use jQuery's built-in method
					};
				}
			});

			// Extend the opacity getter, needed for fading opacity with IE9 and jQuery 1.10+
			wrap($.cssHooks.opacity, 'get', function (proceed, elem, computed) {
				return elem.attr ? (elem.opacity || 0) : proceed.call(this, elem, computed);
			});
			
			// Define the setter function for d (path definitions)
			this.addAnimSetter('d', function (fx) {
				var elem = fx.elem,
					ends;
		
				// Normally start and end should be set in state == 0, but sometimes,
				// for reasons unknown, this doesn't happen. Perhaps state == 0 is skipped
				// in these cases
				if (!fx.started) {
					ends = pathAnim.init(elem, elem.d, elem.toD);
					fx.start = ends[0];
					fx.end = ends[1];
					fx.started = true;
				}
		
				// Interpolate each value of the path
				elem.attr('d', pathAnim.step(fx.start, fx.end, fx.pos, elem.toD));
			});
			
			/**
			 * Utility for iterating over an array. Parameters are reversed compared to jQuery.
			 * @param {Array} arr
			 * @param {Function} fn
			 */
			this.each = Array.prototype.forEach ?
				function (arr, fn) { // modern browsers
					return Array.prototype.forEach.call(arr, fn);
					
				} : 
				function (arr, fn) { // legacy
					var i, 
						len = arr.length;
					for (i = 0; i < len; i++) {
						if (fn.call(arr[i], arr[i], i, arr) === false) {
							return i;
						}
					}
				};
			
			/**
			 * Register Highcharts as a plugin in the respective framework
			 */
			$.fn.highcharts = function () {
				var constr = 'Chart', // default constructor
					args = arguments,
					options,
					ret,
					chart;

				if (this[0]) {

					if (isString(args[0])) {
						constr = args[0];
						args = Array.prototype.slice.call(args, 1); 
					}
					options = args[0];

					// Create the chart
					if (options !== UNDEFINED) {
						/*jslint unused:false*/
						options.chart = options.chart || {};
						options.chart.renderTo = this[0];
						chart = new Highcharts[constr](options, args[1]);
						ret = this;
						/*jslint unused:true*/
					}

					// When called without parameters or with the return argument, get a predefined chart
					if (options === UNDEFINED) {
						ret = charts[attr(this[0], 'data-highcharts-chart')];
					}
				}
				
				return ret;
			};

		},

		/**
		 * Add an animation setter for a specific property
		 */
		addAnimSetter: function (prop, setter) {
			// jQuery 1.8 style
			if ($.Tween) {
				$.Tween.propHooks[prop] = {
					set: setter
				};
			// pre 1.8
			} else {
				$.fx.step[prop] = setter;
			}
		},
		
		/**
		 * Downloads a script and executes a callback when done.
		 * @param {String} scriptLocation
		 * @param {Function} callback
		 */
		getScript: $.getScript,
		
		/**
		 * Return the index of an item in an array, or -1 if not found
		 */
		inArray: $.inArray,
		
		/**
		 * A direct link to jQuery methods. MooTools and Prototype adapters must be implemented for each case of method.
		 * @param {Object} elem The HTML element
		 * @param {String} method Which method to run on the wrapped element
		 */
		adapterRun: function (elem, method) {
			return $(elem)[method]();
		},
	
		/**
		 * Filter an array
		 */
		grep: $.grep,
	
		/**
		 * Map an array
		 * @param {Array} arr
		 * @param {Function} fn
		 */
		map: function (arr, fn) {
			//return jQuery.map(arr, fn);
			var results = [],
				i = 0,
				len = arr.length;
			for (; i < len; i++) {
				results[i] = fn.call(arr[i], arr[i], i, arr);
			}
			return results;
	
		},
	
		/**
		 * Get the position of an element relative to the top left of the page
		 */
		offset: function (el) {
			return $(el).offset();
		},
	
		/**
		 * Add an event listener
		 * @param {Object} el A HTML element or custom object
		 * @param {String} event The event type
		 * @param {Function} fn The event handler
		 */
		addEvent: function (el, event, fn) {
			$(el).bind(event, fn);
		},
	
		/**
		 * Remove event added with addEvent
		 * @param {Object} el The object
		 * @param {String} eventType The event type. Leave blank to remove all events.
		 * @param {Function} handler The function to remove
		 */
		removeEvent: function (el, eventType, handler) {
			// workaround for jQuery issue with unbinding custom events:
			// http://forum.jQuery.com/topic/javascript-error-when-unbinding-a-custom-event-using-jQuery-1-4-2
			var func = doc.removeEventListener ? 'removeEventListener' : 'detachEvent';
			if (doc[func] && el && !el[func]) {
				el[func] = function () {};
			}
	
			$(el).unbind(eventType, handler);
		},
	
		/**
		 * Fire an event on a custom object
		 * @param {Object} el
		 * @param {String} type
		 * @param {Object} eventArguments
		 * @param {Function} defaultFunction
		 */
		fireEvent: function (el, type, eventArguments, defaultFunction) {
			var event = $.Event(type),
				detachedType = 'detached' + type,
				defaultPrevented;
	
			// Remove warnings in Chrome when accessing returnValue (#2790), layerX and layerY. Although Highcharts
			// never uses these properties, Chrome includes them in the default click event and
			// raises the warning when they are copied over in the extend statement below.
			//
			// To avoid problems in IE (see #1010) where we cannot delete the properties and avoid
			// testing if they are there (warning in chrome) the only option is to test if running IE.
			if (!isIE && eventArguments) {
				delete eventArguments.layerX;
				delete eventArguments.layerY;
				delete eventArguments.returnValue;
			}
	
			extend(event, eventArguments);
	
			// Prevent jQuery from triggering the object method that is named the
			// same as the event. For example, if the event is 'select', jQuery
			// attempts calling el.select and it goes into a loop.
			if (el[type]) {
				el[detachedType] = el[type];
				el[type] = null;
			}
	
			// Wrap preventDefault and stopPropagation in try/catch blocks in
			// order to prevent JS errors when cancelling events on non-DOM
			// objects. #615.
			/*jslint unparam: true*/
			$.each(['preventDefault', 'stopPropagation'], function (i, fn) {
				var base = event[fn];
				event[fn] = function () {
					try {
						base.call(event);
					} catch (e) {
						if (fn === 'preventDefault') {
							defaultPrevented = true;
						}
					}
				};
			});
			/*jslint unparam: false*/
	
			// trigger it
			$(el).trigger(event);
	
			// attach the method
			if (el[detachedType]) {
				el[type] = el[detachedType];
				el[detachedType] = null;
			}
	
			if (defaultFunction && !event.isDefaultPrevented() && !defaultPrevented) {
				defaultFunction(event);
			}
		},
		
		/**
		 * Extension method needed for MooTools
		 */
		washMouseEvent: function (e) {
			var ret = e.originalEvent || e;
			
			// computed by jQuery, needed by IE8
			if (ret.pageX === UNDEFINED) { // #1236
				ret.pageX = e.pageX;
				ret.pageY = e.pageY;
			}
			
			return ret;
		},
	
		/**
		 * Animate a HTML element or SVG element wrapper
		 * @param {Object} el
		 * @param {Object} params
		 * @param {Object} options jQuery-like animation options: duration, easing, callback
		 */
		animate: function (el, params, options) {
			var $el = $(el);
			if (!el.style) {
				el.style = {}; // #1881
			}
			if (params.d) {
				el.toD = params.d; // keep the array form for paths, used in $.fx.step.d
				params.d = 1; // because in jQuery, animating to an array has a different meaning
			}
	
			$el.stop();
			if (params.opacity !== UNDEFINED && el.attr) {
				params.opacity += 'px'; // force jQuery to use same logic as width and height (#2161)
			}
			el.hasAnim = 1; // #3342
			$el.animate(params, options);
	
		},
		/**
		 * Stop running animation
		 */
		stop: function (el) {
			if (el.hasAnim) { // #3342, memory leak on calling $(el) from destroy
				$(el).stop();
			}
		}
	});
}(win.jQuery));


// check for a custom HighchartsAdapter defined prior to this file
var globalAdapter = win.HighchartsAdapter,
	adapter = globalAdapter || {};
	
// Initialize the adapter
if (globalAdapter) {
	globalAdapter.init.call(globalAdapter, pathAnim);
}


// Utility functions. If the HighchartsAdapter is not defined, adapter is an empty object
// and all the utility functions will be null. In that case they are populated by the
// default adapters below.
var adapterRun = adapter.adapterRun,
	getScript = adapter.getScript,
	inArray = adapter.inArray,
	each = Highcharts.each = adapter.each,
	grep = adapter.grep,
	offset = adapter.offset,
	map = adapter.map,
	addEvent = adapter.addEvent,
	removeEvent = adapter.removeEvent,
	fireEvent = adapter.fireEvent,
	washMouseEvent = adapter.washMouseEvent,
	animate = adapter.animate,
	stop = adapter.stop;



/* ****************************************************************************
 * Handle the options                                                         *
 *****************************************************************************/
defaultOptions = {
	colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', 
		    '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
	symbols: ['circle', 'diamond', 'square', 'triangle', 'triangle-down'],
	lang: {
		loading: 'Loading...',
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
				'August', 'September', 'October', 'November', 'December'],
		shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		decimalPoint: '.',
		numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'], // SI prefixes used in axis labels
		resetZoom: 'Reset zoom',
		resetZoomTitle: 'Reset zoom level 1:1',
		thousandsSep: ' '
	},
	global: {
		useUTC: true,
		//timezoneOffset: 0,
		canvasToolsURL: 'http://code.highcharts.com/4.1.5/modules/canvas-tools.js',
		VMLRadialGradientURL: 'http://code.highcharts.com/4.1.5/gfx/vml-radial-gradient.png'
	},
	chart: {
		//animation: true,
		//alignTicks: false,
		//reflow: true,
		//className: null,
		//events: { load, selection },
		//margin: [null],
		//marginTop: null,
		//marginRight: null,
		//marginBottom: null,
		//marginLeft: null,
		borderColor: '#4572A7',
		//borderWidth: 0,
		borderRadius: 0,
		defaultSeriesType: 'line',
		ignoreHiddenSeries: true,
		//inverted: false,
		//shadow: false,
		spacing: [10, 10, 15, 10],
		//spacingTop: 10,
		//spacingRight: 10,
		//spacingBottom: 15,
		//spacingLeft: 10,
		//style: {
		//	fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', // default font
		//	fontSize: '12px'
		//},
		backgroundColor: '#FFFFFF',
		//plotBackgroundColor: null,
		plotBorderColor: '#C0C0C0',
		//plotBorderWidth: 0,
		//plotShadow: false,
		//zoomType: ''
		resetZoomButton: {
			theme: {
				zIndex: 20
			},
			position: {
				align: 'right',
				x: -10,
				//verticalAlign: 'top',
				y: 10
			}
			// relativeTo: 'plot'
		}
	},
	title: {
		text: 'Chart title',
		align: 'center',
		// floating: false,
		margin: 15,
		// x: 0,
		// verticalAlign: 'top',
		// y: null,
		style: {
			color: '#333333',
			fontSize: '18px'
		}

	},
	subtitle: {
		text: '',
		align: 'center',
		// floating: false
		// x: 0,
		// verticalAlign: 'top',
		// y: null,
		style: {
			color: '#555555'
		}
	},

	plotOptions: {
		line: { // base series options
			allowPointSelect: false,
			showCheckbox: false,
			animation: {
				duration: 1000
			},
			//connectNulls: false,
			//cursor: 'default',
			//clip: true,
			//dashStyle: null,
			//enableMouseTracking: true,
			events: {},
			//legendIndex: 0,
			//linecap: 'round',
			lineWidth: 2,
			//shadow: false,
			// stacking: null,
			marker: {
				//enabled: true,
				//symbol: null,
				lineWidth: 0,
				radius: 4,
				lineColor: '#FFFFFF',
				//fillColor: null,
				states: { // states for a single point
					hover: {
						enabled: true,
						lineWidthPlus: 1,
						radiusPlus: 2
					},
					select: {
						fillColor: '#FFFFFF',
						lineColor: '#000000',
						lineWidth: 2
					}
				}
			},
			point: {
				events: {}
			},
			dataLabels: {
				align: 'center',
				// defer: true,
				// enabled: false,
				formatter: function () {
					return this.y === null ? '' : Highcharts.numberFormat(this.y, -1);
				},
				style: {
					color: 'contrast',
					fontSize: '11px',
					fontWeight: 'bold',
					textShadow: '0 0 6px contrast, 0 0 3px contrast'
				},
				verticalAlign: 'bottom', // above singular point
				x: 0,
				y: 0,
				// backgroundColor: undefined,
				// borderColor: undefined,
				// borderRadius: undefined,
				// borderWidth: undefined,
				padding: 5
				// shadow: false
			},
			cropThreshold: 300, // draw points outside the plot area when the number of points is less than this
			pointRange: 0,
			//pointStart: 0,
			//pointInterval: 1,
			//showInLegend: null, // auto: true for standalone series, false for linked series
			states: { // states for the entire series
				hover: {
					//enabled: false,
					lineWidthPlus: 1,
					marker: {
						// lineWidth: base + 1,
						// radius: base + 1
					},
					halo: {
						size: 10,
						opacity: 0.25
					}
				},
				select: {
					marker: {}
				}
			},
			stickyTracking: true,
			//tooltip: {
				//pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b>'
				//valueDecimals: null,
				//xDateFormat: '%A, %b %e, %Y',
				//valuePrefix: '',
				//ySuffix: ''				
			//}
			turboThreshold: 1000
			// zIndex: null
		}
	},
	labels: {
		//items: [],
		style: {
			//font: defaultFont,
			position: ABSOLUTE,
			color: '#3E576F'
		}
	},
	legend: {
		enabled: true,
		align: 'center',
		//floating: false,
		layout: 'horizontal',
		labelFormatter: function () {
			return this.name;
		},
		//borderWidth: 0,
		borderColor: '#909090',
		borderRadius: 0,
		navigation: {
			// animation: true,
			activeColor: '#274b6d',
			// arrowSize: 12
			inactiveColor: '#CCC'
			// style: {} // text styles
		},
		// margin: 20,
		// reversed: false,
		shadow: false,
		// backgroundColor: null,
		/*style: {
			padding: '5px'
		},*/
		itemStyle: {			
			color: '#333333',
			fontSize: '12px',
			fontWeight: 'bold'
		},
		itemHoverStyle: {
			//cursor: 'pointer', removed as of #601
			color: '#000'
		},
		itemHiddenStyle: {
			color: '#CCC'
		},
		itemCheckboxStyle: {
			position: ABSOLUTE,
			width: '13px', // for IE precision
			height: '13px'
		},
		// itemWidth: undefined,
		// symbolRadius: 0,
		// symbolWidth: 16,
		symbolPadding: 5,
		verticalAlign: 'bottom',
		// width: undefined,
		x: 0,
		y: 0,
		title: {
			//text: null,
			style: {
				fontWeight: 'bold'
			}
		}			
	},

	loading: {
		// hideDuration: 100,
		labelStyle: {
			fontWeight: 'bold',
			position: RELATIVE,
			top: '45%'
		},
		// showDuration: 0,
		style: {
			position: ABSOLUTE,
			backgroundColor: 'white',
			opacity: 0.5,
			textAlign: 'center'
		}
	},

	tooltip: {
		enabled: true,
		animation: hasSVG,
		//crosshairs: null,
		backgroundColor: 'rgba(249, 249, 249, .85)',
		borderWidth: 1,
		borderRadius: 3,
		dateTimeLabelFormats: { 
			millisecond: '%A, %b %e, %H:%M:%S.%L',
			second: '%A, %b %e, %H:%M:%S',
			minute: '%A, %b %e, %H:%M',
			hour: '%A, %b %e, %H:%M',
			day: '%A, %b %e, %Y',
			week: 'Week from %A, %b %e, %Y',
			month: '%B %Y',
			year: '%Y'
		},
		footerFormat: '',
		//formatter: defaultFormatter,
		headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
		pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
		shadow: true,
		//shape: 'callout',
		//shared: false,
		snap: isTouchDevice ? 25 : 10,
		style: {
			color: '#333333',
			cursor: 'default',
			fontSize: '12px',
			padding: '8px',
			whiteSpace: 'nowrap'
		}
		//xDateFormat: '%A, %b %e, %Y',
		//valueDecimals: null,
		//valuePrefix: '',
		//valueSuffix: ''
	},

	credits: {
		enabled: true,
		text: 'Highcharts.com',
		href: 'http://www.highcharts.com',
		position: {
			align: 'right',
			x: -10,
			verticalAlign: 'bottom',
			y: -5
		},
		style: {
			cursor: 'pointer',
			color: '#909090',
			fontSize: '9px'
		}
	}
};




// Series defaults
var defaultPlotOptions = defaultOptions.plotOptions,
	defaultSeriesOptions = defaultPlotOptions.line;

// set the default time methods
setTimeMethods();



/**
 * Set the time methods globally based on the useUTC option. Time method can be either
 * local time or UTC (default).
 */
function setTimeMethods() {
	var globalOptions = defaultOptions.global,
		useUTC = globalOptions.useUTC,
		GET = useUTC ? 'getUTC' : 'get',
		SET = useUTC ? 'setUTC' : 'set';


	Date = globalOptions.Date || window.Date;
	timezoneOffset = useUTC && globalOptions.timezoneOffset;
	getTimezoneOffset = useUTC && globalOptions.getTimezoneOffset;
	makeTime = function (year, month, date, hours, minutes, seconds) {
		var d;
		if (useUTC) {
			d = Date.UTC.apply(0, arguments);
			d += getTZOffset(d);
		} else {
			d = new Date(
				year,
				month,
				pick(date, 1),
				pick(hours, 0),
				pick(minutes, 0),
				pick(seconds, 0)
			).getTime();
		}
		return d;
	};
	getMinutes =      GET + 'Minutes';
	getHours =        GET + 'Hours';
	getDay =          GET + 'Day';
	getDate =         GET + 'Date';
	getMonth =        GET + 'Month';
	getFullYear =     GET + 'FullYear';
	setMilliseconds = SET + 'Milliseconds';
	setSeconds =      SET + 'Seconds';
	setMinutes =      SET + 'Minutes';
	setHours =        SET + 'Hours';
	setDate =         SET + 'Date';
	setMonth =        SET + 'Month';
	setFullYear =     SET + 'FullYear';

}

/**
 * Merge the default options with custom options and return the new options structure
 * @param {Object} options The new custom options
 */
function setOptions(options) {
	
	// Copy in the default options
	defaultOptions = merge(true, defaultOptions, options);
	
	// Apply UTC
	setTimeMethods();

	return defaultOptions;
}

/**
 * Get the updated default options. Until 3.0.7, merely exposing defaultOptions for outside modules
 * wasn't enough because the setOptions method created a new object.
 */
function getOptions() {
	return defaultOptions;
}


/**
 * Handle color operations. The object methods are chainable.
 * @param {String} input The input color in either rbga or hex format
 */
var rgbaRegEx = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
	hexRegEx = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
	rgbRegEx = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/;

var Color = function (input) {
	// declare variables
	var rgba = [], result, stops;

	/**
	 * Parse the input color to rgba array
	 * @param {String} input
	 */
	function init(input) {

		// Gradients
		if (input && input.stops) {
			stops = map(input.stops, function (stop) {
				return Color(stop[1]);
			});

		// Solid colors
		} else {
			// rgba
			result = rgbaRegEx.exec(input);
			if (result) {
				rgba = [pInt(result[1]), pInt(result[2]), pInt(result[3]), parseFloat(result[4], 10)];
			} else { 
				// hex
				result = hexRegEx.exec(input);
				if (result) {
					rgba = [pInt(result[1], 16), pInt(result[2], 16), pInt(result[3], 16), 1];
				} else {
					// rgb
					result = rgbRegEx.exec(input);
					if (result) {
						rgba = [pInt(result[1]), pInt(result[2]), pInt(result[3]), 1];
					}
				}
			}
		}		

	}
	/**
	 * Return the color a specified format
	 * @param {String} format
	 */
	function get(format) {
		var ret;

		if (stops) {
			ret = merge(input);
			ret.stops = [].concat(ret.stops);
			each(stops, function (stop, i) {
				ret.stops[i] = [ret.stops[i][0], stop.get(format)];
			});

		// it's NaN if gradient colors on a column chart
		} else if (rgba && !isNaN(rgba[0])) {
			if (format === 'rgb') {
				ret = 'rgb(' + rgba[0] + ',' + rgba[1] + ',' + rgba[2] + ')';
			} else if (format === 'a') {
				ret = rgba[3];
			} else {
				ret = 'rgba(' + rgba.join(',') + ')';
			}
		} else {
			ret = input;
		}
		return ret;
	}

	/**
	 * Brighten the color
	 * @param {Number} alpha
	 */
	function brighten(alpha) {
		if (stops) {
			each(stops, function (stop) {
				stop.brighten(alpha);
			});
		
		} else if (isNumber(alpha) && alpha !== 0) {
			var i;
			for (i = 0; i < 3; i++) {
				rgba[i] += pInt(alpha * 255);

				if (rgba[i] < 0) {
					rgba[i] = 0;
				}
				if (rgba[i] > 255) {
					rgba[i] = 255;
				}
			}
		}
		return this;
	}
	/**
	 * Set the color's opacity to a given alpha value
	 * @param {Number} alpha
	 */
	function setOpacity(alpha) {
		rgba[3] = alpha;
		return this;
	}

	// initialize: parse the input
	init(input);

	// public methods
	return {
		get: get,
		brighten: brighten,
		rgba: rgba,
		setOpacity: setOpacity,
		raw: input
	};
};


/**
 * A wrapper object for SVG elements
 */
function SVGElement() {}

SVGElement.prototype = {
	
	// Default base for animation
	opacity: 1,
	// For labels, these CSS properties are applied to the <text> node directly
	textProps: ['fontSize', 'fontWeight', 'fontFamily', 'fontStyle', 'color', 
		'lineHeight', 'width', 'textDecoration', 'textShadow'],
	
	/**
	 * Initialize the SVG renderer
	 * @param {Object} renderer
	 * @param {String} nodeName
	 */
	init: function (renderer, nodeName) {
		var wrapper = this;
		wrapper.element = nodeName === 'span' ?
			createElement(nodeName) :
			doc.createElementNS(SVG_NS, nodeName);
		wrapper.renderer = renderer;
	},
	
	/**
	 * Animate a given attribute
	 * @param {Object} params
	 * @param {Number} options The same options as in jQuery animation
	 * @param {Function} complete Function to perform at the end of animation
	 */
	animate: function (params, options, complete) {
		var animOptions = pick(options, globalAnimation, true);
		stop(this); // stop regardless of animation actually running, or reverting to .attr (#607)
		if (animOptions) {
			animOptions = merge(animOptions, {}); //#2625
			if (complete) { // allows using a callback with the global animation without overwriting it
				animOptions.complete = complete;
			}
			animate(this, params, animOptions);
		} else {
			this.attr(params);
			if (complete) {
				complete();
			}
		}
		return this;
	},

	/**
	 * Build an SVG gradient out of a common JavaScript configuration object
	 */
	colorGradient: function (color, prop, elem) {
		var renderer = this.renderer,
			colorObject,
			gradName,
			gradAttr,
			gradients,
			gradientObject,
			stops,
			stopColor,
			stopOpacity,
			radialReference,
			n,
			id,
			key = [];

		// Apply linear or radial gradients
		if (color.linearGradient) {
			gradName = 'linearGradient';
		} else if (color.radialGradient) {
			gradName = 'radialGradient';
		}

		if (gradName) {
			gradAttr = color[gradName];
			gradients = renderer.gradients;
			stops = color.stops;
			radialReference = elem.radialReference;

			// Keep < 2.2 kompatibility
			if (isArray(gradAttr)) {
				color[gradName] = gradAttr = {
					x1: gradAttr[0],
					y1: gradAttr[1],
					x2: gradAttr[2],
					y2: gradAttr[3],
					gradientUnits: 'userSpaceOnUse'
				};
			}

			// Correct the radial gradient for the radial reference system
			if (gradName === 'radialGradient' && radialReference && !defined(gradAttr.gradientUnits)) {
				gradAttr = merge(gradAttr, {
					cx: (radialReference[0] - radialReference[2] / 2) + gradAttr.cx * radialReference[2],
					cy: (radialReference[1] - radialReference[2] / 2) + gradAttr.cy * radialReference[2],
					r: gradAttr.r * radialReference[2],
					gradientUnits: 'userSpaceOnUse'
				});
			}

			// Build the unique key to detect whether we need to create a new element (#1282)
			for (n in gradAttr) {
				if (n !== 'id') {
					key.push(n, gradAttr[n]);
				}
			}
			for (n in stops) {
				key.push(stops[n]);
			}
			key = key.join(',');

			// Check if a gradient object with the same config object is created within this renderer
			if (gradients[key]) {
				id = gradients[key].attr('id');

			} else {

				// Set the id and create the element
				gradAttr.id = id = PREFIX + idCounter++;
				gradients[key] = gradientObject = renderer.createElement(gradName)
					.attr(gradAttr)
					.add(renderer.defs);


				// The gradient needs to keep a list of stops to be able to destroy them
				gradientObject.stops = [];
				each(stops, function (stop) {
					var stopObject;
					if (stop[1].indexOf('rgba') === 0) {
						colorObject = Color(stop[1]);
						stopColor = colorObject.get('rgb');
						stopOpacity = colorObject.get('a');
					} else {
						stopColor = stop[1];
						stopOpacity = 1;
					}
					stopObject = renderer.createElement('stop').attr({
						offset: stop[0],
						'stop-color': stopColor,
						'stop-opacity': stopOpacity
					}).add(gradientObject);

					// Add the stop element to the gradient
					gradientObject.stops.push(stopObject);
				});
			}

			// Set the reference to the gradient object
			elem.setAttribute(prop, 'url(' + renderer.url + '#' + id + ')');
		} 
	},

	/**
	 * Apply a polyfill to the text-stroke CSS property, by copying the text element
	 * and apply strokes to the copy.
	 *
	 * docs: update default, document the polyfill and the limitations on hex colors and pixel values, document contrast pseudo-color
	 * TODO: 
	 * - update defaults
	 */
	applyTextShadow: function (textShadow) {
		var elem = this.element,
			tspans,
			hasContrast = textShadow.indexOf('contrast') !== -1,
			// IE10 and IE11 report textShadow in elem.style even though it doesn't work. Check
			// this again with new IE release. In exports, the rendering is passed to PhantomJS. 
			supports = this.renderer.forExport || (elem.style.textShadow !== UNDEFINED && !isIE);

		// When the text shadow is set to contrast, use dark stroke for light text and vice versa
		if (hasContrast) {
			textShadow = textShadow.replace(/contrast/g, this.renderer.getContrast(elem.style.fill));
		}

		/* Selective side-by-side testing in supported browser (http://jsfiddle.net/highcharts/73L1ptrh/)
		if (elem.textContent.indexOf('2.') === 0) {
			elem.style['text-shadow'] = 'none';
			supports = false;
		}
		// */

		// No reason to polyfill, we've got native support
		if (supports) {
			if (hasContrast) { // Apply the altered style
				css(elem, {
					textShadow: textShadow
				});
			}
		} else {

			this.fakeTS = true; // Fake text shadow

			// In order to get the right y position of the clones, 
			// copy over the y setter
			this.ySetter = this.xSetter;

			tspans = [].slice.call(elem.getElementsByTagName('tspan'));
			each(textShadow.split(/\s?,\s?/g), function (textShadow) {
				var firstChild = elem.firstChild,
					color,
					strokeWidth;
				
				textShadow = textShadow.split(' ');
				color = textShadow[textShadow.length - 1];

				// Approximately tune the settings to the text-shadow behaviour
				strokeWidth = textShadow[textShadow.length - 2];

				if (strokeWidth) {
					each(tspans, function (tspan, y) {
						var clone;

						// Let the first line start at the correct X position
						if (y === 0) {
							tspan.setAttribute('x', elem.getAttribute('x'));
							y = elem.getAttribute('y');
							tspan.setAttribute('y', y || 0);
							if (y === null) {
								elem.setAttribute('y', 0);
							}
						}

						// Create the clone and apply shadow properties
						clone = tspan.cloneNode(1);
						attr(clone, {
							'class': PREFIX + 'text-shadow',
							'fill': color,
							'stroke': color,
							'stroke-opacity': 1 / mathMax(pInt(strokeWidth), 3),
							'stroke-width': strokeWidth,
							'stroke-linejoin': 'round'
						});
						elem.insertBefore(clone, firstChild);
					});
				}
			});
		}
	},

	/**
	 * Set or get a given attribute
	 * @param {Object|String} hash
	 * @param {Mixed|Undefined} val
	 */
	attr: function (hash, val) {
		var key,
			value,
			element = this.element,
			hasSetSymbolSize,
			ret = this,
			skipAttr;

		// single key-value pair
		if (typeof hash === 'string' && val !== UNDEFINED) {
			key = hash;
			hash = {};
			hash[key] = val;
		}

		// used as a getter: first argument is a string, second is undefined
		if (typeof hash === 'string') {
			ret = (this[hash + 'Getter'] || this._defaultGetter).call(this, hash, element);
		
		// setter
		} else {

			for (key in hash) {
				value = hash[key];
				skipAttr = false;



				if (this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(key)) {
					if (!hasSetSymbolSize) {
						this.symbolAttr(hash);
						hasSetSymbolSize = true;
					}
					skipAttr = true;
				}

				if (this.rotation && (key === 'x' || key === 'y')) {
					this.doTransform = true;
				}
				
				if (!skipAttr) {
					(this[key + 'Setter'] || this._defaultSetter).call(this, value, key, element);
				}

				// Let the shadow follow the main element
				if (this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(key)) {
					this.updateShadows(key, value);
				}
			}

			// Update transform. Do this outside the loop to prevent redundant updating for batch setting
			// of attributes.
			if (this.doTransform) {
				this.updateTransform();
				this.doTransform = false;
			}

		}

		return ret;
	},

	updateShadows: function (key, value) {
		var shadows = this.shadows,
			i = shadows.length;
		while (i--) {
			shadows[i].setAttribute(
				key,
				key === 'height' ?
					mathMax(value - (shadows[i].cutHeight || 0), 0) :
					key === 'd' ? this.d : value
			);
		}
	},

	/**
	 * Add a class name to an element
	 */
	addClass: function (className) {
		var element = this.element,
			currentClassName = attr(element, 'class') || '';

		if (currentClassName.indexOf(className) === -1) {
			attr(element, 'class', currentClassName + ' ' + className);
		}
		return this;
	},
	/* hasClass and removeClass are not (yet) needed
	hasClass: function (className) {
		return attr(this.element, 'class').indexOf(className) !== -1;
	},
	removeClass: function (className) {
		attr(this.element, 'class', attr(this.element, 'class').replace(className, ''));
		return this;
	},
	*/

	/**
	 * If one of the symbol size affecting parameters are changed,
	 * check all the others only once for each call to an element's
	 * .attr() method
	 * @param {Object} hash
	 */
	symbolAttr: function (hash) {
		var wrapper = this;

		each(['x', 'y', 'r', 'start', 'end', 'width', 'height', 'innerR', 'anchorX', 'anchorY'], function (key) {
			wrapper[key] = pick(hash[key], wrapper[key]);
		});

		wrapper.attr({
			d: wrapper.renderer.symbols[wrapper.symbolName](
				wrapper.x,
				wrapper.y,
				wrapper.width,
				wrapper.height,
				wrapper
			)
		});
	},

	/**
	 * Apply a clipping path to this object
	 * @param {String} id
	 */
	clip: function (clipRect) {
		return this.attr('clip-path', clipRect ? 'url(' + this.renderer.url + '#' + clipRect.id + ')' : NONE);
	},

	/**
	 * Calculate the coordinates needed for drawing a rectangle crisply and return the
	 * calculated attributes
	 * @param {Number} strokeWidth
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	crisp: function (rect) {

		var wrapper = this,
			key,
			attribs = {},
			normalizer,
			strokeWidth = rect.strokeWidth || wrapper.strokeWidth || 0;

		normalizer = mathRound(strokeWidth) % 2 / 2; // mathRound because strokeWidth can sometimes have roundoff errors

		// normalize for crisp edges
		rect.x = mathFloor(rect.x || wrapper.x || 0) + normalizer;
		rect.y = mathFloor(rect.y || wrapper.y || 0) + normalizer;
		rect.width = mathFloor((rect.width || wrapper.width || 0) - 2 * normalizer);
		rect.height = mathFloor((rect.height || wrapper.height || 0) - 2 * normalizer);
		rect.strokeWidth = strokeWidth;

		for (key in rect) {
			if (wrapper[key] !== rect[key]) { // only set attribute if changed
				wrapper[key] = attribs[key] = rect[key];
			}
		}

		return attribs;
	},

	/**
	 * Set styles for the element
	 * @param {Object} styles
	 */
	css: function (styles) {
		var elemWrapper = this,
			oldStyles = elemWrapper.styles,
			newStyles = {},
			elem = elemWrapper.element,
			textWidth,
			n,
			serializedCss = '',
			hyphenate,
			hasNew = !oldStyles;

		// convert legacy
		if (styles && styles.color) {
			styles.fill = styles.color;
		}

		// Filter out existing styles to increase performance (#2640)
		if (oldStyles) {
			for (n in styles) {
				if (styles[n] !== oldStyles[n]) {
					newStyles[n] = styles[n];
					hasNew = true;
				}
			}
		}
		if (hasNew) {
			textWidth = elemWrapper.textWidth = 
				(styles && styles.width && elem.nodeName.toLowerCase() === 'text' && pInt(styles.width)) || 
				elemWrapper.textWidth; // #3501

			// Merge the new styles with the old ones
			if (oldStyles) {
				styles = extend(
					oldStyles,
					newStyles
				);
			}		

			// store object
			elemWrapper.styles = styles;

			if (textWidth && (useCanVG || (!hasSVG && elemWrapper.renderer.forExport))) {
				delete styles.width;
			}

			// serialize and set style attribute
			if (isIE && !hasSVG) {
				css(elemWrapper.element, styles);
			} else {
				/*jslint unparam: true*/
				hyphenate = function (a, b) { return '-' + b.toLowerCase(); };
				/*jslint unparam: false*/
				for (n in styles) {
					serializedCss += n.replace(/([A-Z])/g, hyphenate) + ':' + styles[n] + ';';
				}
				attr(elem, 'style', serializedCss); // #1881
			}


			// re-build text
			if (textWidth && elemWrapper.added) {
				elemWrapper.renderer.buildText(elemWrapper);
			}
		}

		return elemWrapper;
	},

	/**
	 * Add an event listener
	 * @param {String} eventType
	 * @param {Function} handler
	 */
	on: function (eventType, handler) {
		var svgElement = this,
			element = svgElement.element;
		
		// touch
		if (hasTouch && eventType === 'click') {
			element.ontouchstart = function (e) {			
				svgElement.touchEventFired = Date.now();				
				e.preventDefault();
				handler.call(element, e);
			};
			element.onclick = function (e) {												
				if (userAgent.indexOf('Android') === -1 || Date.now() - (svgElement.touchEventFired || 0) > 1100) { // #2269
					handler.call(element, e);
				}
			};			
		} else {
			// simplest possible event model for internal use
			element['on' + eventType] = handler;
		}
		return this;
	},

	/**
	 * Set the coordinates needed to draw a consistent radial gradient across
	 * pie slices regardless of positioning inside the chart. The format is
	 * [centerX, centerY, diameter] in pixels.
	 */
	setRadialReference: function (coordinates) {
		this.element.radialReference = coordinates;
		return this;
	},

	/**
	 * Move an object and its children by x and y values
	 * @param {Number} x
	 * @param {Number} y
	 */
	translate: function (x, y) {
		return this.attr({
			translateX: x,
			translateY: y
		});
	},

	/**
	 * Invert a group, rotate and flip
	 */
	invert: function () {
		var wrapper = this;
		wrapper.inverted = true;
		wrapper.updateTransform();
		return wrapper;
	},

	/**
	 * Private method to update the transform attribute based on internal
	 * properties
	 */
	updateTransform: function () {
		var wrapper = this,
			translateX = wrapper.translateX || 0,
			translateY = wrapper.translateY || 0,
			scaleX = wrapper.scaleX,
			scaleY = wrapper.scaleY,
			inverted = wrapper.inverted,
			rotation = wrapper.rotation,
			element = wrapper.element,
			transform;

		// flipping affects translate as adjustment for flipping around the group's axis
		if (inverted) {
			translateX += wrapper.attr('width');
			translateY += wrapper.attr('height');
		}

		// Apply translate. Nearly all transformed elements have translation, so instead
		// of checking for translate = 0, do it always (#1767, #1846).
		transform = ['translate(' + translateX + ',' + translateY + ')'];

		// apply rotation
		if (inverted) {
			transform.push('rotate(90) scale(-1,1)');
		} else if (rotation) { // text rotation
			transform.push('rotate(' + rotation + ' ' + (element.getAttribute('x') || 0) + ' ' + (element.getAttribute('y') || 0) + ')');
			
			// Delete bBox memo when the rotation changes
			//delete wrapper.bBox;
		}

		// apply scale
		if (defined(scaleX) || defined(scaleY)) {
			transform.push('scale(' + pick(scaleX, 1) + ' ' + pick(scaleY, 1) + ')');
		}

		if (transform.length) {
			element.setAttribute('transform', transform.join(' '));
		}
	},
	/**
	 * Bring the element to the front
	 */
	toFront: function () {
		var element = this.element;
		element.parentNode.appendChild(element);
		return this;
	},


	/**
	 * Break down alignment options like align, verticalAlign, x and y
	 * to x and y relative to the chart.
	 *
	 * @param {Object} alignOptions
	 * @param {Boolean} alignByTranslate
	 * @param {String[Object} box The box to align to, needs a width and height. When the
	 *		box is a string, it refers to an object in the Renderer. For example, when
	 *		box is 'spacingBox', it refers to Renderer.spacingBox which holds width, height
	 *		x and y properties.
	 *
	 */
	align: function (alignOptions, alignByTranslate, box) {
		var align,
			vAlign,
			x,
			y,
			attribs = {},
			alignTo,
			renderer = this.renderer,
			alignedObjects = renderer.alignedObjects;

		// First call on instanciate
		if (alignOptions) {
			this.alignOptions = alignOptions;
			this.alignByTranslate = alignByTranslate;
			if (!box || isString(box)) { // boxes other than renderer handle this internally
				this.alignTo = alignTo = box || 'renderer';
				erase(alignedObjects, this); // prevent duplicates, like legendGroup after resize
				alignedObjects.push(this);
				box = null; // reassign it below
			}

		// When called on resize, no arguments are supplied
		} else {
			alignOptions = this.alignOptions;
			alignByTranslate = this.alignByTranslate;
			alignTo = this.alignTo;
		}

		box = pick(box, renderer[alignTo], renderer);

		// Assign variables
		align = alignOptions.align;
		vAlign = alignOptions.verticalAlign;
		x = (box.x || 0) + (alignOptions.x || 0); // default: left align
		y = (box.y || 0) + (alignOptions.y || 0); // default: top align

		// Align
		if (align === 'right' || align === 'center') {
			x += (box.width - (alignOptions.width || 0)) /
					{ right: 1, center: 2 }[align];
		}
		attribs[alignByTranslate ? 'translateX' : 'x'] = mathRound(x);


		// Vertical align
		if (vAlign === 'bottom' || vAlign === 'middle') {
			y += (box.height - (alignOptions.height || 0)) /
					({ bottom: 1, middle: 2 }[vAlign] || 1);

		}
		attribs[alignByTranslate ? 'translateY' : 'y'] = mathRound(y);

		// Animate only if already placed
		this[this.placed ? 'animate' : 'attr'](attribs);
		this.placed = true;
		this.alignAttr = attribs;

		return this;
	},

	/**
	 * Get the bounding box (width, height, x and y) for the element
	 */
	getBBox: function (reload) {
		var wrapper = this,
			bBox,// = wrapper.bBox,
			renderer = wrapper.renderer,
			width,
			height,
			rotation = wrapper.rotation,
			element = wrapper.element,
			styles = wrapper.styles,
			rad = rotation * deg2rad,
			textStr = wrapper.textStr,
			textShadow,
			elemStyle = element.style,
			toggleTextShadowShim,
			cacheKey;

		if (textStr !== UNDEFINED) {

			// Properties that affect bounding box
			cacheKey = ['', rotation || 0, styles && styles.fontSize, element.style.width].join(',');

			// Since numbers are monospaced, and numerical labels appear a lot in a chart,
			// we assume that a label of n characters has the same bounding box as others 
			// of the same length.
			if (textStr === '' || numRegex.test(textStr)) {
				cacheKey = 'num:' + textStr.toString().length + cacheKey;

			// Caching all strings reduces rendering time by 4-5%.
			} else {
				cacheKey = textStr + cacheKey;
			}
		}

		if (cacheKey && !reload) {
			bBox = renderer.cache[cacheKey];
		}

		// No cache found
		if (!bBox) {

			// SVG elements
			if (element.namespaceURI === SVG_NS || renderer.forExport) {
				try { // Fails in Firefox if the container has display: none.

					// When the text shadow shim is used, we need to hide the fake shadows
					// to get the correct bounding box (#3872)
					toggleTextShadowShim = this.fakeTS && function (display) {
						each(element.querySelectorAll('.' + PREFIX + 'text-shadow'), function (tspan) {
							tspan.style.display = display;
						});
					};

					// Workaround for #3842, Firefox reporting wrong bounding box for shadows
					if (isFirefox && elemStyle.textShadow) {
						textShadow = elemStyle.textShadow;
						elemStyle.textShadow = '';
					} else if (toggleTextShadowShim) {
						toggleTextShadowShim(NONE);
					}

					bBox = element.getBBox ?
						// SVG: use extend because IE9 is not allowed to change width and height in case
						// of rotation (below)
						extend({}, element.getBBox()) :
						// Canvas renderer and legacy IE in export mode
						{
							width: element.offsetWidth,
							height: element.offsetHeight
						};

					// #3842
					if (textShadow) {
						elemStyle.textShadow = textShadow;
					} else if (toggleTextShadowShim) {
						toggleTextShadowShim('');
					}
				} catch (e) {}

				// If the bBox is not set, the try-catch block above failed. The other condition
				// is for Opera that returns a width of -Infinity on hidden elements.
				if (!bBox || bBox.width < 0) {
					bBox = { width: 0, height: 0 };
				}


			// VML Renderer or useHTML within SVG
			} else {

				bBox = wrapper.htmlGetBBox();

			}

			// True SVG elements as well as HTML elements in modern browsers using the .useHTML option
			// need to compensated for rotation
			if (renderer.isSVG) {
				width = bBox.width;
				height = bBox.height;

				// Workaround for wrong bounding box in IE9 and IE10 (#1101, #1505, #1669, #2568)
				if (isIE && styles && styles.fontSize === '11px' && height.toPrecision(3) === '16.9') {
					bBox.height = height = 14;
				}

				// Adjust for rotated text
				if (rotation) {
					bBox.width = mathAbs(height * mathSin(rad)) + mathAbs(width * mathCos(rad));
					bBox.height = mathAbs(height * mathCos(rad)) + mathAbs(width * mathSin(rad));
				}
			}

			// Cache it
			renderer.cache[cacheKey] = bBox;
		}
		return bBox;
	},

	/**
	 * Show the element
	 */
	show: function (inherit) {
		// IE9-11 doesn't handle visibilty:inherit well, so we remove the attribute instead (#2881)
		if (inherit && this.element.namespaceURI === SVG_NS) {
			this.element.removeAttribute('visibility');
		} else {
			this.attr({ visibility: inherit ? 'inherit' : VISIBLE });
		}
		return this;
	},

	/**
	 * Hide the element
	 */
	hide: function () {
		return this.attr({ visibility: HIDDEN });
	},

	fadeOut: function (duration) {
		var elemWrapper = this;
		elemWrapper.animate({
			opacity: 0
		}, {
			duration: duration || 150,
			complete: function () {
				elemWrapper.attr({ y: -9999 }); // #3088, assuming we're only using this for tooltips
			}
		});
	},

	/**
	 * Add the element
	 * @param {Object|Undefined} parent Can be an element, an element wrapper or undefined
	 *	to append the element to the renderer.box.
	 */
	add: function (parent) {

		var renderer = this.renderer,
			element = this.element,
			inserted;

		if (parent) {
			this.parentGroup = parent;
		}

		// mark as inverted
		this.parentInverted = parent && parent.inverted;

		// build formatted text
		if (this.textStr !== undefined) {
			renderer.buildText(this);
		}

		// Mark as added
		this.added = true;

		// If we're adding to renderer root, or other elements in the group 
		// have a z index, we need to handle it
		if (!parent || parent.handleZ || this.zIndex) {
			inserted = this.zIndexSetter();
		}

		// If zIndex is not handled, append at the end
		if (!inserted) {
			(parent ? parent.element : renderer.box).appendChild(element);
		}

		// fire an event for internal hooks
		if (this.onAdd) {
			this.onAdd();
		}

		return this;
	},

	/**
	 * Removes a child either by removeChild or move to garbageBin.
	 * Issue 490; in VML removeChild results in Orphaned nodes according to sIEve, discardElement does not.
	 */
	safeRemoveChild: function (element) {
		var parentNode = element.parentNode;
		if (parentNode) {
			parentNode.removeChild(element);
		}
	},

	/**
	 * Destroy the element and element wrapper
	 */
	destroy: function () {
		var wrapper = this,
			element = wrapper.element || {},
			shadows = wrapper.shadows,
			parentToClean = wrapper.renderer.isSVG && element.nodeName === 'SPAN' && wrapper.parentGroup,
			grandParent,
			key,
			i;

		// remove events
		element.onclick = element.onmouseout = element.onmouseover = element.onmousemove = element.point = null;
		stop(wrapper); // stop running animations

		if (wrapper.clipPath) {
			wrapper.clipPath = wrapper.clipPath.destroy();
		}

		// Destroy stops in case this is a gradient object
		if (wrapper.stops) {
			for (i = 0; i < wrapper.stops.length; i++) {
				wrapper.stops[i] = wrapper.stops[i].destroy();
			}
			wrapper.stops = null;
		}

		// remove element
		wrapper.safeRemoveChild(element);

		// destroy shadows
		if (shadows) {
			each(shadows, function (shadow) {
				wrapper.safeRemoveChild(shadow);
			});
		}

		// In case of useHTML, clean up empty containers emulating SVG groups (#1960, #2393, #2697).
		while (parentToClean && parentToClean.div && parentToClean.div.childNodes.length === 0) {
			grandParent = parentToClean.parentGroup;
			wrapper.safeRemoveChild(parentToClean.div);
			delete parentToClean.div;
			parentToClean = grandParent;
		}

		// remove from alignObjects
		if (wrapper.alignTo) {
			erase(wrapper.renderer.alignedObjects, wrapper);
		}

		for (key in wrapper) {
			delete wrapper[key];
		}

		return null;
	},

	/**
	 * Add a shadow to the element. Must be done after the element is added to the DOM
	 * @param {Boolean|Object} shadowOptions
	 */
	shadow: function (shadowOptions, group, cutOff) {
		var shadows = [],
			i,
			shadow,
			element = this.element,
			strokeWidth,
			shadowWidth,
			shadowElementOpacity,

			// compensate for inverted plot area
			transform;


		if (shadowOptions) {
			shadowWidth = pick(shadowOptions.width, 3);
			shadowElementOpacity = (shadowOptions.opacity || 0.15) / shadowWidth;
			transform = this.parentInverted ?
				'(-1,-1)' :
				'(' + pick(shadowOptions.offsetX, 1) + ', ' + pick(shadowOptions.offsetY, 1) + ')';
			for (i = 1; i <= shadowWidth; i++) {
				shadow = element.cloneNode(0);
				strokeWidth = (shadowWidth * 2) + 1 - (2 * i);
				attr(shadow, {
					'isShadow': 'true',
					'stroke': shadowOptions.color || 'black',
					'stroke-opacity': shadowElementOpacity * i,
					'stroke-width': strokeWidth,
					'transform': 'translate' + transform,
					'fill': NONE
				});
				if (cutOff) {
					attr(shadow, 'height', mathMax(attr(shadow, 'height') - strokeWidth, 0));
					shadow.cutHeight = strokeWidth;
				}

				if (group) {
					group.element.appendChild(shadow);
				} else {
					element.parentNode.insertBefore(shadow, element);
				}

				shadows.push(shadow);
			}

			this.shadows = shadows;
		}
		return this;

	},

	xGetter: function (key) {
		if (this.element.nodeName === 'circle') {
			key = { x: 'cx', y: 'cy' }[key] || key;
		}
		return this._defaultGetter(key);
	},

	/** 
	 * Get the current value of an attribute or pseudo attribute, used mainly
	 * for animation.
	 */
	_defaultGetter: function (key) {
		var ret = pick(this[key], this.element ? this.element.getAttribute(key) : null, 0);

		if (/^[\-0-9\.]+$/.test(ret)) { // is numerical
			ret = parseFloat(ret);
		}
		return ret;
	},


	dSetter: function (value, key, element) {
		if (value && value.join) { // join path
			value = value.join(' ');
		}
		if (/(NaN| {2}|^$)/.test(value)) {
			value = 'M 0 0';
		}
		element.setAttribute(key, value);

		this[key] = value;
	},
	dashstyleSetter: function (value) {
		var i;
		value = value && value.toLowerCase();
		if (value) {
			value = value
				.replace('shortdashdotdot', '3,1,1,1,1,1,')
				.replace('shortdashdot', '3,1,1,1')
				.replace('shortdot', '1,1,')
				.replace('shortdash', '3,1,')
				.replace('longdash', '8,3,')
				.replace(/dot/g, '1,3,')
				.replace('dash', '4,3,')
				.replace(/,$/, '')
				.split(','); // ending comma

			i = value.length;
			while (i--) {
				value[i] = pInt(value[i]) * this['stroke-width'];
			}
			value = value.join(',')
				.replace('NaN', 'none'); // #3226
			this.element.setAttribute('stroke-dasharray', value);
		}
	},
	alignSetter: function (value) {
		this.element.setAttribute('text-anchor', { left: 'start', center: 'middle', right: 'end' }[value]);
	},
	opacitySetter: function (value, key, element) {
		this[key] = value;
		element.setAttribute(key, value);
	},
	titleSetter: function (value) {
		var titleNode = this.element.getElementsByTagName('title')[0];
		if (!titleNode) {
			titleNode = doc.createElementNS(SVG_NS, 'title');
			this.element.appendChild(titleNode);
		}
		titleNode.textContent = (String(pick(value), '')).replace(/<[^>]*>/g, ''); // #3276 #3895
	},
	textSetter: function (value) {
		if (value !== this.textStr) {
			// Delete bBox memo when the text changes
			delete this.bBox;
		
			this.textStr = value;
			if (this.added) {
				this.renderer.buildText(this);
			}
		}
	},
	fillSetter: function (value, key, element) {
		if (typeof value === 'string') {
			element.setAttribute(key, value);
		} else if (value) {
			this.colorGradient(value, key, element);
		}
	},
	zIndexSetter: function (value, key) {
		var renderer = this.renderer,
			parentGroup = this.parentGroup,
			parentWrapper = parentGroup || renderer,
			parentNode = parentWrapper.element || renderer.box,
			childNodes,
			otherElement,
			otherZIndex,
			element = this.element,
			inserted,
			run = this.added,
			i;
		
		if (defined(value)) {
			element.setAttribute(key, value); // So we can read it for other elements in the group
			value = +value;
			if (this[key] === value) { // Only update when needed (#3865)
				run = false;
			}
			this[key] = value;
		}

		// Insert according to this and other elements' zIndex. Before .add() is called,
		// nothing is done. Then on add, or by later calls to zIndexSetter, the node
		// is placed on the right place in the DOM.
		if (run) {
			value = this.zIndex;

			if (value && parentGroup) {
				parentGroup.handleZ = true;
			}
		
			childNodes = parentNode.childNodes;
			for (i = 0; i < childNodes.length && !inserted; i++) {
				otherElement = childNodes[i];
				otherZIndex = attr(otherElement, 'zIndex');
				if (otherElement !== element && (
						// Insert before the first element with a higher zIndex
						pInt(otherZIndex) > value ||
						// If no zIndex given, insert before the first element with a zIndex
						(!defined(value) && defined(otherZIndex))

						)) {
					parentNode.insertBefore(element, otherElement);
					inserted = true;
				}
			}
			if (!inserted) {
				parentNode.appendChild(element);
			}
		}
		return inserted;
	},
	_defaultSetter: function (value, key, element) {
		element.setAttribute(key, value);
	}
};

// Some shared setters and getters
SVGElement.prototype.yGetter = SVGElement.prototype.xGetter;
SVGElement.prototype.translateXSetter = SVGElement.prototype.translateYSetter = 
		SVGElement.prototype.rotationSetter = SVGElement.prototype.verticalAlignSetter = 
		SVGElement.prototype.scaleXSetter = SVGElement.prototype.scaleYSetter = function (value, key) {
	this[key] = value;
	this.doTransform = true;
};

// WebKit and Batik have problems with a stroke-width of zero, so in this case we remove the 
// stroke attribute altogether. #1270, #1369, #3065, #3072.
SVGElement.prototype['stroke-widthSetter'] = SVGElement.prototype.strokeSetter = function (value, key, element) {
	this[key] = value;
	// Only apply the stroke attribute if the stroke width is defined and larger than 0
	if (this.stroke && this['stroke-width']) {
		this.strokeWidth = this['stroke-width'];
		SVGElement.prototype.fillSetter.call(this, this.stroke, 'stroke', element); // use prototype as instance may be overridden
		element.setAttribute('stroke-width', this['stroke-width']);
		this.hasStroke = true;
	} else if (key === 'stroke-width' && value === 0 && this.hasStroke) {
		element.removeAttribute('stroke');
		this.hasStroke = false;
	}
};


/**
 * The default SVG renderer
 */
var SVGRenderer = function () {
	this.init.apply(this, arguments);
};
SVGRenderer.prototype = {
	Element: SVGElement,

	/**
	 * Initialize the SVGRenderer
	 * @param {Object} container
	 * @param {Number} width
	 * @param {Number} height
	 * @param {Boolean} forExport
	 */
	init: function (container, width, height, style, forExport) {
		var renderer = this,
			loc = location,
			boxWrapper,
			element,
			desc;

		boxWrapper = renderer.createElement('svg')
			.attr({
				version: '1.1'
			})
			.css(this.getStyle(style));
		element = boxWrapper.element;
		container.appendChild(element);

		// For browsers other than IE, add the namespace attribute (#1978)
		if (container.innerHTML.indexOf('xmlns') === -1) {
			attr(element, 'xmlns', SVG_NS);
		}

		// object properties
		renderer.isSVG = true;
		renderer.box = element;
		renderer.boxWrapper = boxWrapper;
		renderer.alignedObjects = [];

		// Page url used for internal references. #24, #672, #1070
		renderer.url = (isFirefox || isWebKit) && doc.getElementsByTagName('base').length ?
			loc.href
				.replace(/#.*?$/, '') // remove the hash
				.replace(/([\('\)])/g, '\\$1') // escape parantheses and quotes
				.replace(/ /g, '%20') : // replace spaces (needed for Safari only)
			'';

		// Add description
		desc = this.createElement('desc').add();
		desc.element.appendChild(doc.createTextNode('Created with ' + PRODUCT + ' ' + VERSION));


		renderer.defs = this.createElement('defs').add();
		renderer.forExport = forExport;
		renderer.gradients = {}; // Object where gradient SvgElements are stored
		renderer.cache = {}; // Cache for numerical bounding boxes

		renderer.setSize(width, height, false);



		// Issue 110 workaround:
		// In Firefox, if a div is positioned by percentage, its pixel position may land
		// between pixels. The container itself doesn't display this, but an SVG element
		// inside this container will be drawn at subpixel precision. In order to draw
		// sharp lines, this must be compensated for. This doesn't seem to work inside
		// iframes though (like in jsFiddle).
		var subPixelFix, rect;
		if (isFirefox && container.getBoundingClientRect) {
			renderer.subPixelFix = subPixelFix = function () {
				css(container, { left: 0, top: 0 });
				rect = container.getBoundingClientRect();
				css(container, {
					left: (mathCeil(rect.left) - rect.left) + PX,
					top: (mathCeil(rect.top) - rect.top) + PX
				});
			};

			// run the fix now
			subPixelFix();

			// run it on resize
			addEvent(win, 'resize', subPixelFix);
		}
	},

	getStyle: function (style) {
		return (this.style = extend({
			fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', // default font
			fontSize: '12px'
		}, style));
	},

	/**
	 * Detect whether the renderer is hidden. This happens when one of the parent elements
	 * has display: none. #608.
	 */
	isHidden: function () {
		return !this.boxWrapper.getBBox().width;
	},

	/**
	 * Destroys the renderer and its allocated members.
	 */
	destroy: function () {
		var renderer = this,
			rendererDefs = renderer.defs;
		renderer.box = null;
		renderer.boxWrapper = renderer.boxWrapper.destroy();

		// Call destroy on all gradient elements
		destroyObjectProperties(renderer.gradients || {});
		renderer.gradients = null;

		// Defs are null in VMLRenderer
		// Otherwise, destroy them here.
		if (rendererDefs) {
			renderer.defs = rendererDefs.destroy();
		}

		// Remove sub pixel fix handler
		// We need to check that there is a handler, otherwise all functions that are registered for event 'resize' are removed
		// See issue #982
		if (renderer.subPixelFix) {
			removeEvent(win, 'resize', renderer.subPixelFix);
		}

		renderer.alignedObjects = null;

		return null;
	},

	/**
	 * Create a wrapper for an SVG element
	 * @param {Object} nodeName
	 */
	createElement: function (nodeName) {
		var wrapper = new this.Element();
		wrapper.init(this, nodeName);
		return wrapper;
	},

	/**
	 * Dummy function for use in canvas renderer
	 */
	draw: function () {},

	/**
	 * Parse a simple HTML string into SVG tspans
	 *
	 * @param {Object} textNode The parent text SVG node
	 */
	buildText: function (wrapper) {
		var textNode = wrapper.element,
			renderer = this,
			forExport = renderer.forExport,
			textStr = pick(wrapper.textStr, '').toString(),
			hasMarkup = textStr.indexOf('<') !== -1,
			lines,
			childNodes = textNode.childNodes,
			styleRegex,
			hrefRegex,
			parentX = attr(textNode, 'x'),
			textStyles = wrapper.styles,
			width = wrapper.textWidth,
			textLineHeight = textStyles && textStyles.lineHeight,
			textShadow = textStyles && textStyles.textShadow,
			ellipsis = textStyles && textStyles.textOverflow === 'ellipsis',
			i = childNodes.length,
			tempParent = width && !wrapper.added && this.box,
			getLineHeight = function (tspan) {
				return textLineHeight ? 
					pInt(textLineHeight) :
					renderer.fontMetrics(
						/(px|em)$/.test(tspan && tspan.style.fontSize) ?
							tspan.style.fontSize :
							((textStyles && textStyles.fontSize) || renderer.style.fontSize || 12),
						tspan
					).h;
			},
			unescapeAngleBrackets = function (inputStr) {
				return inputStr.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
			};

		/// remove old text
		while (i--) {
			textNode.removeChild(childNodes[i]);
		}

		// Skip tspans, add text directly to text node. The forceTSpan is a hook 
		// used in text outline hack.
		if (!hasMarkup && !textShadow && !ellipsis && textStr.indexOf(' ') === -1) {
			textNode.appendChild(doc.createTextNode(unescapeAngleBrackets(textStr)));
			return;

		// Complex strings, add more logic
		} else {

			styleRegex = /<.*style="([^"]+)".*>/;
			hrefRegex = /<.*href="(http[^"]+)".*>/;

			if (tempParent) {
				tempParent.appendChild(textNode); // attach it to the DOM to read offset width
			}

			if (hasMarkup) {
				lines = textStr
					.replace(/<(b|strong)>/g, '<span style="font-weight:bold">')
					.replace(/<(i|em)>/g, '<span style="font-style:italic">')
					.replace(/<a/g, '<span')
					.replace(/<\/(b|strong|i|em|a)>/g, '</span>')
					.split(/<br.*?>/g);

			} else {
				lines = [textStr];
			}


			// remove empty line at end
			if (lines[lines.length - 1] === '') {
				lines.pop();
			}

			
			// build the lines
			each(lines, function (line, lineNo) {
				var spans, spanNo = 0;

				line = line.replace(/<span/g, '|||<span').replace(/<\/span>/g, '</span>|||');
				spans = line.split('|||');

				each(spans, function (span) {
					if (span !== '' || spans.length === 1) {
						var attributes = {},
							tspan = doc.createElementNS(SVG_NS, 'tspan'),
							spanStyle; // #390
						if (styleRegex.test(span)) {
							spanStyle = span.match(styleRegex)[1].replace(/(;| |^)color([ :])/, '$1fill$2');
							attr(tspan, 'style', spanStyle);
						}
						if (hrefRegex.test(span) && !forExport) { // Not for export - #1529
							attr(tspan, 'onclick', 'location.href=\"' + span.match(hrefRegex)[1] + '\"');
							css(tspan, { cursor: 'pointer' });
						}

						span = unescapeAngleBrackets(span.replace(/<(.|\n)*?>/g, '') || ' ');

						// Nested tags aren't supported, and cause crash in Safari (#1596)
						if (span !== ' ') {

							// add the text node
							tspan.appendChild(doc.createTextNode(span));

							if (!spanNo) { // first span in a line, align it to the left
								if (lineNo && parentX !== null) {
									attributes.x = parentX;
								}
							} else {
								attributes.dx = 0; // #16
							}

							// add attributes
							attr(tspan, attributes);

							// Append it
							textNode.appendChild(tspan);

							// first span on subsequent line, add the line height
							if (!spanNo && lineNo) {

								// allow getting the right offset height in exporting in IE
								if (!hasSVG && forExport) {
									css(tspan, { display: 'block' });
								}

								// Set the line height based on the font size of either
								// the text element or the tspan element
								attr(
									tspan,
									'dy',
									getLineHeight(tspan)
								);
							}

							/*if (width) {
								renderer.breakText(wrapper, width);
							}*/

							// Check width and apply soft breaks or ellipsis
							if (width) {
								var words = span.replace(/([^\^])-/g, '$1- ').split(' '), // #1273
									hasWhiteSpace = spans.length > 1 || lineNo || (words.length > 1 && textStyles.whiteSpace !== 'nowrap'),
									tooLong,
									wasTooLong,
									actualWidth,
									rest = [],
									dy = getLineHeight(tspan),
									softLineNo = 1,
									rotation = wrapper.rotation,
									wordStr = span, // for ellipsis
									cursor = wordStr.length, // binary search cursor
									bBox;

								while ((hasWhiteSpace || ellipsis) && (words.length || rest.length)) {
									wrapper.rotation = 0; // discard rotation when computing box
									bBox = wrapper.getBBox(true);
									actualWidth = bBox.width;

									// Old IE cannot measure the actualWidth for SVG elements (#2314)
									if (!hasSVG && renderer.forExport) {
										actualWidth = renderer.measureSpanWidth(tspan.firstChild.data, wrapper.styles);
									}

									tooLong = actualWidth > width;

									// For ellipsis, do a binary search for the correct string length
									if (wasTooLong === undefined) {
										wasTooLong = tooLong; // First time
									}
									if (ellipsis && wasTooLong) {
										cursor /= 2;

										if (wordStr === '' || (!tooLong && cursor < 0.5)) {
											words = []; // All ok, break out
										} else {
											if (tooLong) {
												wasTooLong = true;
											}
											wordStr = span.substring(0, wordStr.length + (tooLong ? -1 : 1) * mathCeil(cursor));
											words = [wordStr + '\u2026'];
											tspan.removeChild(tspan.firstChild);
										}

									// Looping down, this is the first word sequence that is not too long,
									// so we can move on to build the next line.
									} else if (!tooLong || words.length === 1) {
										words = rest;
										rest = [];
												
										if (words.length) {
											softLineNo++;
											
											tspan = doc.createElementNS(SVG_NS, 'tspan');
											attr(tspan, {
												dy: dy,
												x: parentX
											});
											if (spanStyle) { // #390
												attr(tspan, 'style', spanStyle);
											}
											textNode.appendChild(tspan);
										}
										if (actualWidth > width) { // a single word is pressing it out
											width = actualWidth;
										}
									} else { // append to existing line tspan
										tspan.removeChild(tspan.firstChild);
										rest.unshift(words.pop());
									}
									if (words.length) {
										tspan.appendChild(doc.createTextNode(words.join(' ').replace(/- /g, '-')));
									}
								}
								if (wasTooLong) {
									wrapper.attr('title', wrapper.textStr);
								}
								wrapper.rotation = rotation;
							}

							spanNo++;
						}
					}
				});
			});
			if (tempParent) {
				tempParent.removeChild(textNode); // attach it to the DOM to read offset width
			}

			// Apply the text shadow
			if (textShadow && wrapper.applyTextShadow) {
				wrapper.applyTextShadow(textShadow);
			}
		}
	},

	

	/*
	breakText: function (wrapper, width) {
		var bBox = wrapper.getBBox(),
			node = wrapper.element,
			textLength = node.textContent.length,
			pos = mathRound(width * textLength / bBox.width), // try this position first, based on average character width
			increment = 0,
			finalPos;

		if (bBox.width > width) {
			while (finalPos === undefined) {
				textLength = node.getSubStringLength(0, pos);

				if (textLength <= width) {
					if (increment === -1) {
						finalPos = pos;
					} else {
						increment = 1;
					}
				} else {
					if (increment === 1) {
						finalPos = pos - 1;
					} else {
						increment = -1;
					}
				}
				pos += increment;
			}
		}
		console.log(finalPos, node.getSubStringLength(0, finalPos))
	},
	*/

	/** 
	 * Returns white for dark colors and black for bright colors
	 */
	getContrast: function (color) {
		color = Color(color).rgba;
		return color[0] + color[1] + color[2] > 384 ? '#000' : '#FFF';
	},

	/**
	 * Create a button with preset states
	 * @param {String} text
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Function} callback
	 * @param {Object} normalState
	 * @param {Object} hoverState
	 * @param {Object} pressedState
	 */
	button: function (text, x, y, callback, normalState, hoverState, pressedState, disabledState, shape) {
		var label = this.label(text, x, y, shape, null, null, null, null, 'button'),
			curState = 0,
			stateOptions,
			stateStyle,
			normalStyle,
			hoverStyle,
			pressedStyle,
			disabledStyle,
			verticalGradient = { x1: 0, y1: 0, x2: 0, y2: 1 };

		// Normal state - prepare the attributes
		normalState = merge({
			'stroke-width': 1,
			stroke: '#CCCCCC',
			fill: {
				linearGradient: verticalGradient,
				stops: [
					[0, '#FEFEFE'],
					[1, '#F6F6F6']
				]
			},
			r: 2,
			padding: 5,
			style: {
				color: 'black'
			}
		}, normalState);
		normalStyle = normalState.style;
		delete normalState.style;

		// Hover state
		hoverState = merge(normalState, {
			stroke: '#68A',
			fill: {
				linearGradient: verticalGradient,
				stops: [
					[0, '#FFF'],
					[1, '#ACF']
				]
			}
		}, hoverState);
		hoverStyle = hoverState.style;
		delete hoverState.style;

		// Pressed state
		pressedState = merge(normalState, {
			stroke: '#68A',
			fill: {
				linearGradient: verticalGradient,
				stops: [
					[0, '#9BD'],
					[1, '#CDF']
				]
			}
		}, pressedState);
		pressedStyle = pressedState.style;
		delete pressedState.style;

		// Disabled state
		disabledState = merge(normalState, {
			style: {
				color: '#CCC'
			}
		}, disabledState);
		disabledStyle = disabledState.style;
		delete disabledState.style;

		// Add the events. IE9 and IE10 need mouseover and mouseout to funciton (#667).
		addEvent(label.element, isIE ? 'mouseover' : 'mouseenter', function () {
			if (curState !== 3) {
				label.attr(hoverState)
					.css(hoverStyle);
			}
		});
		addEvent(label.element, isIE ? 'mouseout' : 'mouseleave', function () {
			if (curState !== 3) {
				stateOptions = [normalState, hoverState, pressedState][curState];
				stateStyle = [normalStyle, hoverStyle, pressedStyle][curState];
				label.attr(stateOptions)
					.css(stateStyle);
			}
		});

		label.setState = function (state) {
			label.state = curState = state;
			if (!state) {
				label.attr(normalState)
					.css(normalStyle);
			} else if (state === 2) {
				label.attr(pressedState)
					.css(pressedStyle);
			} else if (state === 3) {
				label.attr(disabledState)
					.css(disabledStyle);
			}
		};

		return label
			.on('click', function () {
				if (curState !== 3) {
					callback.call(label);
				}
			})
			.attr(normalState)
			.css(extend({ cursor: 'default' }, normalStyle));
	},

	/**
	 * Make a straight line crisper by not spilling out to neighbour pixels
	 * @param {Array} points
	 * @param {Number} width
	 */
	crispLine: function (points, width) {
		// points format: [M, 0, 0, L, 100, 0]
		// normalize to a crisp line
		if (points[1] === points[4]) {
			// Substract due to #1129. Now bottom and left axis gridlines behave the same.
			points[1] = points[4] = mathRound(points[1]) - (width % 2 / 2);
		}
		if (points[2] === points[5]) {
			points[2] = points[5] = mathRound(points[2]) + (width % 2 / 2);
		}
		return points;
	},


	/**
	 * Draw a path
	 * @param {Array} path An SVG path in array form
	 */
	path: function (path) {
		var attr = {
			fill: NONE
		};
		if (isArray(path)) {
			attr.d = path;
		} else if (isObject(path)) { // attributes
			extend(attr, path);
		}
		return this.createElement('path').attr(attr);
	},

	/**
	 * Draw and return an SVG circle
	 * @param {Number} x The x position
	 * @param {Number} y The y position
	 * @param {Number} r The radius
	 */
	circle: function (x, y, r) {
		var attr = isObject(x) ?
			x :
			{
				x: x,
				y: y,
				r: r
			},
			wrapper = this.createElement('circle');

		wrapper.xSetter = function (value) {
			this.element.setAttribute('cx', value);
		};
		wrapper.ySetter = function (value) {
			this.element.setAttribute('cy', value);
		};
		return wrapper.attr(attr);
	},

	/**
	 * Draw and return an arc
	 * @param {Number} x X position
	 * @param {Number} y Y position
	 * @param {Number} r Radius
	 * @param {Number} innerR Inner radius like used in donut charts
	 * @param {Number} start Starting angle
	 * @param {Number} end Ending angle
	 */
	arc: function (x, y, r, innerR, start, end) {
		var arc;

		if (isObject(x)) {
			y = x.y;
			r = x.r;
			innerR = x.innerR;
			start = x.start;
			end = x.end;
			x = x.x;
		}

		// Arcs are defined as symbols for the ability to set
		// attributes in attr and animate
		arc = this.symbol('arc', x || 0, y || 0, r || 0, r || 0, {
			innerR: innerR || 0,
			start: start || 0,
			end: end || 0
		});
		arc.r = r; // #959
		return arc;
	},

	/**
	 * Draw and return a rectangle
	 * @param {Number} x Left position
	 * @param {Number} y Top position
	 * @param {Number} width
	 * @param {Number} height
	 * @param {Number} r Border corner radius
	 * @param {Number} strokeWidth A stroke width can be supplied to allow crisp drawing
	 */
	rect: function (x, y, width, height, r, strokeWidth) {

		r = isObject(x) ? x.r : r;

		var wrapper = this.createElement('rect'),
			attribs = isObject(x) ? x : x === UNDEFINED ? {} : {
				x: x,
				y: y,
				width: mathMax(width, 0),
				height: mathMax(height, 0)
			};

		if (strokeWidth !== UNDEFINED) {
			attribs.strokeWidth = strokeWidth;
			attribs = wrapper.crisp(attribs);
		}

		if (r) {
			attribs.r = r;
		}

		wrapper.rSetter = function (value) {
			attr(this.element, {
				rx: value,
				ry: value
			});
		};
		
		return wrapper.attr(attribs);
	},

	/**
	 * Resize the box and re-align all aligned elements
	 * @param {Object} width
	 * @param {Object} height
	 * @param {Boolean} animate
	 *
	 */
	setSize: function (width, height, animate) {
		var renderer = this,
			alignedObjects = renderer.alignedObjects,
			i = alignedObjects.length;

		renderer.width = width;
		renderer.height = height;

		renderer.boxWrapper[pick(animate, true) ? 'animate' : 'attr']({
			width: width,
			height: height
		});

		while (i--) {
			alignedObjects[i].align();
		}
	},

	/**
	 * Create a group
	 * @param {String} name The group will be given a class name of 'highcharts-{name}'.
	 *	 This can be used for styling and scripting.
	 */
	g: function (name) {
		var elem = this.createElement('g');
		return defined(name) ? elem.attr({ 'class': PREFIX + name }) : elem;
	},

	/**
	 * Display an image
	 * @param {String} src
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	image: function (src, x, y, width, height) {
		var attribs = {
				preserveAspectRatio: NONE
			},
			elemWrapper;

		// optional properties
		if (arguments.length > 1) {
			extend(attribs, {
				x: x,
				y: y,
				width: width,
				height: height
			});
		}

		elemWrapper = this.createElement('image').attr(attribs);

		// set the href in the xlink namespace
		if (elemWrapper.element.setAttributeNS) {
			elemWrapper.element.setAttributeNS('http://www.w3.org/1999/xlink',
				'href', src);
		} else {
			// could be exporting in IE
			// using href throws "not supported" in ie7 and under, requries regex shim to fix later
			elemWrapper.element.setAttribute('hc-svg-href', src);
		}
		return elemWrapper;
	},

	/**
	 * Draw a symbol out of pre-defined shape paths from the namespace 'symbol' object.
	 *
	 * @param {Object} symbol
	 * @param {Object} x
	 * @param {Object} y
	 * @param {Object} radius
	 * @param {Object} options
	 */
	symbol: function (symbol, x, y, width, height, options) {

		var obj,

			// get the symbol definition function
			symbolFn = this.symbols[symbol],

			// check if there's a path defined for this symbol
			path = symbolFn && symbolFn(
				mathRound(x),
				mathRound(y),
				width,
				height,
				options
			),

			imageElement,
			imageRegex = /^url\((.*?)\)$/,
			imageSrc,
			imageSize,
			centerImage;

		if (path) {

			obj = this.path(path);
			// expando properties for use in animate and attr
			extend(obj, {
				symbolName: symbol,
				x: x,
				y: y,
				width: width,
				height: height
			});
			if (options) {
				extend(obj, options);
			}


		// image symbols
		} else if (imageRegex.test(symbol)) {

			// On image load, set the size and position
			centerImage = function (img, size) {
				if (img.element) { // it may be destroyed in the meantime (#1390)
					img.attr({
						width: size[0],
						height: size[1]
					});

					if (!img.alignByTranslate) { // #185
						img.translate(
							mathRound((width - size[0]) / 2), // #1378
							mathRound((height - size[1]) / 2)
						);
					}
				}
			};

			imageSrc = symbol.match(imageRegex)[1];
			imageSize = symbolSizes[imageSrc] || (options && options.width && options.height && [options.width, options.height]);

			// Ireate the image synchronously, add attribs async
			obj = this.image(imageSrc)
				.attr({
					x: x,
					y: y
				});
			obj.isImg = true;

			if (imageSize) {
				centerImage(obj, imageSize);
			} else {
				// Initialize image to be 0 size so export will still function if there's no cached sizes.
				obj.attr({ width: 0, height: 0 });

				// Create a dummy JavaScript image to get the width and height. Due to a bug in IE < 8,
				// the created element must be assigned to a variable in order to load (#292).
				imageElement = createElement('img', {
					onload: function () {
						centerImage(obj, symbolSizes[imageSrc] = [this.width, this.height]);
					},
					src: imageSrc
				});
			}
		}

		return obj;
	},

	/**
	 * An extendable collection of functions for defining symbol paths.
	 */
	symbols: {
		'circle': function (x, y, w, h) {
			var cpw = 0.166 * w;
			return [
				M, x + w / 2, y,
				'C', x + w + cpw, y, x + w + cpw, y + h, x + w / 2, y + h,
				'C', x - cpw, y + h, x - cpw, y, x + w / 2, y,
				'Z'
			];
		},

		'square': function (x, y, w, h) {
			return [
				M, x, y,
				L, x + w, y,
				x + w, y + h,
				x, y + h,
				'Z'
			];
		},

		'triangle': function (x, y, w, h) {
			return [
				M, x + w / 2, y,
				L, x + w, y + h,
				x, y + h,
				'Z'
			];
		},

		'triangle-down': function (x, y, w, h) {
			return [
				M, x, y,
				L, x + w, y,
				x + w / 2, y + h,
				'Z'
			];
		},
		'diamond': function (x, y, w, h) {
			return [
				M, x + w / 2, y,
				L, x + w, y + h / 2,
				x + w / 2, y + h,
				x, y + h / 2,
				'Z'
			];
		},
		'arc': function (x, y, w, h, options) {
			var start = options.start,
				radius = options.r || w || h,
				end = options.end - 0.001, // to prevent cos and sin of start and end from becoming equal on 360 arcs (related: #1561)
				innerRadius = options.innerR,
				open = options.open,
				cosStart = mathCos(start),
				sinStart = mathSin(start),
				cosEnd = mathCos(end),
				sinEnd = mathSin(end),
				longArc = options.end - start < mathPI ? 0 : 1;

			return [
				M,
				x + radius * cosStart,
				y + radius * sinStart,
				'A', // arcTo
				radius, // x radius
				radius, // y radius
				0, // slanting
				longArc, // long or short arc
				1, // clockwise
				x + radius * cosEnd,
				y + radius * sinEnd,
				open ? M : L,
				x + innerRadius * cosEnd,
				y + innerRadius * sinEnd,
				'A', // arcTo
				innerRadius, // x radius
				innerRadius, // y radius
				0, // slanting
				longArc, // long or short arc
				0, // clockwise
				x + innerRadius * cosStart,
				y + innerRadius * sinStart,

				open ? '' : 'Z' // close
			];
		},

		/**
		 * Callout shape used for default tooltips, also used for rounded rectangles in VML
		 */
		callout: function (x, y, w, h, options) {
			var arrowLength = 6,
				halfDistance = 6,
				r = mathMin((options && options.r) || 0, w, h),
				safeDistance = r + halfDistance,
				anchorX = options && options.anchorX,
				anchorY = options && options.anchorY,
				path,
				normalizer = mathRound(options.strokeWidth || 0) % 2 / 2; // mathRound because strokeWidth can sometimes have roundoff errors;

			x += normalizer;
			y += normalizer;
			path = [
				'M', x + r, y, 
				'L', x + w - r, y, // top side
				'C', x + w, y, x + w, y, x + w, y + r, // top-right corner
				'L', x + w, y + h - r, // right side
				'C', x + w, y + h, x + w, y + h, x + w - r, y + h, // bottom-right corner
				'L', x + r, y + h, // bottom side
				'C', x, y + h, x, y + h, x, y + h - r, // bottom-left corner
				'L', x, y + r, // left side
				'C', x, y, x, y, x + r, y // top-right corner
			];
			
			if (anchorX && anchorX > w && anchorY > y + safeDistance && anchorY < y + h - safeDistance) { // replace right side
				path.splice(13, 3,
					'L', x + w, anchorY - halfDistance, 
					x + w + arrowLength, anchorY,
					x + w, anchorY + halfDistance,
					x + w, y + h - r
				);
			} else if (anchorX && anchorX < 0 && anchorY > y + safeDistance && anchorY < y + h - safeDistance) { // replace left side
				path.splice(33, 3, 
					'L', x, anchorY + halfDistance, 
					x - arrowLength, anchorY,
					x, anchorY - halfDistance,
					x, y + r
				);
			} else if (anchorY && anchorY > h && anchorX > x + safeDistance && anchorX < x + w - safeDistance) { // replace bottom
				path.splice(23, 3,
					'L', anchorX + halfDistance, y + h,
					anchorX, y + h + arrowLength,
					anchorX - halfDistance, y + h,
					x + r, y + h
				);
			} else if (anchorY && anchorY < 0 && anchorX > x + safeDistance && anchorX < x + w - safeDistance) { // replace top
				path.splice(3, 3,
					'L', anchorX - halfDistance, y,
					anchorX, y - arrowLength,
					anchorX + halfDistance, y,
					w - r, y
				);
			}
			return path;
		}
	},

	/**
	 * Define a clipping rectangle
	 * @param {String} id
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	clipRect: function (x, y, width, height) {
		var wrapper,
			id = PREFIX + idCounter++,

			clipPath = this.createElement('clipPath').attr({
				id: id
			}).add(this.defs);

		wrapper = this.rect(x, y, width, height, 0).add(clipPath);
		wrapper.id = id;
		wrapper.clipPath = clipPath;
		wrapper.count = 0;

		return wrapper;
	},


	


	/**
	 * Add text to the SVG object
	 * @param {String} str
	 * @param {Number} x Left position
	 * @param {Number} y Top position
	 * @param {Boolean} useHTML Use HTML to render the text
	 */
	text: function (str, x, y, useHTML) {

		// declare variables
		var renderer = this,
			fakeSVG = useCanVG || (!hasSVG && renderer.forExport),
			wrapper,
			attr = {};

		if (useHTML && !renderer.forExport) {
			return renderer.html(str, x, y);
		}

		attr.x = Math.round(x || 0); // X is always needed for line-wrap logic
		if (y) {
			attr.y = Math.round(y);
		}
		if (str || str === 0) {
			attr.text = str;
		}

		wrapper = renderer.createElement('text')
			.attr(attr);

		// Prevent wrapping from creating false offsetWidths in export in legacy IE (#1079, #1063)
		if (fakeSVG) {
			wrapper.css({
				position: ABSOLUTE
			});
		}

		if (!useHTML) {
			wrapper.xSetter = function (value, key, element) {
				var tspans = element.getElementsByTagName('tspan'),
					tspan,
					parentVal = element.getAttribute(key),
					i;
				for (i = 0; i < tspans.length; i++) {
					tspan = tspans[i];
					// If the x values are equal, the tspan represents a linebreak
					if (tspan.getAttribute(key) === parentVal) {
						tspan.setAttribute(key, value);
					}
				}
				element.setAttribute(key, value);
			};
		}
		
		return wrapper;
	},

	/**
	 * Utility to return the baseline offset and total line height from the font size
	 */
	fontMetrics: function (fontSize, elem) {
		fontSize = fontSize || this.style.fontSize;
		if (elem && win.getComputedStyle) {
			elem = elem.element || elem; // SVGElement
			fontSize = win.getComputedStyle(elem, "").fontSize;
		}
		fontSize = /px/.test(fontSize) ? pInt(fontSize) : /em/.test(fontSize) ? parseFloat(fontSize) * 12 : 12;

		// Empirical values found by comparing font size and bounding box height.
		// Applies to the default font family. http://jsfiddle.net/highcharts/7xvn7/
		var lineHeight = fontSize < 24 ? fontSize + 3 : mathRound(fontSize * 1.2),
			baseline = mathRound(lineHeight * 0.8);

		return {
			h: lineHeight,
			b: baseline,
			f: fontSize
		};
	},

	/**
	 * Correct X and Y positioning of a label for rotation (#1764)
	 */
	rotCorr: function (baseline, rotation, alterY) {
		var y = baseline;
		if (rotation && alterY) {
			y = mathMax(y * mathCos(rotation * deg2rad), 4);
		}
		return {
			x: (-baseline / 3) * mathSin(rotation * deg2rad),
			y: y
		};
	},

	/**
	 * Add a label, a text item that can hold a colored or gradient background
	 * as well as a border and shadow.
	 * @param {string} str
	 * @param {Number} x
	 * @param {Number} y
	 * @param {String} shape
	 * @param {Number} anchorX In case the shape has a pointer, like a flag, this is the
	 *	coordinates it should be pinned to
	 * @param {Number} anchorY
	 * @param {Boolean} baseline Whether to position the label relative to the text baseline,
	 *	like renderer.text, or to the upper border of the rectangle.
	 * @param {String} className Class name for the group
	 */
	label: function (str, x, y, shape, anchorX, anchorY, useHTML, baseline, className) {

		var renderer = this,
			wrapper = renderer.g(className),
			text = renderer.text('', 0, 0, useHTML)
				.attr({
					zIndex: 1
				}),
				//.add(wrapper),
			box,
			bBox,
			alignFactor = 0,
			padding = 3,
			paddingLeft = 0,
			width,
			height,
			wrapperX,
			wrapperY,
			crispAdjust = 0,
			deferredAttr = {},
			baselineOffset,
			needsBox;

		/**
		 * This function runs after the label is added to the DOM (when the bounding box is
		 * available), and after the text of the label is updated to detect the new bounding
		 * box and reflect it in the border box.
		 */
		function updateBoxSize() {
			var boxX,
				boxY,
				style = text.element.style;

			bBox = (width === undefined || height === undefined || wrapper.styles.textAlign) && defined(text.textStr) && 
				text.getBBox(); //#3295 && 3514 box failure when string equals 0
			wrapper.width = (width || bBox.width || 0) + 2 * padding + paddingLeft;
			wrapper.height = (height || bBox.height || 0) + 2 * padding;

			// update the label-scoped y offset
			baselineOffset = padding + renderer.fontMetrics(style && style.fontSize, text).b;

			
			if (needsBox) {

				// create the border box if it is not already present
				if (!box) {
					boxX = mathRound(-alignFactor * padding);
					boxY = baseline ? -baselineOffset : 0;

					wrapper.box = box = shape ?
						renderer.symbol(shape, boxX, boxY, wrapper.width, wrapper.height, deferredAttr) :
						renderer.rect(boxX, boxY, wrapper.width, wrapper.height, 0, deferredAttr[STROKE_WIDTH]);
					box.attr('fill', NONE).add(wrapper);
				}

				// apply the box attributes
				if (!box.isImg) { // #1630
					box.attr(extend({
						width: mathRound(wrapper.width),
						height: mathRound(wrapper.height)
					}, deferredAttr));
				}
				deferredAttr = null;
			}
		}

		/**
		 * This function runs after setting text or padding, but only if padding is changed
		 */
		function updateTextPadding() {
			var styles = wrapper.styles,
				textAlign = styles && styles.textAlign,
				x = paddingLeft + padding * (1 - alignFactor),
				y;

			// determin y based on the baseline
			y = baseline ? 0 : baselineOffset;

			// compensate for alignment
			if (defined(width) && bBox && (textAlign === 'center' || textAlign === 'right')) {
				x += { center: 0.5, right: 1 }[textAlign] * (width - bBox.width);
			}

			// update if anything changed
			if (x !== text.x || y !== text.y) {
				text.attr('x', x);
				if (y !== UNDEFINED) {
					// As a workaround for #3649, use translation instead of y attribute. #3649
					// is a rendering bug in WebKit for Retina (Mac, iOS, PhantomJS) that 
					// results in duplicated text when an y attribute is used in combination 
					// with a CSS text-style.
					text.attr(text.element.nodeName === 'SPAN' ? 'y' : 'translateY', y);
				}
			}

			// record current values
			text.x = x;
			text.y = y;
		}

		/**
		 * Set a box attribute, or defer it if the box is not yet created
		 * @param {Object} key
		 * @param {Object} value
		 */
		function boxAttr(key, value) {
			if (box) {
				box.attr(key, value);
			} else {
				deferredAttr[key] = value;
			}
		}

		/**
		 * After the text element is added, get the desired size of the border box
		 * and add it before the text in the DOM.
		 */
		wrapper.onAdd = function () {
			text.add(wrapper);
			wrapper.attr({
				text: (str || str === 0) ? str : '', // alignment is available now // #3295: 0 not rendered if given as a value
				x: x,
				y: y
			});

			if (box && defined(anchorX)) {
				wrapper.attr({
					anchorX: anchorX,
					anchorY: anchorY
				});
			}
		};

		/*
		 * Add specific attribute setters.
		 */

		// only change local variables
		wrapper.widthSetter = function (value) {
			width = value;
		};
		wrapper.heightSetter = function (value) {
			height = value;
		};
		wrapper.paddingSetter =  function (value) {
			if (defined(value) && value !== padding) {
				padding = wrapper.padding = value;
				updateTextPadding();
			}
		};
		wrapper.paddingLeftSetter =  function (value) {
			if (defined(value) && value !== paddingLeft) {
				paddingLeft = value;
				updateTextPadding();
			}
		};


		// change local variable and prevent setting attribute on the group
		wrapper.alignSetter = function (value) {
			alignFactor = { left: 0, center: 0.5, right: 1 }[value];
		};

		// apply these to the box and the text alike
		wrapper.textSetter = function (value) {
			if (value !== UNDEFINED) {
				text.textSetter(value);
			}
			updateBoxSize();
			updateTextPadding();
		};

		// apply these to the box but not to the text
		wrapper['stroke-widthSetter'] = function (value, key) {
			if (value) {
				needsBox = true;
			}
			crispAdjust = value % 2 / 2;
			boxAttr(key, value);
		};
		wrapper.strokeSetter = wrapper.fillSetter = wrapper.rSetter = function (value, key) {
			if (key === 'fill' && value) {
				needsBox = true;
			}
			boxAttr(key, value);
		};
		wrapper.anchorXSetter = function (value, key) {
			anchorX = value;
			boxAttr(key, value + crispAdjust - wrapperX);
		};
		wrapper.anchorYSetter = function (value, key) {
			anchorY = value;
			boxAttr(key, value - wrapperY);
		};

		// rename attributes
		wrapper.xSetter = function (value) {
			wrapper.x = value; // for animation getter
			if (alignFactor) {
				value -= alignFactor * ((width || bBox.width) + padding);
			}
			wrapperX = mathRound(value);
			wrapper.attr('translateX', wrapperX);
		};
		wrapper.ySetter = function (value) {
			wrapperY = wrapper.y = mathRound(value);
			wrapper.attr('translateY', wrapperY);
		};

		// Redirect certain methods to either the box or the text
		var baseCss = wrapper.css;
		return extend(wrapper, {
			/**
			 * Pick up some properties and apply them to the text instead of the wrapper
			 */
			css: function (styles) {
				if (styles) {
					var textStyles = {};
					styles = merge(styles); // create a copy to avoid altering the original object (#537)
					each(wrapper.textProps, function (prop) {
						if (styles[prop] !== UNDEFINED) {
							textStyles[prop] = styles[prop];
							delete styles[prop];
						}
					});
					text.css(textStyles);
				}
				return baseCss.call(wrapper, styles);
			},
			/**
			 * Return the bounding box of the box, not the group
			 */
			getBBox: function () {
				return {
					width: bBox.width + 2 * padding,
					height: bBox.height + 2 * padding,
					x: bBox.x - padding,
					y: bBox.y - padding
				};
			},
			/**
			 * Apply the shadow to the box
			 */
			shadow: function (b) {
				if (box) {
					box.shadow(b);
				}
				return wrapper;
			},
			/**
			 * Destroy and release memory.
			 */
			destroy: function () {

				// Added by button implementation
				removeEvent(wrapper.element, 'mouseenter');
				removeEvent(wrapper.element, 'mouseleave');

				if (text) {
					text = text.destroy();
				}
				if (box) {
					box = box.destroy();
				}
				// Call base implementation to destroy the rest
				SVGElement.prototype.destroy.call(wrapper);

				// Release local pointers (#1298)
				wrapper = renderer = updateBoxSize = updateTextPadding = boxAttr = null;
			}
		});
	}
}; // end SVGRenderer


// general renderer
Renderer = SVGRenderer;
// extend SvgElement for useHTML option
extend(SVGElement.prototype, {
	/**
	 * Apply CSS to HTML elements. This is used in text within SVG rendering and
	 * by the VML renderer
	 */
	htmlCss: function (styles) {
		var wrapper = this,
			element = wrapper.element,
			textWidth = styles && element.tagName === 'SPAN' && styles.width;

		if (textWidth) {
			delete styles.width;
			wrapper.textWidth = textWidth;
			wrapper.updateTransform();
		}
		if (styles && styles.textOverflow === 'ellipsis') {
			styles.whiteSpace = 'nowrap';
			styles.overflow = 'hidden';
		}
		wrapper.styles = extend(wrapper.styles, styles);
		css(wrapper.element, styles);

		return wrapper;
	},

	/**
	 * VML and useHTML method for calculating the bounding box based on offsets
	 * @param {Boolean} refresh Whether to force a fresh value from the DOM or to
	 * use the cached value
	 *
	 * @return {Object} A hash containing values for x, y, width and height
	 */

	htmlGetBBox: function () {
		var wrapper = this,
			element = wrapper.element;

		// faking getBBox in exported SVG in legacy IE
		// faking getBBox in exported SVG in legacy IE (is this a duplicate of the fix for #1079?)
		if (element.nodeName === 'text') {
			element.style.position = ABSOLUTE;
		}

		return {
			x: element.offsetLeft,
			y: element.offsetTop,
			width: element.offsetWidth,
			height: element.offsetHeight
		};
	},

	/**
	 * VML override private method to update elements based on internal
	 * properties based on SVG transform
	 */
	htmlUpdateTransform: function () {
		// aligning non added elements is expensive
		if (!this.added) {
			this.alignOnAdd = true;
			return;
		}

		var wrapper = this,
			renderer = wrapper.renderer,
			elem = wrapper.element,
			translateX = wrapper.translateX || 0,
			translateY = wrapper.translateY || 0,
			x = wrapper.x || 0,
			y = wrapper.y || 0,
			align = wrapper.textAlign || 'left',
			alignCorrection = { left: 0, center: 0.5, right: 1 }[align],
			shadows = wrapper.shadows,
			styles = wrapper.styles;

		// apply translate
		css(elem, {
			marginLeft: translateX,
			marginTop: translateY
		});
		if (shadows) { // used in labels/tooltip
			each(shadows, function (shadow) {
				css(shadow, {
					marginLeft: translateX + 1,
					marginTop: translateY + 1
				});
			});
		}

		// apply inversion
		if (wrapper.inverted) { // wrapper is a group
			each(elem.childNodes, function (child) {
				renderer.invertChild(child, elem);
			});
		}

		if (elem.tagName === 'SPAN') {

			var width,
				rotation = wrapper.rotation,
				baseline,
				textWidth = pInt(wrapper.textWidth),
				currentTextTransform = [rotation, align, elem.innerHTML, wrapper.textWidth].join(',');

			if (currentTextTransform !== wrapper.cTT) { // do the calculations and DOM access only if properties changed


				baseline = renderer.fontMetrics(elem.style.fontSize).b;

				// Renderer specific handling of span rotation
				if (defined(rotation)) {
					wrapper.setSpanRotation(rotation, alignCorrection, baseline);
				}

				width = pick(wrapper.elemWidth, elem.offsetWidth);

				// Update textWidth
				if (width > textWidth && /[ \-]/.test(elem.textContent || elem.innerText)) { // #983, #1254
					css(elem, {
						width: textWidth + PX,
						display: 'block',
						whiteSpace: (styles && styles.whiteSpace) || 'normal' // #3331
					});
					width = textWidth;
				}

				wrapper.getSpanCorrection(width, baseline, alignCorrection, rotation, align);
			}

			// apply position with correction
			css(elem, {
				left: (x + (wrapper.xCorr || 0)) + PX,
				top: (y + (wrapper.yCorr || 0)) + PX
			});

			// force reflow in webkit to apply the left and top on useHTML element (#1249)
			if (isWebKit) {
				baseline = elem.offsetHeight; // assigned to baseline for JSLint purpose
			}

			// record current text transform
			wrapper.cTT = currentTextTransform;
		}
	},

	/**
	 * Set the rotation of an individual HTML span
	 */
	setSpanRotation: function (rotation, alignCorrection, baseline) {
		var rotationStyle = {},
			cssTransformKey = isIE ? '-ms-transform' : isWebKit ? '-webkit-transform' : isFirefox ? 'MozTransform' : isOpera ? '-o-transform' : '';

		rotationStyle[cssTransformKey] = rotationStyle.transform = 'rotate(' + rotation + 'deg)';
		rotationStyle[cssTransformKey + (isFirefox ? 'Origin' : '-origin')] = rotationStyle.transformOrigin = (alignCorrection * 100) + '% ' + baseline + 'px';
		css(this.element, rotationStyle);
	},

	/**
	 * Get the correction in X and Y positioning as the element is rotated.
	 */
	getSpanCorrection: function (width, baseline, alignCorrection) {
		this.xCorr = -width * alignCorrection;
		this.yCorr = -baseline;
	}
});

// Extend SvgRenderer for useHTML option.
extend(SVGRenderer.prototype, {
	/**
	 * Create HTML text node. This is used by the VML renderer as well as the SVG
	 * renderer through the useHTML option.
	 *
	 * @param {String} str
	 * @param {Number} x
	 * @param {Number} y
	 */
	html: function (str, x, y) {
		var wrapper = this.createElement('span'),
			element = wrapper.element,
			renderer = wrapper.renderer;

		// Text setter
		wrapper.textSetter = function (value) {
			if (value !== element.innerHTML) {
				delete this.bBox;
			}
			element.innerHTML = this.textStr = value;
		};

		// Various setters which rely on update transform
		wrapper.xSetter = wrapper.ySetter = wrapper.alignSetter = wrapper.rotationSetter = function (value, key) {
			if (key === 'align') {
				key = 'textAlign'; // Do not overwrite the SVGElement.align method. Same as VML.
			}
			wrapper[key] = value;
			wrapper.htmlUpdateTransform();
		};

		// Set the default attributes
		wrapper.attr({
				text: str,
				x: mathRound(x),
				y: mathRound(y)
			})
			.css({
				position: ABSOLUTE,
				fontFamily: this.style.fontFamily,
				fontSize: this.style.fontSize
			});

		// Keep the whiteSpace style outside the wrapper.styles collection
		element.style.whiteSpace = 'nowrap';

		// Use the HTML specific .css method
		wrapper.css = wrapper.htmlCss;

		// This is specific for HTML within SVG
		if (renderer.isSVG) {
			wrapper.add = function (svgGroupWrapper) {

				var htmlGroup,
					container = renderer.box.parentNode,
					parentGroup,
					parents = [];

				this.parentGroup = svgGroupWrapper;

				// Create a mock group to hold the HTML elements
				if (svgGroupWrapper) {
					htmlGroup = svgGroupWrapper.div;
					if (!htmlGroup) {

						// Read the parent chain into an array and read from top down
						parentGroup = svgGroupWrapper;
						while (parentGroup) {

							parents.push(parentGroup);

							// Move up to the next parent group
							parentGroup = parentGroup.parentGroup;
						}

						// Ensure dynamically updating position when any parent is translated
						each(parents.reverse(), function (parentGroup) {
							var htmlGroupStyle;

							// Create a HTML div and append it to the parent div to emulate
							// the SVG group structure
							htmlGroup = parentGroup.div = parentGroup.div || createElement(DIV, {
								className: attr(parentGroup.element, 'class')
							}, {
								position: ABSOLUTE,
								left: (parentGroup.translateX || 0) + PX,
								top: (parentGroup.translateY || 0) + PX
							}, htmlGroup || container); // the top group is appended to container

							// Shortcut
							htmlGroupStyle = htmlGroup.style;

							// Set listeners to update the HTML div's position whenever the SVG group
							// position is changed
							extend(parentGroup, {
								translateXSetter: function (value, key) {
									htmlGroupStyle.left = value + PX;
									parentGroup[key] = value;
									parentGroup.doTransform = true;
								},
								translateYSetter: function (value, key) {
									htmlGroupStyle.top = value + PX;
									parentGroup[key] = value;
									parentGroup.doTransform = true;
								},
								visibilitySetter: function (value, key) {
									htmlGroupStyle[key] = value;
								}
							});
						});

					}
				} else {
					htmlGroup = container;
				}

				htmlGroup.appendChild(element);

				// Shared with VML:
				wrapper.added = true;
				if (wrapper.alignOnAdd) {
					wrapper.htmlUpdateTransform();
				}

				return wrapper;
			};
		}
		return wrapper;
	}
});

/* ****************************************************************************
 *                                                                            *
 * START OF INTERNET EXPLORER <= 8 SPECIFIC CODE                              *
 *                                                                            *
 * For applications and websites that don't need IE support, like platform    *
 * targeted mobile apps and web apps, this code can be removed.               *
 *                                                                            *
 *****************************************************************************/

/**
 * @constructor
 */
var VMLRenderer, VMLElement;
if (!hasSVG && !useCanVG) {

/**
 * The VML element wrapper.
 */
VMLElement = {

	/**
	 * Initialize a new VML element wrapper. It builds the markup as a string
	 * to minimize DOM traffic.
	 * @param {Object} renderer
	 * @param {Object} nodeName
	 */
	init: function (renderer, nodeName) {
		var wrapper = this,
			markup =  ['<', nodeName, ' filled="f" stroked="f"'],
			style = ['position: ', ABSOLUTE, ';'],
			isDiv = nodeName === DIV;

		// divs and shapes need size
		if (nodeName === 'shape' || isDiv) {
			style.push('left:0;top:0;width:1px;height:1px;');
		}
		style.push('visibility: ', isDiv ? HIDDEN : VISIBLE);

		markup.push(' style="', style.join(''), '"/>');

		// create element with default attributes and style
		if (nodeName) {
			markup = isDiv || nodeName === 'span' || nodeName === 'img' ?
				markup.join('')
				: renderer.prepVML(markup);
			wrapper.element = createElement(markup);
		}

		wrapper.renderer = renderer;
	},

	/**
	 * Add the node to the given parent
	 * @param {Object} parent
	 */
	add: function (parent) {
		var wrapper = this,
			renderer = wrapper.renderer,
			element = wrapper.element,
			box = renderer.box,
			inverted = parent && parent.inverted,

			// get the parent node
			parentNode = parent ?
				parent.element || parent :
				box;


		// if the parent group is inverted, apply inversion on all children
		if (inverted) { // only on groups
			renderer.invertChild(element, parentNode);
		}

		// append it
		parentNode.appendChild(element);

		// align text after adding to be able to read offset
		wrapper.added = true;
		if (wrapper.alignOnAdd && !wrapper.deferUpdateTransform) {
			wrapper.updateTransform();
		}

		// fire an event for internal hooks
		if (wrapper.onAdd) {
			wrapper.onAdd();
		}

		return wrapper;
	},

	/**
	 * VML always uses htmlUpdateTransform
	 */
	updateTransform: SVGElement.prototype.htmlUpdateTransform,

	/**
	 * Set the rotation of a span with oldIE's filter
	 */
	setSpanRotation: function () {
		// Adjust for alignment and rotation. Rotation of useHTML content is not yet implemented
		// but it can probably be implemented for Firefox 3.5+ on user request. FF3.5+
		// has support for CSS3 transform. The getBBox method also needs to be updated
		// to compensate for the rotation, like it currently does for SVG.
		// Test case: http://jsfiddle.net/highcharts/Ybt44/

		var rotation = this.rotation,
			costheta = mathCos(rotation * deg2rad),
			sintheta = mathSin(rotation * deg2rad);
					
		css(this.element, {
			filter: rotation ? ['progid:DXImageTransform.Microsoft.Matrix(M11=', costheta,
				', M12=', -sintheta, ', M21=', sintheta, ', M22=', costheta,
				', sizingMethod=\'auto expand\')'].join('') : NONE
		});
	},

	/**
	 * Get the positioning correction for the span after rotating. 
	 */
	getSpanCorrection: function (width, baseline, alignCorrection, rotation, align) {

		var costheta = rotation ? mathCos(rotation * deg2rad) : 1,
			sintheta = rotation ? mathSin(rotation * deg2rad) : 0,
			height = pick(this.elemHeight, this.element.offsetHeight),
			quad,
			nonLeft = align && align !== 'left';

		// correct x and y
		this.xCorr = costheta < 0 && -width;
		this.yCorr = sintheta < 0 && -height;

		// correct for baseline and corners spilling out after rotation
		quad = costheta * sintheta < 0;
		this.xCorr += sintheta * baseline * (quad ? 1 - alignCorrection : alignCorrection);
		this.yCorr -= costheta * baseline * (rotation ? (quad ? alignCorrection : 1 - alignCorrection) : 1);
		// correct for the length/height of the text
		if (nonLeft) {
			this.xCorr -= width * alignCorrection * (costheta < 0 ? -1 : 1);
			if (rotation) {
				this.yCorr -= height * alignCorrection * (sintheta < 0 ? -1 : 1);
			}
			css(this.element, {
				textAlign: align
			});
		}
	},

	/**
	 * Converts a subset of an SVG path definition to its VML counterpart. Takes an array
	 * as the parameter and returns a string.
	 */
	pathToVML: function (value) {
		// convert paths
		var i = value.length,
			path = [];

		while (i--) {

			// Multiply by 10 to allow subpixel precision.
			// Substracting half a pixel seems to make the coordinates
			// align with SVG, but this hasn't been tested thoroughly
			if (isNumber(value[i])) {
				path[i] = mathRound(value[i] * 10) - 5;
			} else if (value[i] === 'Z') { // close the path
				path[i] = 'x';
			} else {
				path[i] = value[i];

				// When the start X and end X coordinates of an arc are too close,
				// they are rounded to the same value above. In this case, substract or 
				// add 1 from the end X and Y positions. #186, #760, #1371, #1410.
				if (value.isArc && (value[i] === 'wa' || value[i] === 'at')) {
					// Start and end X
					if (path[i + 5] === path[i + 7]) {
						path[i + 7] += value[i + 7] > value[i + 5] ? 1 : -1;
					}
					// Start and end Y
					if (path[i + 6] === path[i + 8]) {
						path[i + 8] += value[i + 8] > value[i + 6] ? 1 : -1;
					}
				}
			}
		}

		
		// Loop up again to handle path shortcuts (#2132)
		/*while (i++ < path.length) {
			if (path[i] === 'H') { // horizontal line to
				path[i] = 'L';
				path.splice(i + 2, 0, path[i - 1]);
			} else if (path[i] === 'V') { // vertical line to
				path[i] = 'L';
				path.splice(i + 1, 0, path[i - 2]);
			}
		}*/
		return path.join(' ') || 'x';
	},

	/**
	 * Set the element's clipping to a predefined rectangle
	 *
	 * @param {String} id The id of the clip rectangle
	 */
	clip: function (clipRect) {
		var wrapper = this,
			clipMembers,
			cssRet;

		if (clipRect) {
			clipMembers = clipRect.members;
			erase(clipMembers, wrapper); // Ensure unique list of elements (#1258)
			clipMembers.push(wrapper);
			wrapper.destroyClip = function () {
				erase(clipMembers, wrapper);
			};
			cssRet = clipRect.getCSS(wrapper);

		} else {
			if (wrapper.destroyClip) {
				wrapper.destroyClip();
			}
			cssRet = { clip: docMode8 ? 'inherit' : 'rect(auto)' }; // #1214
		}

		return wrapper.css(cssRet);

	},

	/**
	 * Set styles for the element
	 * @param {Object} styles
	 */
	css: SVGElement.prototype.htmlCss,

	/**
	 * Removes a child either by removeChild or move to garbageBin.
	 * Issue 490; in VML removeChild results in Orphaned nodes according to sIEve, discardElement does not.
	 */
	safeRemoveChild: function (element) {
		// discardElement will detach the node from its parent before attaching it
		// to the garbage bin. Therefore it is important that the node is attached and have parent.
		if (element.parentNode) {
			discardElement(element);
		}
	},

	/**
	 * Extend element.destroy by removing it from the clip members array
	 */
	destroy: function () {
		if (this.destroyClip) {
			this.destroyClip();
		}

		return SVGElement.prototype.destroy.apply(this);
	},

	/**
	 * Add an event listener. VML override for normalizing event parameters.
	 * @param {String} eventType
	 * @param {Function} handler
	 */
	on: function (eventType, handler) {
		// simplest possible event model for internal use
		this.element['on' + eventType] = function () {
			var evt = win.event;
			evt.target = evt.srcElement;
			handler(evt);
		};
		return this;
	},

	/**
	 * In stacked columns, cut off the shadows so that they don't overlap
	 */
	cutOffPath: function (path, length) {

		var len;

		path = path.split(/[ ,]/);
		len = path.length;

		if (len === 9 || len === 11) {
			path[len - 4] = path[len - 2] = pInt(path[len - 2]) - 10 * length;
		}
		return path.join(' ');
	},

	/**
	 * Apply a drop shadow by copying elements and giving them different strokes
	 * @param {Boolean|Object} shadowOptions
	 */
	shadow: function (shadowOptions, group, cutOff) {
		var shadows = [],
			i,
			element = this.element,
			renderer = this.renderer,
			shadow,
			elemStyle = element.style,
			markup,
			path = element.path,
			strokeWidth,
			modifiedPath,
			shadowWidth,
			shadowElementOpacity;

		// some times empty paths are not strings
		if (path && typeof path.value !== 'string') {
			path = 'x';
		}
		modifiedPath = path;

		if (shadowOptions) {
			shadowWidth = pick(shadowOptions.width, 3);
			shadowElementOpacity = (shadowOptions.opacity || 0.15) / shadowWidth;
			for (i = 1; i <= 3; i++) {

				strokeWidth = (shadowWidth * 2) + 1 - (2 * i);

				// Cut off shadows for stacked column items
				if (cutOff) {
					modifiedPath = this.cutOffPath(path.value, strokeWidth + 0.5);
				}

				markup = ['<shape isShadow="true" strokeweight="', strokeWidth,
					'" filled="false" path="', modifiedPath,
					'" coordsize="10 10" style="', element.style.cssText, '" />'];

				shadow = createElement(renderer.prepVML(markup),
					null, {
						left: pInt(elemStyle.left) + pick(shadowOptions.offsetX, 1),
						top: pInt(elemStyle.top) + pick(shadowOptions.offsetY, 1)
					}
				);
				if (cutOff) {
					shadow.cutOff = strokeWidth + 1;
				}

				// apply the opacity
				markup = ['<stroke color="', shadowOptions.color || 'black', '" opacity="', shadowElementOpacity * i, '"/>'];
				createElement(renderer.prepVML(markup), null, null, shadow);


				// insert it
				if (group) {
					group.element.appendChild(shadow);
				} else {
					element.parentNode.insertBefore(shadow, element);
				}

				// record it
				shadows.push(shadow);

			}

			this.shadows = shadows;
		}
		return this;
	},
	updateShadows: noop, // Used in SVG only

	setAttr: function (key, value) {
		if (docMode8) { // IE8 setAttribute bug
			this.element[key] = value;
		} else {
			this.element.setAttribute(key, value);
		}
	},
	classSetter: function (value) {
		// IE8 Standards mode has problems retrieving the className unless set like this
		this.element.className = value;
	},
	dashstyleSetter: function (value, key, element) {
		var strokeElem = element.getElementsByTagName('stroke')[0] ||
			createElement(this.renderer.prepVML(['<stroke/>']), null, null, element);
		strokeElem[key] = value || 'solid';
		this[key] = value; /* because changing stroke-width will change the dash length
			and cause an epileptic effect */
	},
	dSetter: function (value, key, element) {
		var i,
			shadows = this.shadows;
		value = value || [];
		this.d = value.join && value.join(' '); // used in getter for animation

		element.path = value = this.pathToVML(value);

		// update shadows
		if (shadows) {
			i = shadows.length;
			while (i--) {
				shadows[i].path = shadows[i].cutOff ? this.cutOffPath(value, shadows[i].cutOff) : value;
			}
		}
		this.setAttr(key, value);
	},
	fillSetter: function (value, key, element) {
		var nodeName = element.nodeName;
		if (nodeName === 'SPAN') { // text color
			element.style.color = value;
		} else if (nodeName !== 'IMG') { // #1336
			element.filled = value !== NONE;
			this.setAttr('fillcolor', this.renderer.color(value, element, key, this));
		}
	},
	opacitySetter: noop, // Don't bother - animation is too slow and filters introduce artifacts
	rotationSetter: function (value, key, element) {
		var style = element.style;
		this[key] = style[key] = value; // style is for #1873

		// Correction for the 1x1 size of the shape container. Used in gauge needles.
		style.left = -mathRound(mathSin(value * deg2rad) + 1) + PX;
		style.top = mathRound(mathCos(value * deg2rad)) + PX;
	},
	strokeSetter: function (value, key, element) {
		this.setAttr('strokecolor', this.renderer.color(value, element, key));
	},
	'stroke-widthSetter': function (value, key, element) {
		element.stroked = !!value; // VML "stroked" attribute
		this[key] = value; // used in getter, issue #113
		if (isNumber(value)) {
			value += PX;
		}
		this.setAttr('strokeweight', value);
	},
	titleSetter: function (value, key) {
		this.setAttr(key, value);
	},
	visibilitySetter: function (value, key, element) {

		// Handle inherited visibility
		if (value === 'inherit') {
			value = VISIBLE;
		}
		
		// Let the shadow follow the main element
		if (this.shadows) {
			each(this.shadows, function (shadow) {
				shadow.style[key] = value;
			});
		}

		// Instead of toggling the visibility CSS property, move the div out of the viewport.
		// This works around #61 and #586
		if (element.nodeName === 'DIV') {
			value = value === HIDDEN ? '-999em' : 0;

			// In order to redraw, IE7 needs the div to be visible when tucked away
			// outside the viewport. So the visibility is actually opposite of
			// the expected value. This applies to the tooltip only.
			if (!docMode8) {
				element.style[key] = value ? VISIBLE : HIDDEN;
			}
			key = 'top';
		}
		element.style[key] = value;
	},
	xSetter: function (value, key, element) {
		this[key] = value; // used in getter

		if (key === 'x') {
			key = 'left';
		} else if (key === 'y') {
			key = 'top';
		}/* else {
			value = mathMax(0, value); // don't set width or height below zero (#311)
		}*/

		// clipping rectangle special
		if (this.updateClipping) {
			this[key] = value; // the key is now 'left' or 'top' for 'x' and 'y'
			this.updateClipping();
		} else {
			// normal
			element.style[key] = value;
		}
	},
	zIndexSetter: function (value, key, element) {
		element.style[key] = value;
	}
};
Highcharts.VMLElement = VMLElement = extendClass(SVGElement, VMLElement);

// Some shared setters
VMLElement.prototype.ySetter =
	VMLElement.prototype.widthSetter = 
	VMLElement.prototype.heightSetter = 
	VMLElement.prototype.xSetter;


/**
 * The VML renderer
 */
var VMLRendererExtension = { // inherit SVGRenderer

	Element: VMLElement,
	isIE8: userAgent.indexOf('MSIE 8.0') > -1,


	/**
	 * Initialize the VMLRenderer
	 * @param {Object} container
	 * @param {Number} width
	 * @param {Number} height
	 */
	init: function (container, width, height, style) {
		var renderer = this,
			boxWrapper,
			box,
			css;

		renderer.alignedObjects = [];

		boxWrapper = renderer.createElement(DIV)
			.css(extend(this.getStyle(style), { position: RELATIVE}));
		box = boxWrapper.element;
		container.appendChild(boxWrapper.element);


		// generate the containing box
		renderer.isVML = true;
		renderer.box = box;
		renderer.boxWrapper = boxWrapper;
		renderer.cache = {};


		renderer.setSize(width, height, false);

		// The only way to make IE6 and IE7 print is to use a global namespace. However,
		// with IE8 the only way to make the dynamic shapes visible in screen and print mode
		// seems to be to add the xmlns attribute and the behaviour style inline.
		if (!doc.namespaces.hcv) {

			doc.namespaces.add('hcv', 'urn:schemas-microsoft-com:vml');

			// Setup default CSS (#2153, #2368, #2384)
			css = 'hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke' +
				'{ behavior:url(#default#VML); display: inline-block; } ';
			try {
				doc.createStyleSheet().cssText = css;
			} catch (e) {
				doc.styleSheets[0].cssText += css;
			}

		}
	},


	/**
	 * Detect whether the renderer is hidden. This happens when one of the parent elements
	 * has display: none
	 */
	isHidden: function () {
		return !this.box.offsetWidth;
	},

	/**
	 * Define a clipping rectangle. In VML it is accomplished by storing the values
	 * for setting the CSS style to all associated members.
	 *
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	clipRect: function (x, y, width, height) {

		// create a dummy element
		var clipRect = this.createElement(),
			isObj = isObject(x);

		// mimic a rectangle with its style object for automatic updating in attr
		return extend(clipRect, {
			members: [],
			count: 0,
			left: (isObj ? x.x : x) + 1,
			top: (isObj ? x.y : y) + 1,
			width: (isObj ? x.width : width) - 1,
			height: (isObj ? x.height : height) - 1,
			getCSS: function (wrapper) {
				var element = wrapper.element,
					nodeName = element.nodeName,
					isShape = nodeName === 'shape',
					inverted = wrapper.inverted,
					rect = this,
					top = rect.top - (isShape ? element.offsetTop : 0),
					left = rect.left,
					right = left + rect.width,
					bottom = top + rect.height,
					ret = {
						clip: 'rect(' +
							mathRound(inverted ? left : top) + 'px,' +
							mathRound(inverted ? bottom : right) + 'px,' +
							mathRound(inverted ? right : bottom) + 'px,' +
							mathRound(inverted ? top : left) + 'px)'
					};

				// issue 74 workaround
				if (!inverted && docMode8 && nodeName === 'DIV') {
					extend(ret, {
						width: right + PX,
						height: bottom + PX
					});
				}
				return ret;
			},

			// used in attr and animation to update the clipping of all members
			updateClipping: function () {
				each(clipRect.members, function (member) {
					if (member.element) { // Deleted series, like in stock/members/series-remove demo. Should be removed from members, but this will do.
						member.css(clipRect.getCSS(member));
					}
				});
			}
		});

	},


	/**
	 * Take a color and return it if it's a string, make it a gradient if it's a
	 * gradient configuration object, and apply opacity.
	 *
	 * @param {Object} color The color or config object
	 */
	color: function (color, elem, prop, wrapper) {
		var renderer = this,
			colorObject,
			regexRgba = /^rgba/,
			markup,
			fillType,
			ret = NONE;

		// Check for linear or radial gradient
		if (color && color.linearGradient) {
			fillType = 'gradient';
		} else if (color && color.radialGradient) {
			fillType = 'pattern';
		}


		if (fillType) {

			var stopColor,
				stopOpacity,
				gradient = color.linearGradient || color.radialGradient,
				x1,
				y1,
				x2,
				y2,
				opacity1,
				opacity2,
				color1,
				color2,
				fillAttr = '',
				stops = color.stops,
				firstStop,
				lastStop,
				colors = [],
				addFillNode = function () {
					// Add the fill subnode. When colors attribute is used, the meanings of opacity and o:opacity2
					// are reversed.
					markup = ['<fill colors="' + colors.join(',') + '" opacity="', opacity2, '" o:opacity2="', opacity1,
						'" type="', fillType, '" ', fillAttr, 'focus="100%" method="any" />'];
					createElement(renderer.prepVML(markup), null, null, elem);
				};

			// Extend from 0 to 1
			firstStop = stops[0];
			lastStop = stops[stops.length - 1];
			if (firstStop[0] > 0) {
				stops.unshift([
					0,
					firstStop[1]
				]);
			}
			if (lastStop[0] < 1) {
				stops.push([
					1,
					lastStop[1]
				]);
			}

			// Compute the stops
			each(stops, function (stop, i) {
				if (regexRgba.test(stop[1])) {
					colorObject = Color(stop[1]);
					stopColor = colorObject.get('rgb');
					stopOpacity = colorObject.get('a');
				} else {
					stopColor = stop[1];
					stopOpacity = 1;
				}

				// Build the color attribute
				colors.push((stop[0] * 100) + '% ' + stopColor);

				// Only start and end opacities are allowed, so we use the first and the last
				if (!i) {
					opacity1 = stopOpacity;
					color2 = stopColor;
				} else {
					opacity2 = stopOpacity;
					color1 = stopColor;
				}
			});

			// Apply the gradient to fills only.
			if (prop === 'fill') {

				// Handle linear gradient angle
				if (fillType === 'gradient') {
					x1 = gradient.x1 || gradient[0] || 0;
					y1 = gradient.y1 || gradient[1] || 0;
					x2 = gradient.x2 || gradient[2] || 0;
					y2 = gradient.y2 || gradient[3] || 0;
					fillAttr = 'angle="' + (90  - math.atan(
						(y2 - y1) / // y vector
						(x2 - x1) // x vector
						) * 180 / mathPI) + '"';

					addFillNode();

				// Radial (circular) gradient
				} else {

					var r = gradient.r,
						sizex = r * 2,
						sizey = r * 2,
						cx = gradient.cx,
						cy = gradient.cy,
						radialReference = elem.radialReference,
						bBox,
						applyRadialGradient = function () {
							if (radialReference) {
								bBox = wrapper.getBBox();
								cx += (radialReference[0] - bBox.x) / bBox.width - 0.5;
								cy += (radialReference[1] - bBox.y) / bBox.height - 0.5;
								sizex *= radialReference[2] / bBox.width;
								sizey *= radialReference[2] / bBox.height;
							}
							fillAttr = 'src="' + defaultOptions.global.VMLRadialGradientURL + '" ' +
								'size="' + sizex + ',' + sizey + '" ' +
								'origin="0.5,0.5" ' +
								'position="' + cx + ',' + cy + '" ' +
								'color2="' + color2 + '" ';

							addFillNode();
						};

					// Apply radial gradient
					if (wrapper.added) {
						applyRadialGradient();
					} else {
						// We need to know the bounding box to get the size and position right
						wrapper.onAdd = applyRadialGradient;
					}

					// The fill element's color attribute is broken in IE8 standards mode, so we
					// need to set the parent shape's fillcolor attribute instead.
					ret = color1;
				}

			// Gradients are not supported for VML stroke, return the first color. #722.
			} else {
				ret = stopColor;
			}

		// if the color is an rgba color, split it and add a fill node
		// to hold the opacity component
		} else if (regexRgba.test(color) && elem.tagName !== 'IMG') {

			colorObject = Color(color);

			markup = ['<', prop, ' opacity="', colorObject.get('a'), '"/>'];
			createElement(this.prepVML(markup), null, null, elem);

			ret = colorObject.get('rgb');


		} else {
			var propNodes = elem.getElementsByTagName(prop); // 'stroke' or 'fill' node
			if (propNodes.length) {
				propNodes[0].opacity = 1;
				propNodes[0].type = 'solid';
			}
			ret = color;
		}

		return ret;
	},

	/**
	 * Take a VML string and prepare it for either IE8 or IE6/IE7.
	 * @param {Array} markup A string array of the VML markup to prepare
	 */
	prepVML: function (markup) {
		var vmlStyle = 'display:inline-block;behavior:url(#default#VML);',
			isIE8 = this.isIE8;

		markup = markup.join('');

		if (isIE8) { // add xmlns and style inline
			markup = markup.replace('/>', ' xmlns="urn:schemas-microsoft-com:vml" />');
			if (markup.indexOf('style="') === -1) {
				markup = markup.replace('/>', ' style="' + vmlStyle + '" />');
			} else {
				markup = markup.replace('style="', 'style="' + vmlStyle);
			}

		} else { // add namespace
			markup = markup.replace('<', '<hcv:');
		}

		return markup;
	},

	/**
	 * Create rotated and aligned text
	 * @param {String} str
	 * @param {Number} x
	 * @param {Number} y
	 */
	text: SVGRenderer.prototype.html,

	/**
	 * Create and return a path element
	 * @param {Array} path
	 */
	path: function (path) {
		var attr = {
			// subpixel precision down to 0.1 (width and height = 1px)
			coordsize: '10 10'
		};
		if (isArray(path)) {
			attr.d = path;
		} else if (isObject(path)) { // attributes
			extend(attr, path);
		}
		// create the shape
		return this.createElement('shape').attr(attr);
	},

	/**
	 * Create and return a circle element. In VML circles are implemented as
	 * shapes, which is faster than v:oval
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} r
	 */
	circle: function (x, y, r) {
		var circle = this.symbol('circle');
		if (isObject(x)) {
			r = x.r;
			y = x.y;
			x = x.x;
		}
		circle.isCircle = true; // Causes x and y to mean center (#1682)
		circle.r = r;
		return circle.attr({ x: x, y: y });
	},

	/**
	 * Create a group using an outer div and an inner v:group to allow rotating
	 * and flipping. A simple v:group would have problems with positioning
	 * child HTML elements and CSS clip.
	 *
	 * @param {String} name The name of the group
	 */
	g: function (name) {
		var wrapper,
			attribs;

		// set the class name
		if (name) {
			attribs = { 'className': PREFIX + name, 'class': PREFIX + name };
		}

		// the div to hold HTML and clipping
		wrapper = this.createElement(DIV).attr(attribs);

		return wrapper;
	},

	/**
	 * VML override to create a regular HTML image
	 * @param {String} src
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	image: function (src, x, y, width, height) {
		var obj = this.createElement('img')
			.attr({ src: src });

		if (arguments.length > 1) {
			obj.attr({
				x: x,
				y: y,
				width: width,
				height: height
			});
		}
		return obj;
	},

	/**
	 * For rectangles, VML uses a shape for rect to overcome bugs and rotation problems
	 */
	createElement: function (nodeName) {
		return nodeName === 'rect' ? this.symbol(nodeName) : SVGRenderer.prototype.createElement.call(this, nodeName);	
	},

	/**
	 * In the VML renderer, each child of an inverted div (group) is inverted
	 * @param {Object} element
	 * @param {Object} parentNode
	 */
	invertChild: function (element, parentNode) {
		var ren = this,
			parentStyle = parentNode.style,
			imgStyle = element.tagName === 'IMG' && element.style; // #1111

		css(element, {
			flip: 'x',
			left: pInt(parentStyle.width) - (imgStyle ? pInt(imgStyle.top) : 1),
			top: pInt(parentStyle.height) - (imgStyle ? pInt(imgStyle.left) : 1),
			rotation: -90
		});

		// Recursively invert child elements, needed for nested composite shapes like box plots and error bars. #1680, #1806.
		each(element.childNodes, function (child) {
			ren.invertChild(child, element);
		});
	},

	/**
	 * Symbol definitions that override the parent SVG renderer's symbols
	 *
	 */
	symbols: {
		// VML specific arc function
		arc: function (x, y, w, h, options) {
			var start = options.start,
				end = options.end,
				radius = options.r || w || h,
				innerRadius = options.innerR,
				cosStart = mathCos(start),
				sinStart = mathSin(start),
				cosEnd = mathCos(end),
				sinEnd = mathSin(end),
				ret;

			if (end - start === 0) { // no angle, don't show it.
				return ['x'];
			}

			ret = [
				'wa', // clockwise arc to
				x - radius, // left
				y - radius, // top
				x + radius, // right
				y + radius, // bottom
				x + radius * cosStart, // start x
				y + radius * sinStart, // start y
				x + radius * cosEnd, // end x
				y + radius * sinEnd  // end y
			];

			if (options.open && !innerRadius) {
				ret.push(
					'e',
					M,
					x,// - innerRadius,
					y// - innerRadius
				);
			}

			ret.push(
				'at', // anti clockwise arc to
				x - innerRadius, // left
				y - innerRadius, // top
				x + innerRadius, // right
				y + innerRadius, // bottom
				x + innerRadius * cosEnd, // start x
				y + innerRadius * sinEnd, // start y
				x + innerRadius * cosStart, // end x
				y + innerRadius * sinStart, // end y
				'x', // finish path
				'e' // close
			);

			ret.isArc = true;
			return ret;

		},
		// Add circle symbol path. This performs significantly faster than v:oval.
		circle: function (x, y, w, h, wrapper) {

			if (wrapper) {
				w = h = 2 * wrapper.r;
			}

			// Center correction, #1682
			if (wrapper && wrapper.isCircle) {
				x -= w / 2;
				y -= h / 2;
			}

			// Return the path
			return [
				'wa', // clockwisearcto
				x, // left
				y, // top
				x + w, // right
				y + h, // bottom
				x + w, // start x
				y + h / 2,     // start y
				x + w, // end x
				y + h / 2,     // end y
				//'x', // finish path
				'e' // close
			];
		},
		/**
		 * Add rectangle symbol path which eases rotation and omits arcsize problems
		 * compared to the built-in VML roundrect shape. When borders are not rounded,
		 * use the simpler square path, else use the callout path without the arrow.
		 */
		rect: function (x, y, w, h, options) {
			return SVGRenderer.prototype.symbols[
				!defined(options) || !options.r ? 'square' : 'callout'
			].call(0, x, y, w, h, options);
		}
	}
};
Highcharts.VMLRenderer = VMLRenderer = function () {
	this.init.apply(this, arguments);
};
VMLRenderer.prototype = merge(SVGRenderer.prototype, VMLRendererExtension);

	// general renderer
	Renderer = VMLRenderer;
}

// This method is used with exporting in old IE, when emulating SVG (see #2314)
SVGRenderer.prototype.measureSpanWidth = function (text, styles) {
	var measuringSpan = doc.createElement('span'),
		offsetWidth,
	textNode = doc.createTextNode(text);

	measuringSpan.appendChild(textNode);
	css(measuringSpan, styles);
	this.box.appendChild(measuringSpan);
	offsetWidth = measuringSpan.offsetWidth;
	discardElement(measuringSpan); // #2463
	return offsetWidth;
};


/* ****************************************************************************
 *                                                                            *
 * END OF INTERNET EXPLORER <= 8 SPECIFIC CODE                                *
 *                                                                            *
 *****************************************************************************/
/* ****************************************************************************
 *                                                                            *
 * START OF ANDROID < 3 SPECIFIC CODE. THIS CAN BE REMOVED IF YOU'RE NOT      *
 * TARGETING THAT SYSTEM.                                                     *
 *                                                                            *
 *****************************************************************************/
var CanVGRenderer,
	CanVGController;

if (useCanVG) {
	/**
	 * The CanVGRenderer is empty from start to keep the source footprint small.
	 * When requested, the CanVGController downloads the rest of the source packaged
	 * together with the canvg library.
	 */
	Highcharts.CanVGRenderer = CanVGRenderer = function () {
		// Override the global SVG namespace to fake SVG/HTML that accepts CSS
		SVG_NS = 'http://www.w3.org/1999/xhtml';
	};

	/**
	 * Start with an empty symbols object. This is needed when exporting is used (exporting.src.js will add a few symbols), but 
	 * the implementation from SvgRenderer will not be merged in until first render.
	 */
	CanVGRenderer.prototype.symbols = {};

	/**
	 * Handles on demand download of canvg rendering support.
	 */
	CanVGController = (function () {
		// List of renderering calls
		var deferredRenderCalls = [];

		/**
		 * When downloaded, we are ready to draw deferred charts.
		 */
		function drawDeferred() {
			var callLength = deferredRenderCalls.length,
				callIndex;

			// Draw all pending render calls
			for (callIndex = 0; callIndex < callLength; callIndex++) {
				deferredRenderCalls[callIndex]();
			}
			// Clear the list
			deferredRenderCalls = [];
		}

		return {
			push: function (func, scriptLocation) {
				// Only get the script once
				if (deferredRenderCalls.length === 0) {
					getScript(scriptLocation, drawDeferred);
				}
				// Register render call
				deferredRenderCalls.push(func);
			}
		};
	}());

	Renderer = CanVGRenderer;
} // end CanVGRenderer

/* ****************************************************************************
 *                                                                            *
 * END OF ANDROID < 3 SPECIFIC CODE                                           *
 *                                                                            *
 *****************************************************************************/

/**
 * The Tick class
 */
function Tick(axis, pos, type, noLabel) {
	this.axis = axis;
	this.pos = pos;
	this.type = type || '';
	this.isNew = true;

	if (!type && !noLabel) {
		this.addLabel();
	}
}

Tick.prototype = {
	/**
	 * Write the tick label
	 */
	addLabel: function () {
		var tick = this,
			axis = tick.axis,
			options = axis.options,
			chart = axis.chart,
			categories = axis.categories,
			names = axis.names,
			pos = tick.pos,
			labelOptions = options.labels,
			str,
			tickPositions = axis.tickPositions,
			isFirst = pos === tickPositions[0],
			isLast = pos === tickPositions[tickPositions.length - 1],
			value = categories ?
				pick(categories[pos], names[pos], pos) :
				pos,
			label = tick.label,
			tickPositionInfo = tickPositions.info,
			dateTimeLabelFormat;

		// Set the datetime label format. If a higher rank is set for this position, use that. If not,
		// use the general format.
		if (axis.isDatetimeAxis && tickPositionInfo) {
			dateTimeLabelFormat = options.dateTimeLabelFormats[tickPositionInfo.higherRanks[pos] || tickPositionInfo.unitName];
		}
		// set properties for access in render method
		tick.isFirst = isFirst;
		tick.isLast = isLast;

		// get the string
		str = axis.labelFormatter.call({
			axis: axis,
			chart: chart,
			isFirst: isFirst,
			isLast: isLast,
			dateTimeLabelFormat: dateTimeLabelFormat,
			value: axis.isLog ? correctFloat(lin2log(value)) : value
		});

		// prepare CSS
		//css = width && { width: mathMax(1, mathRound(width - 2 * (labelOptions.padding || 10))) + PX };
		
		// first call
		if (!defined(label)) {

			tick.label = label =
				defined(str) && labelOptions.enabled ?
					chart.renderer.text(
							str,
							0,
							0,
							labelOptions.useHTML
						)
						//.attr(attr)
						// without position absolute, IE export sometimes is wrong
						.css(merge(labelOptions.style))
						.add(axis.labelGroup) :
					null;
			tick.labelLength = label && label.getBBox().width; // Un-rotated length
			tick.rotation = 0; // Base value to detect change for new calls to getBBox

		// update
		} else if (label) {
			label.attr({ text: str });
		}
	},

	/**
	 * Get the offset height or width of the label
	 */
	getLabelSize: function () {
		return this.label ?
			this.label.getBBox()[this.axis.horiz ? 'height' : 'width'] :
			0;
	},

	/**
	 * Handle the label overflow by adjusting the labels to the left and right edge, or
	 * hide them if they collide into the neighbour label.
	 */
	handleOverflow: function (xy) {
		var axis = this.axis,
			pxPos = xy.x,
			chartWidth = axis.chart.chartWidth,
			spacing = axis.chart.spacing,
			leftBound = pick(axis.labelLeft, spacing[3]),
			rightBound = pick(axis.labelRight, chartWidth - spacing[1]),
			label = this.label,
			rotation = this.rotation,
			factor = { left: 0, center: 0.5, right: 1 }[axis.labelAlign],
			labelWidth = label.getBBox().width,
			slotWidth = axis.slotWidth,
			leftPos,
			rightPos,
			textWidth;

		// Check if the label overshoots the chart spacing box. If it does, move it.
		// If it now overshoots the slotWidth, add ellipsis.
		if (!rotation) {
			leftPos = pxPos - factor * labelWidth;
			rightPos = pxPos + factor * labelWidth;

			if (leftPos < leftBound) {
				slotWidth -= leftBound - leftPos;
				xy.x = leftBound;
				label.attr({ align: 'left' });				
			} else if (rightPos > rightBound) {
				slotWidth -= rightPos - rightBound;
				xy.x = rightBound;
				label.attr({ align: 'right' });
			}

			// If the label width exceeds the available space, set a text width to be 
			// picked up below. Also, if a width has been set before, we need to set a new
			// one because the reported labelWidth will be limited by the box (#3938).
			if (labelWidth > slotWidth || (axis.autoRotation && label.styles.width)) {
				textWidth = slotWidth;
			}
		

		// Add ellipsis to prevent rotated labels to be clipped against the edge of the chart
		} else if (rotation < 0 && pxPos - factor * labelWidth < leftBound) {
			textWidth = mathRound(pxPos / mathCos(rotation * deg2rad) - leftBound);
		} else if (rotation > 0 && pxPos + factor * labelWidth > rightBound) {
			textWidth = mathRound((chartWidth - pxPos) / mathCos(rotation * deg2rad));
		}

		if (textWidth) {
			label.css({
				width: textWidth,
				textOverflow: 'ellipsis'
			});
		}
	},

	/**
	 * Get the x and y position for ticks and labels
	 */
	getPosition: function (horiz, pos, tickmarkOffset, old) {
		var axis = this.axis,
			chart = axis.chart,
			cHeight = (old && chart.oldChartHeight) || chart.chartHeight;

		return {
			x: horiz ?
				axis.translate(pos + tickmarkOffset, null, null, old) + axis.transB :
				axis.left + axis.offset + (axis.opposite ? ((old && chart.oldChartWidth) || chart.chartWidth) - axis.right - axis.left : 0),

			y: horiz ?
				cHeight - axis.bottom + axis.offset - (axis.opposite ? axis.height : 0) :
				cHeight - axis.translate(pos + tickmarkOffset, null, null, old) - axis.transB
		};

	},

	/**
	 * Get the x, y position of the tick label
	 */
	getLabelPosition: function (x, y, label, horiz, labelOptions, tickmarkOffset, index, step) {
		var axis = this.axis,
			transA = axis.transA,
			reversed = axis.reversed,
			staggerLines = axis.staggerLines,
			rotCorr = axis.tickRotCorr || { x: 0, y: 0 },
			yOffset = pick(labelOptions.y, rotCorr.y + (axis.side === 2 ? 8 : -(label.getBBox().height / 2))),
			line;

		x = x + labelOptions.x + rotCorr.x - (tickmarkOffset && horiz ?
			tickmarkOffset * transA * (reversed ? -1 : 1) : 0);
		y = y + yOffset - (tickmarkOffset && !horiz ?
			tickmarkOffset * transA * (reversed ? 1 : -1) : 0);

		// Correct for staggered labels
		if (staggerLines) {
			line = (index / (step || 1) % staggerLines);
			y += line * (axis.labelOffset / staggerLines);
		}

		return {
			x: x,
			y: mathRound(y)
		};
	},

	/**
	 * Extendible method to return the path of the marker
	 */
	getMarkPath: function (x, y, tickLength, tickWidth, horiz, renderer) {
		return renderer.crispLine([
				M,
				x,
				y,
				L,
				x + (horiz ? 0 : -tickLength),
				y + (horiz ? tickLength : 0)
			], tickWidth);
	},

	/**
	 * Put everything in place
	 *
	 * @param index {Number}
	 * @param old {Boolean} Use old coordinates to prepare an animation into new position
	 */
	render: function (index, old, opacity) {
		var tick = this,
			axis = tick.axis,
			options = axis.options,
			chart = axis.chart,
			renderer = chart.renderer,
			horiz = axis.horiz,
			type = tick.type,
			label = tick.label,
			pos = tick.pos,
			labelOptions = options.labels,
			gridLine = tick.gridLine,
			gridPrefix = type ? type + 'Grid' : 'grid',
			tickPrefix = type ? type + 'Tick' : 'tick',
			gridLineWidth = options[gridPrefix + 'LineWidth'],
			gridLineColor = options[gridPrefix + 'LineColor'],
			dashStyle = options[gridPrefix + 'LineDashStyle'],
			tickLength = options[tickPrefix + 'Length'],
			tickWidth = options[tickPrefix + 'Width'] || 0,
			tickColor = options[tickPrefix + 'Color'],
			tickPosition = options[tickPrefix + 'Position'],
			gridLinePath,
			mark = tick.mark,
			markPath,
			step = /*axis.labelStep || */labelOptions.step,
			attribs,
			show = true,
			tickmarkOffset = axis.tickmarkOffset,
			xy = tick.getPosition(horiz, pos, tickmarkOffset, old),
			x = xy.x,
			y = xy.y,
			reverseCrisp = ((horiz && x === axis.pos + axis.len) || (!horiz && y === axis.pos)) ? -1 : 1; // #1480, #1687

		opacity = pick(opacity, 1);
		this.isActive = true;

		// create the grid line
		if (gridLineWidth) {
			gridLinePath = axis.getPlotLinePath(pos + tickmarkOffset, gridLineWidth * reverseCrisp, old, true);

			if (gridLine === UNDEFINED) {
				attribs = {
					stroke: gridLineColor,
					'stroke-width': gridLineWidth
				};
				if (dashStyle) {
					attribs.dashstyle = dashStyle;
				}
				if (!type) {
					attribs.zIndex = 1;
				}
				if (old) {
					attribs.opacity = 0;
				}
				tick.gridLine = gridLine =
					gridLineWidth ?
						renderer.path(gridLinePath)
							.attr(attribs).add(axis.gridGroup) :
						null;
			}

			// If the parameter 'old' is set, the current call will be followed
			// by another call, therefore do not do any animations this time
			if (!old && gridLine && gridLinePath) {
				gridLine[tick.isNew ? 'attr' : 'animate']({
					d: gridLinePath,
					opacity: opacity
				});
			}
		}

		// create the tick mark
		if (tickWidth && tickLength) {

			// negate the length
			if (tickPosition === 'inside') {
				tickLength = -tickLength;
			}
			if (axis.opposite) {
				tickLength = -tickLength;
			}

			markPath = tick.getMarkPath(x, y, tickLength, tickWidth * reverseCrisp, horiz, renderer);
			if (mark) { // updating
				mark.animate({
					d: markPath,
					opacity: opacity
				});
			} else { // first time
				tick.mark = renderer.path(
					markPath
				).attr({
					stroke: tickColor,
					'stroke-width': tickWidth,
					opacity: opacity
				}).add(axis.axisGroup);
			}
		}

		// the label is created on init - now move it into place
		if (label && !isNaN(x)) {
			label.xy = xy = tick.getLabelPosition(x, y, label, horiz, labelOptions, tickmarkOffset, index, step);

			// Apply show first and show last. If the tick is both first and last, it is
			// a single centered tick, in which case we show the label anyway (#2100).
			if ((tick.isFirst && !tick.isLast && !pick(options.showFirstLabel, 1)) ||
					(tick.isLast && !tick.isFirst && !pick(options.showLastLabel, 1))) {
				show = false;

			// Handle label overflow and show or hide accordingly
			} else if (horiz && !axis.isRadial && !labelOptions.step && !labelOptions.rotation && !old && opacity !== 0) {
				tick.handleOverflow(xy);
			}

			// apply step
			if (step && index % step) {
				// show those indices dividable by step
				show = false;
			}

			// Set the new position, and show or hide
			if (show && !isNaN(xy.y)) {
				xy.opacity = opacity;
				label[tick.isNew ? 'attr' : 'animate'](xy);
				tick.isNew = false;
			} else {
				label.attr('y', -9999); // #1338
			}
		}
	},

	/**
	 * Destructor for the tick prototype
	 */
	destroy: function () {
		destroyObjectProperties(this, this.axis);
	}
};

/**
 * The object wrapper for plot lines and plot bands
 * @param {Object} options
 */
Highcharts.PlotLineOrBand = function (axis, options) {
	this.axis = axis;

	if (options) {
		this.options = options;
		this.id = options.id;
	}
};

Highcharts.PlotLineOrBand.prototype = {
	
	/**
	 * Render the plot line or plot band. If it is already existing,
	 * move it.
	 */
	render: function () {
		var plotLine = this,
			axis = plotLine.axis,
			horiz = axis.horiz,
			options = plotLine.options,
			optionsLabel = options.label,
			label = plotLine.label,
			width = options.width,
			to = options.to,
			from = options.from,
			isBand = defined(from) && defined(to),
			value = options.value,
			dashStyle = options.dashStyle,
			svgElem = plotLine.svgElem,
			path = [],
			addEvent,
			eventType,
			xs,
			ys,
			x,
			y,
			color = options.color,
			zIndex = options.zIndex,
			events = options.events,
			attribs = {},
			renderer = axis.chart.renderer;

		// logarithmic conversion
		if (axis.isLog) {
			from = log2lin(from);
			to = log2lin(to);
			value = log2lin(value);
		}

		// plot line
		if (width) {
			path = axis.getPlotLinePath(value, width);
			attribs = {
				stroke: color,
				'stroke-width': width
			};
			if (dashStyle) {
				attribs.dashstyle = dashStyle;
			}
		} else if (isBand) { // plot band

			path = axis.getPlotBandPath(from, to, options);
			if (color) {
				attribs.fill = color;
			}
			if (options.borderWidth) {
				attribs.stroke = options.borderColor;
				attribs['stroke-width'] = options.borderWidth;
			}
		} else {
			return;
		}
		// zIndex
		if (defined(zIndex)) {
			attribs.zIndex = zIndex;
		}

		// common for lines and bands
		if (svgElem) {
			if (path) {
				svgElem.animate({
					d: path
				}, null, svgElem.onGetPath);
			} else {
				svgElem.hide();
				svgElem.onGetPath = function () {
					svgElem.show();
				};
				if (label) {
					plotLine.label = label = label.destroy();
				}
			}
		} else if (path && path.length) {
			plotLine.svgElem = svgElem = renderer.path(path)
				.attr(attribs).add();

			// events
			if (events) {
				addEvent = function (eventType) {
					svgElem.on(eventType, function (e) {
						events[eventType].apply(plotLine, [e]);
					});
				};
				for (eventType in events) {
					addEvent(eventType);
				}
			}
		}

		// the plot band/line label
		if (optionsLabel && defined(optionsLabel.text) && path && path.length && axis.width > 0 && axis.height > 0) {
			// apply defaults
			optionsLabel = merge({
				align: horiz && isBand && 'center',
				x: horiz ? !isBand && 4 : 10,
				verticalAlign : !horiz && isBand && 'middle',
				y: horiz ? isBand ? 16 : 10 : isBand ? 6 : -4,
				rotation: horiz && !isBand && 90
			}, optionsLabel);

			// add the SVG element
			if (!label) {
				attribs = {
					align: optionsLabel.textAlign || optionsLabel.align,
					rotation: optionsLabel.rotation
				};
				if (defined(zIndex)) {
					attribs.zIndex = zIndex;
				}
				plotLine.label = label = renderer.text(
						optionsLabel.text,
						0,
						0,
						optionsLabel.useHTML
					)
					.attr(attribs)
					.css(optionsLabel.style)
					.add();
			}

			// get the bounding box and align the label
			// #3000 changed to better handle choice between plotband or plotline
			xs = [path[1], path[4], (isBand ? path[6] : path[1])];
			ys = [path[2], path[5], (isBand ? path[7] : path[2])];
			x = arrayMin(xs);
			y = arrayMin(ys);

			label.align(optionsLabel, false, {
				x: x,
				y: y,
				width: arrayMax(xs) - x,
				height: arrayMax(ys) - y
			});
			label.show();

		} else if (label) { // move out of sight
			label.hide();
		}

		// chainable
		return plotLine;
	},

	/**
	 * Remove the plot line or band
	 */
	destroy: function () {
		// remove it from the lookup
		erase(this.axis.plotLinesAndBands, this);
		
		delete this.axis;
		destroyObjectProperties(this);
	}
};

/**
 * Object with members for extending the Axis prototype
 */

AxisPlotLineOrBandExtension = {

	/**
	 * Create the path for a plot band
	 */ 
	getPlotBandPath: function (from, to) {
		var toPath = this.getPlotLinePath(to, null, null, true),
			path = this.getPlotLinePath(from, null, null, true);

		if (path && toPath && path.toString() !== toPath.toString()) { // #3836
			path.push(
				toPath[4],
				toPath[5],
				toPath[1],
				toPath[2]
			);
		} else { // outside the axis area
			path = null;
		}
		
		return path;
	},

	addPlotBand: function (options) {
		return this.addPlotBandOrLine(options, 'plotBands');
	},
	
	addPlotLine: function (options) {
		return this.addPlotBandOrLine(options, 'plotLines');
	},

	/**
	 * Add a plot band or plot line after render time
	 *
	 * @param options {Object} The plotBand or plotLine configuration object
	 */
	addPlotBandOrLine: function (options, coll) {
		var obj = new Highcharts.PlotLineOrBand(this, options).render(),
			userOptions = this.userOptions;

		if (obj) { // #2189
			// Add it to the user options for exporting and Axis.update
			if (coll) {
				userOptions[coll] = userOptions[coll] || [];
				userOptions[coll].push(options); 
			}
			this.plotLinesAndBands.push(obj); 
		}
		
		return obj;
	},

	/**
	 * Remove a plot band or plot line from the chart by id
	 * @param {Object} id
	 */
	removePlotBandOrLine: function (id) {
		var plotLinesAndBands = this.plotLinesAndBands,
			options = this.options,
			userOptions = this.userOptions,
			i = plotLinesAndBands.length;
		while (i--) {
			if (plotLinesAndBands[i].id === id) {
				plotLinesAndBands[i].destroy();
			}
		}
		each([options.plotLines || [], userOptions.plotLines || [], options.plotBands || [], userOptions.plotBands || []], function (arr) {
			i = arr.length;
			while (i--) {
				if (arr[i].id === id) {
					erase(arr, arr[i]);
				}
			}
		});
	}
};

/**
 * Create a new axis object
 * @param {Object} chart
 * @param {Object} options
 */
var Axis = Highcharts.Axis = function () {
	this.init.apply(this, arguments);
};

Axis.prototype = {

	/**
	 * Default options for the X axis - the Y axis has extended defaults
	 */
	defaultOptions: {
		// allowDecimals: null,
		// alternateGridColor: null,
		// categories: [],
		dateTimeLabelFormats: {
			millisecond: '%H:%M:%S.%L',
			second: '%H:%M:%S',
			minute: '%H:%M',
			hour: '%H:%M',
			day: '%e. %b',
			week: '%e. %b',
			month: '%b \'%y',
			year: '%Y'
		},
		endOnTick: false,
		gridLineColor: '#D8D8D8',
		// gridLineDashStyle: 'solid',
		// gridLineWidth: 0,
		// reversed: false,

		labels: {
			enabled: true,
			// rotation: 0,
			// align: 'center',
			// step: null,
			style: {
				color: '#606060',
				cursor: 'default',
				fontSize: '11px'
			},
			x: 0,
			y: 15
			/*formatter: function () {
				return this.value;
			},*/
		},
		lineColor: '#C0D0E0',
		lineWidth: 1,
		//linkedTo: null,
		//max: undefined,
		//min: undefined,
		minPadding: 0.01,
		maxPadding: 0.01,
		//minRange: null,
		minorGridLineColor: '#E0E0E0',
		// minorGridLineDashStyle: null,
		minorGridLineWidth: 1,
		minorTickColor: '#A0A0A0',
		//minorTickInterval: null,
		minorTickLength: 2,
		minorTickPosition: 'outside', // inside or outside
		//minorTickWidth: 0,
		//opposite: false,
		//offset: 0,
		//plotBands: [{
		//	events: {},
		//	zIndex: 1,
		//	labels: { align, x, verticalAlign, y, style, rotation, textAlign }
		//}],
		//plotLines: [{
		//	events: {}
		//  dashStyle: {}
		//	zIndex:
		//	labels: { align, x, verticalAlign, y, style, rotation, textAlign }
		//}],
		//reversed: false,
		// showFirstLabel: true,
		// showLastLabel: true,
		startOfWeek: 1,
		startOnTick: false,
		tickColor: '#C0D0E0',
		//tickInterval: null,
		tickLength: 10,
		tickmarkPlacement: 'between', // on or between
		tickPixelInterval: 100,
		tickPosition: 'outside',
		tickWidth: 1,
		title: {
			//text: null,
			align: 'middle', // low, middle or high
			//margin: 0 for horizontal, 10 for vertical axes,
			//rotation: 0,
			//side: 'outside',
			style: {
				color: '#707070'
			}
			//x: 0,
			//y: 0
		},
		type: 'linear' // linear, logarithmic or datetime
	},

	/**
	 * This options set extends the defaultOptions for Y axes
	 */
	defaultYAxisOptions: {
		endOnTick: true,
		gridLineWidth: 1,
		tickPixelInterval: 72,
		showLastLabel: true,
		labels: {
			x: -8,
			y: 3
		},
		lineWidth: 0,
		maxPadding: 0.05,
		minPadding: 0.05,
		startOnTick: true,
		tickWidth: 0,
		title: {
			rotation: 270,
			text: 'Values'
		},
		stackLabels: {
			enabled: false,
			//align: dynamic,
			//y: dynamic,
			//x: dynamic,
			//verticalAlign: dynamic,
			//textAlign: dynamic,
			//rotation: 0,
			formatter: function () {
				return Highcharts.numberFormat(this.total, -1);
			},
			style: merge(defaultPlotOptions.line.dataLabels.style, { color: '#000000' })
		}
	},

	/**
	 * These options extend the defaultOptions for left axes
	 */
	defaultLeftAxisOptions: {
		labels: {
			x: -15,
			y: null
		},
		title: {
			rotation: 270
		}
	},

	/**
	 * These options extend the defaultOptions for right axes
	 */
	defaultRightAxisOptions: {
		labels: {
			x: 15,
			y: null
		},
		title: {
			rotation: 90
		}
	},

	/**
	 * These options extend the defaultOptions for bottom axes
	 */
	defaultBottomAxisOptions: {
		labels: {
			autoRotation: [-45],
			x: 0,
			y: null // based on font size
			// overflow: undefined,
			// staggerLines: null
		},
		title: {
			rotation: 0
		}
	},
	/**
	 * These options extend the defaultOptions for top axes
	 */
	defaultTopAxisOptions: {
		labels: {
			autoRotation: [-45],
			x: 0,
			y: -15
			// overflow: undefined
			// staggerLines: null
		},
		title: {
			rotation: 0
		}
	},

	/**
	 * Initialize the axis
	 */
	init: function (chart, userOptions) {


		var isXAxis = userOptions.isX,
			axis = this;

		// Flag, is the axis horizontal
		axis.horiz = chart.inverted ? !isXAxis : isXAxis;

		// Flag, isXAxis
		axis.isXAxis = isXAxis;
		axis.coll = isXAxis ? 'xAxis' : 'yAxis';

		axis.opposite = userOptions.opposite; // needed in setOptions
		axis.side = userOptions.side || (axis.horiz ?
				(axis.opposite ? 0 : 2) : // top : bottom
				(axis.opposite ? 1 : 3));  // right : left

		axis.setOptions(userOptions);


		var options = this.options,
			type = options.type,
			isDatetimeAxis = type === 'datetime';

		axis.labelFormatter = options.labels.formatter || axis.defaultLabelFormatter; // can be overwritten by dynamic format


		// Flag, stagger lines or not
		axis.userOptions = userOptions;

		//axis.axisTitleMargin = UNDEFINED,// = options.title.margin,
		axis.minPixelPadding = 0;
		//axis.ignoreMinPadding = UNDEFINED; // can be set to true by a column or bar series
		//axis.ignoreMaxPadding = UNDEFINED;

		axis.chart = chart;
		axis.reversed = options.reversed;
		axis.zoomEnabled = options.zoomEnabled !== false;

		// Initial categories
		axis.categories = options.categories || type === 'category';
		axis.names = axis.names || []; // Preserve on update (#3830)

		// Elements
		//axis.axisGroup = UNDEFINED;
		//axis.gridGroup = UNDEFINED;
		//axis.axisTitle = UNDEFINED;
		//axis.axisLine = UNDEFINED;

		// Shorthand types
		axis.isLog = type === 'logarithmic';
		axis.isDatetimeAxis = isDatetimeAxis;

		// Flag, if axis is linked to another axis
		axis.isLinked = defined(options.linkedTo);
		// Linked axis.
		//axis.linkedParent = UNDEFINED;

		// Tick positions
		//axis.tickPositions = UNDEFINED; // array containing predefined positions
		// Tick intervals
		//axis.tickInterval = UNDEFINED;
		//axis.minorTickInterval = UNDEFINED;

		
		// Major ticks
		axis.ticks = {};
		axis.labelEdge = [];
		// Minor ticks
		axis.minorTicks = {};

		// List of plotLines/Bands
		axis.plotLinesAndBands = [];

		// Alternate bands
		axis.alternateBands = {};

		// Axis metrics
		//axis.left = UNDEFINED;
		//axis.top = UNDEFINED;
		//axis.width = UNDEFINED;
		//axis.height = UNDEFINED;
		//axis.bottom = UNDEFINED;
		//axis.right = UNDEFINED;
		//axis.transA = UNDEFINED;
		//axis.transB = UNDEFINED;
		//axis.oldTransA = UNDEFINED;
		axis.len = 0;
		//axis.oldMin = UNDEFINED;
		//axis.oldMax = UNDEFINED;
		//axis.oldUserMin = UNDEFINED;
		//axis.oldUserMax = UNDEFINED;
		//axis.oldAxisLength = UNDEFINED;
		axis.minRange = axis.userMinRange = options.minRange || options.maxZoom;
		axis.range = options.range;
		axis.offset = options.offset || 0;


		// Dictionary for stacks
		axis.stacks = {};
		axis.oldStacks = {};
		
		// Min and max in the data
		//axis.dataMin = UNDEFINED,
		//axis.dataMax = UNDEFINED,

		// The axis range
		axis.max = null;
		axis.min = null;

		// User set min and max
		//axis.userMin = UNDEFINED,
		//axis.userMax = UNDEFINED,

		// Crosshair options
		axis.crosshair = pick(options.crosshair, splat(chart.options.tooltip.crosshairs)[isXAxis ? 0 : 1], false);
		// Run Axis

		var eventType,
			events = axis.options.events;

		// Register
		if (inArray(axis, chart.axes) === -1) { // don't add it again on Axis.update()
			if (isXAxis && !this.isColorAxis) { // #2713
				chart.axes.splice(chart.xAxis.length, 0, axis);
			} else {
				chart.axes.push(axis);
			}

			chart[axis.coll].push(axis);
		}

		axis.series = axis.series || []; // populated by Series

		// inverted charts have reversed xAxes as default
		if (chart.inverted && isXAxis && axis.reversed === UNDEFINED) {
			axis.reversed = true;
		}

		axis.removePlotBand = axis.removePlotBandOrLine;
		axis.removePlotLine = axis.removePlotBandOrLine;


		// register event listeners
		for (eventType in events) {
			addEvent(axis, eventType, events[eventType]);
		}

		// extend logarithmic axis
		if (axis.isLog) {
			axis.val2lin = log2lin;
			axis.lin2val = lin2log;
		}
	},

	/**
	 * Merge and set options
	 */
	setOptions: function (userOptions) {
		this.options = merge(
			this.defaultOptions,
			this.isXAxis ? {} : this.defaultYAxisOptions,
			[this.defaultTopAxisOptions, this.defaultRightAxisOptions,
				this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side],
			merge(
				defaultOptions[this.coll], // if set in setOptions (#1053)
				userOptions
			)
		);
	},

	/**
	 * The default label formatter. The context is a special config object for the label.
	 */
	defaultLabelFormatter: function () {
		var axis = this.axis,
			value = this.value,
			categories = axis.categories,
			dateTimeLabelFormat = this.dateTimeLabelFormat,
			numericSymbols = defaultOptions.lang.numericSymbols,
			i = numericSymbols && numericSymbols.length,
			multi,
			ret,
			formatOption = axis.options.labels.format,

			// make sure the same symbol is added for all labels on a linear axis
			numericSymbolDetector = axis.isLog ? value : axis.tickInterval;

		if (formatOption) {
			ret = format(formatOption, this);

		} else if (categories) {
			ret = value;

		} else if (dateTimeLabelFormat) { // datetime axis
			ret = dateFormat(dateTimeLabelFormat, value);

		} else if (i && numericSymbolDetector >= 1000) {
			// Decide whether we should add a numeric symbol like k (thousands) or M (millions).
			// If we are to enable this in tooltip or other places as well, we can move this
			// logic to the numberFormatter and enable it by a parameter.
			while (i-- && ret === UNDEFINED) {
				multi = Math.pow(1000, i + 1);
				if (numericSymbolDetector >= multi && numericSymbols[i] !== null) {
					ret = Highcharts.numberFormat(value / multi, -1) + numericSymbols[i];
				}
			}
		}

		if (ret === UNDEFINED) {
			if (mathAbs(value) >= 10000) { // add thousands separators
				ret = Highcharts.numberFormat(value, 0);

			} else { // small numbers
				ret = Highcharts.numberFormat(value, -1, UNDEFINED, ''); // #2466
			}
		}

		return ret;
	},

	/**
	 * Get the minimum and maximum for the series of each axis
	 */
	getSeriesExtremes: function () {
		var axis = this,
			chart = axis.chart;

		axis.hasVisibleSeries = false;

		// Reset properties in case we're redrawing (#3353)
		axis.dataMin = axis.dataMax = axis.ignoreMinPadding = axis.ignoreMaxPadding = null;
		
		if (axis.buildStacks) {
			axis.buildStacks();
		}

		// loop through this axis' series
		each(axis.series, function (series) {

			if (series.visible || !chart.options.chart.ignoreHiddenSeries) {

				var seriesOptions = series.options,
					xData,
					threshold = seriesOptions.threshold,
					seriesDataMin,
					seriesDataMax;

				axis.hasVisibleSeries = true;

				// Validate threshold in logarithmic axes
				if (axis.isLog && threshold <= 0) {
					threshold = null;
				}

				// Get dataMin and dataMax for X axes
				if (axis.isXAxis) {
					xData = series.xData;
					if (xData.length) {
						axis.dataMin = mathMin(pick(axis.dataMin, xData[0]), arrayMin(xData));
						axis.dataMax = mathMax(pick(axis.dataMax, xData[0]), arrayMax(xData));
					}

				// Get dataMin and dataMax for Y axes, as well as handle stacking and processed data
				} else {

					// Get this particular series extremes
					series.getExtremes();
					seriesDataMax = series.dataMax;
					seriesDataMin = series.dataMin;

					// Get the dataMin and dataMax so far. If percentage is used, the min and max are
					// always 0 and 100. If seriesDataMin and seriesDataMax is null, then series
					// doesn't have active y data, we continue with nulls
					if (defined(seriesDataMin) && defined(seriesDataMax)) {
						axis.dataMin = mathMin(pick(axis.dataMin, seriesDataMin), seriesDataMin);
						axis.dataMax = mathMax(pick(axis.dataMax, seriesDataMax), seriesDataMax);
					}

					// Adjust to threshold
					if (defined(threshold)) {
						if (axis.dataMin >= threshold) {
							axis.dataMin = threshold;
							axis.ignoreMinPadding = true;
						} else if (axis.dataMax < threshold) {
							axis.dataMax = threshold;
							axis.ignoreMaxPadding = true;
						}
					}
				}
			}
		});
	},

	/**
	 * Translate from axis value to pixel position on the chart, or back
	 *
	 */
	translate: function (val, backwards, cvsCoord, old, handleLog, pointPlacement) {
		var axis = this,
			sign = 1,
			cvsOffset = 0,
			localA = old ? axis.oldTransA : axis.transA,
			localMin = old ? axis.oldMin : axis.min,
			returnValue,
			minPixelPadding = axis.minPixelPadding,
			doPostTranslate = (axis.doPostTranslate || (axis.isLog && handleLog)) && axis.lin2val;

		if (!localA) {
			localA = axis.transA;
		}

		// In vertical axes, the canvas coordinates start from 0 at the top like in
		// SVG.
		if (cvsCoord) {
			sign *= -1; // canvas coordinates inverts the value
			cvsOffset = axis.len;
		}

		// Handle reversed axis
		if (axis.reversed) {
			sign *= -1;
			cvsOffset -= sign * (axis.sector || axis.len);
		}

		// From pixels to value
		if (backwards) { // reverse translation

			val = val * sign + cvsOffset;
			val -= minPixelPadding;
			returnValue = val / localA + localMin; // from chart pixel to value
			if (doPostTranslate) { // log and ordinal axes
				returnValue = axis.lin2val(returnValue);
			}

		// From value to pixels
		} else {
			if (doPostTranslate) { // log and ordinal axes
				val = axis.val2lin(val);
			}
			if (pointPlacement === 'between') {
				pointPlacement = 0.5;
			}
			returnValue = sign * (val - localMin) * localA + cvsOffset + (sign * minPixelPadding) +
				(isNumber(pointPlacement) ? localA * pointPlacement * axis.pointRange : 0);
		}

		return returnValue;
	},

	/**
	 * Utility method to translate an axis value to pixel position.
	 * @param {Number} value A value in terms of axis units
	 * @param {Boolean} paneCoordinates Whether to return the pixel coordinate relative to the chart
	 *        or just the axis/pane itself.
	 */
	toPixels: function (value, paneCoordinates) {
		return this.translate(value, false, !this.horiz, null, true) + (paneCoordinates ? 0 : this.pos);
	},

	/*
	 * Utility method to translate a pixel position in to an axis value
	 * @param {Number} pixel The pixel value coordinate
	 * @param {Boolean} paneCoordiantes Whether the input pixel is relative to the chart or just the
	 *        axis/pane itself.
	 */
	toValue: function (pixel, paneCoordinates) {
		return this.translate(pixel - (paneCoordinates ? 0 : this.pos), true, !this.horiz, null, true);
	},

	/**
	 * Create the path for a plot line that goes from the given value on
	 * this axis, across the plot to the opposite side
	 * @param {Number} value
	 * @param {Number} lineWidth Used for calculation crisp line
	 * @param {Number] old Use old coordinates (for resizing and rescaling)
	 */
	getPlotLinePath: function (value, lineWidth, old, force, translatedValue) {
		var axis = this,
			chart = axis.chart,
			axisLeft = axis.left,
			axisTop = axis.top,
			x1,
			y1,
			x2,
			y2,
			cHeight = (old && chart.oldChartHeight) || chart.chartHeight,
			cWidth = (old && chart.oldChartWidth) || chart.chartWidth,
			skip,
			transB = axis.transB,
			/**
			 * Check if x is between a and b. If not, either move to a/b or skip, 
			 * depending on the force parameter.
			 */
			between = function (x, a, b) {
				if (x < a || x > b) {
					if (force) {
						x = mathMin(mathMax(a, x), b);
					} else {
						skip = true;
					}
				}
				return x;
			};

		translatedValue = pick(translatedValue, axis.translate(value, null, null, old));
		x1 = x2 = mathRound(translatedValue + transB);
		y1 = y2 = mathRound(cHeight - translatedValue - transB);

		if (isNaN(translatedValue)) { // no min or max
			skip = true;

		} else if (axis.horiz) {
			y1 = axisTop;
			y2 = cHeight - axis.bottom;
			x1 = x2 = between(x1, axisLeft, axisLeft + axis.width);
		} else {
			x1 = axisLeft;
			x2 = cWidth - axis.right;
			y1 = y2 = between(y1, axisTop, axisTop + axis.height);
		}
		return skip && !force ?
			null :
			chart.renderer.crispLine([M, x1, y1, L, x2, y2], lineWidth || 1);
	},

	/**
	 * Set the tick positions of a linear axis to round values like whole tens or every five.
	 */
	getLinearTickPositions: function (tickInterval, min, max) {
		var pos,
			lastPos,
			roundedMin = correctFloat(mathFloor(min / tickInterval) * tickInterval),
			roundedMax = correctFloat(mathCeil(max / tickInterval) * tickInterval),
			tickPositions = [];

		// For single points, add a tick regardless of the relative position (#2662)
		if (min === max && isNumber(min)) {
			return [min];
		}

		// Populate the intermediate values
		pos = roundedMin;
		while (pos <= roundedMax) {

			// Place the tick on the rounded value
			tickPositions.push(pos);

			// Always add the raw tickInterval, not the corrected one.
			pos = correctFloat(pos + tickInterval);

			// If the interval is not big enough in the current min - max range to actually increase
			// the loop variable, we need to break out to prevent endless loop. Issue #619
			if (pos === lastPos) {
				break;
			}

			// Record the last value
			lastPos = pos;
		}
		return tickPositions;
	},

	/**
	 * Return the minor tick positions. For logarithmic axes, reuse the same logic
	 * as for major ticks.
	 */
	getMinorTickPositions: function () {
		var axis = this,
			options = axis.options,
			tickPositions = axis.tickPositions,
			minorTickInterval = axis.minorTickInterval,
			minorTickPositions = [],
			pos,
			i,
			min = axis.min,
			max = axis.max,
			range = max - min,
			len;

		// If minor ticks get too dense, they are hard to read, and may cause long running script. So we don't draw them.
		if (range && range / minorTickInterval < axis.len / 3) { // #3875

			if (axis.isLog) {
				len = tickPositions.length;
				for (i = 1; i < len; i++) {
					minorTickPositions = minorTickPositions.concat(
						axis.getLogTickPositions(minorTickInterval, tickPositions[i - 1], tickPositions[i], true)
					);
				}
			} else if (axis.isDatetimeAxis && options.minorTickInterval === 'auto') { // #1314
				minorTickPositions = minorTickPositions.concat(
					axis.getTimeTicks(
						axis.normalizeTimeTickInterval(minorTickInterval),
						min,
						max,
						options.startOfWeek
					)
				);
			} else {
				for (pos = min + (tickPositions[0] - min) % minorTickInterval; pos <= max; pos += minorTickInterval) {
					minorTickPositions.push(pos);
				}
			}
		}

		axis.trimTicks(minorTickPositions); // #3652 #3743
		return minorTickPositions;
	},

	/**
	 * Adjust the min and max for the minimum range. Keep in mind that the series data is
	 * not yet processed, so we don't have information on data cropping and grouping, or
	 * updated axis.pointRange or series.pointRange. The data can't be processed until
	 * we have finally established min and max.
	 */
	adjustForMinRange: function () {
		var axis = this,
			options = axis.options,
			min = axis.min,
			max = axis.max,
			zoomOffset,
			spaceAvailable = axis.dataMax - axis.dataMin >= axis.minRange,
			closestDataRange,
			i,
			distance,
			xData,
			loopLength,
			minArgs,
			maxArgs;

		// Set the automatic minimum range based on the closest point distance
		if (axis.isXAxis && axis.minRange === UNDEFINED && !axis.isLog) {

			if (defined(options.min) || defined(options.max)) {
				axis.minRange = null; // don't do this again

			} else {

				// Find the closest distance between raw data points, as opposed to
				// closestPointRange that applies to processed points (cropped and grouped)
				each(axis.series, function (series) {
					xData = series.xData;
					loopLength = series.xIncrement ? 1 : xData.length - 1;
					for (i = loopLength; i > 0; i--) {
						distance = xData[i] - xData[i - 1];
						if (closestDataRange === UNDEFINED || distance < closestDataRange) {
							closestDataRange = distance;
						}
					}
				});
				axis.minRange = mathMin(closestDataRange * 5, axis.dataMax - axis.dataMin);
			}
		}

		// if minRange is exceeded, adjust
		if (max - min < axis.minRange) {
			var minRange = axis.minRange;
			zoomOffset = (minRange - max + min) / 2;

			// if min and max options have been set, don't go beyond it
			minArgs = [min - zoomOffset, pick(options.min, min - zoomOffset)];
			if (spaceAvailable) { // if space is available, stay within the data range
				minArgs[2] = axis.dataMin;
			}
			min = arrayMax(minArgs);

			maxArgs = [min + minRange, pick(options.max, min + minRange)];
			if (spaceAvailable) { // if space is availabe, stay within the data range
				maxArgs[2] = axis.dataMax;
			}

			max = arrayMin(maxArgs);

			// now if the max is adjusted, adjust the min back
			if (max - min < minRange) {
				minArgs[0] = max - minRange;
				minArgs[1] = pick(options.min, max - minRange);
				min = arrayMax(minArgs);
			}
		}

		// Record modified extremes
		axis.min = min;
		axis.max = max;
	},

	/**
	 * Update translation information
	 */
	setAxisTranslation: function (saveOld) {
		var axis = this,
			range = axis.max - axis.min,
			pointRange = axis.axisPointRange || 0,
			closestPointRange,
			minPointOffset = 0,
			pointRangePadding = 0,
			linkedParent = axis.linkedParent,
			ordinalCorrection,
			hasCategories = !!axis.categories,
			transA = axis.transA,
			isXAxis = axis.isXAxis;

		// Adjust translation for padding. Y axis with categories need to go through the same (#1784).
		if (isXAxis || hasCategories || pointRange) {
			if (linkedParent) {
				minPointOffset = linkedParent.minPointOffset;
				pointRangePadding = linkedParent.pointRangePadding;

			} else {
				each(axis.series, function (series) {
					var seriesPointRange = hasCategories ? 1 : (isXAxis ? series.pointRange : (axis.axisPointRange || 0)), // #2806
						pointPlacement = series.options.pointPlacement,
						seriesClosestPointRange = series.closestPointRange;

					if (seriesPointRange > range) { // #1446
						seriesPointRange = 0;
					}
					pointRange = mathMax(pointRange, seriesPointRange);

					if (!axis.single) {
						// minPointOffset is the value padding to the left of the axis in order to make
						// room for points with a pointRange, typically columns. When the pointPlacement option
						// is 'between' or 'on', this padding does not apply.
						minPointOffset = mathMax(
							minPointOffset,
							isString(pointPlacement) ? 0 : seriesPointRange / 2
						);

						// Determine the total padding needed to the length of the axis to make room for the
						// pointRange. If the series' pointPlacement is 'on', no padding is added.
						pointRangePadding = mathMax(
							pointRangePadding,
							pointPlacement === 'on' ? 0 : seriesPointRange
						);
					}

					// Set the closestPointRange
					if (!series.noSharedTooltip && defined(seriesClosestPointRange)) {
						closestPointRange = defined(closestPointRange) ?
							mathMin(closestPointRange, seriesClosestPointRange) :
							seriesClosestPointRange;
					}
				});
			}

			// Record minPointOffset and pointRangePadding
			ordinalCorrection = axis.ordinalSlope && closestPointRange ? axis.ordinalSlope / closestPointRange : 1; // #988, #1853
			axis.minPointOffset = minPointOffset = minPointOffset * ordinalCorrection;
			axis.pointRangePadding = pointRangePadding = pointRangePadding * ordinalCorrection;

			// pointRange means the width reserved for each point, like in a column chart
			axis.pointRange = mathMin(pointRange, range);

			// closestPointRange means the closest distance between points. In columns
			// it is mostly equal to pointRange, but in lines pointRange is 0 while closestPointRange
			// is some other value
			if (isXAxis) {
				axis.closestPointRange = closestPointRange;
			}
		}

		// Secondary values
		if (saveOld) {
			axis.oldTransA = transA;
		}
		axis.translationSlope = axis.transA = transA = axis.len / ((range + pointRangePadding) || 1);
		axis.transB = axis.horiz ? axis.left : axis.bottom; // translation addend
		axis.minPixelPadding = transA * minPointOffset;
	},

	/**
	 * Set the tick positions to round values and optionally extend the extremes
	 * to the nearest tick
	 */
	setTickInterval: function (secondPass) {
		var axis = this,
			chart = axis.chart,
			options = axis.options,
			isLog = axis.isLog,
			isDatetimeAxis = axis.isDatetimeAxis,
			isXAxis = axis.isXAxis,
			isLinked = axis.isLinked,
			maxPadding = options.maxPadding,
			minPadding = options.minPadding,
			length,
			linkedParentExtremes,
			tickIntervalOption = options.tickInterval,
			minTickInterval,
			tickPixelIntervalOption = options.tickPixelInterval,
			categories = axis.categories;

		if (!isDatetimeAxis && !categories && !isLinked) {
			this.getTickAmount();
		}

		// linked axis gets the extremes from the parent axis
		if (isLinked) {
			axis.linkedParent = chart[axis.coll][options.linkedTo];
			linkedParentExtremes = axis.linkedParent.getExtremes();
			axis.min = pick(linkedParentExtremes.min, linkedParentExtremes.dataMin);
			axis.max = pick(linkedParentExtremes.max, linkedParentExtremes.dataMax);
			if (options.type !== axis.linkedParent.options.type) {
				error(11, 1); // Can't link axes of different type
			}
		} else { // initial min and max from the extreme data values
			axis.min = pick(axis.userMin, options.min, axis.dataMin);
			axis.max = pick(axis.userMax, options.max, axis.dataMax);
		}

		if (isLog) {
			if (!secondPass && mathMin(axis.min, pick(axis.dataMin, axis.min)) <= 0) { // #978
				error(10, 1); // Can't plot negative values on log axis
			}
			axis.min = correctFloat(log2lin(axis.min)); // correctFloat cures #934
			axis.max = correctFloat(log2lin(axis.max));
		}

		// handle zoomed range
		if (axis.range && defined(axis.max)) {
			axis.userMin = axis.min = mathMax(axis.min, axis.max - axis.range); // #618
			axis.userMax = axis.max;

			axis.range = null;  // don't use it when running setExtremes
		}

		// Hook for adjusting this.min and this.max. Used by bubble series.
		if (axis.beforePadding) {
			axis.beforePadding();
		}

		// adjust min and max for the minimum range
		axis.adjustForMinRange();

		// Pad the values to get clear of the chart's edges. To avoid tickInterval taking the padding
		// into account, we do this after computing tick interval (#1337).
		if (!categories && !axis.axisPointRange && !axis.usePercentage && !isLinked && defined(axis.min) && defined(axis.max)) {
			length = axis.max - axis.min;
			if (length) {
				if (!defined(options.min) && !defined(axis.userMin) && minPadding && (axis.dataMin < 0 || !axis.ignoreMinPadding)) {
					axis.min -= length * minPadding;
				}
				if (!defined(options.max) && !defined(axis.userMax)  && maxPadding && (axis.dataMax > 0 || !axis.ignoreMaxPadding)) {
					axis.max += length * maxPadding;
				}
			}
		}

		// Stay within floor and ceiling
		if (isNumber(options.floor)) {
			axis.min = mathMax(axis.min, options.floor);
		}
		if (isNumber(options.ceiling)) {
			axis.max = mathMin(axis.max, options.ceiling);
		}

		// get tickInterval
		if (axis.min === axis.max || axis.min === undefined || axis.max === undefined) {
			axis.tickInterval = 1;
		} else if (isLinked && !tickIntervalOption &&
				tickPixelIntervalOption === axis.linkedParent.options.tickPixelInterval) {
			axis.tickInterval = axis.linkedParent.tickInterval;
		} else {
			axis.tickInterval = pick(
				tickIntervalOption,
				this.tickAmount ? ((axis.max - axis.min) / mathMax(this.tickAmount - 1, 1)) : undefined,
				categories ? // for categoried axis, 1 is default, for linear axis use tickPix
					1 :
					// don't let it be more than the data range
					(axis.max - axis.min) * tickPixelIntervalOption / mathMax(axis.len, tickPixelIntervalOption)
			);
		}

		// Now we're finished detecting min and max, crop and group series data. This
		// is in turn needed in order to find tick positions in ordinal axes.
		if (isXAxis && !secondPass) {
			each(axis.series, function (series) {
				series.processData(axis.min !== axis.oldMin || axis.max !== axis.oldMax);
			});
		}

		// set the translation factor used in translate function
		axis.setAxisTranslation(true);

		// hook for ordinal axes and radial axes
		if (axis.beforeSetTickPositions) {
			axis.beforeSetTickPositions();
		}

		// hook for extensions, used in Highstock ordinal axes
		if (axis.postProcessTickInterval) {
			axis.tickInterval = axis.postProcessTickInterval(axis.tickInterval);
		}

		// In column-like charts, don't cramp in more ticks than there are points (#1943)
		if (axis.pointRange) {
			axis.tickInterval = mathMax(axis.pointRange, axis.tickInterval);
		}

		// Before normalizing the tick interval, handle minimum tick interval. This applies only if tickInterval is not defined.
		minTickInterval = pick(options.minTickInterval, axis.isDatetimeAxis && axis.closestPointRange);
		if (!tickIntervalOption && axis.tickInterval < minTickInterval) {
			axis.tickInterval = minTickInterval;
		}

		// for linear axes, get magnitude and normalize the interval
		if (!isDatetimeAxis && !isLog) { // linear
			if (!tickIntervalOption) {
				axis.tickInterval = normalizeTickInterval(
					axis.tickInterval, 
					null, 
					getMagnitude(axis.tickInterval), 
					// If the tick interval is between 0.5 and 5 and the axis max is in the order of
					// thousands, chances are we are dealing with years. Don't allow decimals. #3363.
					pick(options.allowDecimals, !(axis.tickInterval > 0.5 && axis.tickInterval < 5 && axis.max > 1000 && axis.max < 9999)),
					!!this.tickAmount
				);
			}
		}

		// Prevent ticks from getting so close that we can't draw the labels
		if (!this.tickAmount && this.len) { // Color axis with disabled legend has no length
			axis.tickInterval = axis.unsquish();
		}

		this.setTickPositions();
	},

	/**
	 * Now we have computed the normalized tickInterval, get the tick positions
	 */
	setTickPositions: function () {

		var options = this.options,
			tickPositions,
			tickPositionsOption = options.tickPositions,
			tickPositioner = options.tickPositioner,
			startOnTick = options.startOnTick,
			endOnTick = options.endOnTick,
			single;

		// Set the tickmarkOffset
		this.tickmarkOffset = (this.categories && options.tickmarkPlacement === 'between' && 
			this.tickInterval === 1) ? 0.5 : 0; // #3202


		// get minorTickInterval
		this.minorTickInterval = options.minorTickInterval === 'auto' && this.tickInterval ?
			this.tickInterval / 5 : options.minorTickInterval;

		// Find the tick positions
		this.tickPositions = tickPositions = options.tickPositions && options.tickPositions.slice(); // Work on a copy (#1565)
		if (!tickPositions) {

			if (this.isDatetimeAxis) {
				tickPositions = this.getTimeTicks(
					this.normalizeTimeTickInterval(this.tickInterval, options.units),
					this.min,
					this.max,
					options.startOfWeek,
					this.ordinalPositions,
					this.closestPointRange,
					true
				);
			} else if (this.isLog) {
				tickPositions = this.getLogTickPositions(this.tickInterval, this.min, this.max);
			} else {
				tickPositions = this.getLinearTickPositions(this.tickInterval, this.min, this.max);
			}

			this.tickPositions = tickPositions;

			// Run the tick positioner callback, that allows modifying auto tick positions.
			if (tickPositioner) {
				tickPositioner = tickPositioner.apply(this, [this.min, this.max]);
				if (tickPositioner) {
					this.tickPositions = tickPositions = tickPositioner;
				}
			}

		}

		if (!this.isLinked) {

			// reset min/max or remove extremes based on start/end on tick
			this.trimTicks(tickPositions, startOnTick, endOnTick);

			// When there is only one point, or all points have the same value on this axis, then min
			// and max are equal and tickPositions.length is 0 or 1. In this case, add some padding
			// in order to center the point, but leave it with one tick. #1337.
			if (this.min === this.max && defined(this.min) && !this.tickAmount) {
				// Substract half a unit (#2619, #2846, #2515, #3390)
				single = true;
				this.min -= 0.5;
				this.max += 0.5;
			}
			this.single = single;

			if (!tickPositionsOption && !tickPositioner) {
				this.adjustTickAmount();
			}
		}
	},

	/**
	 * Handle startOnTick and endOnTick by either adapting to padding min/max or rounded min/max
	 */
	trimTicks: function (tickPositions, startOnTick, endOnTick) {
		var roundedMin = tickPositions[0],
			roundedMax = tickPositions[tickPositions.length - 1],
			minPointOffset = this.minPointOffset || 0;
			
		if (startOnTick) {
			this.min = roundedMin;
		} else if (this.min - minPointOffset > roundedMin) {
			tickPositions.shift();
		}

		if (endOnTick) {
			this.max = roundedMax;
		} else if (this.max + minPointOffset < roundedMax) {
			tickPositions.pop();
		}

		// If no tick are left, set one tick in the middle (#3195) 
		if (tickPositions.length === 0 && defined(roundedMin)) {
			tickPositions.push((roundedMax + roundedMin) / 2);
		}		
	},

	/**
	 * Set the max ticks of either the x and y axis collection
	 */
	getTickAmount: function () {
		var others = {}, // Whether there is another axis to pair with this one
			hasOther,
			options = this.options,
			tickAmount = options.tickAmount,
			tickPixelInterval = options.tickPixelInterval;

		if (!defined(options.tickInterval) && this.len < tickPixelInterval && !this.isRadial &&
				!this.isLog && options.startOnTick && options.endOnTick) {
			tickAmount = 2;
		}

		if (!tickAmount && this.chart.options.chart.alignTicks !== false && options.alignTicks !== false) {
			// Check if there are multiple axes in the same pane
			each(this.chart[this.coll], function (axis) {
				var options = axis.options,
					horiz = axis.horiz,
					key = [horiz ? options.left : options.top, horiz ? options.width : options.height, options.pane].join(',');
				
				if (others[key]) {
					hasOther = true;
				} else {
					others[key] = 1;
				}
			});

			if (hasOther) {
				// Add 1 because 4 tick intervals require 5 ticks (including first and last)
				tickAmount = mathCeil(this.len / tickPixelInterval) + 1;
			}
		}

		// For tick amounts of 2 and 3, compute five ticks and remove the intermediate ones. This
		// prevents the axis from adding ticks that are too far away from the data extremes.
		if (tickAmount < 4) {
			this.finalTickAmt = tickAmount;
			tickAmount = 5;
		}
		
		this.tickAmount = tickAmount;
	},

	/**
	 * When using multiple axes, adjust the number of ticks to match the highest
	 * number of ticks in that group
	 */
	adjustTickAmount: function () {
		var tickInterval = this.tickInterval,
			tickPositions = this.tickPositions,
			tickAmount = this.tickAmount,
			finalTickAmt = this.finalTickAmt,
			currentTickAmount = tickPositions && tickPositions.length,
			i,
			len;

		if (currentTickAmount < tickAmount) { // TODO: Check #3411
			while (tickPositions.length < tickAmount) {
				tickPositions.push(correctFloat(
					tickPositions[tickPositions.length - 1] + tickInterval
				));
			}
			this.transA *= (currentTickAmount - 1) / (tickAmount - 1);
			this.max = tickPositions[tickPositions.length - 1];

		// We have too many ticks, run second pass to try to reduce ticks
		} else if (currentTickAmount > tickAmount) {
			this.tickInterval *= 2;
			this.setTickPositions();
		}

		// The finalTickAmt property is set in getTickAmount
		if (defined(finalTickAmt)) {
			i = len = tickPositions.length;
			while (i--) {
				if (
					(finalTickAmt === 3 && i % 2 === 1) || // Remove every other tick
					(finalTickAmt <= 2 && i > 0 && i < len - 1) // Remove all but first and last
				) {
					tickPositions.splice(i, 1);
				}	
			}
			this.finalTickAmt = UNDEFINED;
		}
	},

	/**
	 * Set the scale based on data min and max, user set min and max or options
	 *
	 */
	setScale: function () {
		var axis = this,
			stacks = axis.stacks,
			type,
			i,
			isDirtyData,
			isDirtyAxisLength;

		axis.oldMin = axis.min;
		axis.oldMax = axis.max;
		axis.oldAxisLength = axis.len;

		// set the new axisLength
		axis.setAxisSize();
		//axisLength = horiz ? axisWidth : axisHeight;
		isDirtyAxisLength = axis.len !== axis.oldAxisLength;

		// is there new data?
		each(axis.series, function (series) {
			if (series.isDirtyData || series.isDirty ||
					series.xAxis.isDirty) { // when x axis is dirty, we need new data extremes for y as well
				isDirtyData = true;
			}
		});

		// do we really need to go through all this?
		if (isDirtyAxisLength || isDirtyData || axis.isLinked || axis.forceRedraw ||
			axis.userMin !== axis.oldUserMin || axis.userMax !== axis.oldUserMax) {

			// reset stacks
			if (!axis.isXAxis) {
				for (type in stacks) {
					for (i in stacks[type]) {
						stacks[type][i].total = null;
						stacks[type][i].cum = 0;
					}
				}
			}

			axis.forceRedraw = false;

			// get data extremes if needed
			axis.getSeriesExtremes();

			// get fixed positions based on tickInterval
			axis.setTickInterval();

			// record old values to decide whether a rescale is necessary later on (#540)
			axis.oldUserMin = axis.userMin;
			axis.oldUserMax = axis.userMax;

			// Mark as dirty if it is not already set to dirty and extremes have changed. #595.
			if (!axis.isDirty) {
				axis.isDirty = isDirtyAxisLength || axis.min !== axis.oldMin || axis.max !== axis.oldMax;
			}
		} else if (!axis.isXAxis) {
			if (axis.oldStacks) {
				stacks = axis.stacks = axis.oldStacks;
			}

			// reset stacks
			for (type in stacks) {
				for (i in stacks[type]) {
					stacks[type][i].cum = stacks[type][i].total;
				}
			}
		}
	},

	/**
	 * Set the extremes and optionally redraw
	 * @param {Number} newMin
	 * @param {Number} newMax
	 * @param {Boolean} redraw
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 * @param {Object} eventArguments
	 *
	 */
	setExtremes: function (newMin, newMax, redraw, animation, eventArguments) {
		var axis = this,
			chart = axis.chart;

		redraw = pick(redraw, true); // defaults to true

		each(axis.series, function (serie) {
			delete serie.kdTree;
		});

		// Extend the arguments with min and max
		eventArguments = extend(eventArguments, {
			min: newMin,
			max: newMax
		});

		// Fire the event
		fireEvent(axis, 'setExtremes', eventArguments, function () { // the default event handler

			axis.userMin = newMin;
			axis.userMax = newMax;
			axis.eventArgs = eventArguments;

			// Mark for running afterSetExtremes
			axis.isDirtyExtremes = true;

			// redraw
			if (redraw) {
				chart.redraw(animation);
			}
		});
	},

	/**
	 * Overridable method for zooming chart. Pulled out in a separate method to allow overriding
	 * in stock charts.
	 */
	zoom: function (newMin, newMax) {
		var dataMin = this.dataMin,
			dataMax = this.dataMax,
			options = this.options;

		// Prevent pinch zooming out of range. Check for defined is for #1946. #1734.
		if (!this.allowZoomOutside) {
			if (defined(dataMin) && newMin <= mathMin(dataMin, pick(options.min, dataMin))) {
				newMin = UNDEFINED;
			}
			if (defined(dataMax) && newMax >= mathMax(dataMax, pick(options.max, dataMax))) {
				newMax = UNDEFINED;
			}
		}

		// In full view, displaying the reset zoom button is not required
		this.displayBtn = newMin !== UNDEFINED || newMax !== UNDEFINED;

		// Do it
		this.setExtremes(
			newMin,
			newMax,
			false,
			UNDEFINED,
			{ trigger: 'zoom' }
		);
		return true;
	},

	/**
	 * Update the axis metrics
	 */
	setAxisSize: function () {
		var chart = this.chart,
			options = this.options,
			offsetLeft = options.offsetLeft || 0,
			offsetRight = options.offsetRight || 0,
			horiz = this.horiz,
			width = pick(options.width, chart.plotWidth - offsetLeft + offsetRight),
			height = pick(options.height, chart.plotHeight),
			top = pick(options.top, chart.plotTop),
			left = pick(options.left, chart.plotLeft + offsetLeft),
			percentRegex = /%$/;

		// Check for percentage based input values
		if (percentRegex.test(height)) {
			height = parseFloat(height) / 100 * chart.plotHeight;
		}
		if (percentRegex.test(top)) {
			top = parseFloat(top) / 100 * chart.plotHeight + chart.plotTop;
		}

		// Expose basic values to use in Series object and navigator
		this.left = left;
		this.top = top;
		this.width = width;
		this.height = height;
		this.bottom = chart.chartHeight - height - top;
		this.right = chart.chartWidth - width - left;

		// Direction agnostic properties
		this.len = mathMax(horiz ? width : height, 0); // mathMax fixes #905
		this.pos = horiz ? left : top; // distance from SVG origin
	},

	/**
	 * Get the actual axis extremes
	 */
	getExtremes: function () {
		var axis = this,
			isLog = axis.isLog;

		return {
			min: isLog ? correctFloat(lin2log(axis.min)) : axis.min,
			max: isLog ? correctFloat(lin2log(axis.max)) : axis.max,
			dataMin: axis.dataMin,
			dataMax: axis.dataMax,
			userMin: axis.userMin,
			userMax: axis.userMax
		};
	},

	/**
	 * Get the zero plane either based on zero or on the min or max value.
	 * Used in bar and area plots
	 */
	getThreshold: function (threshold) {
		var axis = this,
			isLog = axis.isLog;

		var realMin = isLog ? lin2log(axis.min) : axis.min,
			realMax = isLog ? lin2log(axis.max) : axis.max;

		if (realMin > threshold || threshold === null) {
			threshold = realMin;
		} else if (realMax < threshold) {
			threshold = realMax;
		}

		return axis.translate(threshold, 0, 1, 0, 1);
	},

	/**
	 * Compute auto alignment for the axis label based on which side the axis is on
	 * and the given rotation for the label
	 */
	autoLabelAlign: function (rotation) {
		var ret,
			angle = (pick(rotation, 0) - (this.side * 90) + 720) % 360;

		if (angle > 15 && angle < 165) {
			ret = 'right';
		} else if (angle > 195 && angle < 345) {
			ret = 'left';
		} else {
			ret = 'center';
		}
		return ret;
	},

	/**
	 * Prevent the ticks from getting so close we can't draw the labels. On a horizontal
	 * axis, this is handled by rotating the labels, removing ticks and adding ellipsis. 
	 * On a vertical axis remove ticks and add ellipsis.
	 */
	unsquish: function () {
		var chart = this.chart,
			ticks = this.ticks,
			labelOptions = this.options.labels,
			horiz = this.horiz,
			tickInterval = this.tickInterval,
			newTickInterval = tickInterval,
			slotSize = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / tickInterval),
			rotation,
			rotationOption = labelOptions.rotation,
			labelMetrics = chart.renderer.fontMetrics(labelOptions.style.fontSize, ticks[0] && ticks[0].label),
			step,
			bestScore = Number.MAX_VALUE,
			autoRotation,
			// Return the multiple of tickInterval that is needed to avoid collision
			getStep = function (spaceNeeded) {
				var step = spaceNeeded / (slotSize || 1);
				step = step > 1 ? mathCeil(step) : 1;
				return step * tickInterval;
			};
		
		if (horiz) {
			autoRotation = defined(rotationOption) ? 
				[rotationOption] :
				slotSize < pick(labelOptions.autoRotationLimit, 80) && !labelOptions.staggerLines && !labelOptions.step && labelOptions.autoRotation;

			if (autoRotation) {

				// Loop over the given autoRotation options, and determine which gives the best score. The 
				// best score is that with the lowest number of steps and a rotation closest to horizontal.
				each(autoRotation, function (rot) {
					var score;

					if (rot === rotationOption || (rot && rot >= -90 && rot <= 90)) { // #3891
					
						step = getStep(mathAbs(labelMetrics.h / mathSin(deg2rad * rot)));

						score = step + mathAbs(rot / 360);

						if (score < bestScore) {
							bestScore = score;
							rotation = rot;
							newTickInterval = step;
						}
					}
				});
			}

		} else {
			newTickInterval = getStep(labelMetrics.h);
		}

		this.autoRotation = autoRotation;
		this.labelRotation = rotation;

		return newTickInterval;
	},

	renderUnsquish: function () {
		var chart = this.chart,
			renderer = chart.renderer,
			tickPositions = this.tickPositions,
			ticks = this.ticks,
			labelOptions = this.options.labels,
			horiz = this.horiz,
			margin = chart.margin,
			slotWidth = this.slotWidth = (horiz && !labelOptions.step && !labelOptions.rotation &&
				((this.staggerLines || 1) * chart.plotWidth) / tickPositions.length) ||
				(!horiz && ((margin[3] && (margin[3] - chart.spacing[3])) || chart.chartWidth * 0.33)), // #1580, #1931,
			innerWidth = mathMax(1, mathRound(slotWidth - 2 * (labelOptions.padding || 5))),
			attr = {},
			labelMetrics = renderer.fontMetrics(labelOptions.style.fontSize, ticks[0] && ticks[0].label),
			css,
			labelLength = 0,
			label,
			i,
			pos;

		// Set rotation option unless it is "auto", like in gauges
		if (!isString(labelOptions.rotation)) {
			attr.rotation = labelOptions.rotation;
		}
		
		// Handle auto rotation on horizontal axis
		if (this.autoRotation) {

			// Get the longest label length
			each(tickPositions, function (tick) {
				tick = ticks[tick];
				if (tick && tick.labelLength > labelLength) {
					labelLength = tick.labelLength;
				}
			});
			
			// Apply rotation only if the label is too wide for the slot, and
			// the label is wider than its height.
			if (labelLength > innerWidth && labelLength > labelMetrics.h) {
				attr.rotation = this.labelRotation;
			} else {
				this.labelRotation = 0;
			}

		// Handle word-wrap or ellipsis on vertical axis
		} else if (slotWidth) {
			// For word-wrap or ellipsis
			css = { width: innerWidth + PX, textOverflow: 'clip' };

			// On vertical axis, only allow word wrap if there is room for more lines.
			i = tickPositions.length;
			while (!horiz && i--) {
				pos = tickPositions[i];
				label = ticks[pos].label;
				if (label) {
					// Reset ellipsis in order to get the correct bounding box (#4070)
					if (label.styles.textOverflow === 'ellipsis') {
						label.css({ textOverflow: 'clip' });
					}
					if (label.getBBox().height > this.len / tickPositions.length - (labelMetrics.h - labelMetrics.f)) {
						label.specCss = { textOverflow: 'ellipsis' };
					}
				}
			}
		}


		// Add ellipsis if the label length is significantly longer than ideal
		if (attr.rotation) {
			css = { 
				width: (labelLength > chart.chartHeight * 0.5 ? chart.chartHeight * 0.33 : chart.chartHeight) + PX,
				textOverflow: 'ellipsis'
			};
		}

		// Set the explicit or automatic label alignment
		this.labelAlign = attr.align = labelOptions.align || this.autoLabelAlign(this.labelRotation);

		// Apply general and specific CSS
		each(tickPositions, function (pos) {
			var tick = ticks[pos],
				label = tick && tick.label;
			if (label) {
				if (css) {
					label.css(merge(css, label.specCss));
				}
				delete label.specCss;
				label.attr(attr);
				tick.rotation = attr.rotation;
			}
		});

		// TODO: Why not part of getLabelPosition?
		this.tickRotCorr = renderer.rotCorr(labelMetrics.b, this.labelRotation || 0, this.side === 2);
	},

	/**
	 * Render the tick labels to a preliminary position to get their sizes
	 */
	getOffset: function () {
		var axis = this,
			chart = axis.chart,
			renderer = chart.renderer,
			options = axis.options,
			tickPositions = axis.tickPositions,
			ticks = axis.ticks,
			horiz = axis.horiz,
			side = axis.side,
			invertedSide = chart.inverted ? [1, 0, 3, 2][side] : side,
			hasData,
			showAxis,
			titleOffset = 0,
			titleOffsetOption,
			titleMargin = 0,
			axisTitleOptions = options.title,
			labelOptions = options.labels,
			labelOffset = 0, // reset
			labelOffsetPadded,
			axisOffset = chart.axisOffset,
			clipOffset = chart.clipOffset,
			directionFactor = [-1, 1, 1, -1][side],
			n,
			lineHeightCorrection;

		// For reuse in Axis.render
		axis.hasData = hasData = (axis.hasVisibleSeries || (defined(axis.min) && defined(axis.max) && !!tickPositions));
		axis.showAxis = showAxis = hasData || pick(options.showEmpty, true);

		// Set/reset staggerLines
		axis.staggerLines = axis.horiz && labelOptions.staggerLines;

		// Create the axisGroup and gridGroup elements on first iteration
		if (!axis.axisGroup) {
			axis.gridGroup = renderer.g('grid')
				.attr({ zIndex: options.gridZIndex || 1 })
				.add();
			axis.axisGroup = renderer.g('axis')
				.attr({ zIndex: options.zIndex || 2 })
				.add();
			axis.labelGroup = renderer.g('axis-labels')
				.attr({ zIndex: labelOptions.zIndex || 7 })
				.addClass(PREFIX + axis.coll.toLowerCase() + '-labels')
				.add();
		}

		if (hasData || axis.isLinked) {
			
			// Generate ticks
			each(tickPositions, function (pos) {
				if (!ticks[pos]) {
					ticks[pos] = new Tick(axis, pos);
				} else {
					ticks[pos].addLabel(); // update labels depending on tick interval
				}
			});

			axis.renderUnsquish();

			each(tickPositions, function (pos) {
				// left side must be align: right and right side must have align: left for labels
				if (side === 0 || side === 2 || { 1: 'left', 3: 'right' }[side] === axis.labelAlign) {

					// get the highest offset
					labelOffset = mathMax(
						ticks[pos].getLabelSize(),
						labelOffset
					);
				}
			});

			if (axis.staggerLines) {
				labelOffset *= axis.staggerLines;
				axis.labelOffset = labelOffset;
			}


		} else { // doesn't have data
			for (n in ticks) {
				ticks[n].destroy();
				delete ticks[n];
			}
		}

		if (axisTitleOptions && axisTitleOptions.text && axisTitleOptions.enabled !== false) {
			if (!axis.axisTitle) {
				axis.axisTitle = renderer.text(
					axisTitleOptions.text,
					0,
					0,
					axisTitleOptions.useHTML
				)
				.attr({
					zIndex: 7,
					rotation: axisTitleOptions.rotation || 0,
					align:
						axisTitleOptions.textAlign ||
						{ low: 'left', middle: 'center', high: 'right' }[axisTitleOptions.align]
				})
				.addClass(PREFIX + this.coll.toLowerCase() + '-title')
				.css(axisTitleOptions.style)
				.add(axis.axisGroup);
				axis.axisTitle.isNew = true;
			}

			if (showAxis) {
				titleOffset = axis.axisTitle.getBBox()[horiz ? 'height' : 'width'];
				titleOffsetOption = axisTitleOptions.offset;
				titleMargin = defined(titleOffsetOption) ? 0 : pick(axisTitleOptions.margin, horiz ? 5 : 10);
			}

			// hide or show the title depending on whether showEmpty is set
			axis.axisTitle[showAxis ? 'show' : 'hide']();
		}

		// handle automatic or user set offset
		axis.offset = directionFactor * pick(options.offset, axisOffset[side]);

		axis.tickRotCorr = axis.tickRotCorr || { x: 0, y: 0 }; // polar
		lineHeightCorrection = side === 2 ? axis.tickRotCorr.y : 0;
		labelOffsetPadded = labelOffset + titleMargin +
			(labelOffset && (directionFactor * (horiz ? pick(labelOptions.y, axis.tickRotCorr.y + 8) : labelOptions.x) - lineHeightCorrection));
		axis.axisTitleMargin = pick(titleOffsetOption, labelOffsetPadded);

		axisOffset[side] = mathMax(
			axisOffset[side],
			axis.axisTitleMargin + titleOffset + directionFactor * axis.offset,
			labelOffsetPadded // #3027
		);
		clipOffset[invertedSide] = mathMax(clipOffset[invertedSide], mathFloor(options.lineWidth / 2) * 2);
	},

	/**
	 * Get the path for the axis line
	 */
	getLinePath: function (lineWidth) {
		var chart = this.chart,
			opposite = this.opposite,
			offset = this.offset,
			horiz = this.horiz,
			lineLeft = this.left + (opposite ? this.width : 0) + offset,
			lineTop = chart.chartHeight - this.bottom - (opposite ? this.height : 0) + offset;

		if (opposite) {
			lineWidth *= -1; // crispify the other way - #1480, #1687
		}

		return chart.renderer.crispLine([
				M,
				horiz ?
					this.left :
					lineLeft,
				horiz ?
					lineTop :
					this.top,
				L,
				horiz ?
					chart.chartWidth - this.right :
					lineLeft,
				horiz ?
					lineTop :
					chart.chartHeight - this.bottom
			], lineWidth);
	},

	/**
	 * Position the title
	 */
	getTitlePosition: function () {
		// compute anchor points for each of the title align options
		var horiz = this.horiz,
			axisLeft = this.left,
			axisTop = this.top,
			axisLength = this.len,
			axisTitleOptions = this.options.title,
			margin = horiz ? axisLeft : axisTop,
			opposite = this.opposite,
			offset = this.offset,
			fontSize = pInt(axisTitleOptions.style.fontSize || 12),

			// the position in the length direction of the axis
			alongAxis = {
				low: margin + (horiz ? 0 : axisLength),
				middle: margin + axisLength / 2,
				high: margin + (horiz ? axisLength : 0)
			}[axisTitleOptions.align],

			// the position in the perpendicular direction of the axis
			offAxis = (horiz ? axisTop + this.height : axisLeft) +
				(horiz ? 1 : -1) * // horizontal axis reverses the margin
				(opposite ? -1 : 1) * // so does opposite axes
				this.axisTitleMargin +
				(this.side === 2 ? fontSize : 0);

		return {
			x: horiz ?
				alongAxis :
				offAxis + (opposite ? this.width : 0) + offset +
					(axisTitleOptions.x || 0), // x
			y: horiz ?
				offAxis - (opposite ? this.height : 0) + offset :
				alongAxis + (axisTitleOptions.y || 0) // y
		};
	},

	/**
	 * Render the axis
	 */
	render: function () {
		var axis = this,
			chart = axis.chart,
			renderer = chart.renderer,
			options = axis.options,
			isLog = axis.isLog,
			isLinked = axis.isLinked,
			tickPositions = axis.tickPositions,
			axisTitle = axis.axisTitle,			
			ticks = axis.ticks,
			minorTicks = axis.minorTicks,
			alternateBands = axis.alternateBands,
			stackLabelOptions = options.stackLabels,
			alternateGridColor = options.alternateGridColor,
			tickmarkOffset = axis.tickmarkOffset,
			lineWidth = options.lineWidth,
			linePath,
			hasRendered = chart.hasRendered,
			slideInTicks = hasRendered && defined(axis.oldMin) && !isNaN(axis.oldMin),
			hasData = axis.hasData,
			showAxis = axis.showAxis,
			from,
			to;

		// Reset
		axis.labelEdge.length = 0;
		//axis.justifyToPlot = overflow === 'justify';
		axis.overlap = false;

		// Mark all elements inActive before we go over and mark the active ones
		each([ticks, minorTicks, alternateBands], function (coll) {
			var pos;
			for (pos in coll) {
				coll[pos].isActive = false;
			}
		});

		// If the series has data draw the ticks. Else only the line and title
		if (hasData || isLinked) {

			// minor ticks
			if (axis.minorTickInterval && !axis.categories) {
				each(axis.getMinorTickPositions(), function (pos) {
					if (!minorTicks[pos]) {
						minorTicks[pos] = new Tick(axis, pos, 'minor');
					}

					// render new ticks in old position
					if (slideInTicks && minorTicks[pos].isNew) {
						minorTicks[pos].render(null, true);
					}

					minorTicks[pos].render(null, false, 1);
				});
			}

			// Major ticks. Pull out the first item and render it last so that
			// we can get the position of the neighbour label. #808.
			if (tickPositions.length) { // #1300
				each(tickPositions, function (pos, i) {

					// linked axes need an extra check to find out if
					if (!isLinked || (pos >= axis.min && pos <= axis.max)) {

						if (!ticks[pos]) {
							ticks[pos] = new Tick(axis, pos);
						}

						// render new ticks in old position
						if (slideInTicks && ticks[pos].isNew) {
							ticks[pos].render(i, true, 0.1);
						}

						ticks[pos].render(i);
					}

				});
				// In a categorized axis, the tick marks are displayed between labels. So
				// we need to add a tick mark and grid line at the left edge of the X axis.
				if (tickmarkOffset && (axis.min === 0 || axis.single)) {
					if (!ticks[-1]) {
						ticks[-1] = new Tick(axis, -1, null, true);
					}
					ticks[-1].render(-1);
				}

			}

			// alternate grid color
			if (alternateGridColor) {
				each(tickPositions, function (pos, i) {
					if (i % 2 === 0 && pos < axis.max) {
						if (!alternateBands[pos]) {
							alternateBands[pos] = new Highcharts.PlotLineOrBand(axis);
						}
						from = pos + tickmarkOffset; // #949
						to = tickPositions[i + 1] !== UNDEFINED ? tickPositions[i + 1] + tickmarkOffset : axis.max;
						alternateBands[pos].options = {
							from: isLog ? lin2log(from) : from,
							to: isLog ? lin2log(to) : to,
							color: alternateGridColor
						};
						alternateBands[pos].render();
						alternateBands[pos].isActive = true;
					}
				});
			}

			// custom plot lines and bands
			if (!axis._addedPlotLB) { // only first time
				each((options.plotLines || []).concat(options.plotBands || []), function (plotLineOptions) {
					axis.addPlotBandOrLine(plotLineOptions);
				});
				axis._addedPlotLB = true;
			}

		} // end if hasData

		// Remove inactive ticks
		each([ticks, minorTicks, alternateBands], function (coll) {
			var pos,
				i,
				forDestruction = [],
				delay = globalAnimation ? globalAnimation.duration || 500 : 0,
				destroyInactiveItems = function () {
					i = forDestruction.length;
					while (i--) {
						// When resizing rapidly, the same items may be destroyed in different timeouts,
						// or the may be reactivated
						if (coll[forDestruction[i]] && !coll[forDestruction[i]].isActive) {
							coll[forDestruction[i]].destroy();
							delete coll[forDestruction[i]];
						}
					}

				};

			for (pos in coll) {

				if (!coll[pos].isActive) {
					// Render to zero opacity
					coll[pos].render(pos, false, 0);
					coll[pos].isActive = false;
					forDestruction.push(pos);
				}
			}

			// When the objects are finished fading out, destroy them
			if (coll === alternateBands || !chart.hasRendered || !delay) {
				destroyInactiveItems();
			} else if (delay) {
				setTimeout(destroyInactiveItems, delay);
			}
		});

		// Static items. As the axis group is cleared on subsequent calls
		// to render, these items are added outside the group.
		// axis line
		if (lineWidth) {
			linePath = axis.getLinePath(lineWidth);
			if (!axis.axisLine) {
				axis.axisLine = renderer.path(linePath)
					.attr({
						stroke: options.lineColor,
						'stroke-width': lineWidth,
						zIndex: 7
					})
					.add(axis.axisGroup);
			} else {
				axis.axisLine.animate({ d: linePath });
			}

			// show or hide the line depending on options.showEmpty
			axis.axisLine[showAxis ? 'show' : 'hide']();
		}

		if (axisTitle && showAxis) {

			axisTitle[axisTitle.isNew ? 'attr' : 'animate'](
				axis.getTitlePosition()
			);
			axisTitle.isNew = false;
		}

		// Stacked totals:
		if (stackLabelOptions && stackLabelOptions.enabled) {
			axis.renderStackTotals();
		}
		// End stacked totals

		axis.isDirty = false;
	},

	/**
	 * Redraw the axis to reflect changes in the data or axis extremes
	 */
	redraw: function () {
		
		// render the axis
		this.render();

		// move plot lines and bands
		each(this.plotLinesAndBands, function (plotLine) {
			plotLine.render();
		});

		// mark associated series as dirty and ready for redraw
		each(this.series, function (series) {
			series.isDirty = true;
		});

	},

	/**
	 * Destroys an Axis instance.
	 */
	destroy: function (keepEvents) {
		var axis = this,
			stacks = axis.stacks,
			stackKey,
			plotLinesAndBands = axis.plotLinesAndBands,
			i;

		// Remove the events
		if (!keepEvents) {
			removeEvent(axis);
		}

		// Destroy each stack total
		for (stackKey in stacks) {
			destroyObjectProperties(stacks[stackKey]);

			stacks[stackKey] = null;
		}

		// Destroy collections
		each([axis.ticks, axis.minorTicks, axis.alternateBands], function (coll) {
			destroyObjectProperties(coll);
		});
		i = plotLinesAndBands.length;
		while (i--) { // #1975
			plotLinesAndBands[i].destroy();
		}

		// Destroy local variables
		each(['stackTotalGroup', 'axisLine', 'axisTitle', 'axisGroup', 'cross', 'gridGroup', 'labelGroup'], function (prop) {
			if (axis[prop]) {
				axis[prop] = axis[prop].destroy();
			}
		});

		// Destroy crosshair
		if (this.cross) {
			this.cross.destroy();
		}
	},

	/**
	 * Draw the crosshair
	 */
	drawCrosshair: function (e, point) { // docs: Missing docs for Axis.crosshair. Also for properties.

		var path,
			options = this.crosshair,
			animation = options.animation,
			pos,
			attribs,
			categorized;
		
		if (
			// Disabled in options
			!this.crosshair || 
			// Snap
			((defined(point) || !pick(this.crosshair.snap, true)) === false)
		) {
			this.hideCrosshair();
		
		} else {			

			// Get the path
			if (!pick(options.snap, true)) {
				pos = (this.horiz ? e.chartX - this.pos : this.len - e.chartY + this.pos);
			} else if (defined(point)) {
				/*jslint eqeq: true*/
				pos = this.isXAxis ? point.plotX : this.len - point.plotY; // #3834
				/*jslint eqeq: false*/
			}

			if (this.isRadial) {
				path = this.getPlotLinePath(this.isXAxis ? point.x : pick(point.stackY, point.y)) || null; // #3189
			} else {
				path = this.getPlotLinePath(null, null, null, null, pos) || null; // #3189
			}

			if (path === null) {
				this.hideCrosshair();
				return;
			}

			// Draw the cross
			if (this.cross) {
				this.cross
					.attr({ visibility: VISIBLE })[animation ? 'animate' : 'attr']({ d: path }, animation);
			} else {
				categorized = this.categories && !this.isRadial;
				attribs = {
					'stroke-width': options.width || (categorized ? this.transA : 1),
					stroke: options.color || (categorized ? 'rgba(155,200,255,0.2)' : '#C0C0C0'),
					zIndex: options.zIndex || 2
				};
				if (options.dashStyle) {
					attribs.dashstyle = options.dashStyle;
				}
				this.cross = this.chart.renderer.path(path).attr(attribs).add();
			}

		}

	},

	/**
	 *	Hide the crosshair.
	 */
	hideCrosshair: function () {
		if (this.cross) {
			this.cross.hide();
		}
	}
}; // end Axis

extend(Axis.prototype, AxisPlotLineOrBandExtension);

/**
 * Set the tick positions to a time unit that makes sense, for example
 * on the first of each month or on every Monday. Return an array
 * with the time positions. Used in datetime axes as well as for grouping
 * data on a datetime axis.
 *
 * @param {Object} normalizedInterval The interval in axis values (ms) and the count
 * @param {Number} min The minimum in axis values
 * @param {Number} max The maximum in axis values
 * @param {Number} startOfWeek
 */
Axis.prototype.getTimeTicks = function (normalizedInterval, min, max, startOfWeek) {
	var tickPositions = [],
		i,
		higherRanks = {},
		useUTC = defaultOptions.global.useUTC,
		minYear, // used in months and years as a basis for Date.UTC()
		minDate = new Date(min - getTZOffset(min)),
		interval = normalizedInterval.unitRange,
		count = normalizedInterval.count;

	if (defined(min)) { // #1300
		minDate[setMilliseconds](interval >= timeUnits.second ? 0 : // #3935
			count * mathFloor(minDate.getMilliseconds() / count)); // #3652, #3654

		if (interval >= timeUnits.second) { // second
			minDate[setSeconds](interval >= timeUnits.minute ? 0 : // #3935
				count * mathFloor(minDate.getSeconds() / count));
		}
	
		if (interval >= timeUnits.minute) { // minute
			minDate[setMinutes](interval >= timeUnits.hour ? 0 :
				count * mathFloor(minDate[getMinutes]() / count));
		}
	
		if (interval >= timeUnits.hour) { // hour
			minDate[setHours](interval >= timeUnits.day ? 0 :
				count * mathFloor(minDate[getHours]() / count));
		}
	
		if (interval >= timeUnits.day) { // day
			minDate[setDate](interval >= timeUnits.month ? 1 :
				count * mathFloor(minDate[getDate]() / count));
		}
	
		if (interval >= timeUnits.month) { // month
			minDate[setMonth](interval >= timeUnits.year ? 0 :
				count * mathFloor(minDate[getMonth]() / count));
			minYear = minDate[getFullYear]();
		}
	
		if (interval >= timeUnits.year) { // year
			minYear -= minYear % count;
			minDate[setFullYear](minYear);
		}
	
		// week is a special case that runs outside the hierarchy
		if (interval === timeUnits.week) {
			// get start of current week, independent of count
			minDate[setDate](minDate[getDate]() - minDate[getDay]() +
				pick(startOfWeek, 1));
		}
	
	
		// get tick positions
		i = 1;
		if (timezoneOffset || getTimezoneOffset) {
			minDate = minDate.getTime();
			minDate = new Date(minDate + getTZOffset(minDate));
		}
		minYear = minDate[getFullYear]();
		var time = minDate.getTime(),
			minMonth = minDate[getMonth](),
			minDateDate = minDate[getDate](),
			localTimezoneOffset = (timeUnits.day + 
					(useUTC ? getTZOffset(minDate) : minDate.getTimezoneOffset() * 60 * 1000)
				) % timeUnits.day; // #950, #3359
	
		// iterate and add tick positions at appropriate values
		while (time < max) {
			tickPositions.push(time);
	
			// if the interval is years, use Date.UTC to increase years
			if (interval === timeUnits.year) {
				time = makeTime(minYear + i * count, 0);
	
			// if the interval is months, use Date.UTC to increase months
			} else if (interval === timeUnits.month) {
				time = makeTime(minYear, minMonth + i * count);
	
			// if we're using global time, the interval is not fixed as it jumps
			// one hour at the DST crossover
			} else if (!useUTC && (interval === timeUnits.day || interval === timeUnits.week)) {
				time = makeTime(minYear, minMonth, minDateDate +
					i * count * (interval === timeUnits.day ? 1 : 7));
	
			// else, the interval is fixed and we use simple addition
			} else {
				time += interval * count;
			}
	
			i++;
		}
	
		// push the last time
		tickPositions.push(time);


		// mark new days if the time is dividible by day (#1649, #1760)
		each(grep(tickPositions, function (time) {
			return interval <= timeUnits.hour && time % timeUnits.day === localTimezoneOffset;
		}), function (time) {
			higherRanks[time] = 'day';
		});
	}


	// record information on the chosen unit - for dynamic label formatter
	tickPositions.info = extend(normalizedInterval, {
		higherRanks: higherRanks,
		totalRange: interval * count
	});

	return tickPositions;
};

/**
 * Get a normalized tick interval for dates. Returns a configuration object with
 * unit range (interval), count and name. Used to prepare data for getTimeTicks. 
 * Previously this logic was part of getTimeTicks, but as getTimeTicks now runs
 * of segments in stock charts, the normalizing logic was extracted in order to 
 * prevent it for running over again for each segment having the same interval. 
 * #662, #697.
 */
Axis.prototype.normalizeTimeTickInterval = function (tickInterval, unitsOption) {
	var units = unitsOption || [[
				'millisecond', // unit name
				[1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
			], [
				'second',
				[1, 2, 5, 10, 15, 30]
			], [
				'minute',
				[1, 2, 5, 10, 15, 30]
			], [
				'hour',
				[1, 2, 3, 4, 6, 8, 12]
			], [
				'day',
				[1, 2]
			], [
				'week',
				[1, 2]
			], [
				'month',
				[1, 2, 3, 4, 6]
			], [
				'year',
				null
			]],
		unit = units[units.length - 1], // default unit is years
		interval = timeUnits[unit[0]],
		multiples = unit[1],
		count,
		i;
		
	// loop through the units to find the one that best fits the tickInterval
	for (i = 0; i < units.length; i++) {
		unit = units[i];
		interval = timeUnits[unit[0]];
		multiples = unit[1];


		if (units[i + 1]) {
			// lessThan is in the middle between the highest multiple and the next unit.
			var lessThan = (interval * multiples[multiples.length - 1] +
						timeUnits[units[i + 1][0]]) / 2;

			// break and keep the current unit
			if (tickInterval <= lessThan) {
				break;
			}
		}
	}

	// prevent 2.5 years intervals, though 25, 250 etc. are allowed
	if (interval === timeUnits.year && tickInterval < 5 * interval) {
		multiples = [1, 2, 5];
	}

	// get the count
	count = normalizeTickInterval(
		tickInterval / interval, 
		multiples,
		unit[0] === 'year' ? mathMax(getMagnitude(tickInterval / interval), 1) : 1 // #1913, #2360
	);
	
	return {
		unitRange: interval,
		count: count,
		unitName: unit[0]
	};
};/**
 * Methods defined on the Axis prototype
 */

/**
 * Set the tick positions of a logarithmic axis
 */
Axis.prototype.getLogTickPositions = function (interval, min, max, minor) {
	var axis = this,
		options = axis.options,
		axisLength = axis.len,
		// Since we use this method for both major and minor ticks,
		// use a local variable and return the result
		positions = []; 
	
	// Reset
	if (!minor) {
		axis._minorAutoInterval = null;
	}
	
	// First case: All ticks fall on whole logarithms: 1, 10, 100 etc.
	if (interval >= 0.5) {
		interval = mathRound(interval);
		positions = axis.getLinearTickPositions(interval, min, max);
		
	// Second case: We need intermediary ticks. For example 
	// 1, 2, 4, 6, 8, 10, 20, 40 etc. 
	} else if (interval >= 0.08) {
		var roundedMin = mathFloor(min),
			intermediate,
			i,
			j,
			len,
			pos,
			lastPos,
			break2;
			
		if (interval > 0.3) {
			intermediate = [1, 2, 4];
		} else if (interval > 0.15) { // 0.2 equals five minor ticks per 1, 10, 100 etc
			intermediate = [1, 2, 4, 6, 8];
		} else { // 0.1 equals ten minor ticks per 1, 10, 100 etc
			intermediate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		}
		
		for (i = roundedMin; i < max + 1 && !break2; i++) {
			len = intermediate.length;
			for (j = 0; j < len && !break2; j++) {
				pos = log2lin(lin2log(i) * intermediate[j]);
				if (pos > min && (!minor || lastPos <= max) && lastPos !== UNDEFINED) { // #1670, lastPos is #3113
					positions.push(lastPos);
				}
				
				if (lastPos > max) {
					break2 = true;
				}
				lastPos = pos;
			}
		}
		
	// Third case: We are so deep in between whole logarithmic values that
	// we might as well handle the tick positions like a linear axis. For
	// example 1.01, 1.02, 1.03, 1.04.
	} else {
		var realMin = lin2log(min),
			realMax = lin2log(max),
			tickIntervalOption = options[minor ? 'minorTickInterval' : 'tickInterval'],
			filteredTickIntervalOption = tickIntervalOption === 'auto' ? null : tickIntervalOption,
			tickPixelIntervalOption = options.tickPixelInterval / (minor ? 5 : 1),
			totalPixelLength = minor ? axisLength / axis.tickPositions.length : axisLength;
		
		interval = pick(
			filteredTickIntervalOption,
			axis._minorAutoInterval,
			(realMax - realMin) * tickPixelIntervalOption / (totalPixelLength || 1)
		);
		
		interval = normalizeTickInterval(
			interval, 
			null, 
			getMagnitude(interval)
		);
		
		positions = map(axis.getLinearTickPositions(
			interval, 
			realMin,
			realMax	
		), log2lin);
		
		if (!minor) {
			axis._minorAutoInterval = interval / 5;
		}
	}
	
	// Set the axis-level tickInterval variable 
	if (!minor) {
		axis.tickInterval = interval;
	}
	return positions;
};/**
 * The tooltip object
 * @param {Object} chart The chart instance
 * @param {Object} options Tooltip options
 */
var Tooltip = Highcharts.Tooltip = function () {
	this.init.apply(this, arguments);
};

Tooltip.prototype = {

	init: function (chart, options) {

		var borderWidth = options.borderWidth,
			style = options.style,
			padding = pInt(style.padding);

		// Save the chart and options
		this.chart = chart;
		this.options = options;

		// Keep track of the current series
		//this.currentSeries = UNDEFINED;

		// List of crosshairs
		this.crosshairs = [];

		// Current values of x and y when animating
		this.now = { x: 0, y: 0 };

		// The tooltip is initially hidden
		this.isHidden = true;


		// create the label		
		this.label = chart.renderer.label('', 0, 0, options.shape || 'callout', null, null, options.useHTML, null, 'tooltip')
			.attr({
				padding: padding,
				fill: options.backgroundColor,
				'stroke-width': borderWidth,
				r: options.borderRadius,
				zIndex: 8
			})
			.css(style)
			.css({ padding: 0 }) // Remove it from VML, the padding is applied as an attribute instead (#1117)
			.add()
			.attr({ y: -9999 }); // #2301, #2657

		// When using canVG the shadow shows up as a gray circle
		// even if the tooltip is hidden.
		if (!useCanVG) {
			this.label.shadow(options.shadow);
		}

		// Public property for getting the shared state.
		this.shared = options.shared;
	},

	/**
	 * Destroy the tooltip and its elements.
	 */
	destroy: function () {
		// Destroy and clear local variables
		if (this.label) {
			this.label = this.label.destroy();
		}
		clearTimeout(this.hideTimer);
		clearTimeout(this.tooltipTimeout);
	},

	/**
	 * Provide a soft movement for the tooltip
	 *
	 * @param {Number} x
	 * @param {Number} y
	 * @private
	 */
	move: function (x, y, anchorX, anchorY) {
		var tooltip = this,
			now = tooltip.now,
			animate = tooltip.options.animation !== false && !tooltip.isHidden && 
				// When we get close to the target position, abort animation and land on the right place (#3056)
				(mathAbs(x - now.x) > 1 || mathAbs(y - now.y) > 1),
			skipAnchor = tooltip.followPointer || tooltip.len > 1;

		// Get intermediate values for animation
		extend(now, {
			x: animate ? (2 * now.x + x) / 3 : x,
			y: animate ? (now.y + y) / 2 : y,
			anchorX: skipAnchor ? UNDEFINED : animate ? (2 * now.anchorX + anchorX) / 3 : anchorX,
			anchorY: skipAnchor ? UNDEFINED : animate ? (now.anchorY + anchorY) / 2 : anchorY
		});

		// Move to the intermediate value
		tooltip.label.attr(now);

		
		// Run on next tick of the mouse tracker
		if (animate) {
		
			// Never allow two timeouts
			clearTimeout(this.tooltipTimeout);
			
			// Set the fixed interval ticking for the smooth tooltip
			this.tooltipTimeout = setTimeout(function () {
				// The interval function may still be running during destroy, so check that the chart is really there before calling.
				if (tooltip) {
					tooltip.move(x, y, anchorX, anchorY);
				}
			}, 32);
			
		}
	},

	/**
	 * Hide the tooltip
	 */
	hide: function (delay) {
		var tooltip = this,
			hoverPoints;
		
		clearTimeout(this.hideTimer); // disallow duplicate timers (#1728, #1766)
		if (!this.isHidden) {
			hoverPoints = this.chart.hoverPoints;

			this.hideTimer = setTimeout(function () {
				tooltip.label.fadeOut();
				tooltip.isHidden = true;
			}, pick(delay, this.options.hideDelay, 500));

			// hide previous hoverPoints and set new
			if (hoverPoints) {
				each(hoverPoints, function (point) {
					point.setState();
				});
			}

			this.chart.hoverPoints = null;
			this.chart.hoverSeries = null;
		}
	},
	
	/** 
	 * Extendable method to get the anchor position of the tooltip
	 * from a point or set of points
	 */
	getAnchor: function (points, mouseEvent) {
		var ret,
			chart = this.chart,
			inverted = chart.inverted,
			plotTop = chart.plotTop,
			plotLeft = chart.plotLeft,
			plotX = 0,
			plotY = 0,
			yAxis,
			xAxis;
		
		points = splat(points);
		
		// Pie uses a special tooltipPos
		ret = points[0].tooltipPos;
		
		// When tooltip follows mouse, relate the position to the mouse
		if (this.followPointer && mouseEvent) {
			if (mouseEvent.chartX === UNDEFINED) {
				mouseEvent = chart.pointer.normalize(mouseEvent);
			}
			ret = [
				mouseEvent.chartX - chart.plotLeft,
				mouseEvent.chartY - plotTop
			];
		}
		// When shared, use the average position
		if (!ret) {
			each(points, function (point) {
				yAxis = point.series.yAxis;
				xAxis = point.series.xAxis;
				plotX += point.plotX  + (!inverted && xAxis ? xAxis.left - plotLeft : 0); 
				plotY += (point.plotLow ? (point.plotLow + point.plotHigh) / 2 : point.plotY) +
					(!inverted && yAxis ? yAxis.top - plotTop : 0); // #1151
			});
			
			plotX /= points.length;
			plotY /= points.length;
			
			ret = [
				inverted ? chart.plotWidth - plotY : plotX,
				this.shared && !inverted && points.length > 1 && mouseEvent ? 
					mouseEvent.chartY - plotTop : // place shared tooltip next to the mouse (#424)
					inverted ? chart.plotHeight - plotX : plotY
			];
		}

		return map(ret, mathRound);
	},
	
	/**
	 * Place the tooltip in a chart without spilling over
	 * and not covering the point it self.
	 */
	getPosition: function (boxWidth, boxHeight, point) {
		
		var chart = this.chart,
			distance = this.distance,
			ret = {},
			h = point.h,
			swapped,
			first = ['y', chart.chartHeight, boxHeight, point.plotY + chart.plotTop],
			second = ['x', chart.chartWidth, boxWidth, point.plotX + chart.plotLeft],
			// The far side is right or bottom
			preferFarSide = pick(point.ttBelow, (chart.inverted && !point.negative) || (!chart.inverted && point.negative)),
			/**
			 * Handle the preferred dimension. When the preferred dimension is tooltip
			 * on top or bottom of the point, it will look for space there.
			 */
			firstDimension = function (dim, outerSize, innerSize, point) {
				var roomLeft = innerSize < point - distance,
					roomRight = point + distance + innerSize < outerSize,
					alignedLeft = point - distance - innerSize,
					alignedRight = point + distance;

				if (preferFarSide && roomRight) {
					ret[dim] = alignedRight;
				} else if (!preferFarSide && roomLeft) {
					ret[dim] = alignedLeft;
				} else if (roomLeft) {
					ret[dim] = alignedLeft - h < 0 ? alignedLeft : alignedLeft - h;
				} else if (roomRight) {
					ret[dim] = alignedRight + h + innerSize > outerSize ? alignedRight : alignedRight + h;
				} else {
					return false;
				}
			},
			/**
			 * Handle the secondary dimension. If the preferred dimension is tooltip
			 * on top or bottom of the point, the second dimension is to align the tooltip
			 * above the point, trying to align center but allowing left or right
			 * align within the chart box.
			 */
			secondDimension = function (dim, outerSize, innerSize, point) {
				// Too close to the edge, return false and swap dimensions
				if (point < distance || point > outerSize - distance) {
					return false;
				
				// Align left/top
				} else if (point < innerSize / 2) {
					ret[dim] = 1;
				// Align right/bottom
				} else if (point > outerSize - innerSize / 2) {
					ret[dim] = outerSize - innerSize - 2;
				// Align center
				} else {
					ret[dim] = point - innerSize / 2;
				}
			},
			/**
			 * Swap the dimensions 
			 */
			swap = function (count) {
				var temp = first;
				first = second;
				second = temp;
				swapped = count;
			},
			run = function () {
				if (firstDimension.apply(0, first) !== false) {
					if (secondDimension.apply(0, second) === false && !swapped) {
						swap(true);
						run();
					}
				} else if (!swapped) {
					swap(true);
					run();
				} else {
					ret.x = ret.y = 0;
				}
			};

		// Under these conditions, prefer the tooltip on the side of the point
		if (chart.inverted || this.len > 1) {
			swap();
		}
		run();

		return ret;
	
	},

	/**
	 * In case no user defined formatter is given, this will be used. Note that the context
	 * here is an object holding point, series, x, y etc.
	 */
	defaultFormatter: function (tooltip) {
		var items = this.points || splat(this),
			s;

		// build the header
		s = [tooltip.tooltipFooterHeaderFormatter(items[0])]; //#3397: abstraction to enable formatting of footer and header

		// build the values
		s = s.concat(tooltip.bodyFormatter(items));

		// footer
		s.push(tooltip.tooltipFooterHeaderFormatter(items[0], true)); //#3397: abstraction to enable formatting of footer and header

		return s.join('');
	},

	/**
	 * Refresh the tooltip's text and position.
	 * @param {Object} point
	 */
	refresh: function (point, mouseEvent) {
		var tooltip = this,
			chart = tooltip.chart,
			label = tooltip.label,
			options = tooltip.options,
			x,
			y,
			anchor,
			textConfig = {},
			text,
			pointConfig = [],
			formatter = options.formatter || tooltip.defaultFormatter,
			hoverPoints = chart.hoverPoints,
			borderColor,
			shared = tooltip.shared,
			currentSeries;
			
		clearTimeout(this.hideTimer);
		
		// get the reference point coordinates (pie charts use tooltipPos)
		tooltip.followPointer = splat(point)[0].series.tooltipOptions.followPointer;
		anchor = tooltip.getAnchor(point, mouseEvent);
		x = anchor[0];
		y = anchor[1];

		// shared tooltip, array is sent over
		if (shared && !(point.series && point.series.noSharedTooltip)) {
			
			// hide previous hoverPoints and set new
			
			chart.hoverPoints = point;
			if (hoverPoints) {
				each(hoverPoints, function (point) {
					point.setState();
				});
			}

			each(point, function (item) {
				item.setState(HOVER_STATE);

				pointConfig.push(item.getLabelConfig());
			});

			textConfig = {
				x: point[0].category,
				y: point[0].y
			};
			textConfig.points = pointConfig;
			this.len = pointConfig.length;
			point = point[0];

		// single point tooltip
		} else {
			textConfig = point.getLabelConfig();
		}
		text = formatter.call(textConfig, tooltip);

		// register the current series
		currentSeries = point.series;
		this.distance = pick(currentSeries.tooltipOptions.distance, 16);

		// update the inner HTML
		if (text === false) {
			this.hide();
		} else {

			// show it
			if (tooltip.isHidden) {
				stop(label);
				label.attr('opacity', 1).show();
			}

			// update text
			label.attr({
				text: text
			});

			// set the stroke color of the box
			borderColor = options.borderColor || point.color || currentSeries.color || '#606060';
			label.attr({
				stroke: borderColor
			});
			tooltip.updatePosition({ 
				plotX: x, 
				plotY: y, 
				negative: point.negative, 
				ttBelow: point.ttBelow, 
				h: (point.shapeArgs && point.shapeArgs.height) || 0
			});
		
			this.isHidden = false;
		}
		fireEvent(chart, 'tooltipRefresh', {
				text: text,
				x: x + chart.plotLeft,
				y: y + chart.plotTop,
				borderColor: borderColor
			});
	},
	
	/**
	 * Find the new position and perform the move
	 */
	updatePosition: function (point) {
		var chart = this.chart,
			label = this.label, 
			pos = (this.options.positioner || this.getPosition).call(
				this,
				label.width,
				label.height,
				point
			);

		// do the move
		this.move(
			mathRound(pos.x), 
			mathRound(pos.y), 
			point.plotX + chart.plotLeft, 
			point.plotY + chart.plotTop
		);
	},

	/** 
	 * Get the best X date format based on the closest point range on the axis.
	 */
	getXDateFormat: function (point, options, xAxis) {
		var xDateFormat,
			dateTimeLabelFormats = options.dateTimeLabelFormats,
			closestPointRange = xAxis && xAxis.closestPointRange,
			n,
			blank = '01-01 00:00:00.000',
			strpos = {
				millisecond: 15,
				second: 12,
				minute: 9,
				hour: 6,
				day: 3
			},
			date,
			lastN;

		if (closestPointRange) {
			date = dateFormat('%m-%d %H:%M:%S.%L', point.x);
			for (n in timeUnits) {

				// If the range is exactly one week and we're looking at a Sunday/Monday, go for the week format
				if (closestPointRange === timeUnits.week && +dateFormat('%w', point.x) === xAxis.options.startOfWeek && 
						date.substr(6) === blank.substr(6)) {
					n = 'week';
					break;

				// The first format that is too great for the range
				} else if (timeUnits[n] > closestPointRange) {
					n = lastN;
					break;
				
				// If the point is placed every day at 23:59, we need to show
				// the minutes as well. #2637.
				} else if (strpos[n] && date.substr(strpos[n]) !== blank.substr(strpos[n])) {
					break;
				}

				// Weeks are outside the hierarchy, only apply them on Mondays/Sundays like in the first condition
				if (n !== 'week') {
					lastN = n;
				}
			}
			
			if (n) {
				xDateFormat = dateTimeLabelFormats[n];
			}
		} else {
			xDateFormat = dateTimeLabelFormats.day;
		}

		return xDateFormat || dateTimeLabelFormats.year; // #2546, 2581
	},

	/**
	 * Format the footer/header of the tooltip
	 * #3397: abstraction to enable formatting of footer and header
	 */
	tooltipFooterHeaderFormatter: function (point, isFooter) {
		var footOrHead = isFooter ? 'footer' : 'header',
			series = point.series,
			tooltipOptions = series.tooltipOptions,
			xDateFormat = tooltipOptions.xDateFormat,
			xAxis = series.xAxis,
			isDateTime = xAxis && xAxis.options.type === 'datetime' && isNumber(point.key),
			formatString = tooltipOptions[footOrHead+'Format'];

		// Guess the best date format based on the closest point distance (#568, #3418)
		if (isDateTime && !xDateFormat) {
			xDateFormat = this.getXDateFormat(point, tooltipOptions, xAxis);
		}

		// Insert the footer date format if any
		if (isDateTime && xDateFormat) {
			formatString = formatString.replace('{point.key}', '{point.key:' + xDateFormat + '}');
		}

		return format(formatString, {
			point: point,
			series: series
		});
	},

	/**
     * Build the body (lines) of the tooltip by iterating over the items and returning one entry for each item,
     * abstracting this functionality allows to easily overwrite and extend it. 
	 */
	bodyFormatter: function (items) {
        return map(items, function (item) {
            var tooltipOptions = item.series.tooltipOptions;
            return (tooltipOptions.pointFormatter || item.point.tooltipFormatter).call(item.point, tooltipOptions.pointFormat);
        });
    }
    
};

var hoverChartIndex;

// Global flag for touch support
hasTouch = doc.documentElement.ontouchstart !== UNDEFINED;

/**
 * The mouse tracker object. All methods starting with "on" are primary DOM event handlers. 
 * Subsequent methods should be named differently from what they are doing.
 * @param {Object} chart The Chart instance
 * @param {Object} options The root options object
 */
var Pointer = Highcharts.Pointer = function (chart, options) {
	this.init(chart, options);
};

Pointer.prototype = {
	/**
	 * Initialize Pointer
	 */
	init: function (chart, options) {
		
		var chartOptions = options.chart,
			chartEvents = chartOptions.events,
			zoomType = useCanVG ? '' : chartOptions.zoomType,
			inverted = chart.inverted,
			zoomX,
			zoomY;

		// Store references
		this.options = options;
		this.chart = chart;
		
		// Zoom status
		this.zoomX = zoomX = /x/.test(zoomType);
		this.zoomY = zoomY = /y/.test(zoomType);
		this.zoomHor = (zoomX && !inverted) || (zoomY && inverted);
		this.zoomVert = (zoomY && !inverted) || (zoomX && inverted);
		this.hasZoom = zoomX || zoomY;

		// Do we need to handle click on a touch device?
		this.runChartClick = chartEvents && !!chartEvents.click;

		this.pinchDown = [];
		this.lastValidTouch = {};

		if (Highcharts.Tooltip && options.tooltip.enabled) {
			chart.tooltip = new Tooltip(chart, options.tooltip);
			this.followTouchMove = pick(options.tooltip.followTouchMove, true);
		}

		this.setDOMEvents();
	}, 

	/**
	 * Add crossbrowser support for chartX and chartY
	 * @param {Object} e The event object in standard browsers
	 */
	normalize: function (e, chartPosition) {
		var chartX,
			chartY,
			ePos;

		// common IE normalizing
		e = e || window.event;

		// Framework specific normalizing (#1165)
		e = washMouseEvent(e);

		// More IE normalizing, needs to go after washMouseEvent
		if (!e.target) {
			e.target = e.srcElement;
		}
		
		// iOS (#2757)
		ePos = e.touches ?  (e.touches.length ? e.touches.item(0) : e.changedTouches[0]) : e;

		// Get mouse position
		if (!chartPosition) {
			this.chartPosition = chartPosition = offset(this.chart.container);
		}

		// chartX and chartY
		if (ePos.pageX === UNDEFINED) { // IE < 9. #886.
			chartX = mathMax(e.x, e.clientX - chartPosition.left); // #2005, #2129: the second case is 
				// for IE10 quirks mode within framesets
			chartY = e.y;
		} else {
			chartX = ePos.pageX - chartPosition.left;
			chartY = ePos.pageY - chartPosition.top;
		}

		return extend(e, {
			chartX: mathRound(chartX),
			chartY: mathRound(chartY)
		});
	},

	/**
	 * Get the click position in terms of axis values.
	 *
	 * @param {Object} e A pointer event
	 */
	getCoordinates: function (e) {
		var coordinates = {
				xAxis: [],
				yAxis: []
			};

		each(this.chart.axes, function (axis) {
			coordinates[axis.isXAxis ? 'xAxis' : 'yAxis'].push({
				axis: axis,
				value: axis.toValue(e[axis.horiz ? 'chartX' : 'chartY'])
			});
		});
		return coordinates;
	},
	
	/**
	 * With line type charts with a single tracker, get the point closest to the mouse.
	 * Run Point.onMouseOver and display tooltip for the point or points.
	 */
	runPointActions: function (e) {

		var pointer = this,
			chart = pointer.chart,
			series = chart.series,
			tooltip = chart.tooltip,
			shared = tooltip ? tooltip.shared : false,
			followPointer,
			//point,
			//points,
			hoverPoint = chart.hoverPoint,
			hoverSeries = chart.hoverSeries,
			i,
			//j,
			distance = chart.chartWidth,
			rdistance = chart.chartWidth,
			anchor,
			noSharedTooltip,
			kdpoints = [],
			kdpoint,
			kdpointT;

		// For hovering over the empty parts of the plot area (hoverSeries is undefined). 
		// If there is one series with point tracking (combo chart), don't go to nearest neighbour.
		if (!shared && !hoverSeries) {
			for (i = 0; i < series.length; i++) {
				if (series[i].directTouch || !series[i].options.stickyTracking) {
					series = [];
				}
			}
		}

		// If it has a hoverPoint and that series requires direct touch (like columns), 
		// use the hoverPoint (#3899). Otherwise, search the k-d tree.	
		if (!shared && hoverSeries && hoverSeries.directTouch && hoverPoint) {
			kdpoint = hoverPoint;

		// Handle shared tooltip or cases where a series is not yet hovered
		} else {
			// Find nearest points on all series
			each(series, function (s) {
				// Skip hidden series
				noSharedTooltip = s.noSharedTooltip && shared;
				if (s.visible && !noSharedTooltip && pick(s.options.enableMouseTracking, true)) { // #3821
					kdpointT = s.searchPoint(e); // #3828
					if (kdpointT) {
						kdpoints.push(kdpointT);
					}
				}
			});
			// Find absolute nearest point
			each(kdpoints, function (p) {
				if (p && defined(p.plotX) && defined(p.plotY)) {
					if ((p.dist.distX < distance) || ((p.dist.distX === distance || p.series.kdDimensions > 1) && 
							p.dist.distR < rdistance)) {
						distance = p.dist.distX;
						rdistance = p.dist.distR;
						kdpoint = p;
					}
				}
			});
		}

		// Refresh tooltip for kdpoint if new hover point or tooltip was hidden // #3926
		if (kdpoint && (kdpoint !== hoverPoint || (tooltip && tooltip.isHidden))) {
			// Draw tooltip if necessary
			if (shared && !kdpoint.series.noSharedTooltip) {
				i = kdpoints.length;
				while (i--) {
					if (kdpoints[i].clientX !== kdpoint.clientX || kdpoints[i].series.noSharedTooltip) {
						kdpoints.splice(i, 1);
					}
				}
				if (kdpoints.length && tooltip) {
					tooltip.refresh(kdpoints, e);
				}

				// do mouseover on all points except the closest
				each(kdpoints, function (point) {
					if (point !== kdpoint) { 
						point.onMouseOver(e);
					}
				});	
				// #3919, #3985 do mouseover on the closest point last to ensure it is the hoverpoint
				((hoverSeries && hoverSeries.directTouch && hoverPoint) || kdpoint).onMouseOver(e); 
			} else {
				if (tooltip) { 
					tooltip.refresh(kdpoint, e);
				}
				kdpoint.onMouseOver(e); 
			}
		
		// Update positions (regardless of kdpoint or hoverPoint)
		} else {
			followPointer = hoverSeries && hoverSeries.tooltipOptions.followPointer;
			if (tooltip && followPointer && !tooltip.isHidden) {
				anchor = tooltip.getAnchor([{}], e);
				tooltip.updatePosition({ plotX: anchor[0], plotY: anchor[1] });			
			}
		}

		// Start the event listener to pick up the tooltip 
		if (tooltip && !pointer._onDocumentMouseMove) {
			pointer._onDocumentMouseMove = function (e) {
				if (charts[hoverChartIndex]) {
					charts[hoverChartIndex].pointer.onDocumentMouseMove(e);
				}
			};
			addEvent(doc, 'mousemove', pointer._onDocumentMouseMove);
		}
		
		// Crosshair
		each(chart.axes, function (axis) {
			axis.drawCrosshair(e, pick(kdpoint, hoverPoint));
		});	
				
	},



	/**
	 * Reset the tracking by hiding the tooltip, the hover series state and the hover point
	 * 
	 * @param allowMove {Boolean} Instead of destroying the tooltip altogether, allow moving it if possible
	 */
	reset: function (allowMove, delay) {
		var pointer = this,
			chart = pointer.chart,
			hoverSeries = chart.hoverSeries,
			hoverPoint = chart.hoverPoint,
			tooltip = chart.tooltip,
			tooltipPoints = tooltip && tooltip.shared ? chart.hoverPoints : hoverPoint;
			
		// Narrow in allowMove
		allowMove = allowMove && tooltip && tooltipPoints;
			
		// Check if the points have moved outside the plot area, #1003		
		if (allowMove  && splat(tooltipPoints)[0].plotX === UNDEFINED) {
			allowMove = false;
		}	
		// Just move the tooltip, #349
		if (allowMove) {
			tooltip.refresh(tooltipPoints);
			if (hoverPoint) { // #2500
				hoverPoint.setState(hoverPoint.state, true);
				each(chart.axes, function (axis) {
					if (pick(axis.options.crosshair && axis.options.crosshair.snap, true)) {
						axis.drawCrosshair(null, allowMove);
					}  else {
						axis.hideCrosshair();
					}
				});
				
			}

		// Full reset
		} else {

			if (hoverPoint) {
				hoverPoint.onMouseOut();
			}

			if (hoverSeries) {
				hoverSeries.onMouseOut();
			}

			if (tooltip) {
				tooltip.hide(delay);
			}

			if (pointer._onDocumentMouseMove) {
				removeEvent(doc, 'mousemove', pointer._onDocumentMouseMove);
				pointer._onDocumentMouseMove = null;
			}

			// Remove crosshairs
			each(chart.axes, function (axis) {
				axis.hideCrosshair();
			});
			
			pointer.hoverX = null;

		}
	},

	/**
	 * Scale series groups to a certain scale and translation
	 */
	scaleGroups: function (attribs, clip) {

		var chart = this.chart,
			seriesAttribs;

		// Scale each series
		each(chart.series, function (series) {
			seriesAttribs = attribs || series.getPlotBox(); // #1701
			if (series.xAxis && series.xAxis.zoomEnabled) {
				series.group.attr(seriesAttribs);
				if (series.markerGroup) {
					series.markerGroup.attr(seriesAttribs);
					series.markerGroup.clip(clip ? chart.clipRect : null);
				}
				if (series.dataLabelsGroup) {
					series.dataLabelsGroup.attr(seriesAttribs);
				}
			}
		});
		
		// Clip
		chart.clipRect.attr(clip || chart.clipBox);
	},

	/**
	 * Start a drag operation
	 */
	dragStart: function (e) {
		var chart = this.chart;

		// Record the start position
		chart.mouseIsDown = e.type;
		chart.cancelClick = false;
		chart.mouseDownX = this.mouseDownX = e.chartX;
		chart.mouseDownY = this.mouseDownY = e.chartY;
	},

	/**
	 * Perform a drag operation in response to a mousemove event while the mouse is down
	 */
	drag: function (e) {

		var chart = this.chart,
			chartOptions = chart.options.chart,
			chartX = e.chartX,
			chartY = e.chartY,
			zoomHor = this.zoomHor,
			zoomVert = this.zoomVert,
			plotLeft = chart.plotLeft,
			plotTop = chart.plotTop,
			plotWidth = chart.plotWidth,
			plotHeight = chart.plotHeight,
			clickedInside,
			size,
			mouseDownX = this.mouseDownX,
			mouseDownY = this.mouseDownY,
			panKey = chartOptions.panKey && e[chartOptions.panKey + 'Key'];

		// If the mouse is outside the plot area, adjust to cooordinates
		// inside to prevent the selection marker from going outside
		if (chartX < plotLeft) {
			chartX = plotLeft;
		} else if (chartX > plotLeft + plotWidth) {
			chartX = plotLeft + plotWidth;
		}

		if (chartY < plotTop) {
			chartY = plotTop;
		} else if (chartY > plotTop + plotHeight) {
			chartY = plotTop + plotHeight;
		}
		
		// determine if the mouse has moved more than 10px
		this.hasDragged = Math.sqrt(
			Math.pow(mouseDownX - chartX, 2) +
			Math.pow(mouseDownY - chartY, 2)
		);
		
		if (this.hasDragged > 10) {
			clickedInside = chart.isInsidePlot(mouseDownX - plotLeft, mouseDownY - plotTop);

			// make a selection
			if (chart.hasCartesianSeries && (this.zoomX || this.zoomY) && clickedInside && !panKey) {
				if (!this.selectionMarker) {
					this.selectionMarker = chart.renderer.rect(
						plotLeft,
						plotTop,
						zoomHor ? 1 : plotWidth,
						zoomVert ? 1 : plotHeight,
						0
					)
					.attr({
						fill: chartOptions.selectionMarkerFill || 'rgba(69,114,167,0.25)',
						zIndex: 7
					})
					.add();
				}
			}

			// adjust the width of the selection marker
			if (this.selectionMarker && zoomHor) {
				size = chartX - mouseDownX;
				this.selectionMarker.attr({
					width: mathAbs(size),
					x: (size > 0 ? 0 : size) + mouseDownX
				});
			}
			// adjust the height of the selection marker
			if (this.selectionMarker && zoomVert) {
				size = chartY - mouseDownY;
				this.selectionMarker.attr({
					height: mathAbs(size),
					y: (size > 0 ? 0 : size) + mouseDownY
				});
			}

			// panning
			if (clickedInside && !this.selectionMarker && chartOptions.panning) {
				chart.pan(e, chartOptions.panning);
			}
		}
	},

	/**
	 * On mouse up or touch end across the entire document, drop the selection.
	 */
	drop: function (e) {
		var pointer = this,
			chart = this.chart,
			hasPinched = this.hasPinched;

		if (this.selectionMarker) {
			var selectionData = {
					xAxis: [],
					yAxis: [],
					originalEvent: e.originalEvent || e
				},
				selectionBox = this.selectionMarker,
				selectionLeft = selectionBox.attr ? selectionBox.attr('x') : selectionBox.x,
				selectionTop = selectionBox.attr ? selectionBox.attr('y') : selectionBox.y,
				selectionWidth = selectionBox.attr ? selectionBox.attr('width') : selectionBox.width,
				selectionHeight = selectionBox.attr ? selectionBox.attr('height') : selectionBox.height,
				runZoom;

			// a selection has been made
			if (this.hasDragged || hasPinched) {

				// record each axis' min and max
				each(chart.axes, function (axis) {
					if (axis.zoomEnabled && defined(axis.min) && (hasPinched || pointer[{ xAxis: 'zoomX', yAxis: 'zoomY' }[axis.coll]])) { // #859, #3569
						var horiz = axis.horiz,
							minPixelPadding = e.type === 'touchend' ? axis.minPixelPadding: 0, // #1207, #3075
							selectionMin = axis.toValue((horiz ? selectionLeft : selectionTop) + minPixelPadding),
							selectionMax = axis.toValue((horiz ? selectionLeft + selectionWidth : selectionTop + selectionHeight) - minPixelPadding);

						selectionData[axis.coll].push({
							axis: axis,
							min: mathMin(selectionMin, selectionMax), // for reversed axes
							max: mathMax(selectionMin, selectionMax)
						});
						runZoom = true;
					}
				});
				if (runZoom) {
					fireEvent(chart, 'selection', selectionData, function (args) { 
						chart.zoom(extend(args, hasPinched ? { animation: false } : null)); 
					});
				}

			}
			this.selectionMarker = this.selectionMarker.destroy();

			// Reset scaling preview
			if (hasPinched) {
				this.scaleGroups();
			}
		}

		// Reset all
		if (chart) { // it may be destroyed on mouse up - #877
			css(chart.container, { cursor: chart._cursor });
			chart.cancelClick = this.hasDragged > 10; // #370
			chart.mouseIsDown = this.hasDragged = this.hasPinched = false;
			this.pinchDown = [];
		}
	},

	onContainerMouseDown: function (e) {

		e = this.normalize(e);

		// issue #295, dragging not always working in Firefox
		if (e.preventDefault) {
			e.preventDefault();
		}
		
		this.dragStart(e);
	},

	

	onDocumentMouseUp: function (e) {
		if (charts[hoverChartIndex]) {
			charts[hoverChartIndex].pointer.drop(e);
		}
	},

	/**
	 * Special handler for mouse move that will hide the tooltip when the mouse leaves the plotarea.
	 * Issue #149 workaround. The mouseleave event does not always fire. 
	 */
	onDocumentMouseMove: function (e) {
		var chart = this.chart,
			chartPosition = this.chartPosition;

		e = this.normalize(e, chartPosition);

		// If we're outside, hide the tooltip
		if (chartPosition && !this.inClass(e.target, 'highcharts-tracker') &&
				!chart.isInsidePlot(e.chartX - chart.plotLeft, e.chartY - chart.plotTop)) {
			this.reset();
		}
	},

	/**
	 * When mouse leaves the container, hide the tooltip.
	 */
	onContainerMouseLeave: function () {
		var chart = charts[hoverChartIndex];
		if (chart) {
			chart.pointer.reset();
			chart.pointer.chartPosition = null; // also reset the chart position, used in #149 fix
		}
	},

	// The mousemove, touchmove and touchstart event handler
	onContainerMouseMove: function (e) {

		var chart = this.chart;

		hoverChartIndex = chart.index;

		e = this.normalize(e);		
		e.returnValue = false; // #2251, #3224
		
		if (chart.mouseIsDown === 'mousedown') {
			this.drag(e);
		} 
		
		// Show the tooltip and run mouse over events (#977)
		if ((this.inClass(e.target, 'highcharts-tracker') || 
				chart.isInsidePlot(e.chartX - chart.plotLeft, e.chartY - chart.plotTop)) && !chart.openMenu) {
			this.runPointActions(e);
		}
	},

	/**
	 * Utility to detect whether an element has, or has a parent with, a specific
	 * class name. Used on detection of tracker objects and on deciding whether
	 * hovering the tooltip should cause the active series to mouse out.
	 */
	inClass: function (element, className) {
		var elemClassName;
		while (element) {
			elemClassName = attr(element, 'class');
			if (elemClassName) {
				if (elemClassName.indexOf(className) !== -1) {
					return true;
				} else if (elemClassName.indexOf(PREFIX + 'container') !== -1) {
					return false;
				}
			}
			element = element.parentNode;
		}		
	},

	onTrackerMouseOut: function (e) {
		var series = this.chart.hoverSeries,
			relatedTarget = e.relatedTarget || e.toElement,
			relatedSeries = relatedTarget && relatedTarget.point && relatedTarget.point.series; // #2499
		
		if (series && !series.options.stickyTracking && !this.inClass(relatedTarget, PREFIX + 'tooltip') &&
				relatedSeries !== series) {
			series.onMouseOut();
		}
	},

	onContainerClick: function (e) {
		var chart = this.chart,
			hoverPoint = chart.hoverPoint, 
			plotLeft = chart.plotLeft,
			plotTop = chart.plotTop;
		
		e = this.normalize(e);
		e.originalEvent = e; // #3913
		e.cancelBubble = true; // IE specific

		if (!chart.cancelClick) {
			
			// On tracker click, fire the series and point events. #783, #1583
			if (hoverPoint && this.inClass(e.target, PREFIX + 'tracker')) {

				// the series click event
				fireEvent(hoverPoint.series, 'click', extend(e, {
					point: hoverPoint
				}));

				// the point click event
				if (chart.hoverPoint) { // it may be destroyed (#1844)
					hoverPoint.firePointEvent('click', e);
				}

			// When clicking outside a tracker, fire a chart event
			} else {
				extend(e, this.getCoordinates(e));

				// fire a click event in the chart
				if (chart.isInsidePlot(e.chartX - plotLeft, e.chartY - plotTop)) {
					fireEvent(chart, 'click', e);
				}
			}


		}
	},

	/**
	 * Set the JS DOM events on the container and document. This method should contain
	 * a one-to-one assignment between methods and their handlers. Any advanced logic should
	 * be moved to the handler reflecting the event's name.
	 */
	setDOMEvents: function () {

		var pointer = this,
			container = pointer.chart.container;

		container.onmousedown = function (e) {
			pointer.onContainerMouseDown(e);
		};
		container.onmousemove = function (e) {
			pointer.onContainerMouseMove(e);
		};
		container.onclick = function (e) {
			pointer.onContainerClick(e);
		};
		addEvent(container, 'mouseleave', pointer.onContainerMouseLeave);
		if (chartCount === 1) {
			addEvent(doc, 'mouseup', pointer.onDocumentMouseUp);
		}
		if (hasTouch) {
			container.ontouchstart = function (e) {
				pointer.onContainerTouchStart(e);
			};
			container.ontouchmove = function (e) {
				pointer.onContainerTouchMove(e);
			};
			if (chartCount === 1) {
				addEvent(doc, 'touchend', pointer.onDocumentTouchEnd);
			}
		}
		
	},

	/**
	 * Destroys the Pointer object and disconnects DOM events.
	 */
	destroy: function () {
		var prop;

		removeEvent(this.chart.container, 'mouseleave', this.onContainerMouseLeave);
		if (!chartCount) {
			removeEvent(doc, 'mouseup', this.onDocumentMouseUp);
			removeEvent(doc, 'touchend', this.onDocumentTouchEnd);
		}

		// memory and CPU leak
		clearInterval(this.tooltipTimeout);

		for (prop in this) {
			this[prop] = null;
		}
	}
};


/* Support for touch devices */
extend(Highcharts.Pointer.prototype, {

	/**
	 * Run translation operations
	 */
	pinchTranslate: function (pinchDown, touches, transform, selectionMarker, clip, lastValidTouch) {
		if (this.zoomHor || this.pinchHor) {
			this.pinchTranslateDirection(true, pinchDown, touches, transform, selectionMarker, clip, lastValidTouch);
		}
		if (this.zoomVert || this.pinchVert) {
			this.pinchTranslateDirection(false, pinchDown, touches, transform, selectionMarker, clip, lastValidTouch);
		}
	},

	/**
	 * Run translation operations for each direction (horizontal and vertical) independently
	 */
	pinchTranslateDirection: function (horiz, pinchDown, touches, transform, selectionMarker, clip, lastValidTouch, forcedScale) {
		var chart = this.chart,
			xy = horiz ? 'x' : 'y',
			XY = horiz ? 'X' : 'Y',
			sChartXY = 'chart' + XY,
			wh = horiz ? 'width' : 'height',
			plotLeftTop = chart['plot' + (horiz ? 'Left' : 'Top')],
			selectionWH,
			selectionXY,
			clipXY,
			scale = forcedScale || 1,
			inverted = chart.inverted,
			bounds = chart.bounds[horiz ? 'h' : 'v'],
			singleTouch = pinchDown.length === 1,
			touch0Start = pinchDown[0][sChartXY],
			touch0Now = touches[0][sChartXY],
			touch1Start = !singleTouch && pinchDown[1][sChartXY],
			touch1Now = !singleTouch && touches[1][sChartXY],
			outOfBounds,
			transformScale,
			scaleKey,
			setScale = function () {
				if (!singleTouch && mathAbs(touch0Start - touch1Start) > 20) { // Don't zoom if fingers are too close on this axis
					scale = forcedScale || mathAbs(touch0Now - touch1Now) / mathAbs(touch0Start - touch1Start); 
				}
				
				clipXY = ((plotLeftTop - touch0Now) / scale) + touch0Start;
				selectionWH = chart['plot' + (horiz ? 'Width' : 'Height')] / scale;
			};

		// Set the scale, first pass
		setScale();

		selectionXY = clipXY; // the clip position (x or y) is altered if out of bounds, the selection position is not

		// Out of bounds
		if (selectionXY < bounds.min) {
			selectionXY = bounds.min;
			outOfBounds = true;
		} else if (selectionXY + selectionWH > bounds.max) {
			selectionXY = bounds.max - selectionWH;
			outOfBounds = true;
		}
		
		// Is the chart dragged off its bounds, determined by dataMin and dataMax?
		if (outOfBounds) {

			// Modify the touchNow position in order to create an elastic drag movement. This indicates
			// to the user that the chart is responsive but can't be dragged further.
			touch0Now -= 0.8 * (touch0Now - lastValidTouch[xy][0]);
			if (!singleTouch) {
				touch1Now -= 0.8 * (touch1Now - lastValidTouch[xy][1]);
			}

			// Set the scale, second pass to adapt to the modified touchNow positions
			setScale();

		} else {
			lastValidTouch[xy] = [touch0Now, touch1Now];
		}

		// Set geometry for clipping, selection and transformation
		if (!inverted) { // TODO: implement clipping for inverted charts
			clip[xy] = clipXY - plotLeftTop;
			clip[wh] = selectionWH;
		}
		scaleKey = inverted ? (horiz ? 'scaleY' : 'scaleX') : 'scale' + XY;
		transformScale = inverted ? 1 / scale : scale;

		selectionMarker[wh] = selectionWH;
		selectionMarker[xy] = selectionXY;
		transform[scaleKey] = scale;
		transform['translate' + XY] = (transformScale * plotLeftTop) + (touch0Now - (transformScale * touch0Start));
	},
	
	/**
	 * Handle touch events with two touches
	 */
	pinch: function (e) {

		var self = this,
			chart = self.chart,
			pinchDown = self.pinchDown,
			touches = e.touches,
			touchesLength = touches.length,
			lastValidTouch = self.lastValidTouch,
			hasZoom = self.hasZoom,
			selectionMarker = self.selectionMarker,
			transform = {},
			fireClickEvent = touchesLength === 1 && ((self.inClass(e.target, PREFIX + 'tracker') && 
				chart.runTrackerClick) || self.runChartClick),
			clip = {};

		// On touch devices, only proceed to trigger click if a handler is defined
		if (hasZoom && !fireClickEvent) {
			e.preventDefault();
		}
		
		// Normalize each touch
		map(touches, function (e) {
			return self.normalize(e);
		});
		
		// Register the touch start position
		if (e.type === 'touchstart') {
			each(touches, function (e, i) {
				pinchDown[i] = { chartX: e.chartX, chartY: e.chartY };
			});
			lastValidTouch.x = [pinchDown[0].chartX, pinchDown[1] && pinchDown[1].chartX];
			lastValidTouch.y = [pinchDown[0].chartY, pinchDown[1] && pinchDown[1].chartY];

			// Identify the data bounds in pixels
			each(chart.axes, function (axis) {
				if (axis.zoomEnabled) {
					var bounds = chart.bounds[axis.horiz ? 'h' : 'v'],
						minPixelPadding = axis.minPixelPadding,
						min = axis.toPixels(pick(axis.options.min, axis.dataMin)),
						max = axis.toPixels(pick(axis.options.max, axis.dataMax)),
						absMin = mathMin(min, max),
						absMax = mathMax(min, max);

					// Store the bounds for use in the touchmove handler
					bounds.min = mathMin(axis.pos, absMin - minPixelPadding);
					bounds.max = mathMax(axis.pos + axis.len, absMax + minPixelPadding);
				}
			});
			self.res = true; // reset on next move
		
		// Event type is touchmove, handle panning and pinching
		} else if (pinchDown.length) { // can be 0 when releasing, if touchend fires first
			

			// Set the marker
			if (!selectionMarker) {
				self.selectionMarker = selectionMarker = extend({
					destroy: noop
				}, chart.plotBox);
			}
			
			self.pinchTranslate(pinchDown, touches, transform, selectionMarker, clip, lastValidTouch);

			self.hasPinched = hasZoom;

			// Scale and translate the groups to provide visual feedback during pinching
			self.scaleGroups(transform, clip);
			
			// Optionally move the tooltip on touchmove
			if (!hasZoom && self.followTouchMove && touchesLength === 1) {
				this.runPointActions(self.normalize(e));
			} else if (self.res) {
				self.res = false;
				this.reset(false, 0);
			}
		}
	},

	onContainerTouchStart: function (e) {
		var chart = this.chart;

		hoverChartIndex = chart.index;

		if (e.touches.length === 1) {

			e = this.normalize(e);

			if (chart.isInsidePlot(e.chartX - chart.plotLeft, e.chartY - chart.plotTop) && !chart.openMenu) {

				// Run mouse events and display tooltip etc
				this.runPointActions(e);

				this.pinch(e);

			} else {
				// Hide the tooltip on touching outside the plot area (#1203)
				this.reset();
			}

		} else if (e.touches.length === 2) {
			this.pinch(e);
		}   
	},

	onContainerTouchMove: function (e) {
		if (e.touches.length === 1 || e.touches.length === 2) {
			this.pinch(e);
		}
	},

	onDocumentTouchEnd: function (e) {
		if (charts[hoverChartIndex]) {
			charts[hoverChartIndex].pointer.drop(e);
		}
	}

});
if (win.PointerEvent || win.MSPointerEvent) {
	
	// The touches object keeps track of the points being touched at all times
	var touches = {},
		hasPointerEvent = !!win.PointerEvent,
		getWebkitTouches = function () {
			var key, fake = [];
			fake.item = function (i) { return this[i]; };
			for (key in touches) {
				if (touches.hasOwnProperty(key)) {
					fake.push({
						pageX: touches[key].pageX,
						pageY: touches[key].pageY,
						target: touches[key].target
					});
				}
			}
			return fake;
		},
		translateMSPointer = function (e, method, wktype, callback) {
			var p;
			e = e.originalEvent || e;
			if ((e.pointerType === 'touch' || e.pointerType === e.MSPOINTER_TYPE_TOUCH) && charts[hoverChartIndex]) {
				callback(e);
				p = charts[hoverChartIndex].pointer;
				p[method]({
					type: wktype,
					target: e.currentTarget,
					preventDefault: noop,
					touches: getWebkitTouches()
				});				
			}
		};

	/**
	 * Extend the Pointer prototype with methods for each event handler and more
	 */
	extend(Pointer.prototype, {
		onContainerPointerDown: function (e) {
			translateMSPointer(e, 'onContainerTouchStart', 'touchstart', function (e) {
				touches[e.pointerId] = { pageX: e.pageX, pageY: e.pageY, target: e.currentTarget };
			});
		},
		onContainerPointerMove: function (e) {
			translateMSPointer(e, 'onContainerTouchMove', 'touchmove', function (e) {
				touches[e.pointerId] = { pageX: e.pageX, pageY: e.pageY };
				if (!touches[e.pointerId].target) {
					touches[e.pointerId].target = e.currentTarget;
				}
			});
		},
		onDocumentPointerUp: function (e) {
			translateMSPointer(e, 'onDocumentTouchEnd', 'touchend', function (e) {
				delete touches[e.pointerId];
			});
		},

		/**
		 * Add or remove the MS Pointer specific events
		 */
		batchMSEvents: function (fn) {
			fn(this.chart.container, hasPointerEvent ? 'pointerdown' : 'MSPointerDown', this.onContainerPointerDown);
			fn(this.chart.container, hasPointerEvent ? 'pointermove' : 'MSPointerMove', this.onContainerPointerMove);
			fn(doc, hasPointerEvent ? 'pointerup' : 'MSPointerUp', this.onDocumentPointerUp);
		}
	});

	// Disable default IE actions for pinch and such on chart element
	wrap(Pointer.prototype, 'init', function (proceed, chart, options) {
		proceed.call(this, chart, options);
		if (this.hasZoom) { // #4014
			css(chart.container, {
				'-ms-touch-action': NONE,
				'touch-action': NONE
			});
		}
	});

	// Add IE specific touch events to chart
	wrap(Pointer.prototype, 'setDOMEvents', function (proceed) {
		proceed.apply(this);
		if (this.hasZoom || this.followTouchMove) {
			this.batchMSEvents(addEvent);
		}
	});
	// Destroy MS events also
	wrap(Pointer.prototype, 'destroy', function (proceed) {
		this.batchMSEvents(removeEvent);
		proceed.call(this);
	});
}
/**
 * The overview of the chart's series
 */
var Legend = Highcharts.Legend = function (chart, options) {
	this.init(chart, options);
};

Legend.prototype = {
	
	/**
	 * Initialize the legend
	 */
	init: function (chart, options) {
		
		var legend = this,
			itemStyle = options.itemStyle,
			padding,
			itemMarginTop = options.itemMarginTop || 0;
	
		this.options = options;

		if (!options.enabled) {
			return;
		}
	
		legend.itemStyle = itemStyle;
		legend.itemHiddenStyle = merge(itemStyle, options.itemHiddenStyle);
		legend.itemMarginTop = itemMarginTop;
		legend.padding = padding = pick(options.padding, 8);
		legend.initialItemX = padding;
		legend.initialItemY = padding - 5; // 5 is the number of pixels above the text
		legend.maxItemWidth = 0;
		legend.chart = chart;
		legend.itemHeight = 0;
		legend.symbolWidth = pick(options.symbolWidth, 16);
		legend.pages = [];


		// Render it
		legend.render();

		// move checkboxes
		addEvent(legend.chart, 'endResize', function () { 
			legend.positionCheckboxes();
		});

	},

	/**
	 * Set the colors for the legend item
	 * @param {Object} item A Series or Point instance
	 * @param {Object} visible Dimmed or colored
	 */
	colorizeItem: function (item, visible) {
		var legend = this,
			options = legend.options,
			legendItem = item.legendItem,
			legendLine = item.legendLine,
			legendSymbol = item.legendSymbol,
			hiddenColor = legend.itemHiddenStyle.color,
			textColor = visible ? options.itemStyle.color : hiddenColor,
			symbolColor = visible ? (item.legendColor || item.color || '#CCC') : hiddenColor,
			markerOptions = item.options && item.options.marker,
			symbolAttr = { fill: symbolColor },
			key,
			val;
		
		if (legendItem) {
			legendItem.css({ fill: textColor, color: textColor }); // color for #1553, oldIE
		}
		if (legendLine) {
			legendLine.attr({ stroke: symbolColor });
		}
		
		if (legendSymbol) {
			
			// Apply marker options
			if (markerOptions && legendSymbol.isMarker) { // #585
				symbolAttr.stroke = symbolColor;
				markerOptions = item.convertAttribs(markerOptions);
				for (key in markerOptions) {
					val = markerOptions[key];
					if (val !== UNDEFINED) {
						symbolAttr[key] = val;
					}
				}
			}

			legendSymbol.attr(symbolAttr);
		}
	},

	/**
	 * Position the legend item
	 * @param {Object} item A Series or Point instance
	 */
	positionItem: function (item) {
		var legend = this,
			options = legend.options,
			symbolPadding = options.symbolPadding,
			ltr = !options.rtl,
			legendItemPos = item._legendItemPos,
			itemX = legendItemPos[0],
			itemY = legendItemPos[1],
			checkbox = item.checkbox;

		if (item.legendGroup) {
			item.legendGroup.translate(
				ltr ? itemX : legend.legendWidth - itemX - 2 * symbolPadding - 4,
				itemY
			);
		}

		if (checkbox) {
			checkbox.x = itemX;
			checkbox.y = itemY;
		}
	},

	/**
	 * Destroy a single legend item
	 * @param {Object} item The series or point
	 */
	destroyItem: function (item) {
		var checkbox = item.checkbox;

		// destroy SVG elements
		each(['legendItem', 'legendLine', 'legendSymbol', 'legendGroup'], function (key) {
			if (item[key]) {
				item[key] = item[key].destroy();
			}
		});

		if (checkbox) {
			discardElement(item.checkbox);
		}
	},

	/**
	 * Destroy all items.
	 */
	clearItems: function () {
		var legend = this;
		each(legend.getAllItems(), function (item) {
			legend.destroyItem(item); 
		});		
	},

	/**
	 * Destroys the legend.
	 */
	destroy: function () {
		var legend = this,
			legendGroup = legend.group,
			box = legend.box;

		if (box) {
			legend.box = box.destroy();
		}

		if (legendGroup) {
			legend.group = legendGroup.destroy();
		}
	},

	/**
	 * Position the checkboxes after the width is determined
	 */
	positionCheckboxes: function (scrollOffset) {
		var alignAttr = this.group.alignAttr,
			translateY,
			clipHeight = this.clipHeight || this.legendHeight;

		if (alignAttr) {
			translateY = alignAttr.translateY;
			each(this.allItems, function (item) {
				var checkbox = item.checkbox,
					top;
				
				if (checkbox) {
					top = (translateY + checkbox.y + (scrollOffset || 0) + 3);
					css(checkbox, {
						left: (alignAttr.translateX + item.checkboxOffset + checkbox.x - 20) + PX,
						top: top + PX,
						display: top > translateY - 6 && top < translateY + clipHeight - 6 ? '' : NONE
					});
				}
			});
		}
	},
	
	/**
	 * Render the legend title on top of the legend
	 */
	renderTitle: function () {
		var options = this.options,
			padding = this.padding,
			titleOptions = options.title,
			titleHeight = 0,
			bBox;
		
		if (titleOptions.text) {
			if (!this.title) {
				this.title = this.chart.renderer.label(titleOptions.text, padding - 3, padding - 4, null, null, null, null, null, 'legend-title')
					.attr({ zIndex: 1 })
					.css(titleOptions.style)
					.add(this.group);
			}
			bBox = this.title.getBBox();
			titleHeight = bBox.height;
			this.offsetWidth = bBox.width; // #1717
			this.contentGroup.attr({ translateY: titleHeight });
		}
		this.titleHeight = titleHeight;
	},

	/**
	 * Render a single specific legend item
	 * @param {Object} item A series or point
	 */
	renderItem: function (item) {
		var legend = this,
			chart = legend.chart,
			renderer = chart.renderer,
			options = legend.options,
			horizontal = options.layout === 'horizontal',
			symbolWidth = legend.symbolWidth,
			symbolPadding = options.symbolPadding,
			itemStyle = legend.itemStyle,
			itemHiddenStyle = legend.itemHiddenStyle,
			padding = legend.padding,
			itemDistance = horizontal ? pick(options.itemDistance, 20) : 0,
			ltr = !options.rtl,
			itemHeight,
			widthOption = options.width,
			itemMarginBottom = options.itemMarginBottom || 0,
			itemMarginTop = legend.itemMarginTop,
			initialItemX = legend.initialItemX,
			bBox,
			itemWidth,
			li = item.legendItem,
			series = item.series && item.series.drawLegendSymbol ? item.series : item,
			seriesOptions = series.options,
			showCheckbox = legend.createCheckboxForItem && seriesOptions && seriesOptions.showCheckbox,
			useHTML = options.useHTML;

		if (!li) { // generate it once, later move it

			// Generate the group box
			// A group to hold the symbol and text. Text is to be appended in Legend class.
			item.legendGroup = renderer.g('legend-item')
				.attr({ zIndex: 1 })
				.add(legend.scrollGroup);

			// Generate the list item text and add it to the group
			item.legendItem = li = renderer.text(
					options.labelFormat ? format(options.labelFormat, item) : options.labelFormatter.call(item),
					ltr ? symbolWidth + symbolPadding : -symbolPadding,
					legend.baseline || 0,
					useHTML
				)
				.css(merge(item.visible ? itemStyle : itemHiddenStyle)) // merge to prevent modifying original (#1021)
				.attr({
					align: ltr ? 'left' : 'right',
					zIndex: 2
				})
				.add(item.legendGroup);

			// Get the baseline for the first item - the font size is equal for all
			if (!legend.baseline) {
				legend.fontMetrics = renderer.fontMetrics(itemStyle.fontSize, li);
				legend.baseline = legend.fontMetrics.f + 3 + itemMarginTop;
				li.attr('y', legend.baseline);
			}

			// Draw the legend symbol inside the group box
			series.drawLegendSymbol(legend, item);

			if (legend.setItemEvents) {
				legend.setItemEvents(item, li, useHTML, itemStyle, itemHiddenStyle);
			}			

			// Colorize the items
			legend.colorizeItem(item, item.visible);

			// add the HTML checkbox on top
			if (showCheckbox) {
				legend.createCheckboxForItem(item);				
			}
		}

		// calculate the positions for the next line
		bBox = li.getBBox();

		itemWidth = item.checkboxOffset = 
			options.itemWidth || 
			item.legendItemWidth || 
			symbolWidth + symbolPadding + bBox.width + itemDistance + (showCheckbox ? 20 : 0);
		legend.itemHeight = itemHeight = mathRound(item.legendItemHeight || bBox.height);

		// if the item exceeds the width, start a new line
		if (horizontal && legend.itemX - initialItemX + itemWidth >
				(widthOption || (chart.chartWidth - 2 * padding - initialItemX - options.x))) {
			legend.itemX = initialItemX;
			legend.itemY += itemMarginTop + legend.lastLineHeight + itemMarginBottom;
			legend.lastLineHeight = 0; // reset for next line (#915, #3976)
		}

		// If the item exceeds the height, start a new column
		/*if (!horizontal && legend.itemY + options.y + itemHeight > chart.chartHeight - spacingTop - spacingBottom) {
			legend.itemY = legend.initialItemY;
			legend.itemX += legend.maxItemWidth;
			legend.maxItemWidth = 0;
		}*/

		// Set the edge positions
		legend.maxItemWidth = mathMax(legend.maxItemWidth, itemWidth);
		legend.lastItemY = itemMarginTop + legend.itemY + itemMarginBottom;
		legend.lastLineHeight = mathMax(itemHeight, legend.lastLineHeight); // #915

		// cache the position of the newly generated or reordered items
		item._legendItemPos = [legend.itemX, legend.itemY];

		// advance
		if (horizontal) {
			legend.itemX += itemWidth;

		} else {
			legend.itemY += itemMarginTop + itemHeight + itemMarginBottom;
			legend.lastLineHeight = itemHeight;
		}

		// the width of the widest item
		legend.offsetWidth = widthOption || mathMax(
			(horizontal ? legend.itemX - initialItemX - itemDistance : itemWidth) + padding,
			legend.offsetWidth
		);
	},

	/**
	 * Get all items, which is one item per series for normal series and one item per point
	 * for pie series.
	 */
	getAllItems: function () {
		var allItems = [];
		each(this.chart.series, function (series) {
			var seriesOptions = series.options;

			// Handle showInLegend. If the series is linked to another series, defaults to false.
			if (!pick(seriesOptions.showInLegend, !defined(seriesOptions.linkedTo) ? UNDEFINED : false, true)) {
				return;
			}

			// use points or series for the legend item depending on legendType
			allItems = allItems.concat(
					series.legendItems ||
					(seriesOptions.legendType === 'point' ?
							series.data :
							series)
			);
		});
		return allItems;
	},

	/**
	 * Adjust the chart margins by reserving space for the legend on only one side
	 * of the chart. If the position is set to a corner, top or bottom is reserved
	 * for horizontal legends and left or right for vertical ones.
	 */
	adjustMargins: function (margin, spacing) {
		var chart = this.chart, 
			options = this.options,
			// Use the first letter of each alignment option in order to detect the side 
			alignment = options.align[0] + options.verticalAlign[0] + options.layout[0];
			
		if (this.display && !options.floating) {

			each([
				/(lth|ct|rth)/,
				/(rtv|rm|rbv)/,
				/(rbh|cb|lbh)/,
				/(lbv|lm|ltv)/
			], function (alignments, side) {
				if (alignments.test(alignment) && !defined(margin[side])) {
					// Now we have detected on which side of the chart we should reserve space for the legend
					chart[marginNames[side]] = mathMax(
						chart[marginNames[side]],
						chart.legend[(side + 1) % 2 ? 'legendHeight' : 'legendWidth'] + 
							[1, -1, -1, 1][side] * options[(side % 2) ? 'x' : 'y'] + 
							pick(options.margin, 12) +
							spacing[side]
					);
				}
			});
		}
	},

	/**
	 * Render the legend. This method can be called both before and after
	 * chart.render. If called after, it will only rearrange items instead
	 * of creating new ones.
	 */
	render: function () {
		var legend = this,
			chart = legend.chart,
			renderer = chart.renderer,
			legendGroup = legend.group,
			allItems,
			display,
			legendWidth,
			legendHeight,
			box = legend.box,
			options = legend.options,
			padding = legend.padding,
			legendBorderWidth = options.borderWidth,
			legendBackgroundColor = options.backgroundColor;

		legend.itemX = legend.initialItemX;
		legend.itemY = legend.initialItemY;
		legend.offsetWidth = 0;
		legend.lastItemY = 0;

		if (!legendGroup) {
			legend.group = legendGroup = renderer.g('legend')
				.attr({ zIndex: 7 }) 
				.add();
			legend.contentGroup = renderer.g()
				.attr({ zIndex: 1 }) // above background
				.add(legendGroup);
			legend.scrollGroup = renderer.g()
				.add(legend.contentGroup);
		}
		
		legend.renderTitle();

		// add each series or point
		allItems = legend.getAllItems();

		// sort by legendIndex
		stableSort(allItems, function (a, b) {
			return ((a.options && a.options.legendIndex) || 0) - ((b.options && b.options.legendIndex) || 0);
		});

		// reversed legend
		if (options.reversed) {
			allItems.reverse();
		}

		legend.allItems = allItems;
		legend.display = display = !!allItems.length;

		// render the items
		legend.lastLineHeight = 0;
		each(allItems, function (item) {
			legend.renderItem(item); 
		});

		// Get the box
		legendWidth = (options.width || legend.offsetWidth) + padding;
		legendHeight = legend.lastItemY + legend.lastLineHeight + legend.titleHeight;
		legendHeight = legend.handleOverflow(legendHeight);
		legendHeight += padding;

		// Draw the border and/or background
		if (legendBorderWidth || legendBackgroundColor) {

			if (!box) {
				legend.box = box = renderer.rect(
					0,
					0,
					legendWidth,
					legendHeight,
					options.borderRadius,
					legendBorderWidth || 0
				).attr({
					stroke: options.borderColor,
					'stroke-width': legendBorderWidth || 0,
					fill: legendBackgroundColor || NONE
				})
				.add(legendGroup)
				.shadow(options.shadow);
				box.isNew = true;

			} else if (legendWidth > 0 && legendHeight > 0) {
				box[box.isNew ? 'attr' : 'animate'](
					box.crisp({ width: legendWidth, height: legendHeight })
				);
				box.isNew = false;
			}

			// hide the border if no items
			box[display ? 'show' : 'hide']();
		}
		
		legend.legendWidth = legendWidth;
		legend.legendHeight = legendHeight;

		// Now that the legend width and height are established, put the items in the 
		// final position
		each(allItems, function (item) {
			legend.positionItem(item);
		});

		// 1.x compatibility: positioning based on style
		/*var props = ['left', 'right', 'top', 'bottom'],
			prop,
			i = 4;
		while (i--) {
			prop = props[i];
			if (options.style[prop] && options.style[prop] !== 'auto') {
				options[i < 2 ? 'align' : 'verticalAlign'] = prop;
				options[i < 2 ? 'x' : 'y'] = pInt(options.style[prop]) * (i % 2 ? -1 : 1);
			}
		}*/

		if (display) {
			legendGroup.align(extend({
				width: legendWidth,
				height: legendHeight
			}, options), true, 'spacingBox');
		}

		if (!chart.isResizing) {
			this.positionCheckboxes();
		}
	},
	
	/**
	 * Set up the overflow handling by adding navigation with up and down arrows below the
	 * legend.
	 */
	handleOverflow: function (legendHeight) {
		var legend = this,
			chart = this.chart,
			renderer = chart.renderer,
			options = this.options,
			optionsY = options.y,
			alignTop = options.verticalAlign === 'top',
			spaceHeight = chart.spacingBox.height + (alignTop ? -optionsY : optionsY) - this.padding,
			maxHeight = options.maxHeight,
			clipHeight,
			clipRect = this.clipRect,
			navOptions = options.navigation,
			animation = pick(navOptions.animation, true),
			arrowSize = navOptions.arrowSize || 12,
			nav = this.nav,
			pages = this.pages,
			lastY,
			allItems = this.allItems;
			
		// Adjust the height
		if (options.layout === 'horizontal') {
			spaceHeight /= 2;
		}
		if (maxHeight) {
			spaceHeight = mathMin(spaceHeight, maxHeight);
		}
		
		// Reset the legend height and adjust the clipping rectangle
		pages.length = 0;
		if (legendHeight > spaceHeight && !options.useHTML) {

			this.clipHeight = clipHeight = mathMax(spaceHeight - 20 - this.titleHeight - this.padding, 0);
			this.currentPage = pick(this.currentPage, 1);
			this.fullHeight = legendHeight;
			
			// Fill pages with Y positions so that the top of each a legend item defines
			// the scroll top for each page (#2098)
			each(allItems, function (item, i) {
				var y = item._legendItemPos[1],
					h = mathRound(item.legendItem.getBBox().height),
					len = pages.length;
				
				if (!len || (y - pages[len - 1] > clipHeight && (lastY || y) !== pages[len - 1])) {
					pages.push(lastY || y);
					len++;
				}
				
				if (i === allItems.length - 1 && y + h - pages[len - 1] > clipHeight) {
					pages.push(y);
				}
				if (y !== lastY) {
					lastY = y;
				}
			});

			// Only apply clipping if needed. Clipping causes blurred legend in PDF export (#1787)
			if (!clipRect) {
				clipRect = legend.clipRect = renderer.clipRect(0, this.padding, 9999, 0);
				legend.contentGroup.clip(clipRect);
			}
			clipRect.attr({
				height: clipHeight
			});
			
			// Add navigation elements
			if (!nav) {
				this.nav = nav = renderer.g().attr({ zIndex: 1 }).add(this.group);
				this.up = renderer.symbol('triangle', 0, 0, arrowSize, arrowSize)
					.on('click', function () {
						legend.scroll(-1, animation);
					})
					.add(nav);
				this.pager = renderer.text('', 15, 10)
					.css(navOptions.style)
					.add(nav);
				this.down = renderer.symbol('triangle-down', 0, 0, arrowSize, arrowSize)
					.on('click', function () {
						legend.scroll(1, animation);
					})
					.add(nav);
			}
			
			// Set initial position
			legend.scroll(0);
			
			legendHeight = spaceHeight;
			
		} else if (nav) {
			clipRect.attr({
				height: chart.chartHeight
			});
			nav.hide();
			this.scrollGroup.attr({
				translateY: 1
			});
			this.clipHeight = 0; // #1379
		}
		
		return legendHeight;
	},
	
	/**
	 * Scroll the legend by a number of pages
	 * @param {Object} scrollBy
	 * @param {Object} animation
	 */
	scroll: function (scrollBy, animation) {
		var pages = this.pages,
			pageCount = pages.length,
			currentPage = this.currentPage + scrollBy,
			clipHeight = this.clipHeight,
			navOptions = this.options.navigation,
			activeColor = navOptions.activeColor,
			inactiveColor = navOptions.inactiveColor,
			pager = this.pager,
			padding = this.padding,
			scrollOffset;
		
		// When resizing while looking at the last page
		if (currentPage > pageCount) {
			currentPage = pageCount;
		}
		
		if (currentPage > 0) {
			
			if (animation !== UNDEFINED) {
				setAnimation(animation, this.chart);
			}
			
			this.nav.attr({
				translateX: padding,
				translateY: clipHeight + this.padding + 7 + this.titleHeight,
				visibility: VISIBLE
			});
			this.up.attr({
					fill: currentPage === 1 ? inactiveColor : activeColor
				})
				.css({
					cursor: currentPage === 1 ? 'default' : 'pointer'
				});
			pager.attr({
				text: currentPage + '/' + pageCount
			});
			this.down.attr({
					x: 18 + this.pager.getBBox().width, // adjust to text width
					fill: currentPage === pageCount ? inactiveColor : activeColor
				})
				.css({
					cursor: currentPage === pageCount ? 'default' : 'pointer'
				});
			
			scrollOffset = -pages[currentPage - 1] + this.initialItemY;

			this.scrollGroup.animate({
				translateY: scrollOffset
			});			
			
			this.currentPage = currentPage;
			this.positionCheckboxes(scrollOffset);
		}
			
	}
	
};

/*
 * LegendSymbolMixin
 */ 

var LegendSymbolMixin = Highcharts.LegendSymbolMixin = {

	/**
	 * Get the series' symbol in the legend
	 * 
	 * @param {Object} legend The legend object
	 * @param {Object} item The series (this) or point
	 */
	drawRectangle: function (legend, item) {
		var symbolHeight = legend.options.symbolHeight || legend.fontMetrics.f;

		item.legendSymbol = this.chart.renderer.rect(
			0,
			legend.baseline - symbolHeight + 1, // #3988
			legend.symbolWidth,
			symbolHeight,
			legend.options.symbolRadius || 0
		).attr({
			zIndex: 3
		}).add(item.legendGroup);		
		
	},

	/**
	 * Get the series' symbol in the legend. This method should be overridable to create custom 
	 * symbols through Highcharts.seriesTypes[type].prototype.drawLegendSymbols.
	 * 
	 * @param {Object} legend The legend object
	 */
	drawLineMarker: function (legend) {

		var options = this.options,
			markerOptions = options.marker,
			radius,
			legendSymbol,
			symbolWidth = legend.symbolWidth,
			renderer = this.chart.renderer,
			legendItemGroup = this.legendGroup,
			verticalCenter = legend.baseline - mathRound(legend.fontMetrics.b * 0.3),
			attr;

		// Draw the line
		if (options.lineWidth) {
			attr = {
				'stroke-width': options.lineWidth
			};
			if (options.dashStyle) {
				attr.dashstyle = options.dashStyle;
			}
			this.legendLine = renderer.path([
				M,
				0,
				verticalCenter,
				L,
				symbolWidth,
				verticalCenter
			])
			.attr(attr)
			.add(legendItemGroup);
		}
		
		// Draw the marker
		if (markerOptions && markerOptions.enabled !== false) {
			radius = markerOptions.radius;
			this.legendSymbol = legendSymbol = renderer.symbol(
				this.symbol,
				(symbolWidth / 2) - radius,
				verticalCenter - radius,
				2 * radius,
				2 * radius
			)
			.add(legendItemGroup);
			legendSymbol.isMarker = true;
		}
	}
};

// Workaround for #2030, horizontal legend items not displaying in IE11 Preview,
// and for #2580, a similar drawing flaw in Firefox 26.
// TODO: Explore if there's a general cause for this. The problem may be related 
// to nested group elements, as the legend item texts are within 4 group elements.
if (/Trident\/7\.0/.test(userAgent) || isFirefox) {
	wrap(Legend.prototype, 'positionItem', function (proceed, item) {
		var legend = this,
			runPositionItem = function () { // If chart destroyed in sync, this is undefined (#2030)
				if (item._legendItemPos) {
					proceed.call(legend, item);
				}
			};

		// Do it now, for export and to get checkbox placement
		runPositionItem();
		
		// Do it after to work around the core issue
		setTimeout(runPositionItem);
	});
}
/**
 * The chart class
 * @param {Object} options
 * @param {Function} callback Function to run when the chart has loaded
 */
var Chart = Highcharts.Chart = function () {
	this.init.apply(this, arguments);
};

Chart.prototype = {

	/**
	 * Hook for modules
	 */
	callbacks: [],

	/**
	 * Initialize the chart
	 */
	init: function (userOptions, callback) {

		// Handle regular options
		var options,
			seriesOptions = userOptions.series; // skip merging data points to increase performance

		userOptions.series = null;
		options = merge(defaultOptions, userOptions); // do the merge
		options.series = userOptions.series = seriesOptions; // set back the series data
		this.userOptions = userOptions;

		var optionsChart = options.chart;
		
		// Create margin & spacing array
		this.margin = this.splashArray('margin', optionsChart);
		this.spacing = this.splashArray('spacing', optionsChart);

		var chartEvents = optionsChart.events;

		//this.runChartClick = chartEvents && !!chartEvents.click;
		this.bounds = { h: {}, v: {} }; // Pixel data bounds for touch zoom

		this.callback = callback;
		this.isResizing = 0;
		this.options = options;
		//chartTitleOptions = UNDEFINED;
		//chartSubtitleOptions = UNDEFINED;

		this.axes = [];
		this.series = [];
		this.hasCartesianSeries = optionsChart.showAxes;
		//this.axisOffset = UNDEFINED;
		//this.maxTicks = UNDEFINED; // handle the greatest amount of ticks on grouped axes
		//this.inverted = UNDEFINED;
		//this.loadingShown = UNDEFINED;
		//this.container = UNDEFINED;
		//this.chartWidth = UNDEFINED;
		//this.chartHeight = UNDEFINED;
		//this.marginRight = UNDEFINED;
		//this.marginBottom = UNDEFINED;
		//this.containerWidth = UNDEFINED;
		//this.containerHeight = UNDEFINED;
		//this.oldChartWidth = UNDEFINED;
		//this.oldChartHeight = UNDEFINED;

		//this.renderTo = UNDEFINED;
		//this.renderToClone = UNDEFINED;

		//this.spacingBox = UNDEFINED

		//this.legend = UNDEFINED;

		// Elements
		//this.chartBackground = UNDEFINED;
		//this.plotBackground = UNDEFINED;
		//this.plotBGImage = UNDEFINED;
		//this.plotBorder = UNDEFINED;
		//this.loadingDiv = UNDEFINED;
		//this.loadingSpan = UNDEFINED;

		var chart = this,
			eventType;

		// Add the chart to the global lookup
		chart.index = charts.length;
		charts.push(chart);
		chartCount++;

		// Set up auto resize
		if (optionsChart.reflow !== false) {
			addEvent(chart, 'load', function () {
				chart.initReflow();
			});
		}

		// Chart event handlers
		if (chartEvents) {
			for (eventType in chartEvents) {
				addEvent(chart, eventType, chartEvents[eventType]);
			}
		}

		chart.xAxis = [];
		chart.yAxis = [];

		// Expose methods and variables
		chart.animation = useCanVG ? false : pick(optionsChart.animation, true);
		chart.pointCount = chart.colorCounter = chart.symbolCounter = 0;

		chart.firstRender();
	},

	/**
	 * Initialize an individual series, called internally before render time
	 */
	initSeries: function (options) {
		var chart = this,
			optionsChart = chart.options.chart,
			type = options.type || optionsChart.type || optionsChart.defaultSeriesType,
			series,
			constr = seriesTypes[type];

		// No such series type
		if (!constr) {
			error(17, true);
		}

		series = new constr();
		series.init(this, options);
		return series;
	},

	/**
	 * Check whether a given point is within the plot area
	 *
	 * @param {Number} plotX Pixel x relative to the plot area
	 * @param {Number} plotY Pixel y relative to the plot area
	 * @param {Boolean} inverted Whether the chart is inverted
	 */
	isInsidePlot: function (plotX, plotY, inverted) {
		var x = inverted ? plotY : plotX,
			y = inverted ? plotX : plotY;
			
		return x >= 0 &&
			x <= this.plotWidth &&
			y >= 0 &&
			y <= this.plotHeight;
	},

	/**
	 * Redraw legend, axes or series based on updated data
	 *
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 */
	redraw: function (animation) {
		var chart = this,
			axes = chart.axes,
			series = chart.series,
			pointer = chart.pointer,
			legend = chart.legend,
			redrawLegend = chart.isDirtyLegend,
			hasStackedSeries,
			hasDirtyStacks,
			hasCartesianSeries = chart.hasCartesianSeries,
			isDirtyBox = chart.isDirtyBox, // todo: check if it has actually changed?
			seriesLength = series.length,
			i = seriesLength,
			serie,
			renderer = chart.renderer,
			isHiddenChart = renderer.isHidden(),
			afterRedraw = [];
			
		setAnimation(animation, chart);
		
		if (isHiddenChart) {
			chart.cloneRenderTo();
		}

		// Adjust title layout (reflow multiline text)
		chart.layOutTitles();

		// link stacked series
		while (i--) {
			serie = series[i];

			if (serie.options.stacking) {
				hasStackedSeries = true;
				
				if (serie.isDirty) {
					hasDirtyStacks = true;
					break;
				}
			}
		}
		if (hasDirtyStacks) { // mark others as dirty
			i = seriesLength;
			while (i--) {
				serie = series[i];
				if (serie.options.stacking) {
					serie.isDirty = true;
				}
			}
		}

		// handle updated data in the series
		each(series, function (serie) {
			if (serie.isDirty) { // prepare the data so axis can read it
				if (serie.options.legendType === 'point') {
					redrawLegend = true;
				}
			}
		});

		// handle added or removed series
		if (redrawLegend && legend.options.enabled) { // series or pie points are added or removed
			// draw legend graphics
			legend.render();

			chart.isDirtyLegend = false;
		}

		// reset stacks
		if (hasStackedSeries) {
			chart.getStacks();
		}


		if (hasCartesianSeries) {
			if (!chart.isResizing) {

				// reset maxTicks
				chart.maxTicks = null;

				// set axes scales
				each(axes, function (axis) {
					axis.setScale();
				});
			}
		}

		chart.getMargins(); // #3098

		if (hasCartesianSeries) {
			// If one axis is dirty, all axes must be redrawn (#792, #2169)
			each(axes, function (axis) {
				if (axis.isDirty) {
					isDirtyBox = true;
				}
			});

			// redraw axes
			each(axes, function (axis) {
				
				// Fire 'afterSetExtremes' only if extremes are set
				if (axis.isDirtyExtremes) { // #821
					axis.isDirtyExtremes = false;
					afterRedraw.push(function () { // prevent a recursive call to chart.redraw() (#1119)
						fireEvent(axis, 'afterSetExtremes', extend(axis.eventArgs, axis.getExtremes())); // #747, #751
						delete axis.eventArgs;
					});
				}
				
				if (isDirtyBox || hasStackedSeries) {
					axis.redraw();
				}
			});
		}
		
		// the plot areas size has changed
		if (isDirtyBox) {
			chart.drawChartBox();
		}


		// redraw affected series
		each(series, function (serie) {
			if (serie.isDirty && serie.visible &&
					(!serie.isCartesian || serie.xAxis)) { // issue #153
				serie.redraw();
			}
		});

		// move tooltip or reset
		if (pointer) {
			pointer.reset(true);
		}

		// redraw if canvas
		renderer.draw();

		// fire the event
		fireEvent(chart, 'redraw'); // jQuery breaks this when calling it from addEvent. Overwrites chart.redraw
		
		if (isHiddenChart) {
			chart.cloneRenderTo(true);
		}
		
		// Fire callbacks that are put on hold until after the redraw
		each(afterRedraw, function (callback) {
			callback.call();
		});
	},

	/**
	 * Get an axis, series or point object by id.
	 * @param id {String} The id as given in the configuration options
	 */
	get: function (id) {
		var chart = this,
			axes = chart.axes,
			series = chart.series;

		var i,
			j,
			points;

		// search axes
		for (i = 0; i < axes.length; i++) {
			if (axes[i].options.id === id) {
				return axes[i];
			}
		}

		// search series
		for (i = 0; i < series.length; i++) {
			if (series[i].options.id === id) {
				return series[i];
			}
		}

		// search points
		for (i = 0; i < series.length; i++) {
			points = series[i].points || [];
			for (j = 0; j < points.length; j++) {
				if (points[j].id === id) {
					return points[j];
				}
			}
		}
		return null;
	},

	/**
	 * Create the Axis instances based on the config options
	 */
	getAxes: function () {
		var chart = this,
			options = this.options,
			xAxisOptions = options.xAxis = splat(options.xAxis || {}),
			yAxisOptions = options.yAxis = splat(options.yAxis || {}),
			optionsArray,
			axis;

		// make sure the options are arrays and add some members
		each(xAxisOptions, function (axis, i) {
			axis.index = i;
			axis.isX = true;
		});

		each(yAxisOptions, function (axis, i) {
			axis.index = i;
		});

		// concatenate all axis options into one array
		optionsArray = xAxisOptions.concat(yAxisOptions);

		each(optionsArray, function (axisOptions) {
			axis = new Axis(chart, axisOptions);
		});
	},


	/**
	 * Get the currently selected points from all series
	 */
	getSelectedPoints: function () {
		var points = [];
		each(this.series, function (serie) {
			points = points.concat(grep(serie.points || [], function (point) {
				return point.selected;
			}));
		});
		return points;
	},

	/**
	 * Get the currently selected series
	 */
	getSelectedSeries: function () {
		return grep(this.series, function (serie) {
			return serie.selected;
		});
	},

	/**
	 * Generate stacks for each series and calculate stacks total values
	 */
	getStacks: function () {
		var chart = this;

		// reset stacks for each yAxis
		each(chart.yAxis, function (axis) {
			if (axis.stacks && axis.hasVisibleSeries) {
				axis.oldStacks = axis.stacks;
			}
		});

		each(chart.series, function (series) {
			if (series.options.stacking && (series.visible === true || chart.options.chart.ignoreHiddenSeries === false)) {
				series.stackKey = series.type + pick(series.options.stack, '');
			}
		});
	},	

	/**
	 * Show the title and subtitle of the chart
	 *
	 * @param titleOptions {Object} New title options
	 * @param subtitleOptions {Object} New subtitle options
	 *
	 */
	setTitle: function (titleOptions, subtitleOptions, redraw) {
		var chart = this,
			options = chart.options,
			chartTitleOptions,
			chartSubtitleOptions;

		chartTitleOptions = options.title = merge(options.title, titleOptions);
		chartSubtitleOptions = options.subtitle = merge(options.subtitle, subtitleOptions);

		// add title and subtitle
		each([
			['title', titleOptions, chartTitleOptions],
			['subtitle', subtitleOptions, chartSubtitleOptions]
		], function (arr) {
			var name = arr[0],
				title = chart[name],
				titleOptions = arr[1],
				chartTitleOptions = arr[2];

			if (title && titleOptions) {
				chart[name] = title = title.destroy(); // remove old
			}
			
			if (chartTitleOptions && chartTitleOptions.text && !title) {
				chart[name] = chart.renderer.text(
					chartTitleOptions.text,
					0,
					0,
					chartTitleOptions.useHTML
				)
				.attr({
					align: chartTitleOptions.align,
					'class': PREFIX + name,
					zIndex: chartTitleOptions.zIndex || 4
				})
				.css(chartTitleOptions.style)
				.add();
			}	
		});
		chart.layOutTitles(redraw);
	},

	/**
	 * Lay out the chart titles and cache the full offset height for use in getMargins
	 */
	layOutTitles: function (redraw) {
		var titleOffset = 0,
			title = this.title,
			subtitle = this.subtitle,
			options = this.options,
			titleOptions = options.title,
			subtitleOptions = options.subtitle,
			requiresDirtyBox,
			renderer = this.renderer,
			autoWidth = this.spacingBox.width - 44; // 44 makes room for default context button

		if (title) {
			title
				.css({ width: (titleOptions.width || autoWidth) + PX })
				.align(extend({ 
					y: renderer.fontMetrics(titleOptions.style.fontSize, title).b - 3
				}, titleOptions), false, 'spacingBox');
			
			if (!titleOptions.floating && !titleOptions.verticalAlign) {
				titleOffset = title.getBBox().height;
			}
		}
		if (subtitle) {
			subtitle
				.css({ width: (subtitleOptions.width || autoWidth) + PX })
				.align(extend({ 
					y: titleOffset + (titleOptions.margin - 13) + renderer.fontMetrics(titleOptions.style.fontSize, subtitle).b 
				}, subtitleOptions), false, 'spacingBox');
			
			if (!subtitleOptions.floating && !subtitleOptions.verticalAlign) {
				titleOffset = mathCeil(titleOffset + subtitle.getBBox().height);
			}
		}

		requiresDirtyBox = this.titleOffset !== titleOffset;				
		this.titleOffset = titleOffset; // used in getMargins

		if (!this.isDirtyBox && requiresDirtyBox) {
			this.isDirtyBox = requiresDirtyBox;
			// Redraw if necessary (#2719, #2744)		
			if (this.hasRendered && pick(redraw, true) && this.isDirtyBox) {
				this.redraw();
			}
		}
	},

	/**
	 * Get chart width and height according to options and container size
	 */
	getChartSize: function () {
		var chart = this,
			optionsChart = chart.options.chart,
			widthOption = optionsChart.width,
			heightOption = optionsChart.height,
			renderTo = chart.renderToClone || chart.renderTo;

		// get inner width and height from jQuery (#824)
		if (!defined(widthOption)) {
			chart.containerWidth = adapterRun(renderTo, 'width');
		}
		if (!defined(heightOption)) {
			chart.containerHeight = adapterRun(renderTo, 'height');
		}
		
		chart.chartWidth = mathMax(0, widthOption || chart.containerWidth || 600); // #1393, 1460
		chart.chartHeight = mathMax(0, pick(heightOption,
			// the offsetHeight of an empty container is 0 in standard browsers, but 19 in IE7:
			chart.containerHeight > 19 ? chart.containerHeight : 400));
	},

	/**
	 * Create a clone of the chart's renderTo div and place it outside the viewport to allow
	 * size computation on chart.render and chart.redraw
	 */
	cloneRenderTo: function (revert) {
		var clone = this.renderToClone,
			container = this.container;
		
		// Destroy the clone and bring the container back to the real renderTo div
		if (revert) {
			if (clone) {
				this.renderTo.appendChild(container);
				discardElement(clone);
				delete this.renderToClone;
			}
		
		// Set up the clone
		} else {
			if (container && container.parentNode === this.renderTo) {
				this.renderTo.removeChild(container); // do not clone this
			}
			this.renderToClone = clone = this.renderTo.cloneNode(0);
			css(clone, {
				position: ABSOLUTE,
				top: '-9999px',
				display: 'block' // #833
			});
			if (clone.style.setProperty) { // #2631
				clone.style.setProperty('display', 'block', 'important');
			}
			doc.body.appendChild(clone);
			if (container) {
				clone.appendChild(container);
			}
		}
	},

	/**
	 * Get the containing element, determine the size and create the inner container
	 * div to hold the chart
	 */
	getContainer: function () {
		var chart = this,
			container,
			optionsChart = chart.options.chart,
			chartWidth,
			chartHeight,
			renderTo,
			indexAttrName = 'data-highcharts-chart',
			oldChartIndex,
			containerId;

		chart.renderTo = renderTo = optionsChart.renderTo;
		containerId = PREFIX + idCounter++;

		if (isString(renderTo)) {
			chart.renderTo = renderTo = doc.getElementById(renderTo);
		}
		
		// Display an error if the renderTo is wrong
		if (!renderTo) {
			error(13, true);
		}
		
		// If the container already holds a chart, destroy it. The check for hasRendered is there
		// because web pages that are saved to disk from the browser, will preserve the data-highcharts-chart
		// attribute and the SVG contents, but not an interactive chart. So in this case,
		// charts[oldChartIndex] will point to the wrong chart if any (#2609).
		oldChartIndex = pInt(attr(renderTo, indexAttrName));
		if (!isNaN(oldChartIndex) && charts[oldChartIndex] && charts[oldChartIndex].hasRendered) {
			charts[oldChartIndex].destroy();
		}		
		
		// Make a reference to the chart from the div
		attr(renderTo, indexAttrName, chart.index);

		// remove previous chart
		renderTo.innerHTML = '';

		// If the container doesn't have an offsetWidth, it has or is a child of a node
		// that has display:none. We need to temporarily move it out to a visible
		// state to determine the size, else the legend and tooltips won't render
		// properly. The allowClone option is used in sparklines as a micro optimization,
		// saving about 1-2 ms each chart.
		if (!optionsChart.skipClone && !renderTo.offsetWidth) {
			chart.cloneRenderTo();
		}

		// get the width and height
		chart.getChartSize();
		chartWidth = chart.chartWidth;
		chartHeight = chart.chartHeight;

		// create the inner container
		chart.container = container = createElement(DIV, {
				className: PREFIX + 'container' +
					(optionsChart.className ? ' ' + optionsChart.className : ''),
				id: containerId
			}, extend({
				position: RELATIVE,
				overflow: HIDDEN, // needed for context menu (avoid scrollbars) and
					// content overflow in IE
				width: chartWidth + PX,
				height: chartHeight + PX,
				textAlign: 'left',
				lineHeight: 'normal', // #427
				zIndex: 0, // #1072
				'-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
			}, optionsChart.style),
			chart.renderToClone || renderTo
		);

		// cache the cursor (#1650)
		chart._cursor = container.style.cursor;

		// Initialize the renderer
		chart.renderer =
			optionsChart.forExport ? // force SVG, used for SVG export
				new SVGRenderer(container, chartWidth, chartHeight, optionsChart.style, true) :
				new Renderer(container, chartWidth, chartHeight, optionsChart.style);

		if (useCanVG) {
			// If we need canvg library, extend and configure the renderer
			// to get the tracker for translating mouse events
			chart.renderer.create(chart, container, chartWidth, chartHeight);
		}
		// Add a reference to the charts index
		chart.renderer.chartIndex = chart.index;
	},

	/**
	 * Calculate margins by rendering axis labels in a preliminary position. Title,
	 * subtitle and legend have already been rendered at this stage, but will be
	 * moved into their final positions
	 */
	getMargins: function (skipAxes) {
		var chart = this,
			spacing = chart.spacing,
			margin = chart.margin,
			titleOffset = chart.titleOffset;

		chart.resetMargins();

		// Adjust for title and subtitle
		if (titleOffset && !defined(margin[0])) {
			chart.plotTop = mathMax(chart.plotTop, titleOffset + chart.options.title.margin + spacing[0]);
		}
		
		// Adjust for legend
		chart.legend.adjustMargins(margin, spacing);

		// adjust for scroller
		if (chart.extraBottomMargin) {
			chart.marginBottom += chart.extraBottomMargin;
		}
		if (chart.extraTopMargin) {
			chart.plotTop += chart.extraTopMargin;
		}
		if (!skipAxes) {
			this.getAxisMargins();
		}
	},

	getAxisMargins: function () {

		var chart = this,
			axisOffset = chart.axisOffset = [0, 0, 0, 0], // top, right, bottom, left
			margin = chart.margin;
		
		// pre-render axes to get labels offset width
		if (chart.hasCartesianSeries) {
			each(chart.axes, function (axis) {
				axis.getOffset();
			});
		}

		// Add the axis offsets
		each(marginNames, function (m, side) {
			if (!defined(margin[side])) {
				chart[m] += axisOffset[side];
			}		
		});

		chart.setChartSize();

	},

	/**
	 * Resize the chart to its container if size is not explicitly set
	 */
	reflow: function (e) {
		var chart = this,
			optionsChart = chart.options.chart,
			renderTo = chart.renderTo,
			width = optionsChart.width || adapterRun(renderTo, 'width'),
			height = optionsChart.height || adapterRun(renderTo, 'height'),
			target = e ? e.target : win, // #805 - MooTools doesn't supply e
			doReflow = function () {
				if (chart.container) { // It may have been destroyed in the meantime (#1257)
					chart.setSize(width, height, false);
					chart.hasUserSize = null;
				}
			};
			
		// Width and height checks for display:none. Target is doc in IE8 and Opera,
		// win in Firefox, Chrome and IE9.
		if (!chart.hasUserSize && !chart.isPrinting && width && height && (target === win || target === doc)) { // #1093
			if (width !== chart.containerWidth || height !== chart.containerHeight) {
				clearTimeout(chart.reflowTimeout);
				if (e) { // Called from window.resize
					chart.reflowTimeout = setTimeout(doReflow, 100);
				} else { // Called directly (#2224)
					doReflow();
				}
			}
			chart.containerWidth = width;
			chart.containerHeight = height;
		}
	},

	/**
	 * Add the event handlers necessary for auto resizing
	 */
	initReflow: function () {
		var chart = this,
			reflow = function (e) {
				chart.reflow(e);
			};
			
		
		addEvent(win, 'resize', reflow);
		addEvent(chart, 'destroy', function () {
			removeEvent(win, 'resize', reflow);
		});
	},

	/**
	 * Resize the chart to a given width and height
	 * @param {Number} width
	 * @param {Number} height
	 * @param {Object|Boolean} animation
	 */
	setSize: function (width, height, animation) {
		var chart = this,
			chartWidth,
			chartHeight,
			fireEndResize;

		// Handle the isResizing counter
		chart.isResizing += 1;
		fireEndResize = function () {
			if (chart) {
				fireEvent(chart, 'endResize', null, function () {
					chart.isResizing -= 1;
				});
			}
		};

		// set the animation for the current process
		setAnimation(animation, chart);

		chart.oldChartHeight = chart.chartHeight;
		chart.oldChartWidth = chart.chartWidth;
		if (defined(width)) {
			chart.chartWidth = chartWidth = mathMax(0, mathRound(width));
			chart.hasUserSize = !!chartWidth;
		}
		if (defined(height)) {
			chart.chartHeight = chartHeight = mathMax(0, mathRound(height));
		}

		// Resize the container with the global animation applied if enabled (#2503)
		(globalAnimation ? animate : css)(chart.container, {
			width: chartWidth + PX,
			height: chartHeight + PX
		}, globalAnimation);

		chart.setChartSize(true);
		chart.renderer.setSize(chartWidth, chartHeight, animation);

		// handle axes
		chart.maxTicks = null;
		each(chart.axes, function (axis) {
			axis.isDirty = true;
			axis.setScale();
		});

		// make sure non-cartesian series are also handled
		each(chart.series, function (serie) {
			serie.isDirty = true;
		});

		chart.isDirtyLegend = true; // force legend redraw
		chart.isDirtyBox = true; // force redraw of plot and chart border

		chart.layOutTitles(); // #2857
		chart.getMargins();

		chart.redraw(animation);


		chart.oldChartHeight = null;
		fireEvent(chart, 'resize');

		// fire endResize and set isResizing back
		// If animation is disabled, fire without delay
		if (globalAnimation === false) {
			fireEndResize();
		} else { // else set a timeout with the animation duration
			setTimeout(fireEndResize, (globalAnimation && globalAnimation.duration) || 500);
		}
	},

	/**
	 * Set the public chart properties. This is done before and after the pre-render
	 * to determine margin sizes
	 */
	setChartSize: function (skipAxes) {
		var chart = this,
			inverted = chart.inverted,
			renderer = chart.renderer,
			chartWidth = chart.chartWidth,
			chartHeight = chart.chartHeight,
			optionsChart = chart.options.chart,
			spacing = chart.spacing,
			clipOffset = chart.clipOffset,
			clipX,
			clipY,
			plotLeft,
			plotTop,
			plotWidth,
			plotHeight,
			plotBorderWidth;

		chart.plotLeft = plotLeft = mathRound(chart.plotLeft);
		chart.plotTop = plotTop = mathRound(chart.plotTop);
		chart.plotWidth = plotWidth = mathMax(0, mathRound(chartWidth - plotLeft - chart.marginRight));
		chart.plotHeight = plotHeight = mathMax(0, mathRound(chartHeight - plotTop - chart.marginBottom));

		chart.plotSizeX = inverted ? plotHeight : plotWidth;
		chart.plotSizeY = inverted ? plotWidth : plotHeight;
		
		chart.plotBorderWidth = optionsChart.plotBorderWidth || 0;

		// Set boxes used for alignment
		chart.spacingBox = renderer.spacingBox = {
			x: spacing[3],
			y: spacing[0],
			width: chartWidth - spacing[3] - spacing[1],
			height: chartHeight - spacing[0] - spacing[2]
		};
		chart.plotBox = renderer.plotBox = {
			x: plotLeft,
			y: plotTop,
			width: plotWidth,
			height: plotHeight
		};

		plotBorderWidth = 2 * mathFloor(chart.plotBorderWidth / 2);
		clipX = mathCeil(mathMax(plotBorderWidth, clipOffset[3]) / 2);
		clipY = mathCeil(mathMax(plotBorderWidth, clipOffset[0]) / 2);
		chart.clipBox = {
			x: clipX, 
			y: clipY, 
			width: mathFloor(chart.plotSizeX - mathMax(plotBorderWidth, clipOffset[1]) / 2 - clipX), 
			height: mathMax(0, mathFloor(chart.plotSizeY - mathMax(plotBorderWidth, clipOffset[2]) / 2 - clipY))
		};

		if (!skipAxes) {
			each(chart.axes, function (axis) {
				axis.setAxisSize();
				axis.setAxisTranslation();
			});
		}
	},

	/**
	 * Initial margins before auto size margins are applied
	 */
	resetMargins: function () {
		var chart = this;

		each(marginNames, function (m, side) {
			chart[m] = pick(chart.margin[side], chart.spacing[side]);
		});
		chart.axisOffset = [0, 0, 0, 0]; // top, right, bottom, left
		chart.clipOffset = [0, 0, 0, 0];
	},

	/**
	 * Draw the borders and backgrounds for chart and plot area
	 */
	drawChartBox: function () {
		var chart = this,
			optionsChart = chart.options.chart,
			renderer = chart.renderer,
			chartWidth = chart.chartWidth,
			chartHeight = chart.chartHeight,
			chartBackground = chart.chartBackground,
			plotBackground = chart.plotBackground,
			plotBorder = chart.plotBorder,
			plotBGImage = chart.plotBGImage,
			chartBorderWidth = optionsChart.borderWidth || 0,
			chartBackgroundColor = optionsChart.backgroundColor,
			plotBackgroundColor = optionsChart.plotBackgroundColor,
			plotBackgroundImage = optionsChart.plotBackgroundImage,
			plotBorderWidth = optionsChart.plotBorderWidth || 0,
			mgn,
			bgAttr,
			plotLeft = chart.plotLeft,
			plotTop = chart.plotTop,
			plotWidth = chart.plotWidth,
			plotHeight = chart.plotHeight,
			plotBox = chart.plotBox,
			clipRect = chart.clipRect,
			clipBox = chart.clipBox;

		// Chart area
		mgn = chartBorderWidth + (optionsChart.shadow ? 8 : 0);

		if (chartBorderWidth || chartBackgroundColor) {
			if (!chartBackground) {
				
				bgAttr = {
					fill: chartBackgroundColor || NONE
				};
				if (chartBorderWidth) { // #980
					bgAttr.stroke = optionsChart.borderColor;
					bgAttr['stroke-width'] = chartBorderWidth;
				}
				chart.chartBackground = renderer.rect(mgn / 2, mgn / 2, chartWidth - mgn, chartHeight - mgn,
						optionsChart.borderRadius, chartBorderWidth)
					.attr(bgAttr)
					.addClass(PREFIX + 'background')
					.add()
					.shadow(optionsChart.shadow);

			} else { // resize
				chartBackground.animate(
					chartBackground.crisp({ width: chartWidth - mgn, height: chartHeight - mgn })
				);
			}
		}


		// Plot background
		if (plotBackgroundColor) {
			if (!plotBackground) {
				chart.plotBackground = renderer.rect(plotLeft, plotTop, plotWidth, plotHeight, 0)
					.attr({
						fill: plotBackgroundColor
					})
					.add()
					.shadow(optionsChart.plotShadow);
			} else {
				plotBackground.animate(plotBox);
			}
		}
		if (plotBackgroundImage) {
			if (!plotBGImage) {
				chart.plotBGImage = renderer.image(plotBackgroundImage, plotLeft, plotTop, plotWidth, plotHeight)
					.add();
			} else {
				plotBGImage.animate(plotBox);
			}
		}
		
		// Plot clip
		if (!clipRect) {
			chart.clipRect = renderer.clipRect(clipBox);
		} else {
			clipRect.animate({
				width: clipBox.width,
				height: clipBox.height
			});
		}

		// Plot area border
		if (plotBorderWidth) {
			if (!plotBorder) {
				chart.plotBorder = renderer.rect(plotLeft, plotTop, plotWidth, plotHeight, 0, -plotBorderWidth)
					.attr({
						stroke: optionsChart.plotBorderColor,
						'stroke-width': plotBorderWidth,
						fill: NONE,
						zIndex: 1
					})
					.add();
			} else {
				plotBorder.animate(
					plotBorder.crisp({ x: plotLeft, y: plotTop, width: plotWidth, height: plotHeight, strokeWidth: -plotBorderWidth }) //#3282 plotBorder should be negative
				);
			}
		}

		// reset
		chart.isDirtyBox = false;
	},

	/**
	 * Detect whether a certain chart property is needed based on inspecting its options
	 * and series. This mainly applies to the chart.invert property, and in extensions to 
	 * the chart.angular and chart.polar properties.
	 */
	propFromSeries: function () {
		var chart = this,
			optionsChart = chart.options.chart,
			klass,
			seriesOptions = chart.options.series,
			i,
			value;
			
			
		each(['inverted', 'angular', 'polar'], function (key) {
			
			// The default series type's class
			klass = seriesTypes[optionsChart.type || optionsChart.defaultSeriesType];
			
			// Get the value from available chart-wide properties
			value = (
				chart[key] || // 1. it is set before
				optionsChart[key] || // 2. it is set in the options
				(klass && klass.prototype[key]) // 3. it's default series class requires it
			);
	
			// 4. Check if any the chart's series require it
			i = seriesOptions && seriesOptions.length;
			while (!value && i--) {
				klass = seriesTypes[seriesOptions[i].type];
				if (klass && klass.prototype[key]) {
					value = true;
				}
			}
	
			// Set the chart property
			chart[key] = value;	
		});
		
	},

	/**
	 * Link two or more series together. This is done initially from Chart.render,
	 * and after Chart.addSeries and Series.remove.
	 */
	linkSeries: function () {
		var chart = this,
			chartSeries = chart.series;

		// Reset links
		each(chartSeries, function (series) {
			series.linkedSeries.length = 0;
		});

		// Apply new links
		each(chartSeries, function (series) {
			var linkedTo = series.options.linkedTo;
			if (isString(linkedTo)) {
				if (linkedTo === ':previous') {
					linkedTo = chart.series[series.index - 1];
				} else {
					linkedTo = chart.get(linkedTo);
				}
				if (linkedTo) {
					linkedTo.linkedSeries.push(series);
					series.linkedParent = linkedTo;
				}
			}
		});
	},

	/**
	 * Render series for the chart
	 */
	renderSeries: function () {
		each(this.series, function (serie) {
			serie.translate();
			serie.render();
		});
	},
		
	/**
	 * Render labels for the chart
	 */
	renderLabels: function () {
		var chart = this,
			labels = chart.options.labels;
		if (labels.items) {
			each(labels.items, function (label) {
				var style = extend(labels.style, label.style),
					x = pInt(style.left) + chart.plotLeft,
					y = pInt(style.top) + chart.plotTop + 12;

				// delete to prevent rewriting in IE
				delete style.left;
				delete style.top;

				chart.renderer.text(
					label.html,
					x,
					y
				)
				.attr({ zIndex: 2 })
				.css(style)
				.add();

			});
		}
	},

	/**
	 * Render all graphics for the chart
	 */
	render: function () {
		var chart = this,
			axes = chart.axes,
			renderer = chart.renderer,
			options = chart.options,
			tempWidth,
			tempHeight,
			redoHorizontal,
			redoVertical;

		// Title
		chart.setTitle();


		// Legend
		chart.legend = new Legend(chart, options.legend);

		chart.getStacks(); // render stacks

		// Get chart margins
		chart.getMargins(true);
		chart.setChartSize();

		// Record preliminary dimensions for later comparison
		tempWidth = chart.plotWidth;
		tempHeight = chart.plotHeight = chart.plotHeight - 13; // 13 is the most common height of X axis labels

		// Get margins by pre-rendering axes
		each(axes, function (axis) {
			axis.setScale();
		});
		chart.getAxisMargins();

		// If the plot area size has changed significantly, calculate tick positions again
		redoHorizontal = tempWidth / chart.plotWidth > 1.1;
		redoVertical = tempHeight / chart.plotHeight > 1.1;

		if (redoHorizontal || redoVertical) {

			chart.maxTicks = null; // reset for second pass
			each(axes, function (axis) {
				if ((axis.horiz && redoHorizontal) || (!axis.horiz && redoVertical)) {
					axis.setTickInterval(true); // update to reflect the new margins
				}
			});
			chart.getMargins(); // second pass to check for new labels
		}

		// Draw the borders and backgrounds
		chart.drawChartBox();		


		// Axes
		if (chart.hasCartesianSeries) {
			each(axes, function (axis) {
				axis.render();
			});
		}

		// The series
		if (!chart.seriesGroup) {
			chart.seriesGroup = renderer.g('series-group')
				.attr({ zIndex: 3 })
				.add();
		}
		chart.renderSeries();

		// Labels
		chart.renderLabels();

		// Credits
		chart.showCredits(options.credits);

		// Set flag
		chart.hasRendered = true;

	},

	/**
	 * Show chart credits based on config options
	 */
	showCredits: function (credits) {
		if (credits.enabled && !this.credits) {
			this.credits = this.renderer.text(
				credits.text,
				0,
				0
			)
			.on('click', function () {
				if (credits.href) {
					location.href = credits.href;
				}
			})
			.attr({
				align: credits.position.align,
				zIndex: 8
			})
			.css(credits.style)
			.add()
			.align(credits.position);
		}
	},

	/**
	 * Clean up memory usage
	 */
	destroy: function () {
		var chart = this,
			axes = chart.axes,
			series = chart.series,
			container = chart.container,
			i,
			parentNode = container && container.parentNode;
			
		// fire the chart.destoy event
		fireEvent(chart, 'destroy');
		
		// Delete the chart from charts lookup array
		charts[chart.index] = UNDEFINED;
		chartCount--;
		chart.renderTo.removeAttribute('data-highcharts-chart');

		// remove events
		removeEvent(chart);

		// ==== Destroy collections:
		// Destroy axes
		i = axes.length;
		while (i--) {
			axes[i] = axes[i].destroy();
		}

		// Destroy each series
		i = series.length;
		while (i--) {
			series[i] = series[i].destroy();
		}

		// ==== Destroy chart properties:
		each(['title', 'subtitle', 'chartBackground', 'plotBackground', 'plotBGImage', 
				'plotBorder', 'seriesGroup', 'clipRect', 'credits', 'pointer', 'scroller', 
				'rangeSelector', 'legend', 'resetZoomButton', 'tooltip', 'renderer'], function (name) {
			var prop = chart[name];

			if (prop && prop.destroy) {
				chart[name] = prop.destroy();
			}
		});

		// remove container and all SVG
		if (container) { // can break in IE when destroyed before finished loading
			container.innerHTML = '';
			removeEvent(container);
			if (parentNode) {
				discardElement(container);
			}

		}

		// clean it all up
		for (i in chart) {
			delete chart[i];
		}

	},


	/**
	 * VML namespaces can't be added until after complete. Listening
	 * for Perini's doScroll hack is not enough.
	 */
	isReadyToRender: function () {
		var chart = this;

		// Note: in spite of JSLint's complaints, win == win.top is required
		/*jslint eqeq: true*/
		if ((!hasSVG && (win == win.top && doc.readyState !== 'complete')) || (useCanVG && !win.canvg)) {
		/*jslint eqeq: false*/
			if (useCanVG) {
				// Delay rendering until canvg library is downloaded and ready
				CanVGController.push(function () { chart.firstRender(); }, chart.options.global.canvasToolsURL);
			} else {
				doc.attachEvent('onreadystatechange', function () {
					doc.detachEvent('onreadystatechange', chart.firstRender);
					if (doc.readyState === 'complete') {
						chart.firstRender();
					}
				});
			}
			return false;
		}
		return true;
	},

	/**
	 * Prepare for first rendering after all data are loaded
	 */
	firstRender: function () {
		var chart = this,
			options = chart.options,
			callback = chart.callback;

		// Check whether the chart is ready to render
		if (!chart.isReadyToRender()) {
			return;
		}

		// Create the container
		chart.getContainer();

		// Run an early event after the container and renderer are established
		fireEvent(chart, 'init');

		
		chart.resetMargins();
		chart.setChartSize();

		// Set the common chart properties (mainly invert) from the given series
		chart.propFromSeries();

		// get axes
		chart.getAxes();

		// Initialize the series
		each(options.series || [], function (serieOptions) {
			chart.initSeries(serieOptions);
		});

		chart.linkSeries();

		// Run an event after axes and series are initialized, but before render. At this stage,
		// the series data is indexed and cached in the xData and yData arrays, so we can access
		// those before rendering. Used in Highstock. 
		fireEvent(chart, 'beforeRender'); 

		// depends on inverted and on margins being set
		if (Highcharts.Pointer) {
			chart.pointer = new Pointer(chart, options);
		}

		chart.render();

		// add canvas
		chart.renderer.draw();
		// run callbacks
		if (callback) {
			callback.apply(chart, [chart]);
		}
		each(chart.callbacks, function (fn) {
			if (chart.index !== UNDEFINED) { // Chart destroyed in its own callback (#3600)
				fn.apply(chart, [chart]);
			}
		});
		
		// Fire the load event
		fireEvent(chart, 'load');		
		
		// If the chart was rendered outside the top container, put it back in (#3679)
		chart.cloneRenderTo(true);

	},

	/**
	* Creates arrays for spacing and margin from given options.
	*/
	splashArray: function (target, options) {
		var oVar = options[target],
			tArray = isObject(oVar) ? oVar : [oVar, oVar, oVar, oVar];

		return [pick(options[target + 'Top'], tArray[0]),
				pick(options[target + 'Right'], tArray[1]),
				pick(options[target + 'Bottom'], tArray[2]),
				pick(options[target + 'Left'], tArray[3])];
	}
}; // end Chart

var CenteredSeriesMixin = Highcharts.CenteredSeriesMixin = {
	/**
	 * Get the center of the pie based on the size and center options relative to the  
	 * plot area. Borrowed by the polar and gauge series types.
	 */
	getCenter: function () {
		
		var options = this.options,
			chart = this.chart,
			slicingRoom = 2 * (options.slicedOffset || 0),
			handleSlicingRoom,
			plotWidth = chart.plotWidth - 2 * slicingRoom,
			plotHeight = chart.plotHeight - 2 * slicingRoom,
			centerOption = options.center,
			positions = [pick(centerOption[0], '50%'), pick(centerOption[1], '50%'), options.size || '100%', options.innerSize || 0],
			smallestSize = mathMin(plotWidth, plotHeight),
			isPercent,
			i,
			value;

		for (i = 0; i < 4; ++i) {
			value = positions[i];
			isPercent = /%$/.test(value);
			handleSlicingRoom = i < 2 || (i === 2 && isPercent);
			positions[i] = (isPercent ?
				// i == 0: centerX, relative to width
				// i == 1: centerY, relative to height
				// i == 2: size, relative to smallestSize
				// i == 3: innerSize, relative to size
				[plotWidth, plotHeight, smallestSize, positions[2]][i] *
					pInt(value) / 100 :
				pInt(value)) + (handleSlicingRoom ? slicingRoom : 0);
		}
		return positions;
	}
};

/**
 * The Point object and prototype. Inheritable and used as base for PiePoint
 */
var Point = function () {};
Point.prototype = {

	/**
	 * Initialize the point
	 * @param {Object} series The series object containing this point
	 * @param {Object} options The data in either number, array or object format
	 */
	init: function (series, options, x) {

		var point = this,
			colors;
		point.series = series;
		point.color = series.color; // #3445
		point.applyOptions(options, x);
		point.pointAttr = {};

		if (series.options.colorByPoint) {
			colors = series.options.colors || series.chart.options.colors;
			point.color = point.color || colors[series.colorCounter++];
			// loop back to zero
			if (series.colorCounter === colors.length) {
				series.colorCounter = 0;
			}
		}

		series.chart.pointCount++;
		return point;
	},
	/**
	 * Apply the options containing the x and y data and possible some extra properties.
	 * This is called on point init or from point.update.
	 *
	 * @param {Object} options
	 */
	applyOptions: function (options, x) {
		var point = this,
			series = point.series,
			pointValKey = series.options.pointValKey || series.pointValKey;

		options = Point.prototype.optionsToObject.call(this, options);

		// copy options directly to point
		extend(point, options);
		point.options = point.options ? extend(point.options, options) : options;

		// For higher dimension series types. For instance, for ranges, point.y is mapped to point.low.
		if (pointValKey) {
			point.y = point[pointValKey];
		}

		// If no x is set by now, get auto incremented value. All points must have an
		// x value, however the y value can be null to create a gap in the series
		if (point.x === UNDEFINED && series) {
			point.x = x === UNDEFINED ? series.autoIncrement() : x;
		}

		return point;
	},

	/**
	 * Transform number or array configs into objects
	 */
	optionsToObject: function (options) {
		var ret = {},
			series = this.series,
			keys = series.options.keys, // docs: http://jsfiddle.net/ch4v7n8v/1
			pointArrayMap = keys || series.pointArrayMap || ['y'],
			valueCount = pointArrayMap.length,
			firstItemType,
			i = 0,
			j = 0;

		if (typeof options === 'number' || options === null) {
			ret[pointArrayMap[0]] = options;

		} else if (isArray(options)) {
			// with leading x value
			if (!keys && options.length > valueCount) {
				firstItemType = typeof options[0];
				if (firstItemType === 'string') {
					ret.name = options[0];
				} else if (firstItemType === 'number') {
					ret.x = options[0];
				}
				i++;
			}
			while (j < valueCount) {
				ret[pointArrayMap[j++]] = options[i++];
			}
		} else if (typeof options === 'object') {
			ret = options;

			// This is the fastest way to detect if there are individual point dataLabels that need
			// to be considered in drawDataLabels. These can only occur in object configs.
			if (options.dataLabels) {
				series._hasPointLabels = true;
			}

			// Same approach as above for markers
			if (options.marker) {
				series._hasPointMarkers = true;
			}
		}
		return ret;
	},

	/**
	 * Destroy a point to clear memory. Its reference still stays in series.data.
	 */
	destroy: function () {
		var point = this,
			series = point.series,
			chart = series.chart,
			hoverPoints = chart.hoverPoints,
			prop;

		chart.pointCount--;

		if (hoverPoints) {
			point.setState();
			erase(hoverPoints, point);
			if (!hoverPoints.length) {
				chart.hoverPoints = null;
			}

		}
		if (point === chart.hoverPoint) {
			point.onMouseOut();
		}

		// remove all events
		if (point.graphic || point.dataLabel) { // removeEvent and destroyElements are performance expensive
			removeEvent(point);
			point.destroyElements();
		}

		if (point.legendItem) { // pies have legend items
			chart.legend.destroyItem(point);
		}

		for (prop in point) {
			point[prop] = null;
		}


	},

	/**
	 * Destroy SVG elements associated with the point
	 */
	destroyElements: function () {
		var point = this,
			props = ['graphic', 'dataLabel', 'dataLabelUpper', 'group', 'connector', 'shadowGroup'],
			prop,
			i = 6;
		while (i--) {
			prop = props[i];
			if (point[prop]) {
				point[prop] = point[prop].destroy();
			}
		}
	},

	/**
	 * Return the configuration hash needed for the data label and tooltip formatters
	 */
	getLabelConfig: function () {
		var point = this;
		return {
			x: point.category,
			y: point.y,
			key: point.name || point.category,
			series: point.series,
			point: point,
			percentage: point.percentage,
			total: point.total || point.stackTotal
		};
	},	

	/**
	 * Extendable method for formatting each point's tooltip line
	 *
	 * @return {String} A string to be concatenated in to the common tooltip text
	 */
	tooltipFormatter: function (pointFormat) {

		// Insert options for valueDecimals, valuePrefix, and valueSuffix
		var series = this.series,
			seriesTooltipOptions = series.tooltipOptions,
			valueDecimals = pick(seriesTooltipOptions.valueDecimals, ''),
			valuePrefix = seriesTooltipOptions.valuePrefix || '',
			valueSuffix = seriesTooltipOptions.valueSuffix || '';

		// Loop over the point array map and replace unformatted values with sprintf formatting markup
		each(series.pointArrayMap || ['y'], function (key) {
			key = '{point.' + key; // without the closing bracket
			if (valuePrefix || valueSuffix) {
				pointFormat = pointFormat.replace(key + '}', valuePrefix + key + '}' + valueSuffix);
			}
			pointFormat = pointFormat.replace(key + '}', key + ':,.' + valueDecimals + 'f}');
		});

		return format(pointFormat, {
			point: this,
			series: this.series
		});
	},

	/**
	 * Fire an event on the Point object. Must not be renamed to fireEvent, as this
	 * causes a name clash in MooTools
	 * @param {String} eventType
	 * @param {Object} eventArgs Additional event arguments
	 * @param {Function} defaultFunction Default event handler
	 */
	firePointEvent: function (eventType, eventArgs, defaultFunction) {
		var point = this,
			series = this.series,
			seriesOptions = series.options;

		// load event handlers on demand to save time on mouseover/out
		if (seriesOptions.point.events[eventType] || (point.options && point.options.events && point.options.events[eventType])) {
			this.importEvents();
		}

		// add default handler if in selection mode
		if (eventType === 'click' && seriesOptions.allowPointSelect) {
			defaultFunction = function (event) {
				// Control key is for Windows, meta (= Cmd key) for Mac, Shift for Opera
				point.select(null, event.ctrlKey || event.metaKey || event.shiftKey);
			};
		}

		fireEvent(this, eventType, eventArgs, defaultFunction);
	}
};/**
 * @classDescription The base function which all other series types inherit from. The data in the series is stored
 * in various arrays.
 *
 * - First, series.options.data contains all the original config options for
 * each point whether added by options or methods like series.addPoint.
 * - Next, series.data contains those values converted to points, but in case the series data length
 * exceeds the cropThreshold, or if the data is grouped, series.data doesn't contain all the points. It
 * only contains the points that have been created on demand.
 * - Then there's series.points that contains all currently visible point objects. In case of cropping,
 * the cropped-away points are not part of this array. The series.points array starts at series.cropStart
 * compared to series.data and series.options.data. If however the series data is grouped, these can't
 * be correlated one to one.
 * - series.xData and series.processedXData contain clean x values, equivalent to series.data and series.points.
 * - series.yData and series.processedYData contain clean x values, equivalent to series.data and series.points.
 *
 * @param {Object} chart
 * @param {Object} options
 */
var Series = Highcharts.Series = function () {};

Series.prototype = {

	isCartesian: true,
	type: 'line',
	pointClass: Point,
	sorted: true, // requires the data to be sorted
	requireSorting: true,
	pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
		stroke: 'lineColor',
		'stroke-width': 'lineWidth',
		fill: 'fillColor',
		r: 'radius'
	},
	axisTypes: ['xAxis', 'yAxis'],
	colorCounter: 0,
	parallelArrays: ['x', 'y'], // each point's x and y values are stored in this.xData and this.yData
	init: function (chart, options) {
		var series = this,
			eventType,
			events,
			chartSeries = chart.series,
			sortByIndex = function (a, b) {
				return pick(a.options.index, a._i) - pick(b.options.index, b._i);
			};

		series.chart = chart;
		series.options = options = series.setOptions(options); // merge with plotOptions
		series.linkedSeries = [];

		// bind the axes
		series.bindAxes();

		// set some variables
		extend(series, {
			name: options.name,
			state: NORMAL_STATE,
			pointAttr: {},
			visible: options.visible !== false, // true by default
			selected: options.selected === true // false by default
		});

		// special
		if (useCanVG) {
			options.animation = false;
		}

		// register event listeners
		events = options.events;
		for (eventType in events) {
			addEvent(series, eventType, events[eventType]);
		}
		if (
			(events && events.click) ||
			(options.point && options.point.events && options.point.events.click) ||
			options.allowPointSelect
		) {
			chart.runTrackerClick = true;
		}

		series.getColor();
		series.getSymbol();

		// Set the data
		each(series.parallelArrays, function (key) {
			series[key + 'Data'] = [];
		});
		series.setData(options.data, false);

		// Mark cartesian
		if (series.isCartesian) {
			chart.hasCartesianSeries = true;
		}

		// Register it in the chart
		chartSeries.push(series);
		series._i = chartSeries.length - 1;

		// Sort series according to index option (#248, #1123, #2456)
		stableSort(chartSeries, sortByIndex);
		if (this.yAxis) {
			stableSort(this.yAxis.series, sortByIndex);
		}

		each(chartSeries, function (series, i) {
			series.index = i;
			series.name = series.name || 'Series ' + (i + 1);
		});

	},

	/**
	 * Set the xAxis and yAxis properties of cartesian series, and register the series
	 * in the axis.series array
	 */
	bindAxes: function () {
		var series = this,
			seriesOptions = series.options,
			chart = series.chart,
			axisOptions;

		each(series.axisTypes || [], function (AXIS) { // repeat for xAxis and yAxis

			each(chart[AXIS], function (axis) { // loop through the chart's axis objects
				axisOptions = axis.options;

				// apply if the series xAxis or yAxis option mathches the number of the
				// axis, or if undefined, use the first axis
				if ((seriesOptions[AXIS] === axisOptions.index) ||
						(seriesOptions[AXIS] !== UNDEFINED && seriesOptions[AXIS] === axisOptions.id) ||
						(seriesOptions[AXIS] === UNDEFINED && axisOptions.index === 0)) {

					// register this series in the axis.series lookup
					axis.series.push(series);

					// set this series.xAxis or series.yAxis reference
					series[AXIS] = axis;

					// mark dirty for redraw
					axis.isDirty = true;
				}
			});

			// The series needs an X and an Y axis
			if (!series[AXIS] && series.optionalAxis !== AXIS) {
				error(18, true);
			}

		});
	},

	/**
	 * For simple series types like line and column, the data values are held in arrays like
	 * xData and yData for quick lookup to find extremes and more. For multidimensional series
	 * like bubble and map, this can be extended with arrays like zData and valueData by
	 * adding to the series.parallelArrays array.
	 */
	updateParallelArrays: function (point, i) {
		var series = point.series,
			args = arguments,
			fn = typeof i === 'number' ?
				 // Insert the value in the given position
				function (key) {
					var val = key === 'y' && series.toYData ? series.toYData(point) : point[key];
					series[key + 'Data'][i] = val;
				} :
				// Apply the method specified in i with the following arguments as arguments
				function (key) {
					Array.prototype[i].apply(series[key + 'Data'], Array.prototype.slice.call(args, 2));
				};

		each(series.parallelArrays, fn);
	},

	/**
	 * Return an auto incremented x value based on the pointStart and pointInterval options.
	 * This is only used if an x value is not given for the point that calls autoIncrement.
	 */
	autoIncrement: function () {

		var options = this.options,
			xIncrement = this.xIncrement,
			date,
			pointInterval,
			pointIntervalUnit = options.pointIntervalUnit;
		
		xIncrement = pick(xIncrement, options.pointStart, 0);
		
		this.pointInterval = pointInterval = pick(this.pointInterval, options.pointInterval, 1);
		
		// Added code for pointInterval strings
		if (pointIntervalUnit === 'month' || pointIntervalUnit === 'year') {
			date = new Date(xIncrement);
			date = (pointIntervalUnit === 'month') ?
				+date[setMonth](date[getMonth]() + pointInterval) :
				+date[setFullYear](date[getFullYear]() + pointInterval);
			pointInterval = date - xIncrement;
		}
		
		this.xIncrement = xIncrement + pointInterval;
		return xIncrement;
	},

	/**
	 * Divide the series data into segments divided by null values.
	 */
	getSegments: function () {
		var series = this,
			lastNull = -1,
			segments = [],
			i,
			points = series.points,
			pointsLength = points.length;

		if (pointsLength) { // no action required for []

			// if connect nulls, just remove null points
			if (series.options.connectNulls) {
				i = pointsLength;
				while (i--) {
					if (points[i].y === null) {
						points.splice(i, 1);
					}
				}
				if (points.length) {
					segments = [points];
				}

			// else, split on null points
			} else {
				each(points, function (point, i) {
					if (point.y === null) {
						if (i > lastNull + 1) {
							segments.push(points.slice(lastNull + 1, i));
						}
						lastNull = i;
					} else if (i === pointsLength - 1) { // last value
						segments.push(points.slice(lastNull + 1, i + 1));
					}
				});
			}
		}

		// register it
		series.segments = segments;
	},

	/**
	 * Set the series options by merging from the options tree
	 * @param {Object} itemOptions
	 */
	setOptions: function (itemOptions) {
		var chart = this.chart,
			chartOptions = chart.options,
			plotOptions = chartOptions.plotOptions,
			userOptions = chart.userOptions || {},
			userPlotOptions = userOptions.plotOptions || {},
			typeOptions = plotOptions[this.type],
			options,
			zones;

		this.userOptions = itemOptions;

		// General series options take precedence over type options because otherwise, default
		// type options like column.animation would be overwritten by the general option.
		// But issues have been raised here (#3881), and the solution may be to distinguish 
		// between default option and userOptions like in the tooltip below.
		options = merge(
			typeOptions,
			plotOptions.series,
			itemOptions
		);

		// The tooltip options are merged between global and series specific options
		this.tooltipOptions = merge(
			defaultOptions.tooltip,
			defaultOptions.plotOptions[this.type].tooltip,
			userOptions.tooltip,
			userPlotOptions.series && userPlotOptions.series.tooltip,
			userPlotOptions[this.type] && userPlotOptions[this.type].tooltip,
			itemOptions.tooltip
		);

		// Delete marker object if not allowed (#1125)
		if (typeOptions.marker === null) {
			delete options.marker;
		}

		// Handle color zones
		this.zoneAxis = options.zoneAxis;
		zones = this.zones = (options.zones || []).slice();
		if ((options.negativeColor || options.negativeFillColor) && !options.zones) {
			zones.push({
				value: options[this.zoneAxis + 'Threshold'] || options.threshold || 0,
				color: options.negativeColor,
				fillColor: options.negativeFillColor
			});
		}
		if (zones.length) { // Push one extra zone for the rest
			if (defined(zones[zones.length - 1].value)) {
				zones.push({
					color: this.color,
					fillColor: this.fillColor
				});
			}
		}
		return options;
	},

	getCyclic: function (prop, value, defaults) {
		var i,
			userOptions = this.userOptions,
			indexName = '_' + prop + 'Index',
			counterName = prop + 'Counter';

		if (!value) {
			if (defined(userOptions[indexName])) { // after Series.update()
				i = userOptions[indexName];
			} else {
				userOptions[indexName] = i = this.chart[counterName] % defaults.length;
				this.chart[counterName] += 1;
			}
			value = defaults[i];
		}
		this[prop] = value;
	},

	/**
	 * Get the series' color
	 */
	getColor: function () {
		if (!this.options.colorByPoint) {
			this.getCyclic('color', this.options.color || defaultPlotOptions[this.type].color, this.chart.options.colors);
		}
	},
	/**
	 * Get the series' symbol
	 */
	getSymbol: function () {
		var seriesMarkerOption = this.options.marker;

		this.getCyclic('symbol', seriesMarkerOption.symbol, this.chart.options.symbols);

		// don't substract radius in image symbols (#604)
		if (/^url/.test(this.symbol)) {
			seriesMarkerOption.radius = 0;
		}
	},

	drawLegendSymbol: LegendSymbolMixin.drawLineMarker,

	/**
	 * Replace the series data with a new set of data
	 * @param {Object} data
	 * @param {Object} redraw
	 */
	setData: function (data, redraw, animation, updatePoints) {
		var series = this,
			oldData = series.points,
			oldDataLength = (oldData && oldData.length) || 0,
			dataLength,
			options = series.options,
			chart = series.chart,
			firstPoint = null,
			xAxis = series.xAxis,
			hasCategories = xAxis && !!xAxis.categories,
			i,
			turboThreshold = options.turboThreshold,
			pt,
			xData = this.xData,
			yData = this.yData,
			pointArrayMap = series.pointArrayMap,
			valueCount = pointArrayMap && pointArrayMap.length;

		data = data || [];
		dataLength = data.length;
		redraw = pick(redraw, true);

		// If the point count is the same as is was, just run Point.update which is
		// cheaper, allows animation, and keeps references to points.
		if (updatePoints !== false && dataLength && oldDataLength === dataLength && !series.cropped && !series.hasGroupedData && series.visible) {
			each(data, function (point, i) {
				oldData[i].update(point, false, null, false);
			});

		} else {

			// Reset properties
			series.xIncrement = null;
			series.pointRange = hasCategories ? 1 : options.pointRange;

			series.colorCounter = 0; // for series with colorByPoint (#1547)
			
			// Update parallel arrays
			each(this.parallelArrays, function (key) {
				series[key + 'Data'].length = 0;
			});

			// In turbo mode, only one- or twodimensional arrays of numbers are allowed. The
			// first value is tested, and we assume that all the rest are defined the same
			// way. Although the 'for' loops are similar, they are repeated inside each
			// if-else conditional for max performance.
			if (turboThreshold && dataLength > turboThreshold) {

				// find the first non-null point
				i = 0;
				while (firstPoint === null && i < dataLength) {
					firstPoint = data[i];
					i++;
				}


				if (isNumber(firstPoint)) { // assume all points are numbers
					var x = pick(options.pointStart, 0),
						pointInterval = pick(options.pointInterval, 1);

					for (i = 0; i < dataLength; i++) {
						xData[i] = x;
						yData[i] = data[i];
						x += pointInterval;
					}
					series.xIncrement = x;
				} else if (isArray(firstPoint)) { // assume all points are arrays
					if (valueCount) { // [x, low, high] or [x, o, h, l, c]
						for (i = 0; i < dataLength; i++) {
							pt = data[i];
							xData[i] = pt[0];
							yData[i] = pt.slice(1, valueCount + 1);
						}
					} else { // [x, y]
						for (i = 0; i < dataLength; i++) {
							pt = data[i];
							xData[i] = pt[0];
							yData[i] = pt[1];
						}
					}
				} else {
					error(12); // Highcharts expects configs to be numbers or arrays in turbo mode
				}
			} else {
				for (i = 0; i < dataLength; i++) {
					if (data[i] !== UNDEFINED) { // stray commas in oldIE
						pt = { series: series };
						series.pointClass.prototype.applyOptions.apply(pt, [data[i]]);
						series.updateParallelArrays(pt, i);
						if (hasCategories && pt.name) {
							xAxis.names[pt.x] = pt.name; // #2046
						}
					}
				}
			}

			// Forgetting to cast strings to numbers is a common caveat when handling CSV or JSON
			if (isString(yData[0])) {
				error(14, true);
			}

			series.data = [];
			series.options.data = data;
			//series.zData = zData;

			// destroy old points
			i = oldDataLength;
			while (i--) {
				if (oldData[i] && oldData[i].destroy) {
					oldData[i].destroy();
				}
			}

			// reset minRange (#878)
			if (xAxis) {
				xAxis.minRange = xAxis.userMinRange;
			}

			// redraw
			series.isDirty = series.isDirtyData = chart.isDirtyBox = true;
			animation = false;
		}

		if (redraw) {
			chart.redraw(animation);
		}
	},

	/**
	 * Process the data by cropping away unused data points if the series is longer
	 * than the crop threshold. This saves computing time for lage series.
	 */
	processData: function (force) {
		var series = this,
			processedXData = series.xData, // copied during slice operation below
			processedYData = series.yData,
			dataLength = processedXData.length,
			croppedData,
			cropStart = 0,
			cropped,
			distance,
			closestPointRange,
			xAxis = series.xAxis,
			i, // loop variable
			options = series.options,
			cropThreshold = options.cropThreshold,
			isCartesian = series.isCartesian,
			xExtremes,
			min,
			max;

		// If the series data or axes haven't changed, don't go through this. Return false to pass
		// the message on to override methods like in data grouping.
		if (isCartesian && !series.isDirty && !xAxis.isDirty && !series.yAxis.isDirty && !force) {
			return false;
		}

		if (xAxis) {
			xExtremes = xAxis.getExtremes(); // corrected for log axis (#3053)
			min = xExtremes.min;
			max = xExtremes.max;
		}

		// optionally filter out points outside the plot area
		if (isCartesian && series.sorted && (!cropThreshold || dataLength > cropThreshold || series.forceCrop)) {
			
			// it's outside current extremes
			if (processedXData[dataLength - 1] < min || processedXData[0] > max) {
				processedXData = [];
				processedYData = [];

			// only crop if it's actually spilling out
			} else if (processedXData[0] < min || processedXData[dataLength - 1] > max) {
				croppedData = this.cropData(series.xData, series.yData, min, max);
				processedXData = croppedData.xData;
				processedYData = croppedData.yData;
				cropStart = croppedData.start;
				cropped = true;
			}
		}


		// Find the closest distance between processed points
		for (i = processedXData.length - 1; i >= 0; i--) {
			distance = processedXData[i] - processedXData[i - 1];
			
			if (distance > 0 && (closestPointRange === UNDEFINED || distance < closestPointRange)) {
				closestPointRange = distance;

			// Unsorted data is not supported by the line tooltip, as well as data grouping and
			// navigation in Stock charts (#725) and width calculation of columns (#1900)
			} else if (distance < 0 && series.requireSorting) {
				error(15);
			}
		}

		// Record the properties
		series.cropped = cropped; // undefined or true
		series.cropStart = cropStart;
		series.processedXData = processedXData;
		series.processedYData = processedYData;

		if (options.pointRange === null) { // null means auto, as for columns, candlesticks and OHLC
			series.pointRange = closestPointRange || 1;
		}
		series.closestPointRange = closestPointRange;

	},

	/**
	 * Iterate over xData and crop values between min and max. Returns object containing crop start/end
	 * cropped xData with corresponding part of yData, dataMin and dataMax within the cropped range
	 */
	cropData: function (xData, yData, min, max) {
		var dataLength = xData.length,
			cropStart = 0,
			cropEnd = dataLength,
			cropShoulder = pick(this.cropShoulder, 1), // line-type series need one point outside
			i;

		// iterate up to find slice start
		for (i = 0; i < dataLength; i++) {
			if (xData[i] >= min) {
				cropStart = mathMax(0, i - cropShoulder);
				break;
			}
		}

		// proceed to find slice end
		for (; i < dataLength; i++) {
			if (xData[i] > max) {
				cropEnd = i + cropShoulder;
				break;
			}
		}

		return {
			xData: xData.slice(cropStart, cropEnd),
			yData: yData.slice(cropStart, cropEnd),
			start: cropStart,
			end: cropEnd
		};
	},


	/**
	 * Generate the data point after the data has been processed by cropping away
	 * unused points and optionally grouped in Highcharts Stock.
	 */
	generatePoints: function () {
		var series = this,
			options = series.options,
			dataOptions = options.data,
			data = series.data,
			dataLength,
			processedXData = series.processedXData,
			processedYData = series.processedYData,
			pointClass = series.pointClass,
			processedDataLength = processedXData.length,
			cropStart = series.cropStart || 0,
			cursor,
			hasGroupedData = series.hasGroupedData,
			point,
			points = [],
			i;

		if (!data && !hasGroupedData) {
			var arr = [];
			arr.length = dataOptions.length;
			data = series.data = arr;
		}

		for (i = 0; i < processedDataLength; i++) {
			cursor = cropStart + i;
			if (!hasGroupedData) {
				if (data[cursor]) {
					point = data[cursor];
				} else if (dataOptions[cursor] !== UNDEFINED) { // #970
					data[cursor] = point = (new pointClass()).init(series, dataOptions[cursor], processedXData[i]);
				}
				points[i] = point;
			} else {
				// splat the y data in case of ohlc data array
				points[i] = (new pointClass()).init(series, [processedXData[i]].concat(splat(processedYData[i])));
			}
			points[i].index = cursor; // For faster access in Point.update
		}

		// Hide cropped-away points - this only runs when the number of points is above cropThreshold, or when
		// swithching view from non-grouped data to grouped data (#637)
		if (data && (processedDataLength !== (dataLength = data.length) || hasGroupedData)) {
			for (i = 0; i < dataLength; i++) {
				if (i === cropStart && !hasGroupedData) { // when has grouped data, clear all points
					i += processedDataLength;
				}
				if (data[i]) {
					data[i].destroyElements();
					data[i].plotX = UNDEFINED; // #1003
				}
			}
		}

		series.data = data;
		series.points = points;
	},

	/**
	 * Calculate Y extremes for visible data
	 */
	getExtremes: function (yData) {
		var xAxis = this.xAxis,
			yAxis = this.yAxis,
			xData = this.processedXData,
			yDataLength,
			activeYData = [],
			activeCounter = 0,
			xExtremes = xAxis.getExtremes(), // #2117, need to compensate for log X axis
			xMin = xExtremes.min,
			xMax = xExtremes.max,
			validValue,
			withinRange,
			x,
			y,
			i,
			j;

		yData = yData || this.stackedYData || this.processedYData;
		yDataLength = yData.length;

		for (i = 0; i < yDataLength; i++) {

			x = xData[i];
			y = yData[i];

			// For points within the visible range, including the first point outside the
			// visible range, consider y extremes
			validValue = y !== null && y !== UNDEFINED && (!yAxis.isLog || (y.length || y > 0));
			withinRange = this.getExtremesFromAll || this.cropped || ((xData[i + 1] || x) >= xMin &&
				(xData[i - 1] || x) <= xMax);

			if (validValue && withinRange) {

				j = y.length;
				if (j) { // array, like ohlc or range data
					while (j--) {
						if (y[j] !== null) {
							activeYData[activeCounter++] = y[j];
						}
					}
				} else {
					activeYData[activeCounter++] = y;
				}
			}
		}
		this.dataMin = arrayMin(activeYData);
		this.dataMax = arrayMax(activeYData);
	},

	/**
	 * Translate data points from raw data values to chart specific positioning data
	 * needed later in drawPoints, drawGraph and drawTracker.
	 */
	translate: function () {
		if (!this.processedXData) { // hidden series
			this.processData();
		}
		this.generatePoints();
		var series = this,
			options = series.options,
			stacking = options.stacking,
			xAxis = series.xAxis,
			categories = xAxis.categories,
			yAxis = series.yAxis,
			points = series.points,
			dataLength = points.length,
			hasModifyValue = !!series.modifyValue,
			i,
			pointPlacement = options.pointPlacement,
			dynamicallyPlaced = pointPlacement === 'between' || isNumber(pointPlacement),
			threshold = options.threshold,
			plotX,
			plotY,
			lastPlotX,
			closestPointRangePx = Number.MAX_VALUE;

		// Translate each point
		for (i = 0; i < dataLength; i++) {
			var point = points[i],
				xValue = point.x,
				yValue = point.y,
				yBottom = point.low,
				stack = stacking && yAxis.stacks[(series.negStacks && yValue < threshold ? '-' : '') + series.stackKey],
				pointStack,
				stackValues;

			// Discard disallowed y values for log axes (#3434)
			if (yAxis.isLog && yValue !== null && yValue <= 0) {
				point.y = yValue = null;
				error(10);
			}

			// Get the plotX translation
			point.plotX = plotX = xAxis.translate(xValue, 0, 0, 0, 1, pointPlacement, this.type === 'flags'); // Math.round fixes #591


			// Calculate the bottom y value for stacked series
			if (stacking && series.visible && stack && stack[xValue]) {

				pointStack = stack[xValue];
				stackValues = pointStack.points[series.index + ',' + i];
				yBottom = stackValues[0];
				yValue = stackValues[1];

				if (yBottom === 0) {
					yBottom = pick(threshold, yAxis.min);
				}
				if (yAxis.isLog && yBottom <= 0) { // #1200, #1232
					yBottom = null;
				}

				point.total = point.stackTotal = pointStack.total;
				point.percentage = pointStack.total && (point.y / pointStack.total * 100);
				point.stackY = yValue;

				// Place the stack label
				pointStack.setOffset(series.pointXOffset || 0, series.barW || 0);

			}

			// Set translated yBottom or remove it
			point.yBottom = defined(yBottom) ?
				yAxis.translate(yBottom, 0, 1, 0, 1) :
				null;

			// general hook, used for Highstock compare mode
			if (hasModifyValue) {
				yValue = series.modifyValue(yValue, point);
			}

			// Set the the plotY value, reset it for redraws
			point.plotY = plotY = (typeof yValue === 'number' && yValue !== Infinity) ?
				mathMin(mathMax(-1e5, yAxis.translate(yValue, 0, 1, 0, 1)), 1e5) : // #3201
				UNDEFINED;
			point.isInside = plotY !== UNDEFINED && plotY >= 0 && plotY <= yAxis.len && // #3519
				plotX >= 0 && plotX <= xAxis.len;


			// Set client related positions for mouse tracking
			point.clientX = dynamicallyPlaced ? xAxis.translate(xValue, 0, 0, 0, 1) : plotX; // #1514

			point.negative = point.y < (threshold || 0);

			// some API data
			point.category = categories && categories[point.x] !== UNDEFINED ?
				categories[point.x] : point.x;

			// Determine auto enabling of markers (#3635)
			if (i) {
				closestPointRangePx = mathMin(closestPointRangePx, mathAbs(plotX - lastPlotX));
			}
			lastPlotX = plotX;

		}

		series.closestPointRangePx = closestPointRangePx;

		// now that we have the cropped data, build the segments
		series.getSegments();
	},

	/**
	 * Set the clipping for the series. For animated series it is called twice, first to initiate
	 * animating the clip then the second time without the animation to set the final clip.
	 */
	setClip: function (animation) {
		var chart = this.chart,
			renderer = chart.renderer,
			inverted = chart.inverted,
			seriesClipBox = this.clipBox,
			clipBox = seriesClipBox || chart.clipBox,
			sharedClipKey = this.sharedClipKey || ['_sharedClip', animation && animation.duration, animation && animation.easing, clipBox.height].join(','),
			clipRect = chart[sharedClipKey],
			markerClipRect = chart[sharedClipKey + 'm'];

		// If a clipping rectangle with the same properties is currently present in the chart, use that.
		if (!clipRect) {

			// When animation is set, prepare the initial positions
			if (animation) { 
				clipBox.width = 0;

				chart[sharedClipKey + 'm'] = markerClipRect = renderer.clipRect(
					-99, // include the width of the first marker
					inverted ? -chart.plotLeft : -chart.plotTop,
					99,
					inverted ? chart.chartWidth : chart.chartHeight
				);
			}
			chart[sharedClipKey] = clipRect = renderer.clipRect(clipBox);
			
		}
		if (animation) {
			clipRect.count += 1;
		}

		if (this.options.clip !== false) {
			this.group.clip(animation || seriesClipBox ? clipRect : chart.clipRect);
			this.markerGroup.clip(markerClipRect);
			this.sharedClipKey = sharedClipKey;
		}

		// Remove the shared clipping rectangle when all series are shown
		if (!animation) {
			clipRect.count -= 1;
			if (clipRect.count <= 0 && sharedClipKey && chart[sharedClipKey]) {
				if (!seriesClipBox) {
					chart[sharedClipKey] = chart[sharedClipKey].destroy();
				}
				if (chart[sharedClipKey + 'm']) {
					chart[sharedClipKey + 'm'] = chart[sharedClipKey + 'm'].destroy();
				}
			}
		}
	},

	/**
	 * Animate in the series
	 */
	animate: function (init) {
		var series = this,
			chart = series.chart,
			clipRect,
			animation = series.options.animation,
			sharedClipKey;

		// Animation option is set to true
		if (animation && !isObject(animation)) {
			animation = defaultPlotOptions[series.type].animation;
		}

		// Initialize the animation. Set up the clipping rectangle.
		if (init) {

			series.setClip(animation);

		// Run the animation
		} else {
			sharedClipKey = this.sharedClipKey;
			clipRect = chart[sharedClipKey];
			if (clipRect) {
				clipRect.animate({
					width: chart.plotSizeX
				}, animation);
			}
			if (chart[sharedClipKey + 'm']) {
				chart[sharedClipKey + 'm'].animate({
					width: chart.plotSizeX + 99
				}, animation);
			}

			// Delete this function to allow it only once
			series.animate = null;
 
		}
	},

	/**
	 * This runs after animation to land on the final plot clipping
	 */
	afterAnimate: function () {
		this.setClip();
		fireEvent(this, 'afterAnimate');
	},

	/**
	 * Draw the markers
	 */
	drawPoints: function () {
		var series = this,
			pointAttr,
			points = series.points,
			chart = series.chart,
			plotX,
			plotY,
			i,
			point,
			radius,
			symbol,
			isImage,
			graphic,
			options = series.options,
			seriesMarkerOptions = options.marker,
			seriesPointAttr = series.pointAttr[''],
			pointMarkerOptions,
			hasPointMarker,
			enabled,
			isInside,
			markerGroup = series.markerGroup,
			xAxis = series.xAxis,
			globallyEnabled = pick(
				seriesMarkerOptions.enabled, 
				xAxis.isRadial,
				series.closestPointRangePx > 2 * seriesMarkerOptions.radius
			);

		if (seriesMarkerOptions.enabled !== false || series._hasPointMarkers) {

			i = points.length;
			while (i--) {
				point = points[i];
				plotX = mathFloor(point.plotX); // #1843
				plotY = point.plotY;
				graphic = point.graphic;
				pointMarkerOptions = point.marker || {};
				hasPointMarker = !!point.marker;
				enabled = (globallyEnabled && pointMarkerOptions.enabled === UNDEFINED) || pointMarkerOptions.enabled;
				isInside = point.isInside;

				// only draw the point if y is defined
				if (enabled && plotY !== UNDEFINED && !isNaN(plotY) && point.y !== null) {

					// shortcuts
					pointAttr = point.pointAttr[point.selected ? SELECT_STATE : NORMAL_STATE] || seriesPointAttr;
					radius = pointAttr.r;
					symbol = pick(pointMarkerOptions.symbol, series.symbol);
					isImage = symbol.indexOf('url') === 0;

					if (graphic) { // update
						graphic[isInside ? 'show' : 'hide'](true) // Since the marker group isn't clipped, each individual marker must be toggled
							.animate(extend({
								x: plotX - radius,
								y: plotY - radius
							}, graphic.symbolName ? { // don't apply to image symbols #507
								width: 2 * radius,
								height: 2 * radius
							} : {}));
					} else if (isInside && (radius > 0 || isImage)) {
						point.graphic = graphic = chart.renderer.symbol(
							symbol,
							plotX - radius,
							plotY - radius,
							2 * radius,
							2 * radius,
							hasPointMarker ? pointMarkerOptions : seriesMarkerOptions
						)
						.attr(pointAttr)
						.add(markerGroup);
					}

				} else if (graphic) {
					point.graphic = graphic.destroy(); // #1269
				}
			}
		}

	},

	/**
	 * Convert state properties from API naming conventions to SVG attributes
	 *
	 * @param {Object} options API options object
	 * @param {Object} base1 SVG attribute object to inherit from
	 * @param {Object} base2 Second level SVG attribute object to inherit from
	 */
	convertAttribs: function (options, base1, base2, base3) {
		var conversion = this.pointAttrToOptions,
			attr,
			option,
			obj = {};

		options = options || {};
		base1 = base1 || {};
		base2 = base2 || {};
		base3 = base3 || {};

		for (attr in conversion) {
			option = conversion[attr];
			obj[attr] = pick(options[option], base1[attr], base2[attr], base3[attr]);
		}
		return obj;
	},

	/**
	 * Get the state attributes. Each series type has its own set of attributes
	 * that are allowed to change on a point's state change. Series wide attributes are stored for
	 * all series, and additionally point specific attributes are stored for all
	 * points with individual marker options. If such options are not defined for the point,
	 * a reference to the series wide attributes is stored in point.pointAttr.
	 */
	getAttribs: function () {
		var series = this,
			seriesOptions = series.options,
			normalOptions = defaultPlotOptions[series.type].marker ? seriesOptions.marker : seriesOptions,
			stateOptions = normalOptions.states,
			stateOptionsHover = stateOptions[HOVER_STATE],
			pointStateOptionsHover,
			seriesColor = series.color,
			seriesNegativeColor = series.options.negativeColor,
			normalDefaults = {
				stroke: seriesColor,
				fill: seriesColor
			},
			points = series.points || [], // #927
			i,
			point,
			seriesPointAttr = [],
			pointAttr,
			pointAttrToOptions = series.pointAttrToOptions,
			hasPointSpecificOptions = series.hasPointSpecificOptions,
			defaultLineColor = normalOptions.lineColor,
			defaultFillColor = normalOptions.fillColor,
			turboThreshold = seriesOptions.turboThreshold,
			zones = series.zones,
			zoneAxis = series.zoneAxis || 'y',
			attr,
			key;

		// series type specific modifications
		if (seriesOptions.marker) { // line, spline, area, areaspline, scatter

			// if no hover radius is given, default to normal radius + 2
			stateOptionsHover.radius = stateOptionsHover.radius || normalOptions.radius + stateOptionsHover.radiusPlus;
			stateOptionsHover.lineWidth = stateOptionsHover.lineWidth || normalOptions.lineWidth + stateOptionsHover.lineWidthPlus;

		} else { // column, bar, pie

			// if no hover color is given, brighten the normal color
			stateOptionsHover.color = stateOptionsHover.color ||
				Color(stateOptionsHover.color || seriesColor)
					.brighten(stateOptionsHover.brightness).get();

			// if no hover negativeColor is given, brighten the normal negativeColor
			stateOptionsHover.negativeColor = stateOptionsHover.negativeColor ||
				Color(stateOptionsHover.negativeColor || seriesNegativeColor)
					.brighten(stateOptionsHover.brightness).get();
		}

		// general point attributes for the series normal state
		seriesPointAttr[NORMAL_STATE] = series.convertAttribs(normalOptions, normalDefaults);

		// HOVER_STATE and SELECT_STATE states inherit from normal state except the default radius
		each([HOVER_STATE, SELECT_STATE], function (state) {
			seriesPointAttr[state] =
					series.convertAttribs(stateOptions[state], seriesPointAttr[NORMAL_STATE]);
		});

		// set it
		series.pointAttr = seriesPointAttr;


		// Generate the point-specific attribute collections if specific point
		// options are given. If not, create a referance to the series wide point
		// attributes
		i = points.length;
		if (!turboThreshold || i < turboThreshold || hasPointSpecificOptions) {
			while (i--) {
				point = points[i];
				normalOptions = (point.options && point.options.marker) || point.options;
				if (normalOptions && normalOptions.enabled === false) {
					normalOptions.radius = 0;
				}

				if (zones.length) {
					var j = 0,
						threshold = zones[j];
					while (point[zoneAxis] >= threshold.value) {				
						threshold = zones[++j];
					}
					
					point.color = point.fillColor = threshold.color;
				}

				hasPointSpecificOptions = seriesOptions.colorByPoint || point.color; // #868

				// check if the point has specific visual options
				if (point.options) {
					for (key in pointAttrToOptions) {
						if (defined(normalOptions[pointAttrToOptions[key]])) {
							hasPointSpecificOptions = true;
						}
					}
				}

				// a specific marker config object is defined for the individual point:
				// create it's own attribute collection
				if (hasPointSpecificOptions) {
					normalOptions = normalOptions || {};
					pointAttr = [];
					stateOptions = normalOptions.states || {}; // reassign for individual point
					pointStateOptionsHover = stateOptions[HOVER_STATE] = stateOptions[HOVER_STATE] || {};

					// Handle colors for column and pies
					if (!seriesOptions.marker) { // column, bar, point
						// If no hover color is given, brighten the normal color. #1619, #2579
						pointStateOptionsHover.color = pointStateOptionsHover.color || (!point.options.color && stateOptionsHover[(point.negative && seriesNegativeColor ? 'negativeColor' : 'color')]) ||
							Color(point.color)
								.brighten(pointStateOptionsHover.brightness || stateOptionsHover.brightness)
								.get();
					}

					// normal point state inherits series wide normal state
					attr = { color: point.color }; // #868
					if (!defaultFillColor) { // Individual point color or negative color markers (#2219)
						attr.fillColor = point.color;
					}
					if (!defaultLineColor) {
						attr.lineColor = point.color; // Bubbles take point color, line markers use white
					}
					// Color is explicitly set to null or undefined (#1288, #4068)
					if (normalOptions.hasOwnProperty('color') && !normalOptions.color) {
						delete normalOptions.color;
					}
					pointAttr[NORMAL_STATE] = series.convertAttribs(extend(attr, normalOptions), seriesPointAttr[NORMAL_STATE]);

					// inherit from point normal and series hover
					pointAttr[HOVER_STATE] = series.convertAttribs(
						stateOptions[HOVER_STATE],
						seriesPointAttr[HOVER_STATE],
						pointAttr[NORMAL_STATE]
					);

					// inherit from point normal and series hover
					pointAttr[SELECT_STATE] = series.convertAttribs(
						stateOptions[SELECT_STATE],
						seriesPointAttr[SELECT_STATE],
						pointAttr[NORMAL_STATE]
					);


				// no marker config object is created: copy a reference to the series-wide
				// attribute collection
				} else {
					pointAttr = seriesPointAttr;
				}

				point.pointAttr = pointAttr;
			}
		}
	},

	/**
	 * Clear DOM objects and free up memory
	 */
	destroy: function () {
		var series = this,
			chart = series.chart,
			issue134 = /AppleWebKit\/533/.test(userAgent),
			destroy,
			i,
			data = series.data || [],
			point,
			prop,
			axis;

		// add event hook
		fireEvent(series, 'destroy');

		// remove all events
		removeEvent(series);

		// erase from axes
		each(series.axisTypes || [], function (AXIS) {
			axis = series[AXIS];
			if (axis) {
				erase(axis.series, series);
				axis.isDirty = axis.forceRedraw = true;
			}
		});

		// remove legend items
		if (series.legendItem) {
			series.chart.legend.destroyItem(series);
		}

		// destroy all points with their elements
		i = data.length;
		while (i--) {
			point = data[i];
			if (point && point.destroy) {
				point.destroy();
			}
		}
		series.points = null;

		// Clear the animation timeout if we are destroying the series during initial animation
		clearTimeout(series.animationTimeout);

		// Destroy all SVGElements associated to the series
		for (prop in series) {
			if (series[prop] instanceof SVGElement && !series[prop].survive) { // Survive provides a hook for not destroying

				// issue 134 workaround
				destroy = issue134 && prop === 'group' ?
					'hide' :
					'destroy';

				series[prop][destroy]();
			}
		}

		// remove from hoverSeries
		if (chart.hoverSeries === series) {
			chart.hoverSeries = null;
		}
		erase(chart.series, series);

		// clear all members
		for (prop in series) {
			delete series[prop];
		}
	},

	/**
	 * Return the graph path of a segment
	 */
	getSegmentPath: function (segment) {
		var series = this,
			segmentPath = [],
			step = series.options.step;

		// build the segment line
		each(segment, function (point, i) {

			var plotX = point.plotX,
				plotY = point.plotY,
				lastPoint;

			if (series.getPointSpline) { // generate the spline as defined in the SplineSeries object
				segmentPath.push.apply(segmentPath, series.getPointSpline(segment, point, i));

			} else {

				// moveTo or lineTo
				segmentPath.push(i ? L : M);

				// step line?
				if (step && i) {
					lastPoint = segment[i - 1];
					if (step === 'right') {
						segmentPath.push(
							lastPoint.plotX,
							plotY
						);

					} else if (step === 'center') {
						segmentPath.push(
							(lastPoint.plotX + plotX) / 2,
							lastPoint.plotY,
							(lastPoint.plotX + plotX) / 2,
							plotY
						);

					} else {
						segmentPath.push(
							plotX,
							lastPoint.plotY
						);
					}
				}

				// normal line to next point
				segmentPath.push(
					point.plotX,
					point.plotY
				);
			}
		});

		return segmentPath;
	},

	/**
	 * Get the graph path
	 */
	getGraphPath: function () {
		var series = this,
			graphPath = [],
			segmentPath,
			singlePoints = []; // used in drawTracker

		// Divide into segments and build graph and area paths
		each(series.segments, function (segment) {

			segmentPath = series.getSegmentPath(segment);

			// add the segment to the graph, or a single point for tracking
			if (segment.length > 1) {
				graphPath = graphPath.concat(segmentPath);
			} else {
				singlePoints.push(segment[0]);
			}
		});

		// Record it for use in drawGraph and drawTracker, and return graphPath
		series.singlePoints = singlePoints;
		series.graphPath = graphPath;

		return graphPath;

	},

	/**
	 * Draw the actual graph
	 */
	drawGraph: function () {
		var series = this,
			options = this.options,
			props = [['graph', options.lineColor || this.color, options.dashStyle]],
			lineWidth = options.lineWidth,
			roundCap = options.linecap !== 'square',
			graphPath = this.getGraphPath(),
			fillColor = (this.fillGraph && this.color) || NONE, // polygon series use filled graph
			zones = this.zones;

		each(zones, function (threshold, i) {
			props.push(['zoneGraph' + i, threshold.color || series.color, threshold.dashStyle || options.dashStyle]);
		});
		
		// Draw the graph
		each(props, function (prop, i) {
			var graphKey = prop[0],
				graph = series[graphKey],
				attribs;

			if (graph) {
				stop(graph); // cancel running animations, #459
				graph.animate({ d: graphPath });

			} else if ((lineWidth || fillColor) && graphPath.length) { // #1487
				attribs = {
					stroke: prop[1],
					'stroke-width': lineWidth,
					fill: fillColor,
					zIndex: 1 // #1069
				};
				if (prop[2]) {
					attribs.dashstyle = prop[2];
				} else if (roundCap) {
					attribs['stroke-linecap'] = attribs['stroke-linejoin'] = 'round';
				}

				series[graphKey] = series.chart.renderer.path(graphPath)
					.attr(attribs)
					.add(series.group)
					.shadow((i < 2) && options.shadow); // add shadow to normal series (0) or to first zone (1) #3932
			}
		});
	},

	/**
	 * Clip the graphs into the positive and negative coloured graphs
	 */
	applyZones: function () {
		var series = this,
			chart = this.chart,
			renderer = chart.renderer,
			zones = this.zones,
			translatedFrom,
			translatedTo,
			clips = this.clips || [],
			clipAttr,
			graph = this.graph,
			area = this.area,
			chartSizeMax = mathMax(chart.chartWidth, chart.chartHeight),
			zoneAxis = this.zoneAxis || 'y',
			axis = this[zoneAxis + 'Axis'],
			reversed = axis.reversed,
			horiz = axis.horiz,
			ignoreZones = false;

		if (zones.length && (graph || area)) {
			// The use of the Color Threshold assumes there are no gaps
			// so it is safe to hide the original graph and area
			if (graph) {
				graph.hide();
			}
			if (area) { 
				area.hide(); 
			}

			// Create the clips
			each(zones, function (threshold, i) {
				translatedFrom = pick(translatedTo, (reversed ? (horiz ? chart.plotWidth : 0) : (horiz ? 0 : axis.toPixels(axis.min))));
				translatedTo = mathRound(axis.toPixels(pick(threshold.value, axis.max), true));

				if (axis.isXAxis) {
					translatedFrom = translatedFrom > translatedTo ? translatedTo : translatedFrom; //#4006 from should be less or equal then to
				} else {
					translatedFrom = translatedFrom < translatedTo ? translatedTo : translatedFrom; //#4006 from should be less or equal then to
				}

				if (ignoreZones) {
					translatedFrom = translatedTo = axis.toPixels(axis.max);
				}

				if (axis.isXAxis) {
					clipAttr = {
						x: reversed ? translatedTo : translatedFrom,
						y: 0,
						width: Math.abs(translatedFrom - translatedTo), 
						height: chartSizeMax
					};
					if (!horiz) {
						clipAttr.x = chart.plotHeight - clipAttr.x;
					}
				} else {
					clipAttr = {
						x: 0,
						y: reversed ? translatedFrom : translatedTo,
						width: chartSizeMax, 
						height: Math.abs(translatedFrom - translatedTo)
					};
					if (horiz) {
						clipAttr.y = chart.plotWidth - clipAttr.y;
					}
				} 

				/// VML SUPPPORT
				if (chart.inverted && renderer.isVML) {
					if (axis.isXAxis) {			
						clipAttr = {
							x: 0,
							y: reversed ? translatedFrom : translatedTo,
							height: clipAttr.width,
							width: chart.chartWidth
						};		
					} else {				
						clipAttr = {
							x: clipAttr.y - chart.plotLeft - chart.spacingBox.x,
							y: 0,
							width: clipAttr.height,
							height: chart.chartHeight
						};	
					}				
				}
				/// END OF VML SUPPORT

				if (clips[i]) {
					clips[i].animate(clipAttr);
				} else {
					clips[i] = renderer.clipRect(clipAttr);

					if (graph) {
						series['zoneGraph' + i].clip(clips[i]);
					}

					if (area) {
						series['zoneArea' + i].clip(clips[i]);
					}
				}
				// if this zone extends out of the axis, ignore the others
				ignoreZones = threshold.value > axis.max;
			});
			this.clips = clips;
		}
	},

	/**
	 * Initialize and perform group inversion on series.group and series.markerGroup
	 */
	invertGroups: function () {
		var series = this,
			chart = series.chart;

		// Pie, go away (#1736)
		if (!series.xAxis) {
			return;
		}

		// A fixed size is needed for inversion to work
		function setInvert() {
			var size = {
				width: series.yAxis.len,
				height: series.xAxis.len
			};

			each(['group', 'markerGroup'], function (groupName) {
				if (series[groupName]) {
					series[groupName].attr(size).invert();
				}
			});
		}

		addEvent(chart, 'resize', setInvert); // do it on resize
		addEvent(series, 'destroy', function () {
			removeEvent(chart, 'resize', setInvert);
		});

		// Do it now
		setInvert(); // do it now

		// On subsequent render and redraw, just do setInvert without setting up events again
		series.invertGroups = setInvert;
	},

	/**
	 * General abstraction for creating plot groups like series.group, series.dataLabelsGroup and
	 * series.markerGroup. On subsequent calls, the group will only be adjusted to the updated plot size.
	 */
	plotGroup: function (prop, name, visibility, zIndex, parent) {
		var group = this[prop],
			isNew = !group;

		// Generate it on first call
		if (isNew) {
			this[prop] = group = this.chart.renderer.g(name)
				.attr({
					visibility: visibility,
					zIndex: zIndex || 0.1 // IE8 needs this
				})
				.add(parent);
		}
		// Place it on first and subsequent (redraw) calls
		group[isNew ? 'attr' : 'animate'](this.getPlotBox());
		return group;
	},

	/**
	 * Get the translation and scale for the plot area of this series
	 */
	getPlotBox: function () {
		var chart = this.chart,
			xAxis = this.xAxis,
			yAxis = this.yAxis;

		// Swap axes for inverted (#2339)
		if (chart.inverted) {
			xAxis = yAxis;
			yAxis = this.xAxis;
		}
		return {
			translateX: xAxis ? xAxis.left : chart.plotLeft,
			translateY: yAxis ? yAxis.top : chart.plotTop,
			scaleX: 1, // #1623
			scaleY: 1
		};
	},

	/**
	 * Render the graph and markers
	 */
	render: function () {
		var series = this,
			chart = series.chart,
			group,
			options = series.options,
			animation = options.animation,
			// Animation doesn't work in IE8 quirks when the group div is hidden,
			// and looks bad in other oldIE
			animDuration = (animation && !!series.animate && chart.renderer.isSVG && pick(animation.duration, 500)) || 0,
			visibility = series.visible ? VISIBLE : HIDDEN,
			zIndex = options.zIndex,
			hasRendered = series.hasRendered,
			chartSeriesGroup = chart.seriesGroup;

		// the group
		group = series.plotGroup(
			'group',
			'series',
			visibility,
			zIndex,
			chartSeriesGroup
		);

		series.markerGroup = series.plotGroup(
			'markerGroup',
			'markers',
			visibility,
			zIndex,
			chartSeriesGroup
		);

		// initiate the animation
		if (animDuration) {
			series.animate(true);
		}

		// cache attributes for shapes
		series.getAttribs();

		// SVGRenderer needs to know this before drawing elements (#1089, #1795)
		group.inverted = series.isCartesian ? chart.inverted : false;

		// draw the graph if any
		if (series.drawGraph) {
			series.drawGraph();
			series.applyZones();
		}

		each(series.points, function (point) {
			if (point.redraw) {
				point.redraw();
			}
		});

		// draw the data labels (inn pies they go before the points)
		if (series.drawDataLabels) {
			series.drawDataLabels();
		}

		// draw the points
		if (series.visible) {
			series.drawPoints();
		}


		// draw the mouse tracking area
		if (series.drawTracker && series.options.enableMouseTracking !== false) {
			series.drawTracker();
		}

		// Handle inverted series and tracker groups
		if (chart.inverted) {
			series.invertGroups();
		}

		// Initial clipping, must be defined after inverting groups for VML. Applies to columns etc. (#3839).
		if (options.clip !== false && !series.sharedClipKey && !hasRendered) {
			group.clip(chart.clipRect);
		}

		// Run the animation
		if (animDuration) {
			series.animate();
		} 

		// Call the afterAnimate function on animation complete (but don't overwrite the animation.complete option
		// which should be available to the user).
		if (!hasRendered) {
			if (animDuration) {
				series.animationTimeout = setTimeout(function () {
					series.afterAnimate();
				}, animDuration);
			} else {
				series.afterAnimate();
			}
		}

		series.isDirty = series.isDirtyData = false; // means data is in accordance with what you see
		// (See #322) series.isDirty = series.isDirtyData = false; // means data is in accordance with what you see
		series.hasRendered = true;
	},

	/**
	 * Redraw the series after an update in the axes.
	 */
	redraw: function () {
		var series = this,
			chart = series.chart,
			wasDirtyData = series.isDirtyData, // cache it here as it is set to false in render, but used after
			wasDirty = series.isDirty,
			group = series.group,
			xAxis = series.xAxis,
			yAxis = series.yAxis;

		// reposition on resize
		if (group) {
			if (chart.inverted) {
				group.attr({
					width: chart.plotWidth,
					height: chart.plotHeight
				});
			}

			group.animate({
				translateX: pick(xAxis && xAxis.left, chart.plotLeft),
				translateY: pick(yAxis && yAxis.top, chart.plotTop)
			});
		}

		series.translate();
		series.render();
		if (wasDirtyData) {
			fireEvent(series, 'updatedData');
		}
		if (wasDirty || wasDirtyData) {			// #3945 recalculate the kdtree when dirty
			delete this.kdTree; // #3868 recalculate the kdtree with dirty data
		}
	},

	/**
	 * KD Tree && PointSearching Implementation
	 */

	kdDimensions: 1,
	kdTree: null,
	kdAxisArray: ['clientX', 'plotY'],
	kdComparer: 'distX',

	searchPoint: function (e) {
		var series = this,
			xAxis = series.xAxis,
			yAxis = series.yAxis,
			inverted = series.chart.inverted;
		
		return this.searchKDTree({
			clientX: inverted ? xAxis.len - e.chartY + xAxis.pos : e.chartX - xAxis.pos,
			plotY: inverted ? yAxis.len - e.chartX + yAxis.pos : e.chartY - yAxis.pos
		});
	},

	buildKDTree: function () {
		var series = this,
			dimensions = series.kdDimensions;

		// Internal function
		function _kdtree(points, depth, dimensions) {
			var axis, median, length = points && points.length;

			if (length) {

				// alternate between the axis
				axis = series.kdAxisArray[depth % dimensions];

				// sort point array
				points.sort(function(a, b) {
					return a[axis] - b[axis];
				});
			
				median = Math.floor(length / 2);
				
				// build and return node
				return {
					point: points[median],
					left: _kdtree(points.slice(0, median), depth + 1, dimensions),
					right: _kdtree(points.slice(median + 1), depth + 1, dimensions)
				};
			
			}
		}

		// Start the recursive build process with a clone of the points array and null points filtered out (#3873)
		function startRecursive() {
			var points = grep(series.points, function (point) {
				return point.y !== null;
			});
			series.kdTree = _kdtree(points, dimensions, dimensions);		
		}

		delete series.kdTree;
		
		if (series.options.kdSync) {  // For testing tooltips, don't build async
			startRecursive();
		} else {
			setTimeout(startRecursive);
		}
	},

	searchKDTree: function (point) {
		var series = this,
			kdComparer = this.kdComparer,
			kdX = this.kdAxisArray[0],
			kdY = this.kdAxisArray[1];

		// Internal function
		function _distance(p1, p2) {
			var x = (defined(p1[kdX]) && defined(p2[kdX])) ? Math.pow(p1[kdX] - p2[kdX], 2) : null,
				y = (defined(p1[kdY]) && defined(p2[kdY])) ? Math.pow(p1[kdY] - p2[kdY], 2) : null,
				r = (x || 0) + (y || 0);
				
			return {
				distX: defined(x) ? Math.sqrt(x) : Number.MAX_VALUE,
				distY: defined(y) ? Math.sqrt(y) : Number.MAX_VALUE,
				distR: defined(r) ? Math.sqrt(r) : Number.MAX_VALUE
			};
		}
		function _search(search, tree, depth, dimensions) {
			var point = tree.point,
				axis = series.kdAxisArray[depth % dimensions],
				tdist,
				sideA,
				sideB,
				ret = point,
				nPoint1,
				nPoint2;
			point.dist = _distance(search, point);

			// Pick side based on distance to splitting point
			tdist = search[axis] - point[axis];
			sideA = tdist < 0 ? 'left' : 'right';

			// End of tree
			if (tree[sideA]) {
				nPoint1 =_search(search, tree[sideA], depth + 1, dimensions);

				ret = (nPoint1.dist[kdComparer] < ret.dist[kdComparer] ? nPoint1 : point);

				sideB = tdist < 0 ? 'right' : 'left';
				if (tree[sideB]) {
					// compare distance to current best to splitting point to decide wether to check side B or not
					if (Math.sqrt(tdist*tdist) < ret.dist[kdComparer]) {
						nPoint2 = _search(search, tree[sideB], depth + 1, dimensions);
						ret = (nPoint2.dist[kdComparer] < ret.dist[kdComparer] ? nPoint2 : ret);
					}
				}
			}
			return ret;
		}

		if (!this.kdTree) {
			this.buildKDTree();
		}

		if (this.kdTree) {
			return _search(point, 
				this.kdTree, this.kdDimensions, this.kdDimensions);
		}
	}

}; // end Series prototype

/**
 * The class for stack items
 */
function StackItem(axis, options, isNegative, x, stackOption) {
	
	var inverted = axis.chart.inverted;

	this.axis = axis;

	// Tells if the stack is negative
	this.isNegative = isNegative;

	// Save the options to be able to style the label
	this.options = options;

	// Save the x value to be able to position the label later
	this.x = x;

	// Initialize total value
	this.total = null;

	// This will keep each points' extremes stored by series.index and point index
	this.points = {};

	// Save the stack option on the series configuration object, and whether to treat it as percent
	this.stack = stackOption;

	// The align options and text align varies on whether the stack is negative and
	// if the chart is inverted or not.
	// First test the user supplied value, then use the dynamic.
	this.alignOptions = {
		align: options.align || (inverted ? (isNegative ? 'left' : 'right') : 'center'),
		verticalAlign: options.verticalAlign || (inverted ? 'middle' : (isNegative ? 'bottom' : 'top')),
		y: pick(options.y, inverted ? 4 : (isNegative ? 14 : -6)),
		x: pick(options.x, inverted ? (isNegative ? -6 : 6) : 0)
	};

	this.textAlign = options.textAlign || (inverted ? (isNegative ? 'right' : 'left') : 'center');
}

StackItem.prototype = {
	destroy: function () {
		destroyObjectProperties(this, this.axis);
	},

	/**
	 * Renders the stack total label and adds it to the stack label group.
	 */
	render: function (group) {
		var options = this.options,
			formatOption = options.format,
			str = formatOption ?
				format(formatOption, this) : 
				options.formatter.call(this);  // format the text in the label

		// Change the text to reflect the new total and set visibility to hidden in case the serie is hidden
		if (this.label) {
			this.label.attr({text: str, visibility: HIDDEN});
		// Create new label
		} else {
			this.label =
				this.axis.chart.renderer.text(str, null, null, options.useHTML)		// dummy positions, actual position updated with setOffset method in columnseries
					.css(options.style)				// apply style
					.attr({
						align: this.textAlign,				// fix the text-anchor
						rotation: options.rotation,	// rotation
						visibility: HIDDEN					// hidden until setOffset is called
					})				
					.add(group);							// add to the labels-group
		}
	},

	/**
	 * Sets the offset that the stack has from the x value and repositions the label.
	 */
	setOffset: function (xOffset, xWidth) {
		var stackItem = this,
			axis = stackItem.axis,
			chart = axis.chart,
			inverted = chart.inverted,
			reversed = axis.reversed,
			neg = (this.isNegative && !reversed) || (!this.isNegative && reversed), // #4056
			y = axis.translate(axis.usePercentage ? 100 : this.total, 0, 0, 0, 1), // stack value translated mapped to chart coordinates
			yZero = axis.translate(0),						// stack origin
			h = mathAbs(y - yZero),							// stack height
			x = chart.xAxis[0].translate(this.x) + xOffset,	// stack x position
			plotHeight = chart.plotHeight,
			stackBox = {	// this is the box for the complete stack
				x: inverted ? (neg ? y : y - h) : x,
				y: inverted ? plotHeight - x - xWidth : (neg ? (plotHeight - y - h) : plotHeight - y),
				width: inverted ? h : xWidth,
				height: inverted ? xWidth : h
			},
			label = this.label,
			alignAttr;
		
		if (label) {
			label.align(this.alignOptions, null, stackBox);	// align the label to the box
				
			// Set visibility (#678)
			alignAttr = label.alignAttr;
			label[this.options.crop === false || chart.isInsidePlot(alignAttr.x, alignAttr.y) ? 'show' : 'hide'](true);
		}
	}
};


// Stacking methods defined on the Axis prototype

/**
 * Build the stacks from top down
 */
Axis.prototype.buildStacks = function () {
	var series = this.series,
		reversedStacks = pick(this.options.reversedStacks, true),
		i = series.length;
	if (!this.isXAxis) {
		this.usePercentage = false;
		while (i--) {
			series[reversedStacks ? i : series.length - i - 1].setStackedPoints();
		}
		// Loop up again to compute percent stack
		if (this.usePercentage) {
			for (i = 0; i < series.length; i++) {
				series[i].setPercentStacks();
			}
		}
	}
};

Axis.prototype.renderStackTotals = function () {
	var axis = this,
		chart = axis.chart,
		renderer = chart.renderer,
		stacks = axis.stacks,
		stackKey, 
		oneStack, 
		stackCategory,
		stackTotalGroup = axis.stackTotalGroup;

	// Create a separate group for the stack total labels
	if (!stackTotalGroup) {
		axis.stackTotalGroup = stackTotalGroup =
			renderer.g('stack-labels')
				.attr({
					visibility: VISIBLE,
					zIndex: 6
				})
				.add();
	}

	// plotLeft/Top will change when y axis gets wider so we need to translate the
	// stackTotalGroup at every render call. See bug #506 and #516
	stackTotalGroup.translate(chart.plotLeft, chart.plotTop);

	// Render each stack total
	for (stackKey in stacks) {
		oneStack = stacks[stackKey];
		for (stackCategory in oneStack) {
			oneStack[stackCategory].render(stackTotalGroup);
		}
	}
};


// Stacking methods defnied for Series prototype

/**
 * Adds series' points value to corresponding stack
 */
Series.prototype.setStackedPoints = function () {
	if (!this.options.stacking || (this.visible !== true && this.chart.options.chart.ignoreHiddenSeries !== false)) {
		return;
	}

	var series = this,
		xData = series.processedXData,
		yData = series.processedYData,
		stackedYData = [],
		yDataLength = yData.length,
		seriesOptions = series.options,
		threshold = seriesOptions.threshold,
		stackOption = seriesOptions.stack,
		stacking = seriesOptions.stacking,
		stackKey = series.stackKey,
		negKey = '-' + stackKey,
		negStacks = series.negStacks,
		yAxis = series.yAxis,
		stacks = yAxis.stacks,
		oldStacks = yAxis.oldStacks,
		isNegative,
		stack,
		other,
		key,
		pointKey,
		i,
		x,
		y;

	// loop over the non-null y values and read them into a local array
	for (i = 0; i < yDataLength; i++) {
		x = xData[i];
		y = yData[i];
		pointKey = series.index + ',' + i;

		// Read stacked values into a stack based on the x value,
		// the sign of y and the stack key. Stacking is also handled for null values (#739)
		isNegative = negStacks && y < threshold;
		key = isNegative ? negKey : stackKey;

		// Create empty object for this stack if it doesn't exist yet
		if (!stacks[key]) {
			stacks[key] = {};
		}

		// Initialize StackItem for this x
		if (!stacks[key][x]) {
			if (oldStacks[key] && oldStacks[key][x]) {
				stacks[key][x] = oldStacks[key][x];
				stacks[key][x].total = null;
			} else {
				stacks[key][x] = new StackItem(yAxis, yAxis.options.stackLabels, isNegative, x, stackOption);
			}
		}

		// If the StackItem doesn't exist, create it first
		stack = stacks[key][x];
		stack.points[pointKey] = [stack.cum || 0];

		// Add value to the stack total
		if (stacking === 'percent') {

			// Percent stacked column, totals are the same for the positive and negative stacks
			other = isNegative ? stackKey : negKey;
			if (negStacks && stacks[other] && stacks[other][x]) {
				other = stacks[other][x];
				stack.total = other.total = mathMax(other.total, stack.total) + mathAbs(y) || 0;

			// Percent stacked areas
			} else {
				stack.total = correctFloat(stack.total + (mathAbs(y) || 0));
			}
		} else {
			stack.total = correctFloat(stack.total + (y || 0));
		}

		stack.cum = (stack.cum || 0) + (y || 0);

		stack.points[pointKey].push(stack.cum);
		stackedYData[i] = stack.cum;

	}

	if (stacking === 'percent') {
		yAxis.usePercentage = true;
	}

	this.stackedYData = stackedYData; // To be used in getExtremes

	// Reset old stacks
	yAxis.oldStacks = {};
};

/**
 * Iterate over all stacks and compute the absolute values to percent
 */
Series.prototype.setPercentStacks = function () {
	var series = this,
		stackKey = series.stackKey,
		stacks = series.yAxis.stacks,
		processedXData = series.processedXData;

	each([stackKey, '-' + stackKey], function (key) {
		var i = processedXData.length,
			x,
			stack,
			pointExtremes,
			totalFactor;

		while (i--) {
			x = processedXData[i];
			stack = stacks[key] && stacks[key][x];
			pointExtremes = stack && stack.points[series.index + ',' + i];
			if (pointExtremes) {
				totalFactor = stack.total ? 100 / stack.total : 0;
				pointExtremes[0] = correctFloat(pointExtremes[0] * totalFactor); // Y bottom value
				pointExtremes[1] = correctFloat(pointExtremes[1] * totalFactor); // Y value
				series.stackedYData[i] = pointExtremes[1];
			}
		}
	});
};

// Extend the Chart prototype for dynamic methods
extend(Chart.prototype, {

	/**
	 * Add a series dynamically after  time
	 *
	 * @param {Object} options The config options
	 * @param {Boolean} redraw Whether to redraw the chart after adding. Defaults to true.
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 *
	 * @return {Object} series The newly created series object
	 */
	addSeries: function (options, redraw, animation) {
		var series,
			chart = this;

		if (options) {
			redraw = pick(redraw, true); // defaults to true

			fireEvent(chart, 'addSeries', { options: options }, function () {
				series = chart.initSeries(options);

				chart.isDirtyLegend = true; // the series array is out of sync with the display
				chart.linkSeries();
				if (redraw) {
					chart.redraw(animation);
				}
			});
		}

		return series;
	},

	/**
     * Add an axis to the chart
     * @param {Object} options The axis option
     * @param {Boolean} isX Whether it is an X axis or a value axis
     */
	addAxis: function (options, isX, redraw, animation) {
		var key = isX ? 'xAxis' : 'yAxis',
			chartOptions = this.options,
			axis;

		/*jslint unused: false*/
		axis = new Axis(this, merge(options, {
			index: this[key].length,
			isX: isX
		}));
		/*jslint unused: true*/

		// Push the new axis options to the chart options
		chartOptions[key] = splat(chartOptions[key] || {});
		chartOptions[key].push(options);

		if (pick(redraw, true)) {
			this.redraw(animation);
		}
	},

	/**
	 * Dim the chart and show a loading text or symbol
	 * @param {String} str An optional text to show in the loading label instead of the default one
	 */
	showLoading: function (str) {
		var chart = this,
			options = chart.options,
			loadingDiv = chart.loadingDiv,
			loadingOptions = options.loading,
			setLoadingSize = function () {
				if (loadingDiv) {
					css(loadingDiv, {
						left: chart.plotLeft + PX,
						top: chart.plotTop + PX,
						width: chart.plotWidth + PX,
						height: chart.plotHeight + PX
					});
				}
			};

		// create the layer at the first call
		if (!loadingDiv) {
			chart.loadingDiv = loadingDiv = createElement(DIV, {
				className: PREFIX + 'loading'
			}, extend(loadingOptions.style, {
				zIndex: 10,
				display: NONE
			}), chart.container);

			chart.loadingSpan = createElement(
				'span',
				null,
				loadingOptions.labelStyle,
				loadingDiv
			);
			addEvent(chart, 'redraw', setLoadingSize); // #1080
		}

		// update text
		chart.loadingSpan.innerHTML = str || options.lang.loading;

		// show it
		if (!chart.loadingShown) {
			css(loadingDiv, {
				opacity: 0,
				display: ''				
			});
			animate(loadingDiv, {
				opacity: loadingOptions.style.opacity
			}, {
				duration: loadingOptions.showDuration || 0
			});
			chart.loadingShown = true;
		}
		setLoadingSize();
	},

	/**
	 * Hide the loading layer
	 */
	hideLoading: function () {
		var options = this.options,
			loadingDiv = this.loadingDiv;

		if (loadingDiv) {
			animate(loadingDiv, {
				opacity: 0
			}, {
				duration: options.loading.hideDuration || 100,
				complete: function () {
					css(loadingDiv, { display: NONE });
				}
			});
		}
		this.loadingShown = false;
	}
});

// extend the Point prototype for dynamic methods
extend(Point.prototype, {
	/**
	 * Update the point with new options (typically x/y data) and optionally redraw the series.
	 *
	 * @param {Object} options Point options as defined in the series.data array
	 * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 *
	 */
	update: function (options, redraw, animation, runEvent) {
		var point = this,
			series = point.series,
			graphic = point.graphic,
			i,
			chart = series.chart,
			seriesOptions = series.options,
			names = series.xAxis && series.xAxis.names;

		redraw = pick(redraw, true);

		function update() {

			point.applyOptions(options);

			// Update visuals
			if (isObject(options) && !isArray(options)) {
				// Defer the actual redraw until getAttribs has been called (#3260)
				point.redraw = function () {
					if (graphic) {
						if (options && options.marker && options.marker.symbol) {
							point.graphic = graphic.destroy();
						} else {
							graphic.attr(point.pointAttr[point.state || '']);
						}
					}
					if (options && options.dataLabels && point.dataLabel) { // #2468
						point.dataLabel = point.dataLabel.destroy();
					}
					point.redraw = null;
				};
			}

			// record changes in the parallel arrays
			i = point.index;
			series.updateParallelArrays(point, i);
			if (names && point.name) {
				names[point.x] = point.name;
			}

			seriesOptions.data[i] = point.options;

			// redraw
			series.isDirty = series.isDirtyData = true;
			if (!series.fixedBox && series.hasCartesianSeries) { // #1906, #2320
				chart.isDirtyBox = true;
			}

			if (chart.legend.display && seriesOptions.legendType === 'point') { // #1831, #1885, #3934
				series.updateTotals();
				chart.legend.clearItems();
			}
			if (redraw) {
				chart.redraw(animation);
			}
		}

		// Fire the event with a default handler of doing the update
		if (runEvent === false) { // When called from setData
			update();
		} else {
			point.firePointEvent('update', { options: options }, update);
		}
	},

	/**
	 * Remove a point and optionally redraw the series and if necessary the axes
	 * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 */
	remove: function (redraw, animation) {
		this.series.removePoint(inArray(this, this.series.data), redraw, animation);
	}
});

// Extend the series prototype for dynamic methods
extend(Series.prototype, {
	/**
	 * Add a point dynamically after chart load time
	 * @param {Object} options Point options as given in series.data
	 * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
	 * @param {Boolean} shift If shift is true, a point is shifted off the start
	 *    of the series as one is appended to the end.
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 */
	addPoint: function (options, redraw, shift, animation) {
		var series = this,
			seriesOptions = series.options,
			data = series.data,
			graph = series.graph,
			area = series.area,
			chart = series.chart,
			names = series.xAxis && series.xAxis.names,
			currentShift = (graph && graph.shift) || 0,
			shiftShapes = ['graph', 'area'],
			dataOptions = seriesOptions.data,
			point,
			isInTheMiddle,
			xData = series.xData,
			i,
			x;

		setAnimation(animation, chart);

		// Make graph animate sideways
		if (shift) {
			i = series.zones.length;
			while (i--) {
				shiftShapes.push('zoneGraph' + i, 'zoneArea' + i);
			}
			each(shiftShapes, function (shape) {
				if (series[shape]) {
					series[shape].shift = currentShift + 1;
				}
			});
		}
		if (area) {
			area.isArea = true; // needed in animation, both with and without shift
		}

		// Optional redraw, defaults to true
		redraw = pick(redraw, true);

		// Get options and push the point to xData, yData and series.options. In series.generatePoints
		// the Point instance will be created on demand and pushed to the series.data array.
		point = { series: series };
		series.pointClass.prototype.applyOptions.apply(point, [options]);
		x = point.x;

		// Get the insertion point
		i = xData.length;
		if (series.requireSorting && x < xData[i - 1]) {
			isInTheMiddle = true;
			while (i && xData[i - 1] > x) {
				i--;
			}
		}

		series.updateParallelArrays(point, 'splice', i, 0, 0); // insert undefined item
		series.updateParallelArrays(point, i); // update it

		if (names && point.name) {
			names[x] = point.name;
		}
		dataOptions.splice(i, 0, options);

		if (isInTheMiddle) {
			series.data.splice(i, 0, null);
			series.processData();
		}

		// Generate points to be added to the legend (#1329)
		if (seriesOptions.legendType === 'point') {
			series.generatePoints();
		}

		// Shift the first point off the parallel arrays
		// todo: consider series.removePoint(i) method
		if (shift) {
			if (data[0] && data[0].remove) {
				data[0].remove(false);
			} else {
				data.shift();
				series.updateParallelArrays(point, 'shift');

				dataOptions.shift();
			}
		}

		// redraw
		series.isDirty = true;
		series.isDirtyData = true;
		if (redraw) {
			series.getAttribs(); // #1937
			chart.redraw();
		}
	},

	/**
	 * Remove a point (rendered or not), by index
	 */
	removePoint: function (i, redraw, animation) {

		var series = this,
			data = series.data,
			point = data[i],
			points = series.points,
			chart = series.chart,
			remove = function () {

				if (data.length === points.length) {
					points.splice(i, 1);
				}
				data.splice(i, 1);
				series.options.data.splice(i, 1);
				series.updateParallelArrays(point || { series: series }, 'splice', i, 1);

				if (point) {
					point.destroy();
				}

				// redraw
				series.isDirty = true;
				series.isDirtyData = true;
				if (redraw) {
					chart.redraw();
				}
			};

		setAnimation(animation, chart);
		redraw = pick(redraw, true);

		// Fire the event with a default handler of removing the point
		if (point) {
			point.firePointEvent('remove', null, remove);
		} else {
			remove();
		}
	},

	/**
	 * Remove a series and optionally redraw the chart
	 *
	 * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 */

	remove: function (redraw, animation) {
		var series = this,
			chart = series.chart;
		redraw = pick(redraw, true);

		if (!series.isRemoving) {  /* prevent triggering native event in jQuery
				(calling the remove function from the remove event) */
			series.isRemoving = true;

			// fire the event with a default handler of removing the point
			fireEvent(series, 'remove', null, function () {


				// destroy elements
				series.destroy();


				// redraw
				chart.isDirtyLegend = chart.isDirtyBox = true;
				chart.linkSeries();

				if (redraw) {
					chart.redraw(animation);
				}
			});

		}
		series.isRemoving = false;
	},

	/**
	 * Update the series with a new set of options
	 */
	update: function (newOptions, redraw) {
		var series = this,
			chart = this.chart,
			// must use user options when changing type because this.options is merged
			// in with type specific plotOptions
			oldOptions = this.userOptions,
			oldType = this.type,
			proto = seriesTypes[oldType].prototype,
			preserve = ['group', 'markerGroup', 'dataLabelsGroup'],
			n;

		// If we're changing type or zIndex, create new groups (#3380, #3404)
		if ((newOptions.type && newOptions.type !== oldType) || newOptions.zIndex !== undefined) {
			preserve.length = 0;
		}

		// Make sure groups are not destroyed (#3094)
		each(preserve, function (prop) {
			preserve[prop] = series[prop];
			delete series[prop];
		});

		// Do the merge, with some forced options
		newOptions = merge(oldOptions, {
			animation: false,
			index: this.index,
			pointStart: this.xData[0] // when updating after addPoint
		}, { data: this.options.data }, newOptions);

		// Destroy the series and delete all properties. Reinsert all methods 
		// and properties from the new type prototype (#2270, #3719)
		this.remove(false);
		for (n in proto) {
			this[n] = UNDEFINED;
		}
		extend(this, seriesTypes[newOptions.type || oldType].prototype);

		// Re-register groups (#3094)
		each(preserve, function (prop) {
			series[prop] = preserve[prop];
		});

		this.init(chart, newOptions);
		chart.linkSeries(); // Links are lost in this.remove (#3028)
		if (pick(redraw, true)) {
			chart.redraw(false);
		}
	}
});

// Extend the Axis.prototype for dynamic methods
extend(Axis.prototype, {

	/**
	 * Update the axis with a new options structure
	 */
	update: function (newOptions, redraw) {
		var chart = this.chart;

		newOptions = chart.options[this.coll][this.options.index] = merge(this.userOptions, newOptions);

		this.destroy(true);
		this._addedPlotLB = UNDEFINED; // #1611, #2887

		this.init(chart, extend(newOptions, { events: UNDEFINED }));

		chart.isDirtyBox = true;
		if (pick(redraw, true)) {
			chart.redraw();
		}
	},

	/**
     * Remove the axis from the chart
     */
	remove: function (redraw) {
		var chart = this.chart,
			key = this.coll, // xAxis or yAxis
			axisSeries = this.series,
			i = axisSeries.length;

		// Remove associated series (#2687)
		while (i--) {
			if (axisSeries[i]) {
				axisSeries[i].remove(false);
			}
		}

		// Remove the axis
		erase(chart.axes, this);
		erase(chart[key], this);
		chart.options[key].splice(this.options.index, 1);
		each(chart[key], function (axis, i) { // Re-index, #1706
			axis.options.index = i;
		});
		this.destroy();
		chart.isDirtyBox = true;

		if (pick(redraw, true)) {
			chart.redraw();
		}
	},

	/**
	 * Update the axis title by options
	 */
	setTitle: function (newTitleOptions, redraw) {
		this.update({ title: newTitleOptions }, redraw);
	},

	/**
	 * Set new axis categories and optionally redraw
	 * @param {Array} categories
	 * @param {Boolean} redraw
	 */
	setCategories: function (categories, redraw) {
		this.update({ categories: categories }, redraw);
	}

});


/**
 * LineSeries object
 */
var LineSeries = extendClass(Series);
seriesTypes.line = LineSeries;

/**
 * Set the default options for area
 */
defaultPlotOptions.area = merge(defaultSeriesOptions, {
	threshold: 0
	// trackByArea: false,
	// lineColor: null, // overrides color, but lets fillColor be unaltered
	// fillOpacity: 0.75,
	// fillColor: null
});

/**
 * AreaSeries object
 */
var AreaSeries = extendClass(Series, {
	type: 'area',
	/**
	 * For stacks, don't split segments on null values. Instead, draw null values with 
	 * no marker. Also insert dummy points for any X position that exists in other series
	 * in the stack.
	 */ 
	getSegments: function () {
		var series = this,
			segments = [],
			segment = [],
			keys = [],
			xAxis = this.xAxis,
			yAxis = this.yAxis,
			stack = yAxis.stacks[this.stackKey],
			pointMap = {},
			plotX,
			plotY,
			points = this.points,
			connectNulls = this.options.connectNulls,
			i,
			x;

		if (this.options.stacking && !this.cropped) { // cropped causes artefacts in Stock, and perf issue
			// Create a map where we can quickly look up the points by their X value.
			for (i = 0; i < points.length; i++) {
				pointMap[points[i].x] = points[i];
			}

			// Sort the keys (#1651)
			for (x in stack) {
				if (stack[x].total !== null) { // nulled after switching between grouping and not (#1651, #2336)
					keys.push(+x);
				}
			}
			keys.sort(function (a, b) {
				return a - b;
			});

			each(keys, function (x) {
				var y = 0,
					stackPoint;

				if (connectNulls && (!pointMap[x] || pointMap[x].y === null)) { // #1836
					return;

				// The point exists, push it to the segment
				} else if (pointMap[x]) {
					segment.push(pointMap[x]);

				// There is no point for this X value in this series, so we 
				// insert a dummy point in order for the areas to be drawn
				// correctly.
				} else {

					// Loop down the stack to find the series below this one that has
					// a value (#1991)
					for (i = series.index; i <= yAxis.series.length; i++) {
						stackPoint = stack[x].points[i + ',' + x];
						if (stackPoint) {
							y = stackPoint[1];
							break;
						}
					}

					plotX = xAxis.translate(x);
					plotY = yAxis.toPixels(y, true);
					segment.push({ 
						y: null, 
						plotX: plotX,
						clientX: plotX, 
						plotY: plotY, 
						yBottom: plotY,
						onMouseOver: noop
					});
				}
			});

			if (segment.length) {
				segments.push(segment);
			}

		} else {
			Series.prototype.getSegments.call(this);
			segments = this.segments;
		}

		this.segments = segments;
	},
	
	/**
	 * Extend the base Series getSegmentPath method by adding the path for the area.
	 * This path is pushed to the series.areaPath property.
	 */
	getSegmentPath: function (segment) {
		
		var segmentPath = Series.prototype.getSegmentPath.call(this, segment), // call base method
			areaSegmentPath = [].concat(segmentPath), // work on a copy for the area path
			i,
			options = this.options,
			segLength = segmentPath.length,
			translatedThreshold = this.yAxis.getThreshold(options.threshold), // #2181
			yBottom;
		
		if (segLength === 3) { // for animation from 1 to two points
			areaSegmentPath.push(L, segmentPath[1], segmentPath[2]);
		}
		if (options.stacking && !this.closedStacks) {
			
			// Follow stack back. Todo: implement areaspline. A general solution could be to 
			// reverse the entire graphPath of the previous series, though may be hard with
			// splines and with series with different extremes
			for (i = segment.length - 1; i >= 0; i--) {

				yBottom = pick(segment[i].yBottom, translatedThreshold);
			
				// step line?
				if (i < segment.length - 1 && options.step) {
					areaSegmentPath.push(segment[i + 1].plotX, yBottom);
				}
				
				areaSegmentPath.push(segment[i].plotX, yBottom);
			}

		} else { // follow zero line back
			this.closeSegment(areaSegmentPath, segment, translatedThreshold);
		}
		this.areaPath = this.areaPath.concat(areaSegmentPath);
		return segmentPath;
	},
	
	/**
	 * Extendable method to close the segment path of an area. This is overridden in polar 
	 * charts.
	 */
	closeSegment: function (path, segment, translatedThreshold) {
		path.push(
			L,
			segment[segment.length - 1].plotX,
			translatedThreshold,
			L,
			segment[0].plotX,
			translatedThreshold
		);
	},
	
	/**
	 * Draw the graph and the underlying area. This method calls the Series base
	 * function and adds the area. The areaPath is calculated in the getSegmentPath
	 * method called from Series.prototype.drawGraph.
	 */
	drawGraph: function () {
		
		// Define or reset areaPath
		this.areaPath = [];
		
		// Call the base method
		Series.prototype.drawGraph.apply(this);
		
		// Define local variables
		var series = this,
			areaPath = this.areaPath,
			options = this.options,
			zones = this.zones,
			props = [['area', this.color, options.fillColor]]; // area name, main color, fill color
		
		each(zones, function (threshold, i) {
			props.push(['zoneArea' + i, threshold.color || series.color, threshold.fillColor || options.fillColor]);
		});
		each(props, function (prop) {
			var areaKey = prop[0],
				area = series[areaKey];
				
			// Create or update the area
			if (area) { // update
				area.animate({ d: areaPath });
	
			} else { // create
				series[areaKey] = series.chart.renderer.path(areaPath)
					.attr({
						fill: pick(
							prop[2],
							Color(prop[1]).setOpacity(pick(options.fillOpacity, 0.75)).get()
						),
						zIndex: 0 // #1069
					}).add(series.group);
			}
		});
	},

	drawLegendSymbol: LegendSymbolMixin.drawRectangle
});

seriesTypes.area = AreaSeries;
/**
 * Set the default options for spline
 */
defaultPlotOptions.spline = merge(defaultSeriesOptions);

/**
 * SplineSeries object
 */
var SplineSeries = extendClass(Series, {
	type: 'spline',

	/**
	 * Get the spline segment from a given point's previous neighbour to the given point
	 */
	getPointSpline: function (segment, point, i) {
		var smoothing = 1.5, // 1 means control points midway between points, 2 means 1/3 from the point, 3 is 1/4 etc
			denom = smoothing + 1,
			plotX = point.plotX,
			plotY = point.plotY,
			lastPoint = segment[i - 1],
			nextPoint = segment[i + 1],
			leftContX,
			leftContY,
			rightContX,
			rightContY,
			ret;

		// find control points
		if (lastPoint && nextPoint) {
		
			var lastX = lastPoint.plotX,
				lastY = lastPoint.plotY,
				nextX = nextPoint.plotX,
				nextY = nextPoint.plotY,
				correction;

			leftContX = (smoothing * plotX + lastX) / denom;
			leftContY = (smoothing * plotY + lastY) / denom;
			rightContX = (smoothing * plotX + nextX) / denom;
			rightContY = (smoothing * plotY + nextY) / denom;

			// have the two control points make a straight line through main point
			correction = ((rightContY - leftContY) * (rightContX - plotX)) /
				(rightContX - leftContX) + plotY - rightContY;

			leftContY += correction;
			rightContY += correction;

			// to prevent false extremes, check that control points are between
			// neighbouring points' y values
			if (leftContY > lastY && leftContY > plotY) {
				leftContY = mathMax(lastY, plotY);
				rightContY = 2 * plotY - leftContY; // mirror of left control point
			} else if (leftContY < lastY && leftContY < plotY) {
				leftContY = mathMin(lastY, plotY);
				rightContY = 2 * plotY - leftContY;
			}
			if (rightContY > nextY && rightContY > plotY) {
				rightContY = mathMax(nextY, plotY);
				leftContY = 2 * plotY - rightContY;
			} else if (rightContY < nextY && rightContY < plotY) {
				rightContY = mathMin(nextY, plotY);
				leftContY = 2 * plotY - rightContY;
			}

			// record for drawing in next point
			point.rightContX = rightContX;
			point.rightContY = rightContY;

		}
		
		// Visualize control points for debugging
		/*
		if (leftContX) {
			this.chart.renderer.circle(leftContX + this.chart.plotLeft, leftContY + this.chart.plotTop, 2)
				.attr({
					stroke: 'red',
					'stroke-width': 1,
					fill: 'none'
				})
				.add();
			this.chart.renderer.path(['M', leftContX + this.chart.plotLeft, leftContY + this.chart.plotTop,
				'L', plotX + this.chart.plotLeft, plotY + this.chart.plotTop])
				.attr({
					stroke: 'red',
					'stroke-width': 1
				})
				.add();
			this.chart.renderer.circle(rightContX + this.chart.plotLeft, rightContY + this.chart.plotTop, 2)
				.attr({
					stroke: 'green',
					'stroke-width': 1,
					fill: 'none'
				})
				.add();
			this.chart.renderer.path(['M', rightContX + this.chart.plotLeft, rightContY + this.chart.plotTop,
				'L', plotX + this.chart.plotLeft, plotY + this.chart.plotTop])
				.attr({
					stroke: 'green',
					'stroke-width': 1
				})
				.add();
		}
		*/

		// moveTo or lineTo
		if (!i) {
			ret = [M, plotX, plotY];
		} else { // curve from last point to this
			ret = [
				'C',
				lastPoint.rightContX || lastPoint.plotX,
				lastPoint.rightContY || lastPoint.plotY,
				leftContX || plotX,
				leftContY || plotY,
				plotX,
				plotY
			];
			lastPoint.rightContX = lastPoint.rightContY = null; // reset for updating series later
		}
		return ret;
	}
});
seriesTypes.spline = SplineSeries;

/**
 * Set the default options for areaspline
 */
defaultPlotOptions.areaspline = merge(defaultPlotOptions.area);

/**
 * AreaSplineSeries object
 */
var areaProto = AreaSeries.prototype,
	AreaSplineSeries = extendClass(SplineSeries, {
		type: 'areaspline',
		closedStacks: true, // instead of following the previous graph back, follow the threshold back
		
		// Mix in methods from the area series
		getSegmentPath: areaProto.getSegmentPath,
		closeSegment: areaProto.closeSegment,
		drawGraph: areaProto.drawGraph,
		drawLegendSymbol: LegendSymbolMixin.drawRectangle
	});

seriesTypes.areaspline = AreaSplineSeries;

/**
 * Set the default options for column
 */
defaultPlotOptions.column = merge(defaultSeriesOptions, {
	borderColor: '#FFFFFF',
	//borderWidth: 1,
	borderRadius: 0,
	//colorByPoint: undefined,
	groupPadding: 0.2,
	//grouping: true,
	marker: null, // point options are specified in the base options
	pointPadding: 0.1,
	//pointWidth: null,
	minPointLength: 0,
	cropThreshold: 50, // when there are more points, they will not animate out of the chart on xAxis.setExtremes
	pointRange: null, // null means auto, meaning 1 in a categorized axis and least distance between points if not categories
	states: {
		hover: {
			brightness: 0.1,
			shadow: false,
			halo: false
		},
		select: {
			color: '#C0C0C0',
			borderColor: '#000000',
			shadow: false
		}
	},
	dataLabels: {
		align: null, // auto
		verticalAlign: null, // auto
		y: null
	},
	stickyTracking: false,
	tooltip: {
		distance: 6
	},
	threshold: 0
});

/**
 * ColumnSeries object
 */
var ColumnSeries = extendClass(Series, {
	type: 'column',
	pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
		stroke: 'borderColor',
		fill: 'color',
		r: 'borderRadius'
	},
	cropShoulder: 0,
	directTouch: true, // When tooltip is not shared, this series (and derivatives) requires direct touch/hover. KD-tree does not apply.
	trackerGroups: ['group', 'dataLabelsGroup'],
	negStacks: true, // use separate negative stacks, unlike area stacks where a negative 
		// point is substracted from previous (#1910)
	
	/**
	 * Initialize the series
	 */
	init: function () {
		Series.prototype.init.apply(this, arguments);

		var series = this,
			chart = series.chart;

		// if the series is added dynamically, force redraw of other
		// series affected by a new column
		if (chart.hasRendered) {
			each(chart.series, function (otherSeries) {
				if (otherSeries.type === series.type) {
					otherSeries.isDirty = true;
				}
			});
		}
	},

	/**
	 * Return the width and x offset of the columns adjusted for grouping, groupPadding, pointPadding,
	 * pointWidth etc. 
	 */
	getColumnMetrics: function () {

		var series = this,
			options = series.options,
			xAxis = series.xAxis,
			yAxis = series.yAxis,
			reversedXAxis = xAxis.reversed,
			stackKey,
			stackGroups = {},
			columnIndex,
			columnCount = 0;

		// Get the total number of column type series.
		// This is called on every series. Consider moving this logic to a
		// chart.orderStacks() function and call it on init, addSeries and removeSeries
		if (options.grouping === false) {
			columnCount = 1;
		} else {
			each(series.chart.series, function (otherSeries) {
				var otherOptions = otherSeries.options,
					otherYAxis = otherSeries.yAxis;
				if (otherSeries.type === series.type && otherSeries.visible &&
						yAxis.len === otherYAxis.len && yAxis.pos === otherYAxis.pos) {  // #642, #2086
					if (otherOptions.stacking) {
						stackKey = otherSeries.stackKey;
						if (stackGroups[stackKey] === UNDEFINED) {
							stackGroups[stackKey] = columnCount++;
						}
						columnIndex = stackGroups[stackKey];
					} else if (otherOptions.grouping !== false) { // #1162
						columnIndex = columnCount++;
					}
					otherSeries.columnIndex = columnIndex;
				}
			});
		}

		var categoryWidth = mathMin(
				mathAbs(xAxis.transA) * (xAxis.ordinalSlope || options.pointRange || xAxis.closestPointRange || xAxis.tickInterval || 1), // #2610
				xAxis.len // #1535
			),
			groupPadding = categoryWidth * options.groupPadding,
			groupWidth = categoryWidth - 2 * groupPadding,
			pointOffsetWidth = groupWidth / columnCount,
			optionPointWidth = options.pointWidth,
			pointPadding = defined(optionPointWidth) ? (pointOffsetWidth - optionPointWidth) / 2 :
				pointOffsetWidth * options.pointPadding,
			pointWidth = pick(optionPointWidth, pointOffsetWidth - 2 * pointPadding), // exact point width, used in polar charts
			colIndex = (reversedXAxis ? 
				columnCount - (series.columnIndex || 0) : // #1251
				series.columnIndex) || 0,
			pointXOffset = pointPadding + (groupPadding + colIndex *
				pointOffsetWidth - (categoryWidth / 2)) *
				(reversedXAxis ? -1 : 1);

		// Save it for reading in linked series (Error bars particularly)
		return (series.columnMetrics = { 
			width: pointWidth, 
			offset: pointXOffset 
		});
			
	},

	/**
	 * Translate each point to the plot area coordinate system and find shape positions
	 */
	translate: function () {
		var series = this,
			chart = series.chart,
			options = series.options,
			borderWidth = series.borderWidth = pick(
				options.borderWidth, 
				series.closestPointRange * series.xAxis.transA < 2 ? 0 : 1 // #3635
			),
			yAxis = series.yAxis,
			threshold = options.threshold,
			translatedThreshold = series.translatedThreshold = yAxis.getThreshold(threshold),
			minPointLength = pick(options.minPointLength, 5),
			metrics = series.getColumnMetrics(),
			pointWidth = metrics.width,
			seriesBarW = series.barW = mathMax(pointWidth, 1 + 2 * borderWidth), // postprocessed for border width
			pointXOffset = series.pointXOffset = metrics.offset,
			xCrisp = -(borderWidth % 2 ? 0.5 : 0),
			yCrisp = borderWidth % 2 ? 0.5 : 1;

		if (chart.inverted) {
			translatedThreshold -= 0.5; // #3355
			if (chart.renderer.isVML) {
				yCrisp += 1;
			}
		}

		// When the pointPadding is 0, we want the columns to be packed tightly, so we allow individual
		// columns to have individual sizes. When pointPadding is greater, we strive for equal-width
		// columns (#2694).
		if (options.pointPadding) {
			seriesBarW = mathCeil(seriesBarW);
		}

		Series.prototype.translate.apply(series);

		// Record the new values
		each(series.points, function (point) {
			var yBottom = pick(point.yBottom, translatedThreshold),
				plotY = mathMin(mathMax(-999 - yBottom, point.plotY), yAxis.len + 999 + yBottom), // Don't draw too far outside plot area (#1303, #2241)
				barX = point.plotX + pointXOffset,
				barW = seriesBarW,
				barY = mathMin(plotY, yBottom),
				right,
				bottom,
				fromTop,
				up,
				barH = mathMax(plotY, yBottom) - barY;

			// Handle options.minPointLength
			if (mathAbs(barH) < minPointLength) {
				if (minPointLength) {
					barH = minPointLength;
					up = (!yAxis.reversed && !point.negative) || (yAxis.reversed && point.negative);
					barY =
						mathRound(mathAbs(barY - translatedThreshold) > minPointLength ? // stacked
							yBottom - minPointLength : // keep position
							translatedThreshold - (up ? minPointLength : 0)); // #1485, #4051
				}
			}

			// Cache for access in polar
			point.barX = barX;
			point.pointWidth = pointWidth;

			// Fix the tooltip on center of grouped columns (#1216, #424, #3648)
			point.tooltipPos = chart.inverted ? 
				[yAxis.len + yAxis.pos - chart.plotLeft - plotY, series.xAxis.len - barX - barW / 2] : 
				[barX + barW / 2, plotY + yAxis.pos - chart.plotTop];

			// Round off to obtain crisp edges and avoid overlapping with neighbours (#2694)
			right = mathRound(barX + barW) + xCrisp;
			barX = mathRound(barX) + xCrisp;
			barW = right - barX;

			fromTop = mathAbs(barY) < 0.5;
			bottom = mathMin(mathRound(barY + barH) + yCrisp, 9e4); // #3575
			barY = mathRound(barY) + yCrisp;
			barH = bottom - barY;

			// Top edges are exceptions
			if (fromTop) {
				barY -= 1;
				barH += 1;
			}

			// Register shape type and arguments to be used in drawPoints
			point.shapeType = 'rect';
			point.shapeArgs = {
				x: barX,
				y: barY,
				width: barW,
				height: barH
			};

		});

	},

	getSymbol: noop,
	
	/**
	 * Use a solid rectangle like the area series types
	 */
	drawLegendSymbol: LegendSymbolMixin.drawRectangle,
	
	
	/**
	 * Columns have no graph
	 */
	drawGraph: noop,

	/**
	 * Draw the columns. For bars, the series.group is rotated, so the same coordinates
	 * apply for columns and bars. This method is inherited by scatter series.
	 *
	 */
	drawPoints: function () {
		var series = this,
			chart = this.chart,
			options = series.options,
			renderer = chart.renderer,
			animationLimit = options.animationLimit || 250,
			shapeArgs,
			pointAttr;

		// draw the columns
		each(series.points, function (point) {
			var plotY = point.plotY,
				graphic = point.graphic,
				borderAttr;

			if (plotY !== UNDEFINED && !isNaN(plotY) && point.y !== null) {
				shapeArgs = point.shapeArgs;

				borderAttr = defined(series.borderWidth) ? {
					'stroke-width': series.borderWidth
				} : {};

				pointAttr = point.pointAttr[point.selected ? SELECT_STATE : NORMAL_STATE] || series.pointAttr[NORMAL_STATE];
				
				if (graphic) { // update
					stop(graphic);
					graphic.attr(borderAttr)[chart.pointCount < animationLimit ? 'animate' : 'attr'](merge(shapeArgs));

				} else {
					point.graphic = graphic = renderer[point.shapeType](shapeArgs)
						.attr(borderAttr)
						.attr(pointAttr)
						.add(series.group)
						.shadow(options.shadow, null, options.stacking && !options.borderRadius);
				}

			} else if (graphic) {
				point.graphic = graphic.destroy(); // #1269
			}
		});
	},

	/**
	 * Animate the column heights one by one from zero
	 * @param {Boolean} init Whether to initialize the animation or run it
	 */
	animate: function (init) {
		var series = this,
			yAxis = this.yAxis,
			options = series.options,
			inverted = this.chart.inverted,
			attr = {},
			translatedThreshold;

		if (hasSVG) { // VML is too slow anyway
			if (init) {
				attr.scaleY = 0.001;
				translatedThreshold = mathMin(yAxis.pos + yAxis.len, mathMax(yAxis.pos, yAxis.toPixels(options.threshold)));
				if (inverted) {
					attr.translateX = translatedThreshold - yAxis.len;
				} else {
					attr.translateY = translatedThreshold;
				}
				series.group.attr(attr);

			} else { // run the animation
				
				attr.scaleY = 1;
				attr[inverted ? 'translateX' : 'translateY'] = yAxis.pos;
				series.group.animate(attr, series.options.animation);

				// delete this function to allow it only once
				series.animate = null;
			}
		}
	},
	
	/**
	 * Remove this series from the chart
	 */
	remove: function () {
		var series = this,
			chart = series.chart;

		// column and bar series affects other series of the same type
		// as they are either stacked or grouped
		if (chart.hasRendered) {
			each(chart.series, function (otherSeries) {
				if (otherSeries.type === series.type) {
					otherSeries.isDirty = true;
				}
			});
		}

		Series.prototype.remove.apply(series, arguments);
	}
});
seriesTypes.column = ColumnSeries;
/**
 * Set the default options for bar
 */
defaultPlotOptions.bar = merge(defaultPlotOptions.column);
/**
 * The Bar series class
 */
var BarSeries = extendClass(ColumnSeries, {
	type: 'bar',
	inverted: true
});
seriesTypes.bar = BarSeries;

/**
 * Set the default options for scatter
 */
defaultPlotOptions.scatter = merge(defaultSeriesOptions, {
	lineWidth: 0,
	marker: {
		enabled: true // Overrides auto-enabling in line series (#3647)
	},
	tooltip: {
		headerFormat: '<span style="color:{series.color}">\u25CF</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
		pointFormat: 'x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>'
	}
});

/**
 * The scatter series class
 */
var ScatterSeries = extendClass(Series, {
	type: 'scatter',
	sorted: false,
	requireSorting: false,
	noSharedTooltip: true,
	trackerGroups: ['group', 'markerGroup', 'dataLabelsGroup'],
	takeOrdinalPosition: false, // #2342
	kdDimensions: 2,
	kdComparer: 'distR',
	drawGraph: function () {
		if (this.options.lineWidth) {
			Series.prototype.drawGraph.call(this);
		}
	}
});

seriesTypes.scatter = ScatterSeries;

/**
 * Set the default options for pie
 */
defaultPlotOptions.pie = merge(defaultSeriesOptions, {
	borderColor: '#FFFFFF',
	borderWidth: 1,
	center: [null, null],
	clip: false,
	colorByPoint: true, // always true for pies
	dataLabels: {
		// align: null,
		// connectorWidth: 1,
		// connectorColor: point.color,
		// connectorPadding: 5,
		distance: 30,
		enabled: true,
		formatter: function () { // #2945
			return this.point.name;
		},
		// softConnector: true,
		x: 0
		// y: 0
	},
	ignoreHiddenPoint: true,
	//innerSize: 0,
	legendType: 'point',
	marker: null, // point options are specified in the base options
	size: null,
	showInLegend: false,
	slicedOffset: 10,
	states: {
		hover: {
			brightness: 0.1,
			shadow: false
		}
	},
	stickyTracking: false,
	tooltip: {
		followPointer: true
	}
});

/**
 * Extended point object for pies
 */
var PiePoint = extendClass(Point, {
	/**
	 * Initiate the pie slice
	 */
	init: function () {

		Point.prototype.init.apply(this, arguments);

		var point = this,
			toggleSlice;

		extend(point, {
			visible: point.visible !== false,
			name: pick(point.name, 'Slice')
		});

		// add event listener for select
		toggleSlice = function (e) {
			point.slice(e.type === 'select');
		};
		addEvent(point, 'select', toggleSlice);
		addEvent(point, 'unselect', toggleSlice);

		return point;
	},

	/**
	 * Toggle the visibility of the pie slice
	 * @param {Boolean} vis Whether to show the slice or not. If undefined, the
	 *    visibility is toggled
	 */
	setVisible: function (vis, force) {
		var point = this,
			series = point.series,
			chart = series.chart,
			doRedraw = !series.isDirty && series.options.ignoreHiddenPoint;

		// Only if the value has changed
		if (vis !== point.visible || force) {
			
			// If called without an argument, toggle visibility
			point.visible = point.options.visible = vis = vis === UNDEFINED ? !point.visible : vis;
			series.options.data[inArray(point, series.data)] = point.options; // update userOptions.data

			// Show and hide associated elements
			each(['graphic', 'dataLabel', 'connector', 'shadowGroup'], function (key) {
				if (point[key]) {
					point[key][vis ? 'show' : 'hide'](true);
				}
			});

			if (point.legendItem) {
				if (chart.hasRendered) {
					series.updateTotals();
					chart.legend.clearItems();
					if (!doRedraw) {
						chart.legend.render();
					}
				}
				chart.legend.colorizeItem(point, vis);
			}

			// Handle ignore hidden slices
			if (doRedraw) {
				series.isDirty = true;
				chart.redraw();
			}
		}
	},

	/**
	 * Set or toggle whether the slice is cut out from the pie
	 * @param {Boolean} sliced When undefined, the slice state is toggled
	 * @param {Boolean} redraw Whether to redraw the chart. True by default.
	 */
	slice: function (sliced, redraw, animation) {
		var point = this,
			series = point.series,
			chart = series.chart,
			translation;

		setAnimation(animation, chart);

		// redraw is true by default
		redraw = pick(redraw, true);

		// if called without an argument, toggle
		point.sliced = point.options.sliced = sliced = defined(sliced) ? sliced : !point.sliced;
		series.options.data[inArray(point, series.data)] = point.options; // update userOptions.data

		translation = sliced ? point.slicedTranslation : {
			translateX: 0,
			translateY: 0
		};

		point.graphic.animate(translation);
		
		if (point.shadowGroup) {
			point.shadowGroup.animate(translation);
		}

	},

	haloPath: function (size) {
		var shapeArgs = this.shapeArgs,
			chart = this.series.chart;

		return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(chart.plotLeft + shapeArgs.x, chart.plotTop + shapeArgs.y, shapeArgs.r + size, shapeArgs.r + size, {
			innerR: this.shapeArgs.r,
			start: shapeArgs.start,
			end: shapeArgs.end
		});
	}
});

/**
 * The Pie series class
 */
var PieSeries = {
	type: 'pie',
	isCartesian: false,
	pointClass: PiePoint,
	requireSorting: false,
	noSharedTooltip: true,
	trackerGroups: ['group', 'dataLabelsGroup'],
	axisTypes: [],
	pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
		stroke: 'borderColor',
		'stroke-width': 'borderWidth',
		fill: 'color'
	},

	/**
	 * Pies have one color each point
	 */
	getColor: noop,

	/**
	 * Animate the pies in
	 */
	animate: function (init) {
		var series = this,
			points = series.points,
			startAngleRad = series.startAngleRad;

		if (!init) {
			each(points, function (point) {
				var graphic = point.graphic,
					args = point.shapeArgs;

				if (graphic) {
					// start values
					graphic.attr({
						r: point.startR || (series.center[3] / 2), // animate from inner radius (#779)
						start: startAngleRad,
						end: startAngleRad
					});

					// animate
					graphic.animate({
						r: args.r,
						start: args.start,
						end: args.end
					}, series.options.animation);
				}
			});

			// delete this function to allow it only once
			series.animate = null;
		}
	},

	/**
	 * Extend the basic setData method by running processData and generatePoints immediately,
	 * in order to access the points from the legend.
	 */
	setData: function (data, redraw, animation, updatePoints) {
		Series.prototype.setData.call(this, data, false, animation, updatePoints);
		this.processData();
		this.generatePoints();
		if (pick(redraw, true)) {
			this.chart.redraw(animation);
		} 
	},

	/**
	 * Recompute total chart sum and update percentages of points.
	 */
	updateTotals: function () {
		var i,
			total = 0,
			points,
			len,
			point,
			ignoreHiddenPoint = this.options.ignoreHiddenPoint;

		// Populate local vars
		points = this.points;
		len = points.length;
		
		// Get the total sum
		for (i = 0; i < len; i++) {
			point = points[i];

			// Disallow negative values (#1530, #3623)
			if (point.y < 0) {
				point.y = null;
			}
			
			total += (ignoreHiddenPoint && !point.visible) ? 0 : point.y;
		}
		this.total = total;

		// Set each point's properties
		for (i = 0; i < len; i++) {
			point = points[i];
			//point.percentage = (total <= 0 || ignoreHiddenPoint && !point.visible) ? 0 : point.y / total * 100;
			point.percentage = (total > 0 && (point.visible || !ignoreHiddenPoint)) ? point.y / total * 100 : 0;
			point.total = total;
		}
	},

	/**
	 * Extend the generatePoints method by adding total and percentage properties to each point
	 */
	generatePoints: function () {
		Series.prototype.generatePoints.call(this);
		this.updateTotals();
	},
	
	/**
	 * Do translation for pie slices
	 */
	translate: function (positions) {
		this.generatePoints();
		
		var series = this,
			cumulative = 0,
			precision = 1000, // issue #172
			options = series.options,
			slicedOffset = options.slicedOffset,
			connectorOffset = slicedOffset + options.borderWidth,
			start,
			end,
			angle,
			startAngle = options.startAngle || 0,
			startAngleRad = series.startAngleRad = mathPI / 180 * (startAngle - 90),
			endAngleRad = series.endAngleRad = mathPI / 180 * ((pick(options.endAngle, startAngle + 360)) - 90),
			circ = endAngleRad - startAngleRad, //2 * mathPI,
			points = series.points,
			radiusX, // the x component of the radius vector for a given point
			radiusY,
			labelDistance = options.dataLabels.distance,
			ignoreHiddenPoint = options.ignoreHiddenPoint,
			i,
			len = points.length,
			point;

		// Get positions - either an integer or a percentage string must be given.
		// If positions are passed as a parameter, we're in a recursive loop for adjusting
		// space for data labels.
		if (!positions) {
			series.center = positions = series.getCenter();
		}

		// utility for getting the x value from a given y, used for anticollision logic in data labels
		series.getX = function (y, left) {

			angle = math.asin(mathMin((y - positions[1]) / (positions[2] / 2 + labelDistance), 1));

			return positions[0] +
				(left ? -1 : 1) *
				(mathCos(angle) * (positions[2] / 2 + labelDistance));
		};

		// Calculate the geometry for each point
		for (i = 0; i < len; i++) {
			
			point = points[i];
			
			// set start and end angle
			start = startAngleRad + (cumulative * circ);
			if (!ignoreHiddenPoint || point.visible) {
				cumulative += point.percentage / 100;
			}
			end = startAngleRad + (cumulative * circ);

			// set the shape
			point.shapeType = 'arc';
			point.shapeArgs = {
				x: positions[0],
				y: positions[1],
				r: positions[2] / 2,
				innerR: positions[3] / 2,
				start: mathRound(start * precision) / precision,
				end: mathRound(end * precision) / precision
			};

			// The angle must stay within -90 and 270 (#2645)
			angle = (end + start) / 2;
			if (angle > 1.5 * mathPI) {
				angle -= 2 * mathPI;
			} else if (angle < -mathPI / 2) {
				angle += 2 * mathPI;
			}

			// Center for the sliced out slice
			point.slicedTranslation = {
				translateX: mathRound(mathCos(angle) * slicedOffset),
				translateY: mathRound(mathSin(angle) * slicedOffset)
			};

			// set the anchor point for tooltips
			radiusX = mathCos(angle) * positions[2] / 2;
			radiusY = mathSin(angle) * positions[2] / 2;
			point.tooltipPos = [
				positions[0] + radiusX * 0.7,
				positions[1] + radiusY * 0.7
			];
			
			point.half = angle < -mathPI / 2 || angle > mathPI / 2 ? 1 : 0;
			point.angle = angle;

			// set the anchor point for data labels
			connectorOffset = mathMin(connectorOffset, labelDistance / 2); // #1678
			point.labelPos = [
				positions[0] + radiusX + mathCos(angle) * labelDistance, // first break of connector
				positions[1] + radiusY + mathSin(angle) * labelDistance, // a/a
				positions[0] + radiusX + mathCos(angle) * connectorOffset, // second break, right outside pie
				positions[1] + radiusY + mathSin(angle) * connectorOffset, // a/a
				positions[0] + radiusX, // landing point for connector
				positions[1] + radiusY, // a/a
				labelDistance < 0 ? // alignment
					'center' :
					point.half ? 'right' : 'left', // alignment
				angle // center angle
			];

		}
	},
	
	drawGraph: null,

	/**
	 * Draw the data points
	 */
	drawPoints: function () {
		var series = this,
			chart = series.chart,
			renderer = chart.renderer,
			groupTranslation,
			//center,
			graphic,
			//group,
			shadow = series.options.shadow,
			shadowGroup,
			shapeArgs;

		if (shadow && !series.shadowGroup) {
			series.shadowGroup = renderer.g('shadow')
				.add(series.group);
		}

		// draw the slices
		each(series.points, function (point) {

			var visible = point.options.visible;

			graphic = point.graphic;
			shapeArgs = point.shapeArgs;
			shadowGroup = point.shadowGroup;

			// put the shadow behind all points
			if (shadow && !shadowGroup) {
				shadowGroup = point.shadowGroup = renderer.g('shadow')
					.add(series.shadowGroup);
			}

			// if the point is sliced, use special translation, else use plot area traslation
			groupTranslation = point.sliced ? point.slicedTranslation : {
				translateX: 0,
				translateY: 0
			};

			//group.translate(groupTranslation[0], groupTranslation[1]);
			if (shadowGroup) {
				shadowGroup.attr(groupTranslation);
			}

			// draw the slice
			if (graphic) {
				graphic.animate(extend(shapeArgs, groupTranslation));
			} else {
				point.graphic = graphic = renderer[point.shapeType](shapeArgs)
					.setRadialReference(series.center)
					.attr(
						point.pointAttr[point.selected ? SELECT_STATE : NORMAL_STATE]
					)
					.attr({ 
						'stroke-linejoin': 'round'
						//zIndex: 1 // #2722 (reversed)
					})
					.attr(groupTranslation)
					.add(series.group)
					.shadow(shadow, shadowGroup);	
			}

			// Detect point specific visibility (#2430)
			if (visible !== undefined) {
				point.setVisible(visible, true);
			}

		});

	},


	searchPoint: noop,

	/**
	 * Utility for sorting data labels
	 */
	sortByAngle: function (points, sign) {
		points.sort(function (a, b) {
			return a.angle !== undefined && (b.angle - a.angle) * sign;
		});
	},		

	/**
	 * Use a simple symbol from LegendSymbolMixin
	 */
	drawLegendSymbol: LegendSymbolMixin.drawRectangle,

	/**
	 * Use the getCenter method from drawLegendSymbol
	 */
	getCenter: CenteredSeriesMixin.getCenter,

	/**
	 * Pies don't have point marker symbols
	 */
	getSymbol: noop

};
PieSeries = extendClass(Series, PieSeries);
seriesTypes.pie = PieSeries;

/**
 * Draw the data labels
 */
Series.prototype.drawDataLabels = function () {

	var series = this,
		seriesOptions = series.options,
		cursor = seriesOptions.cursor,
		options = seriesOptions.dataLabels,
		points = series.points,
		pointOptions,
		generalOptions,
		hasRendered = series.hasRendered || 0,
		str,
		dataLabelsGroup,
		renderer = series.chart.renderer;

	if (options.enabled || series._hasPointLabels) {

		// Process default alignment of data labels for columns
		if (series.dlProcessOptions) {
			series.dlProcessOptions(options);
		}

		// Create a separate group for the data labels to avoid rotation
		dataLabelsGroup = series.plotGroup(
			'dataLabelsGroup',
			'data-labels',
			options.defer ? HIDDEN : VISIBLE,
			options.zIndex || 6
		);

		if (pick(options.defer, true)) {
			dataLabelsGroup.attr({ opacity: +hasRendered }); // #3300
			if (!hasRendered) {
				addEvent(series, 'afterAnimate', function () {
					if (series.visible) { // #3023, #3024
						dataLabelsGroup.show();
					}
					dataLabelsGroup[seriesOptions.animation ? 'animate' : 'attr']({ opacity: 1 }, { duration: 200 });
				});
			}
		}

		// Make the labels for each point
		generalOptions = options;
		each(points, function (point) {

			var enabled,
				dataLabel = point.dataLabel,
				labelConfig,
				attr,
				name,
				rotation,
				connector = point.connector,
				isNew = true,
				style,
				moreStyle = {};

			// Determine if each data label is enabled
			pointOptions = point.dlOptions || (point.options && point.options.dataLabels); // dlOptions is used in treemaps
			enabled = pick(pointOptions && pointOptions.enabled, generalOptions.enabled); // #2282


			// If the point is outside the plot area, destroy it. #678, #820
			if (dataLabel && !enabled) {
				point.dataLabel = dataLabel.destroy();

			// Individual labels are disabled if the are explicitly disabled
			// in the point options, or if they fall outside the plot area.
			} else if (enabled) {

				// Create individual options structure that can be extended without
				// affecting others
				options = merge(generalOptions, pointOptions);
				style = options.style;

				rotation = options.rotation;

				// Get the string
				labelConfig = point.getLabelConfig();
				str = options.format ?
					format(options.format, labelConfig) :
					options.formatter.call(labelConfig, options);

				// Determine the color
				style.color = pick(options.color, style.color, series.color, 'black');


				// update existing label
				if (dataLabel) {

					if (defined(str)) {
						dataLabel
							.attr({
								text: str
							});
						isNew = false;

					} else { // #1437 - the label is shown conditionally
						point.dataLabel = dataLabel = dataLabel.destroy();
						if (connector) {
							point.connector = connector.destroy();
						}
					}

				// create new label
				} else if (defined(str)) {
					attr = {
						//align: align,
						fill: options.backgroundColor,
						stroke: options.borderColor,
						'stroke-width': options.borderWidth,
						r: options.borderRadius || 0,
						rotation: rotation,
						padding: options.padding,
						zIndex: 1
					};
					
					// Get automated contrast color
					if (style.color === 'contrast') {
						moreStyle.color = options.inside || options.distance < 0 || !!seriesOptions.stacking ? 
							renderer.getContrast(point.color || series.color) : 
							'#000000';
					}
					if (cursor) {
						moreStyle.cursor = cursor;
					}
					

					// Remove unused attributes (#947)
					for (name in attr) {
						if (attr[name] === UNDEFINED) {
							delete attr[name];
						}
					}

					dataLabel = point.dataLabel = renderer[rotation ? 'text' : 'label']( // labels don't support rotation
						str,
						0,
						-999,
						options.shape,
						null,
						null,
						options.useHTML
					)
					.attr(attr)
					.css(extend(style, moreStyle))
					.add(dataLabelsGroup)
					.shadow(options.shadow);

				}

				if (dataLabel) {
					// Now the data label is created and placed at 0,0, so we need to align it
					series.alignDataLabel(point, dataLabel, options, null, isNew);
				}
			}
		});
	}
};

/**
 * Align each individual data label
 */
Series.prototype.alignDataLabel = function (point, dataLabel, options, alignTo, isNew) {
	var chart = this.chart,
		inverted = chart.inverted,
		plotX = pick(point.plotX, -999),
		plotY = pick(point.plotY, -999),
		bBox = dataLabel.getBBox(),
		baseline = chart.renderer.fontMetrics(options.style.fontSize).b,
		rotCorr, // rotation correction
		// Math.round for rounding errors (#2683), alignTo to allow column labels (#2700)
		visible = this.visible && (point.series.forceDL || chart.isInsidePlot(plotX, mathRound(plotY), inverted) ||
			(alignTo && chart.isInsidePlot(plotX, inverted ? alignTo.x + 1 : alignTo.y + alignTo.height - 1, inverted))),
		alignAttr; // the final position;

	if (visible) {

		// The alignment box is a singular point
		alignTo = extend({
			x: inverted ? chart.plotWidth - plotY : plotX,
			y: mathRound(inverted ? chart.plotHeight - plotX : plotY),
			width: 0,
			height: 0
		}, alignTo);

		// Add the text size for alignment calculation
		extend(options, {
			width: bBox.width,
			height: bBox.height
		});

		// Allow a hook for changing alignment in the last moment, then do the alignment
		if (options.rotation) { // Fancy box alignment isn't supported for rotated text
			rotCorr = chart.renderer.rotCorr(baseline, options.rotation); // #3723
			dataLabel[isNew ? 'attr' : 'animate']({
					x: alignTo.x + options.x + alignTo.width / 2 + rotCorr.x,
					y: alignTo.y + options.y + alignTo.height / 2
				})
				.attr({ // #3003
					align: options.align
				});
		} else {
			dataLabel.align(options, null, alignTo);
			alignAttr = dataLabel.alignAttr;

			// Handle justify or crop
			if (pick(options.overflow, 'justify') === 'justify') {
				this.justifyDataLabel(dataLabel, options, alignAttr, bBox, alignTo, isNew);

			} else if (pick(options.crop, true)) {
				// Now check that the data label is within the plot area
				visible = chart.isInsidePlot(alignAttr.x, alignAttr.y) && chart.isInsidePlot(alignAttr.x + bBox.width, alignAttr.y + bBox.height);

			}

			// When we're using a shape, make it possible with a connector or an arrow pointing to thie point
			if (options.shape) {
				dataLabel.attr({
					anchorX: point.plotX,
					anchorY: point.plotY
				});
			}

		}
	}

	// Show or hide based on the final aligned position
	if (!visible) {
		dataLabel.attr({ y: -999 });
		dataLabel.placed = false; // don't animate back in
	}

};

/**
 * If data labels fall partly outside the plot area, align them back in, in a way that
 * doesn't hide the point.
 */
Series.prototype.justifyDataLabel = function (dataLabel, options, alignAttr, bBox, alignTo, isNew) {
	var chart = this.chart,
		align = options.align,
		verticalAlign = options.verticalAlign,
		off,
		justified,
		padding = dataLabel.box ? 0 : (dataLabel.padding || 0);

	// Off left
	off = alignAttr.x + padding;
	if (off < 0) {
		if (align === 'right') {
			options.align = 'left';
		} else {
			options.x = -off;
		}
		justified = true;
	}

	// Off right
	off = alignAttr.x + bBox.width - padding;
	if (off > chart.plotWidth) {
		if (align === 'left') {
			options.align = 'right';
		} else {
			options.x = chart.plotWidth - off;
		}
		justified = true;
	}

	// Off top
	off = alignAttr.y + padding;
	if (off < 0) {
		if (verticalAlign === 'bottom') {
			options.verticalAlign = 'top';
		} else {
			options.y = -off;
		}
		justified = true;
	}

	// Off bottom
	off = alignAttr.y + bBox.height - padding;
	if (off > chart.plotHeight) {
		if (verticalAlign === 'top') {
			options.verticalAlign = 'bottom';
		} else {
			options.y = chart.plotHeight - off;
		}
		justified = true;
	}

	if (justified) {
		dataLabel.placed = !isNew;
		dataLabel.align(options, null, alignTo);
	}
};

/**
 * Override the base drawDataLabels method by pie specific functionality
 */
if (seriesTypes.pie) {
	seriesTypes.pie.prototype.drawDataLabels = function () {
		var series = this,
			data = series.data,
			point,
			chart = series.chart,
			options = series.options.dataLabels,
			connectorPadding = pick(options.connectorPadding, 10),
			connectorWidth = pick(options.connectorWidth, 1),
			plotWidth = chart.plotWidth,
			plotHeight = chart.plotHeight,
			connector,
			connectorPath,
			softConnector = pick(options.softConnector, true),
			distanceOption = options.distance,
			seriesCenter = series.center,
			radius = seriesCenter[2] / 2,
			centerY = seriesCenter[1],
			outside = distanceOption > 0,
			dataLabel,
			dataLabelWidth,
			labelPos,
			labelHeight,
			halves = [// divide the points into right and left halves for anti collision
				[], // right
				[]  // left
			],
			x,
			y,
			visibility,
			rankArr,
			i,
			j,
			overflow = [0, 0, 0, 0], // top, right, bottom, left
			sort = function (a, b) {
				return b.y - a.y;
			};

		// get out if not enabled
		if (!series.visible || (!options.enabled && !series._hasPointLabels)) {
			return;
		}

		// run parent method
		Series.prototype.drawDataLabels.apply(series);

		// arrange points for detection collision
		each(data, function (point) {
			if (point.dataLabel && point.visible) { // #407, #2510
				halves[point.half].push(point);
			}
		});

		/* Loop over the points in each half, starting from the top and bottom
		 * of the pie to detect overlapping labels.
		 */
		i = 2;
		while (i--) {

			var slots = [],
				slotsLength,
				usedSlots = [],
				points = halves[i],
				pos,
				bottom,
				length = points.length,
				slotIndex;

			if (!length) {
				continue;
			}

			// Sort by angle
			series.sortByAngle(points, i - 0.5);

			// Assume equal label heights on either hemisphere (#2630)
			j = labelHeight = 0;
			while (!labelHeight && points[j]) { // #1569
				labelHeight = points[j] && points[j].dataLabel && (points[j].dataLabel.getBBox().height || 21); // 21 is for #968
				j++;
			}

			// Only do anti-collision when we are outside the pie and have connectors (#856)
			if (distanceOption > 0) {

				// Build the slots
				bottom = mathMin(centerY + radius + distanceOption, chart.plotHeight);
				for (pos = mathMax(0, centerY - radius - distanceOption); pos <= bottom; pos += labelHeight) {
					slots.push(pos);
				}
				slotsLength = slots.length;


				/* Visualize the slots
				if (!series.slotElements) {
					series.slotElements = [];
				}
				if (i === 1) {
					series.slotElements.forEach(function (elem) {
						elem.destroy();
					});
					series.slotElements.length = 0;
				}
					
				slots.forEach(function (pos, no) {
					var slotX = series.getX(pos, i) + chart.plotLeft - (i ? 100 : 0),
						slotY = pos + chart.plotTop;
					
					if (!isNaN(slotX)) {
						series.slotElements.push(chart.renderer.rect(slotX, slotY - 7, 100, labelHeight, 1)
							.attr({
								'stroke-width': 1,
								stroke: 'silver',
								fill: 'rgba(0,0,255,0.1)'
							})
							.add());
						series.slotElements.push(chart.renderer.text('Slot '+ no, slotX, slotY + 4)
							.attr({
								fill: 'silver'
							}).add());
					}
				});
				// */

				// if there are more values than available slots, remove lowest values
				if (length > slotsLength) {
					// create an array for sorting and ranking the points within each quarter
					rankArr = [].concat(points);
					rankArr.sort(sort);
					j = length;
					while (j--) {
						rankArr[j].rank = j;
					}
					j = length;
					while (j--) {
						if (points[j].rank >= slotsLength) {
							points.splice(j, 1);
						}
					}
					length = points.length;
				}

				// The label goes to the nearest open slot, but not closer to the edge than
				// the label's index.
				for (j = 0; j < length; j++) {

					point = points[j];
					labelPos = point.labelPos;

					var closest = 9999,
						distance,
						slotI;

					// find the closest slot index
					for (slotI = 0; slotI < slotsLength; slotI++) {
						distance = mathAbs(slots[slotI] - labelPos[1]);
						if (distance < closest) {
							closest = distance;
							slotIndex = slotI;
						}
					}

					// if that slot index is closer to the edges of the slots, move it
					// to the closest appropriate slot
					if (slotIndex < j && slots[j] !== null) { // cluster at the top
						slotIndex = j;
					} else if (slotsLength  < length - j + slotIndex && slots[j] !== null) { // cluster at the bottom
						slotIndex = slotsLength - length + j;
						while (slots[slotIndex] === null) { // make sure it is not taken
							slotIndex++;
						}
					} else {
						// Slot is taken, find next free slot below. In the next run, the next slice will find the
						// slot above these, because it is the closest one
						while (slots[slotIndex] === null) { // make sure it is not taken
							slotIndex++;
						}
					}

					usedSlots.push({ i: slotIndex, y: slots[slotIndex] });
					slots[slotIndex] = null; // mark as taken
				}
				// sort them in order to fill in from the top
				usedSlots.sort(sort);
			}

			// now the used slots are sorted, fill them up sequentially
			for (j = 0; j < length; j++) {

				var slot, naturalY;

				point = points[j];
				labelPos = point.labelPos;
				dataLabel = point.dataLabel;
				visibility = point.visible === false ? HIDDEN : 'inherit';
				naturalY = labelPos[1];

				if (distanceOption > 0) {
					slot = usedSlots.pop();
					slotIndex = slot.i;

					// if the slot next to currrent slot is free, the y value is allowed
					// to fall back to the natural position
					y = slot.y;
					if ((naturalY > y && slots[slotIndex + 1] !== null) ||
							(naturalY < y &&  slots[slotIndex - 1] !== null)) {
						y = mathMin(mathMax(0, naturalY), chart.plotHeight);
					}

				} else {
					y = naturalY;
				}

				// get the x - use the natural x position for first and last slot, to prevent the top
				// and botton slice connectors from touching each other on either side
				// Problem: Should check that it makes sense - http://jsfiddle.net/highcharts/n1y6ngxz/
				x = options.justify ?
					seriesCenter[0] + (i ? -1 : 1) * (radius + distanceOption) :
					series.getX(y === centerY - radius - distanceOption || y === centerY + radius + distanceOption ? naturalY : y, i);


				// Record the placement and visibility
				dataLabel._attr = {
					visibility: visibility,
					align: labelPos[6]
				};
				dataLabel._pos = {
					x: x + options.x +
						({ left: connectorPadding, right: -connectorPadding }[labelPos[6]] || 0),
					y: y + options.y - 10 // 10 is for the baseline (label vs text)
				};
				dataLabel.connX = x;
				dataLabel.connY = y;


				// Detect overflowing data labels
				if (this.options.size === null) {
					dataLabelWidth = dataLabel.width;
					// Overflow left
					if (x - dataLabelWidth < connectorPadding) {
						overflow[3] = mathMax(mathRound(dataLabelWidth - x + connectorPadding), overflow[3]);

					// Overflow right
					} else if (x + dataLabelWidth > plotWidth - connectorPadding) {
						overflow[1] = mathMax(mathRound(x + dataLabelWidth - plotWidth + connectorPadding), overflow[1]);
					}

					// Overflow top
					if (y - labelHeight / 2 < 0) {
						overflow[0] = mathMax(mathRound(-y + labelHeight / 2), overflow[0]);

					// Overflow left
					} else if (y + labelHeight / 2 > plotHeight) {
						overflow[2] = mathMax(mathRound(y + labelHeight / 2 - plotHeight), overflow[2]);
					}
				}
			} // for each point
		} // for each half

		// Do not apply the final placement and draw the connectors until we have verified
		// that labels are not spilling over.
		if (arrayMax(overflow) === 0 || this.verifyDataLabelOverflow(overflow)) {

			// Place the labels in the final position
			this.placeDataLabels();

			// Draw the connectors
			if (outside && connectorWidth) {
				each(this.points, function (point) {
					connector = point.connector;
					labelPos = point.labelPos;
					dataLabel = point.dataLabel;

					if (dataLabel && dataLabel._pos) {
						visibility = dataLabel._attr.visibility;
						x = dataLabel.connX;
						y = dataLabel.connY;
						connectorPath = softConnector ? [
							M,
							x + (labelPos[6] === 'left' ? 5 : -5), y, // end of the string at the label
							'C',
							x, y, // first break, next to the label
							2 * labelPos[2] - labelPos[4], 2 * labelPos[3] - labelPos[5],
							labelPos[2], labelPos[3], // second break
							L,
							labelPos[4], labelPos[5] // base
						] : [
							M,
							x + (labelPos[6] === 'left' ? 5 : -5), y, // end of the string at the label
							L,
							labelPos[2], labelPos[3], // second break
							L,
							labelPos[4], labelPos[5] // base
						];

						if (connector) {
							connector.animate({ d: connectorPath });
							connector.attr('visibility', visibility);

						} else {
							point.connector = connector = series.chart.renderer.path(connectorPath).attr({
								'stroke-width': connectorWidth,
								stroke: options.connectorColor || point.color || '#606060',
								visibility: visibility
								//zIndex: 0 // #2722 (reversed)
							})
							.add(series.dataLabelsGroup);
						}
					} else if (connector) {
						point.connector = connector.destroy();
					}
				});
			}
		}
	};
	/**
	 * Perform the final placement of the data labels after we have verified that they
	 * fall within the plot area.
	 */
	seriesTypes.pie.prototype.placeDataLabels = function () {
		each(this.points, function (point) {
			var dataLabel = point.dataLabel,
				_pos;

			if (dataLabel) {
				_pos = dataLabel._pos;
				if (_pos) {
					dataLabel.attr(dataLabel._attr);
					dataLabel[dataLabel.moved ? 'animate' : 'attr'](_pos);
					dataLabel.moved = true;
				} else if (dataLabel) {
					dataLabel.attr({ y: -999 });
				}
			}
		});
	};

	seriesTypes.pie.prototype.alignDataLabel =  noop;

	/**
	 * Verify whether the data labels are allowed to draw, or we should run more translation and data
	 * label positioning to keep them inside the plot area. Returns true when data labels are ready
	 * to draw.
	 */
	seriesTypes.pie.prototype.verifyDataLabelOverflow = function (overflow) {

		var center = this.center,
			options = this.options,
			centerOption = options.center,
			minSize = options.minSize || 80,
			newSize = minSize,
			ret;

		// Handle horizontal size and center
		if (centerOption[0] !== null) { // Fixed center
			newSize = mathMax(center[2] - mathMax(overflow[1], overflow[3]), minSize);

		} else { // Auto center
			newSize = mathMax(
				center[2] - overflow[1] - overflow[3], // horizontal overflow
				minSize
			);
			center[0] += (overflow[3] - overflow[1]) / 2; // horizontal center
		}

		// Handle vertical size and center
		if (centerOption[1] !== null) { // Fixed center
			newSize = mathMax(mathMin(newSize, center[2] - mathMax(overflow[0], overflow[2])), minSize);

		} else { // Auto center
			newSize = mathMax(
				mathMin(
					newSize,
					center[2] - overflow[0] - overflow[2] // vertical overflow
				),
				minSize
			);
			center[1] += (overflow[0] - overflow[2]) / 2; // vertical center
		}

		// If the size must be decreased, we need to run translate and drawDataLabels again
		if (newSize < center[2]) {
			center[2] = newSize;
			this.translate(center);
			each(this.points, function (point) {
				if (point.dataLabel) {
					point.dataLabel._pos = null; // reset
				}
			});

			if (this.drawDataLabels) {
				this.drawDataLabels();
			}
		// Else, return true to indicate that the pie and its labels is within the plot area
		} else {
			ret = true;
		}
		return ret;
	};
}

if (seriesTypes.column) {

	/**
	 * Override the basic data label alignment by adjusting for the position of the column
	 */
	seriesTypes.column.prototype.alignDataLabel = function (point, dataLabel, options,  alignTo, isNew) {
		var inverted = this.chart.inverted,
			series = point.series,
			dlBox = point.dlBox || point.shapeArgs, // data label box for alignment
			below = point.below || (point.plotY > pick(this.translatedThreshold, series.yAxis.len)),
			inside = pick(options.inside, !!this.options.stacking); // draw it inside the box?

		// Align to the column itself, or the top of it
		if (dlBox) { // Area range uses this method but not alignTo
			alignTo = merge(dlBox);

			if (inverted) {
				alignTo = {
					x: series.yAxis.len - alignTo.y - alignTo.height,
					y: series.xAxis.len - alignTo.x - alignTo.width,
					width: alignTo.height,
					height: alignTo.width
				};
			}

			// Compute the alignment box
			if (!inside) {
				if (inverted) {
					alignTo.x += below ? 0 : alignTo.width;
					alignTo.width = 0;
				} else {
					alignTo.y += below ? alignTo.height : 0;
					alignTo.height = 0;
				}
			}
		}


		// When alignment is undefined (typically columns and bars), display the individual
		// point below or above the point depending on the threshold
		options.align = pick(
			options.align,
			!inverted || inside ? 'center' : below ? 'right' : 'left'
		);
		options.verticalAlign = pick(
			options.verticalAlign,
			inverted || inside ? 'middle' : below ? 'top' : 'bottom'
		);

		// Call the parent method
		Series.prototype.alignDataLabel.call(this, point, dataLabel, options, alignTo, isNew);
	};
}



/**
 * Highcharts JS v4.1.5 (2015-04-13)
 * Highcharts module to hide overlapping data labels. This module is included by default in Highmaps.
 *
 * (c) 2010-2014 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */

/*global Highcharts, HighchartsAdapter */
(function (H) {
	var Chart = H.Chart,
		each = H.each,
		addEvent = HighchartsAdapter.addEvent;

	// Collect potensial overlapping data labels. Stack labels probably don't need to be 
	// considered because they are usually accompanied by data labels that lie inside the columns.
	Chart.prototype.callbacks.push(function (chart) {
		function collectAndHide() {
			var labels = [];

			each(chart.series, function (series) {
				var dlOptions = series.options.dataLabels;
				if ((dlOptions.enabled || series._hasPointLabels) && !dlOptions.allowOverlap && series.visible) { // #3866
					each(series.points, function (point) { 
						if (point.dataLabel) {
							point.dataLabel.labelrank = point.labelrank;
							labels.push(point.dataLabel);
						}
					});
				}
			});
			chart.hideOverlappingLabels(labels);
		}

		// Do it now ...
		collectAndHide();

		// ... and after each chart redraw
		addEvent(chart, 'redraw', collectAndHide);

	});

	/**
	 * Hide overlapping labels. Labels are moved and faded in and out on zoom to provide a smooth 
	 * visual imression.
	 */		
	Chart.prototype.hideOverlappingLabels = function (labels) {

		var len = labels.length,
			label,
			i,
			j,
			label1,
			label2,
			intersectRect = function (pos1, pos2, size1, size2) {
				return !(
					pos2.x > pos1.x + size1.width ||
					pos2.x + size2.width < pos1.x ||
					pos2.y > pos1.y + size1.height ||
					pos2.y + size2.height < pos1.y
				);
			};
	
		// Mark with initial opacity
		for (i = 0; i < len; i++) {
			label = labels[i];
			if (label) {
				label.oldOpacity = label.opacity;
				label.newOpacity = 1;
			}
		}

		// Detect overlapping labels
		for (i = 0; i < len; i++) {
			label1 = labels[i];

			for (j = i + 1; j < len; ++j) {
				label2 = labels[j];
				if (label1 && label2 && label1.placed && label2.placed && label1.newOpacity !== 0 && label2.newOpacity !== 0 && 
						intersectRect(label1.alignAttr, label2.alignAttr, label1, label2)) {
					(label1.labelrank < label2.labelrank ? label1 : label2).newOpacity = 0;
				}
			}
		}

		// Hide or show
		for (i = 0; i < len; i++) {
			label = labels[i];
			if (label) {
				if (label.oldOpacity !== label.newOpacity && label.placed) {
					label.alignAttr.opacity = label.newOpacity;
					label[label.isOld && label.newOpacity ? 'animate' : 'attr'](label.alignAttr);
				}
				label.isOld = true;
			}
		}
	};

}(Highcharts));/**
 * TrackerMixin for points and graphs
 */

var TrackerMixin = Highcharts.TrackerMixin = {

	drawTrackerPoint: function () {
		var series = this,
			chart = series.chart,
			pointer = chart.pointer,
			cursor = series.options.cursor,
			css = cursor && { cursor: cursor },
			onMouseOver = function (e) {
				var target = e.target,
				point;

				while (target && !point) {
					point = target.point;
					target = target.parentNode;
				}

				if (point !== UNDEFINED && point !== chart.hoverPoint) { // undefined on graph in scatterchart
					point.onMouseOver(e);
				}
			};

		// Add reference to the point
		each(series.points, function (point) {
			if (point.graphic) {
				point.graphic.element.point = point;
			}
			if (point.dataLabel) {
				point.dataLabel.element.point = point;
			}
		});

		// Add the event listeners, we need to do this only once
		if (!series._hasTracking) {
			each(series.trackerGroups, function (key) {
				if (series[key]) { // we don't always have dataLabelsGroup
					series[key]
						.addClass(PREFIX + 'tracker')
						.on('mouseover', onMouseOver)
						.on('mouseout', function (e) { pointer.onTrackerMouseOut(e); })
						.css(css);
					if (hasTouch) {
						series[key].on('touchstart', onMouseOver);
					}
				}
			});
			series._hasTracking = true;
		}
	},

	/**
	 * Draw the tracker object that sits above all data labels and markers to
	 * track mouse events on the graph or points. For the line type charts
	 * the tracker uses the same graphPath, but with a greater stroke width
	 * for better control.
	 */
	drawTrackerGraph: function () {
		var series = this,
			options = series.options,
			trackByArea = options.trackByArea,
			trackerPath = [].concat(trackByArea ? series.areaPath : series.graphPath),
			trackerPathLength = trackerPath.length,
			chart = series.chart,
			pointer = chart.pointer,
			renderer = chart.renderer,
			snap = chart.options.tooltip.snap,
			tracker = series.tracker,
			cursor = options.cursor,
			css = cursor && { cursor: cursor },
			singlePoints = series.singlePoints,
			singlePoint,
			i,
			onMouseOver = function () {
				if (chart.hoverSeries !== series) {
					series.onMouseOver();
				}
			},
			/*
			 * Empirical lowest possible opacities for TRACKER_FILL for an element to stay invisible but clickable
			 * IE6: 0.002
			 * IE7: 0.002
			 * IE8: 0.002
			 * IE9: 0.00000000001 (unlimited)
			 * IE10: 0.0001 (exporting only)
			 * FF: 0.00000000001 (unlimited)
			 * Chrome: 0.000001
			 * Safari: 0.000001
			 * Opera: 0.00000000001 (unlimited)
			 */
			TRACKER_FILL = 'rgba(192,192,192,' + (hasSVG ? 0.0001 : 0.002) + ')';

		// Extend end points. A better way would be to use round linecaps,
		// but those are not clickable in VML.
		if (trackerPathLength && !trackByArea) {
			i = trackerPathLength + 1;
			while (i--) {
				if (trackerPath[i] === M) { // extend left side
					trackerPath.splice(i + 1, 0, trackerPath[i + 1] - snap, trackerPath[i + 2], L);
				}
				if ((i && trackerPath[i] === M) || i === trackerPathLength) { // extend right side
					trackerPath.splice(i, 0, L, trackerPath[i - 2] + snap, trackerPath[i - 1]);
				}
			}
		}

		// handle single points
		for (i = 0; i < singlePoints.length; i++) {
			singlePoint = singlePoints[i];
			trackerPath.push(M, singlePoint.plotX - snap, singlePoint.plotY,
			L, singlePoint.plotX + snap, singlePoint.plotY);
		}

		// draw the tracker
		if (tracker) {
			tracker.attr({ d: trackerPath });
		} else { // create

			series.tracker = renderer.path(trackerPath)
			.attr({
				'stroke-linejoin': 'round', // #1225
				visibility: series.visible ? VISIBLE : HIDDEN,
				stroke: TRACKER_FILL,
				fill: trackByArea ? TRACKER_FILL : NONE,
				'stroke-width' : options.lineWidth + (trackByArea ? 0 : 2 * snap),
				zIndex: 2
			})
			.add(series.group);

			// The tracker is added to the series group, which is clipped, but is covered
			// by the marker group. So the marker group also needs to capture events.
			each([series.tracker, series.markerGroup], function (tracker) {
				tracker.addClass(PREFIX + 'tracker')
					.on('mouseover', onMouseOver)
					.on('mouseout', function (e) { pointer.onTrackerMouseOut(e); })
					.css(css);

				if (hasTouch) {
					tracker.on('touchstart', onMouseOver);
				}
			});
		}
	}
};
/* End TrackerMixin */


/**
 * Add tracking event listener to the series group, so the point graphics
 * themselves act as trackers
 */ 

if (seriesTypes.column) {
	ColumnSeries.prototype.drawTracker = TrackerMixin.drawTrackerPoint;	
}

if (seriesTypes.pie) {
	seriesTypes.pie.prototype.drawTracker = TrackerMixin.drawTrackerPoint;
}

if (seriesTypes.scatter) {
	ScatterSeries.prototype.drawTracker = TrackerMixin.drawTrackerPoint;
}

/* 
 * Extend Legend for item events 
 */ 
extend(Legend.prototype, {

	setItemEvents: function (item, legendItem, useHTML, itemStyle, itemHiddenStyle) {
	var legend = this;
	// Set the events on the item group, or in case of useHTML, the item itself (#1249)
	(useHTML ? legendItem : item.legendGroup).on('mouseover', function () {
			item.setState(HOVER_STATE);
			legendItem.css(legend.options.itemHoverStyle);
		})
		.on('mouseout', function () {
			legendItem.css(item.visible ? itemStyle : itemHiddenStyle);
			item.setState();
		})
		.on('click', function (event) {
			var strLegendItemClick = 'legendItemClick',
				fnLegendItemClick = function () {
					item.setVisible();
				};
				
			// Pass over the click/touch event. #4.
			event = {
				browserEvent: event
			};

			// click the name or symbol
			if (item.firePointEvent) { // point
				item.firePointEvent(strLegendItemClick, event, fnLegendItemClick);
			} else {
				fireEvent(item, strLegendItemClick, event, fnLegendItemClick);
			}
		});
	},

	createCheckboxForItem: function (item) {
		var legend = this;

		item.checkbox = createElement('input', {
			type: 'checkbox',
			checked: item.selected,
			defaultChecked: item.selected // required by IE7
		}, legend.options.itemCheckboxStyle, legend.chart.container);

		addEvent(item.checkbox, 'click', function (event) {
			var target = event.target;
			fireEvent(item.series || item, 'checkboxClick', { // #3712
					checked: target.checked,
					item: item
				},
				function () {
					item.select();
				}
			);
		});
	}	
});

/* 
 * Add pointer cursor to legend itemstyle in defaultOptions
 */
defaultOptions.legend.itemStyle.cursor = 'pointer';


/* 
 * Extend the Chart object with interaction
 */

extend(Chart.prototype, {
	/**
	 * Display the zoom button
	 */
	showResetZoom: function () {
		var chart = this,
			lang = defaultOptions.lang,
			btnOptions = chart.options.chart.resetZoomButton,
			theme = btnOptions.theme,
			states = theme.states,
			alignTo = btnOptions.relativeTo === 'chart' ? null : 'plotBox';
			
		this.resetZoomButton = chart.renderer.button(lang.resetZoom, null, null, function () { chart.zoomOut(); }, theme, states && states.hover)
			.attr({
				align: btnOptions.position.align,
				title: lang.resetZoomTitle
			})
			.add()
			.align(btnOptions.position, false, alignTo);
			
	},

	/**
	 * Zoom out to 1:1
	 */
	zoomOut: function () {
		var chart = this;
		fireEvent(chart, 'selection', { resetSelection: true }, function () { 
			chart.zoom();
		});
	},

	/**
	 * Zoom into a given portion of the chart given by axis coordinates
	 * @param {Object} event
	 */
	zoom: function (event) {
		var chart = this,
			hasZoomed,
			pointer = chart.pointer,
			displayButton = false,
			resetZoomButton;

		// If zoom is called with no arguments, reset the axes
		if (!event || event.resetSelection) {
			each(chart.axes, function (axis) {
				hasZoomed = axis.zoom();
			});
		} else { // else, zoom in on all axes
			each(event.xAxis.concat(event.yAxis), function (axisData) {
				var axis = axisData.axis,
					isXAxis = axis.isXAxis;

				// don't zoom more than minRange
				if (pointer[isXAxis ? 'zoomX' : 'zoomY'] || pointer[isXAxis ? 'pinchX' : 'pinchY']) {
					hasZoomed = axis.zoom(axisData.min, axisData.max);
					if (axis.displayBtn) {
						displayButton = true;
					}
				}
			});
		}
		
		// Show or hide the Reset zoom button
		resetZoomButton = chart.resetZoomButton;
		if (displayButton && !resetZoomButton) {
			chart.showResetZoom();
		} else if (!displayButton && isObject(resetZoomButton)) {
			chart.resetZoomButton = resetZoomButton.destroy();
		}
		

		// Redraw
		if (hasZoomed) {
			chart.redraw(
				pick(chart.options.chart.animation, event && event.animation, chart.pointCount < 100) // animation
			);
		}
	},

	/**
	 * Pan the chart by dragging the mouse across the pane. This function is called
	 * on mouse move, and the distance to pan is computed from chartX compared to
	 * the first chartX position in the dragging operation.
	 */
	pan: function (e, panning) {

		var chart = this,
			hoverPoints = chart.hoverPoints,
			doRedraw;

		// remove active points for shared tooltip
		if (hoverPoints) {
			each(hoverPoints, function (point) {
				point.setState();
			});
		}

		each(panning === 'xy' ? [1, 0] : [1], function (isX) { // xy is used in maps
			var mousePos = e[isX ? 'chartX' : 'chartY'],
				axis = chart[isX ? 'xAxis' : 'yAxis'][0],
				startPos = chart[isX ? 'mouseDownX' : 'mouseDownY'],
				halfPointRange = (axis.pointRange || 0) / 2,
				extremes = axis.getExtremes(),
				newMin = axis.toValue(startPos - mousePos, true) + halfPointRange,
				newMax = axis.toValue(startPos + chart[isX ? 'plotWidth' : 'plotHeight'] - mousePos, true) - halfPointRange,
				goingLeft = startPos > mousePos; // #3613

			if (axis.series.length && 
					(goingLeft || newMin > mathMin(extremes.dataMin, extremes.min)) && 
					(!goingLeft || newMax < mathMax(extremes.dataMax, extremes.max))) {
				axis.setExtremes(newMin, newMax, false, false, { trigger: 'pan' });
				doRedraw = true;
			}

			chart[isX ? 'mouseDownX' : 'mouseDownY'] = mousePos; // set new reference for next run
		});

		if (doRedraw) {
			chart.redraw(false);
		}
		css(chart.container, { cursor: 'move' });
	}
});

/*
 * Extend the Point object with interaction
 */
extend(Point.prototype, {
	/**
	 * Toggle the selection status of a point
	 * @param {Boolean} selected Whether to select or unselect the point.
	 * @param {Boolean} accumulate Whether to add to the previous selection. By default,
	 *		 this happens if the control key (Cmd on Mac) was pressed during clicking.
	 */
	select: function (selected, accumulate) {
		var point = this,
			series = point.series,
			chart = series.chart;

		selected = pick(selected, !point.selected);

		// fire the event with the defalut handler
		point.firePointEvent(selected ? 'select' : 'unselect', { accumulate: accumulate }, function () {
			point.selected = point.options.selected = selected;
			series.options.data[inArray(point, series.data)] = point.options;

			point.setState(selected && SELECT_STATE);

			// unselect all other points unless Ctrl or Cmd + click
			if (!accumulate) {
				each(chart.getSelectedPoints(), function (loopPoint) {
					if (loopPoint.selected && loopPoint !== point) {
						loopPoint.selected = loopPoint.options.selected = false;
						series.options.data[inArray(loopPoint, series.data)] = loopPoint.options;
						loopPoint.setState(NORMAL_STATE);
							loopPoint.firePointEvent('unselect');
					}
				});
			}
		});
	},

	/**
	 * Runs on mouse over the point
	 */
	onMouseOver: function (e) {
		var point = this,
			series = point.series,
			chart = series.chart,
			tooltip = chart.tooltip,
			hoverPoint = chart.hoverPoint;

		if (chart.hoverSeries !== series) {
			series.onMouseOver();
		}		

		// set normal state to previous series
		if (hoverPoint && hoverPoint !== point) {
			hoverPoint.onMouseOut();
		}

		// trigger the event
		point.firePointEvent('mouseOver');

		// update the tooltip
		if (tooltip && (!tooltip.shared || series.noSharedTooltip)) {
			tooltip.refresh(point, e);
		}

		// hover this
		point.setState(HOVER_STATE);
		chart.hoverPoint = point;
	},

	/**
	 * Runs on mouse out from the point
	 */
	onMouseOut: function () {
		var chart = this.series.chart,
			hoverPoints = chart.hoverPoints;

		this.firePointEvent('mouseOut');

		if (!hoverPoints || inArray(this, hoverPoints) === -1) { // #887, #2240
			this.setState();
			chart.hoverPoint = null;
		}
	},

	/**
	 * Import events from the series' and point's options. Only do it on
	 * demand, to save processing time on hovering.
	 */
	importEvents: function () {
		if (!this.hasImportedEvents) {
			var point = this,
				options = merge(point.series.options.point, point.options),
				events = options.events,
				eventType;

			point.events = events;

			for (eventType in events) {
				addEvent(point, eventType, events[eventType]);
			}
			this.hasImportedEvents = true;

		}
	},

	/**
	 * Set the point's state
	 * @param {String} state
	 */
	setState: function (state, move) {
		var point = this,
			plotX = point.plotX,
			plotY = point.plotY,
			series = point.series,
			stateOptions = series.options.states,
			markerOptions = defaultPlotOptions[series.type].marker && series.options.marker,
			normalDisabled = markerOptions && !markerOptions.enabled,
			markerStateOptions = markerOptions && markerOptions.states[state],
			stateDisabled = markerStateOptions && markerStateOptions.enabled === false,
			stateMarkerGraphic = series.stateMarkerGraphic,
			pointMarker = point.marker || {},
			chart = series.chart,
			radius,
			halo = series.halo,
			haloOptions,
			newSymbol,
			pointAttr;

		state = state || NORMAL_STATE; // empty string
		pointAttr = point.pointAttr[state] || series.pointAttr[state];

		if (
				// already has this state
				(state === point.state && !move) ||
				// selected points don't respond to hover
				(point.selected && state !== SELECT_STATE) ||
				// series' state options is disabled
				(stateOptions[state] && stateOptions[state].enabled === false) ||
				// general point marker's state options is disabled
				(state && (stateDisabled || (normalDisabled && markerStateOptions.enabled === false))) ||
				// individual point marker's state options is disabled
				(state && pointMarker.states && pointMarker.states[state] && pointMarker.states[state].enabled === false) // #1610

			) {
			return;
		}

		// apply hover styles to the existing point
		if (point.graphic) {
			radius = markerOptions && point.graphic.symbolName && pointAttr.r;
			point.graphic.attr(merge(
				pointAttr,
				radius ? { // new symbol attributes (#507, #612)
					x: plotX - radius,
					y: plotY - radius,
					width: 2 * radius,
					height: 2 * radius
				} : {}
			));

			// Zooming in from a range with no markers to a range with markers
			if (stateMarkerGraphic) {
				stateMarkerGraphic.hide();
			}
		} else {
			// if a graphic is not applied to each point in the normal state, create a shared
			// graphic for the hover state
			if (state && markerStateOptions) {
				radius = markerStateOptions.radius;
				newSymbol = pointMarker.symbol || series.symbol;

				// If the point has another symbol than the previous one, throw away the
				// state marker graphic and force a new one (#1459)
				if (stateMarkerGraphic && stateMarkerGraphic.currentSymbol !== newSymbol) {
					stateMarkerGraphic = stateMarkerGraphic.destroy();
				}

				// Add a new state marker graphic
				if (!stateMarkerGraphic) {
					if (newSymbol) {
						series.stateMarkerGraphic = stateMarkerGraphic = chart.renderer.symbol(
							newSymbol,
							plotX - radius,
							plotY - radius,
							2 * radius,
							2 * radius
						)
						.attr(pointAttr)
						.add(series.markerGroup);
						stateMarkerGraphic.currentSymbol = newSymbol;
					}

				// Move the existing graphic
				} else {
					stateMarkerGraphic[move ? 'animate' : 'attr']({ // #1054
						x: plotX - radius,
						y: plotY - radius
					});
				}
			}

			if (stateMarkerGraphic) {
				stateMarkerGraphic[state && chart.isInsidePlot(plotX, plotY, chart.inverted) ? 'show' : 'hide'](); // #2450
			}
		}

		// Show me your halo
		haloOptions = stateOptions[state] && stateOptions[state].halo;
		if (haloOptions && haloOptions.size) {
			if (!halo) {
				series.halo = halo = chart.renderer.path()
					.add(chart.seriesGroup);
			}
			halo.attr(extend({
				fill: Color(point.color || series.color).setOpacity(haloOptions.opacity).get()
			}, haloOptions.attributes))[move ? 'animate' : 'attr']({
				d: point.haloPath(haloOptions.size)
			});
		} else if (halo) {
			halo.attr({ d: [] });
		}

		point.state = state;
	},

	haloPath: function (size) {
		var series = this.series,
			chart = series.chart,
			plotBox = series.getPlotBox(),
			inverted = chart.inverted;

		return chart.renderer.symbols.circle(
			plotBox.translateX + (inverted ? series.yAxis.len - this.plotY : this.plotX) - size, 
			plotBox.translateY + (inverted ? series.xAxis.len - this.plotX : this.plotY) - size, 
			size * 2, 
			size * 2
		);
	}
});

/*
 * Extend the Series object with interaction
 */

extend(Series.prototype, {
	/**
	 * Series mouse over handler
	 */
	onMouseOver: function () {
		var series = this,
			chart = series.chart,
			hoverSeries = chart.hoverSeries;

		// set normal state to previous series
		if (hoverSeries && hoverSeries !== series) {
			hoverSeries.onMouseOut();
		}

		// trigger the event, but to save processing time,
		// only if defined
		if (series.options.events.mouseOver) {
			fireEvent(series, 'mouseOver');
		}

		// hover this
		series.setState(HOVER_STATE);
		chart.hoverSeries = series;
	},

	/**
	 * Series mouse out handler
	 */
	onMouseOut: function () {
		// trigger the event only if listeners exist
		var series = this,
			options = series.options,
			chart = series.chart,
			tooltip = chart.tooltip,
			hoverPoint = chart.hoverPoint;

		// trigger mouse out on the point, which must be in this series
		if (hoverPoint) {
			hoverPoint.onMouseOut();
		}

		// fire the mouse out event
		if (series && options.events.mouseOut) {
			fireEvent(series, 'mouseOut');
		}


		// hide the tooltip
		if (tooltip && !options.stickyTracking && (!tooltip.shared || series.noSharedTooltip)) {
			tooltip.hide();
		}

		// set normal state
		series.setState();
		chart.hoverSeries = null;
	},

	/**
	 * Set the state of the graph
	 */
	setState: function (state) {
		var series = this,
			options = series.options,
			graph = series.graph,
			stateOptions = options.states,
			lineWidth = options.lineWidth,
			attribs,
			i = 0;

		state = state || NORMAL_STATE;

		if (series.state !== state) {
			series.state = state;

			if (stateOptions[state] && stateOptions[state].enabled === false) {
				return;
			}

			if (state) {
				lineWidth = stateOptions[state].lineWidth || lineWidth + (stateOptions[state].lineWidthPlus || 0); // #4035
			}

			if (graph && !graph.dashstyle) { // hover is turned off for dashed lines in VML
				attribs = {
					'stroke-width': lineWidth
				};
				// use attr because animate will cause any other animation on the graph to stop
				graph.attr(attribs);
				while (series['zoneGraph' + i]) {
					series['zoneGraph' + i].attr(attribs);
					i = i + 1;
				}
			}
		}
	},

	/**
	 * Set the visibility of the graph
	 *
	 * @param vis {Boolean} True to show the series, false to hide. If UNDEFINED,
	 *				the visibility is toggled.
	 */
	setVisible: function (vis, redraw) {
		var series = this,
			chart = series.chart,
			legendItem = series.legendItem,
			showOrHide,
			ignoreHiddenSeries = chart.options.chart.ignoreHiddenSeries,
			oldVisibility = series.visible;

		// if called without an argument, toggle visibility
		series.visible = vis = series.userOptions.visible = vis === UNDEFINED ? !oldVisibility : vis;
		showOrHide = vis ? 'show' : 'hide';

		// show or hide elements
		each(['group', 'dataLabelsGroup', 'markerGroup', 'tracker'], function (key) {
			if (series[key]) {
				series[key][showOrHide]();
			}
		});


		// hide tooltip (#1361)
		if (chart.hoverSeries === series || (chart.hoverPoint && chart.hoverPoint.series) === series) {
			series.onMouseOut();
		}


		if (legendItem) {
			chart.legend.colorizeItem(series, vis);
		}


		// rescale or adapt to resized chart
		series.isDirty = true;
		// in a stack, all other series are affected
		if (series.options.stacking) {
			each(chart.series, function (otherSeries) {
				if (otherSeries.options.stacking && otherSeries.visible) {
					otherSeries.isDirty = true;
				}
			});
		}

		// show or hide linked series
		each(series.linkedSeries, function (otherSeries) {
			otherSeries.setVisible(vis, false);
		});

		if (ignoreHiddenSeries) {
			chart.isDirtyBox = true;
		}
		if (redraw !== false) {
			chart.redraw();
		}

		fireEvent(series, showOrHide);
	},

	/**
	 * Show the graph
	 */
	show: function () {
		this.setVisible(true);
	},

	/**
	 * Hide the graph
	 */
	hide: function () {
		this.setVisible(false);
	},


	/**
	 * Set the selected state of the graph
	 *
	 * @param selected {Boolean} True to select the series, false to unselect. If
	 *				UNDEFINED, the selection state is toggled.
	 */
	select: function (selected) {
		var series = this;
		// if called without an argument, toggle
		series.selected = selected = (selected === UNDEFINED) ? !series.selected : selected;

		if (series.checkbox) {
			series.checkbox.checked = selected;
		}

		fireEvent(series, selected ? 'select' : 'unselect');
	},

	drawTracker: TrackerMixin.drawTrackerGraph
});
// global variables
extend(Highcharts, {
	
	// Constructors
	Color: Color,
	Point: Point,
	Tick: Tick,	
	Renderer: Renderer,
	SVGElement: SVGElement,
	SVGRenderer: SVGRenderer,
	
	// Various
	arrayMin: arrayMin,
	arrayMax: arrayMax,
	charts: charts,
	dateFormat: dateFormat,
	error: error,
	format: format,
	pathAnim: pathAnim,
	getOptions: getOptions,
	hasBidiBug: hasBidiBug,
	isTouchDevice: isTouchDevice,
	setOptions: setOptions,
	addEvent: addEvent,
	removeEvent: removeEvent,
	createElement: createElement,
	discardElement: discardElement,
	css: css,
	each: each,
	map: map,
	merge: merge,
	splat: splat,
	extendClass: extendClass,
	pInt: pInt,
	svg: hasSVG,
	canvas: useCanVG,
	vml: !hasSVG && !useCanVG,
	product: PRODUCT,
	version: VERSION
});

}());

}).call(global, module, undefined, undefined);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"/home/david/Dev/requests-chart/bower_components/highcharts/adapters/standalone-framework.src.js":4}],6:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],7:[function(require,module,exports){
module.exports = require('cssify');

},{"cssify":6}]},{},[1])


//# sourceMappingURL=bundle.js.map