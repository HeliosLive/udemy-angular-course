import { storiesOf, moduleMetadata } from "@storybook/angular";
import { StorybookModule } from "src/app/storybook/storybook.module";
import { withNotes } from "@storybook/addon-notes";
import { setOptions } from "@storybook/addon-options";
import { ButtonComponent } from "src/app/storybook/button/button.component";
const buttonComponentNotes = require("src/app/storybook/button/buttons-prefix.notes.md")
  .default;

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/
});

storiesOf("Core Library|Button Component", module)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      imports: [StorybookModule]
    })
  )
  .addParameters({ component: ButtonComponent })
  .add(
    "Stroked Buttons",
    () => ({
      component: ButtonComponent,
      props: {
        text: "Stroked"
      }
    }),
    {
      notes: `
    <h2>My notes on emojis</h2>
    <em>It's not all that important to be honest, but..</em>
    Emojis are great, I love emojis, in fact I like using them in my Component notes too! 😇
  `
    }
  )

  .add(
    "Flat Buttons",
    () => ({
      component: ButtonComponent,
      props: {
        text: "Flat"
      }
    }),
    {
      notes: `${buttonComponentNotes}`
    }
  )
  .add(
    "Only Text Button",
    () => ({
      component: ButtonComponent,
      props: {
        text: "Only Text Button"
      }
    }),
    {
      notes: `${buttonComponentNotes}`
    }
  )
  .add("Only Icon Button", () => ({
    component: ButtonComponent,
    props: {
      text: "Only Icon Button"
    }
  }));
