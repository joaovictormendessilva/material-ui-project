import { Box, Grid } from '@mui/material'
import { CardAnteciparQuitar, CardAssembleias, CardConsorcioInfo, CardExtrato, CardOfertaLance, CardSegundaViaBoleto } from '../../shared/components';

export function Dashboard() {

  return (
    <Box padding={2}>
      <Grid container spacing={1} >
        <Grid item lg={3} md={12} sm={12} container>
          <Grid item display="flex">
            <CardConsorcioInfo />
          </Grid>
        </Grid>

        <Grid item lg={7} md={12} sm={12}>

          <Grid item container spacing={1} md={12}>
            <Grid item display="flex" flexDirection="column" gap={1} lg={6} md={6} sm={6} xs={12}>
              <CardOfertaLance />
              <CardSegundaViaBoleto />
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12} display="flex">
              <CardAssembleias />
            </Grid>
          </Grid>

          <Grid item container spacing={1} marginTop={1} md={12} >
            <Grid item display="flex" lg={6} md={6} sm={6} xs={12}>
              <CardExtrato />
            </Grid>

            <Grid item display="flex" flexDirection="column" gap={1} lg={6} md={6} sm={6} xs={12}>
              <CardAnteciparQuitar />
              <CardAnteciparQuitar />
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Box >
  )
}