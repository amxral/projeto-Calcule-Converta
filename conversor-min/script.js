function somar() { 
    var n1 = document.getElementById('n1')
    var res = document.getElementById('res')

    var n1 = Number(n1.value)


    var soma = n1 * 60
    var soma = Number.parseFloat(soma)
    
    if (n1 == 0) {
        res.innerHTML = `Insira um valor diferente de <mark>0</mark>`
    }
    else {
    res.innerHTML = `${n1}min convertido em segundos é igual a: <mark><strong>${soma} segundos</strong></mark>`
    }
}