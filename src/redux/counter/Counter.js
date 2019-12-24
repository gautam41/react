import React, { Suspense, Component } from "react";
import { connect } from "react-redux";
import { setCounter } from "./counter.action";
//import cardComponent from "../cardComponent";
const CardComponent = React.lazy(() => import("../CardComponent"));
class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Your Counter is :{this.props.count}</h1>
        <button onClick={() => this.props.increment(this.props.count + 1)}>
          Increment
        </button>
        <button onClick={() => this.props.decrement(this.props.count - 1)}>
          Decrement
        </button>
        <button>Reset</button>
        <Suspense fallback={<h1>loading...</h1>}>
          <CardComponent />
        </Suspense>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  count: state.count.count
});
const mapDispatchToProps = dispatch => ({
  increment: count => dispatch(setCounter(count)),

  decrement: count => dispatch(setCounter(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
