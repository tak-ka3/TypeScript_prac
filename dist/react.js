"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FancyButton = void 0;
const React = require("react");
function FancyButton(props) {
    const [toggled, setToggled] = React.useState(false);
    return React.createElement("button", { className: 'Size-' + props.size, disabled: props.isDisabled || false, onClick: event => {
            setToggled(!toggled);
            props.onClick(event);
        } }, props.text);
}
exports.FancyButton = FancyButton;
let button = React.createElement(FancyButton, { size: 'Big', text: 'Sign up now', onClick: () => console.log('Clicked') });
//# sourceMappingURL=react.js.map