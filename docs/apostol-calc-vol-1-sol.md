# Apostol's Calculus Vol. 1 Solutions

## Chapter I 3.3

### Theorem I.5

$$
\begin{align*}
a(b - c) &= a(b + (-c)) \\
&= ab + a(-c) \\
&= ab + a(-c) + (ac + (-(ac))) \\
&= ab + a(-c + c) + (-(ac)) \\
&= ab + a(0) + (-(ac)) \\
&= a(b + 0) + (-(ac)) \\
&= ab + (-(ac)) \\
&= ab - ac
\end{align*}
$$

### Theorem I.6

$$
\begin{align*}
0 \cdot a &= a \cdot 0 \\
&= a \cdot (a + (-a)) \\
&= a \cdot (a - a) \\
&= aa - aa \\
&= 0
\end{align*}
$$

### Theorem I.7

By Axiom 6, let $y$ be the real number such that $ay = 1$. Then,

$$
\begin{align*}
b &= (1)b \\
&= (ay)b \\
&= (ab)y \\
&= (ac)y \\
&= (ay)c \\
&= (1)c \\
&= c
\end{align*}
$$

### Theorem I.8

By Axiom 6, there exists $y \in \mathbb{R}$ such that $ay = 1$. Let $x = by$. Then,

$$
\begin{align*}
ax &= a(by) \\
&= b(ay) \\
&= b
\end{align*}
$$

Suppose that $\exists x_1, x_2 \in \mathbb{R}$ such that $ax_1 = ax_2 = b$. Then, by Theorem I.7, $x_1 = x_2$. Therefore, there is a unique $x$ such that $ax = b$.

### Theorem I.9

$$
\begin{align*}
b/a &= (aa^{-1})(b/a) \\
&= (a \cdot (b/a))(a^{-1}) \\
&= b \cdot a^{-1}
\end{align*}
$$

### Theorem I.10

$$
\begin{align*}
(a^{-1})^{-1} &= (aa^{-1})(a^{-1})^{-1} \\
&= a(a^{-1}(a^{-1})^{-1}) \\
&= a(1) \\
&= a
\end{align*}
$$

### Theorem I.11

WLOG, suppose $b \ne 0$. By Axiom 6 and Theorem I.8, $b^{-1}$ exists.

$$
\begin{align*}
ab = 0 &\implies a(b \cdot b^{-1}) = 0 \cdot b^{-1} \\
&\implies a(1) = 0 \\
&\implies a = 0
\end{align*}
$$

### Theorem I.12

$$
\begin{align*}
(-a)b &= ab + (-(ab)) + (-a)b \\
&= (a + (-a))b + (-(ab)) \\
&= (0)b + (-(ab)) \\
&= -(ab)
\end{align*}
$$

$$
\begin{align*}
(-a)(-b) &= -(a(-b)) \\
&= -((-b)a) \\
&= -(-(ba)) \\
&= -(-(ab)) \\
&= ab
\end{align*}
$$

## Chapter 12.8

### Q22

We know that for any choice of $x, y$,
$$
\begin{align*}
&(xA + yB) \cdot (4yA - 9xB) \\
&= 4xyA \cdot A + (4y^2 - 9x^2)A \cdot B - 9xyB \cdot B \\
&= 0
\end{align*}
$$

Choosing $x = 1$ and $y = 0$, we get $A \cdot B = 0$, meaning that $A$ and $B$ are orthogonal.

$||A|| = 6$, so $A \cdot A = 36$, and so we get $144xy - 9xyB\cdot B = 0$.

Choosing $x = y = 1$, we get $B \cdot B = 16$, so $||B|| = 4$ and $||2A + 3B|| = \sqrt{4A \cdot A + 9B \cdot B} = 12\sqrt{2}$.

### Q23

Since $B = C + D$ and $C = kA$ for some $k$, then
$$
\begin{align*}
B \cdot A &= C \cdot A + D \cdot A \\
&= kA \cdot A
\end{align*}
$$

$B \cdot A = 1 + 1 + 1 + 1 + 1 = 5$, and $A \cdot A = 1 + 4 + 9 + 16 + 25 = 55$, so $k = \frac{1}{11}$.

Thus, $C = \frac{1}{11}A$ and $D = B - \frac{1}{11}A$.

### Q24

For any two nonperpendicular vectors $A$ and $B$ in $V_n$, $k = \frac{B \cdot A}{A \cdot A}$.

Hence, $C = kA$ and $D = B - kA$ exist and satisfy the three conditions in Q23.


### Q25

#### Part a

Proof.

Since $A \cdot xB = 0$, the Pythagoras theorem states that $||A + xB||^2 = ||A||^2 + ||xB||^2 \ge ||A||^2$. Thus, $||A + xB|| \ge ||A||$.

#### Part b

We will prove the contrapositive: if $A$ is not orthogonal to $B$, then there exists $x \in \mathbb{R}$ such that $||A + xB|| \lt ||A||$.

Suppose A is not orthogonal to B, so $A \cdot B \ne 0$. This also means that $A$ and $B$ are non-zero vectors.

We know that $||A + xB||^2 - ||A||^2 = x(x||B||^2 + 2A \cdot B)$. Consider $k = \frac{-2A \cdot B}{||B||^2}$.

Suppose $A \cdot B \gt 0$. Then, $k \lt 0$, so $x = \frac{k}{2}$ satisfies the conditions $x \lt 0$ and $x \gt k$ that make $||A + xB||^2 - ||A||^2 \lt 0$.

Otherwise, suppose $A \cdot B \lt 0$. Then, $k \gt 0$, so the same $x$ satisfies the conditions $x \gt 0$ and $x \lt k$ that make $||A + xB||^2 - ||A||^2 \lt 0$.

Therefore, in all cases, $x = -\frac{A \cdot B}{||B||^2}$ is such that $||A + xB|| \lt ||A||$.
