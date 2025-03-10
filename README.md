# Introduction
Parley is a streamlined chat application designed to provide users with a focused space for discussions on specific topics. The application aims to address the issues of fragmented conversations and lack of visual emotional cues in current digital communication platforms.

# Purpose & Motivation for Project
The purpose of Parley is to create a user-friendly platform for organized discussions, emotional expression, and community building. The motivation behind this project is to provide a solution to the problems faced by users in current chat applications, such as difficulty in engaging meaningfully and lack of structured channels.

![Welcome Screen](./public/screenshots/parley.jpeg)

# How to install and run the application
To install and run Parley, follow these steps:
* Clone the repository from GitHub.
* Install the required dependencies using `npm install`.
* Run the application using `npm run dev` 
```
npm install
npm run dev

```
in a separate terminal in the same directory run
```
npm run db

```
additionally to use the chatbot features
install [ollama](https://ollama.com/), pull the llama3 model and run the api with
```
 OLLAMA_HOST=127.0.0.1:11436 ollama serve


```
* Open a web browser and navigate to [http://localhost:5173](http://localhost:5173) to access the application.

# How does the application work?
Parley allows users to create and join dedicated channels for specific topics. The application features user profiles, channel creation, message management, and community engagement. Here's an overview of how it works:
* Users can create channels with unique names and descriptions, facilitating organized discussions around specific interests.
* Each user has a profile displaying their username, tagline, and mood emoji, providing a quick visual representation of their emotional state.
* Users can send and receive messages within channels, complete with timestamps for context.
* The application supports multiple users in each channel, fostering collaboration and interaction among like-minded individuals.

## This app was built with:
    - Frontend: JavaScript/React
    - Backend: json-server
    - chatbot api: ollama with the llama3 model

### Technologies Used
![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) 
![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) 
![JSON Server](https://img.shields.io/badge/JSON_Server%20-%232a2e2a.svg?&style=for-the-badge&logo=JSON&logoColor=white) 


# Challenges

Technical hurdles:

- UI design.
- Integrating AI models with the chat application

