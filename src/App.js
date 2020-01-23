import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "./logo.svg";
import "./App.css";
import { addUserAsync } from "./redux/action";
import { render } from "react-dom";
import * as _ from "lodash";
import { StyledDiv,Image, MainContainer, Name } from "./App.style";

class App extends React.Component {
  componentDidMount(props) {
    this.props.user1("value");
  }
  render() {
    console.log(this.props.characterData, "dataaaaaaa");
    const { characterData } = this.props;

    return (
      <MainContainer>
        {_.map(characterData, (val, key) => {
          return (
            <div>
              <StyledDiv>
              <Image src={val.image}></Image>
                <Name>NAME:{val.name}</Name>
                <Name>STATUS:{val.status}</Name>
                <Name>SPECIES:{val.species}</Name>
                <Name>GENDER:{val.gender}</Name>
                <Name>ORIGIN:{val.origin.name}</Name>
                <Name>LAST LOCATION:{val.location.name}</Name>
              </StyledDiv>
            </div>
          );
        })}
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    characterData: state && state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    user1: value => dispatch(addUserAsync(value))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
