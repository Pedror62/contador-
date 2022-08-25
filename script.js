function contar() {
    
    let ini = document.getElementById('txti')
    let fim =  document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        alert('[ERRO] sem dados nescesarios!')  
    } else {
        res.innerHTML = 'contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //contagem crescente
        if(i < f ){
            for( let c = i; c <= f; c += p) {
                res.innerHTML +=  `${c} \u{261E}`
        }      
         //contagem decrecente
        }  else {
            for(let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{261E}`
            }
        }  
        res.innerHTML+= `\u{270C}`              
    }  

}