import React from 'react';



class AgeCalculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dob: new Date("1999-01-07"),
        age: null
      };
    }
  
    componentDidMount() {
      this.calculateAge();
    }
  
    calculateAge() {
      const today = new Date();
      const ageInMilliseconds = today - this.state.dob;
      const ageInSeconds = ageInMilliseconds / 1000;
      const ageInMinutes = ageInSeconds / 60;
      const ageInHours = ageInMinutes / 60;
      const ageInDays = ageInHours / 24;
      const ageInYears = ageInDays / 365;
  
      this.setState({
        age: Math.floor(ageInYears)
      });
    }
  
    render() {
      return (
        <div>
          <p>
          <i class="fa-solid fa-cake-candles"></i>
          {this.state.age}</p>
        </div>
      );
    }
  }
  
  export default AgeCalculator;