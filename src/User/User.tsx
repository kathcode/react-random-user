import { useEffect, useState } from 'react';
import { IUser } from './interfaces';
import UserCard from './UserCard/UserCard';

export default function User() {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const getUser = async () => {
    setLoading(true);
    const data = await fetch('https://randomuser.me/api/');
    const {
      results: [randomUser],
    } = await data.json();

    const {
      email,
      phone,
      name: { last, first },
      picture: { large },
    } = randomUser;
    setUser({ firstName: first, lastName: last, email, phone, image: large });
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      {user && <UserCard user={user} getUser={getUser} isLoading={loading} />}
    </div>
  );
}
