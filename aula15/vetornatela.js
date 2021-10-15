let num = [0, 1, 7, 4, 2, 9]
num.sort(); 
/*
for(let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}