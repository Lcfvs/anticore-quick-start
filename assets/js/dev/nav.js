import {anticore} from 'anticore'
import { one } from 'anticore/dom/query/one'

anticore.on('main', function (element, next) {
  one('body nav a.current').classList.remove('current')
  one('body nav a.' + element.className).classList.add('current')
  next()
})
