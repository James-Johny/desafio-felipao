print "Digite seu nome de Herói: "
heroName = gets.chomp

heroXp = heroName.length * 1000 + heroName.length * 321

if heroXp <= 1000
  elo = "Ferro"
elsif heroXp > 1000 && heroXp <= 2000
  elo = "Bronze"
elsif heroXp > 2000 && heroXp <= 5000
  elo = "Prata"
elsif heroXp > 6000 && heroXp <= 7000
  elo = "Ouro"
elsif heroXp > 7000 && heroXp <= 8000
  elo = "Platina"
elsif heroXp > 8000 && heroXp <= 9000
  elo = "Ascendente"
elsif heroXp > 9000 && heroXp <= 10000
  elo = "Imortal"
elsif heroXp > 10000
  elo = "Radiante"
else
  elo = "Unranked"
end

if heroXp < 5000 && heroXp > 6000
  puts "Parabéns #{heroName}, você possui #{heroXp} pontos de experiência, você é #{elo}."
else
  puts "Que pena #{heroName}, você é #{elo}."
end
