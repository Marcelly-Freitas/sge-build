const r=`\r
<div class="page-wrapper frequencia-form-page">\r
    <div class="flex justify-between gap-4 items-center">\r
        <h1 class="text-primary">Lançar Frequência</h1>\r
\r
        <button class="btn btn-primary" onclick="navigateToRoute(event, '/turmas/frequencia/lista')">Lista turmas</button>\r
    </div>\r
        \r
    <div class="card loading-wrapper">\r
        <div class="loading">Carregando...</div>\r
    </div>\r
        \r
    <div class="hidden card form-wrapper">\r
        <div class="frequencia-form-wrapper flex flex-col gap-4">\r
            <div class="flex flex-col gap-4">\r
                <div id="frequencia-nome" class="font-bold text-primary">\r
                    Física Aplicada\r
                </div>\r
        \r
                <div id="frequencia-ano" class="font-bold">\r
                    Ano Letivo: 2024\r
                </div>\r
                <div id="frequencia-responsavel" class="font-bold">\r
                    Professora: Maria Cassia\r
                </div>\r
            </div>\r
\r
            <div class="flex flex-col items-end">\r
                <div id="data" class="font-bold">\r
                    Data: 28/04/2024\r
                </div>\r
            </div>\r
\r
            <div class="form flex flex-col gap-4">\r
                <div class="header">\r
                    <div class="row">\r
                        <div>ALUNO</div>\r
                        <div>PRESENÇA</div>\r
                        <div>AUSÊNCIA</div>\r
                        <div>JUSTIFICADO</div>\r
                    </div>\r
                </div>\r
\r
                <div class="body flex flex-col gap-4">\r
                    <div class="row">\r
                        <div>Carlos José da Silva Mota</div>\r
                        <div>\r
                            <input type="radio" class="hidden" id="presenca" name="frequency" value="P">\r
                            <label for="presenca">P</label>\r
                        </div>\r
                        <div>\r
                            <input type="radio" class="hidden" id="ausencia" name="frequency" value="F">\r
                            <label for="ausencia">P</label>\r
                        </div>\r
                        <div>\r
                            <input type="radio" class="hidden" id="justificado" name="frequency" value="J">\r
                            <label for="justificado">Justificado</label>\r
                        </div>\r
                    </div>\r
                    \r
                </div>\r
\r
                <div class="flex justify-end">\r
                    <button class="btn btn-primary" type="submit">Lançar frequência</button>\r
                </div>\r
            </div>\r
        </div>\r
        \r
        \r
    </div>\r
</div>`;export{r as default};
