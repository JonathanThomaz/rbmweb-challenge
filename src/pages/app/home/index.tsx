import { Box, Button } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'redux/auth/auth.actions';
import { RootState } from 'redux/root-store';

const HomePage = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const dispacther = useDispatch();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Box>
        <Button onClick={() => dispacther(signOut())}>Sair</Button>
      </Box>
      <Box>
        <p>CPF: {currentUser?.cpf}</p>
        <p>Nome: {currentUser?.name}</p>
        <p>Telefone: {currentUser?.telephone}</p>
        <p>E-mail: {currentUser?.email}</p>
        <p>Endereço: {currentUser?.address}</p>
      </Box>
    </Box>
  );
};

export default HomePage;
