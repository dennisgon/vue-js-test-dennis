function filteringAge (people){
	temp = []
	for(var key in people){
		if(people[key]['age']<21){
			temp.push(people[key]);
		}
	}
	return temp;
}