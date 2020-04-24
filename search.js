let img = [
    {
        file: 'main-disney.png',
        type: 'category-main',
        url: '#'
    },
    {
        file: 'main-marvel.png',
        type: 'category-main',
        url: '#'
    },
    {
        file: 'animation.png',
        type: 'category-carrousel',
        url: '#'
    },
    {
        file: 'dc.png',
        type: 'category-carrousel',
        url: '#'
    },
    {
        file: 'got.png',
        type: 'category-carrousel',
        url: '#'
    },
    {
        file: 'harry-potter.png',
        type: 'category-carrousel',
        url: '#'
    },
    {
        file: 'movies.png',
        type: 'category-carrousel',
        url: '#'
    },
    {
        file: 'star-wars.png',
        type: 'category-carrousel',
        url: '#'
    },
    {
        file: 'television.png',
        type: 'category-carrousel',
        url: '#'
    },
    {
        file: 'top-seller.png',
        type: 'category-top-seller',
        url: '#'
    },
    {
        file: 'most-wanted.png',
        type: 'category-most-wanted',
        url: '#'
    },
    {
        file: 'footer.png',
        type: 'category-footer',
        url: '#'
    }
]


jQuery(document).ready(() => {
    
    let size = null;

    let navbar = jQuery('.vc_row.wpb_row.vc_row-fluid.header-middle').height();

    jQuery(window).resize(function () {
        size = jQuery(window).width()
    })

    jQuery(window).scroll((e) => {
        if (jQuery(this).scrollTop() > navbar) {
            if (size < 992) {
                jQuery('#search-movil').css('visibility', 'visible');
            }

        } else if (jQuery(this).scrollTop() <= navbar) {
            jQuery('#search-movil').css('visibility', 'hidden');
        }
    })

    jQuery('#search-movil').click(

        async () => {
            let banner = () => {

                jQuery('.swal2-actions').appendTo('#search-form');

                img.forEach((banner, i) => {
                    switch (banner.type) {
                        case 'category-main':
                            jQuery('#category-main').append(`<a href="${banner.url}"><img class="img-responsive c-main" src="img/${banner.file}"/></a>`)
                            break;
                        case 'category-carrousel':
                            jQuery('#category-carrousel').append(`<li class="c-carrousel"><a href="${banner.url}"><img src="img/${banner.file}"/></a></li>`)
                            break;
                        case 'category-top-seller':
                            jQuery('#category-top-and-most').append(`<a href="${banner.url}"><img class="img-responsive c-top-seller" src="img/${banner.file}"/></a>`)
                            break;
                        case 'category-most-wanted':
                            jQuery('#category-top-and-most').append(`<a href="${banner.url}"><img class="img-responsive c-most-wanted" src="img/${banner.file}"/></a>`)
                            break;
                            // case 'category-footer':
                            //     jQuery('#category-footer').append(`<a href="${banner.url}"><img class="img-responsive" src="img/${banner.file}"/></a>`)
                            //     break;
                            //<div id="category-footer"></div>
                        default:
                            break;
                    }
                })
                
                document.getElementById('input-search').focus();

            }
            
            const { value: search } = await Swal.fire({
                onOpen: banner,
                position: 'center',
                showConfirmButton: true,
                showCancelButton: false,
                showCloseButton: true,
                confirmButtonText: 'Search products',
                html: `
                <div id="search-content" class="container">
                <img src="http://funko.x-dev.net/wp-content/uploads/2016/10/LOGO-FUNKO-FINDERS-FINALISIMO-PRIMERO-DIOS-AHORA-SI-EL-ULTIMO.png" />
                <div id="search-form">
                <div id="input-search-box">
                <span><i class="fas fa-search"></i></span>
                <input id="input-search" name="search"  class="swal2-input" type="text"> 
                </div>
                </div>
                <div id="category-main"></div>
                <ul id="category-carrousel"></ul>
                <div id="category-top-and-most"></div>
                </div>
                `,
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById('input-search').value,
                    ]
                }
            });
            if (search) {
                let values = {
                    search: search[0],
                }
                console.log(values)
            }
        }
    );
})