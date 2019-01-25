import {anticore} from 'anticore'

// Import your own middlewares here
import './default.md.js'

// Let the following lines at the end of this file
import 'anticore/middleware/main/mono'
anticore.defaults().populate()
