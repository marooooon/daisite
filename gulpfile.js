var elixir = require('laravel-elixir');

var paths = {
    'jquery' : 'bower_components/jquery/',
    'bootstrap' : 'bower_components/bootstrap-sass/assets/'
};

elixir(function(mix) {
    mix.sass('app.scss')
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts/bootstrap')
        .copy('resources/js', 'public/js/')
        .copy('resources/css', 'public/css/')
        .copy('resources/image', 'public/img/')
        .scripts([
            paths.jquery + "dist/jquery.js",
            paths.bootstrap + "javascripts/bootstrap.js",
        ], 'public/js/app.js', './')
        .version(['css/app.css', 'js/app.js']);
});