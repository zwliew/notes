---
sidebar_position: 10
---

# Linear Algebra Done Right (Axler, 3 ed) Solutions

## Exercise 1.A

### Q1

$$
\begin{align*}
\frac{1}{a+bi} &= c+di\newline
\implies \frac{a-bi}{a^2 + b^2} &= c + di \newline
\implies c = \frac{a}{a^2 +b^2} &\wedge d = -\frac{b}{a^2+b^2}
\end{align*}
$$

### Q2

$$
\begin{align*}
x &= \frac{-1 + \sqrt{3}i}{2} \newline
\implies x^2 &= \frac{-2 - 2\sqrt{3}i}{4} \newline
&= -\frac{1 + \sqrt{3}i}{2} \newline
\implies x^3 &= \frac{4}{4} \newline
&= 1 \newline
\therefore x &= \sqrt[3]{1}
\end{align*}
$$

### Q3

$$
\begin{align*}
x^2 &= i \newline
\implies x^4 + 1 &= 0 \newline
\implies (x^2 + 1)^2 - 2x^2 &= 0 \newline
\implies (x^2 + 1 + \sqrt{2}x)(x^2 + 1 - \sqrt{2}x) &= 0 \newline
\end{align*}
\newline
\begin{align*}
x &= \pm\frac{\sqrt{2} \pm \sqrt{-2}}{2} \newline
&= \pm \frac{\sqrt{2}(1 \pm i)}{2}
\end{align*}
$$

### Q4

Let $\alpha = a + bi$ and $\beta = x + yi$. Then,

$$
\begin{align*}
\alpha + \beta &= (a + bi) + (x + yi) \newline
&= (a + x) + (b + y)i \newline
&= (x + a) + (y + b)i \newline
&= (x + yi) + (a + bi) \newline
&= \beta + \alpha
\end{align*}
$$

### Q5

Let $\alpha = a + bi$, $\beta = x + yi$, and $\lambda = w + zi$. Then,

$$
\begin{align*}
(\alpha + \beta) + \lambda &= ((a + bi) + (x + yi)) + (w + zi) \newline
&= ((a + x) + (b + y)i) + (w + zi) \newline
&= ((a + x) + w) + ((b + y) + z)i \newline
&= (a + (x + w)) + (b + (y + z))i \newline
&= (a + bi) + ((x + w) + (y + z)i) \newline
&= (a + bi) + ((x + yi) + (w + zi)) \newline
&= \alpha + (\beta + \lambda)
\end{align*}
$$

### Q6

Use the same definitions as in Q5. Then,

$$
\begin{align*}
(\alpha\beta)\lambda &= ((a + bi)(x + yi))(w + zi) \newline
&= ((ax - by) + (ay + bx)i)(w + zi) \newline
&= (axw - byw - ayz - bxz) + (axz - byz + ayw + bxw)i \newline
&= (a + bi)((xw - yz) + (xz + yw)i) \newline
&= (a + bi)((x + yi)(w + zi)) \newline
&= \alpha(\beta\lambda)
\end{align*}
$$


### Q7

Let $\alpha = a + bi$ and $\beta = -a - bi$. Then,

$$
\begin{align*}
\alpha + \beta &= (a - a) + (b - b)i \newline
&= 0 + 0i \newline
&= 0
\end{align*}
$$

Suppose there exists $\beta_1, \beta_2 \in \mathbb{C}$ such that $\alpha + \beta_1 = 0$ and $\alpha + \beta_2 = 0$. Then,

$$
\begin{align*}
(\alpha + \beta_1) - (\alpha + \beta_2) &= 0 \newline
\implies \beta_1 - \beta_2 &= 0 \newline
\implies \beta_1 &= \beta_2
\end{align*}
$$

Therefore, there exists a unique $\beta \in \mathbb{C}$ such that $\alpha + \beta = 0$.

### Q8

Let $\alpha = a + bi$ and $\beta = \frac{1}{a + bi}$. Since $a \ne 0$, $\beta$ exists. Then,

$$
\begin{align*}
\alpha\beta &= \frac{a+bi}{a+bi} \newline
&= 1
\end{align*}
$$

Suppose there exists $\beta_1, \beta_2 \in \mathbb{C}$ such that $\alpha\beta_1 = \alpha\beta_2 = 1$. Then,

$$
\begin{align*}
\frac{1}{\alpha}\alpha\beta_1 &= \frac{1}{\alpha}\alpha\beta_2 \\
\implies \beta_1 &= \beta_2 
\end{align*}
$$

Therefore, $\beta = \frac{1}{\alpha}$ exists and is unique.


## Exercise 1.B

### Q6

Consider the associativity of vector addition in $\infty + (-\infty) + (-\infty)$. Grouping the first two terms, we get,

