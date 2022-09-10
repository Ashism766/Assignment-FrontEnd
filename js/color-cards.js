
let red = "bg-danger";
let green = "bg-success";

const humidityCard = (value = 30)=>{
    var mood = "good";
    $("#humidity .value").text(value+"%");


    setColorWidth(value, "#p-humidity")

};


const windCard = (value = 8) =>{
    $("#wind .value").text(value +"km/h");
    let width = Math.ceil((value/200)*100);
    
 
    value = width;


    setColorWidth(width, "#p-wind")


};


const Precipitation = (value = 14)=>{
    $("#precipitation .value").text(value +"cm");
    if(value > 100){
        width = 100;
    }
    else{
        width = value;
    }

    setColorWidth(width, "#p-p")


};

const setColorWidth = (value, id)=>{

    var width = value;
    if(value <33)
    {
        if($(id).hasClass(red))
        {
            $(id).removeClass(red);
        }
        $(id).addClass(green);
        

    }

if(value > 33&& value <= 70){
    mood = "normal";

    if($(id).hasClass(red))
        {
            $(id).removeClass(red);
        }

        if($(id).hasClass(green))
        {
            $(id).removeClass(green);
        }

}
else if(value > 70){
    mood = "bad";
    if($(id).hasClass(green))
    {
        $(id).removeClass(green);
    }
    $(id).addClass(red);
}

$(id).css("width", width+"%");


};


const uv = (value = 3)=>{
    $("#uv .value").text(value);
    var width;
    if(value > 15){
        width = 100;
    }
    else{
        width = Math.ceil((value/15)*100);
    }

    setColorWidth(width, "#p-uv");
};

const feels = (value = 30)=>{
    $("#feels .value").text(value+"°");
    let width;
    if(value>60)
    {
        width = 100;
    }
    else{
        width = Math.ceil((value/60)*100);
    }
    setColorWidth(width, "#p-feel");
};

const chance = (value = 42)=>{
    $("#chance .value").text(value+"%");
    let width;
    if(value>100){
        width = 100;
    }
    else{
        width = value;
    }

    setColorWidth(width, "#p-chance")
}



const Color = {
    humidityf: humidityCard,
    windf: windCard,
    Precipitationf: Precipitation,
    uvf: uv,
    feelf: feels,
    chancef: chance
};


