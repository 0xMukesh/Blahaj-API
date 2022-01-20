# 🦈 Blahaj API

An API for getting and posting random Blahaj images

## 👨‍💻 Demo

Check out the website: [Blahaj API](https://blahaj-api.herokuapp.com/)

## 🛣️ Available endpoints

- `/`: The root route
- `/get`: The route for getting random blahaj images
- `/post`: The route for posting random blahaj images
- `/raw`: The route for getting raw random blahaj images

### 🤔 How to post via the `/post` route ?

Blahaj API doesn't support posting via queries. To use the POST method you have to add body to the request. The body needs to have `name` and `url` path.

- `name` : It's a short description of what's the image is about
- `url` : It's the link of the image

Here's an example 👇

![](https://imgur.com/CGTREJx.png)

## 👇 Prerequisites

Before starting working on this project, please make sure you have already installed the following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)

## 🛠️ Installation Steps

1. Fork the project
2. Clone the project, by using the following command

   ```bash
   $ git clone https://github.com/Kira272921/Blahaj-API
   ```

3. Navigate to the project directory `cd Blahaj-API`
4. Install dependencies with `npm install`
5. Create your [own MongoDB database](https://www.mongodb.com/basics/create-database) for testing
6. Run `npm start` to start a local development environment

## 👨‍💻 Contributing

All kinds of contributions are always welcomed. It is recommended to either tell the maintainers that you are working on a previously made issue or make a new issue and let the maintainers now that you are working on it.

## 🤔 What's next for Blahaj API ?

- I'll be adding a route where you could get the raw random images of blahaj
- Make a cool looking homepage
