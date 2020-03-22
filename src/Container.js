import React, { Component } from 'react'
import LoadingSpin from "./componet/Spinner"
import App from './App'




const Content=LoadingSpin(App)



class Container  extends Component {
    state={isLoading:true}
    componentDidMount(){setTimeout(() => this.setState({ isLoading: false }), 1000) }

    render() {
        return (
            <div>
          <Content isLoading={this.state.isLoading} />
  
            </div>
        )
    }
}
export default Container