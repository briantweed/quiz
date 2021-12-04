import {useThemeWrapper} from "@wrappers/ThemeWrapper";


function withTheme(Component) {

    return function WithThemeValues({ isLoading, ...props }) {
        const themeItems = useThemeWrapper();

        return (
            <Component {...props} {...themeItems}/>
        )

    };

}

export default withTheme;