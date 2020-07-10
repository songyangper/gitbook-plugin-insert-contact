require(['gitbook', 'jQuery'], function (gitbook, $) {
    var author = ''
    var insertLogo = function (author) {
        if (author) {
            $('.book-summary').children().eq(1).before('<div class="book-author">' + '作者：' + author + '</div>')
        }
    }

    gitbook.events.bind('start', function (e, config) {
        author = config['insert-contact']['author']
    })

    gitbook.events.bind("page.change", function() {
        insertLogo(author)
    })
})