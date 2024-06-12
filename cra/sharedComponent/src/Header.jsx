import styled from 'styled-components';

const Title = styled('h1')`
  text-align: center;
  font-family: 'Paytone One', sans-serif;
  font-size: 40px;
`;

const Links = styled('ul')`
  display: flex;
  font-family: 'Oswald', sans-serif;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  padding: 8px 32px;
  list-style: none;

  a {
    text-decoration: none;
  }

  .active a {
    text-decoration: underline;
  }
`;

const Header = ({ title }) => {
  const links = [
    {
      id: 1,
      name: 'Host',
      url: 'http://localhost:3000/',
    },
    {
      id: 2,
      name: 'Remote',
      url: 'http://localhost:3002/',
    },
    {
      id: 3,
      name: 'Shared',
      url: 'http://localhost:3010/',
    },
  ];

  return (
    <div>
      <nav>
        <Links>
          {links.map(link => (
            <li key={link.id} className={link.name === title ? 'active' : ''}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </Links>
      </nav>
      <Title>{title}</Title>
    </div>
  );
};
export default Header;
