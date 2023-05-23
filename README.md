# Innovation Management Web Application

Our platform is an innovative online solution that addresses limited access to resources, funding, and networks for inventors. With a user-friendly interface and the power of the MERN stack, inventors can publish their innovations, attract attention, and receive funding. The platform also aims to engage investors, entrepreneurs, and mentors who are interested in supporting and nurturing innovative ideas. Together, we can transform the way innovation is approached and create a sustainable future for all.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Support and Contact](#support-and-contact)
- [Project Status and Roadmap](#project-status-and-roadmap)
- [Acknowledgments](#acknowledgments)

## Installation

Follow these steps to install and set up the project:

1. Clone the repository:
```sh
git clone https://github.com/Mr-RiVi/creativeconnect-mern.git
```

2. Change to the project directory:
```sh
cd creativeconnect-mern
```

3. Install the dependencies:

<li>
  For the back-end, navigate to the <em>back-end</em> folder:
  </br>
  </br>
    <pre><code>cd back-end</code></pre>
</li>

-If you prefer npm, run the following command:
```sh
npm install
```
-If you prefer yarn, run the following command:
```sh
yarn install
```

<li>
  For the front-end, navigate to the <em>front-end</em> folder:
  </br>
  </br>
    <pre><code>cd front-end</code></pre>
</li>

-If you prefer npm, run the following command:
```sh
npm install
```
-If you prefer yarn, run the following command:
```sh
yarn install
```

4. Configure the project:
<ol>
  <li>
    <p>Create a new file called <code>.env</code> in back-end root folder:</p>
    <pre><code>touch .env</code></pre>
  </li>
  
  <li>
    <p>
      Open the .env file located in the back-end directory and update the configuration settings as required. Add the following environment variables:
    </p>
    <pre><code>
      PORT=your_preferred_port
      MONGO_URI=your_mongodb_uri
    </code></pre>
    <p>In the PORT variable, replace your_preferred_port with the port number you prefer to run the project on. For example, you can set it to 3000 or any        other available port.</p>
    <p>
      In the MONGO_URI variable, replace your_mongodb_uri with the correct MongoDB connection URI specific to your setup.
      <br/>
      This URI should include the necessary credentials and information to connect to your MongoDB database. For example, it may look like:
      mongodb://username:password@host:port/database.
    </p>
  </li>
</ol>

## Usage


1. Start the project:
<li>
  For the back-end, navigate to the <em>back-end</em> folder:
  </br>
  </br>
    <pre><code>cd back-end</code></pre>
</li>

-If you prefer npm, run the following command:
```sh
npm start
```
-If you prefer yarn, run the following command:
```sh
yarn start
```

<li>
  For the front-end, navigate to the <em>front-end</em> folder:
  </br>
  </br>
    <pre><code>cd front-end</code></pre>
</li>

-If you prefer npm, run the following command:
```sh
npm start
```
-If you prefer yarn, run the following command:
```sh
yarn start
```

2. Access the project:
<p>
  Once your React app is up and running, it will be hosted on a specific port. By default, React apps are hosted on port 3000. However, if port 3000 is   not available or if your React app is running on a different port, please ensure to use the correct port number. Open your web browser and navigate to http://localhost:{port}, where {port} represents the port number on which your React app is running.
 </p>

## Contributions

We welcome contributions from the community to enhance the project. To contribute, please follow these guidelines:

1. Fork the repository:
<ul>
  <li>Click on the 'Fork' button on the top right corner of this repository's page.</li>
  <li>This will create a copy of the repository in your GitHub account.</li>
</ul>

2. Clone the repository:
<ul>
  <li>
Clone the forked repository to your local machine using the following command:
  </li>
</ul>

```sh
git clone https://github.com/your-username/creativeconnect-mern.git
```
Replace 'your-username' with your GitHub username.

3. Create a new branch:
<ul>
  <li>
Move into the project's directory:
  </li>
</ul>

```sh
cd creativeconnect-mern
```
<ul>
  <li>
Create a new branch for your contribution:
  </li>
</ul>

```sh
git checkout -b feature/new-feature
```
<ul>
  <li>
Provide a descriptive name for the branch that reflects the purpose of your contribution.
  </li>
</ul>


4. Make your changes:
<ul>
  <li>Make the necessary changes and improvements to the project codebase.</li>
</ul>

5. Commit your changes:
<ul>
  <li>Stage the changes for commit</li>
  <li>Commit the changes with a descriptive message</li>
  <li>Push your changes</li>  
</ul>

6. Create a pull request:
<ul>
  <li>Go to the original repository on GitHub.</li>
  <li>Click on the 'New Pull Request' button.</li>
  <li>Provide a descriptive title and explanation of your changes.</li>
  <li>Submit the pull request for review.</li>
</ul>

<p>Our team will review your contribution and provide feedback. Thank you for helping improve the project!</p>
<p>Note: By contributing to this project, you agree to license your contribution under the project's license.</p>


## License

[MIT License](LICENSE)

## Support and Contact

<p>If you have any questions, issues, or need assistance with the project, please feel free to reach out to us via email:</p>
<ul>
  <li>Email: For any inquiries or support requests, you can contact us at fernandorivindu2@gmail.com.</li>
</ul>
<p>We'll do our best to respond to your queries promptly.</p>

## Project Status and Roadmap

<p>Currently, we are in the front-end development phase of the project. Our team is working hard to create an intuitive and user-friendly web application. We are focused on implementing the best practices and leveraging modern technologies to deliver a high-quality product.</p>

<p>Our roadmap for the project includes the following milestones:</p>
<ul>
  <li>Complete front-end development and UI/UX enhancements</li>
  <li>Integrate back-end functionality and APIs</li>
  <li>Conduct thorough testing and debugging</li>
  <li>Implement additional features and improvements based on user feedback</li>
  <li>Prepare for a production-ready release</li>
</ul>

<p>We are committed to delivering a robust and reliable web application that meets the needs of our users. Stay tuned for updates as we make progress towards our goals.</p>

## Acknowledgments

<p>We would like to express our gratitude to the following individuals for their contributions, support, and inspiration throughout the development of this project:</p>
<ul>
  <li><a href="https://github.com/SLxMAJOR">Sanjula De Silva</a>: Thank you for your valuable insights and feedback during the early stages of the project, as well as your contributions to the user management part.</li>
  <li><a href="https://github.com/DKxNK">DK Nalinga Kumarasiri</a>: Thank you for your valuable insights and feedback during the early stages of the project, as well as your contributions to the mentoring service implementation.</li>
  <li><a href="https://github.com/Maleesha-Shavindi">Maleesha Shavindi</a>: Thank you for your valuable insights and feedback during the early stages of the project, as well as your contributions to the entrepreneur service implementation.</li>
</ul>



