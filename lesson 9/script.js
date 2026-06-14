const amount = 100;
const monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
const tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];

const allTasks = monday.concat(tuesday);
console.log(allTasks)

const filteredTasks = allTasks.filter(task => task[1] > 120);

const tasksWithAmount = filteredTasks.map(task => {
    const hours = task[1]/60;
    const payment = hours * amount;

    return [task[0], hours, payment];
});

const rows = tasksWithAmount.map(task => `
  <tr>
    <td>Task name: ${task[0]}</td>
    <td>Task duration: ${task[1]} hours</td>
    <td>Task amount: $${task[2]}</td>
  </tr>
`).join('');

document.body.innerHTML = `
  <table border="1">
    <thead>
      <tr>
        <th>Task</th>
        <th>Duration</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
`;