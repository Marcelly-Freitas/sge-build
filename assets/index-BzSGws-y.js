const r=`<div class="page-wrapper ativar-inativar-page">\r
    <link rel="stylesheet" href="index.css">\r
    <script src="index.js"><\/script>\r
    <div class="flex justify-between gap-4 items-center">\r
        <h1 class="text-primary">Ativar / Inativar Turma</h1>\r
    </div>\r
\r
    <label id="textoLabelInformeCPF">Pesquisar Turmas:</label>\r
\r
    <div id="pesquisaAluno">\r
        <input type="text" id="CPFInput" name="cpf" maxlength="14">\r
        <input type="submit" id="botaoPesquisar" value=" ">\r
    </div>\r
    <div id="linha"></div>\r
\r
    <div class="card">\r
        <h2>Turmas Cadastradas</h2>\r
\r
        <div class="turma-item">\r
            <h3>Física Aplicada</h3>\r
            <div class="turma-info">\r
                <p>Ano: 2024</p>\r
                <p>Responsável: Prof. Maria Cassia</p>\r
            </div>\r
            <div class="turma-action-ativar">\r
                <input type="checkbox" id="checkbox_ativar">\r
                <label for="checkbox_ativar"></label>\r
            </div>\r
        </div>\r
        <!-- Adicione mais itens de turma conforme necessário -->\r
    </div>\r
</div>`;export{r as default};
