import { Box, Card, Icon, TextField, Typography, useTheme, Button, Link } from "@mui/material";

export function oldLogin() {

  const theme = useTheme();

  return (
    <Box
      display="flex"
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >

      <Card
        sx={{
          minWidth: theme.spacing(46),
          minHeight: theme.spacing(46),
          display: "flex",
          flexDirection: "column"
        }}
      >

        <Typography variant="h3" fontWeight="bold" textAlign="center" marginTop={2} color="primary">
          Login
        </Typography>

        <Box display="flex" alignItems="flex-end" paddingX={5} marginTop={1}>
          <Icon color="primary">person</Icon>
          <TextField id="input-with-sx" label="Username" variant="standard" placeholder="Type your username" fullWidth />
        </Box>

        <Box display="flex" alignItems="flex-end" paddingX={5} marginTop={2}>
          <Icon color="primary">lock</Icon>
          <TextField id="input-with-sx" label="Password" variant="standard" placeholder="Type your password" type="password" fullWidth />
        </Box>

        <Box display="flex" justifyContent="center" marginTop={3}>
          <Button variant="contained">Entrar</Button>
        </Box>

        <Box flex={1} display="flex" alignItems="flex-end" justifyContent="center" paddingBottom={1}>
          <Link href="#" underline="none">
            Criar uma conta
          </Link>
        </Box>
      </Card >
    </Box >
  )
}