
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Rw2fp_IAAAAJ&citation_for_view=Rw2fp_IAAAAJ:d1gkVwhDpl0C',
            title: 'Brain Tumor detection using Proper Orthogonal Decomposition integrated with Deep Learning Networks',
        },
	{
            url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Rw2fp_IAAAAJ&citation_for_view=Rw2fp_IAAAAJ:u-x6o8ySG0sC',
            title: 'Modeling Boundary Layer Separation Over Bio-Inspired Organized Surface Roughness Elements',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://scholar.google.com/citations?user=Rw2fp_IAAAAJ&hl=en&oi=ao');">

        <div class="blog-link">

            <h3><a href="https://scholar.google.com/citations?user=Rw2fp_IAAAAJ&hl=en&oi=ao">Visit Google Scholar</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}
