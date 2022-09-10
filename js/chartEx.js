const plot = (dataArry)=>{

    const ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: "line",
    
        data: {
            labels: ["6:00", "8:00", "10:00", "12:00", "14:00", "16:00","18:00", "20:00", "22:00"],
            datasets:[{
                label: "Rain probability",
                data: dataArry,
                fill: true,
                borderColor: "black",
                backgroundColor: "#2196f3",
                borderWidth: 1
            }]
            
    
        },
        options: {
            responsive:true,
            maintainAspectRatio: false,
    
            scales: { x: { title: { display: true, text: 'Time --->' }},
    
            y: { title: { display: true, text: 'Probability --->' }}
                
        
            }
           
        }
    });
    
    };



    const NewYork = {
        name: "New York",
        sunrise: "7:19",
        sunset: "19:52",
        temperature: 27,
        humidity: 82,
        wind: 8,
        precepitation: 10,
        Uv: 5,
        Feels: 30,
        chance: 42,
    
        TodayRain: [10, 34, 56, 70, 45, 23, 20, 25, 22],
        Tommorrow: [20, 35, 50, 90, 43, 20, 18, 16, 10]
    };
    
    const Chennai = {
        name: "Chennai",
        sunrise: "6:10",
        sunset: "18:30",
        temperature: 35,
        humidity: 90,
        wind: 20,
        precepitation: 25,
        Uv: 3,
        Feels: 30,
        chance: 56,
        TodayRain: [10, 34, 15, 70, 45, 23, 20, 25, 22],
        Tommorrow: [20, 35, 50, 65, 43, 20, 18, 96, 10]
    };
    
let City = [NewYork, Chennai];
    
   
let Ashis = 90999;