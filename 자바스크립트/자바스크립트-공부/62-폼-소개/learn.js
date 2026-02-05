// --------------------------------------------------------------------------
// 실습: 폼 제출 제어 (Form Submission Control)
// --------------------------------------------------------------------------

const emailForm = document.querySelector('.send-email-form')

emailForm.addEventListener('submit', (e) => {
  const form = e.currentTarget // emailForm

  // 브라우저 기본 작동(서버 프로그램으로 입력된 정보 전달, 페이지 이동) 방지
  e.preventDefault()

  // 폼을 통해 입력되 사용자의 정보를 제어
  console.log('폼을 통해 입력되 사용자의 정보를 제어')

  // 클라이언트 측에서 JavaScript를 사용해 
  // 사용자 입력 정보가 유효한지 확인
  const isAllValid = true

  // 사용자 입력 정보를 서버에 전송 명령
  if (isAllValid) {
    // 폼 전송 (form.submit())
    form.submit()
  }

  // 폼 초기화 (native method reset)
  form.reset()

  // 직접 초기화 (manual reset)
})


// --------------------------------------------------------------------------
// 핵심 정리
// --------------------------------------------------------------------------
// - label(for)와 input(id)이 연결되어야 접근성이 향상됩니다.
// - name 속성은 서버나 JS에서 데이터를 추출하는 키(Key)가 됩니다.
// - e.preventDefault()는 클라이언트 중심의 현대적 웹 개발에서 필수입니다.
// --------------------------------------------------------------------------