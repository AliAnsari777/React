import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 2},
      {id: 2, value: 4},
      {id: 3, value: 5},
      {id: 4, value: 6},
    ],
  };

  handelDelete = () => {
    console.log("delete handeled");
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.handelDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
