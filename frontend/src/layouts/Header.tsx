import { useState } from 'react'

import { AppBar, Box, Button, Stack, IconButton } from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

import { useAppDispatch } from 'app/hooks'
import { setMobileMenuOpen } from 'slices/user'

import Login from 'components/modal/Login'

const Header = () => {
	const [loginOpen, setLoginOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()

	const handleMenuOpenClick = () => {
		dispatch(setMobileMenuOpen(true))
	}

	const handleClickLogin = () => {
		setLoginOpen(true)
	}

	const handleCloseLogin = () => {
		setLoginOpen(false)
	}

	return (
		<AppBar position='sticky'>
			<Login open={loginOpen} closeModal={handleCloseLogin} />
			<Stack direction='row' sx={{ alignItems: 'center', gap: 4, px: 4, height: { xs: 64, md: 80 } }}>
				<IconButton sx={{ display: { md: 'none' }, borderRadius: 1 }} onClick={handleMenuOpenClick}>
					<MenuOpenIcon />
				</IconButton>
				<Box sx={{ flexGrow: 1 }} />
				<Button onClick={handleClickLogin}>Login</Button>
				<Button variant='outlined'>Register</Button>
			</Stack>
		</AppBar>
	)
}

export default Header
