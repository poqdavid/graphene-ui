import React from "react";
import utils from "common/utils";
import classnames from "classnames";
import Translate from "react-translate-component";
class StealthCheckBox extends React.Component {
    static propTypes = {
        value: React.PropTypes.bool
    }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event)
    {
        if(state == 0)
        {
            alert("HI");
        }
    }
    render() {
        let class_name = classnames("form-group", "sth-chk");
        let {noLabel} = this.props;
        return (
            
            <div className={class_name}>
                    <input
                        name="valuespr"
                        type="checkbox"
                        id="sth-input-checkbox"
                        ref="stealth-input-checkbox"
                        autoComplete="off"
                        onChange={this.handleChange}
                    />
                    Stealth Account
            </div>
        );

    }
}
export default StealthCheckBox;