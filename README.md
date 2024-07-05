# ExtraordinariaGraphql

# Normativa

El examen se puede realizar en ordenador personal o en el ordenador del aula. En caso de que se decida hacer en el ordenador personal la universidad no se responsabiliza de ningún problema técnico asociado, incluída la pérdida de conectividad. Un alumno que no pueda entregar el examen porque no tiene conexión (en su ordenador personal) se considera No Presentado.
Los alumnos deben grabar durante todo el examen su TODO EL ESCRITORIO través de Blackboard, en SU SESIÓN DE GRUPO (la misma que el parcial). Si un alumno no graba la totalidad del examen o no graba todo el escritorio se considera No Presentado. Si se perdiera la conectividad se deberá volver a grabar inmediantamente.
NO se podrá usar internet (salvo las webs indicadas más abajo), ni herramientas que sugieran código como GitHub Copilot o Chat GPT. En caso de que en vídeo se evidencie su uso el alumno tendrá un 0 en el examen y se apliará la normativa de la Universidad correspondiente a la copia en los exámenes.
Se puede usar una chuleta impresa de una cara o escrita a mano de 2 caras.
Las preguntas serán única y exclusivamente sobre la comprensión del enunciado, se realizarán en voz alta y se responderán para todos.
Se debe entregar:
Enlace al deployment en Deno Deploy.
Enlace a la release de un repositorio github.
El archivo comprimido generado en la release.

La falta de cualquier de estos 3 elementos supondrá un 0 en el examen

Se pueden utilizar las siguientes webs:
https://rickandmortyapi.com/documentation/#rest
https://deno.com/
https://developer.mozilla.org/es/docs/Web/JavaScript
https://developer.mozilla.org/en-US/docs/Glossary/TypeScript
Enunciado
Se pide realizar una API GraphQL que tenga la misma funcionalidad (idéntica) que las siguientes queries del API GraphQL de Rick and Morty https://rickandmortyapi.com/graphql.

type Query {
 character(id: ID!): Character 
 charactersByIds(ids: [ID!]!): [Character] 
} 

El alumno deberá completar el schema graphql oportunamente para que la funcionalidad y los datos sean idénticos.
Los datos se deben obtener mediante llamadas al API Rest de Rick and Morty : https://rickandmortyapi.com/documentation/#rest
Nota: La profundidad de las queries en el API GraphQL de RickyMorty está limitada, sin embargo el API que debe realizar el alumno tendrá recursividad infinita
# PUNTUACIÓN
La query character(id: ID!): Character devuelve exactamente lo mismo que la query del API GraphQL de Ricky Morty. 3 puntos.
La query charactersByIds(ids: [ID!]!): [Character] devuelve examente lo mismo que la query del API GraphQL de Ricky Morty: 3 puntos
El schema graphql es correcto: 1 punto
Los parámetros de todos los resolvers están correctamente tipados (y están todos los resolvers necesarios): 1.5 punto.
Los valores de retorno de todos los resolvers están correctamente tipados (y están todos los resolvers necesarios): 1.5 puntos.
Rúbrica
Para cada item de evaluación:
Perfecto: 100%
Casi bien: 65%
Algo bien: 30%
Casi todo mal: 0%