$$
(\infty + (-\infty)) + (-\infty) = 0 + (-\infty) = -\infty
$$

But grouping the last two terms, we get,

$$
\infty + (-\infty + (-\infty)) = \infty + (-\infty) = 0
$$

This is a contradiction as $-\infty \ne 0$. The associativity of vector addition is violated. Therefore, $\mathbb{R} \cup \{\infty\} \cup \{-\infty\}$ is not a vector space.

## Exercise 1.C

### Q11

Let $U_1, U_2$ be two subspaces of $V$.

Suppose $U_1 \cup U_2$ is a subspace of $V$ and $u_1 \in U_1$ and $u_2 \in U_2$. Then, $u_1 + u_2 \in U_1 \cup U_2$. WLOG, suppose $u_1 + u_2 \in U_1$. Then, $u_2 = ((u_1 + u_2) - u_1) \in U_1$. Therefore, $U_1 \subseteq U_2$. Similarly, if $u_1 + u_2 \in U_2$, we can prove that $U_2 \subseteq U_1$.

Now, we prove the direction of the implication. WLOG, suppose $U_1 \subseteq U_2$. Then, $U_1 \cup U_2 = U_2$. It is obvious that $U_1 \cup U_2$ is also a subspace. Similarly, we can prove that this hold true if $U_2 \subseteq U_1$.

### Q13

Reminder to revisit this later.

### Q14

Suppose $v = u + w \in U + W$, where $u \in U$ and $w \in W$. That is,

$$
v = (u_x + w_x, u_x + w_x, u_y + w_x, u_y + w_y)
$$

Let $x = u_x + w_x, y = u_y + w_x, z = u_y + w_y$. It is clear that $v = (x, x, y, z)$ where $x, y, z \in \mathbb{F}$.

Now, let $v = (x, x, y, z)$ where $x, y, z \in \mathbb{F}$. Let $u = (x, x, y, y) \in U$ and $w = (0, 0, 0, z - y) \in W$. Then, we have $v = u + w \in U + W$.

Therefore, $U + W = \{(x, x, y, z) \in \mathbb{F}^4 : x, y, z \in \mathbb{F}\}$.

### Q15

By closure of vector addition, $U + U \subseteq U$. Furthermore, by definition of subspace sums, $U \subseteq U + U$. Therefore, $U + U = U$.

### Q16

$U + W = \{ u + w : u \in U, w \in W \} = \{ w + u : u \in U, w \in W \} = W + U$.

The second equation is true because of the commutativity of vector addition.

### Q17

$$
\begin{align*}
(U_1 + U_2) + U_3 &= \{ (u_1 + u_2) + u_3 : u \in U_1, u_2 \in U_2, u_3 \in U_3 \} \\
&= U\{ u_1 + (u_2 + u_3) : u \in U_1, u_2 \in U_2, u_3 \in U_3 \} \\
&= U_1 + (U_2 + U_3)
\end{align*}
$$

In a similar vein with the reasoning in Q16, the second equation is true because of the associativity of vector addition.

### Q18

The additive identity of addition on subspaces is the set $\{0\}$. Furthermore, only that set has an additive inverse.

### Q19

Let $U_1 = \{(x, 0) \in \mathbb{R}^2 : x \in \mathbb{R} \}$, $U_2 = \{(0, x) \in \mathbb{R}^2 : x \in \mathbb{R} \}$, and $V = W = U_1 + U_2$.

It is clear that $U_1 + W = W = U_2 + W$, but $U_1 \ne U_2$.

### Q20

Take $W = \{(0, x, 0, y) \in \mathbb{F}^4 : x, y \in \mathbb{F}\}$. For any $(x, y, z, w) \in \mathbb{F}^4$, $(x, y, z, w) = (x, x, z, z) + (0, y - z, 0, w - z) \in U + W$. Therefore, $\mathbb{F}^4 = U + W$.

It is also clear that $U \cap W = \{0\}$. Therefore, $\mathbb{F}^4 = U \oplus W$.

### Q21

Similar to Q20, take $W = \{(0, 0, x, y, z) \in \mathbb{F}^5 : x, y, z \in \mathbb{F} \}$. It is clear that $U \oplus W$ is a direct sum as vector $0$ can be uniquely represented as $u + w$ where $u = w = 0$.

For any $(f_1, f_2, f_3, f_4, f_4) \in \mathbb{F}^5$, we have

$$
(f_1, f_2, f_3, f_4, f_5) = (f_1, f_2, f_1 + f_2, f_1 - f_2, 2f_1) + (0, 0, f_3 - f_1 - f_2, f_4 - f_1 + f_2, f_5 - 2f_1) \in U + W
$$

Therefore, $\mathbb{F}^5 = U \oplus W$.

### Q22

