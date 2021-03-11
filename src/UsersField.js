import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Avatar from 'react-avatar';

// const USERS = [
//   {
//     value: 'John Smith', label: 'John Smith', email: 'john@smith.com', avatar: '',
//   },
//   {
//     value: 'Merry Jane', label: 'Merry Jane', email: 'merry@jane.com', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hrithik_at_Rado_launch.jpg/220px-Hrithik_at_Rado_launch.jpg',
//   },
//   {
//     value: 'Stan Hoper', label: 'Stan Hoper', email: 'stan@hoper.com', avatar: 'https://adminui.liscio.me/wp-content/uploads/2018/05/james_wurbs.png',
//   },
// ];
// const GRAVATAR_SIZE = 30;

// const stringOrNode = PropTypes.oneOfType([
//   PropTypes.string,
//   PropTypes.node,
// ]);

// const GravatarOption = createClass({
//   propTypes: {
//     children: PropTypes.node,
//     className: PropTypes.string,
//     isDisabled: PropTypes.bool,
//     isFocused: PropTypes.bool,
//     isSelected: PropTypes.bool,
//     onFocus: PropTypes.func,
//     onSelect: PropTypes.func,
//     option: PropTypes.object.isRequired,
//   },
//   handleMouseDown(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     this.props.onSelect(this.props.option, event);
//   },
//   handleMouseEnter(event) {
//     this.props.onFocus(this.props.option, event);
//   },
//   handleMouseMove(event) {
//     if (this.props.isFocused) return;
//     this.props.onFocus(this.props.option, event);
//   },
//   render() {
//     return (
//       <div
//         className={this.props.className}
//         onMouseDown={this.handleMouseDown}
//         onMouseEnter={this.handleMouseEnter}
//         onMouseMove={this.handleMouseMove}>
//         <Avatar round size={GRAVATAR_SIZE} className="avatar" color="#0366d6" name={this.props.option.label} src={this.props.option.avatar} />
//         {this.props.option.label}
//       </div>
//     );
//   },
// });

// const GravatarValue = createClass({
//   propTypes: {
//     children: PropTypes.node,
//     placeholder: stringOrNode,
//     value: PropTypes.object,
//   },
//   render() {
//     return (
//       <div className="Select-value">
//         <span className="Select-value-label">
//           <Avatar round size={GRAVATAR_SIZE} className="avatar" color="#0366d6" name={this.props.value.label} src={this.props.value.avatar} />
//           {this.props.value.label}
//         </span>
//       </div>
//     );
//   },
// });

// const UsersField = () => ({
//   propTypes: {
//     hint: PropTypes.string,
//     label: PropTypes.string,
//   },
//   getInitialState() {
//     return {};
//   },
//   setValue(value) {
//     this.setState({ value });
//   },
//   render() {
//     const placeholder = <span>&#9786; Select User</span>;

//     return (
//       <div className="section text-left">
//         <Select
//           onChange={this.setValue}
//            components={{ Option: GravatarOption, Value: GravatarValue }}
//         // components={{  }}
//           options={USERS}
//           placeholder={placeholder}
//            value={this.state.value}
//           />
//       </div>
//     );
//   },
// });

const options = [
  { value: "Abe", label: "Abe", customAbbreviation: "A" },
  { customAbbreviation: "J", value: "John", label: "John",  },
  { value: "Dustin", label: "Dustin", customAbbreviation:  <i class="fa fa-search"></i> }
];

const formatOptionLabel = ({ value, label, customAbbreviation }) => (
  <div style={{ display: "flex" }}>
    <div>{label}</div>
    <div style={{ marginLeft: "10px", color: "#ccc" }}>
      {customAbbreviation}
    </div>
  </div>
);

const UsersField = () => (
  <Select
    defaultValue={options[0]}
    formatOptionLabel={formatOptionLabel}
    options={options}
  />
);

export default UsersField;