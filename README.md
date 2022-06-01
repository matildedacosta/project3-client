# Project Name

<br>

# Quick Compo

<br>

## Description

This is an app to connect portuguese musicians, producers and artists. It allows you to follow users and be followed, create events and search for events (such as writing camps), and message users.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anonymous user I can sign up on the platform so that I can start connect with other users, search and create events.
- **Login:** As a user I can login to the platform so that I can access my profile and start connecting with other users, search and create events.
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Delete:** As a logged in user I can delete my account.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of followers, followings, comments and events I have.
- **Edit Profile**: As a logged in user I can edit my profile or delete it.
- **Search Users**: As a logged in user I can search for users by username and/or filter by town and/or skills.
- **Users details:** As a logged in user I can access the details and work of users, follow them, comment on their profile, start a chat.
- **Following List** As a logged in user I can access the list of users that I have followed (no number).
- **Followers List** As a logged in user I can access the list of users that follow me (no number).
- **Chat** As a logged in user I can access the different message chats I have with other users.
- **Search Events** As a logged in user I can search for events by name and/or filter by town and/or types.
- **Event details** As a logged in user I can access the details of an event, attend it (adding to my events), comment and access the profile of the user that created it.
- **Create Event** As a logged in user I can create an event.
- **My Events** As a logged in user I can access my list of events, filtering by events created by me or by the others.

## Backlog

-

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                 | Component        | Permissions                | Behavior                                                                    |
| -------------------- | ---------------- | -------------------------- | --------------------------------------------------------------------------- |
| `/login`             | LoginPage        | anon only `<AnonRoute>`    | Login form, navigates to home page after login.                             |
| `/signup`            | SignupPage       | anon only `<AnonRoute>`    | Signup form, navigates to login page after signup.                          |
| `/`                  | HomePage         | public `<Route>`           | Home page.                                                                  |
| `/profile`           | ProfilePage      | user only `<PrivateRoute>` | User profile for the current user.                                          |
| `/profile/edit`      | EditProfilePage  | user only `<PrivateRoute>` | Edit user profile form.                                                     |
| `/search-users`      | SearchUsersPage  | user only `<PrivateRoute>` | Search for users by username or with filters.                               |
| `/user-details/:id`  | UserDetailsPage  | user only `<PrivateRoute>` | User details, comment section and buttons to chat and follow.               |
| `/profile/followers` | FollowersPage    | user only `<PrivateRoute>` | User's followers.                                                           |
| `/profile/following` | FollowingPage    | user only `<PrivateRoute>` | Users that the current user follows.                                        |
| `/profile/messages`  | MessagesPage     | user only `<PrivateRoute>` | List of messages (left) and the actual chat (right).                        |
| `/search-events`     | SearchEventsPage | user only `<PrivateRoute>` | Search for events by name or with filters.                                  |
| `/event-details/:id` | EventDetailsPage | user only `<PrivateRoute>` | Event details and button to add to attend event.                            |
| `/profile/events`    | MyEventsPage     | user only `<PrivateRoute>` | User's events, filter by ones created by them and by ones created by other. |
| `/events/create`     | CreateEventPages | user only `<PrivateRoute>` | Create event form.                                                          |

## Components

**Pages:**

//GLOBAL PAGES

- LoginPage
- SignupPage
- HomePage

//PROFILE PAGES

- ProfilePage
- EditProfilePage
- FollowersPage
- FollowingPage
- MessagesPage

//USERS PAGES

- SearchUsersPage
- UserDetailsPage

//EVENTS PAGES

- SearchEventsPage
- MyEventsPage
- EventDetailsPage
- CreateEventPages

**Components:**

//GLOBAL PAGES

- Navbar.jsx
- Footer.jsx
- LongButton.jsx
- RemoveButton.jsx

- Main.jsx (HomePage)
- OQueOferece.jsx (HomePage)
- Sobre.jsx (HomePage)

- AboutUser.jsx (SignupPage)
- AboutUserWork.jsx (SignupPage)

//PROFILE PAGES

- MySkills.jsx (ProfilePage)
- MyLinks.jsx (ProfilePage)
- MyComments.jsx (ProfilePage) <!-- ? -->

- EditMySkills.jsx (EditProfilePage)
- EditMyLinks.jsx (EditProfilePage)

- FollowerCard.jsx (FollowersPage && FollowingPage)

- UsersIconMessages.jsx (MessagesPage)
- LeftSideMessages.jsx (MessagesPage)
- MessageBubbles.jsx (MessagesPage)
- RightSideMessages.jsx (MessagesPage)

