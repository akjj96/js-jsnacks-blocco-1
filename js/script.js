

const listaNomi = ['topolino','pippo','pluto','papero'];
console.log(listaNomi)
// creo la richiesta del nome

const userName = prompt("Qual'è il tuo nome?");
console.log(userName)


let check = false;


for (let i = 0; i < listaNomi.length; i++){
    if(listaNomi[i] === userName ){
        check = true;
    }


}
if(check){
    document.write('benvenuto alla festa ' + userName + '!');
}else{
    document.write('Spiacente il tuo nome non è nella lista')
}



