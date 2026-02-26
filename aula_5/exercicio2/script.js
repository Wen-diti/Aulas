const users = [
    { id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
    { id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
    { id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
    { id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
    { id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
    { id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
    { id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
    { id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
    { id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
    { id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
    { id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
    { id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
    { id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
    { id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
    { id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
];

const user_active = users.filter((p) => p.active == true);
const user_inactive = users.filter((p) => p.active == false);
const user_developer = users.filter((p) => p.role == 'dev');
const user_designer = users.filter((p) => p.role == 'designer');
const user_managers = users.filter((p) => p.role == 'manager');
const user_analyst = users.filter((p) => p.role == 'data_analyst');
const user_salary_5k = users.filter((p) => p.salary > 5000);
const user_salary_4k = users.filter((p) => p.salary < 4000);
const user_30_years = users.filter((p) => p.age > 30);
const user_25_years = users.filter((p) => p.age < 25);
const user_analyst_active = users.filter((p) => p.role == 'data_analyst' && p.active == true);
const user_dev_salary_4k = users.filter((p) => p.role == 'dev' && p.salary > 4000);
const user_manager_30yold = users.filter((p) => p.role == 'manager' && p.age > 30);

const lista = [
    {titulo: "Usuários Ativos", dados: user_active},
    {titulo: "Usuários Inativos", dados: user_inactive},
    {titulo: "Desenvolvedores", dados: user_developer},
    {titulo: "Designers", dados: user_designer},
    {titulo: "Managers", dados: user_managers},
    {titulo: "Analistas de Dados", dados: user_analyst},
    {titulo: "Salário > 5000", dados: user_salary_5k},
    {titulo: "Salário < 4000", dados: user_salary_4k},
    {titulo: "Maiores de 30 anos", dados: user_30_years},
    {titulo: "Menores de 25 anos", dados: user_25_years},
    {titulo: "Analistas de Dados Ativos", dados: user_analyst_active},
    {titulo: "Devs com Salário > 4000", dados: user_dev_salary_4k},
    {titulo: "Managers com mais de 30 anos", dados: user_manager_30yold},
];

let container = document.getElementById('container');

function createCard(user){
    let div = document.createElement('div');
    let span = document.createElement('span');
    let title = document.createElement('h1');
    span.innerHTML = `${user.name} ${user.age} ${user.salary} ${user.role}`;
    div.appendChild(span);
    return div;
}

function createTitle(titulo){
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerHTML = titulo;
    div.appendChild(h2);
    return div;
}

lista.forEach(group => {
    const titleDiv = createTitle(group.titulo);
    container.appendChild(titleDiv);

    group.dados.forEach(user => {
        const card = createCard(user);
        container.appendChild(card);
    });
});