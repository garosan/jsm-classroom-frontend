import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS-401",
    name: "Advanced Algorithms",
    department: "Computer Science",
    description:
      "In-depth study of algorithm design and analysis, covering dynamic programming, greedy algorithms, graph algorithms, and NP-completeness. Emphasis on problem-solving and optimization techniques.",
  },
  {
    id: 2,
    code: "MATH-320",
    name: "Abstract Algebra",
    department: "Mathematics",
    description:
      "Introduction to algebraic structures including groups, rings, and fields. Explores homomorphisms, quotient structures, and polynomial rings with applications to cryptography and coding theory.",
  },
  {
    id: 3,
    code: "PHYS-215",
    name: "Quantum Mechanics I",
    department: "Physics",
    description:
      "Fundamental principles of quantum mechanics including wave-particle duality, Schrödinger equation, operators, and measurement theory. Laboratory component includes experiments on atomic spectra and interference patterns.",
  },
  {
    id: 4,
    code: "LIT-305",
    name: "Latin American Literature",
    department: "Literature",
    description:
      "Survey of major works and movements in Latin American literature from modernismo through magical realism. Authors include Borges, Cortázar, García Márquez, and Rulfo. Texts read in English translation.",
  },
];
