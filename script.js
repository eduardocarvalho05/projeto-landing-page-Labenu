function menuShow() {
   let menuMobile = document.querySelector('.mobile-menu');
   if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "./img/menu-button.avif";
   } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "./img/menu-button.avif";
   }
}
/////////////////////////////////

function formulario() {
   let nome = document.getElementById("username").value;
   let email = document.getElementById("email").value;
   let telefone = document.getElementById("telefone").value;

   // Verificando se os campos estão preenchidos
   if (nome === "" || email === "" || telefone === "") {
      alert("Por favor, preencha todos os campos do formulário.");
      return false;
   } else {
      alert(`Usuário ${nome} cadastrado com sucesso! Agora é só aguardar que nossos vendedores entraram em contato!`)
   }

}