import '@/style/reset.scss'

import bg from '@/assets/bg.png'

const img = document.createElement('img')
img.src = bg
img.style.width = '100vw'
img.style.height = '100vh'
document.body.appendChild(img)
