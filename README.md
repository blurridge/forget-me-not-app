#  Forget Me Not - A Todo List App ✏️ 

## Context

![Screenshot](https://i.imgur.com/NOzvNHf.png)

This side project aims to teach me about the basics of Django, along with creation of RESTful APIs and methods. The todo app is modeled after Apple's Reminders app which is implemented as a Single Page Application (SPA). 

## Tech Stack

**Client:** React, TailwindCSS

**Server:** Django

## Run Locally 
Clone the project

```bash
  git clone https://github.com/blurridge/forget-me-not-app
```

Go to the project's server directory

```bash
  cd forget-me-not-app/server
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
  npm run start
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