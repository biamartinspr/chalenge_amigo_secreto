//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

      
        function adicionarAmigo(){
            let nome = document.getElementById("amigo").value;
            if (nome === ""){
                alert("O campo está vazio. Digite um nome");
            }else{
                let lista = document.getElementById("listaAmigos");
                let item = document.createElement("li");
                item.textContent = nome;
                lista.appendChild(item);
                document.getElementById("amigo").value="";
            }
        }

        function sortearAmigo() {
            let lista = document.querySelectorAll("#listaAmigos li");
                let indiceSorteado = Math.floor(Math.random() * lista.length);
                let amigoSorteado = lista[indiceSorteado].textContent;
                document.getElementById("listaAmigos").innerText = "Amigo sorteado: " + amigoSorteado;
            
        }



        
    



