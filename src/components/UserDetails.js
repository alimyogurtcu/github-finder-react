import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Repos from "./Repos";

class UserDetails extends Component {
  componentDidMount() {
    const { login } = this.props.params;
    this.props.getUser(login);
    this.props.getUserRepos(login);
  }

  render() {
    const { loading, repos } = this.props;
    const {
      name,
      avatar_url,
      location,
      html_url,
      followers,
      following,
      blog,
      public_repos,
      bio,
    } = this.props.user;
    console.log("a");
    if (loading) return <Loading />;

    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={avatar_url} className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-text">{name}</h4>
                  {location && (
                    <>
                      {" "}
                      <p>
                        <i className="fas fa-map-marker-alt"></i> {location}
                      </p>{" "}
                    </>
                  )}
                  <p>
                    <a
                      className="btn btn-block btn-primary btn-sm"
                      href={html_url}
                    >
                      GitHub Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  {bio && (
                    <>
                      <h3>About</h3>
                      <p>{bio}</p>
                    </>
                  )}
                  {blog && (
                    <>
                      <h3>Blog</h3>
                      <p>{blog}</p>
                    </>
                  )}
                  <div>
                    <span className="badge rounded-pill bg-success m-1">
                      Followers: {followers}
                    </span>
                    <span className="badge rounded-pill bg-secondary m-1">
                      Following: {following}
                    </span>
                    <span className="badge rounded-pill bg-info m-1">
                      Public Repos: {public_repos}
                    </span>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <Repos repos={repos} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (props) => <UserDetails {...props} params={useParams()} />;
