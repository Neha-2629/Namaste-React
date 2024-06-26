import React from "react";

class EmployeeClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 1
        };
        console.log(this.props.name +"Employee Class Constructor")
    }
    componentDidMount(){
        console.log(this.props.name +"Employee Class Componnet Did Mount")
    }
    render(){
        console.log(this.props.name +"Employee Class Render")
        const {name, age, location} = this.props;
        const {count, count2} = this.state;
        return(
            <div>
                <h2>Hello this is employee from class coponent</h2>
                <h3>Name: {name}</h3>
                <h4>Age: {age}</h4>
                <h4>location: {location}</h4>
                <h4>Count from employee: {count}</h4>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Increase Count</button>
            </div>
        )
    }
}

export default EmployeeClass;
