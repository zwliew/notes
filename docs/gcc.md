---
sidebar_position: 2
---

# GCC

https://gcc.gnu.org/

## Working with GIMPLE/GENERIC trees

As a result of expressions being in [SSA](https://en.wikipedia.org/wiki/Static_single_assignment_form), the operands of an operator are assumed to have the same type.
Violating this causes wrong code or "internal compilation error"!

[match.pd](https://github.com/gcc-mirror/gcc/blob/master/gcc/match.pd) is a specification file for tree patterns that can be optimized:
- Thousands of lines long
- Written in a DSL inspired by Lisp
- Applicable to both GIMPLE and GENERIC trees
- Compiled into a giant C++ file containing each pattern on every change (takes ~30 min!)

## Possible performance optimizations for std::string_view::find_first_of and friends

Relevant links:
- https://stackoverflow.com/questions/70433152/missed-optimization-with-string-viewfind-first-of
- https://sourceware.org/pipermail/libc-alpha/2022-January/135013.html

`std::string_view::find_first_of` compiles to `sv.size()` calls to `memchr`. This is highly inefficient in most cases, where the number of "needles" are small and the "haystack" is large.

Possible optimizations:
1. Transform `std::string_view::find_first_of(small_str)` to `__builtin_mempbrk(sv.data(), small_str, small_str.size())`
 - This requires adding an optimized `mempbrk()` function to GCC or libc.
2. Transform `__builtin_memchr(small_str, chr, small_str.size())` to `if (chr == small_str[0] || chr == small_str[1] || ... || chr == small_str[small_str.size() - 1])`
