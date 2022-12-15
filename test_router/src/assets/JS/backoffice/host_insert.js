/* eslint-disable linebreak-style */
/* eslint-disable no-useless-concat */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable camelcase */
/**
 * @author : 전판근, 김예은
 */

// ******************
// 호스트 신청에 필요한 JS
// ******************

import $ from 'jquery';

$(() => {
	const tag = {};
	let counter = 0;

	let margin_tag_list = [];

	// server로 보낼 값.
	let backoffice_tag = '';

	// 입력한 값을 태그로 생성
	function addTag(value) {
		tag[counter] = value;
		counter++;	// del-btn의 고유 id
	}

	// tag 안에 있는 값을 array type으로 만들어서 넘긴다.
	function marginTag() {
		margin_tag_list = [];

		return Object.values(tag).filter((word) => word !== '');
	}

	function toStringTag(list) {
		backoffice_tag = '';

		for (let i = 0; i < list.length; i++) {
			if (i !== (list.length - 1)) {
				backoffice_tag += (`${list[i]},`);
			} else {
				backoffice_tag += list[i];
			}
		}

		$('#real-input-tag').val(backoffice_tag);
	}

	$('#backoffice_tag').on('keypress', (e) => {
		const self = $(this);

		// 엔터나 스페이스바 눌렀을 때 생성
		if (e.key === 'Enter' || e.keyCode === 32) {
			const tagValue = self.val();	// 값 가져오기

			// 해시태그 값이 없으면 실행되지 않음.
			if (tagValue !== '') {
				// 같은 태그가 있는지 검사. 있으면 해당 값이 array로 return
				const result = Object.values(tag).filter((word) => word === tagValue);

				// 해시태그 중복 확인
				if (result.length === 0 && margin_tag_list.length < 5) {
					$('#tag-list').append(`<li class='tag-item'>${tagValue}<span class='del-btn' idx='${counter}'>x</span></li>`);
					addTag(tagValue);
					margin_tag_list = marginTag();
					toStringTag(margin_tag_list);
					self.val('');
				} else if (margin_tag_list.length >= 5) {
					$('.popup-background:eq(1)').removeClass('blind');
					$('#common-alert-popup').removeClass('blind');
					$('.common-alert-txt').text('해시태그는 최대 5개 입니다.');
					self.val('');
				} else {
					$('.popup-background:eq(1)').removeClass('blind');
					$('#common-alert-popup').removeClass('blind');
					$('.common-alert-txt').text('중복된 해시태그 입니다.');
					self.val('');
				}
			}
			e.preventDefault();	// SpaceBar 시 빈공간 생기지 않도록 방지
		}
	});

	// 삭제 버튼
	// 인덱스 검사 후 삭제
	$(document).on('click', '.del-btn', () => {
		const index = $(this).attr('idx');
		tag[index] = '';
		margin_tag_list = marginTag();
		toStringTag(margin_tag_list);
		$(this).parent().remove();
	});

	/** 공용 알러트 창닫기 버튼 */
	$('#common-alert-btn').click(() => {
		$('.popup-background:eq(1)').addClass('blind');
		$('#common-alert-popup').addClass('blind');
	});

	$('input, textarea').click(() => {
		if ($(this).hasClass('null-input-border')) {
			$(this).removeClass('null-input-border');
		}
	});

	// 빈 항목 팝업 닫기
	$('#empty-fail-alert-btn').click(() => {
		$('#fail-alert-popup').addClass('blind');
		$('.popup-background:eq(0)').addClass('blind');
	});

	/** 공간 타입 체크 박스 - 데스크/회의룸 둘 중 하나라도 체크 시 오피스는 체크할 수 없음 */
	$('#type_checkbox_desk, #type_checkbox_meeting_room').click(() => {
		$('#type_checkbox_office').attr('disabled', true);
		$('#type_checkbox_office').siblings('label').css('text-decoration', 'line-through');

		if (!$('#type_checkbox_desk').is(':checked') && !$('#type_checkbox_meeting_room').is(':checked')) {
			$('#type_checkbox_office').attr('disabled', false);
			$('#type_checkbox_office').siblings('label').css('text-decoration', 'none');
		}
	});

	/** 공간 타입 체크 박스 - 오피스 체크 시 데스크/회의룸은 체크할 수 없음 */
	$('#type_checkbox_office').click(() => {
		$('#type_checkbox_desk').attr('disabled', true);
		$('#type_checkbox_desk').siblings('label').css('text-decoration', 'line-through');
		$('#type_checkbox_meeting_room').attr('disabled', true);
		$('#type_checkbox_meeting_room').siblings('label').css('text-decoration', 'line-through');

		if (!$('#type_checkbox_office').is(':checked')) {
			$('#type_checkbox_desk').attr('disabled', false);
			$('#type_checkbox_desk').siblings('label').css('text-decoration', 'none');
			$('#type_checkbox_meeting_room').attr('disabled', false);
			$('#type_checkbox_meeting_room').siblings('label').css('text-decoration', 'none');
		}
	});

	$('#backoffice_info').on('keydown keyup', () => {
		$('.b_info_txt_length').text($(this).val().length);

		if ($(this).val().length > 500) {
			$(this).val($(this).val().substring(0, 500));
		}
	});

	// let mail_flag = true;
	/** 인증번호 발송 버튼 클릭 * */
	// $('#btn-certification').click(() => {

	// });

	/** 인증번호 확인 버튼 클릭 * */
	// $('#btn-check-certification').click(() => {
	// 	if (!$('#btn-check-certification').prop('check')) {
	// 		if ($('#auth_code').val().trim().length > 0) {
	// 			// 로딩 화면
	// 			$('.popup-background:eq(1)').removeClass('blind');
	// 			$('#spinner-section').removeClass('blind');

	// 			$.ajax({
	// 				url: '/backoffice/authOK',
	// 				type: 'POST',
	// 				dataType: 'json',
	// 				data: {
	// 					backoffice_email: $('#backoffice_email').val().trim(),
	// 					auth_code: $('#auth_code').val().trim(),
	// 				},
	// 				success(res) {
	// 					// 로딩 화면 닫기
	// 					$('.popup-background:eq(1)').addClass('blind');
	// 					$('#spinner-section').addClass('blind');

	// 					// 이메일 중복 성공
	// 					if (res.result === 1) {
	// 						$('#btn-check-certification').prop('check', true);
	// 						$('#btn-check-certification').val('인증완료');
	// 						$('#auth_code').attr('readonly', true);
	// 						$('#auth_code').addClass('readOnly');

	// 						this.timer('true');

	// 						$('.popup-background:eq(1)').removeClass('blind');
	// 						$('#common-alert-popup').removeClass('blind');
	// 						$('.common-alert-txt').text('인증완료 되었습니다.');
	// 					} else {
	// 						$('.popup-background:eq(1)').removeClass('blind');
	// 						$('#common-alert-popup').removeClass('blind');
	// 						$('.common-alert-txt').text('인증에 실패하였습니다.');
	// 					}
	// 				},
	// 				error() {
	// 					// 로딩 화면 닫기
	// 					$('.popup-background:eq(1)').addClass('blind');
	// 					$('#spinner-section').addClass('blind');

	// 					$('.popup-background:eq(1)').removeClass('blind');
	// 					$('#common-alert-popup').removeClass('blind');
	// 					$('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
	// 				},
	// 			});
	// 		} else {
	// 			$('#auth_code').addClass('null-input-border');
	// 		}
	// 	}
	// });

	let submit_flag = true;
	/** 호스트 신청 버튼 클릭 */
	$('#submit').click(() => {
		// 1. 필수 input / textarea 입력되었는지 확인
		if (
			$('#owner_name').val().trim().length > 0 && $('#backoffice_id').val().trim().length > 0
			&& $('#backoffice_name').val().trim().length > 0 && $('#company_name').val().trim().length > 0
			&& $('#backoffice_tel').val().trim().length > 0 && $('#backoffice_email').val().trim().length > 0
			&& $('#auth_code').val().trim().length > 0 && $('#zipcode').val().trim().length > 0
			&& $('#backoffice_info').val().trim().length > 0
		) {
			// 2. 정규표현식을 모두 만족하는지 확인
			if ($('.warning-text:eq(0)').hasClass('blind') && $('.warning-text:eq(1)').hasClass('blind')) {
				// 3. 이메일 인증 완료 되었는지 확인
				if ($('#btn-certification').prop('check') && $('#btn-check-certification').prop('check')) {
					// 4. 공간 타입을 선택했는지 확인
					const desk_checked = $('#type_checkbox_desk').is(':checked');
					const meeting_room_checked = $('#type_checkbox_meeting_room').is(':checked');
					const office_checked = $('#type_checkbox_office').is(':checked');

					if (desk_checked || meeting_room_checked || office_checked) {
						if (submit_flag) {
							submit_flag = false;
							$('#real-submit').click();
						}
					} else {
						$('.popup-background:eq(1)').removeClass('blind');
						$('#common-alert-popup').removeClass('blind');
						$('.common-alert-txt').text('공간 타입을 선택해주세요.');
					}
				} else {
					$('.popup-background:eq(1)').removeClass('blind');
					$('#common-alert-popup').removeClass('blind');
					$('.common-alert-txt').text('이메일 인증을 완료해주세요.');
				}
			}
		} else {
			if ($('#owner_name').val().trim().length === 0) {
				$('#owner_name').addClass('null-input-border');
			}
			if ($('#backoffice_id').val().trim().length === 0) {
				$('#backoffice_id').addClass('null-input-border');
			}
			if ($('#backoffice_name').val().trim().length === 0) {
				$('#backoffice_name').addClass('null-input-border');
			}
			if ($('#company_name').val().trim().length === 0) {
				$('#company_name').addClass('null-input-border');
			}
			if ($('#backoffice_tel').val().trim().length === 0) {
				$('#backoffice_tel').addClass('null-input-border');
			}
			if ($('#backoffice_email').val().trim().length === 0) {
				$('#backoffice_email').addClass('null-input-border');
			}
			if ($('#auth_code').val().trim().length === 0) {
				$('#auth_code').addClass('null-input-border');
			}
			if ($('#zipcode').val().trim().length === 0) {
				$('#zipcode').addClass('null-input-border');
				$('#roadname_address').addClass('null-input-border');
				$('#number_address').addClass('null-input-border');
			}
			if ($('#backoffice_info').val().trim().length === 0) {
				$('#backoffice_info').addClass('null-input-border');
			}
		}
	});
});
