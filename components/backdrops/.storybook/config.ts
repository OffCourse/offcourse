import { configure, addParameters, addDecorator } from "@storybook/react";
import { offcourse } from "@offcourse/themes";
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

const themes = [offcourse];
addDecorator(withThemesProvider(themes));


addParameters({
    backgrounds: [
        { name: "white", value: "white", default: true },
        { name: "light", value: "#f4f6f4" },
        { name: "medium", value: "#C8CAC9" },
        { name: "dark", value: "#797B7A" }
    ]
});

const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
