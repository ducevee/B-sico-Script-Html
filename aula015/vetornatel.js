let valores = [1, 5, 3 , 7, 4]
valores.push(1)     
valores.sort()
console.log(valores)
if (valores.indexOf(6) == -1) {
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O valor 7 está na posição ${valores.indexOf(8)}`)

}



/*
console.log(`O vetor tem ${valores.length} elementos`)

for(pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}