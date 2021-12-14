import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import Alert from './Alert'
import UserDetails from './UserDetails'

export class App extends Component {

    constructor(props) {
        super(props);
        this.searchUsers = this.searchUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getUserRepos = this.getUserRepos.bind(this);
        this.state = {
            loading: false,
            users: [],
            user: {},
            repos: [],
            alert: null
        }

    }

    getUser(username) {
        this.setState( { loading:true } );

        axios
            .get(`https://api.github.com/users/${username}`)
            .then((res) => this.setState( { user: res.data, loading: false, alert: null } ));
    }

    getUserRepos(username) {
        this.setState( { loading:true } );
        
        axios
            .get(`https://api.github.com/users/${username}/repos`)
            .then(res => this.setState( { repos: res.data, loading: false, alert: null } ));
    }

    searchUsers(username) {
        this.setState( { loading: true, users: [] } );

        axios
            .get(`https://api.github.com/search/users?q=${username}`)
            .then(res => {
                if(res.data.items.length < 1) {
                    this.setAlert(`"${username}" not found!`, "info")
                    this.setState( { loading: false } )
                } else
                this.setState( { users: res.data.items, loading: false, alert: null } )});
            
    }

    clearUsers() {
        this.setState( { users: [] } )
    }

    setAlert(msg,type) {
        setTimeout(() => {
            this.setState({ alert: null })
        }, 2000);
        this.setState({ alert: { msg, type } })
    }

    render() {
        return (
            <BrowserRouter>
            
                <Navbar 
                title="GitHub Finder" 
                icon="fab fa-github"
                />

                <Routes>
                    <Route path="/" element = {
                        <>
                            <Search 
                                users={this.state.users} 
                                clearUsers={this.clearUsers} 
                                searchUsers={this.searchUsers} 
                                showClearButton={this.state.users.length > 0 ? true : false} 
                                setAlert={this.setAlert}
                            />
                            <Users 
                                users={this.state.users} 
                                loading={this.state.loading}
                            />
                        </>
                    } />
                    <Route path="user/:login" element = {
                        <UserDetails 
                        loading={this.state.loading} 
                        getUser={this.getUser}
                        getUserRepos={this.getUserRepos}
                        user={this.state.user}
                        repos={this.state.repos} /> 
                    } />
                </Routes>

                <Alert 
                alert={this.state.alert}
                />

            </BrowserRouter>
        )
    }
}

export default App