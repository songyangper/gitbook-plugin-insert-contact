require(['gitbook', 'jQuery'], function (gitbook, $) {
    var author = ''
    var style = ''
    var insertLogo = function (author, style) {
        if (author) {
            $('.book-summary').children().eq(1).before('<div class="book-author" style="' + style + '">' + '作者：' + author + '</div>')
        }
    }

    gitbook.events.bind('start', function (e, config) {
        author = config['insert-contact']['author']
        style = config['insert-contact']['style']
    })

    gitbook.events.bind("page.change", function() {
        insertLogo(author, style)
    })
})