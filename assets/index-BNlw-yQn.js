const r=`<div class="container matricula-page">\r
    <div class="flex justify-between gap-4 items-center">\r
        <h1 class="text-primary">Cadastrar Turma</h1>\r
\r
        <button class="btn btn-primary cursor-pointer" onclick="navigateToRoute(event, '/turmas/visualizar')">Lista de turmas</button>\r
    </div>\r
\r
    <div class="card">\r
        <form id="turma-form" onsubmit="onFormSubmit(event)">\r
            <div class="flex flex-col gap-4">\r
                <div class="form-col-2">\r
                    <div class="form-group">\r
                        <label for="nome">Nome da Turma:</label>\r
                        <input type="text" id="nome" name="nome" required>\r
                    </div>\r
\r
                    <div class="form-group">\r
                        <label for="professor">Professor Responsável:</label>\r
                        <input type="text" id="professor" name="professor" required>\r
                    </div>\r
                </div>\r
\r
                <div class="form-col-2">\r
                    <div class="form-group">\r
                        <label for="inicio">Data de Início das Aulas:</label>\r
                        <input type="date" id="inicio" name="inicio" required>\r
                    </div>\r
            \r
                    <div class="form-group">\r
                        <label for="encerramento">Previsão de Encerramento:</label>\r
                        <input type="date" id="encerramento" name="encerramento" required>\r
                    </div>\r
                </div>\r
                <div class="form-col-2">\r
                    <div class="form-group">\r
                        <label for="max_alunos">Quantidade Máxima de Alunos:</label>\r
                        <input type="number" id="max_alunos" name="max_alunos" required>\r
                    </div>\r
            \r
                    <div class="form-group">\r
                        <label for="dias_semana">Dias de Aula na Semana:</label>\r
                        <div class="checkbox-group">\r
                            <input type="checkbox" id="dia_d" name="dia_d" value="D">\r
                            <label for="dia_d">D</label>\r
                            <input type="checkbox" id="dia_s1" name="dia_s1" value="S">\r
                            <label for="dia_s1">S</label>\r
                            <input type="checkbox" id="dia_t" name="dia_t" value="T">\r
                            <label for="dia_t">T</label>\r
                            <input type="checkbox" id="dia_q1" name="dia_q1" value="Q">\r
                            <label for="dia_q1">Q</label>\r
                            <input type="checkbox" id="dia_q2" name="dia_q2" value="Q">\r
                            <label for="dia_q2">Q</label>\r
                            <input type="checkbox" id="dia_s2" name="dia_s2" value="S">\r
                            <label for="dia_s2">S</label>\r
                            <input type="checkbox" id="dia_s3" name="dia_s3" value="S">\r
                            <label for="dia_s3">S</label>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="form-col-2">\r
                    <div class="form-group">\r
                        <label for="horario">Horário das Aulas:</label>\r
                        <input type="time" id="horario" name="horario" required>\r
                    </div>\r
            \r
                    <div class="form-group">\r
                        <label for="semestre">Semestre/Ano:</label>\r
                        <input type="text" id="semestre" name="semestre" required>\r
                    </div>\r
                </div>\r
\r
                <div class="form-col-1">\r
                    <div class="flex justify-end gap-4">\r
                        <button type="submit" class="btn btn-primary" id="salvar-btn">Cadastrar turma</button>\r
                    </div>\r
                </div>\r
            </div>\r
        </form>\r
    </div>\r
</div>`;export{r as default};
