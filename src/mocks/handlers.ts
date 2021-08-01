// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  // rest.post('/login', (req, res, ctx) => {
  //   // Persist user's authentication in the session
  //   sessionStorage.setItem('is-authenticated', 'true')
  //   return res(
  //     // Respond with a 200 status code
  //     ctx.status(200)
  //   )
  // }),

  // Handles a GET /reviews request
  rest.get(
    `${process.env.REACT_APP_API_ENDPOINT}/reviews`,
    (_req, res, ctx) => {
      // console.log('Reviews called')
      // Check if the user is authenticated in this session
      // const isAuthenticated = sessionStorage.getItem('is-authenticated')
      // if (!isAuthenticated) {
      //   // If not authenticated, respond with a 403 error
      //   return res(
      //     ctx.status(403),
      //     ctx.json({
      //       errorMessage: 'Not authorized',
      //     })
      //   )
      // }
      // If authenticated, return a mocked user details
      return res(
        ctx.status(200),
        ctx.json([
          {
            username: 'amit',
            description: 'this course is good',
          },
          {
            username: 'suresh',
            description: 'Learnt a lot',
          },
        ])
      )
    }
  ),
]
