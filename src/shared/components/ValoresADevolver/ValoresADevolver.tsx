import { Typography, Box, TextField, Button } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

interface IValoresADevolverProps {
  backToLogin: () => void
}

export function ValoresADevolver({ backToLogin }: IValoresADevolverProps) {
  return (
    <>
      <Typography variant='h6' fontSize={14} component="label">
        Digite abaixo seus dados para visualizar os valores a devolver:
      </Typography>

      <Box display="flex" flexDirection="column" gap={1}>
        <TextField size='small' fullWidth placeholder='CPF/CNPJ'></TextField>

        <TextField size='small' fullWidth placeholder='Data de Nasc./Fundação da Empresa'></TextField>
      </Box>

      <Box display="flex" justifyContent="space-between" marginTop={1} gap={1}>
        <Button
          fullWidth
          variant='outlined'
          onClick={backToLogin}
          startIcon={<KeyboardArrowLeftOutlinedIcon />}>
          VOLTAR
        </Button>

        <Button
          fullWidth
          variant='contained'
          endIcon={<ChevronRightOutlinedIcon />}>
          ACESSAR
        </Button>
      </Box>
    </>
  )
}