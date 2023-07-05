import { Box, Button, Card, Divider, Typography, useTheme, Link, useMediaQuery } from "@mui/material";

import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import { useState } from "react";
import { BoletoRapido, LoginModeOne, LoginModeTwo, ValoresADevolver } from "../../shared/components";

type Mode = 'Mode1' | 'Mode2' | 'Mode3' | 'Mode4'

export function Login() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const [loginMode, setLoginMode] = useState<Mode>('Mode1')

  const toggleLoginMode = (mode: Mode) => {
    mode === 'Mode1' ? setLoginMode('Mode1') : setLoginMode('Mode2')
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100%">
      <Card sx={{ width: theme.spacing(50) }} elevation={smDown ? 0 : 1}>
        <Box padding={5}>
          <Box>
            <Typography variant="h6" component="h1" fontWeight="bold">
              FAÇA SEU LOGIN
            </Typography>
            <Divider sx={{ width: theme.spacing(3), borderWidth: "2px" }} color={theme.palette.primary.main} />
          </Box>

          {(loginMode !== 'Mode3' && loginMode !== 'Mode4' && (
            <Box display="flex" marginTop={1}>
              <Button
                fullWidth
                variant={loginMode === 'Mode1' ? 'contained' : 'outlined'}
                disableElevation
                sx={{ borderEndEndRadius: 0, borderTopRightRadius: 0, fontWeight: "bold" }}
                onClick={() => toggleLoginMode('Mode1')}>
                CPF/CNPJ
              </Button>

              <Button
                fullWidth
                variant={loginMode === 'Mode2' ? 'contained' : 'outlined'}
                disableElevation sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, fontWeight: "bold" }}
                onClick={() => toggleLoginMode('Mode2')}>
                Grupo/Cota
              </Button>
            </Box>
          ))}

          <Box marginTop={2} display="flex" flexDirection="column" gap={1} component="form">
            {(loginMode === 'Mode1' && (
              <LoginModeOne />
            ))}

            {(loginMode === 'Mode2' && (
              <LoginModeTwo />
            ))}

            {(loginMode === 'Mode3' && (
              <BoletoRapido backToLogin={() => setLoginMode('Mode1')} />
            ))}

            {(loginMode === 'Mode4' && (
              <ValoresADevolver backToLogin={() => setLoginMode('Mode1')} />
            ))}
          </Box>

          {(loginMode !== 'Mode3' && loginMode !== 'Mode4' && (
            <>
              <Box marginTop={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  sx={{ padding: 2, textTransform: "capitalize" }}
                  startIcon={<HorizontalSplitOutlinedIcon />}
                  onClick={() => setLoginMode('Mode3')}
                >
                  Boleto Rápido
                </Button>
              </Box>

              <Divider sx={{ marginY: 3 }} />

              <Box component="nav" display="flex" justifyContent="space-between">
                <Link underline="none" display="flex" alignItems="center">
                  <ChevronRightOutlinedIcon fontSize="small" />
                  Esqueci minha senha
                </Link>
                <Link
                  underline="none"
                  display="flex"
                  alignItems="center"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setLoginMode('Mode4')}>
                  <ChevronRightOutlinedIcon fontSize="small" />
                  Valores a devolver
                </Link>
              </Box>
            </>
          ))}
        </Box>
      </Card>
    </Box>
  )
}