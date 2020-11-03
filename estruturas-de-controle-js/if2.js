function teste1(num ){

    //apenas uma única sentença de código não é necessário chaves
    if(num > 7)
        console.log(num)

        //essa identação não conta para o js 
        console.log('final')

}

teste1(6)
teste1(8)

function teste2(num) {

    // não use ';' com as estrturas de controle
    if (num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)
