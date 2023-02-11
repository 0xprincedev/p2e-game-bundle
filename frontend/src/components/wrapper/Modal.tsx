import { Box, IconButton, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
	open: boolean
	closeModal: () => void
	children?: React.ReactNode
	hideCloseIcon: boolean
}

const ModalWrapper = ({ open, closeModal, children, hideCloseIcon }: Props) => {
	return (
		<Modal
			open={open}
			onClose={closeModal}
			sx={{
				position: 'fixed',
				inset: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgColor: '#0004',
				backdropFilter: 'blur(3px)',
			}}
		>
			<Box sx={{ position: 'relative', borderRadius: 1, p: 6, backgroundColor: '#242424' }}>
				{!hideCloseIcon && (
					<IconButton sx={{ position: 'absolute', top: 0, right: 0, borderRadius: 1 }} onClick={closeModal}>
						<CloseIcon fontSize='small' />
					</IconButton>
				)}
				{children}
			</Box>
		</Modal>
	)
}

export default ModalWrapper
