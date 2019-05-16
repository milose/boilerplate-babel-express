import 'dotenv/config'
import app from './app'

// eslint-disable-next-line no-console
console.log('We are running on', process.env.APP_ENV, 'environment.')

export default app.listen(process.env.APP_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Open the app at ${process.env.APP_URI}:${process.env.APP_PORT}`)
})
