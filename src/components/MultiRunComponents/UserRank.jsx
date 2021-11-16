/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Timer } from '@mui/icons-material';
import { Box, ButtonBase } from '@mui/material';
import { secondToTimeString } from '../../lib/util/strFormat';
import AccountImage from '../AccountImage';
import { ReactComponent as MedalIcon_MoyeoRun } from '../../assets/svgs/MedalIcon_MoyeoRun.svg';

const RankingBadge = ({ rank }) => {
  return (
    <Box css={rankingBadge}>
      {rank === 1 && <MedalIcon_MoyeoRun />}
      <Box>{rank}위</Box>
    </Box>
  );
};

const UserImage = ({ image, isMe, rank }) => {
  return (
    <Box css={userWrap}>
      <AccountImage isMe={isMe} image={image} />
      <RankingBadge rank={rank} />
    </Box>
  );
};
export default UserImage;

const userWrap = css`
  position: fixed;
  left: 20px;
  top: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const rankingBadge = css`
  margin-top: 17px;
  height: 33px;
  width: 64px;
  border-radius: 3px;
  padding: 7px;
  box-sizing: border-box;
  display: flex;
  color: #ffffff;
  background-color: #1162ff;
`;
