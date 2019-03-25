import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import PropTypes from 'prop-types';

import DropdownControl from './DropdownControl';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      date: new Date('2019-02-01T03:50'),
      time: '6:50 am',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { avgWaitHandler } = this.props;
    const { selected, date, time } = this.state;
    avgWaitHandler({ ...selected }, date, time);
  }

  onChange = date => this.setState({ date });

  handleSelected =(selectedValue, prettyName) => {
    const { selected } = this.state;
    const selectedCopy = { ...selected };
    selectedCopy[prettyName] = selectedValue;
    this.setState({ selected: selectedCopy });
  }

  handleTimeChange(newTime) {
    this.setState({ time: newTime.formatted });
  }

  // toggleTimekeeper(val) {
  //   // this.setState({ displayTimepicker: val });
  // }

  render() {
    const { date } = this.state;

    return (
      <div>
        <div className="controls-wrapper">
          <DatePicker value={date} onChange={this.onChange} />
          {/* <div>
              {this.state.displayTimepicker ?
                  <TimeKeeper
                      time={this.state.time}
                      onChange={this.handleTimeChange}
                      onDoneClick={() => {
                          this.toggleTimekeeper(false)
                      }}
                      switchToMinuteOnHourSelect={true}
                  />
                  :
                  false
              }
              <span>Time is {this.state.time}</span>
              <button onClick={() => this.toggleTimekeeper(true)}>Modify Time</button>
          </div> */}
          <DropdownControl handleSelected={this.handleSelected} obj={[{ prettyName: 'Route' }, { name: 'route' }, { options: [12] }, { variant: 'primary' }]} />
          <DropdownControl handleSelected={this.handleSelected} obj={[{ prettyName: 'From Stop' }, { name: 'from-stop' }, { options: [{"option":"Jackson St & Van Ness Av s","value":"7941"},{"option":"Pacific Ave & Van Ness Ave","value":"5859"},{"option":"Pacific Ave & Polk St","value":"5851"},{"option":"Pacific Ave & Larkin St","value":"5844"},{"option":"Pacific Ave & Hyde St","value":"5839"},{"option":"Pacific Ave & Leavenworth St","value":"5846"},{"option":"Pacific Ave & Jones St","value":"5841"},{"option":"Pacific Ave & Taylor St","value":"5857"},{"option":"Pacific Ave & Mason St","value":"5848"},{"option":"Pacific Ave & Powell St","value":"5853"},{"option":"Broadway & Stockton St","value":"3087"},{"option":"Broadway & Columbus Ave","value":"3082"},{"option":"Broadway & Montgomery St","value":"3084"},{"option":"Broadway & Sansome St","value":"7862"},{"option":"Sansome St & Jackson St","value":"7863"},{"option":"Sansome St & Clay St","value":"6328"},{"option":"Sansome St & California St","value":"6327"},{"option":"Sansome St & Sutter St","value":"6334"},{"option":"2nd St & Howard St","value":"3011"},{"option":"Harrison St & 2nd St","value":"4966"},{"option":"Harrison St & 3rd St","value":"4967"},{"option":"Harrison St & 4th St","value":"4968"},{"option":"Harrison St & 5th St","value":"4969"},{"option":"Harrison St & 6th St","value":"4970"},{"option":"Harrison St & 7th St","value":"4971"},{"option":"Harrison St & 8th St","value":"4972"},{"option":"Harrison St & 9th St","value":"4973"},{"option":"11th St & Harrison St","value":"3238"},{"option":"Folsom St & 11th St","value":"4665"},{"option":"Folsom St & 14th St","value":"4666"},{"option":"Folsom St & 16th St","value":"4669"},{"option":"Folsom St & 18th St","value":"4672"},{"option":"Folsom St & 20th St","value":"7732"},{"option":"Folsom St & 22nd St","value":"4676"},{"option":"Folsom St & 24th St","value":"7312"},{"option":"Folsom St & 25th St","value":"4680"},{"option":"Cesar Chavez St & Folsom St","value":"3931"},{"option":"Cesar Chavez St & South Van Ness Ave","value":"3936"},{"option":"Cesar Chavez St & Mission St","value":"3935"},{"option":"Valencia St & Cesar Chavez St","value":"6881"},{"option":"Valencia St & 25th St","value":"6878"},{"option":"24th St & Valencia St","value":"3486"},{"option":"24th St & Mission St","value":"3477"},{"option":"24th St & Mission St","value":"33476"},{"option":"24th St & Mission St","value":"3476"},{"option":"Valencia St & 24th St","value":"6877"},{"option":"Valencia St & 25th St","value":"6879"},{"option":"Cesar Chavez St & Valencia St","value":"7592"},{"option":"Cesar Chavez St & Mission St","value":"7551"},{"option":"Folsom St & Cesar Chavez St","value":"7552"},{"option":"Folsom St & 25th St","value":"4681"},{"option":"Folsom St & 24th St","value":"4677"},{"option":"Folsom St & 22nd St","value":"4675"},{"option":"Folsom St & 20th St","value":"7733"},{"option":"Folsom St & 18th St","value":"4671"},{"option":"Folsom St & 16th St","value":"4668"},{"option":"Folsom St & 14th St","value":"4667"},{"option":"Folsom St & 11th St","value":"4664"},{"option":"Folsom St & 9th St","value":"4663"},{"option":"Folsom St & 8th St","value":"4662"},{"option":"Folsom St & 7th St","value":"4661"},{"option":"Folsom St & 6th St","value":"4660"},{"option":"Folsom St & 5th St","value":"4659"},{"option":"Folsom St & 4th St","value":"4658"},{"option":"Folsom St & 3rd St","value":"4657"},{"option":"2nd St & Stevenson St","value":"7549"},{"option":"Sansome St & Sutter St","value":"7550"},{"option":"Sansome St & Pine St","value":"6332"},{"option":"Sansome St & Sacramento St","value":"6333"},{"option":"Sansome St & Washington St","value":"6337"},{"option":"Pacific Ave & Sansome St","value":"5854"},{"option":"Pacific Ave & Montgomery St","value":"5849"},{"option":"Pacific Ave & Kearny St","value":"5842"},{"option":"Pacific Ave & Grant Ave","value":"5837"},{"option":"Pacific Ave & Stockton St","value":"7737"},{"option":"Pacific Ave & Powell St","value":"5852"},{"option":"Pacific Ave & Mason St","value":"5847"},{"option":"Pacific Ave & Taylor St","value":"5856"},{"option":"Pacific Ave & Jones St","value":"5840"},{"option":"Pacific Ave & Leavenworth St","value":"5845"},{"option":"Pacific Ave & Hyde St","value":"5838"},{"option":"Pacific Ave & Larkin St","value":"5843"},{"option":"Pacific Ave & Polk St","value":"5850"},{"option":"Jackson St & Polk St","value":"7203"},{"option":"Jackson St & Van Ness Av s","value":"37941"}]},{ variant: 'secondary' }]} />
          <DropdownControl handleSelected={this.handleSelected} obj={[{ prettyName: 'Direction' }, { name: 'direction' }, { options: ['inbound', 'outbound'] }, { variant: 'info' }]} />
        </div>
        <div className="center">
          <button type="submit" onClick={this.onSubmit}> Run Query </button>
        </div>
      </div>
    );
  }
}

ControlPanel.propTypes = {
  avgWaitHandler: PropTypes.func.isRequired,
};

export default ControlPanel;
