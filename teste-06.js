let x = 100

try {


    if(x <= 100){

        console.log("Número válido")

    }else {

        //criando e lançando um objeto do tipo Error
        throw{
            "name": "NúmeroInvalido",
            "message": "Qualquer número maior que 100 é inválido"
        }
    
    }
    
}catch (error) {
    console.log(error.message)
}