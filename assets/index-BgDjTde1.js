const a=`<div class="page-wrapper notas-form">\r
    \r
    <div>\r
        <button class="listadeturmas" onclick="navigateToRoute(event, '/turmas/notas/lista')">Lista de Turmas</button>\r
    </div>\r
\r
    \r
    <div class="title">\r
        <div>\r
            <h1>Lançar Notas</h1>\r
        </div>\r
        \r
        <p class="titlepesquisarturmas">Pesquisar Turmas:</p>\r
\r
        <div class="barradepesquisa">\r
            <input class="search-bar" type="search" name="q" placeholder="">\r
            <button class="search-btn" type="submit">\r
                <img\r
                    src="https://s3-alpha-sig.figma.com/img/b282/0d51/04145da7707f32d6a7e68cac0acd6589?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eKI52sv2e6PXRdKIEFKAFkSG59ULFVVgvoCCI1vTwgW9FS2YOOq2hPhfGp~X7ip17aETwG6fRYruSOIa9KHMok0rcZ8M-8~tCowxAKD2wYoYrVm6XG6~mzXiIbtINCO4TCf2ono-F9SiG1VxgKG0Aw2FEaqXJRY4bbhQjzE349CRiSM9j5Of~uCXbVZ18cevnkkfynfZyAv3pL8IQn-zcN-N4DE6DObXFriunTmys39evmu1CefDFUNznSRkxiL74-e8ofbIbwL1dHzSCY~Q72N5sa25NiAbQpLb9BFDi7Jf3zTHwmQ3hl05Iv0az61Jbcy0kyFDlmAsq6-ToK6IOQ__"\r
                    alt="Ícone de Pesquisa" class="search-icon">\r
            </button>\r
        </div>\r
\r
    </div>\r
    <hr class="linhadivisora">\r
    </hr>\r
\r
    <h2 class="nomemateria">Física Aplicada</h2>\r
    <h3 class="anomateria">Ano: 2016</h3>\r
    <h3 class="nomeprofessor">Professora: Maria Cássia</h3>\r
    <h3 class="data">Data: 28/04/2024</h3>\r
\r
    <div class="classes" style="display: flex; flex-direction: column;">\r
        <table id="tabelamateria">\r
            <thead>\r
                <tr class="cabecalho">\r
                    <th class="fileira1">Aluno</th>\r
                    <th class="fileira2">Prova</th>\r
                    <th class="fileira3">Atividade</th>\r
                    <th class="fileira4">Observações</th>\r
                </tr>\r
            </thead>\r
            <tbody>\r
                <tr>\r
                    <td class="nomealuno">Carlos José da Silva Mota</td>\r
                    <td class="notaprova" contenteditable="true">10</td>\r
                    <td class="notaatividade" contenteditable="true">10</td>\r
                    <td class="observacoes" contenteditable="true"></td>\r
                </tr>\r
                <tr>\r
                    <td class="nomealuno">Beatriz Mariana Arouche</td>\r
                    <td class="notaprova" contenteditable="true">9</td>\r
                    <td class="notaatividade" contenteditable="true">7,5</td>\r
                    <td class="observacoes" contenteditable="true"></td>\r
                </tr>\r
                <tr>\r
                    <td class="nomealuno">José Trindade Pacheco</td>\r
                    <td class="notaprova" contenteditable="true">4,5</td>\r
                    <td class="notaatividade" contenteditable="true">8</td>\r
                    <td class="observacoes" contenteditable="true">Reposição</td>\r
                </tr>\r
                <tr>\r
                    <td class="nomealuno">Josélia Kelly Mendes Abreu</td>\r
                    <td class="notaprova" contenteditable="true">9,5</td>\r
                    <td class="notaatividade" contenteditable="true">6</td>\r
                    <td class="observacoes" contenteditable="true"></td>\r
                </tr>\r
            </tbody>\r
        </table>\r
    </div>\r
\r
    <div class="botaosavecancell"> \r
        <button type="button" onclick="cancelarEdicao()" id="botaocancelar">Cancelar</button>\r
        <button type="button" onclick="salvarInformacoes()" id="botaosalvar">Salvar</button>\r
    </div>\r
    \r
    \r
    <footer>\r
        <nav class="pagination">\r
                <button id="pagina1">1</button>\r
                <button id="pagina2">2</button>\r
                <button id="pagina3">3</button>\r
        </nav>\r
    </footer>\r
    \r
</div>`;export{a as default};
