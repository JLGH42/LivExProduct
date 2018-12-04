 function CreateTableFromJSON() {
        var wineData = [
            {
                "Title": "1990 La Tâche, Domaine De La Romanée-Conti",
                "Price": "99.99",
                "Vintage": "2000",
                "Type": "Red",
                "Abv": "12%",
                "Country": "United Kingdom",
                "Region": "",
                "Appellation": "Surrey",
                "CurrentDate": "21/08/18",
                "HistoricalDate": "21/07/18",
                "HarvestSeason": "Spring"
            },
            {
                "Title": "Second Wine",
                "Price": "1000",
                "Vintage": "2050",
                "Type": "Sparkling",
                "Abv": "22%",
                "Country": "Portugal",
                "Region": "Du Ruera",
                "Appellation": "DO Duera",
                "CurrentDate": "22/11/18",
                "HistoricalDate": "09/07/18",
                "HarvestSeason": "Spring"
            }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
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

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
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
    }