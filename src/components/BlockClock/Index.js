import React, {Component} from 'react';
import './style.css';

class Clock extends Component{

    getTime() {
      var time = new Date();
      return {
        seconds: time.getSeconds(),
        minutes: time.getMinutes(),
        hours: time.getHours(),
        stopped: false
      }
    }
    getInitialState() {
      return this.getTime();
    }
    startClock() {
      var tick = setInterval(this.tick, 500);
      this.setState({
        tick: tick
      });
    }
    tick() {
      this.setState(this.getTime());
    }
    componentDidMount() {
      this.startClock();
    }
    componentWillUnmount() {
      this.setState({
        tick: clearInterval(this.state.tick)
      });
    }
    clearIntervalTest() {
      if (!this.state.stopped) {
        this.setState({
          tick: clearInterval(this.state.tick),
          stopped: true
        });
      } else {
        this.startClock();
        this.setState({
          stopped: false
        });
      }
    }
    render() {
      var seconds = [], minutes = [], hours = [];
      for (var i = 0; i < this.state.seconds; i++) {

        if (i === this.state.seconds - 1) {
          seconds.push(<div className="seconds"><span>{i+1}</span></div>)
        } else {
          seconds.push(<div className="seconds" />)
        }
      }
      for (var i = 0; i < this.state.minutes; i++) {
        if (i == this.state.minutes - 1) {
          minutes.push(<div className="minutes"><span>{i+1}</span></div>)
        } else {
          minutes.push(<div className="minutes" />)
        }
      }
      for (var i = 0; i < this.state.hours; i++) {
        if (i == this.state.hours - 1) {
          hours.push(<div className="hours"><span>{i+1}</span></div>)
        } else {
          hours.push(<div className="hours" />)
        }
      }
        
      return (
        <div className="clock" onClick={this.clearIntervalTest}>
            {hours.map((div) => { return div })}
            {minutes.map((div) => { return div })}
            {seconds.map((div) => { return div })}
        </div>
        );
    }

}
export default Clock;