import { Field, Form } from 'react-final-form'

import { Button, Stack, Typography } from '@mui/material'

import Modal from 'components/wrapper/Modal'
import InputForm from 'components/form/Input'

interface Props {
	open: boolean
	closeModal: () => void
	hideCloseIcon?: boolean
}

const Login = ({ open, closeModal, hideCloseIcon = false }: Props) => {
	const handleLogin = () => {}

	return (
		<Modal open={open} closeModal={closeModal} hideCloseIcon={hideCloseIcon}>
			<Stack spacing={6} sx={{ width: { xs: 300, sm: 420 } }}>
				<Typography variant='h5'>Login</Typography>
				<Form
					onSubmit={handleLogin}
					render={({ handleSubmit }) => (
						<form onSubmit={handleSubmit} autoComplete='off'>
							<Stack spacing={4}>
								<Field name='email' label='E-mail' required>
									{(props) => <InputForm autofocus {...props} />}
								</Field>
								<Field name='password' label='Password' required>
									{(props) => <InputForm type='password' autofocus {...props} />}
								</Field>
								<Stack direction='row' spacing={4}>
									<Button sx={{ width: '100%' }}>Create an account</Button>
									<Button variant='contained' sx={{ width: '100%' }}>
										Login
									</Button>
								</Stack>
							</Stack>
						</form>
					)}
				/>
			</Stack>
		</Modal>
	)
}

export default Login
