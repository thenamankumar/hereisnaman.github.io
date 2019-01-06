import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import styled from 'styled-components';
import { FaPlay, FaRedo, FaArrowUp, FaArrowDown } from 'react-icons/fa/';

import 'brace/mode/javascript';
import 'brace/theme/clouds_midnight';

import { theme, media } from '../style';

const EditorWrap = styled.div`
  max-width: 80%;
  margin: 50px auto;

  .wrap {
    position: relative;
    padding: 15px;
    border-radius: 4px;
    background: #172a45;
    box-shadow: 0 0 140px rgba(255, 255, 255, 0.05);
  }
  .ace_editor {
    color: #a8b2d1;
    background: #172a45;
    .ace_scroller {
      z-index: 9;
    }

    .ace_selection {
      padding: 15px;
      background: ${theme.colors.navy}!important;
    }
  }
  ${media.tablet`
    max-width: 100%;
  `}
`;

const EditorHeader = styled.div`
  text-align: right;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 99;
  display: inline;
  width: auto !important;
  background-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(23, 42, 69, 0.5) 50%,
    #172a45 100%
  );
  height: 20px;
`;

const Action = styled.button`
  border: none;
  padding: 0;
  margin-left: 15px;
  flex: 1;
  background: none;
  color: ${theme.colors.green};
  font-size: ${theme.fontSizes.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  &.run {
    color: #e92e2e;
    &:hover {
      color: #841b1b;
    }
  }
  &.reset:hover {
    color: #0a192f;
  }
  svg {
    display: inline;
    width: ${theme.fontSizes.medium};
    height: ${theme.fontSizes.medium};
    cursor: pointer;
    vertical-align: middle;
  }
`;

const Output = styled.div`
  width: 100%;
  border-top: 2px solid #1d304a;
  font-size: ${theme.fontSizes.medium};
  padding-top: 10px;
  .title {
    color: ${theme.colors.green};
    margin: 0;
    margin-bottom: 10px;
    svg {
      display: inline;
      width: ${theme.fontSizes.small};
      height: ${theme.fontSizes.small};
      cursor: pointer;
      vertical-align: bottom;
      color: #8892b0;
      position: absolute;
      right: 15px;
      transition: all 0.2s ease;
      &:hover {
        color: #e92e2e;
      }
    }
  }
  .print {
    margin: 0;
    background: #0a192f;
    padding: 10px;
    color: #a8b2d1;
    border-radius: 4px;
    max-height: 200px;
    overflow: auto;
  }
`;

const Spinner = styled.div`
  position: relative;
  width: 16px !important;
  height: 16px;
  display: inline-block;

  &:before,
  &:after {
    content: '';
    display: block;
  }

  @keyframes pulse {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.3);
      opacity: 0;
    }

    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }

  @keyframes pulse-2 {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }

  .circle {
    border-radius: 100px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
   }
   .circle-1 {
    width: 180%;
    height: 180%;
    background-color: #e92e2e;
    left: -40%;
    -webkit-animation: pulse 1.6s linear 0s infinite;
            animation: pulse 1.6s linear 0s infinite;
  }
  .circle-2 {
    width: 120%;
    height: 120%;
    background-color: #e92e2e;
    top: 20%;
    -webkit-animation: pulse-2 1.6s linear 0s infinite;
            animation: pulse-2 1.6s linear 0s infinite;
  }
  .circle-3 {
    width: 80%;
    height: 80%;
    background-color: #e92e2e;
    top: 40%;
  }
}
`;

const Loader = props => (
  <Spinner {...props}>
    <div class="circle circle-1" />
    <div class="circle circle-2" />
    <div class="circle circle-3" />
  </Spinner>
);

class Editor extends React.Component {
  constructor(props) {
    super(props);

    const raw = props.children[0];
    const code = raw.substr(1, raw.length - 1);

    this.state = {
      code: code,
      saved: code,
      output: '',
      showOutput: false,
      running: false,
    };
    this.jsWorkerRef = null;
    this.execPromiseRef = null;
  }

  handleCodeChange = code => this.setState({ code });

  handleCodeReset = () => this.setState({ code: this.state.saved });

  handleCodeRun = async () => {
    const { code } = this.state;

    await this.setState({
      running: true,
    });

    var jsWorker = new Worker('/workers/jsWorker.js');

    this.jsWorkerRef = jsWorker;

    jsWorker.postMessage({ code });

    const execPromise = new Promise(resolve => {
      jsWorker.onmessage = e => {
        const output = e.data;

        this.setState(state => {
          if (state.running) {
            return { output, running: false, showOutput: true };
          }
        });

        resolve(output);
      };
    });
    this.execPromiseRef = execPromise;

    return execPromise;
  };

  handleHideOutput = () => this.setState({ showOutput: false });

  handleStopExec = () => {
    const { running } = this.state;

    if (running) {
      try {
        this.jsWorkerRef.terminate();
        this.setState({
          running: false,
        });
      } catch (e) {}
    }
  };

  render() {
    const { code, output, running, showOutput } = this.state;

    return (
      <EditorWrap>
        <div className="wrap">
          <EditorHeader>
            <Action
              className="reset"
              title="Reset"
              onClick={this.handleCodeReset}
              disabled={running}>
              <FaRedo />
            </Action>
            <Action className="run" onClick={running ? this.handleStopExec : this.handleCodeRun}>
              {running ? <Loader /> : <FaPlay />}
            </Action>
          </EditorHeader>
          <AceEditor
            mode="javascript"
            theme="clouds_midnight"
            value={code}
            onChange={this.handleCodeChange}
            wrapEnabled={true}
            readOnly={running}
            showGutter={false}
            showPrintMargin={false}
            tabSize={2}
            fontSize={14}
            width="100%"
            height={`${Math.max(150, (code.match(/\n/g) || []).length * 19.16 + 30)}px`}
          />
          {showOutput && (
            <Output>
              <div className="title">
                Output:
                <FaArrowUp onClick={this.handleHideOutput} />
              </div>
              <p className="print">
                {(output || []).map(val => (
                  <div>{val}</div>
                ))}
              </p>
            </Output>
          )}
        </div>
      </EditorWrap>
    );
  }
}

export default Editor;
