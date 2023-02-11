import { Navigate, Route, Routes } from 'react-router-dom'

import Dashboard from 'pages/dashboard'
import Roulette from 'pages/roulette'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/dashboard' replace />} />
			<Route path='dashboard'>
				<Route index element={<Dashboard />} />
			</Route>
			<Route path='roulette'>
				<Route index element={<Roulette />} />
			</Route>
		</Routes>
	)
}

export default AppRoutes
