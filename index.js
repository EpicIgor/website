function validaCPF(cpf) {
    var Soma = 0
    var Resto
  
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
       return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return false
  
    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return false
  
    Soma = 0
  
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return false
  
    return true
  }

  document.getElementById("cep").addEventListener("blur", function() {
    const cep = this.value.replace(/\D/g, "");

    document.getElementById("cepError").textContent = "";

    if (cep.length !== 8) {
        document.getElementById("cepError").textContent = "CEP inválido. CEP deve conter 8 números.";
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => response.json()).then((data) => {
        if ("erro" in data) {
            document.getElementById("cepError").textContent = "CEP não encontrado.";
            return;
        }

        document.getElementById("rua").value = data.logradouro;
        document.getElementById("complemento").value = data.complemento;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;      
        });
  });

 


 function phoneConfig (event) {

    identifier = event.target.id

    if(identifier === "celular") {

    value = event.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");

    event.target.value = value;

    value = value.replace(/(\d{5})(\d{4})/, "$1-$2");

    event.target.value = value;
    }else {

        value = event.target.value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");

        event.target.value = value;

        value = value.replace(/(\d{4})(\d{4})/, "$1-$2");

        event.target.value = value;

    }

 };   

document.getElementById("celular").addEventListener("keyup", (event) => {
    console.log(event.target.id);
    phoneConfig(event);
    
});

document.getElementById("telefone").addEventListener("keyup", (event) => {
    
    phoneConfig(event);
    
});

document.getElementById("cep").addEventListener("keyup", (event) => {

    value = event.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d{3})/, "$1-$2");
    event.target.value = value;

});
  
 

document.getElementById("signupForm").addEventListener("submit", (event) => {

    event.preventDefault();

    document.getElementById("cpfError").textContent = "";
    
     if(validaCPF(event.target.cpf.value) === false) {
        document.getElementById("cpfError").textContent = "CPF inválido! Por favor, insira um CPF válido.";
        return;
    }

     const accounts = JSON.parse(sessionStorage.getItem("accountData")) || [];
 


        const Newaccount = {
        nome: event.target.nome.value,
        aniversario: event.target.aniversario.value,
        genero: event.target.genero.value,
        nomeDaMae: event.target.mae.value,
        cpf: event.target.cpf.value,
        email: event.target.email.value,
        celular: event.target.celular.value,
        telefone: event.target.telefone.value,
        cep: event.target.cep.value,
        rua: event.target.rua.value,
        numeroDaRua: event.target.numeroDaRua.value,
        complemento: event.target.complemento.value,
        bairro: event.target.bairro.value,
        cidade: event.target.cidade.value,
        senha: event.target.senha.value
    }
   
    accounts.push(Newaccount);
    
    sessionStorage.setItem("accountData", JSON.stringify(accounts));
    
    window.location.href = "./login.html";    

});



