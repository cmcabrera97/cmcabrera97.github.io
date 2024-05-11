$(document).ready(() => {
    render_projects('featured');
})

let skill1 = "AutoCAD"
let skill2 = "Technical Drawing"
let skill3 = "Machining"
let skill4 = "Arduino"
let skill5 = "Inventor"
let skill6 = "3D Printing"
let skill7 = "Python"
let skill8 = "Remote Sensing"
let skill9 = "Lesson Planning"
let skill10 = "Mentoring"
let skill11 = "Nanoscribe"

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
            // Project 1 - Drafing and Machining Machinist Clamp
            image: 'assets/images/Machinist Clamp.png',
            link: 'n/a',
            title: 'Drafing and Machining Machinist Clamp',
            demo: false,
            technologies: [skill1, skill2, skill3],
            description: "Description",
            categories: ['featured', 'webdev']
        },
        {
            // Project 2 - Senior Design: Self Heating Lunchbox
            image: 'assets/images/Senior Design 1.png',
            link: 'n/a',
            title: 'Senior Design: Self Heating Lunchbox',
            demo: false,
            technologies: [skill4, skill5, skill6],
            description: "Description",
            categories: ['featured', 'webdev']
        },
        {
            // Project 3 - Procedural Microstructure Manufacturing
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Procedural Microstructure Manufacturing',
            demo: false,
            technologies: [skill7, skill11],
            description: "Description",
            categories: ['featured', 'native']
        },
        {
            // Project 4 - Removable Test Section
            image: 'assets/images/Proj_Pic.png',
            link: 'n/a',
            title: 'Removable Test Section',
            demo: false,
            technologies: [skill5, skill2],
            description: "Description",
            categories: ['featured', 'security']
        },
        {
            // Project 5 - Summer Research Institute Mentoring
            image: 'assets/images/Mentoring 3.png',
            link: 'n/a',
            title: 'Summer Research Institute Mentoring',
            demo: false,
            technologies: [skill9, skill10],
            description: "Description",
            categories: ['native']
        },
        {
            // Project 6 - Sargassum Remote Sensing
            image: 'assets/images/Mentoring 2.JPG',
            link: 'n/a',
            title: 'Sargassum Remote Sensing',
            demo: false,
            technologies: [skill7, skill8],
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
