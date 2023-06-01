# Collaborative Code Editor

A web-based Collaborative Code Editor that allows multiple users to edit code together in real-time.

## Overview

Collaborative Code Editor is a web application that enables developers to collaborate on code projects in real-time. It provides a shared code editing environment where multiple users can simultaneously make changes and see each other's updates in real-time.

The project consists of a client-side code editor, a WebSocket server for real-time communication, and a server-side document management system using ShareDB.

## Features

- Real-time collaboration: Multiple users can edit the same document simultaneously, and changes are synchronized in real-time.
- Syntax highlighting: The code editor supports syntax highlighting for popular programming languages.
- User-friendly interface: The code editor provides a user-friendly interface with features like line numbers, auto-indentation, and code completion.

## Installation

1. Clone the repository:

```
git clone https://github.com/PralinKhaira/collaborative-code-editor.git
```

2. Install dependencies:

```
cd collaborative-code-editor
npm install
```

3. Start the server:

```
node server.js
```

4. Open the application in a web browser:

```
http://localhost:3000
```

## Usage

1. Open the Collaborative Code Editor application in a web browser.
2. Start editing the code in the code editor.
3. Share the document URL with other users to collaborate with them.
4. Changes made by other users will be automatically synchronized and reflected in your code editor.

## Configuration

The following configuration options are available in the `server.js` file:

- Port: You can modify the port on which the server runs. By default, it is set to `3000`.
- Database connection: You can configure the database connection settings if using a specific database.

## Contributing

Contributions to the Collaborative Code Editor project are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request, explaining your changes.

Please ensure that your code follows the project's coding conventions and includes appropriate tests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [ShareDB](https://github.com/share/sharedb)
- [CodeMirror](https://codemirror.net/)
