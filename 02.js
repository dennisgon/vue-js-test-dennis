function reverse(kalimat){
	result = "";
  	kalimats = kalimat.split(" ")
  	for(i = kalimats.length-1; i>=0; i--){
  		result = result+" "+kalimats[i];
  	}
  	return result.trim();
}