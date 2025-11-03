// Dados simulados de animais (em um projeto real, isso viria de um backend/API)
const animaisParaAdocao = [
    { nome: "Max", tipo: "Cão", idade: "2 anos", descricao: "Extremamente dócil e adora brincar de bola.", imagem: "https://via.placeholder.com/400x200?text=Max" },
    { nome: "Mimi", tipo: "Gato", idade: "1 ano", descricao: "Muito carinhosa e adora cochilos longos.", imagem: "https://via.placeholder.com/400x200?text=Mimi" },
    { nome: "Pipoca", tipo: "Cão", idade: "5 meses", descricao: "Um filhote cheio de energia e muito curioso.", imagem: "https://via.placeholder.com/400x200?text=Pipoca" },
    // Adicione mais animais aqui se desejar
];

/**
 * Função para renderizar os cards de animais na página
 */
function renderizarAnimais() {
    const listaAnimaisDiv = document.getElementById('lista-animais');
    listaAnimaisDiv.innerHTML = ''; // Limpa o conteúdo anterior

    animaisParaAdocao.forEach(animal => {
        // Cria o elemento do card
        const card = document.createElement('div');
        card.classList.add('animal-card');

        // Adiciona o HTML interno do card
        card.innerHTML = `
            <img src="${animal.imagem}" alt="${animal.nome}">
            <div class="animal-card-content">
                <h4>${animal.nome} - ${animal.tipo}</h4>
                <p><strong>Idade:</strong> ${animal.idade}</p>
                <p>${animal.descricao}</p>
                <a href="mailto:contato@cuidaeviver.org?subject=Interesse%20em%20adotar%20o(a)%20${animal.nome}" class="btn-adotar">Adotar ${animal.nome}</a>
            </div>
        `;

        // Adiciona o card à lista
        listaAnimaisDiv.appendChild(card);
    });

    if (animaisParaAdocao.length === 0) {
        listaAnimaisDiv.innerHTML = '<p>Neste momento, não temos animais disponíveis para adoção. Volte em breve!</p>';
    }
}

/**
 * Função para o clique do botão de ação
 */
function configurarBotaoAcao() {
    const btnAcao = document.getElementById('btnAcao');
    btnAcao.addEventListener('click', () => {
        // Rola a página suavemente até a seção de doação (ou outra que você queira destacar)
        document.getElementById('doar').scrollIntoView({ behavior: 'smooth' });

        // Alerta simples para demonstrar interação
        alert('Obrigado pelo interesse! Veja como doar abaixo.');
    });
}

// Executa as funções quando a página estiver totalmente carregada
document.addEventListener('DOMContentLoaded', () => {
    renderizarAnimais();
    configurarBotaoAcao();
});

// Adicione mais funcionalidades JavaScript aqui (formulários de contato, validações, etc.)
// ... (Código JavaScript anterior)

/**
 * Adiciona funcionalidade de copiar PIX
 */
function configurarCopiaPix() {
    document.querySelectorAll('.btn-copiar-pix').forEach(button => {
        button.addEventListener('click', (e) => {
            const pixKey = e.target.getAttribute('data-pix');
            
            // Usa a API de Clipboard para copiar (método moderno)
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(pixKey).then(() => {
                    e.target.textContent = 'Copiado!';
                    setTimeout(() => {
                        e.target.textContent = 'Copiar PIX';
                    }, 2000);
                }).catch(err => {
                    console.error('Erro ao copiar PIX:', err);
                    alert(`Não foi possível copiar. Chave PIX: ${pixKey}`);
                });
            } else {
                // Fallback para navegadores antigos/não seguros
                alert(`Chave PIX: ${pixKey}`);
            }
        });
    });
}

/**
 * Adiciona funcionalidade básica ao formulário de contato
 */
function configurarFormulario() {
    const form = document.getElementById('formContato');
    const statusDiv = document.getElementById('statusMensagem');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio tradicional (recarregar página)

        // Em um projeto real, você enviaria os dados para um servidor (backend) aqui.
        
        statusDiv.style.color = '#4CAF50';
        statusDiv.textContent = '✅ Mensagem enviada com sucesso! Em breve entraremos em contato.';

        // Limpa o formulário após 3 segundos (simulando sucesso)
        setTimeout(() => {
            form.reset();
            statusDiv.textContent = '';
        }, 3000);
    });
}


// Atualiza a execução das funções quando a página estiver totalmente carregada
document.addEventListener('DOMContentLoaded', () => {
    renderizarAnimais();
    configurarBotaoAcao();
    configurarCopiaPix(); // Nova função
    configurarFormulario(); // Nova função
});