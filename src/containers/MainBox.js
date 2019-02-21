import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    page: ""
  };

  setPage = event => {
    this.setState({
      page: event.target.id
    });
  };

  returnPage = () => {
    if (this.state.page === "profile") {
      return Profile();
    } else if (this.state.page === "photo") {
      return Photos();
    } else if (this.state.page === "cocktail") {
      return Cocktails();
    } else if (this.state.page === "pokemon") {
      return Pokemon();
    }
  };

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu,
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should have state?
    Which component should have methods to control state? Where should these methods be called?

    */
    console.log(this.state);
    const detailsToDisplay = <div>Hi, I'm a div!</div>;

    return (
      <div>
        <MenuBar setPage={this.setPage} />
        {this.returnPage()}
      </div>
    );
  }
}

export default MainBox;
