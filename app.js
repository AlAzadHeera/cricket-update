$(document).ready(function () {
	let endpoint = 'https://cricapi.com/api/matches?apikey=i5A34OqOdAMyVcA1gi9yjtg3wHx1'
	let apiKey = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8'

	$.ajax({
		url: endpoint,
		contentType: "application/json",
		dataType: 'json',
		success: function (result) {
			var p = result.matches
			for (var key of Object.keys(p)) {
				var $_matches = p[key]
				console.log($_matches.keys)
				var $_team_1 = $_matches['team-1']
				var $_team_2 = $_matches['team-2']
				var $_match_stat = $_matches.matchStarted
				
				if($_match_stat){
					document.getElementById('running-match-table').innerHTML += '<tr><td scope="row"></td><td><a onclick="singleMatch(' + $_matches.unique_id + ')">' + $_team_1 + ' VS ' + $_team_2 + '</a></td></tr>'
				}
				else{
					document.getElementById('upcomming-match-table').innerHTML += '<tr><td scope="row"></td><td><a onclick="singleMatch(' + $_matches.unique_id + ')">' + $_team_1 + ' VS ' + $_team_2 + '</a></td></tr>'
				}
			}
		}
	})
});

