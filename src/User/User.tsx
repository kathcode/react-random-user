import { useEffect, useState } from 'react';

interface IUser {
  first: string;
  last: string;
  email: string;
  phone: string;
  image: IUserImage;
}

interface IUserImage {
  thumbnail: string;
}

export default function User() {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const getUser = async () => {
    const data = await fetch('https://randomuser.me/api/');
    const {
      results: [randomUser],
    } = await data.json();

    const {
      email,
      phone,
      name: { last, first },
      picture: { thumbnail },
    } = randomUser;
    setUser({ first, last, email, phone, image: thumbnail });
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      {loading ? (
        <p data-testid="loading">Loading...</p>
      ) : (
        <h1 data-testid="firstName">{user?.first}</h1>
      )}
    </div>
  );
}
