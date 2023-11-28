/*=============== NAV SCROLL ===============*/
        // const navScroll = document.querySelector('.navbar');
        // window.addEventListener('scroll', () => {
        //     if (window.scrollY >= 56) {
        //         navScroll.classList.add('navbar-scrolled');
        //     } else if (window.scrollY < 56) {
        //         navScroll.classList.remove('navbar-scrolled')
        //     }
        // });


/*=============== FORMULAIRE ===============*/       
        /*La fonction principale de ce script est d'empêcher l'envoi du formulaire si un champ a été mal rempli
                et d'appliquer les styles de validation aux différents éléments de formulaire */
                (function () {
                    'use strict';
                    window.addEventListener('load', function () {
                        let forms = document.getElementsByClassName('needs-validation');
                        let validation = Array.prototype.filter.call(forms, function (form) {
                            form.addEventListener('submit', function (event) {
                                if (form.checkValidity() === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                                form.classList.add('was-validated');
                            }, false);
                        });
                    }, false);
                })();

                // Filtration par titre de projet

    // $(document).ready(function () {
    //     $('#nomSiteFilter').on('input', function () {
    //         var searchTerm = $(this).val().toLowerCase();

    //         // Vérifier si le champ de recherche est vide
    //         if (searchTerm === '') {
    //             // Si le champ de recherche est vide, afficher tous les éléments du carousel
    //             $('.carousel-item').show();
    //         } else {
    //             // Sinon, filtrer les éléments en fonction du terme de recherche
    //             $('.carousel-item').each(function () {
    //                 var carouselCaption = $(this).find('.carousel-caption h2');
    //                 var siteName = carouselCaption.text().toLowerCase();

    //                 if (!siteName.includes(searchTerm)) {
    //                     $(this).hide();
    //                 }
    //             });
    //         }
    //     });
    // });
                