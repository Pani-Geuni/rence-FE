/**
 * @author : 전판근, 김예은
 */
$(() => {

	// backoffice_main 일 때

	switch ($(location).attr('pathname')) {
		// 좌측 Side Menu 분기
		case '/backoffice/dash/main':
			$('#menu-home').addClass('active');
			break;

		case '/backoffice/dash/room':
			$('#menu-space').addClass('active');
			$('#mini-nav-list').addClass('active');
			break;

		case '/backoffice/dash/qna':
			$('#menu-space').addClass('active');
			$('#mini-nav-qna').addClass('active');
			break;

		case '/backoffice/dash/review':
			$('#menu-space').addClass('active');
			$('#mini-nav-review').addClass('active');
			break;

		case '/backoffice/dash/schedule':
		case '/backoffice/dash/reservation':
			$('#menu-schedule').addClass('active');
			break;

		case '/backoffice/dash/reserve':
		case '/rence/backoffice_search_reserve':
			$('#menu-reserve').addClass('active');
			$('#reserve-list').addClass('active');
			break;

		case '/backoffice/dash/day_sales':
			$('#menu-sales').addClass('active');
			break;

		case '/backoffice/dash/settings':
			$('#menu-settings').addClass('active');
			break;

		case '/backoffice/dash/update_host':
			$('#menu-settings').addClass('active');
			break;

		default:
			break;
	}


	// ****************
	// 정산 관리 mini-nav
	// ****************
	$('#sales-mini-nav-day').click(() => {
		location.href = `/backoffice/dash/day_sales?backoffice_no=${$.cookie('backoffice_no')}&sales_date=day&page=1`;
	});

	$('#sales-mini-nav-week').click(() => {
		location.href = `/backoffice/dash/day_sales?backoffice_no=${$.cookie('backoffice_no')}&sales_date=week&page=1`;
	});

	$('#sales-mini-nav-month').click(() => {
		location.href = `/backoffice/dash/day_sales?backoffice_no=${$.cookie('backoffice_no')}&sales_date=month&page=1`;
	});
});
