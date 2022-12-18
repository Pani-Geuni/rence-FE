/**
* @author : 전판근, 김예은
*/
$(function () {

	$('#join-btn').click(function () {
		$('.popup-background:eq(0)').addClass('blind');
		$('#join-section').addClass('blind');
	});

	$('#success-alert-btn').click(function () {
		$('.popup-background:eq(0)').addClass('blind');
		$('#success-alert-popup').addClass('blind');
	});
	$('#fail-alert-btn').click(function () {
		$('.popup-background:eq(0)').addClass('blind');
		$('#fail-alert-popup').addClass('blind');
	});

	$('#logout-closeBtn').click(function () {
		$('#logout-popup').addClass('blind');
		$('.popup-background:eq(0)').addClass('blind');
	});


	/****** ******* *****/
	/****** 공간 추가 *****/
	/****** ******* *****/


	// 공간 가격 정규표현식 사용
	$("#input-price-name").on("keyup keydown", function () {
		let check = /^[0-9]+$/;

		if (!check.test($("#input-price-name").val().trim())) {
			$(this).siblings(".r-input-warning:eq(0)").removeClass("blind");
		} else {
			$(this).siblings(".r-input-warning:eq(0)").addClass("blind");
		}
	});


	// 인풋 창 클릭 시 경고 테두리 초기화
	$('.room-input').click(function () {
		$(this).removeClass("null-input-border");
	});

	// 공간 가격 정규표현식 사용
	$("#m-input-price-name").on("keyup keydown", function () {
		let check = /^[0-9]+$/;

		if (!check.test($("#m-input-price-name").val().trim())) {
			$(this).siblings(".r-input-warning:eq(1)").removeClass("blind");
		} else {
			$(this).siblings(".r-input-warning:eq(1)").addClass("blind");
		}
	});

	/** ****************** **/
	/** 환경 설정 부분 팝업 관련 **/
	/** ****************** **/
	$('#btn-update-pw').on('click', function () {
		$('#popup-update-pw').removeClass('blind');
		$('.popup-background:eq(0)').removeClass('blind');
	});

	$('#btn-popup-close').on('click', function () {
		$('#popup-update-pw').addClass('blind');
		$('.popup-background:eq(0)').addClass('blind');
	});

	$('#btn-host-delete').on('click', function () {
		$('#host-delete-popup').removeClass('blind');
		$('.popup-background:eq(0)').removeClass('blind');
	});

	$('#host-delete-closeBtn').on('click', function () {
		$('#host-delete-popup').addClass('blind');
		$('.popup-background:eq(0)').addClass('blind');
	});

	var delete_host_flag = true;
	/** 삭제 요청 버튼 **/
	$("#delete-host-btn").on('click', function () {
		if (delete_host_flag) {
			delete_host_flag = false;

			//로딩 화면
			$(".popup-background:eq(1)").removeClass("blind");
			$("#spinner-section").removeClass("blind");

			$.ajax({
				url: "/backoffice/setting_delete",
				type: "POST",
				dataType: 'json',
				data: {
					backoffice_no: $.cookie("backoffice_no")
				},
				success: function (res) {
					delete_host_flag = true;

					//로딩 화면 닫기
					$(".popup-background:eq(1)").addClass("blind");
					$("#spinner-section").addClass("blind");

					// 호스트 삭제 성공
					if (res.result == 1) {
						$('#host-delete-popup').addClass('blind');
						$('.popup-background:eq(0)').addClass('blind');

						$(".popup-background:eq(1)").removeClass("blind");
						$("#common-alert-popup").removeClass("blind");
						$(".common-alert-txt").text("마스터에게 삭제 요청되었습니다.");
						$("#common-alert-btn").attr("is_reload", "logout")
					} else {
						$(".popup-background:eq(1)").removeClass("blind");
						$("#common-alert-popup").removeClass("blind");
						$(".common-alert-txt").text("남은 예약이 존재하여 삭제할 수 없습니다.");
					}
				},
				error: function () {
					delete_host_flag = true;

					//로딩 화면 닫기
					$(".popup-background:eq(1)").addClass("blind");
					$("#spinner-section").addClass("blind");

					$(".popup-background:eq(1)").removeClass("blind");
					$("#common-alert-popup").removeClass("blind");
					$(".common-alert-txt").text("오류 발생으로 인해 처리에 실패하였습니다.");
				}
			});
		}
	});

	/** 호스트 로그아웃 요청 버튼 -> 팝업 띄우기 **/
	$('#btn-host-logout').on("click", function () {
		$('.popup-background:eq(0)').removeClass('blind');
		$('#logout-popup').removeClass('blind');
	});


	/** 비밀번호 변경 팝업 닫기 버튼*/
	$("#btn-popup-close").on("click", function () {
		$(".input-check-pw").removeClass("null-input-border");
		$(".input-check-pw").val("");
	});

	/** 현재 비밀번호 일치 여부 확인 버튼*/
	$("#btn-popup-confirm").on("click", function () {
		if ($(".input-check-pw").val().trim().length > 0) {
			//로딩 화면
			$(".popup-background:eq(1)").removeClass("blind");
			$("#spinner-section").removeClass("blind");

			$.ajax({
				url: "/backoffice/update_pw",
				type: "GET",
				dataType: 'json',
				data: {
					backoffice_no: $.cookie("backoffice_no"),
					backoffice_pw: $(".input-check-pw").val().trim()
				},
				success: function (res) {
					//로딩 화면 닫기
					$(".popup-background:eq(1)").addClass("blind");
					$("#spinner-section").addClass("blind");

					// 현재 비밀번호 일치 성공
					if (res.result == 1) {
						location.href = "/backoffice/setting_pw?backoffice_no=" + window.btoa($.cookie("backoffice_no"));
					} else if (res.result == 0) {
						$(".popup-background:eq(1)").removeClass("blind");
						$("#common-alert-popup").removeClass("blind");
						$(".common-alert-txt").text("일치하지않는 비밀번호입니다.");

						$(".input-check-pw").removeClass("null-input-border");
						$(".input-check-pw").val("");
					}
				},
				error: function () {
					//로딩 화면 닫기
					$(".popup-background:eq(1)").addClass("blind");
					$("#spinner-section").addClass("blind");

					$(".popup-background:eq(1)").removeClass("blind");
					$("#common-alert-popup").removeClass("blind");
					$(".common-alert-txt").text("오류 발생으로 인해 처리에 실패하였습니다.");
				}
			});
		} else {
			$(".input-check-pw").addClass("null-input-border");
		}
	});



	/****************************** */
	/***********FUNCTION*********** */
	/****************************** */


	function update() {
		update_room_flag = false;

		//로딩 화면
		$(".popup-background:eq(1)").removeClass("blind");
		$("#spinner-section").removeClass("blind");

		$.ajax({
			url: "/backoffice/updateOK_room",
			type: "POST",
			dataType: 'json',
			data: {
				backoffice_no: $.cookie("backoffice_no"),
				room_no: $('#btn-edit').attr("idx"),
				room_name: $("#m-input-room-name").val().trim(),
				room_type: $('#m-edit_room_type').val(),
				room_price: $("#m-input-price-name").val().trim()
			},
			success: function (res) {
				update_room_flag = true;

				//로딩 화면 닫기
				$(".popup-background:eq(1)").addClass("blind");
				$("#spinner-section").addClass("blind");

				// 변경 성공
				if (res.result == 1) {
					// input 초기화
					$('#m-edit_room_type').val('');
					$("#m-input-room-name").val('');
					$("#m-input-price-name").val("");
					$("#m-edit-room-type-label").text('타입을 선택해주세요.');

					$('#m-edit-room-type-label').css('color', '#808080');

					// 경고 테두리 초기화
					$("#m-input-room-name").removeClass("null-input-border");
					$("#m-input-price-name").removeClass("null-input-border");
					$("#m-room-type-select").removeClass("null-input-border");

					$('#room-edit-section').addClass('blind');
					$('.popup-background:eq(0)').addClass('blind');

					var sample = $(".edit-type-select-item:eq(0)").clone();
					$(".edit-type-select-list").empty().append(sample);

					$(".popup-background:eq(1)").removeClass("blind");
					$("#common-alert-popup").removeClass("blind");
					$(".common-alert-txt").text("수정이 완료되었습니다.");
					$("#common-alert-btn").attr("is_reload", true);
				} else {
					$(".popup-background:eq(1)").removeClass("blind");
					$("#common-alert-popup").removeClass("blind");
					$(".common-alert-txt").text("수정에 실패하였습니다.");
				}
			},
			error: function () {
				update_room_flag = true;

				//로딩 화면 닫기
				$(".popup-background:eq(1)").addClass("blind");
				$("#spinner-section").addClass("blind");

				$(".popup-background:eq(1)").removeClass("blind");
				$("#common-alert-popup").removeClass("blind");
				$(".common-alert-txt").text("오류 발생으로 인해 처리에 실패하였습니다.");
			}
		});
	}

});