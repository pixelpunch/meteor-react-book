injectTapEventPlugin();

var {
    DatePicker,
    Styles,
    TextField,
    LeftNav,
    List,
    ListItem
} = MUI;

var { ThemeManager, LightRawTheme } = Styles;

App = React.createClass({
        childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },

        render() {
            return (
                <div>
                    <div>
                        <Nav />
                    </div>
                    <div>
                        <Dashboard />
                    </div>
                </div>
            );
        }
});