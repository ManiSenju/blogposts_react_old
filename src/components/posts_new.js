import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Field , reduxForm} from 'redux-form';
import { createPost } from '../actions';

class PostsNew extends React.Component{

    renderField=(field)=>{
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : '' }`
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input  {...field.input} className="form-control" type="text" autoComplete="off"/>
                {this.showErrMsg(field)}
            </div>
        )

    }

    showErrMsg(field){
      if(field.meta.touched && field.meta.error){
          return (
              <div className="text-help has-danger">{field.meta.error}</div>
          )
      }  
    }

    onFormSubmit=(formValues)=>{
        this.props.createPost(formValues,()=>{this.props.history.push('/')});
    }

    render(){
        const {handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <Field name="title" label="Title for Post" component={this.renderField} />
                <Field name="categories" label="Categories" component={this.renderField} />
                <Field name="content" label="Post Content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

const validateForm=(formValues)=>{
    const errors={};
    if(!formValues.title)
        errors.title = "Enter a Title";
    if(!formValues.categories)
        errors.categories = "Enter Categories";
    if(!formValues.content)
        errors.content = "Enter Content";
    
    return errors;

}

export default reduxForm({form:"PostsNew",validate:validateForm})(
    connect(null,{createPost})(PostsNew)
    );