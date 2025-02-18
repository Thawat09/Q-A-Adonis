import type { HttpContext } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'
import QaController from '#controllers/qand_as_controller'

router.get('/', ({ response }: HttpContext) => {
  response.redirect().toRoute('qa.home')
})

router.get('/qa', [QaController, 'index']).as('qa.home')
router.post('/qa/search', [QaController, 'search']).as('qa.search')
router.get('/qa/create', [QaController, 'create']).as('qa.create')
router.post('/qa', [QaController, 'store']).as('qa.store')
router.get('/qa/:id/edit', [QaController, 'edit']).as('qa.edit')
router.post('/qa/:id', [QaController, 'update']).as('qa.update')
router.get('/qa/:id/delete', [QaController, 'destroy']).as('qa.delete')
