import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './PostEditor.module.css';

export default class TaskEditor extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    body: '',
  };

  state = {
    title: this.props.title,
    body: this.props.body,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave({ ...this.state });

    this.reset();
  };

  reset() {
    this.setState({
      text: '',
      body: '',
    });
  }

  render() {
    const { text, body } = this.state;
    const { onCancel } = this.props;

    return (
      <form className={css.formContainer} onSubmit={this.handleSubmit}>
        <input
          className={css.inputContent}
          type="text"
          name="title"
          value={text}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <textarea
          placeholder="Text"
          type="text"
          name="body"
          cols="40"
          rows="5"
          value={body}
          onChange={this.handleChange}
        />

        <div>
          <button type="submit" className={css.btn}>
            Save
          </button>
          <button type="button" className={css.btn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
