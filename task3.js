// შექმენით ფუნქცია სადაც პარამეტრები გვექნება მასივი და სტინგი.
// მასივში უნდა იყოს სტუდენტების სახელები, და სტინგში მხოლოდ ერთი სტუდენტის. ფუნქციამ უნდა შეამოწმოს მასივში არის თუ არა ეს სტუდენტი და დააბრუნოს: სტუდენტი სწავლობს, თუ არ არის უნდა დააბრუნოს ასეთი სტუდენტი ვერ მოიძებნა

const students = ["saba", "luka", "data", "gvanca", "mari", "tato"];

const isStudent = (arr, str) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return `${arr[i]} is learning`;
    }
  }
  return `Such a student was not found`;
};

const luka = isStudent(students, "luka");
console.log(luka);

const nini = isStudent(students, "unknown");
console.log(unknownStudent);
