// url https://leetcode.com/discuss/interview-question/1002811/Amazon-or-OA-20201-or-Fresh-Promotion

function winPrediction (groupArr,cartArr){
	let group1 = groupArr[0];
	let group2 = groupArr[1];
	group1Counter = 0;
	group2Counter = 0;
	group1Position = [null,null];
	group2Position = [null,null];
	for (let i=0;i<cartArr.length;i++){
		if(group1Counter<group1.length&&(cartArr[i] === group1[group1Counter] || group1[group1Counter] === "anything")){
			if(group1Counter === 0){
				group1Position[0] = i;
			}
			if (group1Counter === group1.length-1){
				group1Position[1] =i;
			}
			group1Counter++;
		}else if (group1Counter>=group1.length){
		}else{
			group1Counter = 0;
			group1Position = [null,null]
		}
		if(group2Counter<group2.length&&(cartArr[i] === group2[group2Counter] || group2[group2Counter] === "anything")){
			console.log("Entered");
			if(group2Counter === 0){
				group2Position[0] = i;
			}
			if (group2Counter === group2.length-1){
				group2Position[1] =i;
			}
			group2Counter++;
		}else if (group2Counter>=group2.length){
		}else{
			group2Counter = 0;
			group2Position = [null,null]
		}


	}
	console.log("logging",group1Position,group2Position);
	if(group1Position[1]<group2Position[0]||group2Position[1]<group1Position[0]){
		return 0
	}else{
		return 1
	}
}
