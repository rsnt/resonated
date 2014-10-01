var themes = [

    {
        name: 'Sensa',
        iframe: 'http://demo.drythemes.com/sensa-wp/',
        link: 'http://themeforest.net/item/sensa-one-page-responsive-wordpress-theme/7588759?ref=ResonateThemes'
    },
    {
        name: 'Gridstack',
        iframe: 'http://themewich.com/gridstack/',
        link:'http://themeforest.net/item/gridstack-responsive-agency-wordpress-theme/5397835?ref=ResonateThemes'
    },
    {
        name: 'Flatco',
        iframe: 'http://themes.themewaves.com/flatco/',
        link:'http://themeforest.net/item/flatco-multipurpose-responsive-wordpress-theme/5222241?ref=ResonateThemes'
    },
    {
        name: 'Omega',
        iframe: 'http://omega.oxygenna.com/',
        link: 'http://themeforest.net/item/omega-multipurpose-responsive-bootstrap-theme/7660374?ref=ResonateThemes'
    },
    {
        name: 'Argus One Page',
        iframe: 'http://demo.drythemes.com/argus/',
        link: 'http://themeforest.net/item/argus-one-page-responsive-template/3740056?ref=ResonateThemes'
    }   
];


(function($) {

    function selectChanged(e) {
        var value = e.target.value;
        var theme = themes[value];
        $('iframe').attr('src', theme.iframe);
        $('#btn-info').attr('href', theme.link);
        $('#btn-buy').attr('href', theme.link);
    }
    //inital loading of themes
    function init() {
        var select = $('#theme-select');
        select.empty();

        $(themes).each(function(index,object) {
            var selected = '';
            if(index === 0) {
                selected = ' selected="selected"';
            }

            var optionString = '<option value="'+index+'"'+selected+'>'+this.name+'</option>';
            select.append($(optionString));
        });

        //change iframe and link when select changes
        select.on('change', selectChanged);

        //trigger change
        select.change();

        //update location when buy btn is clicked
        $('#btn-buy').on('click', function(e) {
            document.location.href = this.href;

        });
        //update location when buy btn is clicked
        $('#btn-info').on('click', function(e) {
            document.location.href = this.href;

        });
    }

    //load
    init();
})(jQuery);