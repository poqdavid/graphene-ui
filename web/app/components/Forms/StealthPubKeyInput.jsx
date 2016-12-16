import React from "react";
import utils from "common/utils";
import classnames from "classnames";
import Translate from "react-translate-component";

class StealthPubKeyInput extends React.Component {
    static propTypes = {
        label: React.PropTypes.string, // a translation key for the label
        value: React.PropTypes.string, // current value
        error: React.PropTypes.string, // the error message override
        placeholder: React.PropTypes.string, // the placeholder text to be displayed when there is no user_input
        onChange: React.PropTypes.func, // a method to be called any time user input changes
        onAction: React.PropTypes.func, // a method called when Add button is clicked
        disableActionButton: React.PropTypes.bool // use it if you need to disable action button
    }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onAction = this.onAction.bind(this);
    }
    handleChange(event)
    {
        
        alert(event.target.value);
    }
    onKeyDown(event) {
        if (event.keyCode === 13)
        {
            this.onAction(event);
            alert(this.props.value);
        }
    }
    onAction(event) {
        event.preventDefault();
        if(this.props.onAction && this.state.valid && !this.props.disableActionButton) {
            this.props.onAction(event);
        }
    }
    render() {
        let class_name = classnames("form-group", "sth-pub");
        let {noLabel} = this.props;
        return (
            
            <div className={class_name}>
                {noLabel ? null : <label>Stealth Public Key</label>}
                <section>
                    <input
                        name="valuespr"
                        type="text"
                        id="sth-input-pubid"
                        ref="stealth-input-pub"
                        autoComplete="off"
                        placeholder={this.props.placeholder}
                        onChange={this.handleChange}
                        onKeyDown={this.onKeyDown}
                        value={this.props.value}
                    />
                </section>
            </div>
        );

    }
}
export default StealthPubKeyInput;