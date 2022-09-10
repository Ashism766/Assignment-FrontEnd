
const FindCity = (Name)=>{
    for(var i = 0; i < City.length; i++)
    {
        if(City[i].name === Name)
        {
            console.log(City[i]);
            return City[i];
        }

    }
};

const ShowCity = (Name)=>{

    let City = FindCity(Name);

    plot(City.TodayRain, "Rain");
    Color.humidityf(City.humidity);
    Color.Precipitationf(City.precepitation);
    Color.windf(City.wind);
    Color.uvf(City.Uv);
    Color.feelf(City.Feels);
    Color.chancef(City.chance);

    var temp = City.temperature;
    $(".active h1").text(temp+"°");


};

var CharI = 0;

$(".next-day").click(function (e) { 
    

    var cityName = $(".active .cityName").text();
    let City = FindCity(cityName);
    if(!CharI){
    let chartStatus = Chart.getChart("myChart"); // <canvas> id

    if (chartStatus != undefined) {
    chartStatus.destroy();
    }

    plot(City.Tommorrow);

    $(".next-day").text("Today >");

    CharI = 1;
    }
    else{

        let chartStatus = Chart.getChart("myChart"); // <canvas> id

        if (chartStatus != undefined) {
        chartStatus.destroy();
        }
    
        plot(City.TodayRain);
        
        $(".next-day").text("next day >");
        CharI = 0;


    }


    
});


// plot(Chennai.TodayRain, "Rain");

var cityName = $(".active .cityName").text();
console.log(cityName);
ShowCity(cityName);


$(".carousel-arrow").click(function (e) { 

    var cityName;

    const x = setInterval(()=>{
        cityName = $(".active .cityName").text();
        let chartStatus = Chart.getChart("myChart"); // <canvas> id

    if (chartStatus != undefined) {
    chartStatus.destroy();
    }
  
    ShowCity(cityName);
    
    clearInterval(x);


    },1000);
     
    

    
});

$("#Checkbox").click(function (e) { 
    var x = $("#Checkbox").is(":checked");


    var cityName = $(".active .cityName").text();

    if(x)
    { 
        console.log(x);
        let City = FindCity(cityName);
        let Ftemp= City.temperature;
        
        let feelTemp = City.Feels;
        $("#feels h1").text(feelTemp+"°");

        Color.feelf(feelTemp);


        $(".active h1").text(Ftemp+"°");

        $("#feels .t2").text("25");
        $("#feels .t5").text("50");

        width = Math.ceil((feelTemp/50)*100);
        $("#p-feel").css("width", width+"%");

        // ShowCity(cityName);
    }
    else{

        let City = FindCity(cityName);
        let iCtemp = City.temperature;
        var Ftemp = iCtemp*1.8 +32;

        $(".active h1").text(Ftemp+"°");

        let feelTemp = City.Feels*1.8+32;

        $("#feels h1").text(feelTemp+"°");

        $("#feels .t2").text("70");
        $("#feels .t5").text("150");

        width = Math.ceil((feelTemp/160)*100);
        $("#p-feel").css("width", width+"%");



    }
    
});



hj
46











