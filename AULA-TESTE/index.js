let nome = "João";

let xp = 4100;

let level = []

if (xp <= 1000) {
    level.push("Ferro");
} 
else if (xp >= 1001 && xp <= 2000) {
    level.push("Bronze");
} 
else if (xp >= 2001 && xp <= 5000) {
    level.push("Prata");
} 
else if (xp >= 5001 && xp <= 7000) {
    level.push("Ouro");
}
else if (xp >= 7001 && xp <= 8000) {
    level.push("Platina");
} 
else if (xp >= 8001 && xp <= 10000) {
    level.push("Ascendente");
}
else if (xp >= 9001 && xp <= 10000) {
    level.push("Mestre");
}
else if (xp >= 10001) {
    level.push("Radiante");
}    

console.log("O Heroi de nome " + nome + " esta no nivel " + level + " com " + xp + " de XP.");
