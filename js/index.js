var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}
var ask = [{
  id: "0",
  question: "what is 8x1?",
  answers: ["9", "10", "3", "8"],
  correct: "3" },
{
  id: "1",
  question: "what is 2x1?",
  answers: ["4", "2", "6", "4"],
  correct: "1" },
{
  id: "2",
  question: "what is 3x1?",
  answers: ["0", "4", "3", "9"],
  correct: "2" },
{
  id: "3",
  question: "what is 6x2?",
  answers: ["12", "2", "6", "4"],
  correct: "0" },
{
  id: "4",
  question: "what is 6x3?",
  answers: ["18", "21", "12", "8"],
  correct: "0" },
{
  id: "5",
  question: "what is 7x3?",
  answers: ["0", "2", "21", "9"],
  correct: "2" },
{
  id: "6",
  question: "what is 12x1?",
  answers: ["29", "32", "25", "12"],
  correct: "3" },
{
  id: "7",
  question: "what is 92x1?",
  answers: ["92", "14", "19", "29"],
  correct: "0" }];


function Question(props) {

  return (
    props.ask.map(function (ask) {return (
        React.createElement("div", null,
          React.createElement("h1", { key: ask.question }, ask.question),
          React.createElement("div", { className: "buton-grp" }, ask.answers.map(function (item, index) {return React.createElement("button", { className: "myButtons", id: ask.id + "-" + index, onClick: function onClick() {return (

                      props.clickHandler(ask.id + "-" + index, ask.id, ask.correct, index));}, key: index }, item);}))));}));


}

function Result(props) {
  return (
    React.createElement("div", { className: "Side" },
      React.createElement("h3", null, "Correct answers:", props.correct),
      React.createElement("h3", null, "Incorrect answers:", props.incorrect)));


};var

MyApp = function (_React$Component) {_inherits(MyApp, _React$Component);
  function MyApp(props) {_classCallCheck(this, MyApp);

    // var style={color:blue};    
    var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));_this.


    clickHandler = function (id, questionId, correctAnswer, index) {
      var QC = questionId + "-" + correctAnswer;
      var QI = questionId + "-" + index;


      if (id == QI)

      for (i = 0; i < 4; i++) {
        var X = i;
        $('#' + questionId + '-' + X).prop("disabled", true);}

      if (id == QC) {
        $('#' + questionId + '-' + index).css('backgroundColor', 'Green');
        _this.setState({ correct: _this.state.correct + 1 });

      } else
      {
        $('#' + questionId + '-' + index).css('backgroundColor', 'Red');
        _this.setState({ incorrect: _this.state.incorrect + 1 });
      }

    };_this.state = { correct: 0, incorrect: 0 };return _this;}_createClass(MyApp, [{ key: "render", value: function render()
    {

      return (
        React.createElement("div", null,
          React.createElement(Question, { ask: ask, clickHandler: this.clickHandler }),
          React.createElement(Result, { correct: this.state.correct, incorrect: this.state.incorrect })));
    } }]);return MyApp;}(React.Component);


ReactDOM.render(React.createElement(MyApp, null), document.getElementById("root"));