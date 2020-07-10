require(['gitbook', 'jQuery'], function (gitbook, $) {
    var showAuthor = ''
    var author = ''
    var insertLogo = function (showAuthor) {
        if (showAuthor) {
            author = this.options.author;
        }
        $('.book-summary').children().eq(1).before('<div class="book-author">' + '作者' + author + '</div>')
    }

    gitbook.events.bind('start', function (e, config) {
        showAuthor = config['insert-contact']['showAuthor'];
    })

    gitbook.events.bind("page.change", function() {
        insertLogo(showAuthor)
    })
})