$(function () {
   $('.about-us__slider').slick({
      arrows: false,
      dots: true,
      autoplay: true
   });

   $('.overview__popup-link').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
   });

   $('.our-projects__slider').slick({
      prevArrow: '<img class="slider__arrow our-projects__slider-arrow-left" src="images/our-projects/our-projects-arrow-left.svg" alt="arrow-left">',
      nextArrow: '<img class="slider__arrow our-projects__slider-arrow-right" src="images/our-projects/our-projects-arrow-right.svg" alt="arrow-right">',
      arrows: true,
      dots: false,
      fade: true,
      asNavFor: '.our-projects__slider-nav'
   });
   $('.our-projects__slider-nav').slick({
      asNavFor: '.our-projects__slider',
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true
   });

   $('.materials__slider').slick({
      prevArrow: '<img class="slider__arrow materials__slider-arrow-left" src="images/materials/materials-arrow-left.svg" alt="arrow-left">',
      nextArrow: '<img class="slider__arrow materials__slider-arrow-right" src="images/materials/materials-arrow-right.svg" alt="arrow-right">',
      arrows: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4
   });

   // Переменные для слайдеров и аутпутов справа от слайдеров

   var $range1 = $(".calculator__area-range");
   var $input1 = $(".calculator__area-value");

   var $range2 = $(".calculator__thickness-range");
   var $input2 = $(".calculator__thickness-value");

   var instance1;
   var instance2;

   var min1 = 200;
   var max1 = 3000;

   var min2 = 10;
   var max2 = 30;

   var range1val = min1;
   var range2val = min2;

   // Функции для подключения слайдеров и отображения чисел справа от них

   // Первый слайдер и его числовой аутпут справа
   $('.calculator__area-range').ionRangeSlider({
      // настройки слайдера как в слике
      skin: "round",
      min: min1,
      max: max1,
      step: 1,
      from: 200,
      hide_min_max: true,
      // Функции для аутпута при старте и при изменении ползунка
      onStart: function (data) {
         $input1.prop("value", data.from);
      },
      onChange: function (data) {
         range1val = data.from;
         sum(); // здесь вызов функции калькулятора, чтобы он реагировал на изменение первого слайдера
         $input1.prop("value", data.from);
      }
   });

   // здесь переменные и функции для аутпута
   instance1 = $range1.data("ionRangeSlider");

   $input1.on("input", function () {
      var val = $(this).prop("value");

      if (val < min1) {
         val = min1;
      } else if (val > max1) {
         val = max1;
      }

      instance1.update({
         from: val
      });
   });

   // Второй слайдер и его числовой аутпут справа
   $('.calculator__thickness-range').ionRangeSlider({
      // настройки слайдера как в слике
      skin: "round",
      min: min2,
      max: max2,
      step: 2,
      from: 10,
      hide_min_max: true,
      // Функции для аутпута при старте и при изменении ползунка
      onStart: function (data) {
         $input2.prop("value", data.from);
      },
      onChange: function (data) {
         range2val = data.from;
         sum(); // здесь вызов функции калькулятора, чтобы он реагировал на изменение второго слайдера
         $input2.prop("value", data.from);
      }
   });

   // Переменные и функции для аутпута
   instance2 = $range2.data("ionRangeSlider");

   $input2.on("input", function () {
      var val = $(this).prop("value");

      if (val < min2) {
         val = min2;
      } else if (val > max2) {
         val = max2;
      }

      instance2.update({
         from: val
      });
   });

   // Функции калькулятора

   // Функция которая при клике на чекбокс обновляет функцию калькулятора
   $('.calculator__slider-checkbox').on('change', function (event) {
      sum();
   });

   // Функция калькулятора
   function sum() {
      // переменные калькулятора
      var price = 250;
      var sqm = range1val;
      var thickness = range2val;
      var materialsPriceElem = $('.calculator__slider-checkbox'); // обращение к элементу чекбокса через переменную
      var materialsPrice;
      
      // правило для чекбокса и присваиваем значения для состояний чекбокса через отдельную переменную
      if (materialsPriceElem.prop('checked')) {
         materialsPrice = 350;
      } else {
         materialsPrice = 0;
      }

      // Переменная для расчёта общей стоимости
      var sum = price * sqm * (thickness / 10) + materialsPrice * sqm * (thickness / 10);
      // Функция для отображения результата и округление чтоб без запятой число выводилось   
      $('.calculator__sum').text(Math.round(sum));

      // Переменная для расчёта стоимости за кв. м
      var sumsqm = price * (thickness / 10) + materialsPrice * (thickness / 10);
      // Функция для отображения результата и округление чтоб без запятой число выводилось   
      $('.calculator__sumsqm').text(Math.round(sumsqm));
   }

   $('.gallery__slider').slick({
      arrows: false,
      dots: true,
      rows: 2,
      slidesPerRow: 4
   });
});
