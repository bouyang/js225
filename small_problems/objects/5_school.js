let school = {
  students: [],

  addStudent(student) {
    let valid = ['1st', '2nd', '3rd', '4th', '5th'];

    if (!valid.includes(student.grade)) {
      this.students.push(student);
    } else {
      console.log('Invalid Year');
    }
    
  },

  enrollStudent(student, course) {
    student.courses.push(course);
  },

  addGrade(student, code, grade) {
    student.courses.forEach(course => {
      if (course.code === code) {
        course.grade = grade;
      }
    });
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    })
  },

  courseReport(courseName) {
    let allGrades = 0;
    let numStudents = 0;

    console.log(`=${courseName} Grades=`);
    this.students.forEach(student => {
      student.courses.forEach(studentCourse => {
        if (studentCourse.name === courseName && studentCourse.grade) {
          console.log(`${student.name}: ${studentCourse.grade}`);
          allGrades += studentCourse.grade;
          numStudents += 1;
        }
      });
    });

    console.log('---');
    if (allGrades / numStudents) console.log(`Course Average: ${allGrades / numStudents}`);
  }
}




function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.notes = course.notes || [];
          course.notes.push(note);
        }
      });
    },

    updateNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.notes = [note];
        }
      })
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.notes) {
          console.log(`${course.name}: ${course.notes.join('; ')}`);
        }
      })
    }
  }
}

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects

let foo = createStudent('foo', '3rd');
foo.addCourse({ name: 'Math', code: 101, grade: 95, });
foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });
foo.addCourse({ name: 'Physics', code: 202, });

let bar = createStudent('bar', '1st');
bar.addCourse({ name: 'Math', code: 101, grade: 91, });

let qux = createStudent('qux', '2nd');
qux.addCourse({ name: 'Math', code: 101, grade: 93, });
qux.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });

school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);

school.getReportCard(foo);

school.courseReport('Math');

school.courseReport('Advanced Math');

school.courseReport('Physics');