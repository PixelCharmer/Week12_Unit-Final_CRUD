
# Employee List - CRUD App

A CRUD app that using an API to retrive and maintain a list of employee's and their job title. 


## Tech Stack

**Client:** HTML, CSS, JavaScript, JQuery, Ajax

**Server:** Node, JSON


## API Reference

API created with MockAPI: https://658fe9e4cbf74b575eca3f7e.mockapi.io/Employee_Log_API/employees

#### Get all employees

```http
  $.get(api)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `employees` | `faker.js` | Retrives te full employee list |

#### Get employee

```http
  $.get((this.url) + `/${id}`)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Object ID` | Id of item to fetch |

#### Create employee

```http
  $.post(this.url, employee, jobTitle)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| ``      | `string` | Adds new instance of employee |

#### Update employee

```http
  url: this.url + '/' + id
  type: put
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jobTitle`      | `string` | Updates employee job title |

#### Delete employee

```http
  url: this.url + `/${id}`,
  type: 'DELETE'
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Delete full instance of employee|




## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    