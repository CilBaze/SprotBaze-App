$(function() {
    "use strict";
    $(function() {
        $(".preloader").fadeOut()
    }), jQuery(document).on("click", ".mega-dropdown", function(i) {
        i.stopPropagation()
    });
    var i = function() {
        var i = window.innerWidth > 0 ? window.innerWidth : this.screen.width,
            e = 70;
        1170 > i ? ($("body").addClass("mini-sidebar"), $(".navbar-brand span").hide(), $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible"), $(".sidebartoggler i").addClass("ti-menu")) : ($("body").removeClass("mini-sidebar"), $(".navbar-brand span").show(), $(".sidebartoggler i").removeClass("ti-menu"));
        var s = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
        s -= e, 1 > s && (s = 1), s > e && $(".page-wrapper").css("min-height", s + "px")
    };
    $(window).ready(i), $(window).on("resize", i), 
        $(".sidebartoggler").on("click", function() {
            $("body").hasClass("mini-sidebar") ? ($("body").trigger("resize"), $(".scroll-sidebar, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible"), $("body").removeClass("mini-sidebar"), $(".navbar-brand span").show(), $(".sidebartoggler i").addClass("ti-menu")) : ($("body").trigger("resize"), $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible"), $("body").addClass("mini-sidebar"), $(".navbar-brand span").hide(), $(".sidebartoggler i").removeClass("ti-menu"))
        }), $(".fix-header .topbar").stick_in_parent({}), 

        $(".nav-toggler").click(function() {
            $("body").toggleClass("show-sidebar"), 
            $(".nav-toggler i").toggleClass("ti-menu"), 
            $(".nav-toggler i").addClass("ti-close")
        }), 

            $(".sidebartoggler").on("click", function() {
            $(".sidebartoggler i").toggleClass("ti-menu")
        }),

         $(".right-side-toggle").click(function() {
            $(".right-sidebar").slideDown(50), 
            $(".right-sidebar").toggleClass("shw-rside")
        }), 

        //  $(function() {
        //     for (var i = window.location, e = $("ul#sidebarnav a").filter(function() {
        //             return this.href == i
        //         })
        //         .addClass("active").parent().addClass("active");;) {
        //         if (!e.is("li")) break;
        //         e = e.parent().addClass("in").parent().addClass("active")
        //     }
        // }),



         $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        }), $(function() {
            $('[data-toggle="popover"]').popover()
        }), $(function() {
            $("#sidebarnav").metisMenu()
        }), $(".scroll-sidebar").slimScroll({
            position: "left",
            size: "5px",
            height: "100%",
            color: "#dcdcdc"
        }), $(".message-center").slimScroll({
            position: "right",
            size: "5px",
            color: "#dcdcdc"
        }), $(".aboutscroll").slimScroll({
            position: "right",
            size: "5px",
            height: "80",
            color: "#dcdcdc"
        }), $(".message-scroll").slimScroll({
            position: "right",
            size: "5px",
            height: "570",
            color: "#dcdcdc"
        }), $(".chat-box").slimScroll({
            position: "right",
            size: "5px",
            height: "470",
            color: "#dcdcdc"
        }), $(".slimscrollright").slimScroll({
            height: "100%",
            position: "right",
            size: "5px",
            color: "#dcdcdc"
        }), $("body").trigger("resize"), $(".list-task li label").click(function() {
            $(this).toggleClass("task-done")
        }), $("#to-recover").on("click", function() {
            $("#loginform").slideUp(), $("#recoverform").fadeIn()
        }), $(document).on("click", ".card-actions a", function(i) {
            i.preventDefault(), $(this).hasClass("btn-close") && $(this).parent().parent().parent().fadeOut()
        }),
        function(i, e, s) {
            var o = '[data-perform="card-collapse"]';
            i(o).each(function() {
                var e = i(this),
                    s = e.closest(".card"),
                    o = s.find(".card-block"),
                    r = {
                        toggle: !1
                    };
                o.length || (o = s.children(".card-heading").nextAll().wrapAll("<div/>").parent().addClass("card-block"), r = {}), o.collapse(r).on("hide.bs.collapse", function() {
                    e.children("i").removeClass("ti-minus").addClass("ti-plus")
                }).on("show.bs.collapse", function() {
                    e.children("i").removeClass("ti-plus").addClass("ti-minus")
                })
            }), i(s).on("click", o, function(e) {
                e.preventDefault();
                var s = i(this).closest(".card"),
                    o = s.find(".card-block");
                o.collapse("toggle")
            })
        }(jQuery, window, document)
});