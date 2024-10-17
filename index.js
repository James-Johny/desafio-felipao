
var heroName = "James Johny";
heroXp = heroName.length * 1000;

function cElo(heroXp) {


    while (heroXp < 2) {
        heroXp + 1000
        heroXp++
    }
    return heroXp
}

cElo()

console.log(+ heroName + heroXp)


    if (heroXp <= 1000) {
        elo = "Ferro";

    } else if (heroXp > 1000 && heroXp <= 2000) {
        elo = "Bronze";

    } else if (heroXp > 2000 && heroXp <= 5000) { 
        elo = "Prata";

    } else if (heroXp > 6000 && heroXp <= 7000) {
        elo = "Ouro";

    } else if (heroXp > 7000 && heroXp <= 8000) {
        elo = "Platina";

    } else if (heroXp > 8000 && heroXp <= 9000) {
        elo = "Ascendente";

    } else if (heroXp > 9000 && heroXp <= 10000) {
        elo = "Imortal";

    } else if (heroXp > 10000) {
        elo = "Radiante";

    } else {
        elo = "Unraked";
    }
                                       



    let msg = document.getElementById("heroClass");

        if (heroXp >= 5000) {
            msg.textContent = "Parabéns " + heroName + " você possuí " + heroXp + " pontos de experiência, você é " + elo + "!";
            console.log("Parabéns " + heroName + " você possuí " + heroXp + " pontos de experiência, você é " + elo + "!");
        } else if (heroXp >= 6000) {
            msg.textContent = "Parabéns " + heroName + " você possuí " + heroXp + " pontos de experiência, você é " + elo + "!";
            console.log("Parabéns " + heroName + " você possuí " + heroXp + " pontos de experiência, você é " + elo + "!");
        } else {
            msg.textContent = "Que pena " + heroName + ", você é " + elo + "!";
            console.log("Que pena " + heroName + ", você é " + elo + "!");
        }



    console.log(
        "heroName = " + heroName + 
        " heroXp = " + heroXp + 
        " elo = " + elo
    )
    console.log(msg)
