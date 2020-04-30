// = ../static/libs/jquery/dist/jquery.min.js
$(document).ready(() => {
  initScrollAnimation()
  function initScrollAnimation() {
    const animateBlock = $(`.animate-block`)

    function animate() {
      const winScroll = $(window).scrollTop()
      const animOffset = $(window).height() / 1.3

      animateBlock.each(function () {
        const offset = $(this).offset().top
        if ($(this).hasClass(`animate-block--before`)) {
          if (offset <= winScroll + animOffset) {
            $(this).removeClass(`animate-block--before`)
          }
        }
      })

      const bg = $(`.bg__js`)
      bg.each(function () {
        const offset = $(this).offset().top
        let newOffset = 1.001
        if (winScroll > 10) {
          newOffset = 0.5
        }
        if (!$(this).hasClass(`bg_done`)) {
          if (offset <= winScroll + $(window).height() / newOffset) {
            const imgBg = `url(` + $(this).data(`img`) + `.jpg` + `)`
            $(this).css(`background-image`, imgBg)
            $(this).addClass(`bg_done`)
          }
        }
      })
    }
    $(window).scroll(function () {
      animate()
    })
    $(window).on(`load`, function () {
      animate()
    })
  }
})
