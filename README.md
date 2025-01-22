# Modular Exponentiation (modPow)

## Overview

Modular exponentiation efficiently computes:

\[
\text{result} \equiv \text{base}^\text{exp} \, (\text{mod } \text{mod})
\]

This is a critical operation in cryptography, enabling secure and efficient computation of large powers modulo a number.

---

## How It Works

1. Start with \( \text{result} = 1 \).
2. Use repeated squaring to reduce the number of multiplications:
   - If the current bit of `exp` is 1, multiply `result` by `base` modulo `mod`.
   - Square `base` modulo `mod` at every step.
3. Continue until all bits of `exp` are processed.

This approach reduces time complexity to \(O(\log(\text{exp}))\).

---

## Usage

### Function Signature
```javascript
function modPow(base, exp, mod) {
    // Implementation
}
