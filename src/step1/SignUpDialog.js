import React from 'react';
import styled from 'styled-components';

const FancyBorder = styled.div`
	padding: 10px 10px;
	margin:0 auto;
  width: 300px;
	border: 2px solid;
	border-color: ${props => props.color};
`;

function Dialog(props) {
  return (
    <FancyBorder color="grey">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <div class='group-div'>
        <p>SignUpDialog: 属性和组合</p>
        <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
          <input value={this.state.login}
                 onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </Dialog>
      </div>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

export default SignUpDialog;