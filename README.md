## Introduction

This is a simple Todo application built off Django (including the Django REST Framework for API) and React.

## Requirements
* Python3
* Pipenv
* node

## Getting started
1. Clone the project to your machine ```[git clone https://github.com/Nitesh-Singh-5/react-django-api.git]```
2. Navigate into the diretory ```[cd react-django-api]```
3. Source the virtual environment ```[pipenv shell]```
4. Navigate into the frontend directory ```[cd reactplan]```
5. Install the dependencies ```[npm install]```

## Run the application
You will need two terminals pointed to the frontend and backend directories to start the servers for this application.

1. Run this command to start the backend server in the ```[plandjango]``` directory: ```[python manage.py runserver]``` (You have to run this command while you are sourced into the virtual environment)
2. Run this command to start the frontend development server in the ```[reactplan]``` directory: ```[npm start]``` (This will start the frontend on the adddress [localhost:3000](http://localhost:3000))

## Built With

* [React](https://reactjs.org) - A progressive JavaScript framework.
* [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively.
* [Django](http://djangoproject.org/) - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.
