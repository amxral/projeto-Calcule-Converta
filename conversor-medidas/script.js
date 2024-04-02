function somar() { 
    var metro = document.getElementById('n1')
    var res = document.getElementById('res')

    var metro = Number(metro.value)

    var km = metro * 0.001
    var km = Number.parseFloat(km)
    var cm = metro * 100
    var cm = Number.parseFloat(cm)
    var mm = metro * 1000
    var mm = Number.parseFloat(mm)
    var pes = metro * 3.2
    var pes = Number.parseFloat(pes)
    var pol = metro * 39.3
    var pol = Number.parseFloat(pol)
    if (n1 == 0) {
        res.innerHTML = `Insira um valor diferente de <mark>0</mark>`
    }
    else {
    res.innerHTML = `${metro}(m) convertido em <strong>quilometros</strong> é igual a: <mark><strong>${km} (Km)</strong></mark><br>
    <br>
    ${metro}(m) convertido em <strong>centímetros</strong> é igual a: <mark><strong>${cm} (cm)</strong></mark><br>
    <br>
    ${metro}(m) convertido em <strong>milímetros</strong> é igual a: <mark><strong>${mm} (mm)</strong></mark><br>
    <br>
    ${metro}(m) convertido em <strong>pés</strong> é igual a: <mark><strong>${pes} (ft)</strong></mark><br>
    <br>
    ${metro}(m) convertido em <strong>polegadas</strong> é igual a: <mark><strong>${pol} (in)</strong></mark><br>`
    }
}