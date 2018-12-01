import React, { useState } from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      a: 2
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props, state )
  //   return null;
  // }

  render() {
    console.log(33);
    const props = this.props;
    return (
      <div className="form-wrap">
        <input value={props.todoItem} onChange={props.onChange} />
        <button onClick={props.onSubmit}>Submit</button>


        {this.state.a}
        <button  onClick={()=>{

          this.setState({
            a: 666
          })
        }}>test</button>
      </div>
    );
  }
}

// export default Form;
