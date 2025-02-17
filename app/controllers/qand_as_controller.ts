// import type { HttpContext } from '@adonisjs/core/http'

interface QandA {
  id: number;
  question: string;
  answer: string;
}

var lastID: number = 3

const qas: QandA[] = [
  {
    id: 1, question: 'What is AdonisJS?',
    answer: `AdonisJS is a TypeScript-first web framework for building web apps and API servers.
              It comes with support for testing, modern tooling, an ecosystem of official packages, and more.
              TypeScript 16.6k 630. lucid Public. AdonisJS SQL ORM.`},
  {
    id: 2, question: 'What is the difference between AdonisJS and NestJS',
    answer: `AdonisJS is written in JavaScript and is built on top of the Node. js runtime,
              making it highly suitable for server-side applications. On the other hand, NestJS is written
              in TypeScript, a statically-typed superset of JavaScript, which offers enhanced tooling and
              compile-time checks.`}
]

export default class QandAsController {

}


