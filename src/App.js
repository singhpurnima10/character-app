import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "./logo.svg";
import "./App.css";
import { addUserAsync } from "./redux/action";
import { render } from "react-dom";
import * as _ from "lodash";
import {
  StyledDiv,
  Image,
  MainContainer,
  Name,
  Title,
  Value
} from "./App.style";

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
                <Name>
                  <Title>NAME:</Title>
                  <Value>{val.name}</Value>
                </Name>
                <Name>
                  <Title>STATUS:</Title>
                  <Value>{val.status}</Value>
                </Name>
                <Name>
                  <Title>SPECIES:</Title>
                  <Value>{val.species}</Value>
                </Name>
                <Name>
                  <Title>GENDER:</Title>
                  <Value>{val.gender}</Value>
                </Name>
                <Name>
                  <Title>ORIGIN:</Title>
                  <Value>{val.origin.name}</Value>
                </Name>
                <Name>
                  <Title>LAST LOCATION:</Title>
                  <Value>{val.location.name}</Value>
                </Name>
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
