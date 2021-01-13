function alternatingSums(a) {
    let team1 = 0;
    let team2 = 0;

    a.forEach((i, index) => {
        if(index % 2 === 0) {
            team1 += i;
        } else{
            team2 += i;
        }
    });

    return [team1, team2];
}