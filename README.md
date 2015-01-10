<h1>binary-converter-node-server</h1>

A node server for your binary conversion needs!

<h2>Disclaimer</h2>

The float to hex and hex to float conversion functions were not written by me. They were accomolated from users' input at <a href="http://stackoverflow.com/" target="_blank">StackOverflow.com</a> and are therefore protected by the <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank">Creative Commons License (CC-BY-SA)</a> - and so is this repository.

<h2>Current Support</h2>

- Positive integers to binary
- Positive floats to binary
- Hex to binary

<h2>Dependencies</h2>

Make sure you have <a href="http://nodejs.org/download/" target="_blank">Node.js</a> installed. Navigate to <code>package.json</code>, start up cmd or terminal and execute the following:

<p><code>npm install</code></p>

This installs the following dependencies:

- <a href="http://expressjs.com/" target="_blank">Express</a>, used to create the server.
- <a href="http://nodemon.io/" target="_blank">nodemon</a>, used to start up the server, monitor changes in the source code and auto restart the server.
- <a href="https://github.com/mhevery/jasmine-node" target="_blank">jasmine-node</a>, used for writing server tests. 
- <a href="https://www.npmjs.com/package/jasmine-node-karma" target="_blank">jasmine-node-karma</a>, used for running server tests.
- <a href="https://github.com/request/request" target="_blank">request</a>, used for making HTTP calls in server tests.

<h2>Starting the Server</h2>

Navigate to <code>binary_converter_node_server.js</code>, start up cmd or terminal and execute the following:

<p><code>nodemon binary_converter_node_server.js</code></p>

<h3>Usage</h3>

Convert a value to binary by doing a GET request to the server with a query string. As an example consider the integer value <code>50</code>, that we would like converted to binary:

<p><code>https://raspi.sirars.com/toBinary?val=50</p></code>

This returns the binary value <code>110010</code> (radix 2).

<h2>Running the Tests</h2>

Navigate to <code>binary_converter_node_server_spec.js</code>, start up cmd or terminal and execute the following:

<p><code>jasmine-node-karma binary_converter_node_server_spec.js</code></p>
