function drawChart(dataPoints,maxPoints,minPoints){
	var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Glucose level"
	},
	axisX:{
		valueFormatString: "DD-MMM HH:mm",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "",
		crosshair: {
			enabled: true
		}
	},
	toolTip:{
		shared:true
	},  
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "Glucose Level",
		markerType: "",
	
		color: "#44b044",
		dataPoints: dataPoints

	},
	{
		type: "line",
		showInLegend: true,
		name: "Minimum Glucose Level",
		markerType: "",
	
		color: "#F08080",
		dataPoints: minPoints
	},
	{
		type: "line",
		showInLegend: true,
		name: "Maximum Glucose Level",
		markerType: "",
	
		color: "#F08080",
		dataPoints: maxPoints
	}]
	});
	chart.render();

	function toogleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else{
			e.dataSeries.visible = true;
		}
		chart.render();
	}

}

$(document).ready(function () {
var dataPoints = []
var maxPoints = []
var minPoints = []
addValues();



function addValues(){
	firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref('/users').child(user.uid).child("glicValues").on('value', function(snapshot) {
				dataPoints = [];
				maxPoints = [];
				minPoints = [];
			
               for(e in snapshot.val()){
					var vl = snapshot.val()[e];
					var d = new Date(vl.time);
					dataPoints.push({x:d, y:vl.val});
					minPoints.push({x:d , y:80});
					maxPoints.push({x:d , y:200});
			
               }
			drawChart(dataPoints,maxPoints,minPoints);
            })
        }
       
    });
}


});
