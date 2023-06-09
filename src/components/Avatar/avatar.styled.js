import styled from '@emotion/styled';

export const AvatarWrapper = styled.div`
  position: relative;
  min-height: 80px;
  margin-bottom: 34px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 8px;
    width: 100%;
    display: block;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const AvatarImage = styled.img`
  position: absolute;
  display: block;
  z-index: 2;
  width: 80px;
  top: 50%;
  left: 50%;
  margin: auto;
  outline: 8px solid #ebd8ff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;
