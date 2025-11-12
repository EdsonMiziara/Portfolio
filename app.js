document.addEventListener('DOMContentLoaded', () => {

    const appContent = document.getElementById('app-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const langToggle = document.getElementById('lang-toggle');
    
    // Define o idioma atual, buscando no localStorage ou usando 'pt' como padrão
    let currentLang = localStorage.getItem('lang') || 'pt';

    // Objeto com os títulos da navegação
    const navTitles = {
        pt: ["Início", "Sobre mim", "Formação", "Projetos", "Contato"],
        en: ["Home", "About me", "Education", "Projects", "Contact"]
    };

    // Objeto com o meta description
    const metaDescriptions = {
        pt: "Portfólio de Edson Miziara, Desenvolvedor .NET.",
        en: "Portfolio of Edson Miziara, .NET Developer."
    };

    // Objeto com os títulos das páginas
    const pageTitles = {
        pt: "Portfólio - Edson Miziara",
        en: "Portfolio - Edson Miziara"
    };

    // Definição do conteúdo de cada "página" em PT e EN
    const routes = {
        '#home': {
            pt: `
            <section id="home" class="section">
                <div class="content-wrapper">
                    <h1><span class="dot-net">.NET</span> Developer</h1>
                </div>
            </section>`,
            en: `
            <section id="home" class="section">
                <div class="content-wrapper">
                    <h1><span class="dot-net">.NET</span> Developer</h1>
                </div>
            </section>`
        },
        '#sobre': {
            pt: `
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
            en: `
            <section id="sobre" class="section">
                <div class="content-wrapper sobre-content">
                    <div class="text-area">
                        <h2>About Me</h2>
                        <h3>Hello, my name is Edson Miziara</h3>
                        <p class="role-highlight">.NET Developer</p>
                        <p>Technology enthusiast and early-career Back-End developer, with a special dedication to C# and .NET development. I am seeking my first opportunity in the job market to use my skills in building robust and scalable applications.</p>
                        <p>In recent months, I have immersed myself in an intense period of study, completing comprehensive training in areas such as ASP.NET Core, Testing in .NET (with xUnit and Selenium), and C# Best Practices, including the application of SOLID principles. I have practical experience in developing Web APIs, using the Entity Framework for data persistence, and implementing user control with .NET Identity.</p>
                        <p>My GitHub project portfolio includes everything from applications for studying Object-Oriented concepts to functional APIs. I am a proactive professional, focused on continuous learning, and eager to be part of a team where I can add value and grow my skills.</p>
                    </div>
                    <div class="image-area">
                        <img src="2.jpeg" alt="Photo of Edson Miziara">
                    </div>
                </div>
            </section>`
        },
        '#formacao': {
            pt: `
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
            en: `
            <section id="formacao" class="section">
                <div class="content-wrapper formacao-experiencia">
                    <div class="formacao-col">
                        <h2>Education</h2>
                        <div class="item-block">
                            <div class="icon-circle"><i class="fas fa-graduation-cap"></i></div>
                            <p><strong>2020 - 2022</strong><br>High School - Coc Uberaba</p>
                        </div>
                        <div class="item-block">
                            <div class="icon-circle"><i class="fas fa-graduation-cap"></i></div>
                            <p><strong>2025 - 2028</strong><br>IFTM - Uberaba Technological Park</p>
                        </div>
                    </div>
                    <div class="experiencia-col">
                        <h2>My <br>Experience</h2>
                        <div class="item-block">
                            <div class="icon-circle-img"><img src="alura_logo.png" alt="Alura Logo"></div>
                            <p><a href="https://cursos.alura.com.br/user/muizi-bologna/fullCertificate/3795a4a0b3d7eab67ac321c7038301ce" target="_blank"><strong>Alura</strong><br>390+ Certified Hours</a></p>
                        </div>
                        <div class="item-block">
                             <div class="icon-circle-img"><img src="github_logo.png" alt="Github Logo"></div>
                             <p><a href="https://github.com/EdsonMiziara" target="_blank"><strong>Github</strong><br>100+ Contributions 2025</a></p>
                        </div>
                    </div>
                </div>
            </section>`
        },
        '#projetos': {
            pt: `
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
            en: `
            <section id="projetos" class="section">
                <div class="content-wrapper">
                    <h2>My Projects</h2>
                    <div class="projects-grid">
                        <div class="project-card">
                            <div class="project-card-image"><i class="fas fa-project-diagram"></i></div>
                            <div class="project-card-content">
                                <h3>ScreenSound</h3>
                                <p>Learning project focused on the backend, building a Web API with ASP.NET Core, SQL Server, xUnit testing, and Blazor integration.</p>
                                <div class="project-tags">
                                    <span class="tag">C#</span><span class="tag">ASP.NET Core</span><span class="tag">SQL Server</span><span class="tag">xUnit</span><span class="tag">Blazor</span>
                                </div>
                                <div class="project-links">
                                    <a href="https://github.com/EdsonMiziara/ScreenSound" target="_blank"><i class="fab fa-github"></i> Code</a>
                                </div>
                            </div>
                        </div>
                        <div class="project-card">
                            <div class="project-card-image"><i class="fas fa-university"></i></div>
                            <div class="project-card-content">
                                <h3>Bytebank</h3>
                                <p>Study project focused on Object-Oriented Programming with C#, exploring concepts like classes, inheritance, and polymorphism.</p>
                                <div class="project-tags">
                                    <span class="tag">C#</span><span class="tag">.NET</span><span class="tag">OOP</span>
                                </div>
                                <div class="project-links">
                                    <a href="https://github.com/EdsonMiziara/Bytebank" target="_blank"><i class="fab fa-github"></i> Code</a>
                                </div>
                            </div>
                        </div>
                         <div class="project-card">
                            <div class="project-card-image"><i class="fas fa-paw"></i></div>
                            <div class="project-card-content">
                                <h3>Alura.Adopet</h3>
                                <p>Web application for pet adoption, developed during the .NET training, focusing on building APIs and system integration.</p>
                                <div class="project-tags">
                                    <span class="tag">C#</span><span class="tag">.NET</span><span class="tag">API REST</span><span class="tag">Web</span>
                                </div>
                                <div class="project-links">
                                    <a href="https://github.com/EdsonMiziara/Alura.Adopet" target="_blank"><i class="fab fa-github"></i> Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
        },
        '#contato': {
            pt: `
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
            </section>`,
            en: `
            <section id="contato" class="section">
                <div class="content-wrapper contato-info-wrapper">
                    <h2>Get in Touch!</h2>
                    <div class="contact-card-wrapper">
                        <div class="contact-card">
                            <div class="icon-large"><i class="fab fa-linkedin"></i></div>
                            <p>LinkedIn</p>
                            <a href="https://www.linkedin.com/in/edson-miziara" target="_blank">www.linkedin.com/in/edson-miziara</a>
                        </div>
                        <div class="contact-card">
                            <div class="icon-large"><i class="fas fa-phone"></i></div>
                            <p>Phone Number</p>
                            <p>+55 34 99776-6055</p>
                        </div>
                    </div>
                </div>
            </section>`
        }
    };

    // Função para carregar o conteúdo da rota
    const loadContent = (hash) => {
        const key = hash || '#home';
        const routeContent = routes[key];
        
        // Carrega o conteúdo no idioma atual, ou 'pt' se a tradução não existir
        const content = (routeContent && routeContent[currentLang]) ? routeContent[currentLang] : '<h2>Page not found</h2>';
        
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

    // Função para atualizar os 'title' (dicas) da navegação
    const updateNavTitles = () => {
        navLinks.forEach((link, index) => {
            if (navTitles[currentLang] && navTitles[currentLang][index]) {
                link.title = navTitles[currentLang][index];
            }
        });
    };

    // Função para atualizar os metadados da página (título e descrição)
    const updatePageMetadata = () => {
        document.title = pageTitles[currentLang];
        
        let descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
            descriptionTag.setAttribute('content', metaDescriptions[currentLang]);
        }
        
        // Atualiza o atributo lang da tag <html>
        document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
    };

    // Função principal do roteador
    const router = () => {
        const hash = window.location.hash;
        loadContent(hash);
        updateActiveLink(hash);
        updateNavTitles();
        updatePageMetadata(); // Atualiza os metadados
    };

    // --- EVENT LISTENERS ---

    // Ouve eventos de mudança de hash (cliques nos links)
    window.addEventListener('hashchange', router);

    langToggle.addEventListener('change', () => {
        currentLang = langToggle.checked ? 'en' : 'pt';
        localStorage.setItem('lang', currentLang);
        router(); 
    });

    langToggle.checked = (currentLang === 'en');
    
    router();
});