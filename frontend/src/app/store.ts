import { configureStore } from '@reduxjs/toolkit'
import user from 'slices/user'

export const store = configureStore({
	reducer: {
		user: user,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
