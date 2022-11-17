const jsonServer = require('json-server')

const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

router.db._.id = 'uuid'
app.db = router.db
const rules = auth.rewriter({
  users: 660,
  userSetting: 660,
  accounts: 660,
})

app.use(rules)
app.use(auth)
app.use(router)

app.listen(process.env.PORT || 4000, () => {
  console.log('JSON Server is running...')
})
