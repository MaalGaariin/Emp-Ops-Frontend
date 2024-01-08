$(function(){
     
	// Pie Chart
	
	var ctx = document.getElementById('pieChart').getContext('2d');
	var pieChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: ['PHP', 'IOS', 'Design', 'Android', 'Business', 'Testing'],
			datasets: [{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'#101484',
					'#353847',
					'#7f2df6',
					'#1bd790',
					'#e8da0d',
					'#f62d82'
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			legend: {
				display: false
			}
		}
	});
	
	// Line Chart
	
	var ctx = document.getElementById("lineChart").getContext('2d');
	var lineChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May"],
			datasets: [{
				label: 'Developer',
				data: [20,	10,	5,	5,	20],
				fill: false,
				borderColor: '#373651',
				backgroundColor: '#373651',
				borderWidth: 1
			},
					  {
				label: 'Marketing',
				data: [2,	2,	3,	4,	1],
				fill: false,
				borderColor: '#E65A26',
				backgroundColor: '#E65A26',
				borderWidth: 1
			},
					  {
				label: 'Marketing',
				data: [1,	3,	6,	8,	10],
				fill: false,
				borderColor: '#a1a1a1',
				backgroundColor: '#a1a1a1',
				borderWidth: 1
			}]
		},
		options: {
		  responsive: true,
			legend: {
				display: false
			}
		}
	});

});