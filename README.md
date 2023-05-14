<div align="center">
  <img src="client/public/logo.png">
</div>

<h1> Local Seva</h1>
Welcome to Local Seva, your one-stop platform for local services. Whether you need a handyman, a plumber, a maid, or any other service, Local Seva connects you with trusted professionals in your area. With our easy-to-use interface, you can quickly find and book the services you need, making your life easier and more convenient.
<br>

<h2>Features 🎯</h2>
<ul>
<li><strong>Service Selection:</strong> Browse and select from a wide range of local services.</li>
<li><strong>Service Details:</strong> View detailed information about each service, including description, availability, and estimated completion time.</li>
<li><strong>Service Booking:</strong> Book services directly through the platform, selecting your preferred date and time.</li>
<li><strong>Service Provider Ratings:</strong> Read and contribute to service provider ratings and reviews to make informed decisions.</li>
<li><strong>Service History:</strong> Keep track of your service history, including past bookings and completed services.</li>
<li><strong>Service Search:</strong> Use the search bar to find specific services or service providers in your area.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
<li><strong>React.js:</strong> A JavaScript library for building user interfaces.</li>
<li><strong>React Router:</strong> A library for routing in React applications.</li>
<li><strong>Node.js:</strong> A JavaScript runtime environment used for server-side development.</li>
<li><strong>Express:</strong> A minimalist web framework for building server-side applications with Node.js.</li>
<li><strong>MongoDB:</strong> A NoSQL document-oriented database used for storing and retrieving data.</li>
</ul>

<h2>Architecture</h2>
Local Seva follows a client-server architecture. The client-side is built using React.js, providing a seamless and interactive user experience. The server-side is powered by Node.js and Express, handling requests and managing data stored in the MongoDB database. The communication between the client and server is facilitated through RESTful APIs.
<br>
<br>
<h1>🚀 Getting Started</h1>
To get started, download the zip file of the repository. Or use <br>
<code>git clone https://github.com/sakshgupta/Local_Seva.git</code><br>
Then navigate to the project's root directory. The project consists of three folders: <code>client</code>, and <code>server</code>.
<br>
Before starting the servers, make sure to install the dependencies by running the command: <code>npm install</code> in all two folders.
<br>
<b>Note:</b> The following environment variables need to be set up before running the servers:<br>

<ul>
<li>For the client-side, create a <code>.env</code> file in the <code>client</code> folder with the following variables:<br>
<code>REACT_APP_MAPBOX_ACCESS_TOKEN</code> - the api key for your mapbox<br>
<code>REACT_APP_BACKEND_API</code> - the base URL of the API server (e.g. <code>http://localhost:3000</code>)<br>
<code>REACT_APP_STRIPE_KEY</code> - the api key for your Stripe account</li>
<li>For the server-side, create a <code>.env</code> file in the <code>server</code> folder with the following variables:<br>
<code>ATLAS_URI</code> - the connection string for your MongoDB Atlas database<br>
<code>STRIPE_KEY</code> - the secret key for your Stripe account<br>
<code>NODE_MAILER_USER</code> - the email address to use for sending email notifications<br>
<code>NODE_MAILER_PASS</code> - the password for the email address to use for sending email notifications<br>
<code>JWT_SECRET</code> - the secret key to use for JWT token generation</li>
</ul>
<br>
To start the servers:<br>
For the client-side, start the server by running the command: <code>npm run dev</code><br>
For the server-side, start the server by running the command: <code>npm run dev</code> or <code>nodemon index.js</code><br>
<br>

<h1>👉 How to use the site</h1>
Local Seva provides a user-friendly interface that allows you to easily navigate and access various features. Here's a brief guide on how to use the platform:

<ul>
  <li><strong>Browse Services:</strong> On the homepage, you'll find a list of available services. Scroll through the list or use the search bar to find specific services. Click on a service to view more details.</li>
  <li><strong>Service Details:</strong> On the service details page, you'll find information about the service, including a description, availability, and estimated completion time. You can also see the ratings and reviews provided by other users. If you're interested in booking the service, click on the "Book Now" button.</li>
  <li><strong>Booking a Service:</strong> When booking a service, you'll be prompted to select a preferred date and time for the service. Choose a suitable option and proceed to the next step. </li>
  <li><strong>Login or Signup:</strong> If you haven't already logged in, you'll be prompted to either log in to your existing account or create a new one. Provide the necessary details and follow the instructions to complete the login or signup process.</li>
  <li><strong>Confirmation and Payment:</strong> After logging in or signing up, you'll be redirected to a confirmation page where you can review the booking details. If everything looks correct, proceed to the payment step. Local Seva supports secure online payments, and you'll be guided through the payment process.</li>
  <li><strong>Booking History:</strong> Once the payment is completed, you'll receive a confirmation of your booking. You can view your booking history and track the status of your bookings by accessing the "Booking History" section in your user dashboard.</li>
  <li><strong>User Dashboard:</strong> The user dashboard provides a centralized location for managing your account and accessing various features. From the dashboard, you can update your profile information, view your booking history, and manage your preferences.</li>
  <li><strong>Admin Panel:</strong> If you're an administrator or service provider, you can log in to the admin panel. The admin panel allows you to create and manage services, view and manage user bookings, and handle other administrative tasks related to the platform.</li>
</ul>

<br>
<h1>👥 Our Team</h1>
Our team consists of:

<ul>
  <li><strong>Saksham Gupta:</strong>
  Connect with Saksham on 
  <a href="https://www.linkedin.com/in/sakshguptavit/">
  LinkedIn
  </a> and 
  <a href="https://github.com/sakshgupta">
  GitHub
  </a>, or visit his 
  <a href="https://sakshgupta.vercel.app/">
  personal website
  </a>.
  </li>
  <li><strong>Amaan Khan:</strong>
  Connect with Amaan on 
  <a href="https://www.linkedin.com/in/amaankhanak/">
  LinkedIn
  </a> and 
  <a href="https://github.com/amaankhanak">
  GitHub
  </li>
</ul>
<br>

<h1>🙌 Contributions</h1>
We welcome contributions to our project. If you have any suggestions or improvements, feel free to submit a pull request or open an issue.
<br>
<br>

<h1>📜 License</h1>
This project is licensed under the MIT License - see the LICENSE.md file for details.
