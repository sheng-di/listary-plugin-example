# listary-plugin-example
Listary 6 plugin example.

## Usage

1. put the directory inside the plugin folder.

```bash
cd %AppData%\Listary\UserProfile\Extensions
git clone https://github.com/378978764/listary-plugin-example.git
```

2. restart listary.

## Development

Use Javascript as the development language.

### files

#### listary-extension.json

This is the config file.

```json
{
    // unuque id
    "guid": "F86966A8-24A9-46A0-BAEA-11E861A5C2C4",
    // extension name
    "name": "dict",
    // extension icon
    "icon": "language.png",
    // keyword to trigger it
    "defaultKeyword": "yd"
}
```

#### index.js

This is the entry of the extension.

```javascript
async function search(query) {
 	return [
        {
            title: 'title',
            subtitle: 'subtitle',
            execution: [
                {
                    type: 'OpenUrl',
                    url: 'http://baidu.com'
                }
            ]
        }
    ]   
}
```

### fields

Following fields are supported:

- title: the title
- subtitle: the subtitle
- execution: actions when user choose item.

### example

This is an example of Youdao Dict.

