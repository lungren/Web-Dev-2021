$(function() {
    const menuitem = $('a[href="' + window.location.pathname + '"]');
    menuitem.parent().addClass('active');
    menuitem.append('<span class="sr-only">(current)</span>');

});