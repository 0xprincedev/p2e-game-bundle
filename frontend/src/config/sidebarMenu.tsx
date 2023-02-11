import DashboardIcon from '@mui/icons-material/Dashboard'
import { ReactComponent as RouletteIcon } from 'icons/roulette.svg'

export const sidebarMenu = [
	{ label: 'Dashboard', to: '/dashboard', icon: <DashboardIcon /> },
	{
		label: 'Roulette',
		to: '/roulette',
		icon: <RouletteIcon style={{ width: 24, height: 24 }} />,
	},
]
