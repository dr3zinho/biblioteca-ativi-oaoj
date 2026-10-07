// ==========================================
// SISTEMA DE BIBLIOTECA
// ==========================================


// ==========================================
// CRUD DE LIVROS
// ==========================================

let livros = JSON.parse(localStorage.getItem("livros")) || [];

const formularioLivro = document.getElementById("formLivro");

const listaLivros = document.getElementById("listaLivros");

const titulo = document.getElementById("titulo");

const autor = document.getElementById("autor");

const ano = document.getElementById("ano");

const categoria = document.getElementById("categoria");

const indiceLivro = document.getElementById("indiceLivro");

const botaoSalvar = document.getElementById("botaoSalvar");


// SALVAR LIVROS

function salvarLivros() {

    localStorage.setItem(
        "livros",
        JSON.stringify(livros)
    );

}


// LISTAR LIVROS

function listarLivros() {

    if (!listaLivros) {
        return;
    }

    listaLivros.innerHTML = "";


    if (livros.length === 0) {

        listaLivros.innerHTML = `
            <p class="mensagem-vazia">
                Nenhum livro cadastrado.
            </p>
        `;

        return;
    }


    livros.forEach(function(livro, index) {

        const card = document.createElement("div");

        card.classList.add("card-livro");


        card.innerHTML = `

            <h4>
                ${livro.titulo}
            </h4>

            <p>
                <strong>Autor:</strong>
                ${livro.autor}
            </p>

            <p>
                <strong>Ano:</strong>
                ${livro.ano}
            </p>

            <p>
                <strong>Categoria:</strong>
                ${livro.categoria}
            </p>

            <div class="acoes">

                <button
                    class="btn-editar"
                    onclick="editarLivro(${index})"
                >
                    Editar
                </button>

                <button
                    class="btn-excluir"
                    onclick="excluirLivro(${index})"
                >
                    Excluir
                </button>

            </div>

        `;


        listaLivros.appendChild(card);

    });

}


// CADASTRAR / ALTERAR LIVRO

if (formularioLivro) {

    formularioLivro.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const novoLivro = {

                titulo: titulo.value,

                autor: autor.value,

                ano: ano.value,

                categoria: categoria.value

            };


            if (indiceLivro.value === "") {

                livros.push(novoLivro);

                alert("Livro cadastrado com sucesso!");

            } else {

                const index =
                    Number(indiceLivro.value);

                livros[index] = novoLivro;

                alert("Livro alterado com sucesso!");

            }


            salvarLivros();

            listarLivros();

            formularioLivro.reset();

            indiceLivro.value = "";

            botaoSalvar.textContent =
                "Cadastrar Livro";

        }
    );

}


// EDITAR LIVRO

function editarLivro(index) {

    const livro = livros[index];


    titulo.value = livro.titulo;

    autor.value = livro.autor;

    ano.value = livro.ano;

    categoria.value = livro.categoria;


    indiceLivro.value = index;


    botaoSalvar.textContent =
        "Salvar Alteração";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// EXCLUIR LIVRO

function excluirLivro(index) {

    const confirmar = confirm(
        "Tem certeza que deseja excluir este livro?"
    );


    if (confirmar) {

        livros.splice(index, 1);

        salvarLivros();

        listarLivros();

        alert("Livro excluído com sucesso!");

    }

}


// ==========================================
// CADASTRO DE USUÁRIO
// ==========================================

const formCadastro =
    document.getElementById("formCadastro");


if (formCadastro) {

    formCadastro.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const nome =
                document.getElementById("nome").value.trim();


            const email =
                document.getElementById("email").value.trim();


            const telefone =
                document.getElementById("telefone").value.trim();


            const senha =
                document.getElementById("senha").value;


            // Verificação

            if (
                nome === "" ||
                email === "" ||
                senha === ""
            ) {

                alert(
                    "Preencha todos os campos obrigatórios."
                );

                return;

            }

            if (senha.length < 6) {

    alert(
        "A senha precisa ter pelo menos 6 caracteres."
    );

    return;

}

const formatoEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if (!formatoEmail.test(email)) {

    alert(
        "Digite um e-mail válido."
    );

    return;

}


            // Criando usuário

            const usuario = {

                nome: nome,

                email: email,

                telefone: telefone,

                senha: senha

            };


            // Salvando usuário

            localStorage.setItem(
                "usuario",
                JSON.stringify(usuario)
            );


            alert(
                "Cadastro realizado com sucesso!"
            );


            // Limpar formulário

            formCadastro.reset();


            // Ir para login

            window.location.href =
                "login.html";

        }
    );

}


// ==========================================
// LOGIN
// ==========================================

const formLogin =
    document.getElementById("formLogin");


if (formLogin) {

    formLogin.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const emailLogin =
                document.getElementById("email").value.trim();


            const senhaLogin =
                document.getElementById("senha").value;


            const usuarioSalvo =
                JSON.parse(
                    localStorage.getItem("usuario")
                );


            // Verifica se existe usuário

            if (!usuarioSalvo) {

                alert(
                    "Nenhum usuário cadastrado. Faça seu cadastro primeiro."
                );

                return;

            }


            // Confere os dados

            if (
                emailLogin === usuarioSalvo.email &&
                senhaLogin === usuarioSalvo.senha
            ) {

                alert(
                    "Login realizado com sucesso!"
                );


                window.location.href =
                    "livros.html";

            } else {

                alert(
                    "E-mail ou senha incorretos."
                );

            }

        }
    );

}


// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================

const formContato =
    document.getElementById("formContato");


if (formContato) {

    formContato.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Mensagem enviada com sucesso!"
            );


            formContato.reset();

        }
    );

}


// ==========================================
// INICIAR LISTA DE LIVROS
// ==========================================

listarLivros();

/* ==========================================
   RECURSOS
========================================== */

.recursos {
    max-width: 1100px;
    margin: auto;
    padding: 50px 20px;
}

.recursos > h2 {
    text-align: center;
    margin-bottom: 35px;
    font-size: 30px;
}

.recursos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
}

.recurso {
    background-color: white;
    padding: 30px;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s;
}

.recurso:hover {
    transform: translateY(-5px);
}

.icone {
    font-size: 40px;
    margin-bottom: 15px;
}

.recurso h3 {
    margin-bottom: 12px;
}

.recurso p {
    color: #666;
    line-height: 1.5;
}