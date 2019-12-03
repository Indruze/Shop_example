import React from 'react';

class ChatWidgetView extends React.Component<> {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      value: '',
      conversation: [],
      supportMessages: [
        "Hello! How can we help you?",
        'Let us check that and we will get back to you :)',
        'Just a minute...',
        'If you give us your email address, we gonna reach you as soon as posible',
        'Don\'t worry, we won\'t share your details with anyone',
        'Have a good day :)',
      ],
      indexOfSupport: 0,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  }

  sendAnswer = () => {
    const { supportMessages, indexOfSupport } = this.state;

    setTimeout(() => {
      this.setState((state) => {
        const conversation = state.conversation.concat(<p className='text-left'>{supportMessages[indexOfSupport]}</p>);

        return {
          conversation,
          indexOfSupport: indexOfSupport + 1,
        };
      });
    }, 1500)
  }

  sendMessage() {
    this.setState((state) => {
      const conversation = state.conversation.concat(state.value);

      return {
        conversation,
        value: '',
      };
    });
    this.sendAnswer();
  }

  renderConversation() {
    const { conversation } = this.state;

    return (
      <ul className="p-0">
        {conversation.map((item) => (
          <li className="text-right" key={Math.random()}>{item}</li>
        ))}
      </ul>
    )
  }

  renderChatWindow() {
    const { value, active } = this.state;

    return active ? (
      <div className="overlay position-fixed">
      <div className="header p-3">
        <h5 className="chatHeader mb-0">Write us a message</h5>
        <button className="close position-absolute" onClick={() => this.toggle()}>&times;</button>
      </div>
        <div className="popup p-3">
          <div className="content">
            {this.renderConversation()}
          </div>
          <div className="content-input position-fixed">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={value}
                onChange={(event) => this.setState({ value: event.target.value })}
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-outline-dark float-right"
                  onClick={() => this.sendMessage()}
                  disabled={!value}
                >
                  Send
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    ) : null
  }

  render() {
    return (
      <React.Fragment>
        <div className="box">
          <button type="button" className="btn button position-fixed btn-outline-info" onClick={() => this.toggle()}>
            Have a question?
          </button>
        </div>
        {this.renderChatWindow()}
      </React.Fragment>
    );
  }

}

export default ChatWidgetView;
