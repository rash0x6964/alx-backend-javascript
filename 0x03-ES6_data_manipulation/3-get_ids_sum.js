export default function getStudentIdsSum(students) {
  return students.reduce((preVal, cur) => preVal + cur.id, 0);
}
