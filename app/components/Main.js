var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
        If you see this that means everything is working!!
      </div>
    );
  }
});

module.exports = Main;
