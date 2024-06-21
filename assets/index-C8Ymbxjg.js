const r=`\r
<div class="page-wrapper boletim-page">\r
    <link rel="stylesheet" href="index.css">\r
    <script src="index.js"><\/script>\r
    <div class="flex flex-col gap-6 cancelamento_matricula">\r
        <div class="title">\r
            <div>\r
                <h1>Consulta de Boletim</h1>\r
            </div>\r
        </div>\r
\r
        <div class="flex flex-col gap-4">\r
            <label class="text-primary font-bold text-sm">Informe o CPF ou Código de Matrícula do Aluno</label>\r
\r
            <form class="registration-search-form" id="searchForm">\r
\r
                <input data-mask="999.999.999-99" placeholder="111.222.333-44" type="search" id="cpf" name="cpf"\r
                    required>\r
\r
                <button type="submit" id="searchButton">\r
                    <span class="iconify-inline" data-icon="ic:baseline-search"></span>\r
                </button>\r
            </form>\r
        </div>\r
\r
        <div class="card consultar-boletim-empty helper" id="bodyCard">\r
            <div class="card_boletim_aluno" id="cardBoletimAluno">\r
                <h2>Boletim</h2>\r
                <div id="nomeAluno">\r
                </div>\r
                <div id="anoLetivo">\r
                </div>\r
                <br>\r
                <div class="cardTitulo">\r
                    Turma\r
                </div>\r
                <div class="cardTitulo">\r
                    Nota\r
                </div>\r
                <div class="cardTitulo">\r
                    Situação\r
                </div>\r
                <div class="cardTitulo">\r
                    Certificado\r
                </div>\r
                <br>\r
                <!--Input do Nome da Turma 1-->\r
                <div class="cardConteudoTurmas" id="turma1">\r
                </div>\r
                <!--Input da Nota do Aluno na Turma 1-->\r
                <div class="cardConteudoTurmas" id="nota1">\r
                </div>\r
                <!--Input da Situação do Aluno na Turma 1-->\r
                <div class="cardConteudoTurmas" id="situacao1">\r
                </div>\r
                <!--Input do Certificado da Turma 1-->\r
                <div class="emitirCertificado">\r
                    <div class="btnNotas">\r
                        <button class="botaoLancarNotas"\r
                            onclick="navigateToRoute(event, '/aluno/certificado-conclusao')">Emitir Certificado</button>\r
                    </div>\r
                </div>\r
                <!--Input do Nome da Turma 2-->\r
                <div class="cardConteudoTurmas" id="turma2">\r
                </div>\r
                <!--Input da Nota do Aluno na Turma 2-->\r
                <div class="cardConteudoTurmas" id="nota2">\r
                </div>\r
                <!--Input da Situação do Aluno na Turma 2-->\r
                <div class="cardConteudoTurmas" id="situacao2">\r
                </div>\r
                <!--Input do Certificado da Turma 2-->\r
                <div class="emitirCertificado">\r
                    <div>\r
                        <button class="botaoLancarNotas" id="certificadoIndisponível">Não Disponível\r
                        </button>\r
                    </div>\r
                </div>\r
                <!--Input do Nome da Turma 3-->\r
                <div class="cardConteudoTurmas" id="turma3">\r
                </div>\r
                <!--Input da Nota do Aluno na Turma 3-->\r
                <div class="cardConteudoTurmas" id="nota3">\r
                </div>\r
                <!--Input da Situação do Aluno na Turma 3-->\r
                <div class="cardConteudoTurmas" id="situacao3">\r
                </div>\r
                <!--Input do Certificado da Turma 3-->\r
                <div class="emitirCertificado">\r
                    <div>\r
                        <button class="botaoLancarNotas" id="certificadoIndisponível">Não Disponível\r
\r
\r
                        </button>\r
                    </div>\r
                </div>\r
                <!--Input do Nome da Turma 4-->\r
                <div class="cardConteudoTurmas" id="turma4">\r
                </div>\r
                <!--Input da Nota do Aluno na Turma 4-->\r
                <div class="cardConteudoTurmas" id="nota4">\r
                </div>\r
                <!--Input da Situação do Aluno na Turma 4-->\r
                <div class="cardConteudoTurmas" id="situacao4">\r
                </div>\r
                <!--Input do Certificado da Turma 4-->\r
                <div class="emitirCertificado">\r
                    <div>\r
                        <button class="botaoLancarNotas" id="certificadoIndisponível">Não Disponível\r
                        </button>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>`;export{r as default};
