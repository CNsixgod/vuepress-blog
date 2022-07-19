---
title: vscode配置代码片段
categories:
  - vscode
date: 2022/7/13
permalink: /docs/front-end/67e131ce.html
---

```js
///typescriptreact.code-snippets
{
  "React Function Component": {
    "scope": "typescriptreact",
    "prefix": ["rfc"],
    "body": [
      "import React from \"react\";",
      "",
      "export interface ${1:MyComponent}Props {}",
      "",
      "export const ${1} = (props: ${1}Props) => {",
      "  return null;",
      "};"
    ],
    "description": "A React function component with props"
  },
  "React Storybook Template": {
    "scope": "typescriptreact",
    "prefix": ["story"],
    "body": [
      "import { Story } from \"@storybook/react\";",
      "import { withDesign } from \"storybook-addon-designs\";",
      "import React from \"react\";",
      "import { ${1:MyComponent}, ${1}Props } from \".\";",
      "",
      "export default {",
      "  title: \"${1}\",",
      "  component: ${1},",
      "  decorators: [withDesign],",
      "  parameters: {",
      "    design: {",
      "      type: \"figma\",",
      "      url: \"\",",
      "    },",
      "  },",
      "};",
      "",
      "export const Template: Story<${1}Props> = (args) => (",
      "  <${1} {...args} />",
      ");",
    ],
    "description": "A React Storybook CSF story with args"
  }
}

```

