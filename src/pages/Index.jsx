import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Select, Checkbox, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  const [students, setStudents] = useState([
    { rollNumber: 1, name: "John Doe", grade: "A", section: "A", promoted: true },
    { rollNumber: 2, name: "Jane Smith", grade: "B", section: "B", promoted: false },
    { rollNumber: 3, name: "Mike Johnson", grade: "C", section: "A", promoted: true },
    { rollNumber: 4, name: "Emily Brown", grade: "A", section: "B", promoted: true },
  ]);

  const handleGradeChange = (index, grade) => {
    const updatedStudents = [...students];
    updatedStudents[index].grade = grade;
    setStudents(updatedStudents);
  };

  const handleSectionChange = (index, section) => {
    const updatedStudents = [...students];
    updatedStudents[index].section = section;
    setStudents(updatedStudents);
  };

  const handlePromotionChange = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].promoted = !updatedStudents[index].promoted;
    setStudents(updatedStudents);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Student Promotion Table
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Roll Number</Th>
            <Th>Name</Th>
            <Th>Grade</Th>
            <Th>Section</Th>
            <Th>Promoted</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map((student, index) => (
            <Tr key={student.rollNumber}>
              <Td>{student.rollNumber}</Td>
              <Td>{student.name}</Td>
              <Td>
                <Select value={student.grade} onChange={(e) => handleGradeChange(index, e.target.value)}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="F">F</option>
                </Select>
              </Td>
              <Td>
                <Select value={student.section} onChange={(e) => handleSectionChange(index, e.target.value)}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Select>
              </Td>
              <Td>
                <Checkbox isChecked={student.promoted} onChange={() => handlePromotionChange(index)}>
                  {student.promoted ? "Pass" : "Fail"}
                </Checkbox>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
