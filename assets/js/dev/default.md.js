import {anticore} from 'anticore'
import {one} from 'anticore/dom/query/one'
import {replace} from 'anticore/dom/tree/replace'

anticore.on('.default', function(element, next, loaded) {
  loaded && replace(element, one('main'))
  next()
})
