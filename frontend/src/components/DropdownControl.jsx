import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';

class DropdownControl extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: [], selectedOption:null, selectedValue: null};
  }

  componentDidMount() {
    /*
    const {obj} = this.props;
    //const [prettyName] = obj;
    this.setState({selectedValue:obj[1].prettyName});
    */
  }

  handleSelectedValue = (event, selectedOption, selectedValue) => {
    const { obj, handleSelected } = this.props;
    const [prettyName] = obj;
    this.setState({ selectedValue:selectedValue, selectedOption:selectedOption });
    handleSelected(selectedValue, prettyName.prettyName);
  }

  render() {
    const { selected, selectedOption } = this.state;
    const { obj } = this.props;
    const [
      prettyName,
      name,
      options,
      variant,
    ] = obj;

    const dropdownId = `${name.name}-dropdown`;
    const shownValue = selectedOption == null ? prettyName.prettyName : selectedOption;
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant={variant.variant} id={dropdownId}>
            {shownValue}
          </Dropdown.Toggle>
          {selected}
          <Dropdown.Menu>
            {
              options.options.map(value => {
                if(typeof value !== 'object') {
                 return (<Dropdown.Item onClick={(event) => this.handleSelectedValue(event, value, value)} eventKey={value} href="#">{value}</Dropdown.Item>
              )
            }
             return (<Dropdown.Item onClick={(event) => this.handleSelectedValue(event, value.option, value.value) } eventKey={value.value} href="#">{value.option}</Dropdown.Item>)

            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

DropdownControl.propTypes = {
  obj: PropTypes.instanceOf(Array).isRequired,
  handleSelected: PropTypes.func.isRequired,
};

export default DropdownControl;
