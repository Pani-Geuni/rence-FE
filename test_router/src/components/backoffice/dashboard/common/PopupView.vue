<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <!-- **************** -->
  <!-- popup background -->
  <!-- **************** -->
  <div class="popup-background blind">

    <!-- START LOGOUT CONFIRM POPUP -->
    <div id="logout-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="logout-txt">
          로그아웃 하시겠습니까?<br><br>
          로그아웃 시 메인페이지로 이동됩니다.
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="logout-btn" class="confirm-yesBtn">로그아웃</div>
        <div id="logout-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END logout popup -->

    <!-- 공간 추가 팝업 Section -->
    <div id="room-insert-section" class="blind">
      <section class="room-popup-title-section">
        <span>공간 추가</span>
      </section>
      <section class="room-popup-input-section">
        <div class="room-input-wrap">
          <p>공간 이름</p>
          <input type="text" name="room_name" id="input-room-name" class="room-input" placeholder="공간 이름을 입력해 주세요" />
        </div>
        <div class="room-input-wrap">
          <p>공간 타입</p>
          <input type="hidden" name="room_type" id="edit_room_type" class="room_type" value="" />
          <div class="room-type-select" id="room-type-select">
            <button name="room_type" id="insert-room-type-label" class="room-type-label">타입을 선택해
              주세요</button>
            <ul class="insert-type-select-list blind">
              <li class="insert-type-select-item blind"></li>
            </ul>
          </div>
          <!-- END room-type-select -->
        </div>
        <!-- END room-type-wrap -->
        <div class="room-input-wrap">
          <p>가격을 입력해 주세요.</p>
          <div>
            <input type="number" name="room_price" id="input-price-name" class="room-input"
              placeholder="가격을 입력해 주세요.(숫자만 입력 가능)" value="" />
            <span class="r-input-warning blind">숫자만 입력가능합니다.</span>
          </div>
        </div>
      </section>
      <!-- room-popup-input-section -->
      <div class="select-btn-group">
        <button id="btn-insert-cancel" class="select-btn">닫기</button>
        <button id="btn-insert" class="select-btn">추가</button>
      </div>
      <!-- END select-btn-group -->
    </div>
    <!-- END room-insert-section -->

    <!-- 공간 수정 팝업 Section -->
    <div id="room-edit-section" class="blind">
      <section class="room-popup-title-section">
        <span>공간 변경</span>
      </section>
      <section class="room-popup-input-section">
        <div class="room-input-wrap">
          <p>공간 이름</p>
          <input type="text" name="room_name" id="m-input-room-name" class="room-input" placeholder="공간 이름을 입력해 주세요" />
        </div>
        <div class="room-input-wrap">
          <p>공간 타입</p>
          <input type="hidden" name="room_type" id="m-edit_room_type" class="room_type" value="" />
          <div class="room-type-select" id="m-room-type-select">
            <button name="room_type" id="m-edit-room-type-label" class="room-type-label">타입을 선택해
              주세요</button>
            <ul class="edit-type-select-list blind">
              <li class="edit-type-select-item blind">데스크</li>
            </ul>
          </div>
          <!-- END room-type-select -->
        </div>
        <!-- END room-type-wrap -->
        <div class="room-input-wrap">
          <p>가격을 입력해 주세요.</p>
          <div>
            <input type="number" name="room_price" id="m-input-price-name" class="room-input"
              placeholder="가격을 입력해 주세요.(숫자만 입력 가능)" value="" />
            <span class="r-input-warning blind">숫자만 입력가능합니다.</span>
          </div>
        </div>
      </section>
      <!-- room-popup-input-section -->
      <div class="select-btn-group">
        <button id="btn-edit-cancel" class="select-btn">닫기</button>
        <button id="btn-edit" class="select-btn">변경</button>
      </div>
      <!-- END select-btn-group -->
    </div>
    <!-- END room-edit-section -->

    <!-- START DELETE CONFIRM POPUP -->
    <div id="space-delete-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="delete-txt">
          해당 공간을 정말 삭제하시겠습니까? <br />
          삭제하시면 다시 복구 할 수 없습니다
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="delete-space-btn" class="confirm-yesBtn">삭제</div>
        <div id="delete-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END DELETE FONFIRM POPUP -->

    <!-- START DELETE CONFIRM POPUP -->
    <div id="answer-delete-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="delete-txt">
          답글을 삭제하시겠습니까?
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="delete-answer-btn" class="confirm-yesBtn">삭제</div>
        <div id="delete-answer-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END DELETE FONFIRM POPUP -->

    <!-- START SUCCESS CUSTOM ALERT POPUP -->
    <div id="insert-success-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span>공간이 성공적으로 추가 되었습니다.</span>
      </section>
      <section id="insert-success-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>

    <!-- START SUCCESS CUSTOM ALERT POPUP -->
    <div id="edit-success-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span>공간이 성공적으로 변경 되었습니다.</span>
      </section>
      <section id="edit-success-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>

    <!-- START SUCCESS CUSTOM ALERT POPUP -->
    <div id="delete-success-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span>공간이 성공적으로 삭제 되었습니다.</span>
      </section>
      <section id="delete-success-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>

    <!-- START comment popup -->
    <div id="comment-section" class="blind">
      <section class="comment-popup-title-section">
        <span>답변 달기</span>
      </section>
      <section class="user-comment-section">
        <div class="user-comment-title">
          <h5>문의 공간</h5>
          <p id="q_room_name">101호 개인 스터디룸</p>
        </div>
        <div class="user-comment-content">
          <h5>문의 내용</h5>
          <pre id="user_comment">
        문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용
        문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 문의내용 </pre>
        </div>
      </section>
      <section class="host-comment-section">
        <h5>답변</h5>
        <textarea name="host-comment" id="host-comment" placeholder="문의 답변을 입력해 주세요."></textarea>
      </section>

      <div class="button-group">
        <button class="btn-comment-cancel">취소</button>
        <button id="h_comment_insert" class="btn-comment-confirm">등록</button>
      </div>
    </div>
    <!-- END popup-background blind -->

    <div id="popup-update-pw" class="blind">
      <div class="titleSection">
        <h3>현재 비밀번호를 입력해 주세요</h3>
      </div>

      <div>
        <input class="input-check-pw" type="password" placeholder="현재 비밀번호를 입력해 주세요." />
      </div>

      <div class="btn-popup-group">
        <button id="btn-popup-confirm">확인</button>
        <button id="btn-popup-close">닫기</button>
      </div>
    </div>
    <!-- END popup-update-pw -->

    <!-- START DELETE CONFIRM POPUP -->
    <div id="host-delete-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="delete-txt">
          탈퇴신청하시겠습니까?
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="delete-host-btn" class="confirm-yesBtn">삭제</div>
        <div id="host-delete-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END DELETE FONFIRM POPUP -->

    <!-- START DELETE CONFIRM POPUP -->
    <div id="reserve-delete-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="delete-txt">
          해당 예약을 취소하시겠습니까?<br>
          취소 후 변경은 불가능합니다.
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="reserve-delete-btn" class="confirm-yesBtn">취소</div>
        <div id="reserve-delete-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END DELETE FONFIRM POPUP -->

    <!-- START CONFIRM POPUP -->
    <div id="calculate-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="delete-txt">
          정산처리 하시겠습니까?
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="calculate-btn" class="confirm-yesBtn">예</div>
        <div id="calculate-closeBtn" class="confirm-noBtn">아니오</div>
      </section>
    </div>
    <!-- END DELETE FONFIRM POPUP -->

    <!-- START RADIO CHECK CONFIRM POPUP -->
    <div id="radio-check-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="logout-txt">
          휴무 혹은 브레이크 타임을 설정해 주세요.
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="radio-check-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END RADIO CHECK CONFIRM popup -->

    <!-- START time-input-popup CONFIRM POPUP -->
    <div id="time-input-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="logout-txt">
          종료 시간이 시작 시간보다 빠를 수 없습니다.
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="time-input-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END time-input-popup CONFIRM popup -->

    <!-- START no-reservation-popup CONFIRM POPUP -->
    <div id="no-reservation-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="logout-txt">
          해당 기간 및 공간에<br>예약이 존재하지 않습니다.
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="no-reservation-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END no-reservation-popup CONFIRM popup -->

    <!-- START dayoff-calendar-wrap -->
    <div class="dayoff-calendar-wrap blind">
      <section class="dayoff-calendar-title">
        <h1 id="month"></h1>
        <span class="calendar-close-btn">
          <img src="/static/IMG/dash-board/ico-close.svg" alt="닫기 버튼" />
        </span>
      </section>
      <!-- END dayoff-calendar-title -->
      <section class="dayoff-calendar-content">
        <div>
          <p class="dayoff-calendar-content-title">이번 달의 임시 휴무를 보여드려요.</p>
        </div>
        <ul class="dayoff-list">
          <li class="dayoff-list-item blind">
            <div class="dayoff-list-item-top">
              <p class="dayoff-list-item-title"></p>
              <p class="dayoff-list-item-date"></p>
              <p class="dayoff-list-item-time"></p>
            </div>
            <div class="dayoff-list-item-bottom">
              <span class="badge"></span>
              <button class="dayoff-cancel-btn">일정 취소</button>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <!-- END dayoff-calendar-wrap -->


  </div>
  <!-- END popup-background blind -->

  <div class="popup-background blind">
    <!-- START SPINNER SECTION -->
    <div id="spinner-section" class="blind">
      <img src="/static/IMG/common/spinner.gif" class="spinner-img">
    </div>
    <!-- END SPINNER SECTION -->

    <!-- START COMMON CUSTOM ALERT POPUP -->
    <div id="common-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span class="common-alert-txt"></span>
      </section>
      <section id="common-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>

    <!-- START DAYOFF CANCEL POPUP -->
    <div id="dayoff-cancel-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="delete-txt">
          임시 휴무를 정말 취소하시겠습니까?
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="dayoff-cancel-confirm-btn" class="confirm-yesBtn">예</div>
        <div id="dayoff-cancel-confirm-closeBtn" class="confirm-noBtn">아니오</div>
      </section>
    </div>
    <!-- END DAYOFF CANCEL POPUP -->

    <!-- START DAYOFF CANCEL CONFIRM POPUP -->
    <div id="dayoff-cancel-confirmOK-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="delete-txt">
          임시 휴무가 취소되었습니다.
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="dayoff-cancel-confirmOK-btn" class="confirm-yesBtn">확인</div>
      </section>
    </div>
    <!-- END DAYOFF CANCEL POPUP -->

    <!-- START DAYOFF CANCEL FAIL POPUP -->
    <div id="dayoff-cancel-fail-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="delete-txt">
          임시 휴무가 취소를 실패하였습니다.
        </span>
      </section>
      <section class="confirm-btn-section">
        <div id="dayoff-cancel-fail-btn" class="confirm-yesBtn">확인</div>
      </section>
    </div>
    <!-- END DAYOFF CANCEL FAIL POPUP -->
  </div>
</template>

<style>

</style>

<script>
import '@/assets/JS/backoffice/host_popup';

export default {
  name: 'PopupView',
};
</script>
