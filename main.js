    var  menu = document.getElementById('menu');
    var  nav = document.getElementById('nav');
    var  exit = document.getElementById('exit');

    menu.addEventListener('click', function(e){
        nav.classList.toggle('hide-mobile');
        e.preventDefault();
    });

    exit.addEventListener('click', function(e){
        nav.classList.add('hide-mobile');
        e.preventDefault();
    });

    var  vector = document.getElementById('vector');
    var  vcontent = document.getElementById('vector-content');
    var  vclose = document.getElementById('vclose');
    var  portfolio = document.getElementById('portfolio');

    vector.addEventListener('click', function(e){
        vcontent.classList.toggle('vector-content');
        portfolio.style.display = "none";
        e.preventDefault();
    });

    vclose.addEventListener('click', function(e){
        vcontent.classList.add('vector-content');
        portfolio.style.display = "block";
        e.preventDefault();
    });

    var  portrait = document.getElementById('portrait');
    var  pdcontent = document.getElementById('portrait-content');
    var  pdclose = document.getElementById('pdclose');

    portrait.addEventListener('click', function(e){
        pdcontent.classList.toggle('portrait-content');
        portfolio.style.display = "none";
        e.preventDefault();
    });

    pdclose.addEventListener('click', function(e){
        pdcontent.classList.add('portrait-content');
        portfolio.style.display = "block";
        e.preventDefault();
    });

    var  project = document.getElementById('project');
    var  pcontent = document.getElementById('project-content');
    var  pclose = document.getElementById('pclose');

    project.addEventListener('click', function(e){
        pcontent.classList.toggle('project-content');
        portfolio.style.display = "none";
        e.preventDefault();
    });

    pclose.addEventListener('click', function(e){
        pcontent.classList.add('project-content');
        portfolio.style.display = "block";
        e.preventDefault();
    });