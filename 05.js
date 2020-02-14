function duplicateRemover(city){
	results = []
	temp = ""
	citySorted = city.sort()
	for(i = 0; i<citySorted.length; i++){
		if(temp != citySorted[i]){
			results.push(citySorted[i])
			temp = citySorted[i]
		}
	}
	return results
}