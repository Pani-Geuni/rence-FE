/**
 * @author : 전판근, 최진실
 */

$(function () {
	// TIME PICKER
	$('.time-picker.update').timepicker({
		timeFormat: 'HH:mm',
		interval: 60,
		defaultTime: $(this).val(),
		dynamic: false,
		dropdown: true,
		scrollbar: true,
	});

	if ($('#sun_dayoff').is(":checked")) {
		$('#sun_stime').attr('disabled', true);
		$('#sun_stime').val("00:00");
		$('#sun_etime').attr('disabled', true);
		$('#sun_etime').val("00:00");
	}
	if ($('#mon_dayoff').is(":checked")) {
		$('#mon_stime').attr('disabled', true);
		$('#mon_stime').val("00:00");
		$('#mon_etime').attr('disabled', true);
		$('#mon_etime').val("00:00");
	}
	if ($('#tue_dayoff').is(":checked")) {
		$('#tue_stime').attr('disabled', true);
		$('#tue_stime').val("00:00");
		$('#tue_etime').attr('disabled', true);
		$('#tue_etime').val("00:00");
	}
	if ($('#wed_dayoff').is(":checked")) {
		$('#wed_stime').attr('disabled', true);
		$('#wed_stime').val("00:00");
		$('#wed_etime').attr('disabled', true);
		$('#wed_etime').val("00:00");
	}
	if ($('#thu_dayoff').is(":checked")) {
		$('#thu_stime').attr('disabled', true);
		$('#thu_stime').val("00:00");
		$('#thu_etime').attr('disabled', true);
		$('#thu_etime').val("00:00");
	}
	if ($('#fri_dayoff').is(":checked")) {
		$('#fri_stime').attr('disabled', true);
		$('#fri_stime').val("00:00");
		$('#fri_etime').attr('disabled', true);
		$('#fri_etime').val("00:00");
	}
	if ($('#sat_dayoff').is(":checked")) {
		$('#sat_stime').attr('disabled', true);
		$('#sat_stime').val("00:00");
		$('#sat_etime').attr('disabled', true);
		$('#sat_etime').val("00:00");
	}

	$('#mon_dayoff').click(function () {
		if (this.checked) {
			$('#mon_stime').attr('disabled', true);
			$('#mon_etime').attr('disabled', true);
		} else {
			$('#mon_stime').attr('disabled', false);
			$('#mon_etime').attr('disabled', false);
		}
	});

	$('#tue_dayoff').click(function () {
		if (this.checked) {
			$('#tue_stime').attr('disabled', true);
			$('#tue_etime').attr('disabled', true);
		} else {
			$('#tue_stime').attr('disabled', false);
			$('#tue_etime').attr('disabled', false);
		}
	});

	$('#wed_dayoff').click(function () {
		if (this.checked) {
			$('#wed_stime').attr('disabled', true);
			$('#wed_etime').attr('disabled', true);
		} else {
			$('#wed_stime').attr('disabled', false);
			$('#wed_etime').attr('disabled', false);
		}
	});

	$('#thu_dayoff').click(function () {
		if (this.checked) {
			$('#thu_stime').attr('disabled', true);
			$('#thu_etime').attr('disabled', true);
		} else {
			$('#thu_stime').attr('disabled', false);
			$('#thu_etime').attr('disabled', false);
		}
	});

	$('#fri_dayoff').click(function () {
		if (this.checked) {
			$('#fri_stime').attr('disabled', true);
			$('#fri_etime').attr('disabled', true);
		} else {
			$('#fri_stime').attr('disabled', false);
			$('#fri_etime').attr('disabled', false);
		}
	});

	$('#sat_dayoff').click(function () {
		if (this.checked) {
			$('#sat_stime').attr('disabled', true);
			$('#sat_etime').attr('disabled', true);
		} else {
			$('#sat_stime').attr('disabled', false);
			$('#sat_etime').attr('disabled', false);
		}
	});

	if ($("#backoffice_info").val() != null) {
		var len = $("#backoffice_info").val().length;
		$(".b_info_txt_length").text(len);
	}

	//글자 수
	$("#backoffice_info").on("keydown keyup", function () {
		$(".b_info_txt_length").text($(this).val().length);

		if ($(this).val().length > 500) {
			$(this).val($(this).val().substring(0, 500));
		}
	});

	/** 공용 알러트 창닫기 버튼 */
	$("#common-alert-btn").click(function () {
		$(".popup-background:eq(1)").addClass("blind");
		$("#common-alert-popup").addClass("blind");
	});

	$("input, textarea").click(function () {
		if ($(this).hasClass("null-input-border")) {
			$(this).removeClass("null-input-border");
		}
	});

	// 빈 항목 팝업 닫기
	$('#empty-fail-alert-btn').click(function () {
		$('#fail-alert-popup').addClass('blind');
		$('.popup-background:eq(0)').addClass('blind');
	});

	// 휴무일 체크시 timepicker block
	$('#sun_dayoff').click(function () {
		if (this.checked) {
			$('#sun_stime').attr('disabled', true);
			$('#sun_etime').attr('disabled', true);
		} else {
			$('#sun_stime').attr('disabled', false);
			$('#sun_etime').attr('disabled', false);
		}
	})

	/** 공간 타입 체크 박스 - 변경 불가 */
	$("#type_checkbox_office").attr("disabled", true);
	$("#type_checkbox_desk").attr("disabled", true);
	$("#type_checkbox_meeting_room").attr("disabled", true);


	var backoffice_type = "";
	$("input[name='backoffice_type']:checked").each(function () {
		backoffice_type.concat(',', $(this).val());
	});

	var backoffice_option = "";
	$("input[name='backoffice_option']:checked").each(function () {
		backoffice_option.concat(',', $(this).val());
	});

	var backoffice_around = "";
	$("input[name='backoffice_around']:checked").each(function () {
		backoffice_around.concat(',', $(this).val());
	});

	/** 호스트 수정 완료 버튼 클릭 */
	var submit_flag = true;
	$("#submit").on('click', function () {
		// 필수 input / textarea 입력되었는지 확인
		if ($("#backoffice_info").val().trim().length > 0) {
			$("#backoffice_option").val(backoffice_option);
			$("#backoffice_around").val(backoffice_around);
			if (submit_flag) {
				$("#real-submit").click();
				submit_flag = false;
				$(".popup-background:eq(1)").removeClass("blind");
				$("#spinner-section").removeClass("blind");
			}
		}
		else {
			if ($("#backoffice_info").val().trim().length == 0) {
				$("#backoffice_info").addClass("null-input-border");
			}
		}
	});

});