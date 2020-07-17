function initialize() {
  //sidenav

  const sidenav = document.querySelector(".slider");
  M.Slider.init(sidenav, {
    indicators: false,
    interval: 5000,
  });


  // Datepicker

  const picker = document.querySelector(".datepicker");
  M.Datepicker.init(picker, {
    autoclose: true,
    showClearBtn: true,
    minDate: new Date(),
    format: "mm/dd/yyyy",
  });

  // Tabs 

  const tabs = document.querySelector(".tabs");
  M.Tabs.init(tabs, {});
}


function carouselInit() {
    const carousel = document.querySelector(".carousel");
    M.Carousel.init(carousel, {
      fullWidth: true,
      indicators: true,
    });
  }

export { initialize,carouselInit };
