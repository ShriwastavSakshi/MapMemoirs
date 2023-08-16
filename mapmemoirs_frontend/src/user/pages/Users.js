import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Sakshi Shriwastav',
      image:
        'https://media.licdn.com/dms/image/D5603AQEebDh5h7RvQg/profile-displayphoto-shrink_800_800/0/1674672908976?e=2147483647&v=beta&t=skUtIHrp9Ph9tZLJUhv5Woe37e8X4XmlFkajRY3BOnM',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
