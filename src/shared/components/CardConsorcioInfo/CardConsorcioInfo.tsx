import { List, ListItem, ListItemText, Typography, Link, Box, Card, useTheme } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export function CardConsorcioInfo() {
  const theme = useTheme()
  return (
    <>
      <Card sx={{ width: theme.spacing(36), padding: 2 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant='h6' fontWeight="bold" fontSize={14}>
            OLÁ JOÃO VICTOR MENDES
          </Typography>

          <Typography variant='h6' fontSize={14}>
            CONSORCIADO
          </Typography>
        </Box>

        <Box bgcolor="#00788d29" paddingY={0.5} paddingX={1.5} marginTop={1}>
          <Typography fontWeight="bold" variant='body1' fontSize={14}>
            Grupo 000124 - Cota 0030 - Versão 00
          </Typography>
        </Box>

        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemText>
                <Typography fontSize={14} variant='body2'>
                  Valor do Bem
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: 'right' }}>
                <Typography fontSize={14} fontWeight='bold' variant='body2'>
                  R$ 47.900,00
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemText>
                <Typography fontSize={14} variant='body2'>
                  Saldo Devedor
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: 'right' }}>
                <Typography fontSize={14} fontWeight='bold' variant='body2'>
                  R$ 53.963,32
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemText>
                <Typography fontSize={14} variant='body2'>
                  Valores Pagos
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: 'right' }}>
                <Typography fontSize={14} fontWeight='bold' variant='body2'>
                  R$ 2.227,20
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemText>
                <Typography fontSize={14} variant='body2'>
                  Data de Adesão
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: 'right' }}>
                <Typography fontSize={14} fontWeight='bold' variant='body2'>
                  16/01/2023
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemText>
                <Typography fontSize={14} variant='body2'>
                  Previsão de encerramento
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: 'right' }}>
                <Typography fontSize={14} fontWeight='bold' variant='body2'>
                  25/05/2028
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemText>
                <Typography fontSize={14} variant='body2'>
                  Última Parcela
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: 'right' }}>
                <Typography fontSize={14} fontWeight='bold' variant='body2'>
                  17/05/2028
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemText sx={{ textAlign: 'right' }}>
                <Typography fontSize={14} fontWeight='bold' variant='body2'>
                  <Link
                    underline='none'
                    sx={{ cursor: 'pointer' }}
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end">
                    Ver detalhes
                    <ArrowRightAltIcon />
                  </Link>
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>

        <Box marginTop={2}>
          <Typography
            variant='h6'
            fontWeight='bold'
            fontSize={14}
            display="flex"
            alignItems="center">
            <DirectionsCarIcon />
            CRED 157 AUTO 72M
          </Typography>

          <Box width={theme.spacing(36)} marginTop={2}>
            <img
              src='https://blog.deltafiat.com.br/wp-content/uploads/2022/07/cores-de-carro-mobi-1.jpeg'
              alt='Imagem do produto consorciado'
              width="100%"
            />
          </Box>
        </Box>
      </Card>
    </>
  )
}