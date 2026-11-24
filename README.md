# URL Query Viewer

Inspect decoded URL parameters and show repeated keys separately.

Open `index.html` in a modern browser. Edit the sample inputs to update the result, then print or download it. Processing stays in the tab.

## Example

Input:

```text
https://example.org/?tag=red&tag=dark+blue
```

Expected output includes:

```text
"tag" = "dark blue"
```

## Limitations

Use the input format shown in the worked example. The transformation runs in browser memory; export the result before closing the tab.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup and test commands, and the [changelog](CHANGELOG.md) for project history.

## License

[MIT License](LICENSE). Copyright (c) 2026 url-query-viewer contributors.
