document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
  
      
    const storedAccounts = JSON.parse(sessionStorage.getItem("accountData"));
  
          const login = {
              emailOuNome: event.target.emailOuNome.value,
              senha: event.target.senha.value
          }
  
          for(i = 0; i < storedAccounts.length; i++) {
              if(storedAccounts[i].email === login.emailOuNome && storedAccounts[i].senha === login.senha || storedAccounts[i].nome === login.emailOuNome && storedAccounts[i].senha === login.senha){
                  alert("funcionou");
                  return;
              }
          }
          alert("Login falhou. Verifique seu email ou senha.");
      });
  