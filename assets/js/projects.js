$(document).ready(() => {
    render_projects('featured');
})

let skill1 = "Skill1"
let skill2 = "Skill2"
let skill3 = "Skill3"
let skill4 = "Skill4"
let skill5 = "Skill5"
let skill6 = "Skill6"
let skill7 = "Skill7"
let skill8 = "Skill8"
let skill9 = "Skill9"
let skill10 = "Skill10"
let skill11 = "Skill11"
let skill12 = "Skill12"
let skill13 = "Skill13"
let skill14 = "Skill14"
let skill15 = "Skill15"
let skill16 = "Skill16"
let skill17 = "Skill17"
let skill18 = "Skill18"

let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Featured Topic 1 - Project 1',
            demo: false,
            technologies: [skill1, skill2, skill3],
            description: "Description",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Featured Topic 1 - Project 2',
            demo: false,
            technologies: [skill4, skill5],
            description: "Description",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Featured Topic 2 - Project 1',
            demo: false,
            technologies: [skill6, skill7],
            description: "Description",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Featured Topic 3 - Project 1',
            demo: false,
            technologies: [skill4, skill8],
            description: "Description",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 2 - Project 2',
            demo: false,
            technologies: [skill3],
            description: "Description",
            categories: ['native']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 2 - Project 3',
            demo: false,
            technologies: [skill9, skill10],
            description: "Description",
            categories: ['native']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 1,4 - Project 3,1',
            demo: false,
            technologies: [skill3, skill1],
            description: "Description",
            categories: ['webdev', 'diy']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 2,3 - Project 4,2',
            demo: false,
            technologies: [skill3],
            description: "Description",
            categories: ['native', 'security']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 1 - Project 4',
            demo: false,
            technologies: [skill5, skill8],
            description: "Description",
            categories: ['webdev']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 1 - Project 5',
            demo: false,
            technologies: [skill5, skill8],
            description: "Description",
            categories: ['webdev']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 2 - Project 5',
            demo: false,
            technologies: [skill3, skill11],
            description: "Description",
            categories: ['native']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 4 - Project 1',
            demo: false,
            technologies: [skill12],
            description: "Description",
            categories: ['diy']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 4,3 - Project 2,3',
            demo: false,
            technologies: [skill13, skill14],
            description: "Description",
            categories: ['diy', 'security']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 4,3 - Project 3,4',
            demo: false,
            technologies: [skill13, skill15],
            description: "Description",
            categories: ['diy', 'security']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 4 - Project 4',
            demo: false,
            technologies: [skill16, skill12],
            description: "Description",
            categories: ['diy']
        },
        {
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Topic 2 - Project 6',
            demo: false,
            technologies: [skill17, skill18],
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
