# expose-port

`expose-port` is a Node.js package that allows you to expose a specified port on your local machine, either locally or globally.

## Installation

You have to install `expose-port` globally using npm to run this without any error:

```bash
npm install -g expose-port `
```

Usage
-----

### Expose a Port over Wi-Fi
By exposing the port over Wi-Fi, you can expose the port only to devices that are connected to the same Wi-Fi network.

To expose a port on your local machine, use the following command:
```bash
expose-port -w <port>
```
Replace `<port>` with the port number you want to expose. For example:

```bash
expose-port -w 3000
```
This will attempt to expose port 3000 on your machine.

### Expose a Port over Internet
By exposing a port globally using the `-g` option, you get a URL that you can send to anyone over the internet.

To expose a port globally using ngrok, use the following command:
```bash
expose-port -g <port>
```
Replace `<port>` with the port number you want to expose. For example:

```bash
expose-port -g 3000
```
This will establish a public URL for port 3000 using ngrok, allowing external access.
### Note for Vite Users

If you are using Vite, you need to modify your `package.json` to use the `--host` option for Vite to work correctly with the exposed port. Update your `package.json` scripts as follows:


```json
"scripts": {
  "dev": "vite --host"
}
```
### Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1.  Fork and star😅 the repository.
2.  Create a new branch for your feature or bugfix (`git checkout -b feature-name` or `git checkout -b bugfix-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature-name` or `git push origin bugfix-name`).
6.  Open a pull request with a description of your changes.
### License

This project is licensed under the MIT License - see the LICENSE file for details.
