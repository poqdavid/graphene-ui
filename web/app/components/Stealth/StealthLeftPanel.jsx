import React from "react";
import {PropTypes} from "react";
import {Link} from "react-router";
import counterpart from "counterpart";
import ReactTooltip from "react-tooltip";
import Icon from "../Icon/Icon";
import Translate from "react-translate-component";
import AccountActions from "actions/AccountActions";
import SettingsActions from "actions/SettingsActions";

class StealthLeftPanel extends React.Component {
    static propTypes = {
        account: React.PropTypes.object.isRequired,
        linkedAccounts: PropTypes.object,
    };

    static contextTypes = {
        history: React.PropTypes.object
    }

    shouldComponentUpdate(nextProps, nextState) {
        const changed = this.last_path !== window.location.hash;
        this.last_path = window.location.hash;
        return (
            changed ||
            this.props.account !== nextProps.account ||
            this.props.linkedAccounts !== nextProps.linkedAccounts
        );
    }

    onLinkAccount(e) {
        e.preventDefault();
        AccountActions.linkAccount(this.props.account.get("name"));
    }

    onUnlinkAccount(e) {
        e.preventDefault();
        AccountActions.unlinkAccount(this.props.account.get("name"));
    }
    render() {
        let {account, linkedAccounts, isMyAccount} = this.props;
        let account_name = account.get("name");
        let linkBtn = null;

        return (
            <div className="grid-block vertical account-left-panel no-padding no-overflow">
                <div className="grid-block">
                    <div className="grid-content no-padding" style={{overflowX: "hidden"}}>
                        <div className="regular-padding">

                            <div className="grid-container no-margin">
                                { linkBtn }
                                <Link className="button outline block-button" to={`/transfer/?to=${account_name}`}><Translate content="stealth.account.pay"/></Link>
                            </div>
                        </div>
                        <section className="block-list">
                            <ul className="account-left-menu" style={{marginBottom: 0}}>
                                <li><Link to={`/stealth/${account_name}/overview/`} activeClassName="active"><Translate content="stealth.account.overview"/></Link></li>
                                <li><Link to={`/stealth/${account_name}/tstealth/`} activeClassName="active"><Translate content="stealth.account.transfer"/></Link></li>
                                <li><Link to={`/stealth/${account_name}/rstealth/`} activeClassName="active"><Translate content="stealth.account.receive"/></Link></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default StealthLeftPanel;