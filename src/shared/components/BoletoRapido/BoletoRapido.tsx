import { Typography, Box, TextField, Button } from '@mui/material'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

interface IBoletoRapidoProps {
  backToLogin: () => void
}

export function BoletoRapido({ backToLogin }: IBoletoRapidoProps) {
  return (
    <>
      <Typography variant='h6' fontSize={14} component="label">
        Digite abaixo os dados para gerar os boletos de cobrança:
      </Typography>

      <Box>
        <TextField size='small' fullWidth placeholder='CPF/CNPJ'></TextField>
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