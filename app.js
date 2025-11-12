document.addEventListener('DOMContentLoaded', () => {

    const appContent = document.getElementById('app-content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Definição do conteúdo de cada "página"
    const routes = {
        '#home': `
            <section id="home" class="section">
                <div class="content-wrapper">
                    <h1><span class="dot-net">.NET</span> Developer</h1>
                </div>
            </section>`,
        '#sobre': `
            <section id="sobre" class="section">
                <div class="content-wrapper sobre-content">
                    <div class="text-area">
                        <h2>Sobre mim</h2>
                        <h3>Olá, meu nome é Edson Miziara</h3>
                        <p class="role-highlight">Desenvolvedor .NET</p>
                        <p>Entusiasta de tecnologia e desenvolvedor Back-End em início de carreira, com dedicação especial ao desenvolvimento com C# e .NET. Estou em busca da minha primeira oportunidade no mercado de trabalho para utilizar minhas habilidades na construção de aplicações robustas e escaláveis.</p>
                        <p>Nos últimos meses, mergulhei em um intenso período de estudos, concluindo formações completas em áreas como ASP.NET Core, Testes em .NET (com xUnit e Selenium) e Boas Práticas em C#, incluindo a aplicação dos princípios SOLID. Tenho experiência prática no desenvolvimento de Web APIs, uso do Entity Framework para persistência de dados e implementação de controle de usuários com .NET Identity.</p>
                        <p>Meu portfólio de projetos no GitHub inclui desde aplicações para estudo de conceitos de Orientação a Objetos até APIs funcionais. Sou um profissional proativo, focado em aprender continuamente e ansioso para fazer parte de uma equipe onde eu possa agregar valor e evoluir minhas competências.</p>
                    </div>
                    <div class="image-area">
                        <img src="2.jpeg" alt="Foto de Edson Miziara">
                    </div>
                </div>
            </section>`,
        '#formacao': `
            <section id="formacao" class="section">
                <div class="content-wrapper formacao-experiencia">
                    <div class="formacao-col">
                        <h2>Formação <br>Acadêmica</h2>
                        <div class="item-block">
                            <div class="icon-circle"><i class="fas fa-graduation-cap"></i></div>
                            <p><strong>2020 - 2022</strong><br>Ensino Médio - Coc Uberaba</p>
                        </div>
                        <div class="item-block">
                            <div class="icon-circle"><i class="fas fa-graduation-cap"></i></div>
                            <p><strong>2025 - 2028</strong><br>IFTM - Uberaba Parque Tecnológico</p>
                        </div>
                    </div>
                    <div class="experiencia-col">
                        <h2>Minha <br>Experiência</h2>
                        <div class="item-block">
                            <div class="icon-circle-img"><img src="alura_logo.png" alt="Logo Alura"></div>
                            <p><a href="https://cursos.alura.com.br/user/muizi-bologna/fullCertificate/3795a4a0b3d7eab67ac321c7038301ce" target="_blank"><strong>Alura</strong><br>390+ Horas de Certificado</a></p>
                        </div>
                        <div class="item-block">
                             <div class="icon-circle-img"><img src="github_logo.png" alt="Logo Github"></div>
                             <p><a href="https://github.com/EdsonMiziara" target="_blank"><strong>Github</strong><br>100+ Contribuições 2025</a></p>
                        </div>
                    </div>
                </div>
            </section>`,
        '#projetos': `
            <section id="projetos" class="section">
                <div class="content-wrapper">
                    <h2>Meus Projetos</h2>
                    <div class="projects-grid">
                        <div class="project-card">
                            <div class="project-card-image"><i class="fas fa-project-diagram"></i></div>
                            <div class="project-card-content">
                                <h3>ScreenSound</h3>
                                <p>Projeto de aprendizado focado no back-end, construindo uma Web API com ASP.NET Core, SQL Server, testes com xUnit e integração com Blazor.</p>
                                <div class="project-tags">
                                    <span class="tag">C#</span><span class="tag">ASP.NET Core</span><span class="tag">SQL Server</span><span class="tag">xUnit</span><span class="tag">Blazor</span>
                                </div>
                                <div class="project-links">
                                    <a href="https://github.com/EdsonMiziara/ScreenSound" target="_blank"><i class="fab fa-github"></i> Código</a>
                                </div>
                            </div>
                        </div>
                        <div class="project-card">
                            <div class="project-card-image"><i class="fas fa-university"></i></div>
                            <div class="project-card-content">
                                <h3>Bytebank</h3>
                                <p>Projeto de estudos focado em Orientação a Objetos com C#, explorando conceitos como classes, herança e polimorfismo.</p>
                                <div class="project-tags">
                                    <span class="tag">C#</span><span class="tag">.NET</span><span class="tag">OOP</span>
                                </div>
                                <div class="project-links">
                                    <a href="https://github.com/EdsonMiziara/Bytebank" target="_blank"><i class="fab fa-github"></i> Código</a>
                                </div>
                            </div>
                        </div>
                         <div class="project-card">
                            <div class="project-card-image"><i class="fas fa-paw"></i></div>
                            <div class="project-card-content">
                                <h3>Alura.Adopet</h3>
                                <p>Aplicação web para adoção de pets, desenvolvida durante a formação .NET, focando na construção de APIs e integração de sistemas.</p>
                                <div class="project-tags">
                                    <span class="tag">C#</span><span class="tag">.NET</span><span class="tag">API REST</span><span class="tag">Web</span>
                                </div>
                                <div class="project-links">
                                    <a href="https://github.com/EdsonMiziara/Alura.Adopet" target="_blank"><i class="fab fa-github"></i> Código</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`,
        '#contato': `
            <section id="contato" class="section">
                <div class="content-wrapper contato-info-wrapper">
                    <h2>Meus Contatos!</h2>
                    <div class="contact-card-wrapper">
                        <div class="contact-card">
                            <div class="icon-large"><i class="fab fa-linkedin"></i></div>
                            <p>LinkedIn</p>
                            <a href="https://www.linkedin.com/in/edson-miziara" target="_blank">www.linkedin.com/in/edson-miziara</a>
                        </div>
                        <div class="contact-card">
                            <div class="icon-large"><i class="fas fa-phone"></i></div>
                            <p>Número de contato</p>
                            <p>+55 34 99776-6055</p>
                        </div>
                    </div>
                </div>
            </section>`
    };

    // Função para carregar o conteúdo da rota
    const loadContent = (hash) => {
        // Se não houver hash, padrão para #home
        const key = hash || '#home';
        const content = routes[key] || '<h2>Página não encontrada</h2>';
        
        appContent.innerHTML = content;
        
        // Ativa a animação de fade-in
        setTimeout(() => {
            const section = appContent.querySelector('.section');
            if(section) {
                section.classList.add('visible');
            }
        }, 50); // Pequeno delay para garantir a renderização
    };

    // Função para atualizar o link ativo no menu
    const updateActiveLink = (hash) => {
        const currentHash = hash || '#home';
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            }
        });
    };

    // Função principal do roteador
    const router = () => {
        const hash = window.location.hash;
        loadContent(hash);
        updateActiveLink(hash);
    };

    // Ouve eventos de mudança de hash (cliques nos links)
    window.addEventListener('hashchange', router);

    // Carrega o conteúdo inicial
    router();
});