import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication } from '../../redux/store/auth';

export const LoginPage = () => {

	const dispatch = useDispatch();

	const { email, password, onInputChange } = useForm({
		email: '',
		password: ''
	})

	const onSubmit = (event) => {
		event.preventDefault();

		dispatch( checkingAuthentication() )

		console.log({ email, password })
	}

	const onGoogleSignIn = () => {

		dispatch( checkingAuthentication() )
		console.log('onGoogleSignIn')
	}

	return (
		<AuthLayout title='Login'>

			<form onSubmit={onSubmit}>
				<Grid container>

					<Grid item xs={ 12 } sx={{ mt: 2 }}>

						<TextField
							name='email'
							onChange={onInputChange}
							value={email}
							label='Correo'
							type="email"
							placeholder="correo@google.com"
							fullWidth>
						</TextField>

					</Grid>

					<Grid item xs={ 12 } sx={{ mt: 2 }}>

						<TextField
							autoComplete='true'
							label='Contraseña'
							type="password"
							placeholder="Contraseña"
							fullWidth
							name='password'
							onChange={onInputChange}
							value={password}>
						</TextField>

					</Grid>

					<Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

						<Grid item xs={ 12 } sm={ 6 } >

							<Button variant="contained" fullWidth type='submit'>
								Login
							</Button>

						</Grid>

						<Grid item xs={ 12 } sm={ 6 } >

							<Button onClick={onGoogleSignIn} variant="contained" fullWidth >
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>

									
							</Button>

						</Grid>

					</Grid>

					<Grid container direction='row' justifyContent='end'>
						<Link component={ RouterLink } color='inherit' to='/auth/register' >
							Crear una cuenta
						</Link>
						
					</Grid>

				</Grid>

			</form>

		</AuthLayout>

	)
}
