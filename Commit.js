import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const git = simpleGit();

const makeCommit = (n) => {
  if (n === 0) return git.push();

  // Generate a random day between Oct 27, 2024, and Oct 31, 2024
  const daysOffset = random.int(0, 5); // 0 to 4 days after Oct 27
  const date = moment("2024-10-06").add(daysOffset, "days").format();

  const data = { date };

  console.log(`Commit date: ${date}`);

  jsonfile.writeFile(path, data, (err) => {
    if (err) return console.error(`Error writing file: ${err}`);

    git.add([path]).commit(date, { "--date": date }, (commitErr) => {
      if (commitErr) return console.error(`Error committing: ${commitErr}`);
      makeCommit(n - 1);
    });
  });
};

// Run with a reasonable number of commits within the specified date range
makeCommit(10);
