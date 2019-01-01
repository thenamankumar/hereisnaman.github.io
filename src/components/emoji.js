import React from 'react';
import { Twemoji } from 'react-emoji-render';

const Emoji = props => <Twemoji text={props.children.toString()} svg onlyEmojiClassName="emoji" />;

export default Emoji;
