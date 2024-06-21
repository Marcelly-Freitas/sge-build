const a=`<div class="flex flex-col gap-6 cancelamento_matricula">\r
    <div class="title">\r
        <div>\r
            <h1>Cancelamento de Matrícula</h1>\r
        </div>\r
    </div>\r
\r
    <div class="flex flex-col gap-4">\r
        <label class="text-primary font-bold text-sm">Informe o CPF ou Código de Matrícula do Aluno</label>\r
\r
        <form class="registration-search-form">\r
            <input data-mask="999.999.999-99" placeholder="xxx.xxx.xxx-xx" type="search" id="cpf" name="cpf" value="999.999.999-91" required>\r
\r
            <button type="submit">\r
              <span class="iconify-inline" data-icon="ic:baseline-search"></span>\r
            </button>\r
        </form>\r
    </div>\r
\r
    <div class="card cancelamento_matricula_empty helper">\r
        <h3>Utilize a pesquisa acima para encontrar aluno</h3>\r
    </div>\r
\r
    <div class="card hidden cancelamento_matricula_wrapper">\r
        <div class="flex flex-col gap-4">\r
            <div>\r
                <h2>Turmas Atualmente Matriculado</h2>\r
                <p class="font-bold nome_aluno">Aluno: Carlos da Silva Salles</p>\r
            </div>\r
\r
            <div class="lista-wrapper">\r
            </div>\r
        </div>\r
    </div>\r
</div>`;export{a as default};
