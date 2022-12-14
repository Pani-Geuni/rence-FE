<!-- eslint-disable no-lonely-if -->
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable no-plusplus -->
<!-- eslint-disable array-callback-return -->
<!-- eslint-disable space-before-blocks -->
<!-- eslint-disable next-line default-case-->
<!-- eslint-disable -->

<!--
 - @author 김예은, 전판근
 - @refactoring 김예은
-->

<template>
  <section class="space-detail-introduce-section">
		<div class="space-detail-introduce-wrap">
			<section class="space-detail-title-section">
				<span class="space-detail-company-name">
					{{list.ovo.company_name}}
				</span>
        <span v-for="type_item in list.type_list" :key="type_item" class="space-detail-type">
          {{type_item}}
        </span>
			</section>
			<section class="space-detail-info-section">
				<div class="space-rating">
					<img src="@/assets/IMG/common/grey-star.svg" class="space-rating-icon" alt="space-rating-icon" />
					<span class="space-info-txt">{{list.ovo.avg_rating}}</span>
				</div>
				<div class="space-tags">
          <span v-for="tag_item in list.tag_list" :key="tag_item" class="space-info-txt tag-txt">
            {{tag_item}}
          </span>
				</div>
			</section>
			<div class="space-location">
				<img src="@/assets/IMG/common/location-icon.svg" class="space-location-icon" alt="space-location-icon" />
				<span class="space-info-txt">{{list.ovo.roadname_address}} {{list.ovo.detail_address}}</span>
			</div>
			<section class="spage-imgs-section">
				<div class="window">
					<ul class="container">
            <li v-for="img_item in list.img_list" :key="img_item" class="img">
              <img :src="img_item" class="company-img" />
            </li>
					</ul>

					<div class="button-container">
						<span class="prev button-size hide" @click="set_prev_image">&lt;</span>
						<span class="next button-size" @click="set_next_image">></span>
					</div>
				</div>
			</section>
			<section class="dynamic-section">
				<!-- START un-fixed-section -->
				<section class="un-fixed-section">
					<section class="menu-tab-section">
						<ul class="menu-tab">
							<li @click="choice_menu($event.target)" class="menu click-menu" menu="info">공간 소개</li>
							<li @click="choice_menu($event.target)" class="menu" menu="qna">문의</li>
							<li @click="choice_menu($event.target)" class="menu" menu="review">후기</li>
						</ul>
					</section>

					<!-- 공간 소개 -->
					<div class="space-description-wrap">
						<div class="space-description">
							{{list.ovo.backoffice_info}}
						</div>

						<div class="option-wrap">
							<label class="section-title"> 옵션 </label>
							<ul class="option-list-wrap">
                <li v-for="option_item in list.option_list" :key="option_item" class="option-list">
                  {{option_item}}
                </li>
							</ul>
						</div>

						<div class="around-info-wrap">
							<label class="section-title"> 주변 시설 </label>
							<ul class="option-list-wrap">
                <li v-for="around_item in list.around_option_list" :key="around_item" class="option-list">{{around_item}}</li>
							</ul>
						</div>
						
						<div class="map-wrap">
							<label class="section-title"> 상세 위치 지도 </label>						
              <input type="hidden" id="location_addr" :value="list.ovo.roadname_address" />
              <input type="hidden" id="location_name" :value="list.ovo.company_name" />
              <div id="map"></div>
						</div>
					</div>

					<!-- 문의 -->
					<div id="question-wrap" class="question-wrap blind">
						<section class="question-wrap-title">
							<section class="question-left">
								<span class="big-title">문의</span> <span class="small-title">{{list.cvos_cnt}}개</span>
							</section>
							<section id="question-create-btn" class="question-right">
								<span>문의하기</span>
							</section>

							<!-- 문의하기 팝업창 -->
							<div id="question-popup" class="question-popup-wrap blind">
								<span class="question-popup-title">문의하기</span>
								<span class="question-popup-secret">
									<span class="question-popup-small-title">비밀문의여부</span>
									<input type="checkbox" id="toggle" hidden>

									<label for="toggle" class="toggleSwitch">
										<span class="toggleButton"></span>
									</label>
								</span>

								<section class="question-popup-type-select-wrap">
									<span class="question-popup-small-title">문의할 공간 타입</span>

									<!-- select 열 때 open-select추가 -->
									<div class="question-popup-select-val-wrap" @click="toggle_q_select">
										<span id="question-select-choice" class="question-popup-select-value">
											타입을 선택해 주세요
										</span>
										<img src="@/assets/IMG/space-introduce/full-dropdown.svg" alt="full-dropdown" class="full-dropdown" />
									</div>

									<ul class="question-popup-select blind">
											<li @click="click_q_select_li($event.target)" v-for="vos in list.rvos" :key="vos" class="question-popup-select-li" :idx="vos.room_no">
												{{vos.room_name}}
											</li>
									</ul>
								</section>
								<section class="textarea-section">
									<textarea @click="remove_null_input_border" @keyup="limit_q_txt_length" @keydown="limit_q_txt_length" id="question-write" class="question-write"></textarea>
									<div class="txt-length-wrap">
										<span class="qna-length">0</span>
										<span class="total-length">/ 500</span>
									</div>
								</section>
								<section class="quest-popup-btn-section">
									<span id="question-createBtn" class="popup-create-btn">등록</span>
									<span id="question-close-btn" @click="close_create_q_popup" class="popup-close-btn">취소</span>
								</section>
							</div>
						</section>

						<section class="quest-list-section">
							<input type="hidden" id="is_login" :value="list.is_login" />
							<ul class="quest-list-wrap">
                <block v-for="cvo in list.cvos" :key="cvo">
									<li class="quest-list">
                    <section v-if="list.is_login !== null && cvo.is_secret === 'T' && list.is_login === cvo.user_id">
                      <img :src="cvo.user_image" alt="write-user-img" class="write-user-img" />
                    </section>

                    <section v-if="list.is_login !== null && cvo.is_secret === 'T' && list.is_login !== cvo.user_id">
                      <img src="https://rence.s3.ap-northeast-2.amazonaws.com/user/img_host_001.jpg" alt="write-user-img" class="write-user-img" />
                    </section>

                    <section v-if="list.is_login !== null && cvo.is_secret !== 'T'" >
                      <img :src="cvo.user_image" alt="write-user-img" class="write-user-img" />
                    </section>

                    <section v-if="list.is_login === null && cvo.is_secret === 'T'">
                      <img src="https://rence.s3.ap-northeast-2.amazonaws.com/user/img_host_001.jpg" alt="write-user-img" class="write-user-img" />
                    </section>

                    <section v-if="list.is_login === null && cvo.is_secret !== 'T'">
                      <img :src="cvo.user_image" alt="write-user-img" class="write-user-img" />
                    </section>

										<section class="quest-content-section">
											<ul class="quest-content-wrap">
												<li class="quest-content-list quest-content-writer">
                          <span v-if="list.is_login !== null && cvo.is_secret === 'T' && list.is_login === cvo.user_id">
                            {{cvo.user_name}}
                          </span>
                          <span v-if="list.is_login !== null && cvo.is_secret === 'T' && list.is_login !== cvo.user_id">
                            비밀댓글
                          </span>

                          <span v-if="list.is_login !== null && cvo.is_secret !== 'T'">
                            {{cvo.user_name}}
                          </span>

                          <span v-if="list.is_login === null && cvo.is_secret === 'T'">
                            비밀댓글
                          </span>
                          <span v-if="list.is_login === null && cvo.is_secret !== 'T'">
                            {{cvo.user_name}}
                          </span>

                          <span v-if="cvo.is_secret === 'T'" class="lock_img">
                            <img src="@/assets/IMG/space-introduce/lock.svg" alt="lock img">
                          </span>
												</li>

                        <li v-if="list.is_login !== null && cvo.is_secret === 'T' && list.is_login === cvo.user_id" class="quest-content-list quest-content">
                          {{cvo.comment_content}}
                        </li>
                        <li v-if="list.is_login !== null && cvo.is_secret === 'T' && list.is_login !== cvo.user_id" class="quest-content-list quest-content">
                          비밀 문의입니다.
                        </li>

                        <li v-if="list.is_login !== null && cvo.is_secret !== 'T'" class="quest-content-list quest-content">
                          {{cvo.comment_content}}
                        </li>

                        <li v-if="list.is_login === null && cvo.is_secret === 'T'" class="quest-content-list quest-content">
                          비밀 문의입니다.
                        </li>

                        <li v-if="list.is_login === null && cvo.is_secret !== 'T'" class="quest-content-list quest-content">
                          {{cvo.comment_content}}
                        </li>


												<li class="quest-content-list quest-content-date">
													{{cvo.comment_date}}
                          <span v-if="cvo.answer_date !== null" class="answer_toggle" @click="show_answer($event.target)">답변 보기</span>
												</li>
											</ul>
										</section>
									</li>
                  <li v-if="cvo.answer_date !== null" class="answer-list blind">
                    <div class="answer_arrow_img">
                      <img src="/static/IMG/space-introduce/answer_arrow.svg">
                    </div>
                    <div class="answer_text_wrap">
                      <section>
                        <img src="https://rence.s3.ap-northeast-2.amazonaws.com/user/img_host_001.jpg" alt="write-user-img" class="write-user-img" />
                      </section>
                      <section class="answer-content-section">
                        <ul class="answer-content-wrap">
                          <li class="answer-content-list answer-content-writer">HOST</li>
                          <li class="answer-content-list answer-content">{{list.cvo.answer_content}}</li>
                          <li class="answer-content-list answer-content-date">{{list.cvo.answer_date}}</li>
                        </ul>
                      </section>
                    </div>
                  </li>
                </block>
							</ul>
						</section>

            <!-- START PAGING -->
            <section :class="{'paging-section question-paging': maxPage > 0, 'paging-section question-paging blind': maxPage === 0}">
              <section class="paging-section">
                <div class="paging-wrap">
                  <span @click="prev_page" :class="{'paging-box before-page-btn hide': maxPage <= 5, 'paging-box before-page-btn' : maxPage > 5}"> &lt;&lt; </span>
                  
                  <div class="paging-num-wrap paging-wrap">
                    <span @click="do_select_page($event.target)" v-for="num in forRange" :key="num" :idx="num" :class="{'paging-box paging-num choice': num === nowPage, 'paging-box paging-num un-choice' :num !== nowPage}">
                      {{num}}
                    </span>
                  </div>
                  
                  <span @click="next_page" v-if="totalPageCnt > 5 && maxPage < totalPageCnt" class="paging-box next-page-btn">>></span>
                  <span v-else class="paging-box next-page-btn hide">>></span>
                  <input type="hidden" id="totalPageCnt" :value="totalPageCnt">
                </div>
              </section>
            </section>
            <!-- END PAGING -->
					</div>

					<!-- 후기 -->
					<div id="review-wrap" class="question-wrap blind">
						<section class="question-wrap-title">
							<section class="question-left">
								<span class="big-title">후기</span> <span class="small-title">{{list.review_cnt}}개</span>
							</section>
						</section>

						<section class="quest-list-section">
							<ul class="quest-list-wrap">
                <li v-for="revo in list.revos" :key="revo" class="quest-list">
                  <section>
                    <img :src="revo.user_image" class="write-user-img" />
                  </section>
                  <section class="quest-content-section">
                    <ul class="quest-content-wrap">
                      <li class="quest-content-list quest-content-writer">
                        <span class="quest-writer">{{revo.user_name}}</span>

                        <span class="review-star-wrap">
                          <img src="@/assets/IMG/common/star.svg" class="review-star-img" alt="review-star-img" />
                          <span class="review-star-num">{{revo.review_point}}</span>
                        </span>
                      </li>
                      <li class="quest-content-list quest-content">{{revo.review_content}}</li>
                      <li class="quest-content-list quest-content-date">{{revo.review_date}}</li>
                    </ul>
                  </section>
                </li>
							</ul>
						</section>

            <!-- START PAGING -->
            <section :class="{'paging-section': maxPage2 > 0, 'paging-section blind': maxPage2 === 0}">
              <section class="paging-section">
                <div class="paging-wrap">
                  <span @click="prev_page" :class="{'paging-box before-page-btn hide': maxPage2 <= 5, 'paging-box before-page-btn' : maxPage2 > 5}"> &lt;&lt; </span>
                  
                  <div class="paging-num-wrap paging-wrap">
                    <span @click="do_select_page($event.target)" v-for="num in forRange2" :key="num" :idx="num" :class="{'paging-box paging-num choice': num === nowPage2, 'paging-box paging-num un-choice' :num !== nowPage2}">
                      {{num}}
                    </span>
                  </div>
                  
                  <span @click="next_page" v-if="totalPageCnt2 > 5 && maxPage2 < totalPageCnt2" class="paging-box next-page-btn">>></span>
                  <span v-else class="paging-box next-page-btn hide">>></span>
                  <input type="hidden" id="totalPageCnt2" :value="totalPageCnt2">
                </div>
              </section>
            </section>
            <!-- END PAGING -->
					</div>
				</section>
				<!-- END un-fixed-section -->

				<!-- START fixed-section -->
				<section class="fixed-section">
					<section class="fixed-popup blind">
						<div class="alert-popup">
							<section class="alert-txt-section">
								<span class="using-time-fail-txt">
									해당 시간 예약이 불가능합니다.<br>
									<br>다른 시간대를 선택하여 주십시오.
								</span>
							</section>
							<section id="time-fail-close-btn" @click="close_time_fail_popup" class="alert-btn-section">
								<span>확인</span>
							</section>
						</div>
					</section>

					<section class="fixed-section-top">
						<section class="running-time-section">
							<label class="fixed-section-label"> 운영 시간 </label>
							<ul class="running-time-li-wrap">
								<li class="running-time-li">
									<label>일</label>
                  <span v-if="list.otvo.sun_dayoff === 'F'">{{list.otvo.sun_stime}} ~ {{list.otvo.sun_etime}}</span>
                  <span v-if="list.otvo.sun_dayoff === 'T'">휴무</span>
								</li>
								<li class="running-time-li">
									<label>월</label>
                  <span v-if="list.otvo.mon_dayoff === 'F'">{{list.otvo.mon_stime}} ~ {{list.otvo.mon_etime}}</span>
                  <span v-if="list.otvo.mon_dayoff === 'T'">휴무</span>
								</li>
								<li class="running-time-li">
									<label>화</label>
                  <span v-if="list.otvo.tue_dayoff === 'F'">{{list.otvo.tue_stime}} ~ {{list.otvo.tue_etime}}</span>
                  <span v-if="list.otvo.tue_dayoff === 'T'">휴무</span>
								</li>
								<li class="running-time-li">
									<label>수</label>
                  <span v-if="list.otvo.wed_dayoff === 'F'">{{list.otvo.wed_stime}} ~ {{list.otvo.wed_etime}}</span>
                  <span v-if="list.otvo.wed_dayoff === 'T'">휴무</span>
								</li>
								<li class="running-time-li">
									<label>목</label>
                  <span v-if="list.otvo.thu_dayoff === 'F'">{{list.otvo.thu_stime}} ~ {{list.otvo.thu_etime}}</span>
                  <span v-if="list.otvo.thu_dayoff === 'T'">휴무</span>
								</li>
								<li class="running-time-li">
									<label>금</label>
                  <span v-if="list.otvo.fri_dayoff === 'F'">{{list.otvo.fri_stime}} ~ {{list.otvo.fri_etime}}</span>
                  <span v-if="list.otvo.fri_dayoff === 'T'">휴무</span>
								</li>
								<li class="running-time-li">
									<label>토</label>
                  <span v-if="list.otvo.sat_dayoff === 'F'">{{list.otvo.sat_stime}} ~ {{list.otvo.sat_etime}}</span>
                  <span v-if="list.otvo.sat_dayoff === 'T'">휴무</span>
								</li>
							</ul>
						</section>
						<section class="type-location-txt">
							<div class="space-type-loca">
								<label class="fixed-section-label"> 공간 유형 </label>
									<span v-for="type_item in list.type_list" :key="type_item" class="fixed-section-txt">
                     {{type_item}} 
                  </span>
							</div>
							<div class="space-type-loca">
								<label class="fixed-section-label"> 위치 </label>
								<div class="fixed-section-loca">
									<img src="@/assets/IMG/common/location-icon.svg" class="space-loca-icon" alt="location-icon">
									<span class="fixed-section-txt"> {{list.short_roadname_address}} </span>
								</div>
							</div>
						</section>
					</section>
					<section class="reserve-type-section">
						<label class="fixed-section-label"> 예약 타입 </label>

						<!-- 타입 셀렉트 열 때 open-select클래스 add해야함 -->
						<!-- 타입 셀렉트 닫을 때 open-select클래스 remove해야함 -->
						<div class="type-border" @click="toggle_type_select">
							<span id="type-choice-value" class="type-border-txt room-name">타입을 선택해주세요.</span>
							<img src="@/assets/IMG/office/full-dropdown.svg" alt="full-dropdown" class="full-dropdown" />
						</div>

						<!-- CUSTOM SELECT SECTION -->
						<ul class="custom-select-type blind">
              <li @click="choice_reserve_type($event.target)" v-for="rvo in list.rvos" :key="rvo" class="custom-select-type-list">
                <span class="room-name" :room_no="rvo.room_no" :room_type="rvo.room_type">
                  {{rvo.room_name}} ({{rvo.room_type}})
                </span>
                <span class="room-price-unit">
                  <span class="room-price-big"> {{rvo.room_price}} 원</span>
                  <span class="room-unit-small"> /시간 </span>
                </span>
              </li>
						</ul>
					</section>
					<section class="using-time-section">
						<section class="time-boundary">
							<label class="fixed-section-label">
								예약 날짜
							</label>
							<div class="time-select-wrap">
								<input @pick="reserve_timePicker" type="text" class="type-border-txt time-input" placeholder="날짜 추가" readonly />
								<img src="@/assets/IMG/office/full-dropdown.svg" alt="full-dropdown" class="full-dropdown" />
							</div>
						</section>
					</section>

					<section class="using-time-section" id="reserve-time-boundary">
						<section class="time-boundary">
							<label class="fixed-section-label">
								사용 시간
							</label>
							<div class="time-boundary-selector-wrap">
								<ul class="time-boundary-list">
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="0">00:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="1">01:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="2">02:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="3">03:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="4">04:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="5">05:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="6">06:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="7">07:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="8">08:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="9">09:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="10">10:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="11">11:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="12">12:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="13">13:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="14">14:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="15">15:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="16">16:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="17">17:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="18">18:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="19">19:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="20">20:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="21">21:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="22">22:00</li>
									<li @click="choice_reserve_time($event.target)" class="time-boundary-item" value="23">23:00</li>
								</ul>
							</div>
						</section>
					</section>

					<section class="maybe-pay-section blind">
						<label class="fixed-section-label"> 예상 결제 금액 </label>
						<span class="fixed-section-label"> 40,000원 </span>
					</section>
					<section id="check_available" @click="reset_choice_time" class="btn-section">
						<span>예약 가능 여부 확인하기</span>
					</section>
					<section id="go_reserve" class="btn-section blind">
						<span>예약 하러 가기</span>
					</section>
				</section>
				<!-- END fixed-section -->
			</section>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import '@/assets/CSS/office/space-detail-introduce.scss';
