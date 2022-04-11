import React, { useCallback } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Form, Field } from 'react-final-form';
import { composeValidators, isRequired, isValidEmail } from 'validators';
import { postSignUp } from 'redux/auth/auth.actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const submitForm = useCallback((values) => {
    const onSubmit = () => {
      dispatcher(postSignUp(values));
    };
    onSubmit();
  }, []);
  return (
    <Grid container justifyContent="center" alignItems="center" marginTop={2}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 2rem' }}>
          <Button onClick={() => navigate('/signin')}> Entrar</Button>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography>Faça seu cadastro agora:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Form
          onSubmit={submitForm}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Grid container justifyContent="center" alignItems="center" marginTop={2} spacing={2}>
                <Grid item xs={12}>
                  <Field name="name" validate={isRequired}>
                    {({ input, meta }) => (
                      <TextField
                        {...input}
                        error={meta.error && meta.touched}
                        helperText={meta.error && meta.touched && meta.error}
                        id="name"
                        label="Nome Completo"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
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
                  <Field name="telephone" validate={isRequired}>
                    {({ input, meta }) => (
                      <TextField
                        {...input}
                        error={meta.error && meta.touched}
                        helperText={meta.error && meta.touched && meta.error}
                        id="telephone"
                        label="Telefone"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="email" validate={composeValidators(isRequired, isValidEmail)}>
                    {({ input, meta }) => (
                      <TextField
                        {...input}
                        error={meta.error && meta.touched}
                        helperText={meta.error && meta.touched && meta.error}
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="address" validate={isRequired}>
                    {({ input, meta }) => (
                      <TextField
                        {...input}
                        error={meta.error && meta.touched}
                        helperText={meta.error && meta.touched && meta.error}
                        id="address"
                        label="Endereço"
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
                <Grid item xs={12}>
                  <Button type="submit" disabled={submitting} variant="contained">
                    Cadastrar
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
