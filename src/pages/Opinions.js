import React from "react";
import "../styles/Opinions.css";
import ButtonOpinions from "../components/ButtonOpinions";
import UsersList from "../components/UsersList";

const userAPI = "https://randomuser.me/api/?results=1";

class Opinions extends React.Component {
  _isMounted = false;

  state = {
    isLoading: true,
    userData: {},
    data: [],
  };


  componentDidMount() {
    this._isMounted = true;
    console.log(this.state.data);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  requestData = async () => {
    await fetch(userAPI)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Niepowodzenie");
      })
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        if (this._isMounted) {
          this.setState({
            userData: {
              ...this.state.userData,
              user,
            },
          });
        }
      });

    await fetch(
      `https://jsonplaceholder.typicode.com/comments/${Math.floor(
        Math.random() * 500
      )}`
    )
      .then((response) => {
        if (response.ok) {
          return response;
        }
      })
      .then((response) => response.json())
      .then((data) => {
        const comment = data;
        if (this._isMounted) {
          this.setState({
            userData: {
              ...this.state.userData,
              comment,
            },
          });
        }
      });
    this.setState({
      data: [...this.state.data, this.state.userData],
    });
    console.log(this.state.data);
  }; 

  render() {
    return (
      <div className="opinions">
        <h1>Opinie klientów</h1>
        <div className="box">
          {this.state.data ? <UsersList data={this.state.data} /> : null}
        </div>
        <ButtonOpinions click={this.requestData} />
      </div>
    );
  }
}

export default Opinions;
