$.fn.imagesLoaded = function (callback) { var elems = this.find('img'), elems_src = [], self = this, len = elems.length; if (!elems.length) { callback.call(this); return this } elems.one('load error', function () { if (--len === 0) { len = elems.length; elems.one('load error', function () { if (--len === 0) { callback.call(self) } }).each(function () { this.src = elems_src.shift() }) } }).each(function () { elems_src.push(this.src); this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" }); return this };

/////////////////* Gallery */////////////////////////


$("body").find('#tiles').imagesLoaded(function () {
    "use strict";
    var filter = '';
    var handler;
    var options = {
        autoResize: true, // This will auto-update the layout when the browser window is resized.
        container: $('#main'), // Optional, used for some extra CSS styling
        offset: 10 // Optional, the distance between grid items
    };
    var refresh = function () {
        if (handler) {
            handler.wookmarkClear();
            handler = null;
        }
        $("body").find('#tiles li').addClass('hide');
        handler = $(filter);
        handler.removeClass("hide");
        handler.wookmark(options);
    };
    var updateFilters = function () {
        var oldFilter = filter;
        filter = '';
        var filters = [];
        var lis = $("body").find('#filters li');
        var i = 0, length = lis.length, li;
        for (; i < length; i++) {
            li = $(lis[i]);
            if (li.hasClass('active')) {
                filters.push('#tiles li.' + li.attr('data-filter'));
            }
        }
        if (filters.length === 0) {
            filters.push('#tiles li');
        }
        filter = filters.join(', ');
        if (oldFilter !== filter) {
            refresh();
        }
    };
    var onClickFilter = function (event) {
        var item = $(event.currentTarget);
        $("body").find('#filters li').removeClass('active');
        item.toggleClass('active');
        updateFilters();
    };
    $("body").find('#filters li').click(onClickFilter);
    updateFilters();
});