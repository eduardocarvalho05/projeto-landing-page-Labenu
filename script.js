function menuShow() {
   let menuMobile = document.querySelector('.mobile-menu');
   if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "./img/menu-button.avif";
   } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "./img/x-icon.png";
   }
}
/////////////////////////////////

// function formulario() {
//    let nome = document.getElementById("username").value;
//    let email = document.getElementById("email").value;
//    let telefone = document.getElementById("telefone").value;

//    // Verificando se os campos estão preenchidos
//    if (nome === "" || email === "" || telefone === "") {
//       alert("Por favor, preencha todos os campos do formulário.");
//       return false;
//    } else {
//       alert(`Usuário ${nome} cadastrado com sucesso! Agora é só aguardar que nossos vendedores entraram em contato!`)
//    }
// }


function formulario() {
   let nome = document.getElementById("username").value;
   let email = document.getElementById("email").value;
   let telefone = document.getElementById("telefone").value;

   // Limpar mensagens anteriores
   const mensagemSucessoDiv = document.getElementById("mensagem-sucesso");
   const mensagemErroDiv = document.getElementById("mensagem-erro");
   mensagemSucessoDiv.style.display = "none";
   mensagemErroDiv.textContent = "";

   // Verificando se os campos estão preenchidos
   if (nome === "" || email === "" || telefone === "") {
      mensagemErroDiv.textContent = "Por favor, preencha todos os campos do formulário.";
   } else {
      // Exibir a mensagem de sucesso na div "mensagem-sucesso"
      mensagemSucessoDiv.innerHTML = `Usuário <span style="color: black">${nome}</span> cadastrado com sucesso! Agora é só aguardar que nossos vendedores entrarão em contato!`;
      mensagemSucessoDiv.style.display = "block";
   }
}

