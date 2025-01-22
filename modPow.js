/**
 * Computes modular exponentiation.
 * 
 * Calculates `(base^exp) % mod` efficiently using the method of repeated squaring.
 * This function is used in many cryptographic and number-theoretic algorithms.
 * 
 * @param {bigint} base - The base of the exponentiation.
 * @param {bigint} exp - The exponent to which the base is raised.
 * @param {bigint} mod - The modulus for the operation. Must be a positive integer.
 * @returns {bigint} The result of `(base^exp) % mod`.
 * 
 * @example
 * // Example usage:
 * const base = 4n;
 * const exp = 13n;
 * const mod = 497n;
 * const result = modPow(base, exp, mod); // result = 445n
 */
modPow(base, exp, mod) {
    if (mod === 1n) return 0n;
    
    let result = 1n;
    base = base % mod;
    
    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exp = exp / 2n;
    }
    
    return result;
}
