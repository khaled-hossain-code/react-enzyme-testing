import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount(){
      this.shouldRedirectToHome();
    }

    componentDidUpdate(){
      this.shouldRedirectToHome();
    }

    shouldRedirectToHome(){
      if(!this.props.isAuthenticated){
        this.props.history.push('/');
      }
    }

    render(){
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.isAuthenticated
    }
  }

  return connect(mapStateToProps)(ComposedComponent);
};
