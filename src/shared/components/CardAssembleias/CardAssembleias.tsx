import { Typography, List, Box, ListItem, ListItemText, Divider } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { CardLayout } from "../../layouts";

import { PieChart } from "../../charts";

export function CardAssembleias() {

  return (
    <CardLayout >
      <Box display="flex" flexDirection="column" height="100%">
        <Typography variant='h6' fontWeight="bold" fontSize={14} display="flex" alignItems="center" gap={1}>
          <PeopleAltIcon sx={{ padding: 0.2 }} fontSize="inherit" />
          Assembleias
        </Typography>

        <Box display="flex" alignItems="center" width="100%">
          <Box maxWidth="120px">
            <PieChart />
          </Box>

          <Box width="100%">
            <List>
              <ListItem disablePadding sx={{ display: "flex", gap: 5 }}>
                <ListItemText>
                  <Typography variant="body2">
                    Número:
                  </Typography>
                </ListItemText>
                <ListItemText sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" fontWeight="bold">
                    10
                  </Typography>
                </ListItemText>
              </ListItem>

              <Divider />

              <ListItem disablePadding>
                <ListItemText>
                  <Typography variant="body2">
                    Venc. Boleto:
                  </Typography>
                </ListItemText>
                <ListItemText sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" fontWeight="bold">
                    16/03
                  </Typography>
                </ListItemText>
              </ListItem>

              <Divider />

              <ListItem disablePadding>
                <ListItemText>
                  <Typography variant="body2">
                    Data Sorteio
                  </Typography>
                </ListItemText>
                <ListItemText sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" fontWeight="bold">
                    21/03
                  </Typography>
                </ListItemText>
              </ListItem>

              <Divider />

              <ListItem disablePadding>
                <ListItemText>
                  <Typography variant="body2">
                    Limite Lances
                  </Typography>
                </ListItemText>
                <ListItemText sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" fontWeight="bold">
                    21/03 - 08:00h
                  </Typography>
                </ListItemText>
              </ListItem>

              <Divider />

              <ListItem disablePadding>
                <ListItemText>
                  <Typography variant="body2">
                    Assembleia
                  </Typography>
                </ListItemText>
                <ListItemText sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" fontWeight="bold">
                    21/03 - 10:00h
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="flex-end" flex={1}>
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" bgcolor="#00788d29">
            <ArrowBackIosOutlinedIcon />

            <Box textAlign="center">
              <Typography variant="body2">
                VEJA SUA CLASSIFICAÇÃO
              </Typography>
              <Typography variant="h6">
                013 - 20/06/2023
              </Typography>
            </Box>

            <ArrowForwardIosOutlinedIcon />
          </Box>
        </Box>
      </Box>
    </CardLayout >
  )
}