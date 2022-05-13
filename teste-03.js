new Promise(
    function(resolve){
        let a = 50;
        let b = 60;

        //forçando um erro na promisse (variável "c" não foi declarada)
        //resolve(a + c)

        //resolve a função
        resolve(a + b)
    }
).then(
    function(res){
        console.log("Resultado: ",res)
        return res
    }
).then(
    function(res){
        console.log("Resultado * 2: ",res * 2)
        return res
    }
).then(
    function(res){
        console.log("Resultado * 3: ",res * 3)
        return res
    }
).catch(
    (erro) => {
        console.log("Erro:",erro)
    }
)
