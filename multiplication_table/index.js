for (var i = 1; i < 9; i++) {
	var line = "";
	for (var j = 1; j <= i; j++) {
		if(j == 1){
			line += (i + "*" + j + "=" + i*j)
		}else{
			line += (" " + i + "*" + j + "=" + i*j)
		}
	}
	console.log(line);
}