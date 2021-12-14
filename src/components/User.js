import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id,name,login,avatar_url,location,html_url,followers,following,blog,public_repos,bio} = this.props.user;
        return (
            <div className="col-md-4 col-sm-6 col-lg-3">
                <div className="card mt-2">
                    <img src={avatar_url} alt="" className='img-fluid'/>
                        <div className="card-body">
                        <h5 className='card-title'>{login}</h5>
                        {/* <p className="card-text">Followers: {followers}</p>
                        <p className="card-text">Blog: {blog}</p> */}
                        <Link to={`/user/${login}`} className='btn btn-primary btn-sm'>Go Profile</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
