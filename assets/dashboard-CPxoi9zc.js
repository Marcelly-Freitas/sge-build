const t=`<div class="dashboard-layout">\r
	<aside class="dashboard-layout-sidebar">\r
		<div class="dashboard-layout-sidebar-title">\r
			<div class="sidebar-icon-wrapper">\r
				<figure class="user-avatar">\r
					<img class="auth-image" src="" alt="">\r
				</figure>\r
			</div>\r
			\r
			<a class="logout sidebar-text-wrapper">\r
				<h1 class="auth-username text-primary">Nome do Usuário</h1>\r
				<span class="link text-sm">Sair <span class="iconify-inline" data-icon="ic:baseline-log-out"></span></span>\r
			</a>\r
		</div>\r
\r
		<ul class="dashboard-layout-sidebar-menu">\r
			<li class="dashboard-layout-sidebar-menu-item" role="professor|aluno">\r
				<a class="dashboard-layout-sidebar-menu-parent text-primary">\r
					<div class="sidebar-icon-wrapper">\r
						<span class="iconify-inline" data-icon="ic:outline-manage-accounts"></span>\r
					</div>\r
					<span class="sidebar-text-wrapper">Aluno</span>\r
\r
					<div class="sidebar-icon-wrapper">\r
						<span class="iconify-inline dropdown-icon transition-all" data-icon="ic:round-keyboard-arrow-down"></span>\r
					</div>\r
				</a>\r
				<div class="dashboard-layout-sidebar-menu-children">\r
					<ul>\r
						<li class="sidebar-link" role="professor"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/aluno/lista')">Cadastro de Alunos</a></li>\r
						<li class="sidebar-link" role="aluno"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/aluno/frequencia')">Consultar frequência</a></li>\r
						<li class="sidebar-link" role="professor"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/aluno/declaracao_matricula')">Emitir declaração de matrícula</a></li>\r
						<li class="sidebar-link" role="aluno"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/aluno/boletim')">Consultar Boletim</a></li>\r
						<li class="sidebar-link" role="professor"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/aluno/cancelar-matricula')">Cancelamento Matrícula</a></li>\r
						<li class="sidebar-link" role="aluno"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/aluno/certificado-conclusao')">Certificado de Conclusão</a></li>\r
					</ul>\r
				</div>\r
			</li>\r
\r
			<li class="dashboard-layout-sidebar-menu-item" role="professor">\r
				<a class="dashboard-layout-sidebar-menu-parent text-primary">\r
					<div class="sidebar-icon-wrapper">\r
						<span class="iconify-inline" data-icon="ic:outline-school"></span>\r
					</div>\r
					<span class="sidebar-text-wrapper">Turmas</span>\r
\r
					<div class="sidebar-icon-wrapper">\r
						<span class="iconify-inline dropdown-icon transition-all" data-icon="ic:round-keyboard-arrow-down"></span>\r
					</div>\r
				</a>\r
				<div class="dashboard-layout-sidebar-menu-children">\r
					<ul>\r
						<li class="sidebar-link" role="professor"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/turmas/visualizar')">Cadastrar Turma</a></li>\r
						<li class="sidebar-link" role="professor"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/turmas/matricula')">Matricular Aluno</a></li>\r
						<!-- <li class="sidebar-link" role="professor"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/turmas/ativar_inativar')">Ativar/Inativar Turma</a></li> -->\r
						<li class="sidebar-link" role="professor"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/turmas/frequencia/lista')">Lançar Frequência</a></li>\r
						<li class="sidebar-link" role="professor"><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/turmas/notas/lista')">Lançar Notas</a></li>\r
					</ul>\r
				</div>\r
			</li>\r
		</ul>\r
    </aside>\r
\r
    <div id="content" class="dashboard-layout-content">\r
		<button class="sidebar-toggler">\r
			<span class="iconify-inline" data-icon="ic:round-keyboard-arrow-left"></span>\r
		</button>\r
		\r
		{{{body}}}\r
    </div>\r
</div>`;export{t as default};
