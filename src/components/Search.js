import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: ""
        };
    }

    onChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.username === '') {
            this.props.setAlert('Please enter a username', 'danger');
        } else {
            this.props.searchUsers(this.state.username);
            this.setState( { username: "" } );
        }
    }

    render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input type="text" value={this.state.username} onChange={this.onChange} className="form-control"/>
                        <div className="input-group-append">
                            <button type='submit' className='btn btn-primary'>Search <i className="fas fa-search"></i></button>
                        </div>
                    </div>
                </form>
                {this.props.showClearButton && <button className="btn btn-secondary btn-sm w-100 mt-2" onClick={this.props.clearUsers}>Clear Results <i className="fas fa-broom"></i></button>}
            </div>
        )
    }
}

export default Search
