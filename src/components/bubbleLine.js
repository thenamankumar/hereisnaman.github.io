import React from 'react';
import styled from 'styled-components';
import { theme, mixins, media, Main, Section } from '../style';

const BubbleLineWrap = styled.div`
  width: unset !important;
  margin-bottom: 1em;
  text-align: left;
  &:last-child {
    margin-bottom: 0;
  }
`;

const LineLabel = styled.span`
  flex: 1;
  color: ${theme.colors.white};
  font-size: 18px;
  line-height: 30px;
  vertical-align: middle;
`;

const Line = styled.div`
  display: flex;
  ${media.tablet`
    display: block;
  `};
`;

const BubbleRow = styled.div`
  flex: 3;
`;

const Bubble = styled.div`
  display: inline-block;
  margin-right: 1em;
  width: 30px !important;
  height: 30px;
  border: 1px solid rgba(100, 255, 218, 0.5);
  background: rgba(100, 255, 218, 0.07);
  border-radius: 50%;
  cursor: pointer;

  &.selected {
    border-color: ${theme.colors.green};
    background: ${theme.colors.green};
  }
`;

const BubbleLine = ({ label, total, selected }) => {
  const bubbles = [];

  for (let i = 0; i < Number(total); i++) {
    bubbles.push(<Bubble className={i < Number(selected) ? 'selected' : ''} />);
  }

  return (
    <BubbleLineWrap>
      <Line>
        <LineLabel>{label}</LineLabel>
        <BubbleRow>{bubbles}</BubbleRow>
      </Line>
    </BubbleLineWrap>
  );
};

export default BubbleLine;
