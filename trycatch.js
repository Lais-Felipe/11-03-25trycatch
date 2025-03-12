// const nome = "Lais"; // "const"=somente a leitura

// try {//"try" não paraliza o código
    //nome = "Felipe"; // tentaviva de execução de mudar o nome
// } catch (err) { // essa linha encerra o bloco de código do "try" e inicia o bloco de notas "catch"
    // console.error("Ops! A variável somente leitura 'nome' não pode ser alterada. Veja o erro: " + err); // nome da variável que vai perceber o erro do "catch"
// } //encerra o bloco de código do catch

// console.log("Teste");
 
// nome = "Lais"; // quando voce executa um código ilegal ele não deixa você continuar a execução do scripth

// console.log("Teste2");

function fazerLogin() {  
    let usuario = document.getElementById("txtLogin"); //declaração da variavel usuario que ela vai receber o elemento 
    let senha = document.getElementById("txtSenha"); //declaração da variavel senha que ela vai senha 
    try { //ele inicia a tentativa de execução que estiver dentro do bloco try
        if (usuario.value !== "usuario123"){ //ele vai verificar o valor do elemento usuario. Quando tem uma "!" significa que é diferente 
            throw new Error("Erro: usuario incorreta."); // ele vai validar o usuario e lançar um novo erro, um erro generico 
        } // encerra o bloco de código do usuario
        if (senha.value !== "senha123"){ // 
            throw new Error("Erro: Senha Incorreta"); // vai validar se a senha está correta 
        }
        console.log("Login realizado com sucesso.");
    } catch (erro) { //encerrado do bloco de códigos try e iniciamento do bloco catch
        console.error(erro.message); // enviar uma mensagem do erro que é (erro.massage)
    } // encerra do bloco do catch
} // encerra o bloco do "fazerlogin"