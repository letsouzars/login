function logar(){
    let usuario = document.getElementById('inputUsuario').value
    let senha = document.getElementById('inputSenha').value

    if(usuario == "leticia" && senha == "leticia123") {
        window.location.href = "home.html"
    } else {
       Swal.fire({
  title: "Senha/Negado!",
  text: "gugu dada, ta eladinhoo!",
  icon: "error"
}); }

}