const lista = async () => {
    try {
        const url = await fetch("http://localhost:3000/clientes");
        const data = await url.json();

        if (!url.ok) {
            throw new Error("Erro ao buscar a lista de clientes");
        }

        return data;
    } catch (erro) {
        throw new Error(erro);
    }
};

const addCliente = async (nome, email) => {
    try {
        const url = await fetch("http://localhost:3000/clientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
            }),
        });

        const data = await url.json();

        if (!url.ok) {
            throw new Error("Erro ao adicionar o cliente");
        }

        return data;
    } catch (erro) {
        throw new Error(erro);
    }
};

const deleteCliente = async (id) => {
    try {
        const url = await fetch(`http://localhost:3000/clientes/${id}`, {
            method: "DELETE",
        });
        const data = await url.json();

        if (!url.ok) {
            throw new Error("Erro ao excluir o cliente");
        }

        return data;
    } catch (erro) {
        throw new Error(erro);
    }
};

const getCliente = async (id) => {
    try {
        const url = await fetch(`http://localhost:3000/clientes/${id}`);
        const data = await url.json();

        if (!url.ok) {
            throw new Error("Erro ao obter informações do cliente");
        }

        return data;
    } catch (erro) {
        throw new Error(erro);
    }
};

const updateCliente = async (id, nome, email) => {
    try {
        const url = await fetch(`http://localhost:3000/clientes/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
            }),
        });

        const data = await url.json();

        if (!url.ok) {
            throw new Error("Erro ao atualizar o cliente");
        }

        return data;
    } catch (erro) {
        throw new Error(erro);
    }
};

export const api = {
    lista,
    addCliente,
    deleteCliente,
    getCliente,
    updateCliente,
};
