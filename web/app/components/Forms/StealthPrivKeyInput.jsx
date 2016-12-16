import React from "react";
import utils from "common/utils";
import classnames from "classnames";
import Translate from "react-translate-component";
import StealthPubKeyInput from "./../Forms/StealthPubKeyInput";

class StealthPrivKeyInput extends React.Component {
    static propTypes = {
        enablepublickey: React.PropTypes.bool,
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
        this.state = {
            value: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onAction = this.onAction.bind(this);
    }
    handleChange(event)
    {
        this.setState({value: event.target.value});
        let check = event.target.value;
        if(check)
        {
            this.setState({enablepublickey: true});
        }
        else
        {
            this.setState({enablepublickey: true});
        }
        this.render();
    }
    onKeyDown(event) {
        if (event.keyCode === 13)
        {
            this.setState({value: event.target.value});
        }
    }
    onAction(event) {
        event.preventDefault();
        if(this.props.onAction && this.state.valid && !this.props.disableActionButton) {
            this.props.onAction(event);
        }
    }
    render() {
        let class_name = classnames("form-group", "sth-priv");
        let {noLabel} = this.props;
        if(1==1)
        {
            return (
                
                <div className={class_name}>
                    {noLabel ? null : <label>Stealth Private Key</label>}
                    <section>
                        <input
                            name="valuespr"
                            type="text"
                            id="sth-input-privid"
                            ref="stealth-input-priv"
                            autoComplete="off"
                            placeholder={this.props.placeholder}
                            onChange={this.handleChange}
                            onKeyDown={this.onKeyDown}
                            value={this.props.value}
                        />
                    </section>
                <StealthPubKeyInput
					noLabel
					placeholder="Stealth Public Key"
                />
                </div>
            );
        }
        else
        {
            return (
                
                <div className={class_name}>
                    {noLabel ? null : <label>Stealth Private Key</label>}
                    <section>
                        <input
                            name="valuespr"
                            type="text"
                            id="sth-input-privid"
                            ref="stealth-input-priv"
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
}
export default StealthPrivKeyInput;