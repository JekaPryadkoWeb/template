export function scrollAnimation() {
	const animateBlock = $(`.a-b`)

	function animate() {
		const winHeight = $(window).height()
		const winScroll = $(window).scrollTop()
		animateBlock.each(function () {
			const offset = $(this).offset().top
			const coef = 0.9

			if ($(this).hasClass(`a-b--before`)) {
				if (offset <= winScroll + winHeight * coef) {
					$(this).removeClass(`a-b--before`)
				}
			}
		})

		const bg = $(`.bg__js`)
		bg.each(function () {
			const offset = $(this).offset().top
			const coef = 1.5
			if (!$(this).hasClass(`bg_done`)) {
				if (offset <= winScroll + winHeight * coef) {
					const imgBg = `url(` + $(this).data(`img`) + `)`
					$(this).css(`background-image`, imgBg)
					$(this).addClass(`bg_done`)
				}
			}
		})

		const src = $(`.src__js`)
		src.each(function () {
			const offset = $(this).offset().top
			const coef = 1.5

			if (!$(this).hasClass(`src_done`)) {
				if (offset <= winScroll + winHeight * coef) {
					const imgSrc = $(this).data(`src`)
					$(this).attr(`src`, imgSrc)
					$(this).addClass(`src_done`)
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
