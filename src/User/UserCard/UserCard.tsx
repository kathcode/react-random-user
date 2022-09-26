import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Card,
  LinearProgress,
} from '@mui/material';
import { IUser } from '../interfaces';
import './userCard.css';

interface UserCardProps {
  user: IUser;
  getUser: () => void;
  isLoading: boolean;
}

export default function UserCard({
  user: { image, firstName, lastName, phone, email },
  getUser,
  isLoading,
}: UserCardProps) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '10px' }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent className="content-card">
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            data-testid="firstName"
            className="firstName"
          >
            {firstName}
          </Typography>
          <Typography variant="h4" data-testid="lastName" className="lastName">
            {lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={getUser}>
            Get new user
          </Button>
        </CardActions>
      </Card>
      {isLoading && <LinearProgress data-testid="loading" />}
    </>
  );
}
