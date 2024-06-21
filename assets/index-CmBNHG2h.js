const r=`<div class="authentication-page">\r
    <div class="authentication-page-wrapper">\r
        <div class="flex flex-col gap-2 items-center">\r
            <img width="180px" src="/images/hatgraduation.svg" alt="" srcset="">\r
            <h1 class="text-primary">Login</h1>\r
            <p class="text-sm">Forneça suas credenciais para acessar a sua conta</p>\r
        </div>\r
\r
        <form id="form-login" action="" class="flex flex-col gap-4">\r
            <div class="form-group">\r
                <label for="">Email: </label>\r
                <input id="username" value="professor@email.com" type="email" placeholder="Digite seu email" required>\r
            </div>\r
\r
            <div class="form-group">\r
                <label for="">Senha: </label>\r
                <input id="password" value="admin" type="password" placeholder="Digite seu email" required>\r
            </div>\r
\r
            <div class="form-group">\r
                <button class="form-login-button" type="submit">ENTRAR</button>\r
            </div>\r
        </form>\r
\r
        <p class="text-sm">Esqueceu sua senha? <a class="cursor-pointer" onclick="navigateToRoute(event, '/recuperar')">Recupere agora</a></p>\r
    </div>\r
</div>`;export{r as default};
