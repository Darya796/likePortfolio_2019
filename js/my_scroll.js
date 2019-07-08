// var getXPosition = (el) => {
//     let matrix = $(el).css('transform').replace(/[^0-9\-.,]/g, '').split(',');
//     var x = matrix[12] || matrix[4] || 0;
//
//     // console.log(x);
//     // приводим к целому числу
//     return parseInt(x);
// };

var init_custom_scroll = () => {

    // var is_over = true;
    // console.log(is_over);

    $("body").on("mousewheel.outer", function (event, delta) {
        // is_over = false;
        // console.log(is_over);

        // event.preventDefault();

        // происходит ли скролл внутри списка
        let is_inside = $(event.target).is(".works__slider") ||
            $(event.target).closest(".works__slider-outer").length;

        console.log(is_inside);

        // переменная для определения, дошел ли скролл до границы списка
        // let isMaxOffset = false;

        var mama = 0;
        // если сколл происходит на списке
        if (is_inside) {
            mama += 200;
            $(".works__slider").css('transform', 'translateY(' + -mama + 'px)');
        }
            // определяем смещение списка
            // var innerOffset = getXPosition('.works__slider-outer');


            // максимальное смещение вперед для списка
            // var maxInnerOffset = Math.round($(".works__slider").height());

            // console.log(maxInnerOffset);


            // определяем направление скролла
            // if (delta < 0) {
            //     // дошел ли скролл до максимального смещения (bool)
            //     isMaxOffset = (innerOffset <= maxInnerOffset);
            // } else {
            //     // дошел ли скролл до 0 (до левой границы) (bool)
            //     isMaxOffset = (innerOffset >= 0);
            // }
            // console.log(delta);
        // }

        // если скролл происходит в области списка и сколл не дошел до конца списка
        // if (is_inside && !isMaxOffset) {
        //     console.log("msms");
        //
        //     // к начальному смещению прибавляем фиксированное смещение с + / -
        //     innerOffset -= (delta / Math.abs(delta) * -210);
        //     // записываем смещение, проверяя, чтобы значение не выходило за допустимые границы
        //     $('.works__slider').css('transform', 'translate3D(0, ' +
        //         Math.max(Math.min(0, innerOffset), maxInnerOffset) + 'px, 0)');
        // }

        // если скроллятся внешние экраны
        // else {
            // определяем ширину экрана
            // let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

            // определяем текущее смещение
            // let x = getXPosition('.body');

            // к начальному смещению прибавляем фиксированное смещение с + / -
            // x -= (delta / Math.abs(delta) * -1500);

            // let x1 = (x % w); // расстояние при скролле от начала текущего экрана
            // let x2 = w - Math.abs(x1);// расстояние до начала след экрана
            // let x3 = Math.min(Math.abs(x1), Math.abs(x2)); // минимальное из двух смещений

            // если минимальное в пределах 100 px
            // if (x3 < 500) {
            //     if (Math.abs(x1) < Math.abs(x2)) {
            //         // если мы перескроллили - отнимаем недостающее расстояние
            //         x -= Math.round(x1);
            //     } else {
            //         // если мы не доскроллили - прибавляем недостающее расстояние
            //         x -= Math.round(x2);
            //     }
            // }
            // записываем смещение, проверяя, чтобы значение не выходило за допустимые границы

            // setTimeout(function() {
            // $('.body').css('transform', 'translate3D(0 , ' + Math.max(Math.min(0, x), (w * -2)) + 'px, 0)');
            // },1500);

        // }

    //     // if(!is_over) {
    //     //     console.log("mama");
    //     //     is_over = true;
    //     //     $("body").off("mousewheel.outer");
    //     // }
    //
    });

    // $('.page-content').on("transitionend", function () {
    //     if (is_over) {
    //         $("body").on("mousewheel.outer");
    //     }
    // });

};