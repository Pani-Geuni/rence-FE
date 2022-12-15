<!-- eslint-disable max-len -->
<template>
  <div class="titleSection">
    <h1>공간 관리</h1>
    <button id="btn-room-add" class="btn-room-add">추가</button>
    <ul class="mini-nav">
      <li>
        <p id="mini-nav-list" class="nav-item">리스트</p>
      </li>
      <li>
        <p id="mini-nav-qna" class="nav-item">문의</p>
      </li>
      <li>
        <p id="mini-nav-review" class="nav-item">후기</p>
      </li>
    </ul>
    <!-- END mini-nav -->
  </div>
  <!-- END titleSection -->

  <div class="boardWrap qna">
    <div class="custom-table qna qna-table-wrap">
      <div class="ct-header qna">
        <div class="ct-header-cell qna">처리 상태</div>
        <div class="ct-header-cell qna">문의 공간</div>
        <div class="ct-header-cell qna">문의 내용</div>
        <div class="ct-header-cell qna">작성일</div>
        <div class="ct-header-cell qna">답변</div>
      </div>
      <!-- END ct-header -->

      <div class="ct-body-row qna" v-for="vos in q_vos" :key="vos">
        <div class="ct-body-cell qna">
          <th:block th:switch="${vos.comment_state}">
            <p class="qna-process true" th:case="T">처리</p>
            <p class="qna-process false" th:case="F">미처리</p>
          </th:block>
        </div>
        <div class="ct-body-cell qna">
          <p>{{ vos.room_name }}</p>
        </div>
        <div class="ct-body-cell qna">
          <p>{{ vos.comment_content }}</p>
        </div>
        <div class="ct-body-cell qna">
          <p>{{ vos.comment_date }}</p>
        </div>
        <div class="ct-body-cell qna">
          <button v-if="vos.comment_state === 'T'" class="ct-body-btn qna-delete" :comment_no="vos.comment_no"
            :room_no="vos.room_no" :answer_no="vos.answer_no">답변
            삭제</button>

          <button v-if="vos.comment_state === 'F'" class="ct-body-btn qna-add" :comment_no="vos.comment_no"
            :room_no="vos.room_no" :answer_no="vos.answer_no">답변
            작성</button>
        </div>
      </div>
      <!-- END ct-body-row -->

      <!-- <div class="detail-qna-wrap blind" v-if="vos.answer_content !== null">
        <div class="question-section">
          <h5 class="question-title">Q.</h5>
          <p class="question-content">
            {{ vos.comment_content }}
          </p>
        </div> -->
      <!-- END question-section -->
      <!-- <div class="answer-section" v-if="vos.answer_content !== null">
          <div class="answer-title-section">
            <h5 class="answer-title">A.</h5>
            <p class="answer-date">작성일 | {{ vos.answer_date }}</p>
          </div>
          <p class="answer-content" v-if="vos.answer_content !== null">
            {{ vos.answer_content }}
          </p>
        </div>
      </div> -->
    </div>
  </div>
  <!-- END boardWrap qna -->


  <section class="paging-section" v-if="res.maxPage > 0">
    <div class="paging-wrap">
      <span th:if="${res.maxPage} <= 5" class="paging-box before-page-btn hide"> &lt;&lt; </span>
      <span th:unless="${res.maxPage} <= 5" class="paging-box before-page-btn"> &lt;&lt; </span>

      <!-- <th:block th:with="ceil=${#numbers.formatInteger(T(java.lang.Math).ceil((res.nowPage)/5.0),1)}">
          <th:block th:with="start=(5 * (${ceil} - 1) + 1)">
            <div class="paging-num-wrap paging-wrap">
              <th:block th:each="num : ${#numbers.sequence(start, res.maxPage)}">
                <span th:if="${num} == ${res.nowPage}" th:attr="idx=${num}"
                  class="paging-box paging-num choice">[[${num}]]</span>
                <span th:if="${num} != ${res.nowPage}" th:attr="idx=${num}"
                  class="paging-box paging-num un-choice">[[${num}]]</span>
              </th:block>
            </div>
          </th:block>
        </th:block> -->

      <span th:if="${res.totalPageCnt} > 5 and ${res.maxPage} < ${res.totalPageCnt}"
        class="paging-box next-page-btn">>></span>
      <span th:unless="${res.totalPageCnt} > 5 and ${res.maxPage} < ${res.totalPageCnt}"
        class="paging-box next-page-btn hide">>></span>
      <input type="hidden" id="totalPageCnt" th:value="${res.totalPageCnt}">
    </div>
  </section>
</template>

<style>
@import '@/assets/CSS/dash-board/dash-qna-list.scss';
</style>

<script>
export default {
  name: 'QnaView',

  data() {
    return {
      q_vos: [],
      res: [],
    };
  },
};
</script>
