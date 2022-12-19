/**
 * @author 김예은
 */
$(function () {
	$("#common-alert-btn").click(function () {
		$(".popup-background:eq(1)").addClass("blind");
		$("#common-alert-popup").addClass("blind");

		if ($(this).attr("is_reload") == "true") {
			location.reload();
			$(this).attr("is_reload", false);
		}
	});

	$(".reserve_search_paging").on("click", ".paging-box.paging-num", function () {
		var backoffice_no = window.location.href.split("?backoffice_no=")[1].split("&")[0];
		var reserve_state = window.location.href.split("&reserve_state=")[1].split("&")[0];

		//로딩 화면
		$(".popup-background:eq(1)").removeClass("blind");
		$("#spinner-section").removeClass("blind");

		if (window.location.href.includes("/backoffice/reserve?")) {
			window.location.href = "/backoffice/reserve?backoffice_no=" + backoffice_no + "&reserve_state=" + reserve_state + "&page=" + $(this).attr("idx");
		} else {
			var searchword = window.location.href.split("&searchword=")[1].split("&")[0];
			window.location.href = "/backoffice/search_reserve?backoffice_no=" + backoffice_no + "&reserve_state=" + reserve_state + "&searchword=" + searchword + "&page=" + $(this).attr("idx");

		}
	});

	// 다음 페이지 리스트로 이동
	$(".reserve_search_paging").on("click", ".next-page-btn", function () {
		var start = Number($($(".paging-box.paging-num")[0]).text()) + 5;
		var last = Number($($(".paging-box.paging-num")[4]).text()) + 5;
		var totalPageCnt = Number($("#totalPageCnt").val());

		if ($(".before-page-btn").hasClass("hide")) {
			$(".before-page-btn").removeClass("hide");
		}

		if (last >= totalPageCnt) {
			last = totalPageCnt;
			$(".next-page-btn").addClass("hide");
		}

		var sample = $(".paging-num-wrap>.paging-box.paging-num:eq(0)").clone();
		$(".paging-num-wrap").empty();

		for (var i = start; i <= last; i++) {
			var sample_span = sample.clone();

			sample_span.text(i);
			sample_span.attr("idx", i);
			sample_span.removeClass("choice");
			sample_span.addClass("un-choice");

			$(".paging-num-wrap").append(sample_span);
		}
	});

	// 이전 페이지 리스트로 이동
	$(".reserve_search_paging").on("click", ".before-page-btn", function () {
		var start = Number($($(".reserve_search_paging").find(".paging-box.paging-num")[0]).text()) - 5;
		var last = Number($(".reserve_search_paging").find(".paging-box.paging-num:last").text()) - 5;

		if (last % 5 != 0) {
			last += 5 - (last % 5);
		}

		if ($(".reserve_search_paging").find(".next-page-btn").hasClass("hide")) {
			$(".reserve_search_paging").find(".next-page-btn").removeClass("hide");
		}

		if (start == 1) {
			$(".reserve_search_paging").find(".before-page-btn").addClass("hide");
		}

		var sample = $(".reserve_search_paging").find(".paging-num-wrap>.paging-box.paging-num:eq(0)").clone();
		$(".reserve_search_paging").find(".paging-num-wrap").empty();

		for (var i = start; i <= last; i++) {
			var sample_span = sample.clone();

			sample_span.text(i);
			sample_span.attr("idx", i);
			sample_span.removeClass("choice");
			sample_span.addClass("un-choice");

			$(".reserve_search_paging").find(".paging-num-wrap").append(sample_span);
		}
	});

});