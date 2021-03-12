"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("./react");
class SignupForm extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isLoading: false
        };
        this.signUp = () => __awaiter(this, void 0, void 0, function* () {
            this.setState({ isLoading: true });
            try {
                yield fetch('/api/signup?userId=' + this.props.userId);
            }
            finally {
                this.setState({ isLoading: false });
            }
        });
    }
    render() {
        return React.createElement(React.Fragment, null,
            React.createElement("h2", null,
                "Sign up for a 7-day supply of our tasty toothpaste now, ",
                this.props.firstName),
            React.createElement(react_1.FancyButton, { isDisabled: this.state.isLoading, size: 'Big', text: 'Sign Up Now', onClick: this.signUp }));
    }
}
let form = React.createElement(SignupForm, { firstName: 'Albert', userId: '13ab9g3' });
//# sourceMappingURL=react1.js.map