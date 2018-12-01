import React from 'react'

export const Table = (ComposedComponent) => {
    return class extends React.Component {
      constructor(props) {
          super(props)
      }  
      componentDidMount() {
          console.log('componentDidMount');
      }
      render() {
        return (
            <ComposedComponent {...this.props}/>
        )
      }
    }      
}