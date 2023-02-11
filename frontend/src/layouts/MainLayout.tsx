import Helmet from 'react-helmet'

import { Stack } from '@mui/material'

import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

interface Props {
	children?: React.ReactNode
	title: string
}

const MainLayout = ({ children, title }: Props) => {
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Stack direction='row'>
				<Sidebar />
				<Stack sx={{ width: '100%' }}>
					<Header />
					{children}
					<Footer />
				</Stack>
			</Stack>
		</>
	)
}

export default MainLayout
