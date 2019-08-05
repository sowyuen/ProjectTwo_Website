$(document).ready(function(){
    var ctx = $("#doughnutcanvas").get(0).getContext("2d");
    var food = parseInt(document.getElementById("foodSum").innerText);
    var transport = parseInt(document.getElementById("transportSum").innerText);
    var bills = parseInt(document.getElementById("billSum").innerText);
    var entertainment = parseInt(document.getElementById("entertainmentSum").innerText);
    var others = parseInt(document.getElementById("othersSum").innerText);

    console.log(typeof food);
    console.log(food);
    console.log(transport);
    console.log(bills);
    console.log(entertainment);
    console.log(others);

    var dataDoughnut = [
        {
            value: food,
            color: "#F4F0CB",
            highlight: "#F3FAF1",
            label: "Food"
        },
        {
            value: transport,
            color: "#FFDFD3",
            highlight: "#F3FAF1",
            label: "Transport"
        },
        {
            value: bills,
            color: "#B4D7A2",
            highlight: "#F3FAF1",
            label: "Bills"
        },
        {
            value: entertainment,
            color: "#CEC8E4",
            highlight: "#F3FAF1",
            label: "Entertainment"
        },
        {
            value: others ,
            color: "#9DBAD5",
            highlight: "#F3FAF1",
            label: "Others"
        }
    ];

    // var barGraph= [
    //     {
    //         value: barGraph,
    //         color: "orange",
    //         highlight: "black",
    //         label: "aug"
    //     }
    // ];

//     new Chart(document.getElementById("barcanvas"), {
//     type: 'bar',
//     data: {
//       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
//       datasets: [
//         {
//           label: "Population (millions)",
//           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//           data: [2478,5267,734,784,433]
//         }
//       ]
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: 'Predicted world population (millions) in 2050'
//       }
//     }
// });


// var densityCanvas = document.getElementById("barcanvas");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

// var densityData = {
//   label: 'Density of Planets (kg/m3)',
//   data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638]
// };

// var barChart = new Chart(densityCanvas, {
//   type: 'bar',
//   data: {
//     labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
//     datasets: [densityData]
//   }
// });
    var chart = new Chart(ctx).Doughnut(dataDoughnut);

});