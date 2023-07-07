import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { CardLayout } from "../../layouts";

export function MeuRepresentante() {
  return (
    <CardLayout>
      <Box>
        <Typography variant='h6' fontWeight="bold" fontSize={14} display="flex" alignItems="center" gap={1}>
          <ContactSupportOutlinedIcon sx={{ padding: 0.2 }} fontSize="inherit" />
          Meu Representante
        </Typography>
      </Box>

      <Box display="flex" gap={2}>
        <Box>
          <List>
            <ListItem disablePadding >
              <ListItemText>
                <Typography variant="body2">
                  Nome:
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding >
              <ListItemText>
                <Typography variant="body2">
                  Telefone:
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding >
              <ListItemText>
                <Typography variant="body2">
                  Loja Virtual:
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>

        <Box>
          <List>
            <ListItem disablePadding >
              <ListItemText>
                <Typography variant="body2" fontWeight="bold">
                  Nome_7948
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding >
              <ListItemText>
                <Typography variant="body2" fontWeight="bold">
                  Telefone:
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding >
              <ListItemText>
                <Typography variant="body2" fontWeight="bold">
                  ---
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </CardLayout>
  )
}