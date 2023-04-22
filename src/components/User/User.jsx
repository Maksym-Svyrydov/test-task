import image from '../../img/img2.png';
import { FollowersBtn } from '../FollowersBtn/Followers';
import { Wrapp, ImgWrap, BgImg, Avatar, List, Item } from './User.styled';
const User = ({ id, avatar, followers, tweets }) => {
  return (
    <Wrapp>
      <ImgWrap>
        <svg width="76 " height="22">
          <use href="src/img/logo.svg#logo"></use>
        </svg>
        <BgImg src={image} />
      </ImgWrap>
      <Avatar src={avatar} alt=""></Avatar>
      <List>
        <Item>{tweets} TWEETS</Item>
        <Item>{followers} FOLLOWERS</Item>
      </List>
      <FollowersBtn id={id} />
    </Wrapp>
  );
};

export default User;
