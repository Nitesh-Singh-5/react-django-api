import React from "react";

class AddTodo extends React.Component {
  state = {
    item: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.item === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addTodoHandler(this.state);
    console.log(this.state);
    this.setState({ item: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Today's Plan</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>To-do</label>
            <input
              type="text"
              name="Todo"
              placeholder="Todo"
              value={this.state.item}
              onChange={(e) => this.setState({ item: e.target.value })}
            />
          </div>
          {/* <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div> */}
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
