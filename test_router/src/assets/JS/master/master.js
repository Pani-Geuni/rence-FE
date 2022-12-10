/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable no-restricted-globals */

/**
* @author : 전판근
*/
import $ from 'jquery';

$(() => {
	// master header nav 변경
	switch ($(location).attr('pathname')) {
		case '/master/main':
		case '/master/backoffice_apply_detail':
			$('#nav-item-agree').addClass('active');
			break;

		case '/master/backoffice_end':
		case '/master/backoffice_end_detail':
			$('#nav-item-delete').addClass('active');
			break;

		default:
			break;
	}

	// location.href 작업
	$('.logo-mku').on('click', () => {
		location.href = '/master/main';
	});

	$('#nav-item-agree').on('click', () => {
		location.href = '/master/main';
	});

	$('#nav-item-delete').on('click', () => {
		location.href = '/master/backoffice_end';
	});

	// 로그인 실패 팝업 닫기
	$('#common-alert-btn').on('click', () => {
		$('#common-alert-popup').addClass('blind');
		$('.popup-background').addClass('blind');
	});

	// master login
	$('#btn-master-login').on('click', () => {
		/** 로그인 시도 * */
		// 로그인 성공
		if ($('#master-id').val().trim().length > 0 && $('#master-pw').val().trim().length > 0) {
			$.ajax({
				url: '/master/loginOK',
				type: 'POST',
				dataType: 'json',
				data: {
					username: $('#master-id').val().trim(),
					password: $('#master-pw').val().trim(),
				},

				success(res) {
					// 로그인 성공 시
					if (res.result === 1) {
						// INPUT 초기화
						$('#master-id').val('');
						$('#master-pw').val('');

						location.href = '/master/main';
					} else {
						$('.popup-background').removeClass('blind');
						$('#common-alert-popup').removeClass('blind');
						$('.common-alert-txt').text('로그인에 실패하였습니다.');
					}
				},
				error() {
					$('.popup-background:eq(1)').removeClass('blind');
					$('#common-alert-popup').removeClass('blind');
					$('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
				},
			});
		} else {
			// 로그인 실패
			if ($('#master-id').val().trim().length === 0) {
				$('#master-id').addClass('null-input-border');
			}

			if ($('#master-pw').val().trim().length === 0) {
				$('#master-pw').addClass('null-input-border');
			}
		}
	});

	// Master 로그아웃
	$('#btn-logout').on('click', () => {
		location.href = '/master/logoutOK';
	});

	// 신청 리스트 상세 보기
	$('.ct-body-cell.apply:not(:last-child)').on('click', () => {
		const backoffice_no = $('.ct-body-row').attr('idx');

		location.href = `/master/backoffice_apply_detail?backoffice_no=${backoffice_no}&page=apply`;
	});

	// 거절 리스트 상세 보기
	$('.ct-body-cell.delete:not(:last-child)').on('click', () => {
		const backoffice_no = $('.ct-body-row').attr('idx');

		location.href = `/master/backoffice_end_detail?backoffice_no=${backoffice_no}&page=delete`;
	});

	/** *** *********** **** */
	/** *** 슬라이드 이미지 **** */
	/** *** *********** **** */
	let test = 1;
	$('.prev').addClass('hide');

	if ($('.img').length === 1) {
		$('.next').addClass('hide');
	} else {
		let position = 0;
		$('.next').on('click', () => {
			if (test < $('.img').length) {
				position += 960;
				$('.container').css('transform', `translateX(-${position}px)`);
				test += 1;

				if (test === $('.img').length) {
					$('.next').addClass('hide');
				}
				if (test === 2) {
					$('.prev').removeClass('hide');
				}
			}
		});

		$('.prev').on('click', () => {
			if (test !== 1) {
				position -= 960;
				$('.container').css('transform', `translateX(-${position}px)`);
				test -= 1;

				if (test === $('.img').length - 1) {
					$('.next').removeClass('hide');
				}
				if (test === 1) {
					$('.prev').addClass('hide');
				}
			}
		});
	}

	// 신청 호스트 수락 버튼 클릭
	$('#btn-grant-host').on('click', () => {
		$('.popup-background:eq(0)').removeClass('blind');
		$('#grant-popup').removeClass('blind');
	});

	$('#grant-closeBtn').on('click', () => {
		$('#grant-popup').addClass('blind');
		$('.popup-background:eq(0)').addClass('blind');
	});

	$('#grant-btn').on('click', () => {
		$.ajax({
			url: '/master/grant',
			type: 'POST',
			dataType: 'json',
			data: {
				backoffice_no: $('#backoffice_no').text(),
				backoffice_email: $('#backoffice_email').text(),
			},
			success(res) {
				if (res.result === '1') {
					location.href = '/master/main';
				}
			},
			error() {
			},
		});
	});

	// 신청 호스트 거절 버튼 클릭
	$('#btn-refuse-host').on('click', () => {
		$('.popup-background:eq(0)').removeClass('blind');
		$('#refuse-popup').removeClass('blind');
	});

	$('#refuse-closeBtn').on('click', () => {
		$('#refuse-popup').addClass('blind');
		$('.popup-background:eq(0)').addClass('blind');
	});

	$('#refuse-btn').on('click', () => {
		$.ajax({
			url: '/master/refuse',
			type: 'POST',
			dataType: 'json',
			data: {
				backoffice_no: $('#backoffice_no').text(),
				backoffice_email: $('#backoffice_email').text(),
			},
			success(res) {
				if (res.result === '1') {
					location.href = '/master/main';
				}
			},
			error() {
			},
		});
	});

	// 삭제 신청 호스트 버튼 클릭
	$('#btn-delete-host').on('click', () => {
		$('.popup-background:eq(0)').removeClass('blind');
		$('#delete-popup').removeClass('blind');
	});

	$('#delete-closeBtn').on('click', () => {
		$('#delete-popup').addClass('blind');
		$('.popup-background:eq(0)').addClass('blind');
	});

	$('#delete-btn').on('click', () => {
		$.ajax({
			url: '/master/revoke',
			type: 'POST',
			dataType: 'json',
			data: {
				backoffice_no: $('#backoffice_no').text(),
				backoffice_email: $('#backoffice_email').text(),
			},
			success(res) {
				if (res.result === '1') {
					location.href = '/master/backoffice_end';
				}
			},
			error() {
			},
		});
	});
});
