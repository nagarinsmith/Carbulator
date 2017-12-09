$(document).ready(function () {
var dataPoints = []
addValues();

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Site Traffic"
	},
	axisX:{
	
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "Number of Visits",
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
		markerType: "square",
	
		color: "#F08080",
		dataPoints: dataPoints
	}]
});
chart.render();

function addValues(){
	firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref('/users').child(user.uid).child("glicValues").on('value', function(snapshot) {
               for(e in snapshot.val()){
                   firebase.database().ref("/users").child(user.uid).child("glicValues").child(e).on("value",function(snap){
						dataPoints.push({x: snap.val().time ,y:snap.val().val});
						
                    });
               }
        
            });
        }
        else{
            console.log('in');
        }
    });
}

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

});