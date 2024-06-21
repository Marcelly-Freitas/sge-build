const a=`<div class="flex flex-col gap-6 cancelamento_matricula">\r
    <div class="title">\r
        <div>\r
            <h1>Emitir Declaração de Matrícula</h1>\r
        </div>\r
    </div>\r
\r
    <div class="flex flex-col gap-4">\r
        <label class="text-primary font-bold text-sm">Informe o CPF ou Código de Matrícula do Aluno</label>\r
\r
   <div class="flex flex-col gap-4">\r
    <form class="registration-search-form" id="searchFormDeclaracao">\r
        <input data-mask="999.999.999-99" placeholder="111.222.333-44" type="search" id="cpfDeclaracao" name="cpf"\r
            required>\r
\r
        <button type="submit" id="searchButtonDeclaracao">\r
            <span class="iconify-inline" data-icon="ic:baseline-search"></span>\r
        </button>\r
    </form>\r
    </div>\r
\r
    <div class="emissaoDeclaracao" id="identificadorEmissaoDeclaracao">\r
        <div class="declaracao">\r
            <img width="180px" src="/images/hatgraduation.svg" alt="" srcset="">\r
            <h1>Declaração de Matrícula</h1>\r
            <p>Declaramos, para os devidos fins, que o(a) aluno(a)</p>\r
            <div id="nomeAlunoDeclaracao"></div>\r
            <p>está regularmente matriculado(a) nesta instituição de ensino e durante o ano letivo de</p>\r
            <div id="anoLetivoDeclaracao"></div>\r
            <p>o mesmo encontra-se matriculado na turma de</p>\r
            <div id="turmaDeclaracao"></div>\r
            <div class="assinatura">\r
                <p>Maria Cassia de S. Arruda</p>\r
                <p>__________________________</p>\r
                <p>Nome do Instrutor</p>\r
            </div>\r
            <p class="data">Data: 01 de Janeiro de 2024</p>\r
        </div>\r
    </div>`;export{a as default};
