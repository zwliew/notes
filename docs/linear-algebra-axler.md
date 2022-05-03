---
sidebar_position: 10
---

# Solutions to Axler's Linear Algebra Done Right (3rd ed)

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


### Q9
