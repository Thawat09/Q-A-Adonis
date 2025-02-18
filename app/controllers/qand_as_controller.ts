import type { HttpContext } from '@adonisjs/core/http'

interface QandA {
  id: number;
  question: string;
  answer: string;
}

var lastID: number = 3

const qas: QandA[] = [
  {
    id: 1,
    question: 'What is AdonisJS?',
    answer: `
      AdonisJS is a TypeScript-first web framework for building web apps and API servers.
      It comes with support for testing, modern tooling, an ecosystem of official packages, and more.
      TypeScript 16.6k 630. lucid Public. AdonisJS SQL ORM.
    `,
  },
  {
    id: 2,
    question: 'What is the difference between AdonisJS and NestJS',
    answer: `
      AdonisJS is written in JavaScript and is built on top of the Node. js runtime,
      making it highly suitable for server-side applications. On the other hand, NestJS is written
      in TypeScript, a statically-typed superset of JavaScript, which offers enhanced tooling and
      compile-time checks.
    `,
  }
]

export default class QandAsController {
  async index({ view }: HttpContext) {
    return view.render('pages/QA', { qa: qas })
  }

  async search({ view, request }: HttpContext) {
    const searchQuery = request.input('txtSearch', '').toLowerCase()
    let filteredQAs = qas

    if (searchQuery) {
      filteredQAs = qas.filter(q => q.question.toLowerCase().includes(searchQuery))
    }

    return view.render('pages/QA', { qa: filteredQAs, searchQuery })
  }

  async create({ view }: HttpContext) {
    return view.render('pages/QAForm')
  }

  async store({ request, response }: HttpContext) {
    const question = request.input('question')
    const answer = request.input('answer')
    const newId = qas.length + 1
    const newPost: QandA = { id: newId, question: question, answer: answer }

    qas.push(newPost)

    response.redirect().toRoute('qa.home')
  }

  async edit({ params, view }: HttpContext) {
    const id = params.id
    const post = qas.find(p => p.id == Number(id))

    return view.render('pages/QAForm', { post: post })
  }

  async update({ params, request, response }: HttpContext) {
    const id = params.id
    const index = qas.findIndex(p => p.id == Number(id))

    qas[index].question = request.input('question')
    qas[index].answer = request.input('answer')

    response.redirect().toRoute('qa.home')
  }

  async destroy({ params, response }: HttpContext) {
    const id = params.id
    const index = qas.findIndex(p => p.id == Number(id))
    qas.splice(index, 1)

    response.redirect().toRoute('qa.home')
  }
}
