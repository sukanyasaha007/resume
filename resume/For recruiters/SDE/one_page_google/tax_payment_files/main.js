$(function () {
	$('#PaymentInfo_Amount').each(function () {
		$(this).focus();
		$(this).filter_input({ regex: '[0-9\.]' });
	});

	$('#nav-back-cancel a.back').on("click", function (e) {
		e.preventDefault();
		history.back();
	});

	$('#nav-page li.btn-back a').on("click", function (e) {
		e.preventDefault();
		history.back();
	});

	if ($('#PaymentTypeCC:checked').length > 0) {
		$('#accordion').accordion('activate', 0);
	}
	else if ($('#PaymentTypeBML:checked').length > 0) {
		$('#accordion').accordion('activate', 1);
	}

	$('.datetime').Zebra_DatePicker({
		first_day_of_week: 0,
		format: 'm/d/Y',
		view: 'years'
	});

	$('input[data-mask]').on("each", function () {
		$(this).mask($(this).data('mask'));
	});

	$('input[placeholder]').on("each", function () {
		$(this).watermark($(this).attr('placeholder'), { className: 'watermark', useNative: false });
	});

	$('input.watermark').on("each", function () {
		var $label = $(this).prev('label').hide();
		$(this).watermark($(this).prev('label').text(), { className: 'watermark', useNative: false });
	});
	
	CheckTerms();
	$('#PaymentInfo_AgreeToElectronicTerms').on("change", function () {
		CheckTerms();
	});

	CheckAccount();
	$('#AccountInfo_CreateAccount').on("change", function () {
		CheckAccount();
	});

	$('.input-validation-error:first').on("each", function () {
		$(this).focus();
		var $target = $(this); // $('input[type="submit"]');
		$.scrollTo($target, {
			duration: 250,
			offset: -50
		});
	});
});

function CheckTerms() {
	if ($("#PaymentInfo_AgreeToElectronicTerms").is(':checked')) {
		ShowTerms(true);
	}
	else {
		ShowTerms(false);
	}
}

function ShowTerms(show) {
	if (show) {
		$('.terms').slideDown(250);
	} else {
		$('#PaymentInfo_AcceptTerms').prop('checked', false);
		$('.terms').slideUp(250);
	}
}

function CheckAccount() {
	if ($("#AccountInfo_CreateAccount").is(':checked')) {
		ShowCreateAccount(true);
	}
	else {
		ShowCreateAccount(false);
	}
}

function ShowCreateAccount(show) {
	if (show) {
		$('.account-info').slideDown(250);
	} else {
		$('.account-info').slideUp(250);
	}
}