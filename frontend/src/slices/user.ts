import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Props {
	mobileMenuOpen: boolean
	balance: number
}

const initialState: Props = {
	mobileMenuOpen: false,
	balance: 0,
}

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
			state.mobileMenuOpen = action.payload
		},
		setBalance: (state, action: PayloadAction<number>) => {
			state.balance = action.payload
		},
	},
})

export const { setMobileMenuOpen, setBalance } = user.actions

export default user.reducer
