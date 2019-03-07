$(document).ready(function () {
    $('#home').on('click', function() {
        $('.content').load('home.html');
    });
    $('#music').on('click', function() {
        $('.content').load('music.html');
    });
    $('#books').on('click', function() {
        $('.content').load('books.html');
    });
    $('#pictures').on('click', function() {
        $('.content').load('pictures.html');
    });
    $('#recipes').on('click', function() {
        $('.content').load('recipes.html');
    });
    $('#about').on('click', function() {
        $('.content').load('about.html');
    });
});