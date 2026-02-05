// --------------------------------------------------------------------------
// 실습: 폼 필드 선택하기 (form.elements)
// --------------------------------------------------------------------------

;(() => {
  const form = document.querySelector('.user-registration-form')
  // HTMLFormElement 객체
  // console.dir(form)
  
  // HTMLFormControlsCollection 객체 { length, namedItem }
  // console.log(form.elements)
  // 폼 컨트롤 객체에 접근
  // id, name 속성 또는 인덱스(index) 사용 접근 가능
  // console.log(form.elements[0]) // 수집된 인덱스로 접근
  // console.log(form.elements.userid) // name 속성으로 접근
  // console.log(form.elements['user-nickname']) // id 속성으로 접근

  // 폼 컨트롤 반복 처리
  // for 문
  ;(() => {
    for (let i = 0, l = form.elements.length; i<l; ++i) {
      const element = form.elements[i]
      console.log(element)
    }
  }) //()
  
  // for...of 문
  ;(() => {
    for (const formControl of form.elements) {
      console.log(formControl)
    }
  }) //()

  // forEach() 메서드 (배열화)
  ;(() => {
    Array
      .from(form.elements)
      .forEach((formControl, index) => {
        console.log(index, formControl)
      })
  }) //()

})()


// --------------------------------------------------------------------------
// 핵심 정리
// --------------------------------------------------------------------------
// - 순서가 중요하다면? -> index
// - 데이터 구조가 중요하다면? -> name
// - 특정 고유 요소가 필요하다면? -> id (대괄호 표기 주의)
// --------------------------------------------------------------------------