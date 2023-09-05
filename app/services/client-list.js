import { api } from "./api.js";

const listaCliente = (nome, email, id) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td class="p-2" data-id>${nome}</td>
        <td class="p-2">${email}</td>
        <td class="text-center p-2"><a href="editar-cliente.html?id=${id}"><i class="fa-solid fa-pencil hover:text-green-500 editar-excluir"></i></a></td>
        <td class="text-center p-2"><i class="fa-solid fa-trash hover:text-red-600 editar-excluir"></i></td>
    `;

    tr.dataset.id = id;

    console.log(tr)

    return tr;
};

const table = document.querySelector("[data-tabela-clientes]");
const dadosClientes = await api.lista();

dadosClientes.forEach((cliente) => {
    table.appendChild(listaCliente(cliente.nome, cliente.email, cliente.id));
});
