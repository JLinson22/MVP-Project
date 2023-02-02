const input = document.querySelector('.search-input')
const homePage = document.querySelector('#homepage')
const discoverBtn = document.querySelector('#discover')
const userName = document.getElementById('name')
const userAge = document.getElementById('age')
const userGender = document.getElementById('gender')
const userLocation = document.getElementById('location')
const submit = document.getElementById('submit')
const post = document.querySelector('.postBtn')
const editUserBtn = document.querySelector('.editBtn')
const deleteUserBtn = document.querySelector('.deleteBtn')
const updateBtn = document.querySelector('#updateBtn')

const discoverPage = () => {
    $("#homepage").hide()
    $(".timeline").hide()
    $(".sign-up").hide()
    $(".post-container").hide()
    $(".footer").hide()
    $(".update-info").hide()
    $(".discover").show()
    getUsers()
}

const timelinePage = () => {
    $("#homepage").hide()
    $(".discover").hide()
    $(".user-container").hide()
    $(".sign-up").hide()
    $(".footer").hide()
    $(".update-info").hide()
    $(".timeline").show()
    getPosts()
}

const signUpPage = () => {
    $("#homepage").hide()
    $(".discover").hide()
    $(".timeline").hide()
    $(".post-container").hide()
    $(".user-container").hide()
    $(".footer").hide()
    $(".update-info").hide()
    $(".sign-up").show()
}

const updateUserForm = () => {
    $(".discover").hide()
    $(".update-info").show()
}

const getUsers = () => {
    fetch('/users')
    .then((res) => res.json())
    .then((data) => {userData(data);})
}

const getPosts = () => {
    fetch('/userposts')
    .then((res) => res.json())
    .then((data) => {postData(data);})
}

const updateData = () => {
    fetch('/users')
    .then((res) => res.json())
    .then((data) => {updateMethod(data);})
}

const deleteData = () => {
    fetch('/users')
    .then((res) => res.json())
    .then((data) => {deleteMethod(data);})
}

// GET ALL USERS

const userData = (data) => {
    let container = document.createElement('div')
    container.className = 'user-container'
    document.body.appendChild(container)
    for (let i = 0; i < data.length; i++) {
        let objects = data[i]
        let name = objects.name
        let age = objects.age
        let gender = objects.gender
        let location = objects.location
        let userDiv = document.createElement('div')
        let userNameDiv = document.createElement('h3')
        let userAge = document.createElement('p')
        let userGender = document.createElement('p')
        let userLocation = document.createElement('p')
        let editBtn = document.createElement('button')
        let deleteBtn = document.createElement('button')
        editBtn.id = 'editBtn'
        deleteBtn.id = 'deleteBtn'
        userNameDiv.textContent = name
        userAge.textContent = age
        userGender.textContent = gender
        userLocation.textContent = location
        userDiv.className = 'userDiv'
        container.append(userDiv)
        userDiv.append(userNameDiv)
        userDiv.append(userAge)
        userDiv.append(userGender)
        userDiv.append(userLocation)
        input.addEventListener('search', () => {
            if (input.value !== name) {
                userDiv.style.display = "none"
            } else {
                userDiv.style.display = "fixed"
                editBtn.textContent = 'EDIT'
                deleteBtn.textContent = 'DELETE'
                userDiv.append(editBtn)
                userDiv.append(deleteBtn)
            }
        })
        deleteBtn.addEventListener('click', () => {
            $(userDiv).hide()
            deleteData()
        })
        editBtn.addEventListener('click', () => {
            $(userDiv).hide()
            updateUserForm()
        })
    }
}

// GET ALL POSTS

const postData = (data) => {
    let container = document.createElement('div')
    container.className = 'post-container'
    document.body.appendChild(container)
    for (let i = 0; i < data.length; i++) {
        let objects = data[i]
        let name = objects.name
        let content = objects.content
        let date = objects.formatted_date
        let postDiv = document.createElement('div')
        let userNameDiv = document.createElement('h3')
        let contentDiv = document.createElement('p')
        let dateDiv = document.createElement('p')
        userNameDiv.className = 'h3'
        userNameDiv.textContent = name
        contentDiv.textContent = content
        dateDiv.textContent = date
        postDiv.className = 'postDiv'
        container.append(postDiv)
        postDiv.append(userNameDiv)
        postDiv.append(contentDiv)
        postDiv.append(dateDiv)
    }
}

// CREATE POST

const userPost = () => {
    const postName = document.getElementById('name-box')
    const content = document.getElementById('post-box')
    let container = document.createElement('div')
    let postDiv = document.createElement('div')
    let userNameDiv = document.createElement('h3')
    let contentDiv = document.createElement('p')
    container.className = 'post-container'
    userNameDiv.className = 'h3'
    postDiv.className = 'postDiv'
    userNameDiv.textContent = postName.value
    contentDiv.textContent = content.value
    document.body.appendChild(container)
    container.append(postDiv)
    postDiv.append(userNameDiv)
    postDiv.append(contentDiv)

}

post.addEventListener('click', (e) => {
    e.preventDefault()
    userPost()
})

// CREATE USER

const postInfo = () => {
    const res = fetch('/users',
    {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify({
        name: userName.value,
        age: userAge.value,
        gender: userGender.value,
        location: userLocation.value
        })
    })
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    postInfo()
})

// UPDATE USER

const updateMethod = async (data) => {
    for (let i = 0; i < data.length; i++) {
        let updateName = document.querySelector("#update-name")
        let updateAge = document.querySelector("#update-age")
        let updateGender = document.querySelector("#update-gender")
        let updateLocation = document.querySelector("#update-location")
        let objects = data[i]
        let id = objects.user_id
        let name = objects.name
        if (name === input.value) {
            const res = await fetch(`/users/${id}`,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    name: updateName.value,
                    age: updateAge.value,
                    gender: updateGender.value,
                    location: updateLocation.value
                })
            })
        }
    }
}

updateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    updateData()
})

// DELETE USER

const deleteMethod = async (data) => {
    for (let i = 0; i < data.length; i++) {
        let objects = data[i]
        let id = objects.user_id
        let name = objects.name
        if (name === input.value) {
            const res = await fetch(`/users/${id}`,
    {
        method: 'DELETE'
    })
        }
    }
}