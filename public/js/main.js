$(function () {
	$.getJSON('/songs.json', function(songs) {
	  console.log(songs);
	  
	  $.each(songs, function(index, song) {
	  	$('.songitems').append(" <tr>"+
				"<td>"+song.title+"</td>"+  
				"<td>"+song.movie+"</td>"+
				"<td>"+song.composer+"</td>"+
				"<td>"+song.singer+"</td>"+
				"<td>"+song.lyricist+"</td>"+
				"<td>"+song.year+"</td>"+
				"<td>"+song.language+"</td>"+
				"<td>"+song.raaga+"</td>"+
			  "</tr>	");	 
	  });	 
	});	
});