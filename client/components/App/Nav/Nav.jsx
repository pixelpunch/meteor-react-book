injectTapEventPlugin();

var {
    LeftNav,
    Styles
} = MUI;

var { ThemeManager, LightRawTheme } = Styles;



menuItems = [
    {route: '/', text: "Link 1"},
    {route: '/', text: "Link 2"},
    {route: '/', text: "Link 3"},
];

Nav = React.createClass({
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
            <LeftNav ref="leftNav" menuItems={menuItems} />
        )
    }
    
});

