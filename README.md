# Algoritmo de sorteio para amigo secreto com fluxo perfeito.

Foi criado um algoritmo de sorteio para amigo secreto com o objetivo de corrigir problemas comuns no sorteio convencional: a possibilidade de uma pessoa ser sorteada para si mesma ou duas pessoas se sortearem entre si, deixando o grupo desintegrado.

A solução proposta consiste em reorganizar aleatoriamente a lista de participantes, de forma que cada pessoa receba o nome da pessoa seguinte da lista e a última pessoa receba o nome da primeira, resultando em um ciclo completo e entrelaçado de todos os participantes. Este método evita a divisão entre os participantes e mantém o grupo inteiro em um ciclo infinito.

No método convencional de sorteio para amigo secreto, há uma possibilidade de divisão entre as pessoas D e E com as pessoas A, B e C, conforme ilustrado abaixo:

Pessoa A sorteia Pessoa B
Pessoa B sorteia Pessoa C
Pessoa C sorteia Pessoa A
Pessoa D sorteia Pessoa E
Pessoa E sorteia Pessoa D
Para solucionar este problema, propõe-se a utilização da técnica de ordenação, em que a lista de participantes é reorganizada aleatoriamente e cada pessoa recebe o nome da pessoa seguinte da lista, resultando em um ciclo completo de todos os participantes entrelaçados. Dessa forma, o grupo inteiro fica atrelado em um ciclo infinito, como demonstrado a seguir:

Pessoa A recebe o nome de Pessoa B
Pessoa B recebe o nome de Pessoa C
Pessoa C recebe o nome de Pessoa D
Pessoa D recebe o nome de Pessoa E
Pessoa E recebe o nome de Pessoa A.


