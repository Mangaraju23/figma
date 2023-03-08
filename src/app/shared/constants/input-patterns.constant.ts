export const inputPatterns = {
    emailpattern :
    '^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\\.[a-zA-Z0-9-.]{2,61}$',
    company_pattern:'^(?![0-9]+$)(?![!@#$&()`.+,\n\x22\x27%|<>:; ]+$)(?:[a-zA-Z0-9!@#$&`.+,\n\x22\x27%| \-]*)?$',
    name_pattern: '^[A-Za-z][A-Za-z0-9 ]{2,29}$',
    other_pattern: '^(?![0-9]+$)(?![!@#$&()`.+,\n\x22\x27%|<>:; ]+$)(?:[a-zA-Z0-9!@#$&`.+,\n\x22\x27%| \-]*)?$'
}