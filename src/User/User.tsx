import { useEffect, useState } from 'react';

interface IUser {
  first: string;
  last: string;
  email: string;
  phone: string;
  image: string;
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
      picture: { large },
    } = randomUser;
    setUser({ first, last, email, phone, image: large });
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
        <section>
          <img src={user?.image} alt="User" />
          <h1 data-testid="firstName">{user?.first}</h1>
          <p data-testid="lastName">{user?.last}</p>
          <p>{user?.phone}</p>
          <p>{user?.email}</p>
        </section>
      )}
      <button onClick={getUser}>Get new user</button>
    </div>
  );
}
