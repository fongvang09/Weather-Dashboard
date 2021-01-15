// function searchCity(cityName) {
    
    // var cityName = $(this).attr("data-city");
    // var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=b677057162374afb06c46dd53575233c";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Minneapolis,Minnesota&appid=b677057162374afb06c46dd53575233c";
    // alert("working")
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var temp = $("#temp");
            temp.text("Temperature: "+(((response.list[0].main.temp) -273.15) * 1.8 + 32).toFixed(2) + " °F");
            // temp.text((((("Temperature: "+response.list[0].main.temp) - 273.15) * 1.8 + 32).toFixed(2)) + " °F"); // NaN
        var humidity = $("#humidity");
            humidity.text(("Humidity: "+response.list[0].main.humidity)+ "%");
        var wind = $("#wind");
            wind.text(("Wind Speed: "+response.list[0].wind.speed)+ " MPH");
        // localStorage.setItem("text", cityName)
        var tRow = $("<tr>")
        var tCol1 = $("<td>")
        var tCol2 = $("<td>")
        var tCol3 = $("<td>")
        var tCol4 = $("<td>")
        var tCol5 = $("<td>")
        tCol1.text(response.list[0].dt_txt)
        tCol1.text("Temp: "+(((response.list[0].main.temp) -273.15) * 1.8 + 32).toFixed(2) + " °F")
        tCol2.text("Temp: "+(((response.list[8].main.temp) -273.15) * 1.8 + 32).toFixed(2) + " °F")
        tCol3.text("Temp: "+(((response.list[16].main.temp) -273.15) * 1.8 + 32).toFixed(2) + " °F")
        tCol4.text("Temp: "+(((response.list[24].main.temp) -273.15) * 1.8 + 32).toFixed(2) + " °F")
        tCol5.text("Temp: "+(((response.list[32].main.temp) -273.15) * 1.8 + 32).toFixed(2) + " °F")

        tRow.append(tCol1, tCol2, tCol3, tCol4, tCol5)
        $("tBody").append(tRow)
        
        var Fahrenheit = ((response.list[0].main.temp - 273.15) * 1.8 + 32).toFixed(2)
                
        $("#city-div").append(cityName);

        //     var cityDiv = $("<div>");
        //     cityDiv.append();
        //   $("#city-view").prepend(cityDiv)
        // });
        // var a = $("<button>");
        
    })

    $("#select-city").on("click", function(event) {
        event.preventDefault();
        var cityName = $("#city-input").val().trim();
        alert("working")
        // searchCity(cityName);
    });
// }    

function renderButton(){
    
    a.attr("data-city", city[i]);
    $("#select-city").on("click", function(e){
        e.preventDefault();
        var cityName = $("#city-input").val().trim()
    });
    
}
    
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date //+' '+time;
document.getElementById("date").innerHTML = dateTime;    
