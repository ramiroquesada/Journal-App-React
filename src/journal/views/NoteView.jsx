import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
	return (
		<Grid
			container
			direction={'row'}
			justifyContent={'space-between'}
			sx={{ mb: 1 }}>
			<Grid item alignItems="center" justifyContent={'center'}>
				<Typography fontSize={30} fontWeight="light">
					{' '}
					6 de Noviembre de 2023
				</Typography>
			</Grid>
			<Grid item>
				<Button color="primary" sx={{ padding: 2 }}>
					<SaveOutlined sx={{ fontSize: 25, mr: 1 }} />
					Guardar
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Ingrese un titulo"
					label="Título"
					sx={{ border: 'none', mt: 2, mb: 1 }}
				/>

				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="¿Qué sucedió hoy?"
					minRows="4"
				/>
			</Grid>

			<ImageGallery />
		</Grid>
	);
};

