{
  // .accordion 클래스 이름으로 문서의 객체를 참조
  const firstAccordion = document.querySelector('.accordion')
  // console.log(firstAccordion)

  // 찾은 문서의 객체에 클릭 이벤트 리스너 추가
  firstAccordion.addEventListener('click', () => {
    // 아코디언 콘텐츠 토글(열기/닫기)
    // firstAccordion.classList.toggle('is-open')
  })
}

// --------------------------------------------------------------------------
// 반복문을 모를 경우 (복사/붙여넣기 신공! 😡)
// --------------------------------------------------------------------------

const firstAccordion = document.querySelector('.accordion__container .accordion:nth-child(1)')
firstAccordion.addEventListener('click', () => {
  firstAccordion.classList.toggle('is-open')
})
const secondAccordion = document.querySelector('.accordion__container .accordion:nth-child(2)')
secondAccordion.addEventListener('click', () => {
  secondAccordion.classList.toggle('is-open')
})
const thirdAccordion = document.querySelector('.accordion__container .accordion:nth-child(3)')
thirdAccordion.addEventListener('click', () => {
  thirdAccordion.classList.toggle('is-open')
})
const fourthAccordion = document.querySelector('.accordion__container .accordion:nth-child(4)')
fourthAccordion.addEventListener('click', () => {
  fourthAccordion.classList.toggle('is-open')
})