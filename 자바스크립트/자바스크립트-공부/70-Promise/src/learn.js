// --------------------------------------------------------------------------
// 실습: 프로미스(Promise) 객체 생성 및 체이닝
// --------------------------------------------------------------------------

const TIMEOUT = 3 // 3s

// Promise 생성자 함수를 사용해 인스턴스 생성
const promiseInstance = new Promise((resolve, reject) => {
  // console.log(typeof resolve) // 'function'
  // console.log(typeof reject) // 'function'

  // 비동기 작업 처리
  // 비동기 스케쥴링 (3초 뒤 타임아웃)
  setTimeout(() => {
    // 아직은 모르는 미결(pending) 상태
    // 둘 중 하나 성공(해결) 또는 실패(거절)
    if (Math.random() >= 0.05) {
      resolve()
    } else {
      reject()
    }

  }, TIMEOUT * 1000)
})

// Promise 객체 (생성해야 사용 가능)
// Promise { then, catch, finally }
// pending (미결, 보류, pending) 
promiseInstance
  // -> fulfilled (이행, 해결, fulfilled) .then(callback)
  .then(() => console.log('약속이 이행되었어! 😊'))
  // -> rejected (거부, 거절, rejected) .catch(callback)
  .catch(() => console.warn('약속이... 거절되었어.. 😭'))


// --------------------------------------------------------------------------
// 핵심 요약
// --------------------------------------------------------------------------
// - 프로미스는 Pending(대기), Fulfilled(이행), Rejected(거부) 세 가지 상태를 가집니다.
// - .then()은 성공 시 실행되며, 반환된 값은 다음 .then()으로 전달(체이닝)됩니다.
// - .catch()는 실패(reject) 또는 체인 도중 발생한 에러(throw)를 잡아냅니다.
// - .finally()는 성공/실패 여부와 관계없이 항상 마지막에 실행되어 리소스를 정리합니다.
// - reject 시 문자열 대신 new Error()를 사용하면 디버깅에 유리한 콜 스택 정보를 얻습니다.
// --------------------------------------------------------------------------