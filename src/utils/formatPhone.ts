/**
 * Formats a phone number string into a more readable format.
 * E.g., '+48535185100' -> '+48 535 185 100'
 * @param phone Raw phone string
 * @returns Formatted phone string
 */
export function formatPhone(phone: string): string {
    // Remove all non-digit characters except leading +
    const clean = phone.replace(/[^\d+]/g, '');
    // If starts with +, separate country code
    let formatted = clean;
    if (formatted.startsWith('+')) {
        const country = formatted.slice(0, 3); // assume +XX
        const rest = formatted.slice(3);
        // Group rest in triples
        const parts = rest.match(/\d{1,3}/g) || [];
        formatted = [country, ...parts].join(' ');
    } else {
        // Group digits in triples
        const parts = formatted.match(/\d{1,3}/g) || [];
        formatted = parts.join(' ');
    }
    return formatted;
}
