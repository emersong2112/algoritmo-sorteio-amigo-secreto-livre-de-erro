# Algoritmo de sorteio para amigo secreto com fluxo perfeito.

Aqui foi criado um algoritmo de sorteio para amigo secreto com o objetivo de corrigir um problema bem comum:

 - Uma pessoa sortear a si mesma
 - Duas pessoas se sortearem isoladamente do grupo.

 A técnica utilizada foi ao invés de sortear pessoas para outras pessoas de forma aleatória, nós pegamos a lista de pessoas e reorganizamos de forma aleatória.
 
 Após reorganizar a lista, cada pessoa recebe o nome da pessoa seguinte da lista;
 A última pessoa recebe o nome da primeira pessoa.

 Assim, temos um ciclo completo com todos os participantes entrelaçados.

A vantagem desse método em relação ao método convencional, é justamente evitar que o grupo fique divido, por exemplo:

 - Pessoa A > Pessoa B
 - Pessoa B > Pessoa C
 - Pessoa C > Pessoa A
 - Pessoa D > Pessoa E
 - Pessoa E > Pessoa D

 Desse modo, há uma divisão entre as pessoas D e E com as pessoas A, B e C.

Utilizando a técnica de ordenação, o grupo inteiro fica atrelado em um ciclo infinito:

 - Pessoa A > Pessoa B
 - Pessoa B > Pessoa C
 - Pessoa C > Pessoa D
 - Pessoa D > Pessoa E
 - Pessoa E > Pessoa A