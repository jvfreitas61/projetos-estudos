function calcular(){
    var fpeso = document.getElementById('txtpeso')
    var faltura = document.getElementById('txtaltura')
    var res = document.querySelector('h4#res')
    var imc = (Number(fpeso.value)/(Number(faltura.value)**2)).toFixed(2)
    
    if(Number(fpeso.value)<=0 || Number(faltura.value)<=0){
        window.alert('ERRO! Digite os valores corretamente!')
    } else{

    

    var fsex = document.getElementsByName('radsex')
    var imagem = document.querySelector('img#foto')
    var texto = document.querySelector('div#tex-res')
    var caixares = document.querySelector('div#caixa-resultado')

    if(imc<18.5){
        res.innerHTML = `${imc} (Abaixo do peso)`
        texto.innerHTML = `Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.`
        if(fsex[0].checked){
            foto.setAttribute('src', 'assets/img/imc_mas_01.png.webp')
        }else if(fsex[1].checked){
            foto.setAttribute('src', 'assets/img/imc_fem_01.png.webp')
        }
    } else if(imc >= 18.5 && imc < 25){
        res.innerHTML = `${imc} (Peso normal)`
        texto.innerHTML = `Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.`
        if(fsex[0].checked){
            foto.setAttribute('src', 'assets/img/imc_mas_02.png.webp')
        }else if(fsex[1].checked){
            foto.setAttribute('src', 'assets/img/imc_fem_02.png.webp')
        }
    } else if(imc >= 25 && imc < 30){
        res.innerHTML = `${imc} (Sobrepeso)`
        texto.innerHTML = `Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.`
        if(fsex[0].checked){
            foto.setAttribute('src', 'assets/img/imc_mas_03.png.webp')
        }else if(fsex[1].checked){
            foto.setAttribute('src', 'assets/img/imc_fem_03.png.webp')
        }
    } else if(imc >= 30 && imc < 35){
        res.innerHTML = `${imc} (Obesidade grau 1)`
        texto.innerHTML = `Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.`
        if(fsex[0].checked){
            foto.setAttribute('src', 'assets/img/imc_mas_04.png.webp')
        }else if(fsex[1].checked){
            foto.setAttribute('src', 'assets/img/imc_fem_04.png.webp')
        }
    } else if(imc >= 35 && imc < 40){
        res.innerHTML = `${imc} (Obesidade grau 2)`
        texto.innerHTML = `Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.`
        if(fsex[0].checked){
            foto.setAttribute('src', 'assets/img/imc_mas_05.png.webp')
        }else if(fsex[1].checked){
            foto.setAttribute('src', 'assets/img/imc_fem_05.png.webp')
        }
    } else if(imc >= 40){
        res.innerHTML = `${imc} (Obesidade grau 3)`
        texto.innerHTML = `Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.`
        if(fsex[0].checked){
            foto.setAttribute('src', 'assets/img/imc_mas_06.png.webp')
        }else if(fsex[1].checked){
            foto.setAttribute('src', 'assets/img/imc_fem_06.png.webp')
        }
    }    
    caixares.style.display = 'block'
}
}