// --------------------------------------------------------------------------
// 실습: 폼 필드 종합 제어
// --------------------------------------------------------------------------

// 폼 입력 필드 이벤트 제어
;(() => {
  
  // 폼 요소에 이벤트 리스너 추가 (이벤트 위임, 버블링 단계 활용)
  // 폼에 설정하는 이벤트 리스너
  // - focusin, focusout
  const emailRegisterForm = document.querySelector('.email-register-form')

  emailRegisterForm.addEventListener('focusin', (event) => {
    const { target: eventTarget } = event
    console.log('폼 외부에서 내부로 초점이 이동될 때 focusin 이벤트 발생:', eventTarget)
  })

  emailRegisterForm.addEventListener('focusout', (event) => {
    const { target: eventTarget } = event
    console.log('폼 내부에서 외부로 초점 벗어날 때 focusout 이벤트 발생:', eventTarget)
  })

  
  // 이메일 입력 필드 찾기 (form.elements 객체 : HTMLFormControlsCollection)
  const emailInput = emailRegisterForm.elements.email
  
  // 입력 필드에 직접 이벤트 리스너 추가
  // - change, input, focus, blur
  emailInput.addEventListener('change', (e) => {
    const input = e.currentTarget
    console.log('초점 벗어날 때 change 이벤트 발생:', input.value)
  })

  emailInput.addEventListener('input', (e) => {
    const { value } = e.currentTarget
    console.log('입력할 때마다 input 이벤트 발생:', value)
  })

  emailInput.addEventListener('focus', (e) => {
    const input = e.currentTarget
    console.log('초점 이동 시 focus 이벤트 발생:', input)
  })

  emailInput.addEventListener('blur', (e) => {
    const input = e.currentTarget 
    console.log('초점이 벗어날 때 blur 이벤트 발생:', input)
  })

})()


// --------------------------------------------------------------------------
// 핵심 정리
// --------------------------------------------------------------------------
// - 실시간 반응이 필요할 땐 'input', 입력 완료 시점은 'change'
// - focusout은 버블링이 발생하므로 폼 전체의 포커스 상태를 관리하기 편리함
// - select의 'text'는 options[selectedIndex]를 통해 접근 가능
// --------------------------------------------------------------------------