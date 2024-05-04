$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/mentors.jpg',
            link: 'n/a',
            title: 'Featured Topic 1 - Project 1',
            demo: false,
            technologies: ['Flask', 'Celery', 'Python'],
            description: "Description",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'n/a',
            title: 'Featured Topic 1 - Project 2',
            demo: false,
            technologies: ['Semantic UI', 'Jekyll'],
            description: "Description",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'n/a',
            title: 'Featured Topic 2 - Project 1',
            demo: false,
            technologies: ['Android', 'OpenCV'],
            description: "Description",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'n/a',
            title: 'Featured Topic 3 - Project 1',
            demo: false,
            technologies: ['Semantic UI', 'CSS3'],
            description: "Description",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'n/a',
            title: 'Topic 2 - Project 2',
            demo: false,
            technologies: ['Python'],
            description: "Description",
            categories: ['native']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'n/a',
            title: 'Topic 2 - Project 3',
            demo: false,
            technologies: ['C++', 'Qt'],
            description: "Description",
            categories: ['native']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            link: 'n/a',
            title: 'Topic 1,4 - Project 3,1',
            demo: false,
            technologies: ['python', 'flask'],
            description: "Description",
            categories: ['webdev', 'diy']
        },
        {
            image: 'assets/images/s3scan.png',
            link: 'n/a',
            title: 'Topic 2,3 - Project 4,2',
            demo: false,
            technologies: ['python'],
            description: "Description",
            categories: ['native', 'security']
        },
        {
            image: 'assets/images/elementary.png',
            link: 'n/a',
            title: 'Topic 1 - Project 4',
            demo: false,
            technologies: ['Jekyll', 'CSS3'],
            description: "Description",
            categories: ['webdev']
        },
        {
            image: 'assets/images/soot-spirits.png',
            link: 'n/a',
            title: 'Topic 1 - Project 5',
            demo: false,
            technologies: ['Jekyll', 'CSS3'],
            description: "Description",
            categories: ['webdev']
        },
        {
            image: 'assets/images/python-chat.png',
            link: 'n/a',
            title: 'Topic 2 - Project 5',
            demo: false,
            technologies: ['Python', 'Sockets'],
            description: "Description",
            categories: ['native']
        },
        {
            image: 'assets/images/old-lcd.jpg',
            link: 'n/a',
            title: 'Topic 4 - Project 1',
            demo: false,
            technologies: ['DIY'],
            description: "Description",
            categories: ['diy']
        },
        {
            image: 'assets/images/nextcloud-enc.png',
            link: 'n/a',
            title: 'Topic 4,3 - Project 2,3',
            demo: false,
            technologies: ['NextCloud', 'GnuPG'],
            description: "Description",
            categories: ['diy', 'security']
        },
        {
            image: 'assets/images/google-cloud-backup.png',
            link: 'n/a',
            title: 'Topic 4,3 - Project 3,4',
            demo: false,
            technologies: ['NextCloud', 'Duplicity'],
            description: "Description",
            categories: ['diy', 'security']
        },
        {
            image: 'assets/images/pi-cloud.jpg',
            link: 'n/a',
            title: 'Topic 4 - Project 4',
            demo: false,
            technologies: ['FTP', 'DIY'],
            description: "Description",
            categories: ['diy']
        },
        {
            image: 'assets/images/koalamate.png',
            link: 'n/a',
            title: 'Topic 2 - Project 6',
            demo: false,
            technologies: ['Electron', 'Javascript'],
            description: "Description",
            categories: ['native']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
