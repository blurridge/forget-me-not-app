#  Forget Me Not - A Todo List App ✏️ 

## Context

![Screenshot](https://i.imgur.com/NOzvNHf.png)

This side project focused on teaching me the fundamentals of Django and creating RESTful APIs. I have chosen to model the project after Apple's Reminders app, which is implemented as a Single Page Application (SPA). By building a todo app with Django, I gained hands-on experience in handling HTTP methods such as GET, POST, PUT, and DELETE, while also exploring concepts like routing, and database integration with SQLite.

The project aimed to provide a practical learning experience by combining Django basics, RESTful API development, and the creation of a todo app inspired by Apple's Reminders. Through this project, I developed a deeper understanding of web development and gained proficiency in building modern web applications.

## Tech Stack

**Client:** 
<p> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" width="47" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> </p>

**Server:** 
<p><a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="40" height="40"/> </a> </p>

## Run Locally 
Clone the project

```bash
  git clone https://github.com/blurridge/forget-me-not-app
```

Go to the project's server directory

```bash
  cd forget-me-not-app/server
```

Create a virtual environment

```bash
  pip install virtualenv
  python3 -m venv env
```

Activate virtual environment

```bash
  source env/bin/activate # Mac or Linux
  env/Scripts/activate # Windows
```

Install server dependencies

```bash
  pip install -r requirements.txt
```

Run migrations to update/create database
```
  python manage.py migrate
```

Run the Django development server
```
  python manage.py runserver
```

Go to the project's client directory

```bash
  cd forget-me-not-app/client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Structure

```
📦 
├─ .gitignore
├─ client
│  ├─ .eslintrc.cjs
│  ├─ .gitignore
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.tsx
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ AddTodoButton.tsx
│  │  │  ├─ DateInfo.tsx
│  │  │  ├─ TodoList.tsx
│  │  │  └─ TodoRow.tsx
│  │  ├─ context
│  │  │  ├─ AddingStateContext.tsx
│  │  │  ├─ TodoDataContext.tsx
│  │  │  └─ reducer.ts
│  │  ├─ globals
│  │  │  ├─ functions.ts
│  │  │  └─ types.ts
│  │  ├─ index.css
│  │  ├─ layouts
│  │  │  └─ TodoWindow.tsx
│  │  ├─ main.tsx
│  │  ├─ pages
│  │  │  └─ TodoPage.tsx
│  │  └─ vite-env.d.ts
│  ├─ tailwind.config.js
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
└─ server
   ├─ .gitignore
   ├─ api
   │  ├─ __init__.py
   │  ├─ admin.py
   │  ├─ apps.py
   │  ├─ migrations
   │  │  ├─ 0001_initial.py
   │  │  ├─ 0002_todo_completed.py
   │  │  ├─ 0003_remove_todo_id_todo_custom_id.py
   │  │  ├─ 0004_remove_todo_custom_id_todo_id.py
   │  │  └─ __init__.py
   │  ├─ models.py
   │  ├─ serializers.py
   │  ├─ tests.py
   │  ├─ urls.py
   │  ├─ utils.py
   │  └─ views.py
   ├─ manage.py
   ├─ requirements.txt
   └─ server
      ├─ __init__.py
      ├─ asgi.py
      ├─ settings.py
      ├─ urls.py
      └─ wsgi.py
```