import { Router } from 'express'

import serverApi from './server.js'
import castApi from './cast.js'
import settingsApi from './settings.js'

const api = Router()

api.use('/server', serverApi)
api.use('/cast', castApi)
api.use('/settings', settingsApi)


export default api