//USERS PAGES && EVENTS PAGES

- SearchBar.jsx (SearchUsersPage && SearchEventsPage)
- SearchCard.jsx (SearchUsersPage && SearchEventsPage)
- FilterCard.jsx (SearchUsersPage && SearchEventsPage)

- Comments.jsx (UserDetailsPage)
- Skills.jsx (UserDetailsPage)
- Links.jsx (UserDetailsPage)

- MyEventCard.jsx (MyEventsPage)

## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`
    - `.DeleteCurrentUser()`

- **Tournament Service**

  - `tournamentService` :
    - `.addTournament(tournamentData)`
    - `.getTournaments()`
    - `.getOneTournament(id)`
    - `.deleteTournament(id)`

- **Player Service**

  - `playerService` :
    - `.createPlayer(id)`
    - `.getPlayerDetails(id)`

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  image: {type: String, default: ''},
  fullName: {type: String, required: true},
  username: {type: String, required: true, unique: true, trim: true,},
  description: {type: String, default: ''},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  skills: { type: [String], required: true /* AT LEAST ONE- enum */ },
  links: {/* AT LEAST ONE- enum */
  Spotify: {type: String},
  SoundCloud: {type: String},
  Youtube: {type: String},
  Instagram: {type: String},
  Facebook: {type: String},
  },
  myEvents: [ { type: Schema.Types.ObjectId, ref:'Events' } ],
  myComments: [ { type: Schema.Types.ObjectId, ref:'Comments' } ]
	following: [ { type: Schema.Types.ObjectId, ref:'User' } ],
  followers: [ { type: Schema.Types.ObjectId, ref:'User' } ],
}
```

**Events model**

```javascript
 {
   name: { type: String, required: true },
   image: { type: String, default: '' },
   city: { type: String, required: true },
   date: { type: DateAndTime, required: true },
   creator: [ { type: Schema.Types.ObjectId, ref:'User' } ],
   attendees: [ { type: Schema.Types.ObjectId, ref:'User' } ],
 }
```

**Comments model**

```javascript
{
  comment: { type: String, required: true },
  date: { type: DateAndTime, required: true /* ? */},
  commentBy: [ { type: Schema.Types.ObjectId, ref:'User' } ],
  commentOn: [ { type: Schema.Types.ObjectId, ref:'User' } ],
}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                           | Request Body         | Success status | Error Status | Description                                                                                                                     |
| ----------- | ----------------------------- | -------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/profile `              | Saved session        | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup`                | {user model}         | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password} | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`                |                      | 204            | 400          | Logs out the user                                                                                                               |
| DELETE      | `/auth/delete`                |                      | 204            | 400          | Deletes user                                                                                                                    |
| GET         | `/api/events`                 |                      |                | 400          | Show all tournaments                                                                                                            |
| GET         | `/api/events/:id`             |                      |                |              | Show specific tournament                                                                                                        |
| POST        | `/api/events/create`          | { events model }     | 201            | 400          | Create and save a new event                                                                                                     |
| DELETE      | `/api/events/:id`             |                      | 201            | 400          | delete event.                                                                                                                   |
| GET         | `/api/user-details/:id`       |                      |                |              | show specific user                                                                                                              |
| GET         | `/api/user-add-following/:id` |                      | 200            | 404          | Follow user.                                                                                                                    |
| DELETE      | `/api/user-following/:id`     |                      | 200            | 400          | delete following.                                                                                                               |
| GET         | `/api/user-following`         |                      | 200            | 404          | show list of users I follow.                                                                                                    |
| GET         | `/api/user-followers`         |                      | 201            | 400          | show list of users who follow me.                                                                                               |
| GET         | `/api/search/all-users`       |                      | 201            | 400          | show random 10 users on platform.                                                                                               |
| GET         | `/api/search/user-filters`    |                      | 201            | 400          | show filtered users on platform.                                                                                                |
| GET         | `/api/search/all-events`      |                      | 201            | 400          | show random 10 events on platform.                                                                                              |
| GET         | `/api/search/event-filters`   |                      | 201            | 400          | show filtered events on platform.                                                                                               |
| GET         | `/api/comments/:id`           |                      |                |              | Show comments of users (?)                                                                                                      |
| POST        | `/api/comments/:id`           |                      |                |              | Creates comment.                                                                                                                |
| DELETE      | `/api/comments/delete`        |                      | 204            | 400          | Deletes comment (by author only)                                                                                                |

<br>

## API's

<br>

## Packages

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan) or a picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your _public_ presentation slides

### Contributors

Matilde Costa - <github-username> - <linkedin-profile-link>
