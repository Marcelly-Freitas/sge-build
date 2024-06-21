const r=`\r
<div class="page-wrapper matricula-form-page">\r
    <div class="flex justify-between gap-4 items-center">\r
        <h1 class="text-primary">Matricular Aluno</h1>\r
\r
        <button class="btn btn-primary" onclick="navigateToRoute(event, '/turmas/matricula')">Lista Turmas</button>\r
    </div>\r
        \r
    <div class="card loading-wrapper">\r
        <div class="loading">Carregando...</div>\r
    </div>\r
        \r
    <div class="hidden card form-wrapper">\r
        <div class="attendance-form-wrapper flex flex-col gap-4">\r
            <div class="flex flex-col">\r
                <div class="font-bold" id="nomeMateria">\r
                    Física Aplicada\r
                </div>\r
        \r
                <div class="font-bold" id="period">\r
                    Ano Letivo: 2024\r
                </div>\r
\r
                <div class="font-bold" id="nomeProfessor">\r
                    Professora: Maria Cassia\r
                </div>\r
            </div>\r
\r
            <div class="flex flex-col items-end">\r
                <div class="font-bold" id="data">\r
                    Data: 28/04/2024\r
                </div>\r
            </div>\r
\r
            <div class="student-lista-wrapper">\r
            </div>\r
        </div>\r
    </div>\r
</div>`;export{r as default};
