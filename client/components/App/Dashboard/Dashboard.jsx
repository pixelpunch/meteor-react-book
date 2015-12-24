injectTapEventPlugin();

var {
    List,
    ListItem,
    Styles
} = MUI;

var { ThemeManager, LightRawTheme } = Styles;


Dashboard = React.createClass({
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
            <List>
                <ListItem>
                 <h3>Something here!!</h3>
                </ListItem>
            </List>
        
        );
    
    }

});