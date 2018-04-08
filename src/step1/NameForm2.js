import React from 'react';

class NameForm2 extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class='group-div'>
        <p>NameForm2: 非受控组件</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input defaultValue="chris" type="text" ref={(input) => this.input = input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NameForm2;