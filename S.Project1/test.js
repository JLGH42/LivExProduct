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
        "HistoricalData": [{
            "Date": "12/07/16",
            "Price": "75.99"
        }],
        "HarvestSeason": "Spring"
    },
    {
        "Title": "Second Wine",
        "Price": "199.99",
        "Vintage": "2050",
        "Type": "Sparkling",
        "Abv": "22%",
        "Country": "Portugal",
        "Region": "Du Ruera",
        "Appellation": "DO Duera",
        "CurrentDate": "22/11/18",
        "HistoricalData": {
            "Date": "15/12/12",
            "Price": "123.99"
        },
        "HarvestSeason": "Spring"
    }
]

// Pushing data to an array (Col)
var col = [];
var histData = []

for (var i = 0; i < wineData.length; i++) {
    for (var j = 0; j < Object.keys(wineData[i].HistoricalData).length; j++) {
        //push the values of HistoricalData
        histData.push(Object.values(wineData[i].HistoricalData[j]))
        console.log(Object.values(wineData[i].HistoricalData[j]))
    }
}

for (var i = 0; i < wineData.length; i++) {
    for (var key in wineData[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}