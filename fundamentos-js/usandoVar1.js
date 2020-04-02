/*
    A variável var dentro de um bloco (que não seja uma função)
    ficará visivel para outros escopos.
*/
{
    {
        {
            { 
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

/* ------------------------------------------------------------- */

function teste() {
    var local = 123
    console.log(local)
}
teste()
//console.log(local) //Erro