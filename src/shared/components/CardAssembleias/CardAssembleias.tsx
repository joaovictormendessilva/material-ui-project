import { Typography, List, Box, ListItem, ListItemText } from "@mui/material";
import { CardLayout } from "../../layouts";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export function CardAssembleias() {
  return (
    <CardLayout >
      <Typography variant='h6' fontWeight="bold" fontSize={14} display="flex" alignItems="center" gap={1}>
        <PeopleAltIcon sx={{ padding: 0.2 }} fontSize="inherit" />
        Assembleias
      </Typography>

      <Box>
        <List>
          <ListItem disablePadding>
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
    </CardLayout>
  )
}