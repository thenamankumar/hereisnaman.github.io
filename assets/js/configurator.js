/* -----------------------------------------------------------------------------

-------------------------------------------------------------------------------- */
(function($) {
'use strict';

    var $configurationSetting = $('.configuration-setting','#content'),
        $configurationImageBox = $('.configuration-image-box','#content');

    $configurationSetting.on('click', function(){
        var $self = $(this),
            type = $self.data('configuration-type'),
            value = $self.data('configuration-value');

        $configurationImageBox.each(function(){
            var $self = $(this),
                $configurationImageLinks = $self.find('.configuration-images'),
                isBlog = false;

            if ($self.hasClass('configuration-blog')) {
                isBlog = true;
            }

            if(type === 'navigation') {
                $configurationImageLinks.find('.active').removeClass('active');
                $configurationImageLinks.find('[data-navigation="' + value + '"]').addClass('active');
            }

            if(type === 'transition' && !isBlog) {
                $configurationImageLinks.find('a').each(function(){
                    var $self = $(this);
                    var imageUrl = $self.attr('href');
                        imageUrl = imageUrl.split('.');
                        imageUrl = imageUrl[0];
                        imageUrl = imageUrl.split('-');
                        imageUrl[3] = value;
                        imageUrl = imageUrl.join('-');
                        imageUrl = imageUrl + '.html';
                    $self.attr('href',imageUrl);
                });
            }
        });

        $self.siblings('.active').removeClass('active');
        $self.addClass('active');

        return false;
    });
   
}(jQuery));