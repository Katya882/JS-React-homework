class User {
    constructor(user) {
        this.name = user.name || 'Unknown';
        this.age = user.age || 'Unknown';
        this.img = user.img || './img/default-user.png';
        this.role = user.role || 'User';
        this.courses = Array.isArray(user.courses)
            ? user.courses
            : [];
    }

    renderCourses() {
        return '';
    }

    render() {
        return `
            <div class="user">
                <div class="user-header">
                    <img src="${this.img}" alt="${this.name}">

                    <div class="user-info">
                        <p>Name: <strong>${this.name}</strong></p>
                        <p>Age: <strong>${this.age}</strong></p>
                    </div>

                    <div class="user-role">
                        ${this.role}
                    </div>
                </div>

                ${
            this.courses.length
                ? `<div class="courses">${this.renderCourses()}</div>`
                : ''
        }
            </div>
        `;
    }
}

class Student extends User {
    renderCourses() {
        return this.courses.map(course => `
            <div class="course student-course">
                <span>${course.title}</span>
                <span>${course.mark}</span>
            </div>
        `).join('');
    }
}

class Admin extends User {
    renderCourses() {
        return this.courses.map(course => `
            <div class="course admin-course">
                <p>Title: <strong>${course.title}</strong></p>

                <p>
                    Admin's score:
                    <span>${course.adminScore}</span>
                </p>

                <p>
                    Lector:
                    <strong>${course.lector}</strong>
                </p>
            </div>
        `).join('');
    }
}

class Lector extends User {
    renderCourses() {
        return this.courses.map(course => `
            <div class="course lector-course">
                <p>Title: <strong>${course.title}</strong></p>

                <p>
                    Lector's score:
                    <span>${course.lectorScore}</span>
                </p>

                <p>
                    Average student's score:
                    <span>${course.studentsScore}</span>
                </p>
            </div>
        `).join('');
    }
}

function createUser(user) {
    if (!user || typeof user !== 'object') {
        throw new Error('Invalid user data');
    }

    switch (user.role) {
        case roles.STUDENT:
            return new Student(user);

        case roles.ADMIN:
            return new Admin(user);

        case roles.LECTOR:
            return new Lector(user);

        default:
            return new User(user);
    }
}

const container = document.querySelector('.users');

if (!container) {
    throw new Error('Container .users not found');
}

users.forEach(user => {
    const userInstance = createUser(user);

    container.insertAdjacentHTML(
        'beforeend',
        userInstance.render()
    );
});


const roles = {
    STUDENT: 'student',
    ADMIN: 'admin',
    LECTOR: 'lector'
};

const users = [
    {
        name: 'Олексій Петренко',
        age: 20,
        role: 'student',
        courses: [
            { title: 'Математика', mark: 'Відмінно' },
            { title: 'Фізика', mark: 'Добре' }
        ]
    },
    {
        name: 'Марина Іванова',
        age: 40,
        role: 'admin',
        courses: [
            { title: 'Філософія', adminScore: 90, lector: 'Проф. Коваленко' }
        ]
    },
    {
        name: 'Дмитро Сидоренко',
        age: 50,
        role: 'lector',
        courses: [
            { title: 'Інформатика', lectorScore: 95, studentsScore: 88 }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.users');

    if (!container) {
        throw new Error('Контейнер .users не знайдено');
    }

    users.forEach(user => {
        const userInstance = createUser(user);
        container.insertAdjacentHTML('beforeend', userInstance.render());
    });
});