</style>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
  name: 'SpaceDetailView',
  data() {
    return {
      list: '',
      maxPage: 10,
      nowPage: 6,
      totalPageCnt: 11,
      start: 6,
      forRange: [6, 7, 8, 9, 10],
      maxPage2: 10,
      nowPage2: 6,
      totalPageCnt2: 11,
      start2: 6,
      forRange2: [6, 7, 8, 9, 10],
      test: 1,
      position: 0,
      // 예약 선택 시간 boundary
      // ex) 11, 16시 선택 시
      // 이 배열에는 11, 12, 13, 14, 15, 16이 들어감.
      // 예약이 가능한지 체크하기 위함.
      // 중간 시간에 예약이 있으면 불가능함.
      check_reserve_time: {},
      pick_time_list: {},
    };
  },
  mounted() {
    const backofficeNo = decodeURI(window.location.href).split('?backoffice_no=')[1];

    // axios.get(`http://localhost:8800/office/space_introduce?backoffice_no=${backofficeNo}&introduce_menu=info`)
    //   .then((res) => {
    //     this.list = res;

    //     this.maxPage = res.maxPage;
    //     this.nowPage = res.nowPage;
    //     this.totalPageCnt = res.totalPageCnt;
    //     this.start = Math.ceil(res.nowPage/5.0);
    //     this.start = 5 * (this.start - 1) + 1;

    //     this.forRange = [];
    //     for (let i = this.start; i <= this.maxPage; i++) {
    //          this.forRange.push(i);
    //     }

    //     this.maxPage2 = res.maxPage2;
    //     this.nowPage2 = res.nowPage2;
    //     this.totalPageCnt2 = res.totalPageCnt2;
    //     this.start2 = Math.ceil(res.nowPage2/5.0);
    //     this.start2 = 5 * (this.start2 - 1) + 1;

    //     this.forRange2 = [];
    //     for (let i = this.start2; i <= this.maxPage2; i++) {
    //          this.forRange2.push(i);
    //     }

    //     if ($('.img').length == 1) {
    //       $('.next').addClass('hide');
    //     }

    //   })
    //   .catch(() => {
    //     $('.popup-background:eq(1)').removeClass('blind');
    //     $('#common-alert-popup').removeClass('blind');
    //     $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
    //   });
  },
  methods: {
    set_next_image() {
      if (this.test !== 1) {
        this.position -= 960;
        $('.container').css('transform', `translateX(-${this.position}px)`);
        this.test -= 1;

        if (this.test === $('.img').length - 1) {
          $('.next').removeClass('hide');
        }
        if (this.test === 1) {
          $('.prev').addClass('hide');
        }
      }
    },
    set_prev_image() {
      if (this.test < $('.img').length) {
        this.position += 960;
        $('.container').css('transform', `translateX(-${this.position}px)`);
        this.test += 1;

        if (this.test === $('.img').length) {
          $('.next').addClass('hide');
        }
        if (this.test === 2) {
          $('.prev').removeClass('hide');
        }
      }
    },
    /** 메뉴 탭 클릭 이벤트 */
    choice_menu(param) {
      $('.menu').removeClass('click-menu');
      $(param).addClass('click-menu');

      if ($(param).attr('menu') === 'info') {
        $('.space-description-wrap').removeClass('blind');
        $('.question-wrap:eq(0)').addClass('blind');
        $('#review-wrap').addClass('blind');
      } else if ($(param).attr('menu') === 'qna') {
        $('.space-description-wrap').addClass('blind');
        $('.question-wrap:eq(0)').removeClass('blind');
        $('#review-wrap').addClass('blind');
      } else if ($(param).attr('menu') === 'review') {
        $('.space-description-wrap').addClass('blind');
        $('.question-wrap:eq(0)').addClass('blind');
        $('#review-wrap').removeClass('blind');
      }
    },
    /** *** ************** **** */
    /** *** QUESTION POPUP **** */
    /** *** ************** **** */
    /** 문의에 대한 답변 SHOW / HIDE */
    show_answer(param) {
      const answerLi = $(param).parents('.quest-list').next('.answer-list');
      if (answerLi.hasClass('blind')) {
        answerLi.removeClass('blind');
        $(param).text('답변 닫기');
      } else {
        answerLi.addClass('blind');
        $(param).text('답변 보기');
      }
    },
    /** 문의 작성 글자수 제한 */
    limit_q_txt_length() {
      if ($('#question-write').val().length > 500) {
        $('#question-write').val($('#question-write').val().substring(0, 500));
      }
      $('.qna-length').text($('#question-write').val().length);
    },
    /** 문의 작성 팝업 - 타입 선택 셀렉트 show/hide 함수 */
    toggle_q_select() {
      if ($('.question-popup-select:eq(0)').hasClass('blind')) {
        $('.question-popup-select-val-wrap:eq(0)').addClass('open-select');
        $('.question-popup-select:eq(0)').removeClass('blind');
        $('.question-popup-select-val-wrap:eq(0)').removeClass('null-input-border');
      } else {
        $('.question-popup-select-val-wrap:eq(0)').removeClass('open-select');
        $('.question-popup-select:eq(0)').addClass('blind');
      }
    },
    /** 문의하기 팝업 셀렉트 리스트 클릭 이벤트 */
    click_q_select_li(param) {
      $('#question-select-choice').text($(param).text());
      $('#question-select-choice').attr('choice', 'true');
      $('#question-select-choice').attr('choice_idx', $(param).attr('idx'));

      $('.question-popup-select-val-wrap:eq(0)').removeClass('open-select');
      $('.question-popup-select:eq(0)').addClass('blind');
    },
    /** 문의 작성 팝업 닫기 버튼 클릭 */
    close_create_q_popup() {
      // TEXTAREA 초기화
      $('#question-write').val('');
      // 글자수 초기화
      $('.qna-length').text('0');

      $('#question-write').removeClass('null-input-border');
      $('.question-popup-select-val-wrap:eq(0)').removeClass('null-input-border');
      $('.question-popup-select-val-wrap:eq(0)').removeClass('open-select');

      $('#question-select-choice').text('타입을 선택해 주세요');
      $('#question-select-choice').attr('choice_idx', '');
      $('#question-select-choice').attr('choice', '');
      $('.question-popup-select:eq(0)').addClass('blind');

      $('#toggle').prop('checked', false);

      // 팝업 닫기
      $('#question-popup').addClass('blind');
    },
    /** 문의 작성 경고 테두리 제거 */
    remove_null_input_border() {
      $('#question-write').removeClass('null-input-border');
    },
    /** *** ************** **** */
    /** *** RESERVE SECTION *** */
    /** *** ************** **** */
    /** 예약 타입 셀렉트 클릭 시  -> 커스텀 셀렉트 SHOW */
    toggle_type_select() {
      if ($('.custom-select-type').hasClass('blind')) {
        $('.custom-select-type').removeClass('blind');
        $('.type-border').addClass('open-select');
      } else {
        $('.custom-select-type').addClass('blind');
        $('.type-border').removeClass('open-select');
      }
    },
    /** 예약 타입 리스트 클릭 */
    choice_reserve_type(param) {
      $('.type-border-txt').text($(param).children('.room-name').text());
      $('.type-border-txt').prop('check', true);

      const attr_room_no = $(param).children('.room-name').attr('room_no');
      $('#type-choice-value').attr('room_no', attr_room_no);

      const attr_room_type = $(param).children('.room-name').attr('room_type');
      $('#type-choice-value').attr('room_type', attr_room_type);

      $('.custom-select-type').addClass('blind');
      $('.type-border').removeClass('open-select');
    },
    /** 선택한 시간 초기화 */
    reset_choice_time() {
      this.pick_time_list = [];
    },
    /** 예약하려는 시간 선택 */
    // pick_time_list에 시간이 하나만 들어가 있으면 1시간 대여
    // 2개 있으면 그 사이 시간을 대여하는 것.
    choice_reserve_time(param) {
      this.check_reserve_time = [];

      if ($(param).hasClass('selected')) {
        // 선택 취소 했을 때
        this.pick_time_list.pop($(param).val());
        $(param).removeClass('selected');
      } else {
        // 선택 되었을 때
        if (this.pick_time_list.length < 2) {
          this.pick_time_list.push($(param).val());
          this.pick_time_list.sort();
          $(param).addClass('selected');
        }
      }

      // 예약 불가 처리
      if (this.pick_time_list.length === 2) {
        let reserveFlag = 0;
        for (let t = this.pick_time_list[0]; t <= this.pick_time_list[1]; t++) {
          // attr display가 있을 때만 추가
          if ($(`.time-boundary-item:eq(${t})`).is('[display]')) {
            this.check_reserve_time.push(t);

            $(`.time-boundary-item:eq(${t})`).css('background-color', '#2EE49D');
            $(`.time-boundary-item:eq(${t})`).css('color', '#FFFFFF');
          } else {
            $('.fixed-popup').removeClass('blind');
            $('.using-time-fail-txt:eq(0)').html(
              '선택 시간 사이에 예약이 존재하여<br><br>해당 시간은 예약할 수 없습니다.',
            );
            reserveFlag = 1;
          }
        }

        if (reserveFlag === 1) {
          this.pick_time_list = [];
          this.check_reserve_time = [];
          for (let t = 0; t < 24; t++) {
            $(`.time-boundary-item:eq(${t})`).removeClass('selected');
            $(`.time-boundary-item:eq(${t})`).css('background-color', '#FFFFFF');
            $(`.time-boundary-item:eq(${t})`).css('color', '#000000');
          }

          reserveFlag = 0;
        }
      } else {
        this.pick_time_list = [];
        this.check_reserve_time = [];

        for (let t = 0; t < 24; t++) {
          if ($(`.time-boundary-item:eq(${t})`).hasClass('selected')) {
            this.pick_time_list.push(t);
            $(`.time-boundary-item:eq(${t})`).css('background-color', '#2EE49D');
            $(`.time-boundary-item:eq(${t})`).css('color', '#FFFFFF');
          } else {
            $(`.time-boundary-item:eq(${t})`).css('background-color', '#FFFFFF');
            $(`.time-boundary-item:eq(${t})`).css('color', '#000000');
          }
        }
      }
    },
    /** DATEPICKER부분 */
    reserve_timePicker() {

    },
    /** 예약 시간 실패 팝업창 닫기 버튼 클릭 */
    close_time_fail_popup() {
      $('.fixed-popup').addClass('blind');
    },
  }, // END methods()
};
</script>
