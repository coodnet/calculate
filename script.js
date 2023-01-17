window.addEventListener('DOMContentLoaded', () => {
  const perNum = document.querySelector('#per__num'),
    dagree = document.querySelector('#dagree__num'),
    squareNum = document.querySelector('#square__num'),
    cubeNum = document.querySelector('#cube__num')

  const percentBtn = document.querySelector('#percent__btn'),
    squareBtn = document.querySelector('#square__btn'),
    cubeBtn = document.querySelector('#cube__btn')

  percentBtn.addEventListener('click', () => {
    let perResp = document.querySelector('.per__resp')
    const responsePer = (+perNum.value / 100) * dagree.value

    perResp.innerHTML = responsePer

    perNum.value = ''
    dagree.value = ''
  })

  squareBtn.addEventListener('click', () => {
    let squareResp = document.querySelector('.square__resp')
    const responseSqr = Math.pow(+squareNum.value, 2)

    squareResp.innerHTML = responseSqr
    squareNum.innerHTML = ''
  })

  
  cubeBtn.addEventListener('click', () => {
    let cubeResp = document.querySelector('.cube__resp')
    const responseCube= Math.pow(+cubeNum.value, 3)

    cubeResp.innerHTML = responseCube
    cubeNum.value = ''
  })
})
