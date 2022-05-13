import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
class Contact extends React.Component {
  constructor() {
    super();

    this.state = { subject: '', body: '' };
  }
  validateform = (event) => {
    var subject = document.getElementById('subject').value;
    var body = document.getElementById('body').value;
    window.location.href =
      'mailto:hariharangovindarajan99@gmail.com?subject=' +
      subject +
      '&body=' +
      body;
    event.preventDefault();
    return false;
  };
  render() {
    return (
      <body>
        <div class="heading">
          <div class="container" id="mailme">
            <div class="row">
              <div class="col-sm-6 offset-md-2 " style={{ marginTop: '20px' }}>
                <h2 class="text-center">Mail Form</h2>
                <form
                  class="justify-content-center align-item-center"
                  onSubmit={this.validateform}
                  target="_blank"
                  method="GET"
                >
                  <div class="form-group">
                    <label class="control-label" for="subject">
                      <strong>Name</strong>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      class="form-control"
                      placeholder="Enter Your name"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="subject">
                      <strong>Feedback</strong>
                    </label>
                    <textarea
                      class="form-control"
                      row="5"
                      placeholder="Enter your feedback"
                      required
                    />
                  </div>
                  <div class="form-group">
                  <input
                    
                    type="submit"
                    value="send"
                    class="btn btn-success form-control"
                  />
                  </div>
                </form>
                <br />
                <br />
                <div id="nextbtn">
                  <Link to="/Exit">
                    <button
                      class="btn btn-danger btn-sm"
                      style={{ borderRadius: '50%' }}
                    >
                      Exit
                    </button>
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
      </body>
    );
  }
}

export default Contact;
