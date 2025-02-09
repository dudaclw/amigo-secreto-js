let amigos = [];

const obterElemento = (id) => document.querySelector(id);

const criarElemento = (elemento) => document.createElement(elemento);

const validarInput = (value) => {
  if (value.trim() === "") {
    alert("Informe um nome para adicionar a lista de amigos.");
    return false;
  }
  return true;
};

const limparImput = (input) => (input.value = "");

const adicionarAmigo = () => {
  let ul = obterElemento("#names-list");
  let li = criarElemento("li");
  let input = obterElemento("#name");

  if (!validarInput(input.value)) return;

  amigos.push(input.value);

  limparImput(input);

  li.textContent = amigos[amigos.length - 1];
  ul.appendChild(li);
};

const validarArray = () => {
  if (amigos.length < 2) {
    const mensagem = document.createElement('div');
    mensagem.id = 'mensagem'; 
    mensagem.textContent = "É preciso adicionar pelo menos dois amigos para fazer o sorteio.";
    document.body.appendChild(mensagem);

    setTimeout(() => {
      mensagem.style.opacity = 0;
      setTimeout(() => {
        document.body.removeChild(mensagem);
      }, 500);
    }, 3000);

    return false;
  }
  return true;
};

const sortear = () => {
  if (!validarArray()) return;

  let ul = obterElemento("#sorted-name");
  ul.innerHTML = "";

  let li = criarElemento("li");
  li.textContent = amigos[Math.floor(Math.random() * amigos.length)];
  ul.appendChild(li);
};
