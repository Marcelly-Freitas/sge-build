const e=`<div class="authentication-page">\r
    <div class="authentication-page-wrapper">\r
        <div class="flex flex-col gap-2 items-center">\r
            <img width="180px" src="/images/hatgraduation.svg" alt="" srcset="">\r
            <h1 class="text-primary">Recuperação de Senha</h1>\r
            <p class="text-sm">Esqueceu sua senha? Enviaremos um e-mail com instruções de como redefinir sua senha.</p>\r
        </div>\r
\r
        <form id="form-recovery" action="" class="flex flex-col gap-4">\r
            <div class="form-group">\r
                <label for="">Email: </label>\r
                <input id="username" type="email" placeholder="Digite seu email" required>\r
            </div>\r
\r
            <div class="form-group">\r
                <button class="form-login-button" type="submit">Enviar</button>\r
            </div>\r
        </form>\r
\r
        <p class="text-sm">Possui conta? <a class="cursor-pointer" onclick="navigateToRoute(event, '/login')">Fazer Login</a></p>\r
    </div>\r
</div>`;export{e as default};
