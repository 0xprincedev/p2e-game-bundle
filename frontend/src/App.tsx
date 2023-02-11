import { useMemo } from 'react'
import { ToastContainer } from 'react-toastify'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'

import AppRoutes from 'routes'

const App = () => {
	const theme = useMemo(
		() =>
			createTheme({
				breakpoints: {
					values: {
						xs: 0,
						sm: 640,
						md: 992,
						lg: 1280,
						xl: 1536,
					},
				},
				palette: {
					mode: 'dark',
					background: {
						default: '#1a1a1a',
					},
				},
				spacing: 4,
				typography: {
					button: {
						textTransform: 'none',
						fontFamily: 'Urbanist',
					},
					fontFamily: 'Urbanist',
				},
			}),
		[]
	)

	return (
		<ThemeProvider theme={theme}>
			<AppRoutes />
			<CssBaseline />
			<ToastContainer autoClose={2000} theme='dark' pauseOnFocusLoss={false} pauseOnHover={false} />
		</ThemeProvider>
	)
}

export default App
