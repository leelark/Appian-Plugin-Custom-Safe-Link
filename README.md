
# Appian Component Plugin - Custom Safe Link

This Appian Component Plugin enables developer to have link url field on the interface and get the details whether the link is clicked/accessed by user or not .

## How to Install

- Compress all files/directories under the example of your choice into a zip
- Copy the zip into the _admin/plugins directory of your Appian install


## Parameter Details

#### Function Call

```http
  customSafeLink(linkLabel , url , isLinkClicked)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| linkLabel  | `string`  Input Paramter .|**Required** - Link label Value - Display value |
| url  | `string`  Input Paramter .|**Required** - URL Value |
| isLinkClicked  | `boolean`  Output Event Paramter .| Returns true if link is clicked |


