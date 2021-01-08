function getMinTime(buildingOpenTime,offloadTime){

	buildingOpenTime.sort((a,b)=>{
		return a-b;
	})

	offloadTime.sort((a,b)=>{
		return b-a;
	})

	let i=0,j=0,count=0,time=0,max=0;

	while(i<buildingOpenTime.length){

		while(j<offloadTime.length && count!=4){
			time=(buildingOpenTime[i]+offloadTime[j]);
			max=Math.max(time,max);
			count++;
			j++;
		}
		count=0;
		i++;
	}

	return max;
}

console.log(getMinTime([8, 10],[2,2,3,1,8,7,4,5])); // 16
