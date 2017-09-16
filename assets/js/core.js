/* -----------------------------------------------------------------------------

-------------------------------------------------------------------------------- */
(function ($) {
    'use strict';

    // Main Variables
    // -------------------------------

    var $html = $('html'),
        $body = $('body'),
        $content = $('#content'),
        $footer = $('#footer'),
        $nav = $('#navigation'),
        $navHorizontal = $nav.find('.nav-primary-horizontal'),
        $navToggle = $('#navigation-toggle'),
        $pageLoader = $('#page-loader'),
        $calendar = $('#calendar-component'),
        pageScrolling = $body.hasClass('page-scrolling') ? true : false,
        pageSliding = $body.hasClass('page-sliding') ? true : false,
        navHorizontal = $nav.hasClass('navigation-horizontal') ? true : false,
        navVertical = $nav.hasClass('navigation-vertical') ? true : false,
        navPanel = $nav.hasClass('navigation-panel') ? true : false,
        trueMobile,
        defaultCalendarView;

    // Core Functions
    // -------------------------------

    var Core = {
        init: function () {
            this.Basic.init();
            this.Component.init();
        },
        Basic: {
            init: function () {
                this.systemDetector();
                this.animations($body);
                this.backgrounds($body);
                this.typing();
                this.Navigation.init();
                this.filter();
                this.masonry();
                this.mouseParallax();
                if (pageScrolling) this.footer();
                if (pageSliding) this.sliding();
            },
            animations: function ($content) {

                // Animation - appear 
                $('.animated:not(img)', $content).appear(function () {
                    $(this).each(function () {
                        var $target = $(this);
                        var delay = $target.data('animation-delay');
                        setTimeout(function () {
                            $target.addClass($target.data('animation')).addClass('visible')
                        }, delay);
                    });
                });

                $content.imagesLoaded().progress(function (instance, image) {
                    var $img = $(image.img);
                    if ($img.hasClass('animated')) {
                        $img.appear(function () {
                            var delay = $img.data('animation-delay');
                            setTimeout(function () {
                                $img.addClass($img.data('animation')).addClass('visible')
                            }, delay);
                        });
                    }
                });

            },
            backgrounds: function ($content) {

                // Image
                var $bgImage = $('.bg-image-container', $content);
                if ($bgImage.length) {
                    $bgImage.each(function () {
                        var src = $(this).children('img').attr('src');
                        var $self = $(this);

                        $self.css('background-image', 'url(' + src + ')').children('img').hide();

                        $self.imagesLoaded({
                            background: true
                        }, function (instance, image) {
                            $self.addClass('loaded');
                        });
                    });
                }

                var $bgSlideshow = $('.bg-slideshow', $content);
                if ($bgSlideshow.length) {
                    // Slideshow 
                    $bgSlideshow.slick({
                        dots: false,
                        arrows: false,
                        fade: true,
                        speed: 3000,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        pauseOnHover: false
                    });
                }

                // Video 
                var $bgVideo = $('.bg-video');
                if ($bgVideo.length) {
                    $bgVideo.YTPlayer();

                    if (trueMobile) {
                        $bgVideo.next('.bg-video-placeholder').show();
                        $bgVideo.remove();
                    }
                }

            },
            filter: function () {

                var $filter = $('.filter'),
                    $filterIsotope = $('.filter-isotope'),
                    $list,
                    filterValue;

                // Filter Isotope 
                if ($filterIsotope.length) {

                    $filterIsotope.each(function () {
                        $list = $($(this).data('filter-list'));
                        if ($list.hasClass('masonry')) {
                            $list.isotope({
                                itemSelector: '.masonry-item',
                                percentPosition: true,
                                masonry: {
                                    columnWidth: '.masonry-sizer'
                                }
                            });
                        }
                        else $list.isotope();

                        $list.imagesLoaded().progress(function () {
                            $list.isotope('layout');
                        });
                    });

                    $filterIsotope.on('click', 'a', function () {

                        $list = $($(this).parents('.filter-isotope').data('filter-list'));
                        filterValue = $(this).attr('data-filter');

                        $list.isotope({
                            filter: filterValue
                        });

                        $list.on('layoutComplete', function (event, laidOutItems) {
                            if (pageScrolling) {
                                Waypoint.refreshAll();
                            } else if (pageSliding) {
                                $.fn.fullpage.reBuild();
                            }
                        });

                        $(this).parents('ul').find('.active').removeClass('active');
                        $(this).addClass('active');

                        return false;
                    });

                }

                // Filter Basic
                if ($filter.length) {
                    $filter.on('click', 'a', function () {

                        $list = $($(this).parents('.filter').data('filter-list'));
                        filterValue = $(this).attr('data-filter');

                        $list.children().filter('.not-matched').removeClass('not-matched')
                        if (filterValue != "*") $list.children().not(filterValue).addClass('not-matched')

                        $(this).parents('ul').find('.active').removeClass('active');
                        $(this).addClass('active');

                        return false;
                    });
                }

            },
            footer: function () {

                $body.css('padding-bottom', $footer.outerHeight() + 'px');

            },
            masonry: function () {

                var $grid = $('.masonry', '#content');

                if ($grid.length) {

                    $grid.masonry({
                        columnWidth: '.masonry-sizer',
                        itemSelector: '.masonry-item',
                        percentPosition: true
                    });

                    $grid.imagesLoaded().progress(function () {
                        $grid.masonry('layout');
                    });

                    $grid.on('layoutComplete', Waypoint.refreshAll());

                }

            },
            mouseParallax: function () {

                var $mouseParallax = $('.mouse-parallax', '#content');

                if ($mouseParallax.length) {

                    $mouseParallax.on('mousemove', function (e) {
                        var $mouseParallaxItem = $(this).find('.mouse-parallax-item');

                        var x = e.clientX,
                            y = e.clientY;

                        $mouseParallaxItem.each(function () {
                            var $self = $(this),
                                speed = $self.data('parallax-speed'),
                                dx = x / speed,
                                dy = y / speed;

                            if ($self.data('parallax-reverse') == true) {
                                dx = -dx;
                                dy = -dy;
                            }

                            if ($self.hasClass('bg-image-container')) {
                                $self.css({
                                    'background-position': 'calc(50% - ' + dx + 'px) ' + 'calc(50% - ' + dy + 'px'
                                });
                            } else if ($self.hasClass('lines-container')) {
                                $self.css({
                                    'transform': 'translateX(' + dx + 'px)'
                                });
                            } else {
                                $self.css({
                                    'transform': 'translateX(' + dx + 'px) translateY(' + dy + 'px)'
                                });
                            }
                        });
                    });

                }

            },
            systemDetector: function () {

                var isMobile = {
                    Android: function () {
                        return navigator.userAgent.match(/Android/i);
                    },
                    BlackBerry: function () {
                        return navigator.userAgent.match(/BlackBerry/i);
                    },
                    iOS: function () {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                    },
                    Opera: function () {
                        return navigator.userAgent.match(/Opera Mini/i);
                    },
                    Windows: function () {
                        return navigator.userAgent.match(/IEMobile/i);
                    },
                    any: function () {
                        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
                    }
                };

                trueMobile = isMobile.any();

            },
            sliding: function () {

                // Generate anchors
                var anchors = [];
                $content.children('.section').each(function () {
                    var anchor = $(this).data('anchor');
                    if (typeof anchor !== 'undefined') {
                        anchors.push(anchor);
                    }
                });

                // Fullpage 
                $content.fullpage({
                    anchors: anchors,
                    scrollOverflow: true,
                    slideSelector: '.inner-slide',
                    scrollBar: false,
                    navigation: true,
                    scrollingSpeed: 550,
                    menu: '#navigation',
                    recordHistory: false,
                    normalScrollElements: '#navigation, .window, .ajax-modal-inner',
                    onLeave: function (anchorLink, index) {
                        Core.Basic.setSectionScheme($content.find('.section').eq(index - 1));
                    }
                });

            },
            Navigation: {
                init: function () {

                    var navHeight = $nav.height();
                    var $section = $('.section', '#content');
                    var navHeight = $nav.height();
                    var $navMain;

                    if (navHorizontal) {
                        $navMain = $nav.find('.nav-primary-horizontal');
                    }

                    // Page Scrolling
                    if (pageScrolling) {

                        var scrollOffset = 0;

                        var $scrollers = $('#navigation, [data-local-scroll]');
                        $scrollers.find('a').on('click', function () {
                            $(this).blur();
                        });
                        $scrollers.localScroll({
                            offset: scrollOffset,
                            duration: 700
                        });

                        var $menuItem = $nav.find('a');

                        var checkMenuItem = function (id) {
                            $menuItem.each(function () {
                                var link = $(this).attr('href');
                                if (id == link) {
                                    $(this).addClass('active');
                                }
                                else $(this).removeClass('active');
                            });
                            Core.Basic.Navigation.hideNav();
                        }

                        $section.waypoint({
                            handler: function (direction) {
                                if (direction == 'up') {
                                    var id = '#' + this.element.id;
                                    checkMenuItem(id);
                                    Core.Basic.setSectionScheme($(this.element));
                                }
                            },
                            offset: function () {
                                if (navHorizontal) return -this.element.clientHeight + navHeight;
                                else return -this.element.clientHeight;
                            }
                        });

                        $section.waypoint({
                            handler: function (direction) {
                                if (direction == 'down') {
                                    var id = '#' + this.element.id;
                                    checkMenuItem(id);
                                    Core.Basic.setSectionScheme($(this.element));
                                }
                            },
                            offset: function () {
                                if (navHorizontal) return navHeight;
                                else return 0;
                            }
                        });

                    }

                    // Mobile Navigation
                    $navToggle.on('click', function () {
                        $(this).toggleClass('open');
                        if (navHorizontal) {
                            $navMain.toggleClass('show');
                        } else {
                            $nav.toggleClass('show');
                            $body.toggleClass('navigation-open');
                        }
                        return false;
                    });

                },
                hideNav: function () {
                    $nav.removeClass('show');
                    $navToggle.removeClass('open');
                    $body.removeClass('navigation-open');

                    if (navHorizontal) {
                        $navHorizontal.removeClass('show');
                    }
                }
            },
            typing: function () {

                $('.typing').appear(function () {
                    $(this).each(function () {
                        var $self = $(this),
                            text = [$self.html()];
                        $self.parent().css({
                            'min-height': $self.outerHeight() + 'px',
                            'min-width': $self.outerWidth() + 'px'
                        });
                        $self.html('');
                        $self.typed({
                            strings: text,
                            startDelay: 200,
                            typeSpeed: 15,
                            contentType: 'html',
                            preStringTyped: function () {
                                $self.addClass('start');
                            },
                            callback: function () {
                                setTimeout(function () {
                                    $self.siblings('.show-after-typing').addClass('show');
                                }, 250);
                            }
                        });
                    });
                });

            },
            setSectionScheme: function ($section) {
                if ($section.data('scheme') === 'light') {
                    $body.removeClass('dark-scheme').addClass('light-scheme');
                } else if ($section.data('scheme') === 'dark') {
                    $body.removeClass('light-scheme').addClass('dark-scheme');
                }
            }
        },
        Component: {
            init: function () {
                this.ajaxModal();
                this.accordion();
                this.calendar();
                this.carousel($body);
                this.chart($body);
                this.contactMap();
                this.forms();
                this.map();
                this.window();
                this.modal($body);
                this.points();
            },
            ajaxModal: function () {

                $body.append(
                    '<div id="ajax-modal"><button class="ajax-modal-close" data-dismiss="ajax-modal"></button><div class="ajax-modal-inner"></div></div>' +
                    '<div id="ajax-tmp"></div>'
                );

                var $ajaxModal = $('#ajax-modal');
                var $ajaxClose = $ajaxModal.children('.ajax-modal-close');
                var $ajaxModalInner = $ajaxModal.children('.ajax-modal-inner');
                var $ajaxTmp = $('#ajax-tmp');

                function loadContent(target) {

                    $ajaxTmp.load(target, function (response, status) {

                        if (status == 'success') {

                            var $self = $(this);
                            var $targetContent = $self.find('#content');
                            $targetContent.attr('id', 'ajax-content');

                            $pageLoader.fadeIn(300);
                            $body.addClass('ajax-modal-open');
                            $ajaxModal.show(0).addClass('loading-started').addClass($targetContent.data('scheme'));

                            // Run Scripts
                            Core.Basic.backgrounds($self);
                            Core.Component.carousel($self);
                            Core.Component.chart($self);
                            Core.Component.modal($self);

                            // Animations
                            $('.animated', $self).appear(function () {
                                $(this).each(function () {
                                    var $target = $(this);
                                    var delay = $target.data('animation-delay');
                                    setTimeout(function () {
                                        $target.addClass($target.data('animation')).addClass('visible')
                                    }, delay);
                                });
                            });

                            // Show content aftter images loaded
                            $self.imagesLoaded(function () {

                                $ajaxModalInner.html($targetContent);

                                setTimeout(function () {
                                    $html.addClass('locked-scrolling');
                                    $ajaxModalInner.fadeIn(300);
                                    $ajaxModal.addClass('loading-finished');
                                    $ajaxTmp.html('');
                                    $ajaxClose.addClass('visible');
                                    $pageLoader.fadeOut(300);
                                }, 800);

                            });

                        } else {
                            console.log('There is no such file / element: ' + target);
                        }
                    });

                }

                function closeContent() {
                    $html.removeClass('locked-scrolling');
                    $body.removeClass('ajax-modal-open');
                    $ajaxClose.removeClass('visible');
                    $ajaxModal.fadeOut(200, function () {
                        $(this).removeClass('loading-started loading-finished');
                        $ajaxModalInner.hide(0);
                    })
                }

                $body.delegate('*[data-toggle="ajax-modal"]', 'click', function () {
                    var target = $(this).attr('href') + ' #content';
                    loadContent(target);

                    return false;
                });

                $ajaxModal.delegate('*[data-dismiss="ajax-modal"]', 'click', function () {
                    closeContent();
                    return false;
                });
            },
            accordion: function () {
                if (pageScrolling) {
                    $('.collapse').on('shown.bs.collapse hidden.bs.collapse', function () {
                        Waypoint.refreshAll();
                    });
                }
            },
            calendar: function () {

                if ($calendar.length) {

                    defaultCalendarView = 'month';
                    if ($(window).width() < 991) defaultCalendarView = 'agendaDay';

                    $calendar.fullCalendar({
                        header: {
                            left: 'title',
                            right: 'month,agendaWeek,agendaDay'
                        },
                        views: {
                            agenda: {
                                minTime: '07:00:00',
                                maxTime: '21:00:00'
                            }
                        },
                        eventLimit: true,
                        navLinks: true,
                        aspectRatio: 2,
                        defaultView: defaultCalendarView,
                        googleCalendarApiKey: 'AIzaSyBRMEkSrFLFkLKHyLVwT0DLLTqcUhUUZdM',
                        eventSources: [
                            {
                                googleCalendarId: '480uf03upv9p68q3h755gph2mo@group.calendar.google.com'
                            },
                            {
                                googleCalendarId: '71ev00p89bpntfca1crkukmfa0@group.calendar.google.com',
                                className: 'primary'
                            }
                        ],
                        dayClick: function (date, allDay, jsEvent, view) {
                            $calendar.fullCalendar('gotoDate', date.format());
                            $calendar.fullCalendar('changeView', 'agendaDay');
                        },
                        eventClick: function (calEvent, jsEvent, view) {
                            $calendar.fullCalendar('gotoDate', calEvent.start.format());
                            $calendar.fullCalendar('changeView', 'agendaDay');
                        }
                    });

                    $('.btn-calendar-nav').on('click', function () {
                        var currentView = $calendar.fullCalendar('getView').type;

                        var incrementValue = '30.00:00:00';
                        if (currentView == 'agendaWeek') {
                            incrementValue = '7.00:00:00';
                        } else if (currentView == 'agendaDay') {
                            incrementValue = '1.00:00:00';
                        }
                        if ($(this).hasClass('prev')) {
                            $calendar.fullCalendar('incrementDate', '-' + incrementValue);
                        } else if ($(this).hasClass('next')) {
                            $calendar.fullCalendar('incrementDate', incrementValue);
                        }
                        return false;
                    });

                }

            },
            carousel: function ($content) {

                var $carousel = $('.carousel', $content);

                $carousel.slick();

                var $sectionBgs = $('.section-bgs', $content),
                    $sectionSlides = $('.section-slides', $content);

                $sectionBgs.slick({
                    infinite: true,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear',
                    dots: false,
                    arrows: false,
                    asNavFor: $('.section-slides')
                });

                $sectionSlides.slick({
                    infinite: true,
                    speed: 500,
                    asNavFor: $('.section-bgs'),
                    dots: true,
                    arrows: true
                });

                $sectionSlides.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    var $parentSection = $(this).parents('.section');

                    if ($(this).find('.slide').eq(nextSlide + 1).hasClass('dark')) {
                        $parentSection.addClass('dark');
                    } else {
                        $parentSection.removeClass('dark');
                    }
                });

            },
            chart: function ($content) {

                var $chart = $('.chart', $content);

                if ($chart.length) {
                    $chart.each(function () {
                        var $self = $(this);
                        var percent = $(this).data('percent');

                        $self.attr('data-percent', 0);

                        $self.easyPieChart({
                            barColor: $self.data('bar-color'),
                            trackColor: $self.data('track-color'),
                            scaleColor: false,
                            size: 150,
                            lineWidth: 4,
                            onStep: function (from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            },
                            onStop: function () {
                                if (pageSliding) {
                                    $.fn.fullpage.reBuild();
                                }
                            }
                        });

                        $self.appear(function () {
                            $(this).data('easyPieChart').update(percent);
                        });
                    });
                }

            },
            forms: function () {

                // Notification Bar 
                $body.append(
                    '<div id="notification-bar"></div>'
                );

                var $notificationBar = $('#notification-bar'),
                    $notificationClose = $('#notification-bar').find('.close');

                var showNotification = function (type, msg) {
                    $notificationBar.html('<div class=' + type + '>' + msg + '<a href="#" class="close"></a></div>');
                    setTimeout(function () {
                        $notificationBar.addClass('visible');
                    }, 400);
                    setTimeout(function () {
                        $notificationBar.removeClass('visible');
                    }, 10000);
                };

                $body.delegate('#notification-bar .close', 'click', function () {
                    $notificationBar.removeClass('visible');
                    return false;
                });

                // Validate Form 
                $('[data-validate]').each(function () {
                    $(this).validate({
                        validClass: 'valid',
                        errorClass: 'error',
                        onfocusout: function (element, event) {
                            $(element).valid();
                        },
                        errorPlacement: function (error, element) {
                            return true;
                        },
                        rules: {
                            email: {
                                required: true,
                                email: true
                            }
                        }
                    });
                });

                // Contact Form
                var $contactForm = $('.contact-form');

                if ($contactForm.length > 0) {

                    $contactForm.submit(function () {
                        var $btn = $(this).find('.btn-submit'),
                            $form = $(this),
                            response,
                            msgSuccess = $(this).data('message-success'),
                            msgError = $(this).data('message-error');

                        if ($form.valid()) {
                            $btn.addClass('loading');
                            $.ajax({
                                type: 'POST',
                                url:  '/assets/php/contact-form.php',
                                data: $form.serialize(),
                                error: function (err) {
                                    setTimeout(function () {
                                        $btn.addClass('error');
                                    }, 1200);
                                },
                                success: function (data) {
                                    if (data != 'success') {
                                        showNotification('error', msgError);
                                    } else {
                                        showNotification('success', msgSuccess);
                                    }
                                },
                                complete: function (data) {
                                    setTimeout(function () {
                                        $btn.removeClass('loading');
                                    }, 1000);
                                }
                            });
                            return false;
                        }
                        return false;
                    });

                }

                // Suelo's Contact Form
                var $contactFormSuelo = $('#contact-form-suelo');

                if ($contactFormSuelo.length > 0) {

                    $contactFormSuelo.submit(function () {
                        var $btn = $(this).find('.btn-submit'),
                            $form = $(this),
                            response,
                            msgSuccess = $(this).data('message-success'),
                            msgError = $(this).data('message-error');

                        if ($form.valid()) {
                            $btn.addClass('loading');
                            $.ajax({
                                type: 'POST',
                                url: '/assets/php/contact-form-suelo.php',
                                data: $form.serialize(),
                                error: function (err) {
                                    setTimeout(function () {
                                        $btn.addClass('error');
                                    }, 1200);
                                },
                                success: function (data) {
                                    if (data != 'success') {
                                        showNotification('error', msgError);
                                    } else {
                                        showNotification('success', msgSuccess);
                                    }
                                },
                                complete: function (data) {
                                    setTimeout(function () {
                                        $btn.removeClass('loading');
                                    }, 1000);
                                }
                            });
                            return false;
                        }
                        return false;
                    });

                }

            },
            map: function () {

                var $googleMap = $('#google-map');

                if ($googleMap.length) {

                    var yourLatitude = $googleMap.data('latitude');
                    var yourLongitude = $googleMap.data('longitude');

                    var pickedStyle = $googleMap.data('style');
                    var wy = [{
                        "featureType": "all",
                        "elementType": "geometry.fill",
                        "stylers": [{"weight": "2.00"}]
                    }, {
                        "featureType": "all",
                        "elementType": "geometry.stroke",
                        "stylers": [{"color": "#9c9c9c"}]
                    }, {
                        "featureType": "all",
                        "elementType": "labels.text",
                        "stylers": [{"visibility": "on"}]
                    }, {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{"color": "#f2f2f2"}]
                    }, {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [{"color": "#ffffff"}]
                    }, {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry.fill",
                        "stylers": [{"color": "#ffffff"}]
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{"saturation": -100}, {"lightness": 45}]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [{"color": "#eeeeee"}]
                    }, {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [{"color": "#7b7b7b"}]
                    }, {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [{"color": "#ffffff"}]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{"visibility": "simplified"}]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [{"color": "#c8d7d4"}]
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [{"color": "#070707"}]
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [{"color": "#ffffff"}]
                    }];
                    var apple = [{
                        "featureType": "landscape.man_made",
                        "elementType": "all",
                        "stylers": [{"color": "#faf5ed"}, {"lightness": "0"}, {"gamma": "1"}]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "geometry.fill",
                        "stylers": [{"color": "#bae5a6"}]
                    }, {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{"weight": "1.00"}, {"gamma": "1.8"}, {"saturation": "0"}]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [{"hue": "#ffb200"}]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [{"lightness": "0"}, {"gamma": "1"}]
                    }, {
                        "featureType": "transit.station.airport",
                        "elementType": "all",
                        "stylers": [{"hue": "#b000ff"}, {"saturation": "23"}, {"lightness": "-4"}, {"gamma": "0.80"}]
                    }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#a0daf2"}]}];
                    var grayscale = [{
                        "featureType": "administrative",
                        "elementType": "all",
                        "stylers": [{"saturation": "-100"}]
                    }, {
                        "featureType": "administrative.province",
                        "elementType": "all",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{"saturation": -100}, {"lightness": "50"}, {"visibility": "simplified"}]
                    }, {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{"saturation": "-100"}]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{"visibility": "simplified"}]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "all",
                        "stylers": [{"lightness": "30"}]
                    }, {
                        "featureType": "road.local",
                        "elementType": "all",
                        "stylers": [{"lightness": "40"}]
                    }, {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{"saturation": -100}, {"visibility": "simplified"}]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]
                    }, {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [{"lightness": -25}, {"saturation": -100}]
                    }];
                    var paper = [{
                        "featureType": "administrative",
                        "elementType": "all",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{"visibility": "simplified"}, {"hue": "#0066ff"}, {"saturation": 74}, {"lightness": 100}]
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{"visibility": "simplified"}]
                    }, {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{"visibility": "simplified"}]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{"visibility": "off"}, {"weight": 0.6}, {"saturation": -85}, {"lightness": 61}]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [{"visibility": "on"}]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "all",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "road.local",
                        "elementType": "all",
                        "stylers": [{"visibility": "on"}]
                    }, {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{"visibility": "simplified"}]
                    }, {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{"visibility": "simplified"}, {"color": "#5f94ff"}, {"lightness": 26}, {"gamma": 5.86}]
                    }];
                    var lunar = [{"stylers": [{"hue": "#ff1a00"}, {"invert_lightness": true}, {"saturation": -100}, {"lightness": 33}, {"gamma": 0.5}]}, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{"color": "#2D333C"}]
                    }];

                    var mapMarker = $googleMap.data('marker') ? '_' + $googleMap.data('marker') : '_orange';

                    var mapOptions = {
                        zoom: 15,
                        center: {lat: yourLatitude, lng: yourLongitude},
                        mapTypeControl: false,
                        panControl: false,
                        zoomControl: true,
                        scaleControl: false,
                        streetViewControl: false,
                        scrollwheel: false,
                        styles: eval(pickedStyle)
                    };

                    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
                    var myLatLng = new google.maps.LatLng(28.6234411, 77.0391753);
                    var image = {
                        url: 'assets/img/map-marker' + mapMarker + '.png',
                        anchor: new google.maps.Point(19, 59)
                    };
                    var myLocation = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        icon: image
                    });
                }

            },
            modal: function ($content) {

                // Modal Timeout
                $('.modal[data-timeout]', $content).each(function () {
                    var timeout = $(this).data('timeout'),
                        $this = $(this);
                    setTimeout(function () {
                        $this.modal('show');
                    }, timeout)
                });

                // Modal Video
                $('[data-toggle="video-modal"]', $content).on('click', function () {
                    var modal = $(this).data('target'),
                        video = $(this).data('video')

                    $(modal + ' iframe').attr('src', video + '?autoplay=1');
                    $(modal).modal('show');

                    $(modal).on('hidden.bs.modal', function () {
                        var $modalContent = $(modal + ' .modal-content')
                        $(modal + ' iframe').remove();
                        $modalContent.html('<iframe height="500"></iframe>');
                    })

                    return false;
                });

            },
            window: function () {

                var $window = $('.window'),
                    $windowToggle = $('.window-toggle');

                if ($window.length) {
                    var s = Snap('.window-background');
                    var el = s.path('M 0 220 C 620 0, 1300 0, 1920 220 L 1920 1080 L 0 1080 Z');
                    el.transform('t0,1080');

                    var matrix = new Snap.Matrix();
                    matrix.translate(0, 0);

                    $windowToggle.on('click', function () {
                        var $self = $(this),
                            $target = $($self.data('target'));

                        if (!$target.hasClass('show')) {
                            $target.addClass('show');
                            $self.addClass('active');
                            $('body', 'html').css('overflow', 'hidden');
                            el.stop().animate({transform: 't0,0'}, 300, mina.linear, function () {
                                el.stop().animate({'path': 'M 0 0 C 620 0, 1300 0, 1920 0 L 1920 1080 L 0 1080 Z'}, 1200, mina.elastic);
                                $target.addClass('visible');
                            });
                        } else {
                            $target.removeClass('visible');
                            setTimeout(function () {
                                el.stop()
                                    .animate({'path': 'M 0 0 C 620 220, 1300 220, 1920 0 L 1920 1080 L 0 1080 Z'}, 300, mina.linear)
                                    .animate({transform: 't0,1080'}, 300, mina.linear, function () {
                                        $('body', 'html').css('overflow', 'auto');
                                        $self.removeClass('active');
                                        el.stop().animate({'path': 'M 0 0 C 620 0, 1300 0, 1920 0 L 1920 1080 L 0 1080 Z'}, 1200, mina.elastic, function () {
                                            $target.removeClass('show');
                                            el.attr({
                                                path: 'M 0 220 C 620 0, 1300 0, 1920 220 L 1920 1080 L 0 1080 Z'
                                            });
                                        });
                                    });
                            }, 300);
                        }
                    });

                    // By default its black, lets change its attributes
                }

            },
            points: function () {

                // Product Feature
                $('.point', '#content').each(function () {
                    var x = $(this).data('x');
                    var y = $(this).data('y');
                    $(this).css({
                        'top': y,
                        'left': x
                    });
                });

            },
            contactMap: function () {

                $('[data-toggle="contact-map"]', '#content').on('change', function (e) {
                    var $self = $(this),
                        $sectionContact = $self.parents('.section-contact'),
                        $sectionContactContent = $sectionContact.find('.section-contact-content');

                    $sectionContact.toggleClass('map-visible');
                });

            }
        }
    };

    // Global Events
    // -------------------------------

    $(document).ready(function () {
        Core.init();
    });

    $(window).on('load', function () {
        $pageLoader.fadeOut(300, function () {
            $body.addClass('loaded');
        })
    });

    $(window).on('resize', function () {
        // Refresh Waypoints
        if (pageScrolling) {
            setTimeout(function () {
                Waypoint.refreshAll();
            }, 300);
        }
        // Scrolling Footer
        if (pageScrolling) Core.Basic.footer();

        // Adjust Calendar
        if ($calendar.length) {
            if ($(window).width() < 991) {
                defaultCalendarView = 'agendaDay';
                $calendar.fullCalendar('changeView', defaultCalendarView);
            } else {
                defaultCalendarView = 'month';
                $calendar.fullCalendar('changeView', defaultCalendarView);
            }
        }
    });

    $(document).on('click', function () {
        Core.Basic.Navigation.hideNav();
    });

}(jQuery));
