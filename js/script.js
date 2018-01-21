var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	var countryCapital = $('#country-capital').val();

	if (!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	var liCountry = $('<li class="country">');
	resp.forEach(function(item) {
		var ulCountry = $('<ul>');
		var smallApha2code = item.alpha2Code.toLowerCase();
		var img_url = '<img src="http://flags.fmcdn.net/data/flags/w580/' + smallApha2code + '.png" alt="Flag: ' + item.name + '">';
		$('<li class="country">').appendTo(countriesList)
			.append($('<ul>')
				.append($('<li>').text('Country: ' + item.name))
				.append($('<li>').text('Capital: ' + item.capital))
				.append($('<li>').text('Region: ' + item.region))
				.append($('<li>').text('Alpha 2 Code: ' + item.alpha2Code))
				.append($('<li>' + img_url))
			)
		$('</li>').appendTo(countriesList)
	});

}