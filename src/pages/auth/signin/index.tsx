import React, { useCallback, useEffect } from 'react';
import { Button, Grid, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { isRequired } from 'validators';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignIn, fetchSignInSuccess } from 'redux/auth/auth.actions';
import { RootState } from 'redux/root-store';
import { Loading } from 'componets';
import { CURRENT_USER } from '../../../constants';

const SignInPage = () => {
  const navigate = useNavigate();
  const dispacther = useDispatch();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const handlerCurrentUser = () => {
      const user = localStorage.getItem(CURRENT_USER);
      if (user) {
        dispacther(fetchSignInSuccess({ isAuth: true, currentUser: JSON.parse(user) }));
        navigate('/home');
      }
    };
    handlerCurrentUser();
  }, []);

  const submitForm = useCallback((values) => {
    const onSubmit = () => {
      navigate('/home');
      dispacther(fetchSignIn(values));
    };
    onSubmit();
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center" marginTop={2}>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography>Faça seu login:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Form
          onSubmit={submitForm}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Grid container justifyContent="flex-end" alignItems="center" marginTop={2} spacing={2}>
                {error && (
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        width: '100%',
                        backgroundColor: 'red',
                        color: 'white',
                        padding: '1rem',
                      }}
                    >
                      {error.message}
                    </Box>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Field name="cpf" validate={isRequired}>
                    {({ input, meta }) => (
                      <TextField
                        {...input}
                        error={meta.error && meta.touched}
                        helperText={meta.error && meta.touched && meta.error}
                        id="cpf"
                        label="CPF"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="password" validate={isRequired}>
                    {({ input, meta }) => (
                      <TextField
                        {...input}
                        error={meta.error && meta.touched}
                        helperText={meta.error && meta.touched && meta.error}
                        id="password"
                        type="password"
                        label="Senha"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Button onClick={() => navigate('/signup')}> Cadastrar</Button>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <Button type="submit" disabled={submitting} variant="contained">
                        Entrar
                      </Button>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </form>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default SignInPage;
