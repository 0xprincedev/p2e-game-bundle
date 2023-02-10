import db from '../models'

const init = () => {
	db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })

	db.mongoose.connection.on('err', (err: any) => {
		console.log('\x1b[31m%s\x1b[0m', '❌ | MONGO DB ERROR\n\n' + err)
	})

	db.mongoose.connection.on('disconnected', () => {
		console.log('\x1b[31m%s\x1b[0m', '❌ | DISCONNECTED FROM THE DATABASE')
	})

	db.mongoose.connection.on('connected', () => {
		console.log('\x1b[32m%s\x1b[0m', '✅ | Successfully CONNECTED TO THE DATABASE')
	})
}

export default { init }
