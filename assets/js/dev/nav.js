import {anticore} from 'anticore'
import {one} from 'anticore/dom/query/one'

anticore.on('main', function (element, next, loaded, url) {
  one('body nav a.current').classList.remove('current')
  one('body nav a[href="' + url + '"]').classList.add('current')
  next()
})
