import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import styled from 'styled-components';

import 'brace/mode/javascript';
import 'brace/theme/clouds_midnight';

import { theme, media } from '../style';

const EditorWrap = styled.div`
  max-width: 75%;
  margin: 50px auto;

  .ace_editor {
    border-radius: 4px;
    background: #172a45;
    box-shadow: 0 0 140px rgba(255, 255, 255, 0.05);
    .ace_scroller {
      padding: 15px;
      z-index: 9;
    }

    .ace_selection {
      padding: 15px;
      background: ${theme.colors.navy}!important;
    }

    .ace_cursor-layer {
      display: none;
    }
  }
  ${media.tablet`
    max-width: 100%;
  `}
`;

const Editor = props => {
  const raw = props.children[0];
  const code = raw.substr(1, raw.length - 1);

  return (
    <EditorWrap>
      <AceEditor
        mode="javascript"
        theme="clouds_midnight"
        value={code}
        readOnly={true}
        showGutter={false}
        showPrintMargin={false}
        highlightActiveLine={false}
        fontSize={14}
        width="100%"
        height={`${(code.match(/\n/g) || []).length * 19.16 + 30}px`}
      />
    </EditorWrap>
  );
};

export default Editor;
