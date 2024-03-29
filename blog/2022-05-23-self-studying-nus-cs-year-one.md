# Self-studying the NUS CS Y1 curriculum

In the National University of Singapore (NUS), freshmen who are studying computer science (CS) typically study the following courses:

1. CS1101S (Programming Methodology)
2. CS1231S (Discrete Structures)
3. CS2030S (Programming Methodology II)
4. CS2040S (Data Structures & Algorithms)
5. CS2100 (Computer Organisation)
6. CS2106 (Introduction to Operating Systems)

Most of these can be self-studied without ever enrolling in an official CS programme. Here's how.

## CS1101S (Programming Methodology)

CS1101S is the introductory CS course that most freshmen take, except for those who place out of it. I am part of the latter group, so I do not have first-hand experience of this course. Therefore, what I know is second-hand information from my coursemates.

CS1101S is largely based on the the book [Structure and Interpretation of Computer Programs](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html). It teaches functional programming through the language Source, which is best described as a subset of JavaScript. The course workload is grueling, but at least you have some fun working in the gamified programming environment called SourceAcademy.

I don't know of any free resource or course that replaces directly CS1101S. However -- take it from someone who placed out of the course and got through Y1 just fine -- any well-known introductory CS course should suffice. Ultimately, most introductory CS courses teach computational thinking and basic programming skills. This course is no exception.

So, here are some courses which I think should sufficiently replace this course:

1. [Introduction to Computer Science and Programming in Python (MIT's 6.0001)](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)
2. [Introduction to Computer Science (Harvard's CS50x)](https://cs50.harvard.edu/x/2022/)

## CS1231S (Discrete Structures)

CS1231S is your run-of-the-mill discrete mathematics course, which covers a hodgepodge of topics involving "discrete" objects. It covers topics including logic and proofs, set theory, relations, mathematical induction, functions, cardinality, combinatorics and probability, and graph theory. Some discrete mathematics courses include other topics like number theory.

As mentioned in [Teach Yourself Computer Science](https://teachyourselfcs.com/#math), the course I most recommend for studying this course is [Mathematics for Computer Science (MIT's 6.024J)](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/). Notably, I recommend the Fall 2010 revision over the 2015 revision as Prof Tom Leighton taught the former, and I greatly appreciate his teaching.

The course is accompanied by an equivalently-named textbook (linked in the course site). I recommend reading through the textbook chapter by chapter as it helps to internalise the content. In fact, in my opinion, reading the textbook and completing the problem sets is sufficient. Watch the lectures only if you have the time or you learn better with them.

## CS2040S (Data Structures and Algorithms)

CS2040S is another run-of-the-mill data structures and algorithms course. It covers topics including orders of growth, sorting, balanced binary search trees, various other trees, hash tables, simple amortized analysis, graph searching algorithms, shortest path algorithms, topological sorts, minimum spanning trees, heaps, union find data structure, and simple dynamic programming.

I recommend studying [Introduction to Algorithms (MIT 6.006)](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/). The resemblance between CS2040S and 6.006 is uncanny, from the types of topics covered to the order in which they are covered.

As before, I strongly recommend reading the relevant chapters of the accompanying textbook [Introduction to Algorithms (CLRS, 3 ed)](https://mitpress.mit.edu/books/introduction-algorithms-third-edition) and attempting the textbook exercises and course problem sets. The lectures are optional and serve to provide a slightly different persepective.

## CS2030S (Programming Methodology II)

CS2030S covers a hodgepodge of topics including object-oriented programming, functional programming, concurrent and parallel programming, and simple type systems. 

At the moment, I am not sure of a good replacement for this course. That said, the well-written course notes are [online for self-study](https://nus-cs2030s.github.io/2122-s2/). Much of the course can be self-studied by reading the notes and doing coding practices. Unfortunately, I don't know of any available coding practices at the moment.

## CS2100 (Computer Organisation)

CS2100 covers how simple CPUs work. Topics include the C language, the MIPS architecture, processor datapath and control, boolean algebra, logic circuits, pipelining, caching, and performance analysis.

At the moment, I am not sure of a good replacement for this course. While there are several supplementary reference textbooks used in the course, I have not read them enough to recommend them.

That said, the official course notes are [online](https://www.comp.nus.edu.sg/~adi-yoga/CS2100/) and they're decent. [Bernard's cheatsheet](https://bernardteo.me/nus/CS2100%20Reference.pdf) also provides an overview of the course material.

## CS2106 (Introduction to Operating Systems)

CS2106 introduces main concepts in operating systems (OS) including processes and threads, process scheduling, inter-process communication (IPC), synchronization, memory management and virtual memory, and file systems. Most concepts are taught in relation to Unix. File system case studies include ext2 and FAT.

To self-study OSes, I strongly recommend [Operating System Engineering (MIT 6.S081)](https://pdos.csail.mit.edu/6.S081/2021/index.html). It is a much more complete introduction to OSes that revolves around a simpler Unix-based kernel called xv6. The labs are much more interesting as they require students to get down to the nitty-gritty of writing modifications to the xv6 kernel, rather than merely writing code that uses kernel syscalls and abstractions. Furthermore, the course covers additional topics like networking, RCU, and virtualization. The tradeoff of this completeness is that the course workload feels much heavier than CS2106's.

The course is accompanied by an xv6 handbook (linked in the course site) which provides a written explanation of the kernel. I recommend reading through the lecture slides and handbook, and working on the lab assignments following the schedule that is posted on the course site. The lecture videos are also helpful as they expand on the points in the lecture slides and handouts.

## Conclusion and looking to Y2

That concludes the CS freshmen courses at NUS. In year 2 (sophomore), I hope to look into ways to self-study courses including:

- CS2103T (Software Engineering)
- CS2104 (Programming Language Concepts)
- CS2105 (Introduction to Computer Networks)
- CS2109S (Introduction to AI and Machine Learning)
- CS3210 (Parallel Computing)
- CS3211 (Parallel and Concurrent Programming)
- CS3230 (Design and Analysis of Algorithms)
- CS4215 (Programming Language Implementation)

Besides computer science, I hope to look into courses from other disciplines like mathematics, physics, statistics, and even philosophy! With that, see you in Y2 😊
