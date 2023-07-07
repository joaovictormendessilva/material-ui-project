import { Card } from "@mui/material";

interface ICardLayoutProps {
  children: React.ReactNode
}

export function CardLayout({ children }: ICardLayoutProps) {

  return (
    <Card sx={{ flex: 1, padding: 2 }}>
      {children}
    </Card>
  )
}