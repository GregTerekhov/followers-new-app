import styled from '@emotion/styled';
import { MdArrowBackIos } from 'react-icons/md';

export const TweetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackLinkIcon = styled(MdArrowBackIos)`
  width: 24px;
  height: 24px;
`;

export const NoTweetsMessage = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 2;
`;
