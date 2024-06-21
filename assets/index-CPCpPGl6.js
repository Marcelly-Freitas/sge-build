const r=`<div class="page-wrapper">\r
    <div class="flex justify-between gap-4 items-center">\r
        <h1 class="text-primary">Cadastrar Aluno</h1>\r
\r
        <button class="btn btn-primary cursor-pointer"\r
            onclick="navigateToRoute(event, '/aluno/lista')">Lista de\r
            aluno</button>\r
    </div>\r
\r
    <div class="card">\r
        <form class="form-cadastro-aluno form-col"\r
            onsubmit="onFormSubmit(event)">\r
\r
            <div class="form-col-1">\r
                <div class="form-group">\r
                    <label class="text-primary" for="nome">Nome*:</label>\r
                    <input value="Nome genérico" type="text" id="nome"\r
                        name="nome" required>\r
                </div>\r
            </div>\r
\r
            <div class="form-col-1">\r
                <div class="form-group">\r
                    <label class="text-primary" for="email">Email*:</label>\r
                    <input value="email@email.com" type="email" id="email"\r
                        name="email" required>\r
                </div>\r
            </div>\r
\r
            <div class="form-col-2">\r
                <div class="form-group">\r
                    <label class="text-primary" for="cpf">CPF*:</label>\r
                    <input value="999.999.999-99" data-mask="999.999.999-99"\r
                        type="text" id="cpf" name="cpf" required>\r
                </div>\r
\r
                <div class="form-group">\r
                    <label class="text-primary" for="expedidor">RG e Órgão\r
                        Expedidor*:</label>\r
                    <input value="PC" type="text" id="expedidor"\r
                        name="expedidor" required>\r
                </div>\r
\r
                <div class="form-group">\r
                    <label class="text-primary"\r
                        for="nacionalidade">Nacionalidade*:</label>\r
                    <select id="nacionalidade" name="nacionalidade" required>\r
                        <option value>Selecione uma nacionalidade</option>\r
                        <option selected value="Brasileiro">Brasileiro</option>\r
                    </select>\r
                </div>\r
\r
                <div class="form-group">\r
                    <label class="text-primary"\r
                        for="naturalidade">Naturalidade*:</label>\r
                    <select id="naturalidade" name="naturalidade" required>\r
                        <option value>Selecione um estado</option>\r
                        <option value="AC">Acre</option>\r
                        <option value="AL">Alagoas</option>\r
                        <option value="AP">Amapá</option>\r
                        <option value="AM">Amazonas</option>\r
                        <option value="BA">Bahia</option>\r
                        <option value="CE">Ceará</option>\r
                        <option value="DF">Distrito Federal</option>\r
                        <option value="ES">Espírito Santo</option>\r
                        <option value="GO">Goiás</option>\r
                        <option value="MA">Maranhão</option>\r
                        <option value="MT">Mato Grosso</option>\r
                        <option value="MS">Mato Grosso do Sul</option>\r
                        <option value="MG" selected>Minas Gerais</option>\r
                        <option value="PA">Pará</option>\r
                        <option value="PB">Paraíba</option>\r
                        <option value="PR">Paraná</option>\r
                        <option value="PE">Pernambuco</option>\r
                        <option value="PI">Piauí</option>\r
                        <option value="RJ">Rio de Janeiro</option>\r
                        <option value="RN">Rio Grande do Norte</option>\r
                        <option value="RS">Rio Grande do Sul</option>\r
                        <option value="RO">Rondônia</option>\r
                        <option value="RR">Roraima</option>\r
                        <option value="SC">Santa Catarina</option>\r
                        <option value="SP">São Paulo</option>\r
                        <option value="SE">Sergipe</option>\r
                        <option value="TO">Tocantins</option>\r
                    </select>\r
                </div>\r
\r
                <div class="form-group">\r
                    <label class="text-primary" for="celular">Telefone\r
                        Celular:</label>\r
                    <input value="(99) 99999-9999" data-mask="(99) 99999-9999"\r
                        type="text" id="celular" name="celular">\r
                </div>\r
\r
                <div class="form-group">\r
                    <label class="text-primary"\r
                        for="telefone-residencial">Telefone residencial:</label>\r
                    <input value="(99) 99999-9999" data-mask="(99) 99999-9999"\r
                        type="text" id="telefone-residencial"\r
                        name="telefone-residencial">\r
                </div>\r
            </div>\r
\r
            <div class="form-col-1">\r
                <div class="form-group">\r
                    <label class="text-primary"\r
                        for="endereco">Endereço*:</label>\r
                    <input value="Rua genérica, 200" type="text" id="endereco"\r
                        name="endereco" required>\r
                </div>\r
            </div>\r
\r
            <div class="form-col-2">\r
                <div class="form-group">\r
                    <label class="text-primary" for="bairo">Bairro*:</label>\r
                    <input value="Bairro genérico" type="text" id="bairo"\r
                        name="bairo" required>\r
                </div>\r
\r
                <div class="form-group">\r
                    <label class="text-primary" for="cidade">Cidade*:</label>\r
                    <input value="Cidade genérica" type="text" id="cidade"\r
                        name="cidade" required>\r
                </div>\r
            </div>\r
\r
            <div class="form-col-1x2">\r
                <div class="form-group">\r
                    <label class="text-primary" for="nome">CEP*:</label>\r
                    <input value="99999-999" data-mask="99999-999" type="text"\r
                        id="nome" name="cep" required>\r
                </div>\r
\r
                <div class="form-group">\r
                    <label class="text-primary"\r
                        for="complemento">Complemento:</label>\r
                    <input type="text" id="complemento" name="complemento">\r
                </div>\r
            </div>\r
\r
            <div class="form-col-2">\r
                <div class="form-group">\r
                    <button class="btn" type="button" onclick="navigateToRoute(event, '/aluno/lista')">\r
                        Cancelar\r
                    </button>\r
                </div>\r
                <div class="form-group">\r
                    <button class="btn btn-primary"  type="submit">\r
                        Cadastrar\r
                    </button>\r
                </div>\r
            </div>\r
        </form>\r
    </div>\r
</div>\r
`;export{r as default};
