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


	/****** ********* *****/
	/****** 공간 수정 *****/
	/****** ********* *****/

	// 수정 버튼 클릭 -> 수정 팝업 오픈
	$('.btn-room-edit').on('click', function () {
		//로딩 화면
		$(".popup-background:eq(1)").removeClass("blind");
		$("#spinner-section").removeClass("blind");

		$.ajax({
			url: "/backoffice/update_room",
			type: "GET",
			dataType: 'json',
			data: {
				backoffice_no: $.cookie("backoffice_no"),
				room_no: $(this).attr("idx")
			},
			success: function (res) {
				//로딩 화면 닫기
				$(".popup-background:eq(1)").addClass("blind");
				$("#spinner-section").addClass("blind");

				$('.popup-background:eq(0)').removeClass('blind');
				$('#room-edit-section').removeClass('blind');
				$("#btn-edit").attr("idx", res.rmvo.room_no);

				$('#m-edit_room_type').val(res.rmvo.room_type);
				$("#m-input-room-name").val(res.rmvo.room_name);
				$("#m-input-price-name").val(res.rmvo.room_price);

				var typeName = "";
				if (res.rmvo.room_type == 'desk') typeName = "데스크";
				else if (res.rmvo.room_type == 'meeting_04') typeName = "미팅룸(4인)";
				else if (res.rmvo.room_type == 'meeting_06') typeName = "미팅룸(6인)";
				else if (res.rmvo.room_type == 'meeting_10') typeName = "미팅룸(10인)";
				else if (res.rmvo.room_type == 'office') typeName = "오피스";

				if (typeName == "오피스") {
					$(".room-input-wrap:eq(5)").removeClass("blind");
				} else {
					$("#m-input-price-name").val("");
					$(".room-input-wrap:eq(5)").addClass("blind");
				}

				$("#m-edit-room-type-label").val(res.rmvo.room_type);
				$("#m-edit-room-type-label").text(typeName);

				for (var i = 0; i < res.room_type.length; i++) {
					var sample = $(".edit-type-select-item:eq(0)").clone();
					sample.removeClass("blind");
					sample.attr("type", res.room_type[i]);

					if (res.room_type[i] == 'desk') sample.text("데스크");
					else if (res.room_type[i] == 'meeting_04') sample.text("미팅룸(4인)");
					else if (res.room_type[i] == 'meeting_06') sample.text("미팅룸(6인)");
					else if (res.room_type[i] == 'meeting_10') sample.text("미팅룸(10인)");
					else if (res.room_type[i] == 'office') sample.text("오피스");

					$(".edit-type-select-list").append(sample);
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
	});

	// 수정 팝업 닫기 버튼 -> 수정 팝업 닫음
	$('#btn-edit-cancel').click(function () {
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

		var sample = $(".edit-type-select-item:eq(0)").clone();
		$(".edit-type-select-list").empty().append(sample);

		$(".r-input-warning:eq(1)").addClass("blind");

		$('.edit-type-select-list').addClass('blind');
		$('#room-edit-section').addClass('blind');
		$('.popup-background:eq(0)').addClass('blind');
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

	// 수정 팝업 - 공간 타입 선택 버튼 클릭
	$('#m-edit-room-type-label').on('click', function () {
		$("#m-room-type-select").removeClass("null-input-border");
		$('.edit-type-select-list').toggleClass('blind');
	});

	// 수정 팝업 - 공간 타입 선택 후 처리
	$('.edit-type-select-list').on('click', '.edit-type-select-item', function () {
		let type = $(this).text();

		if (type == '데스크') $('#m-edit_room_type').val("desk");
		else if (type == '미팅룸(4인)') $('#m-edit_room_type').val("meeting_04");
		else if (type == '미팅룸(6인)') $('#m-edit_room_type').val("meeting_06");
		else if (type == '미팅룸(10인)') $('#m-edit_room_type').val("meeting_10");
		else if (type == '오피스') $('#m-edit_room_type').val("office");

		if (type == "오피스") {
			$(".room-input-wrap:eq(5)").removeClass("blind");
		} else {
			$("#m-input-price-name").val("");
			$(".room-input-wrap:eq(5)").addClass("blind");
		}

		$('#m-edit-room-type-label').text(type);
		$('#m-edit-room-type-label').css('color', '#000000');
		$('.edit-type-select-list').addClass('blind');
	});

	var update_room_flag = true;
	// 변경 버튼 클릭 -> 변경 로직
	$('#btn-edit').click(function () {
		// 입력값 not null인지 확인
		if ($("#m-input-room-name").val().trim().length > 0 && $('#m-edit_room_type').val().length > 0) {
			if ($('#m-edit_room_type').val() == "office") {
				if ($("#m-input-price-name").val().trim().length > 0 && $("#m-input-price-name").val().trim() != '0') {
					if (update_room_flag) {
						update();
					}
				} else {
					$("#m-input-price-name").addClass("null-input-border");
				}
			} else {
				if (update_room_flag) {
					update();
				}
			}
		} else {
			if ($("#m-input-room-name").val().trim().length == 0) {
				$("#m-input-room-name").addClass("null-input-border");
			}
			if ($("#m-input-price-name").val().trim().length == 0) {
				$("#m-input-price-name").addClass("null-input-border");
			}
			if ($('#m-edit_room_type').val().length == 0) {
				$("#m-room-type-select").addClass("null-input-border");
			}
		}
	});


	/** ************* **/
	/** 문의 관련 팝업 **/
	/** ************* **/
	// 문의 클릭 시 자세히 보기
	$(".ct-body-row.qna").on('click', function (event) {
		$(this).next(".detail-qna-wrap").toggleClass("blind");
		event.defaultPrevented;
	});

	// 문의 답글 삭제 요청
	$('.ct-body-btn.qna-delete').on('click', function () {
		$(".popup-background:eq(0)").removeClass("blind");
		$("#answer-delete-popup").removeClass("blind");

		$("#delete-answer-btn").attr("comment_no", $(this).attr("answer_no"));
		$("#delete-answer-btn").attr("mother_no", $(this).attr("comment_no"));
	});

	var delete_comment_flag = true;
	// 답글 삭제 여부 컴펌창 - "삭제" 버튼 클릭
	$("#delete-answer-btn").click(function () {
		if (delete_comment_flag) {
			delete_comment_flag = false;

			//로딩 화면
			$(".popup-background:eq(1)").removeClass("blind");
			$("#spinner-section").removeClass("blind");

			$.ajax({
				url: "/backoffice/deleteOK_comment",
				type: "POST",
				dataType: 'json',
				data: {
					backoffice_no: $.cookie("backoffice_no"),
					mother_no: $(this).attr("mother_no"),
					comment_no: $(this).attr("comment_no")
				},
				success: function (res) {
					delete_comment_flag = true;

					//로딩 화면 닫기
					$(".popup-background:eq(1)").addClass("blind");
					$("#spinner-section").addClass("blind");

					if (res.result == 1) {
						$(".popup-background:eq(1)").removeClass("blind");
						$("#common-alert-popup").removeClass("blind");
						$(".common-alert-txt").text("답변을 삭제하였습니다.");
						$("#common-alert-btn").attr("is_reload", true);
					} else {
						$(".popup-background:eq(1)").removeClass("blind");
						$("#common-alert-popup").removeClass("blind");
						$(".common-alert-txt").text("답변을 삭제 처리에 실패하였습니다.");
					}
				},
				error: function () {
					delete_comment_flag = true;

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

	// 답글 삭제 여부 컴펌창 - 닫기 버튼
	$("#delete-answer-closeBtn").click(function () {
		$(".popup-background:eq(0)").addClass("blind");
		$("#answer-delete-popup").addClass("blind");
		$("#delete-answer-btn").attr("comment_no", "");
		$("#delete-answer-btn").attr("mother_no", "");
	});

	// 문의 답글 작성
	$('.ct-body-btn.qna-add').on('click', function () {
		//로딩 화면
		$(".popup-background:eq(1)").removeClass("blind");
		$("#spinner-section").removeClass("blind");

		$.ajax({
			url: "/backoffice/insert_comment",
			type: "GET",
			dataType: 'json',
			data: {
				backoffice_no: $.cookie("backoffice_no"),
				room_no: $(this).attr("room_no"),
				comment_no: $(this).attr("comment_no")
			},
			success: function (res) {
				//로딩 화면 닫기
				$(".popup-background:eq(1)").addClass("blind");
				$("#spinner-section").addClass("blind");

				$("#q_room_name").text(res.cvo.room_name);
				$("#user_comment").text(res.cvo.comment_content);
				$("#h_comment_insert").attr("comment_no", res.cvo.comment_no);
				$("#h_comment_insert").attr("room_no", res.cvo.room_no);

				$('#comment-section').removeClass('blind');
				$('.popup-background:eq(0)').removeClass('blind');
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
	});

	// 문의 답글 작성 팝업 - 창닫기버튼
	$('.btn-comment-cancel').on('click', function () {
		$("#host-comment").val("");
		$(".now_txt_length").text("0");

		$('#comment-section').addClass('blind');
		$('.popup-background:eq(0)').addClass('blind');
	});

	var insert_comment_flag = true;
	// 문의 답글 작성 팝업 - 답글 추가 버튼
	$("#h_comment_insert").click(function () {
		if ($("#host-comment").val().trim().length > 0) {
			if (insert_comment_flag) {
				insert_comment_flag = false;

				//로딩 화면
				$(".popup-background:eq(1)").removeClass("blind");
				$("#spinner-section").removeClass("blind");

				$.ajax({
					url: "/backoffice/insertOK_comment",
					type: "POST",
					dataType: 'json',
					data: {
						backoffice_no: $.cookie("backoffice_no"),
						comment_no: $(this).attr("comment_no"),
						room_no: $(this).attr("room_no"),
						comment_content: $("#host-comment").val().trim()
					},
					success: function (res) {
						insert_comment_flag = true;

						//로딩 화면 닫기
						$(".popup-background:eq(1)").addClass("blind");
						$("#spinner-section").addClass("blind");

						if (res.result == 1) {
							$("#host-comment").val("");
							$(".now_txt_length").text("0");

							$('#comment-section').addClass('blind');
							$('.popup-background:eq(0)').addClass('blind');

							$(".popup-background:eq(1)").removeClass("blind");
							$("#common-alert-popup").removeClass("blind");
							$(".common-alert-txt").text("답글이 등록되었습니다.");
							$("#common-alert-btn").attr("is_reload", true);
						} else {
							$(".popup-background:eq(1)").removeClass("blind");
							$("#common-alert-popup").removeClass("blind");
							$(".common-alert-txt").text("답글 등록에 실패하였습니다.");
						}
					},
					error: function () {
						insert_comment_flag = true;

						//로딩 화면 닫기
						$(".popup-background:eq(1)").addClass("blind");
						$("#spinner-section").addClass("blind");

						$(".popup-background:eq(1)").removeClass("blind");
						$("#common-alert-popup").removeClass("blind");
						$(".common-alert-txt").text("오류 발생으로 인해 처리에 실패하였습니다.");
					}
				});
			}
		} else {
			$("#host-comment").addClass("null-input-border");
		}
	});

	// 답글 작성 시 글자수 제한
	$("#host-comment").on("keyup keydown", function () {
		$(".now_txt_length").text($(this).val().trim().length);

		if ($(this).val().trim().length > 500) {
			$(this).val($(this).val().trim().substring(0, 500));
		}
	});


	/** ******* **/
	/** 정산 관련 **/
	/** ******* **/
	$(".is_sales_btn").click(function () {
		if ($(this).attr("end") == "false") {
			$('.popup-background:eq(0)').removeClass('blind');
			$("#calculate-popup").removeClass("blind");
			$("#calculate-btn").attr("room_no", $(this).attr("room_no"));
			$("#calculate-btn").attr("payment_no", $(this).attr("payment_no"));
		}
	});

	var sales_flag = true;
	$("#calculate-btn").click(function () {
		if (sales_flag) {
			sales_flag = false;

			//로딩 화면
			$(".popup-background:eq(1)").removeClass("blind");
			$("#spinner-section").removeClass("blind");

			$.ajax({
				url: "/backoffice/updateOK_sales",
				type: "POST",
				dataType: 'json',
				data: {
					backoffice_no: $.cookie("backoffice_no"),
					payment_no: $(this).attr("payment_no"),
					room_no: $(this).attr("room_no")
				},
				success: function (res) {
					sales_flag = true;

					//로딩 화면 닫기
					$(".popup-background:eq(1)").addClass("blind");
					$("#spinner-section").addClass("blind");

					if (res.result == 1) {
						$(".popup-background:eq(1)").removeClass("blind");
						$("#common-alert-popup").removeClass("blind");
						$(".common-alert-txt").text("정산처리되었습니다.");
						$("#common-alert-btn").attr("is_reload", true);
					} else {
						$(".popup-background:eq(1)").removeClass("blind");
						$("#common-alert-popup").removeClass("blind");
						$(".common-alert-txt").text("정산처리에 실패하였습니다.");
					}
				},
				error: function () {
					sales_flag = true;

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

	$("#calculate-closeBtn").click(function () {
		$('.popup-background:eq(0)').addClass('blind');
		$("#calculate-popup").addClass("blind");
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