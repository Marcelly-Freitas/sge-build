const r=`<div class="flex flex-col gap-6 classroom-page">\r
    <div class="flex justify-between items-center gap-4">\r
        <h1 class="text-primary">Lista de turmas</h1>\r
\r
        <button class="btn btn-primary cursor-pointer" onclick="navigateToRoute(event, '/turmas/cadastrar')">CADASTRAR</button>\r
    </div>\r
\r
    <div class="flex flex-col gap-4">\r
        <label class="text-primary font-bold text-sm">Pesquisar turma</label>\r
\r
        <form class="classroom-search-form">\r
            <input type="search" placeholder="Pesquisar turma" id="search" name="search">\r
            <button type="submit">\r
                <span class="iconify-inline" data-icon="ic:baseline-search"></span>\r
            </button>\r
        </form>\r
    </div>\r
\r
    <div class="card">\r
        <div class="flex flex-col gap-4">\r
            <div class="lista-wrapper">\r
                <h4 class="classroom-empty-title">Utilize os filtros acima para pesquisar uma turma</h4>\r
            </div>\r
        </div>\r
    </div>\r
</div>`;export{r as default};
