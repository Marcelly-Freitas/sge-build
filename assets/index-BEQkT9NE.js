const a=`<div class="page-wrapper">\r
    <div class="title">\r
        <div>\r
            <h1>Lançar Notas</h1>\r
        </div>\r
        <p class="titlepesquisarturmas">Pesquisar Turmas:</p>\r
\r
        <div class="barradepesquisa">\r
            <input class="search-bar" type="search" name="q" placeholder="" id="searchInput">\r
            <button class="search-btn" type="button" id="searchButton">\r
                <img src="https://s3-alpha-sig.figma.com/img/b282/0d51/04145da7707f32d6a7e68cac0acd6589?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eKI52sv2e6PXRdKIEFKAFkSG59ULFVVgvoCCI1vTwgW9FS2YOOq2hPhfGp~X7ip17aETwG6fRYruSOIa9KHMok0rcZ8M-8~tCowxAKD2wYoYrVm6XG6~mzXiIbtINCO4TCf2ono-F9SiG1VxgKG0Aw2FEaqXJRY4bbhQjzE349CRiSM9j5Of~uCXbVZ18cevnkkfynfZyAv3pL8IQn-zcN-N4DE6DObXFriunTmys39evmu1CefDFUNznSRkxiL74-e8ofbIbwL1dHzSCY~Q72N5sa25NiAbQpLb9BFDi7Jf3zTHwmQ3hl05Iv0az61Jbcy0kyFDlmAsq6-ToK6IOQ__" alt="Ícone de Pesquisa" class="search-icon">\r
            </button>\r
        </div>\r
\r
    </div>\r
    <hr class="linhadivisora"></hr>\r
    <div class="classes" style="display: flex; flex-direction: column;">\r
        <div class="titleClass">\r
            <nav class="title2">Turmas Ativas</nav>\r
        </div>\r
\r
        <table class="tableValues">\r
            <tr class="linhaTabela">\r
                <th class="cardConteudoMateria">Física Aplicada</th>\r
                <th class="cardConteudoAno">Ano: 2016</th>\r
                <th class="cardConteudoResponsavel">Responsável: Prof. Maria Cassia</th>\r
                <th class="btnNotas"><button class="botaoLancarNotas" onclick="navigateToRoute(event, '/turmas/notas/form')">Lançar Notas</button></th>\r
            </tr>\r
            <tr class="linhaTabela">\r
                <th class="cardConteudoMateria">Química Geral</th>\r
                <th class="cardConteudoAno">Ano: 2024</th>\r
                <th class="cardConteudoResponsavel">Responsável: Prof. Andrea Mara</th>\r
                <th class="btnNotas"><button class="botaoLancarNotas" onclick="navigateToRoute(event, '/turmas/notas/form')">Lançar Notas</button></th>\r
            </tr>\r
            <tr class="linhaTabela">\r
                <th class="cardConteudoMateria">História</th>\r
                <th class="cardConteudoAno">Ano: 2023</th>\r
                <th class="cardConteudoResponsavel">Responsável: Prof. Anderson Bel</th>\r
                <th class="btnNotas"><button class="botaoLancarNotas" onclick="navigateToRoute(event, '/turmas/notas/form')">Lançar Notas</button></th>\r
            </tr>\r
            <tr class="linhaTabela">\r
                <th class="cardConteudoMateria">Gramática</th>\r
                <th class="cardConteudoAno">Ano: 2017</th>\r
                <th class="cardConteudoResponsavel">Responsável: Prof. Antonio Vela</th>\r
                <th class="btnNotas"><button class="botaoLancarNotas" onclick="navigateToRoute(event, '/turmas/notas/form')">Lançar Notas</button></th>\r
            </tr>\r
            <tr class="linhaTabela">\r
                <th class="cardConteudoMateria">Geografia</th>\r
                <th class="cardConteudoAno">Ano: 2024</th>\r
                <th class="cardConteudoResponsavel">Responsável: Prof. Sonia Costa</th>\r
                <th class="btnNotas"><button class="botaoLancarNotas" onclick="navigateToRoute(event, '/turmas/notas/form')">Lançar Notas</button></th>\r
            </tr>\r
        </table>\r
        <footer>\r
            <nav class="pagination">\r
                <button id="pagina1">1</button>\r
                <button id="pagina2">2</button>\r
                <button id="pagina3">3</button>\r
            </nav>\r
        </footer>\r
    </div>\r
</div>`;export{a as default};
