const marvelHeroes = [
    { name: "Thor" },
    { name: "Spider Man" }
];

const dcHeroes = [
    { name: "Superman" },
    { name: "Batman" },
    { name: "Deadpool" }
];

Array.prototype.heroesRender = function(folder) {

    document.write(`
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Icon</th>
      </tr>
  `);

    this.forEach(hero => {

        const imageName = hero.name
            .toLowerCase()
            .replaceAll(" ", "");

        document.write(`
      <tr>
        <td>${hero.name}</td>
        <td>
          <img
            src="%20images/${folder}/${imageName}.svg"
            alt="${hero.name}"
            width="80"
          >
        </td>
      </tr>
    `);

    });

    document.write(`
    </table>
    <br>
  `);
};

dcHeroes.heroesRender("dc");
marvelHeroes.heroesRender("marvel");