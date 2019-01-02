// var wineData = [{
//     "Title": "1990 La Tâche, Domaine De La Romanée-Conti",
//     "Price": "99.99",
//     "Vintage": "2000",
//     "Type": "Red",
//     "Abv": "12%",
//     "Country": "United Kingdom",
//     "Region": "",
//     "Appellation": "Surrey",
//     "CurrentDate": "21/08/18",
//     "HistoricalData": {
//         "Date": "12/07/16",
//         "histPrice": "75.99"
//     },
//     "HarvestSeason": "Spring"
// }, {
//     "Title": "Second Wine",
//     "Price": "30.50",
//     "Vintage": "2050",
//     "Type": "Sparkling",
//     "Abv": "22%",
//     "Country": "Portugal",
//     "Region": "Du Ruera",
//     "Appellation": "DO Duera",
//     "CurrentDate": "22/11/18",
//     "HistoricalData": {
//         "Date": "09/07/18",
//         "histPrice": "35.99"
//     },
//     "HarvestSeason": "winter"
// }]

// // Container variables to hold values
// var col = [];
// var histCol = [];
// var vals = [];
// var histDate = [];
// var histPrice = [];

// //Get number of Products (objects)
// for (var i = 0; i < wineData.length; i++) {
//     //variable Key created to hold Property names of WineData for each Object in the Array ([i])
//     for (var key in wineData[i]) {
//         //Headers (properties/key)
//         if (col.indexOf(key) === -1) {
//             col.push(key);
//         }
//     }
//     //VALUES 
//     for (var i = 0; i < wineData.length; i++) {
//         console.log(Object.values(wineData[i]));
//     }
// }

// for (var i = 0; i < wineData.length; i++) {
//     for (var key in wineData[i]) {
//         // HistoricalDate Values
//         if (key == 'HistoricalData' && (wineData[i].HistoricalData['histPrice'] != undefined && wineData[i].HistoricalData['Date'] != undefined)) {
//             histCol.push(Object.keys(wineData[i].HistoricalData))
//         }
//     }
// }


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
        "Date": ["12/07/16", "11/07/16", "22/03/17"],
        "histPrice": ["75.99", "50.50", "60.00"]
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
        "Date": ["09/07/12", '13/08/14', "29/09/17"],
        "histPrice": ["35.99", "70.90", "50.50"]
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
    // var prc = histPrice;
    // var date = histDate;

    // // for (let i = 0; i < histDate && histPrice; i++) {
    // //     histDate = date.toString()
    // //     histPrice = prc.toString()
    // //     console.log(histDate, ' ', histPrice);
    // // }

    // var datePriceObj = prc.map(obj => {
    //     var nObj = {};
    //     nObj[obj] = obj.Price
    //     return nObj;
    // })
};