Based on Q21, let $W_1 = \{(0, 0, x, 0, 0) \in \mathbb{F}^5 : x \in \mathbb{F}\}, W_2 = \{(0, 0, 0, y, 0) \in \mathbb{F}^5 : y \in \mathbb{F}\}, W_3 = \{(0, 0, 0, 0, z) \in \mathbb{F}^5 : z \in \mathbb{F}\}$.

It is clear that $W = W_1 \oplus W_2 \oplus W_3$. Since $\mathbb{F}^5 = U \oplus W$, thus $\mathbb{F}^5 = U \oplus W_1 \oplus W_2 \oplus W_3$.

### Q23

Let $V = \mathbb{F}^2$, $W = \{(x, x) \in \mathbb{F}^2\}$, $U_1 = \{(x, 0) \in \mathbb{F}^2\}$, and $U_2 = \{(0, x) \in \mathbb{F}^2\}$. Then, $U_1 \oplus W = V = U_2 \oplus W$, but $U_1 \ne U_2$.

### Q24

If a function $f \in U_e \cap U_o$, then

$$
\begin{align*}
&f(x) = f(-x) = -f(x) \\
&\implies 2f(x) = 0 \\
&\implies f(x) = 0 \\
&\implies f = 0
\end{align*}
$$

Since $U_e \cap U_o = \{0\}$, $U_e \oplus U_o$ is a direct sum.

For any $f \in U_e$ and $g \in U_o$, it is clear that $f + g \in \mathbb{R^R}$, so $U_e \oplus U_o \subseteq \mathbb{R^R}$.

For any $h \in \mathbb{R^R}$, we can write

$$
h(x) = \frac{h(x) + h(-x)}{2} + \frac{h(x) - h(-x)}{2}
$$

where $\frac{h(x) + h(-x)}{2} \in U_e$ and $\frac{h(x) - h(-x)}{2} \in U_o$. Therefore, $\mathbb{R^R} \subseteq U_e \oplus U_o$.

Combining the aforementioned results, we have $\mathbb{R^R} = U_e \oplus U_o$.

## Exercise 2.A

### Q1

Take any vector $v = a_1v_1 + a_2v_2 + a_3v_3 + a_4v_4 \in V$. Then,

$$
v = a_1(v_1 - v_2) + (a_2 + a_1)(v_2 - v_3) + (a_3 + a_2 + a_1)(v_3 - v_4) + (a_4 + a_3 + a_2 + a_1)v_4
$$

Therefore, $V \subseteq \text{span}\{v_1 - v_2, v_2 - v_3, v_3 - v_4, v_4\}$. It is clear that the converse holds too, and so $V = \text{span}\{v_1 - v_2, v_2 - v_3, v_3 - v_4, v_4\}$.

### Q2

#### Part a

Suppose the vector $v = 0$. Then, $0 = 1v$ and so the list $v$ is linearly dependent.

Conversely, if the list $v$ is linearly dependent, then $0 = av$ for some $a \ne 0$ and so the vector $v = 0$.

By contraposition, the list $v$ is linearly independent if and only if the vector $v \ne 0$.

#### Part b

Suppose the list $v = (v_1, v_2)$ is linearly dependent. Then, $0 = a_1v_1 + a_2v_2$ for some $a_1, a_2 \in \mathbb{F}$ not all $0$. WLOG, suppose $a_1 \ne 0$, so $v_1 = kv_2$ for some $k \in \mathbb{F}$. Then, one of the vectors is a scalar multiple of the other.

Conversely, suppose one of the vectors is a scalar multiple of the other. WLOG, let $v_1 = kv_2$ for some $k \in \mathbb{F}$. Then, $0 = v_1 + -(kv_2)$ and so $v$ is linearly dependent.

By contraposition, the list $v$ is linearly independent if and only if neither vector is a scalar multiple of the other.


#### Part c

Consider the equation $(0, 0, 0, 0) = a(1, 0, 0, 0) + b(0, 1, 0, 0) + c(0, 0, 1, 0)$. We have

$$
a(1) + b(0) + c(0) = 0 \implies a = 0 \\
a(0) + b(1) + c(0) = 0 \implies b = 0 \\
a(0) + b(0) + c(1) = 0 \implies c = 0
$$

Therefore, $a = b = c = 0$. The vectors are linearly independent in $\mathbb{F}^4$.

## Exercise 2.B

### Q1

It is obvious that if a basis contains a nonzero vector $v$, then another basis can be obtained by replacing $v$ with $kv$ where $k \in \mathbb{F}$ and $k \ne 0$. Furthermore, a set containing the zero vector cannot be a basis since it is linearly dependent. Hence, a vector space that has exactly one basis has to have the basis $\{\}$. The only possible vector space is $\{0\}$.

