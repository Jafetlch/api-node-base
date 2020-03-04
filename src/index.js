import '@babel/polyfill'
import app from '@root/server/app'

const main = async () => {
  await app.listen(app.get('PORT'), '0.0.0.0')
  console.log(`Server on port ${app.get('PORT')}`)
}

main()
