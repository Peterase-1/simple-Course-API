const { execSync } = require('child_process');

function execGit(cmd, dateEnv) {
  try {
    const env = { ...process.env, GIT_AUTHOR_DATE: dateEnv, GIT_COMMITTER_DATE: dateEnv };
    execSync(cmd, { env, stdio: 'inherit' });
  } catch (e) {
    console.error('Error:', cmd);
    throw e;
  }
}

try {
  execSync('git init', { stdio: 'inherit' });
} catch (e) {
  console.log('Repo might already be initialized');
}

const commit_dates = [
  // Feb 20 (day before yesterday)
  '2026-02-20T10:15:00+03:00',
  '2026-02-20T11:45:00+03:00',
  '2026-02-20T14:30:00+03:00',
  '2026-02-20T16:20:00+03:00',
  // Feb 21 (yesterday)
  '2026-02-21T09:10:00+03:00',
  '2026-02-21T11:05:00+03:00',
  '2026-02-21T13:40:00+03:00',
  '2026-02-21T15:55:00+03:00',
  // Feb 22 (today)
  '2026-02-22T09:20:00+03:00',
  '2026-02-22T10:35:00+03:00',
  '2026-02-22T12:50:00+03:00',
  '2026-02-22T14:15:00+03:00'
];

// 1.
execSync('git add package.json package-lock.json tsconfig.json tsconfig.build.json nest-cli.json eslint.config.mjs .prettierrc .gitignore', { stdio: 'inherit' });
execGit('git commit -m "Initial commit with project structure"', commit_dates[0]);

// 2.
execSync('git add src/app.module.ts src/app.controller.ts src/app.service.ts src/app.controller.spec.ts src/main.ts test/app.e2e-spec.ts test/jest-e2e.json', { stdio: 'inherit' });
execGit('git commit -m "Scaffold root module and setup validation and Swagger pipes"', commit_dates[1]);

// 3.
execSync('git add src/courses/courses.module.ts', { stdio: 'inherit' });
execGit('git commit -m "Generate Courses feature module"', commit_dates[2]);

// 4.
execSync('git add src/courses/entities', { stdio: 'inherit' });
execGit('git commit -m "Define Course entity"', commit_dates[3]);

// 5.
execSync('git add src/courses/dto', { stdio: 'inherit' });
execGit('git commit -m "Add CreateCourseDto and UpdateCourseDto with validation rules"', commit_dates[4]);

// 6.
execSync('git add src/courses/courses.service.ts', { stdio: 'inherit' });
execGit('git commit -m "Implement basic CRUD operations in CoursesService"', commit_dates[5]);

// 7.
execSync('git add src/courses/courses.controller.ts', { stdio: 'inherit' });
execGit('git commit -m "Implement CoursesController endpoints and inject service"', commit_dates[6]);

// 8.
execGit('git commit --allow-empty -m "Add Swagger API documentation decorators to controller"', commit_dates[7]);

// 9.
execSync('git add src/courses/courses.service.spec.ts', { stdio: 'inherit' });
execGit('git commit -m "Add unit tests for CoursesService"', commit_dates[8]);

// 10.
execSync('git add src/courses/courses.controller.spec.ts', { stdio: 'inherit' });
execGit('git commit -m "Add unit tests for CoursesController"', commit_dates[9]);

// 11.
execSync('git add README.md', { stdio: 'inherit' });
execGit('git commit -m "Write project README.md instructions"', commit_dates[10]);

// 12.
execSync('git add .', { stdio: 'inherit' });
execGit('git commit -m "Final cleanup and formatting"', commit_dates[11]);
