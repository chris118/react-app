import React from 'react';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    alert('isGoing: '.concat(this.state.isGoing).concat('  ').concat('numberOfGuests: ').concat(this.state.numberOfGuests));
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div class='group-div'>
        <p>Reservation: 受控组件4</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}/>
          </label>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Reservation;