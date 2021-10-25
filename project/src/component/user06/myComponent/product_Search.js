import React, { Component } from 'react';
import '../css/myStyle06.css';
import axios from 'axios';
import Posts from './pSComponent/Posts'
import Pagination from './pSComponent/Pagination';
import SearchBar from './pSComponent/SearchBar';
import Filter from './pSComponent/Filter';



class ProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: [],
            currenPosts: [],
            currentPage: 1,
            postsPerPage: 10
        }
    }

    componentDidMount() {
        
        // Simple GET request using axios
        axios.get(`http://localhost:3000/VgtSearch/search`)
            .then((response) => {
                this.setState({
                    posts: response.data,
                });
                
            });
        
    }
    
    
    render() { 

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = (pageNumber) => {this.setState({currentPage: pageNumber})};
        
        
        
        return ( 
            <div className="container"> 
                <SearchBar/>      
                
                <div className="d-flex p-4"></div>

                <div className="d-flex">
                    <Filter/>

                    <div className="col-7">

                        <Posts posts={currentPosts}/>

                        <div className="d-flex justify-content-center mt-5">
                            <Pagination postsPerPage={this.state.postsPerPage} 
                                        totalPosts={this.state.posts.length}
                                        paginate={paginate}
                                        currentPage={this.state.currentPage}
                            />
                        </div>
                    </div>

                </div>
                <div className="d-flex p-4"></div>
        </div>
        );
    }
}
 
export default ProductSearch;