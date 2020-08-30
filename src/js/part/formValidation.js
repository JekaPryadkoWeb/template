export function formValidation() {
  function validateEmail(email) {
		const pattern = /^([\w-.]+)@((\[[0-9]{1,9}\.[0-9]{1,9}\.[0-9]{1,9}\.)|(([\w-]+\.)+))([a-zA-Z]{2,9}|[0-9]{1,9})(\]?)$/
		return pattern.test(email)
	}

	function validatePhone(phone) {
		const pattern = /^-?\d+$/
		return pattern.test(phone)
	}

	$(`.email_js`).on(`keyup change blur`, function () {
		const email = $(this).val()
		if (!validateEmail(email) || email.length <= 8) {
			$(this).addClass(`disabled`)
		} else {
			$(this).removeClass(`disabled`)
		}
	})

	$(`.phone_js`).on(`keyup change blur`, function () {
		const phone = $(this).val()
		if (!validatePhone(phone) || phone.length <= 8) {
			$(this).addClass(`disabled`)
		} else {
			$(this).removeClass(`disabled`)
		}
	})

	$(`.text_js`).on(`keyup change blur`, function () {
		const text = $(this).val()
		if (text.length <= 2) {
			$(this).addClass(`disabled`)
		} else {
			$(this).removeClass(`disabled`)
		}
	})

	$(document).on(`submit`, `.validation_js`, function (e) {
		e.preventDefault()
		const email = $(this).find(`.email_js`)
		const phone = $(this).find(`.phone_js`)
		const text = $(this).find(`.text_js`)
		const self = $(this)

		if (email.length > 0) {
			if (!validateEmail(email.val())) {
				$(this).find(`.email_js`).addClass(`disabled`)
			} else {
				$(this).find(`.email_js`).removeClass(`disabled`)
			}
		}

		if (phone.length > 0) {
			if (!validatePhone(phone.val())) {
				$(this).find(`.phone_js`).addClass(`disabled`)
			} else {
				$(this).find(`.phone_js`).removeClass(`disabled`)
			}
		}

		if (text.length > 0) {
			text.each(function () {
				if ($(this).val().length <= 2) {
					$(this).addClass(`disabled`)
				} else {
					$(this).removeClass(`disabled`)
				}
			})
		}

		if (
			email.hasClass(`disabled`) ||
			phone.hasClass(`disabled`) ||
			text.hasClass(`disabled`)
		) {
			self.find(`button`).addClass(`error-shake`)
			self.addClass(`highlight`)
			setTimeout(function () {
				self.removeClass(`highlight`)
			}, 1500)
			setTimeout(function () {
				self.find(`button`).removeClass(`error-shake`)
			}, 1500)
			return false
		} else {
			// Send form
			return true
		}
	})

	$(`.validation_js button`).on(`mouseover`, function () {
		$(this).closest(`.validation_js`).addClass(`highlight`)
	})
	$(`.validation_js button`).on(`mouseleave`, function () {
		$(this).closest(`.validation_js`).removeClass(`highlight`)
	})
}
