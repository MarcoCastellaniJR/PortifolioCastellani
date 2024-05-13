let a = 10;
// nesse caso a variável a é visível apenas nessa classe


// com o module.export vocÊ libera para outras classes poderem usar
module.exports = {
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Log Boa noite';
    }
}