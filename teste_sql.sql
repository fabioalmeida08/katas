-- Buscar os nomes de todos os alunos que frequentam alguma turma do professor 'JOAO PEDRO'.

SELECT a.Nome
FROM ALUNO a
JOIN ALUNO_TURMA at ON a.id = at.aluno_id
JOIN TURMA t ON at.turma_id = t.id
JOIN PROFESSOR p ON t.PROFESSOR_id = p.id
WHERE p.nome = 'JOAO PEDRO'

-- Buscar os dias da semana que tenham aulas da disciplina 'MATEMATICA'.
SELECT t.dia_da_semana
FROM TURMA t
JOIN DISCIPLINA d ON t.DISCIPLINA_id = d.id
WHERE d.nome = 'MATEMATICA'

-- Buscar todos os alunos que frequentem aulas de 'MATEMATICA' e também 'FISICA'.
SELECT a.Nome
FROM ALUNO a
JOIN ALUNO_TURMA at ON a.id = at.aluno_id
JOIN TURMA t ON at.turma_id = t.id
JOIN DISCIPLINA d ON t.DISCIPLINA_id = d.id
WHERE d.nome = 'FISICA' OR 'MATEMATICA'

-- Buscar as disciplinas que não tenham nenhuma turma.

-- Buscar os alunos que frequentem aulas de 'MATEMATICA' exceto os que frequentem 'QUIMICA'.