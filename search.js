jQuery(document).ready(() => {

    let navbar = jQuery('.vc_row.wpb_row.vc_row-fluid.header-middle').height()

    jQuery(window).scroll((e) => {
        if (jQuery(this).scrollTop() > navbar) {
            jQuery('#search-movil').css('visibility', 'visible');
        } else if (jQuery(this).scrollTop() <= navbar) {
            jQuery('#search-movil').css('visibility', 'hidden');
        }
    })

    jQuery('#search-movil').click(



        async () => {
            let banner = () => {
                $('.multiple-items').slick({
                    slideToShow: 3,
                    arrows: false,
                })

                $('.swal2-actions').appendTo('#search-form');

                let img = [
                    {
                        file: '1.png',
                        type: 'category-main',
                        url: '#'
                    },
                    {
                        file: '2.png',
                        type: 'category-main',
                        url: '#'
                    },
                    {
                        file: '3.png',
                        type: 'category-carrousel',
                        url: '#'
                    },
                    {
                        file: '3.png',
                        type: 'category-carrousel',
                        url: '#'
                    },
                    {
                        file: '3.png',
                        type: 'category-carrousel',
                        url: '#'
                    },
                    {
                        file: '3.png',
                        type: 'category-carrousel',
                        url: '#'
                    },
                    {
                        file: '3.png',
                        type: 'category-carrousel',
                        url: '#'
                    },
                    {
                        file: '3.png',
                        type: 'category-carrousel',
                        url: '#'
                    },
                    {
                        file: '3.png',
                        type: 'category-carrousel',
                        url: '#'
                    },
                    {
                        file: '3.png',
                        type: 'category-carrousel',
                        url: '#'
                    },
                    {
                        file: '3.png',
                        type: 'category-carrousel',
                        url: '#'
                    },
                    {
                        file: '4.png',
                        type: 'category-top-seller',
                        url: '#'
                    },
                    {
                        file: '5.png',
                        type: 'category-most-wanted',
                        url: '#'
                    },
                    {
                        file: '6.png',
                        type: 'category-footer',
                        url: '#'
                    }
                ]

                img.forEach(img => {
                    switch (img.type) {
                        case 'category-main':
                            jQuery('#category-main').append(`<a href="${img.url}"><img class="img-responsive c-main" src="./img/${img.file}"/></a>`)
                            break;
                        case 'category-carrousel':
                            jQuery('#category-carrousel').append(`<li><a href="${img.url}"><img src="./img/${img.file}"/></a></li>`)
                            break;
                        case 'category-top-seller':
                            jQuery('#category-top-and-most').append(`<a href="${img.url}"><img class="img-responsive c-top-seller" src="./img/${img.file}"/></a>`)
                            break;
                        case 'category-most-wanted':
                            jQuery('#category-top-and-most').append(`<a href="${img.url}"><img class="img-responsive c-most-wanted" src="./img/${img.file}"/></a>`)
                            break;
                        case 'category-footer':
                            jQuery('#category-footer').append(`<a href="${img.url}"><img class="img-responsive" src="./img/${img.file}"/></a>`)
                            break;
                        default:
                            break;
                    }
                })
            }
            const { value: search } = await Swal.fire({
                position: 'center',
                showConfirmButton: true,
                showCancelButton: false,
                showCloseButton: true,
                confirmButtonText: 'Search products',
                html: `
                <img src="http://funko.x-dev.net/wp-content/uploads/2016/10/LOGO-FUNKO-FINDERS-FINALISIMO-PRIMERO-DIOS-AHORA-SI-EL-ULTIMO.png" />
                <div id="search-form">
                <input name="title" id="input-search" class="swal2-input" type="text" placeholder="Search"> 
                </div>
                <div id="category-main"></div>
                <ul id="category-carrousel"></ul>
                <div id="category-top-and-most"></div>
                <div id="category-footer"></div>
                `,
                focusConfirm: false,
                onOpen: banner,
                preConfirm: () => {
                    return [
                        document.getElementById('input-search').value,
                    ]
                }
            })
            if (search) {
                let values = {
                    search: search[0],
                }
                console.log(values)
            }
        }
    );
})