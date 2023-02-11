import { useLocation, useNavigate } from 'react-router-dom'

import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
} from '@mui/material'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { RootState } from 'app/store'
import { setMobileMenuOpen } from 'slices/user'
import { sidebarMenu } from 'config/sidebarMenu'

const Sidebar = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const mobileMenuOpen = useAppSelector((state: RootState) => state.user.mobileMenuOpen)

	const handleClickMenu = (to: string) => {
		navigate(to)
		dispatch(setMobileMenuOpen(false))
	}

	return (
		<>
			<Stack
				sx={{
					position: {
						xs: 'fixed',
						md: 'relative',
					},
					top: 0,
					left: { xs: mobileMenuOpen ? 0 : -256, md: 0 },
					zIndex: 1200,
					flexShrink: 0,
					borderRight: { xs: 0, md: 1 },
					borderColor: '#fff4 !important',
					p: 4,
					width: 256,
					height: '100vh',
					backgroundColor: '#1a1a1a',
					transition: 'all .2s ease-in-out',
				}}
			>
				<Stack sx={{ height: 64 }}></Stack>
				<Divider />
				<List>
					<Stack spacing={2}>
						{sidebarMenu.map((item) => (
							<ListItem
								disablePadding
								selected={pathname.includes(item.to)}
								sx={{ borderRadius: 1 }}
								onClick={() => handleClickMenu(item.to)}
								key={item.label}
							>
								<ListItemButton sx={{ borderRadius: 1 }}>
									<ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
									<ListItemText>{item.label}</ListItemText>
								</ListItemButton>
							</ListItem>
						))}
					</Stack>
				</List>
			</Stack>
			{mobileMenuOpen && (
				<Box
					sx={{
						position: 'fixed',
						top: 0,
						left: 0,
						zIndex: 1199,
						width: '100vw',
						height: '100vh',
						backgroundColor: '#0004',
						backdropFilter: 'blur(2px)',
					}}
					onClick={() => dispatch(setMobileMenuOpen(false))}
				/>
			)}
		</>
	)
}

export default Sidebar
