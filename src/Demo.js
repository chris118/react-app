import React from 'react';
import PropTypes from 'prop-types';


function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
    // console.log(items[i]);
  }
  return <div>{items}</div>;// This must be exactly one element or it will warn.
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

class Demo extends React.Component {
  render() {
    return (
      <div className='group-div'>
        <ListOfTenThings/>
      </div>
    );
  }
}

Repeat.propTypes = {
  children: PropTypes.element.isRequired
};


export default Demo;