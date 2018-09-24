import { Link } from 'gatsby';
import styled from 'styled-components';

const Button = styled(Link)`
  transition: background-color 0.5s ease-in-out;
  background-color: #e74c3c;
  border-radius: 100px;
  color: #fff;
  padding: 15px 35px;
  text-decoration: none;

  &:hover {
    background-color: #FF6756;
  }
`;

export default Button;