/* eslint-disable */
import React, { Component } from 'react';
import projectsData from './projectsdata';


class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentWillMount() {
        this.setState({ data: projectsData });
    }
    render() {
        console.log(this.state.data)
        return (
            <div>

                <ul style={{width:"100%"}}>

                    {/* returns an array from the objects */}
                    {Object.keys(this.state.data)
                        .map(key => 
                            <a href={this.state.data[key].url}>
                            <li 
                            className="fl w-50 pa2"
                            style={{listStyle:"none"}}
                            key={key} 
                            index={key} 
                            details={this.state.data[key]}
                            >
                            <img 
                            src={this.state.data[key].image} 
                            style={{height:"auto",width:"15rem"}} 
                            />
                            <p className="tc">{this.state.data[key].title}</p>
                            </li>
                            </a>
                            )}
                </ul>
                <div
                    data={this.state.data}
                    order={this.state.order}
                    params={this.props.params}
                ></div>

            </div>
        );
    }
};
export default Projects;