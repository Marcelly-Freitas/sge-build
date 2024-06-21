const r=`<div class="flex flex-col gap-6 frequencia-page">\r
    <div class="title">\r
        <div>\r
            <h1>Lançar frequência</h1>\r
        </div>\r
    </div>\r
\r
    <div class="flex flex-col gap-4">\r
        <label class="text-primary font-bold text-sm">Pesquisar turma</label>\r
\r
        <form class="frequencia-search-form">\r
            <input type="search" placeholder="Pesquisar turma" id="search" name="search" value="Física" required>\r
            <button type="submit">\r
                <span class="iconify-inline" data-icon="ic:baseline-search"></span>\r
            </button>\r
        </form>\r
    </div>\r
\r
    <div class="card">\r
        <div class="flex flex-col gap-4">\r
            <div class="lista-wrapper">\r
                <h4 class="frequencia-empty-title">Utilize os filtros acima para pesquisar uma turma</h4>\r
            </div>\r
        </div>\r
    </div>\r
</div>`;export{r as default};
