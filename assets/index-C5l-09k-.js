const r=`<div class="flex flex-col gap-6 cancelamento_matricula">\r
    <link rel="stylesheet" href="index.css">\r
    <script src="index.js"><\/script>\r
    <div class="title">\r
        <div>\r
            <h1>Certificado de Conclusão</h1>\r
        </div>\r
    </div>\r
\r
    <div class="flex flex-col gap-4">\r
        <label class="text-primary font-bold text-sm">Informe o CPF ou Código de Matrícula do Aluno</label>\r
\r
        <form class="registration-search-form" id="searchForm">\r
            <input data-mask="999.999.999-99" placeholder="111.222.333-44" type="search" id="cpf" name="cpf"\r
                disabled>\r
\r
            <button type="submit" id="searchButton">\r
                <span class="iconify-inline" data-icon="ic:baseline-search"></span>\r
            </button>\r
        </form>\r
    </div>\r
\r
    <div class="emissaoCertificado" id="emissaoCertif">\r
        <div class="certificado">\r
            <img width="180px" src="/images/hatgraduation.svg" alt="" srcset="">\r
            <h1>Certificado de Conclusão</h1>\r
            <p>Este certificado é concedido a</p>\r
            <div id="nomeAluno1"></div>\r
            <p>por ter concluído a turma de</p>\r
            <div id="nomeTurma1"></div>\r
            <p>com sucesso em</p>\r
            <div id="anoLetivo1"></div>\r
            <div class="assinatura">\r
                <p>Maria Cassia de S. Arruda</p>\r
                <p>__________________________</p>\r
                <p>Nome do Instrutor</p>\r
            </div>\r
            <p class="data">Data: 01 de Janeiro de 2024</p>\r
        </div>\r
    </div>`;export{r as default};
