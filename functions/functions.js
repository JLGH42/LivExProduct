'use strict';

module.exports = {
    createTableFromJSON() {
        let wineData = require('./functions/jsonData/wineData.json')
            // EXTRACT VALUE FOR HTML HEADER. 
        var col = [];
        for (var i = 0; i < wineData.length; i++) {
            for (var key in wineData[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
        var tr = table.insertRow(-1); // TABLE ROW.
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th"); // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < wineData.length; i++) {
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = wineData[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    },

    createChart() {
        var wineData = [{
            "Title": "1990 La Tâche, Domaine De La Romanée-Conti",
            "Price": "99.99",
            "Vintage": "2000",
            "Type": "Red",
            "Abv": "12%",
            "Country": "United Kingdom",
            "Region": "",
            "Appellation": "Surrey",
            "CurrentDate": "21/08/18",
            "HistoricalData": {
                "Date": "12/07/16",
                "histPrice": "75.99"
            },
            "HarvestSeason": "Spring"
        }, {
            "Title": "Second Wine",
            "Price": "30.50",
            "Vintage": "2050",
            "Type": "Sparkling",
            "Abv": "22%",
            "Country": "Portugal",
            "Region": "Du Ruera",
            "Appellation": "DO Duera",
            "CurrentDate": "22/11/18",
            "HistoricalData": {
                "Date": "09/07/18",
                "histPrice": "35.99"
            },
            "HarvestSeason": "winter"
        }]
        var histPrice = [];
        var histDate = [];
        for (var i = 0; i < wineData.length; i++) {
            for (var key in wineData[i]) {
                // HistoricalDate Values
                if (key == 'HistoricalData' && (wineData[i].HistoricalData['histPrice'] != undefined && wineData[i]
                        .HistoricalData['Date'] != undefined)) {
                    histPrice.push(wineData[i].HistoricalData['histPrice'])
                    histDate.push(wineData[i].HistoricalData['Date'])
                }
            }
        };
        var chart = new Chartist.Line('.ct-square', {
            labels: [
                histDate
            ],
            series: [
                [histPrice]
            ]

        }, {
            // Remove this configuration to see that chart rendered with cardinal spline interpolation
            // Sometimes, on large jumps in data values, it's better to use simple smoothing.
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            chartPadding: {
                right: 20
            },
            low: 0
        });
    }

}