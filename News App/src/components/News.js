import React, { Component } from 'react'
import '../App.css'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class News extends Component {

    static defaultProps={
        category:"general"
    }
    static propTypes={
        category:PropTypes.string
    }
    constructor(){
        super();
        this.state = {
            articles : [],
            page : 1,
            size : 12,
            loading : false,
        }
    }
    async componentDidMount(){
        this.setState({loading:true});
        console.log(this.props.category);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=397b69e21636431c82fc01527825b580&page=1&pagesize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading:false
        });
    }
    handlePrev = async ()=>{
        this.setState({loading:true});
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=397b69e21636431c82fc01527825b580&page=${this.state.page-1}&pagesize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles:parsedData.articles,
            page:this.state.page-1,
            size:this.state.size-12,
            loading:false
        });
    }
    handleNext = async()=>{
        this.setState({loading:true});
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=397b69e21636431c82fc01527825b580&page=${this.state.page+1}&pagesize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles:parsedData.articles,
            page:this.state.page+1,
            size:this.state.size+12,
            loading:false
        });
    }
    render() {
        return (
            <div className='container my-3' > 
                <h1 className="text-center">{this.props.category.toUpperCase()}</h1>
                <div className='row'>
                {this.state.loading && <Spinner />}
                    {
                    !this.state.loading && this.state.articles.map((element)=>{
                        return <div className='col-md-3' key={element.url}>
                         <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
                        </div>
                    })
                    }
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button disabled={this.state.page<=1} onClick={this.handlePrev} className="btn btn-outline-dark me-md-2" type="button">&larr;Previous</button>
                    <button disabled={this.state.size>=this.state.totalResults-12} onClick={this.handleNext} className="btn btn-outline-dark" type="button">Next&rarr;</button>
                </div>
            </div>
        )
    }
}

export default News