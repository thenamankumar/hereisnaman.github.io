import React from 'react';
import styled from 'styled-components';
import { theme, mixins, media, Main, Section } from '../style';

const Card = styled.div`
  max-width: 80%;
  margin: 50px auto;

  ${media.tablet`
    max-width: 100%;
  `};

  .wrap {
    position: relative;
    padding: 30px;
    border-radius: 4px;
    background: #172a45;
    box-shadow: 0 0 140px rgba(255, 255, 255, 0.05);
  }
`;

const ChartCard = ({ children }) => (
  <Card>
    <div className="wrap">{children}</div>
  </Card>
);

export default ChartCard;
