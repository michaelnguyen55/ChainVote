
import React, { Component } from "react";
import { Button, Jumbotron } from "reactstrap";
import "../../components/Header";
import API from "../../utils/API";
import {
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
  FormGroup,
} from "reactstrap";
import "./vote.css"

const UAuthEmail = localStorage.getItem("UAuthE");
const UAuthLogger = JSON.parse(localStorage.getItem("UAuthL"));
const VoteCheck = () => {
  console.log(UAuthEmail);
  let hasVoted = true;
  API.getVoter({email: UAuthEmail})
    .then(res => {
      console.log(res.data.hasVoted);
      hasVoted = res.data.hasVoted;
    })
    .catch(err => console.log(err));
  
  if (hasVoted === true) {
    return true;
  } else {
    return false;
  }
};
const Logger = VoteCheck();
//ISSUES
// STILL CANNOT CAPTURE THE VALUE INPUT MADE BY THE USER
// NEED TO INTEGRATE THE SESSION ID


class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voter: "",
      value: "",
      total: [],
      hasVoted: Logger
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  //need to name select input bar
  // add to state object
  // give an initial value

  getVotes = () => {
    API.getBlockChain()
      .then(res => {
        console.log(res.data)
        this.setState({
          total: res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };

  handleFormSubmit = event => {
    alert("You chose: " + this.state.value + " as your favorite project");
    console.log(this.state.total);
    event.preventDefault();
    API.saveBlockChain({
      voter: "Nash",
      vote: this.state.value
    })
      .then(res => this.getVotes())
      .catch(err => console.log(err));
  };


  render() {
<<<<<<< HEAD
    return (
      <div>
        <Jumbotron>
          <h2 className="text-center">Chris' Class</h2>
        </Jumbotron>
        <form className="text-center" onSubmit={this.handleFormSubmit}>
<<<<<<< HEAD
        <label>
<<<<<<< HEAD
         Pick your favorite project:
          <select value={this.state.value} onChange={this.VoteSave}>
            <option value="Eatneat">EatNeat</option>
            <option value="Chainvote">ChainVote</option>
=======
         Pick your favorite project:    
          <select value={this.state.value} name="vote" onChange={this.handleInputChange}>
            <option value="Chainvote">Chain Vote</option>
            <option value="Chores">Chores</option>
            <option value="Eatneat">Eat Neat</option>
            <option value="Helloworld">Hello World</option>
>>>>>>> 0b80add7cff91b398bf9e6b175a86194a08fbeb9
          </select>
        </label>
        <div className="text-center">
        <Button color="danger" size="lg" input type="submit">Submit </Button>
        </div>
      </form>
     
        </div>


        )
    }
=======
          {/* <label>
            Pick your favorite project:
            <select
              value={this.state.value}
              name="vote"
              onChange={this.handleInputChange}
            >
              <option value="Chainvote">Chain Vote</option>
              <option value="Chores">Chores</option>
              <option value="Eatneat">Eat Neat</option>
              <option value="Eatneat">Hello World</option>
              <option value="Eatneat">Snippets</option>
              <option value="Helloworld">Vibez</option>
            </select>
          </label> */}
=======

    const voted = this.state.hasVoted;
    const VotePage = this.props.hasVoted ?
      (
        <div>
          <Jumbotron>
            <h1 className="text-center">Uh oh! It looks like you've already voted!</h1>
          </Jumbotron >
        </div >
      ) : (
        <div>
          <Jumbotron>
            <h1 className="text-center">Projects' Election</h1>
          </Jumbotron>

>>>>>>> b6ec159de3a3cc6ae235dabbaa7e36e5e1cc6b93
          <FormGroup>
            <CardDeck>

              {/* FIRST CANDIDATE =======================================================*/}
              {/* ========================================================================*/}
              <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
                <CardImg
                  top
                  width="100%"
                  height="100%"
                  margin-left="auto"
                  margin-right="auto"
                />
                <CardBody>
                  <CardTitle>Chain Vote</CardTitle>
                  <CardSubtitle>Block Chain Voting System</CardSubtitle>
                  <Button value="chainvote" onClick={this.handleInputChange}>Vote</Button>
                </CardBody>
              </Card>


              {/* SECOND CANDIDATE =======================================================*/}
              {/* ========================================================================*/}
              <Card body inverse style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Chores</CardTitle>
                  <CardSubtitle>Organize you todo list</CardSubtitle>
                  <Button value="chores" onClick={this.handleInputChange}>Vote</Button>
                </CardBody>
              </Card>


              {/* THIRD CANDIDATE =======================================================*/}
              {/* =======================================================================*/}
              <Card body inverse style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Eat Neat</CardTitle>
                  <CardSubtitle>Eat healthy and delicious. Eat Neat!</CardSubtitle>
                  <Button value="eatneat" onClick={this.handleInputChange}>Vote</Button>
                </CardBody>
              </Card>
            </CardDeck>

            {/*  ========================================================================================================== */}
            {/*  ========================================================================================================== */}

            <CardDeck className="bottomDeck">
              {/* FOURTH CANDIDATE =======================================================*/}
              {/* ========================================================================*/}
              <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
                <CardImg className="cards"
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody className="cards">
                  <CardTitle value="helloworld">Hello World</CardTitle>
                  <CardSubtitle>Travel to interesting places!</CardSubtitle>
                  <Button value="helloworld" onClick={this.handleInputChange}>Vote</Button>
                </CardBody>
              </Card>


              {/* FIFTH CANDIDATE =======================================================*/}
              {/* =======================================================================*/}
              <Card
                body
                inverse
                style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
              >
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody className="cards">
                  <CardTitle value="snippets">Snippets</CardTitle>
                  <CardSubtitle>Search & Post Tutorials</CardSubtitle>
                  <Button value="snippets" onClick={this.handleInputChange}>Vote</Button>
                </CardBody>
              </Card>


              {/* SIXTH CANDIDATE =======================================================*/}
              {/* =======================================================================*/}
              <Card
                body
                inverse
                style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
              >
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody className="cards">
                  <CardTitle value="vibez">Vibez</CardTitle>
                  <CardSubtitle>Make friends with the same music taste.</CardSubtitle>
                  <Button value="vibez" onClick={this.handleInputChange}>Vote</Button>
                </CardBody>
              </Card>
            </CardDeck>
          </FormGroup>


          {/* SUBMIT YOUR VOTE BUTTON ===============================================*/}
          {/* =======================================================================*/}
          <div className="text-center">
            <Button color="danger" size="lg" block input type="submit" onClick={this.handleFormSubmit}>
              Submit{" "}
            </Button>
          </div>
        </div>
      );

    return (<div>
              {VotePage}
            </div>
    );
>>>>>>> 5f70e117844f552a8ccdff14fd15d96ab41077de
  }
}

export default Vote;