// --------------------------------------------------------------
// 1. Données brutes des questions
// --------------------------------------------------------------
export const questionsData = [
    {
        "question": "Quel mot-clé permet de déclarer une variable à portée de bloc qui ne peut pas être réassignée ?",
        "options": [
            "const",
            "static",
            "let",
            "var"
        ],
        "correct": 0
    },
    {
        "question": "Quelle est la valeur par défaut d'une variable déclarée avec 'let' sans initialisation ?",
        "options": [
            "null",
            "NaN",
            "0",
            "undefined"
        ],
        "correct": 3
    },
    {
        "question": "Que retourne l'expression 'typeof NaN' en JavaScript ?",
        "options": [
            "'number'",
            "'NaN'",
            "'undefined'",
            "'object'"
        ],
        "correct": 0
    },
    {
        "question": "Que retourne l'expression 'typeof null' en JavaScript ?",
        "options": [
            "'boolean'",
            "'undefined'",
            "'null'",
            "'object'"
        ],
        "correct": 3
    },
    {
        "question": "Quel type primitif a été introduit dans ECMAScript 2020 pour représenter des entiers arbitrairement grands ?",
        "options": [
            "Int64",
            "HugeNumber",
            "Long",
            "BigInt"
        ],
        "correct": 3
    },
    {
        "question": "Quel type primitif garantit l'unicité absolue de chaque valeur créée ?",
        "options": [
            "Unique",
            "String",
            "Symbol",
            "Id"
        ],
        "correct": 2
    },
    {
        "question": "Combien y a-t-il de types primitifs en JavaScript moderne (ES2020+) ?",
        "options": [
            "8",
            "6",
            "5",
            "7"
        ],
        "correct": 3
    },
    {
        "question": "Quelle est la portée d'une variable déclarée avec 'var' dans une fonction ?",
        "options": [
            "Portée de bloc",
            "Portée de classe",
            "Portée de fonction",
            "Portée globale"
        ],
        "correct": 2
    },
    {
        "question": "Comment appelle-t-on la zone entre le début d'un bloc et la déclaration d'une variable 'let' ou 'const' ?",
        "options": [
            "Temporal Dead Zone (TDZ)",
            "Dead Zone",
            "Hoist Zone",
            "Shadow Realm"
        ],
        "correct": 0
    },
    {
        "question": "Que produit l'accès à une variable 'let' avant sa ligne de déclaration ?",
        "options": [
            "null",
            "ReferenceError",
            "undefined",
            "TypeError"
        ],
        "correct": 1
    },
    {
        "question": "Que produit l'accès à une variable 'var' avant sa ligne de déclaration ?",
        "options": [
            "null",
            "undefined",
            "ReferenceError",
            "TypeError"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur de 'Boolean(\"\")' ?",
        "options": [
            "null",
            "false",
            "true",
            "undefined"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur de 'Boolean([])' ?",
        "options": [
            "true",
            "TypeError",
            "false",
            "undefined"
        ],
        "correct": 0
    },
    {
        "question": "Quelle est la valeur de 'Boolean({})' ?",
        "options": [
            "TypeError",
            "undefined",
            "false",
            "true"
        ],
        "correct": 3
    },
    {
        "question": "Quelle est la valeur de 'Boolean(0)' ?",
        "options": [
            "undefined",
            "NaN",
            "false",
            "true"
        ],
        "correct": 2
    },
    {
        "question": "Quelle est la valeur de 'Boolean('0')' ?",
        "options": [
            "true",
            "false",
            "NaN",
            "undefined"
        ],
        "correct": 0
    },
    {
        "question": "Quel est l'effet d'une réassignation sur une variable déclarée avec 'const' ?",
        "options": [
            "TypeError",
            "SyntaxError",
            "Silencieusement ignoré",
            "ReferenceError"
        ],
        "correct": 0
    },
    {
        "question": "Les propriétés d'un objet déclaré avec 'const' peuvent-elles être modifiées ?",
        "options": [
            "Oui, l'assignation de propriétés reste possible",
            "Uniquement en mode non-strict",
            "Seulement avec une méthode spécifique",
            "Non, l'objet est totalement immuable"
        ],
        "correct": 0
    },
    {
        "question": "Que retourne 'typeof undefined' ?",
        "options": [
            "'void'",
            "'object'",
            "'undefined'",
            "'null'"
        ],
        "correct": 2
    },
    {
        "question": "Que retourne 'typeof (() => {})' ?",
        "options": [
            "'arrow'",
            "'object'",
            "'function'",
            "'undefined'"
        ],
        "correct": 2
    },
    {
        "question": "Que retourne 'typeof [1, 2, 3]' ?",
        "options": [
            "'object'",
            "'list'",
            "'array'",
            "'iterable'"
        ],
        "correct": 0
    },
    {
        "question": "Quelle fonction standard permet de vérifier si une valeur est un tableau ?",
        "options": [
            "typeof v === 'array'",
            "Array.isArray(v)",
            "v.isArray()",
            "v instanceof List"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur retournée par 'Number(null)' ?",
        "options": [
            "0",
            "NaN",
            "undefined",
            "null"
        ],
        "correct": 0
    },
    {
        "question": "Quelle est la valeur retournée par 'Number(undefined)' ?",
        "options": [
            "0",
            "NaN",
            "undefined",
            "null"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur de 'Number(\"  123  \")' ?",
        "options": [
            "0",
            "123",
            "NaN",
            "undefined"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur de 'parseInt(\"10px\")' ?",
        "options": [
            "undefined",
            "10",
            "NaN",
            "10px"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur de 'parseInt(\"px10\")' ?",
        "options": [
            "0",
            "NaN",
            "undefined",
            "10"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode permet de vérifier si une valeur est NaN de façon stricte sans conversion ?",
        "options": [
            "isNotANumber()",
            "isNaN()",
            "Number.isNaN()",
            "Value.isNaN()"
        ],
        "correct": 2
    },
    {
        "question": "Que retourne 'Number.isNaN(\"abc\")' ?",
        "options": [
            "true",
            "false",
            "TypeError",
            "NaN"
        ],
        "correct": 1
    },
    {
        "question": "Que retourne 'isNaN(\"abc\")' ?",
        "options": [
            "true",
            "false",
            "NaN",
            "TypeError"
        ],
        "correct": 0
    },
    {
        "question": "Quelle est la valeur de '0.1 + 0.2 === 0.3' ?",
        "options": [
            "false",
            "true",
            "undefined",
            "NaN"
        ],
        "correct": 0
    },
    {
        "question": "Quelle propriété de Number représente le plus grand entier sûr en JavaScript ?",
        "options": [
            "Number.MAX_SAFE_INTEGER",
            "Math.MAX_INT",
            "Number.MAX_INT",
            "Number.MAX_VALUE"
        ],
        "correct": 0
    },
    {
        "question": "Quelle est la valeur de 'Number.MAX_SAFE_INTEGER' ?",
        "options": [
            "2^32 - 1",
            "2^64 - 1",
            "2^31 - 1 (2147483647)",
            "2^53 - 1 (9007199254740991)"
        ],
        "correct": 3
    },
    {
        "question": "Que retourne 'typeof 42n' ?",
        "options": [
            "'integer'",
            "'bigint'",
            "'number'",
            "'long'"
        ],
        "correct": 1
    },
    {
        "question": "Que provoque l'opération '10n + 5' sans conversion explicite ?",
        "options": [
            "15",
            "TypeError",
            "15n",
            "NaN"
        ],
        "correct": 1
    },
    {
        "question": "Quelle directive permet d'activer le mode strict en JavaScript ?",
        "options": [
            "'enable strict';",
            "'use strict';",
            "'strict mode';",
            "'strict: true;'"
        ],
        "correct": 1
    },
    {
        "question": "En mode strict, quelle est la valeur de 'this' dans une fonction appelée sans contexte ?",
        "options": [
            "window",
            "globalThis",
            "null",
            "undefined"
        ],
        "correct": 3
    },
    {
        "question": "Quel objet global universel a été introduit dans ES2020 pour remplacer window/global ?",
        "options": [
            "rootThis",
            "globalThis",
            "globalScope",
            "universalThis"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode permet d'obtenir la longueur d'une chaîne de caractères 'str' ?",
        "options": [
            "str.size",
            "str.length",
            "str.count()",
            "str.length()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la caractéristique principale des types primitifs en JavaScript concernant leur mutabilité ?",
        "options": [
            "Ils sont immuables",
            "Ils sont mutables en mode strict",
            "Ils sont mutables sauf les Symbol",
            "Ils sont mutables"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode de chaîne retourne une sous-chaîne entre un début et une fin ?",
        "options": [
            "sub()",
            "cut()",
            "slice()",
            "splice()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode vérifie si une chaîne commence par un motif spécifique ?",
        "options": [
            "startsWith()",
            "beginsWith()",
            "indexOfStart()",
            "hasPrefix()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode de chaîne permet de répéter une chaîne un nombre donné de fois ?",
        "options": [
            "times()",
            "loop()",
            "repeat()",
            "duplicate()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode retire les espaces aux deux extrémités d'une chaîne ?",
        "options": [
            "strip()",
            "trim()",
            "clean()",
            "removeSpaces()"
        ],
        "correct": 1
    },
    {
        "question": "Quel délimiteur est utilisé pour créer un gabarit de chaîne (template literal) ?",
        "options": [
            "\" (double quote)",
            "` (backtick)",
            "/ (slash)",
            "' (simple quote)"
        ],
        "correct": 1
    },
    {
        "question": "Comment insérer une expression 'x' dans un template literal ?",
        "options": [
            "%(x)",
            "#{x}",
            "${x}",
            "{{x}}"
        ],
        "correct": 2
    },
    {
        "question": "Quelle est la valeur de 'typeof Infinity' ?",
        "options": [
            "'undefined'",
            "'special'",
            "'number'",
            "'infinity'"
        ],
        "correct": 2
    },
    {
        "question": "Que retourne '1 / 0' en JavaScript ?",
        "options": [
            "TypeError",
            "Infinity",
            "NaN",
            "0"
        ],
        "correct": 1
    },
    {
        "question": "Que retourne '0 / 0' en JavaScript ?",
        "options": [
            "0",
            "Infinity",
            "TypeError",
            "NaN"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode permet de convertir une chaîne hexadécimale '1f' en nombre décimal ?",
        "options": [
            "parseFloat('1f', 16)",
            "Math.hex('1f')",
            "Number.fromHex('1f')",
            "parseInt('1f', 16)"
        ],
        "correct": 3
    },
    {
        "question": "Quelle est la différence entre '==' et '===' ?",
        "options": [
            "'==' compare les références d'adresse",
            "'===' ne fonctionne que sur les objets",
            "'==' est plus strict que '==='",
            "'===' vérifie la valeur et le type sans coercition"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut '\"5\" + 2' en JavaScript ?",
        "options": [
            "NaN",
            "7",
            "TypeError",
            "'52'"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut '\"5\" - 2' en JavaScript ?",
        "options": [
            "3",
            "'52'",
            "'3'",
            "NaN"
        ],
        "correct": 0
    },
    {
        "question": "Que vaut '\"5\" * \"2\"' en JavaScript ?",
        "options": [
            "NaN",
            "10",
            "'10'",
            "TypeError"
        ],
        "correct": 1
    },
    {
        "question": "Que vaut '[] + []' en JavaScript ?",
        "options": [
            "NaN",
            "'' (chaîne vide)",
            "[]",
            "'[object Object]'"
        ],
        "correct": 1
    },
    {
        "question": "Que vaut '[] + {}' en JavaScript ?",
        "options": [
            "TypeError",
            "'[object Object]'",
            "{}",
            "NaN"
        ],
        "correct": 1
    },
    {
        "question": "Que vaut 'true + true' en JavaScript ?",
        "options": [
            "2",
            "true",
            "'truetrue'",
            "NaN"
        ],
        "correct": 0
    },
    {
        "question": "Que vaut 'false == 0' ?",
        "options": [
            "false",
            "true",
            "undefined",
            "TypeError"
        ],
        "correct": 1
    },
    {
        "question": "Que vaut 'false === 0' ?",
        "options": [
            "TypeError",
            "false",
            "undefined",
            "true"
        ],
        "correct": 1
    },
    {
        "question": "Que vaut 'null == undefined' ?",
        "options": [
            "false",
            "undefined",
            "TypeError",
            "true"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut 'null === undefined' ?",
        "options": [
            "false",
            "TypeError",
            "undefined",
            "true"
        ],
        "correct": 0
    },
    {
        "question": "Quel opérateur est appelé 'opérateur de coalescence des nuls' ?",
        "options": [
            "||",
            "??",
            "?:",
            "?."
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur de 'null ?? 'default'' ?",
        "options": [
            "null",
            "'default'",
            "undefined",
            "TypeError"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur de 'undefined ?? 'default'' ?",
        "options": [
            "false",
            "'default'",
            "null",
            "undefined"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur de '0 ?? 'default'' ?",
        "options": [
            "null",
            "undefined",
            "0",
            "'default'"
        ],
        "correct": 2
    },
    {
        "question": "Quelle est la valeur de '0 || 'default'' ?",
        "options": [
            "'default'",
            "false",
            "0",
            "undefined"
        ],
        "correct": 0
    },
    {
        "question": "Quelle est la valeur de '\"\" ?? 'default'' ?",
        "options": [
            "null",
            "'default'",
            "\"\"",
            "undefined"
        ],
        "correct": 2
    },
    {
        "question": "Quelle est la valeur de '\"\" || 'default'' ?",
        "options": [
            "undefined",
            "\"\"",
            "'default'",
            "null"
        ],
        "correct": 2
    },
    {
        "question": "Quel opérateur permet d'accéder en toute sécurité à une propriété imbriquée sans générer d'erreur si l'intermédiaire est null/undefined ?",
        "options": [
            "?.",
            "->",
            "::",
            "??"
        ],
        "correct": 0
    },
    {
        "question": "Que vaut 'const a = null; a?.prop' ?",
        "options": [
            "undefined",
            "TypeError",
            "null",
            "ReferenceError"
        ],
        "correct": 0
    },
    {
        "question": "Comment appelle-t-on l'opérateur '?' suivi de ':' ?",
        "options": [
            "Opérateur Elvis",
            "Opérateur de coalescence",
            "Opérateur ternaire (conditionnel)",
            "Opérateur de liaison"
        ],
        "correct": 2
    },
    {
        "question": "Que retourne l'expression 'typeof (1, 2, 'hello')' en utilisant l'opérateur virgule ?",
        "options": [
            "'tuple'",
            "'string'",
            "'number'",
            "'array'"
        ],
        "correct": 1
    },
    {
        "question": "Quel opérateur unaire permet de supprimer une propriété d'un objet ?",
        "options": [
            "remove",
            "clear",
            "delete",
            "unset"
        ],
        "correct": 2
    },
    {
        "question": "Que retourne l'opérateur 'void 0' ?",
        "options": [
            "void",
            "0",
            "undefined",
            "null"
        ],
        "correct": 2
    },
    {
        "question": "Quel opérateur teste si une propriété existe dans un objet ou sa chaîne de prototypes ?",
        "options": [
            "in",
            "has",
            "exists",
            "contains"
        ],
        "correct": 0
    },
    {
        "question": "Quel opérateur teste si un objet est une instance d'un constructeur ou d'une classe ?",
        "options": [
            "isTypeOf",
            "instanceof",
            "typeof",
            "implements"
        ],
        "correct": 1
    },
    {
        "question": "Que vaut '\"length\" in []' ?",
        "options": [
            "TypeError",
            "undefined",
            "false",
            "true"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut '0 in [10, 20, 30]' ?",
        "options": [
            "false (0 n'est pas dans les valeurs)",
            "true (l'indice 0 existe)",
            "TypeError",
            "undefined"
        ],
        "correct": 1
    },
    {
        "question": "Que retourne l'expression '!!\"hello\"' ?",
        "options": [
            "undefined",
            "false",
            "'hello'",
            "true"
        ],
        "correct": 3
    },
    {
        "question": "Que retourne l'expression '!0' ?",
        "options": [
            "true",
            "undefined",
            "1",
            "false"
        ],
        "correct": 0
    },
    {
        "question": "Que vaut '5 & 1' (ET binaire) ?",
        "options": [
            "5",
            "1",
            "6",
            "0"
        ],
        "correct": 1
    },
    {
        "question": "Que vaut '5 | 2' (OU binaire) ?",
        "options": [
            "2",
            "3",
            "5",
            "7"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut '5 ^ 1' (XOR binaire) ?",
        "options": [
            "5",
            "1",
            "4",
            "6"
        ],
        "correct": 2
    },
    {
        "question": "Que vaut '~0' (NON binaire) ?",
        "options": [
            "1",
            "-0",
            "0",
            "-1"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut '1 << 3' (décalage à gauche) ?",
        "options": [
            "4",
            "3",
            "1",
            "8"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut '8 >> 2' (décalage à droite signé) ?",
        "options": [
            "4",
            "2",
            "0",
            "8"
        ],
        "correct": 1
    },
    {
        "question": "Que vaut '2 ** 3' (opérateur d'exponentiation) ?",
        "options": [
            "5",
            "8",
            "6",
            "9"
        ],
        "correct": 1
    },
    {
        "question": "Quel opérateur d'assignation logique équivaut à 'x = x || y' ?",
        "options": [
            "x |= y",
            "x ||= y",
            "x &&= y",
            "x ??= y"
        ],
        "correct": 1
    },
    {
        "question": "Quel opérateur d'assignation logique n'assigne que si x est null ou undefined ?",
        "options": [
            "x ?= y",
            "x &&= y",
            "x ||= y",
            "x ??= y"
        ],
        "correct": 3
    },
    {
        "question": "Quel opérateur d'assignation logique n'assigne que si x est truthy ?",
        "options": [
            "x ||= y",
            "x ??= y",
            "x &&= y",
            "x &= y"
        ],
        "correct": 2
    },
    {
        "question": "Que vaut 'true && 'bonjour'' ?",
        "options": [
            "true",
            "false",
            "undefined",
            "'bonjour'"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut 'false && 'bonjour'' ?",
        "options": [
            "'bonjour'",
            "undefined",
            "false",
            "true"
        ],
        "correct": 2
    },
    {
        "question": "Que vaut 'true || 'bonjour'' ?",
        "options": [
            "true",
            "undefined",
            "'bonjour'",
            "false"
        ],
        "correct": 0
    },
    {
        "question": "Que vaut 'false || 'bonjour'' ?",
        "options": [
            "undefined",
            "true",
            "false",
            "'bonjour'"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut '+true' en JavaScript ?",
        "options": [
            "1",
            "TypeError",
            "NaN",
            "true"
        ],
        "correct": 0
    },
    {
        "question": "Que vaut '+false' en JavaScript ?",
        "options": [
            "false",
            "0",
            "NaN",
            "TypeError"
        ],
        "correct": 1
    },
    {
        "question": "Que vaut '+\"123\"' ?",
        "options": [
            "123",
            "'123'",
            "TypeError",
            "NaN"
        ],
        "correct": 0
    },
    {
        "question": "Que vaut '+\"abc\"' ?",
        "options": [
            "NaN",
            "TypeError",
            "0",
            "undefined"
        ],
        "correct": 0
    },
    {
        "question": "Que vaut 'NaN === NaN' ?",
        "options": [
            "TypeError",
            "true",
            "undefined",
            "false"
        ],
        "correct": 3
    },
    {
        "question": "Quelle fonction compare deux valeurs selon l'algorithme SameValue (où NaN === NaN est true, et +0 !== -0) ?",
        "options": [
            "=== (strict equality)",
            "Math.same()",
            "Object.equals()",
            "Object.is()"
        ],
        "correct": 3
    },
    {
        "question": "Comment appelle-t-on une fonction définie sans nom, souvent passée en argument ?",
        "options": [
            "Fonction fantôme",
            "Fonction anonyme",
            "Fonction vide",
            "Fonction muette"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la syntaxe d'une fonction fléchée avec un seul paramètre 'x' qui retourne son carré ?",
        "options": [
            "x => x * x",
            "def x => x * x",
            "(x) -> x * x",
            "function(x) => x * x"
        ],
        "correct": 0
    },
    {
        "question": "Les fonctions fléchées possèdent-elles leur propre liaison 'this' ?",
        "options": [
            "Seulement avec le mot-clé this.bind()",
            "Oui, comme toute fonction",
            "Seulement en mode strict",
            "Non, elles héritent du 'this' lexical"
        ],
        "correct": 3
    },
    {
        "question": "Les fonctions fléchées possèdent-elles l'objet pseudo-tableau 'arguments' ?",
        "options": [
            "Uniquement dans les méthodes",
            "Non",
            "Uniquement si on le déclare",
            "Oui"
        ],
        "correct": 1
    },
    {
        "question": "Peut-on utiliser une fonction fléchée comme constructeur avec 'new' ?",
        "options": [
            "Oui, sans problème",
            "Seulement si elle retourne un objet",
            "Seulement avec la syntaxe class",
            "Non, cela lève un TypeError"
        ],
        "correct": 3
    },
    {
        "question": "Comment s'appelle le mécanisme par lequel une fonction interne conserve l'accès aux variables de sa fonction parente même après son exécution ?",
        "options": [
            "Un hoisting",
            "Une récursion",
            "Un prototype",
            "Une fermeture (closure)"
        ],
        "correct": 3
    },
    {
        "question": "Que signifie l'acronyme IIFE en JavaScript ?",
        "options": [
            "Immediately Invoked Function Expression",
            "Internal Iteration Function Element",
            "Interface Instance Function Entity",
            "Inline Instantiated Function Execution"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode de fonction permet de fixer la valeur de 'this' et d'exécuter immédiatement la fonction avec des arguments séparés par des virgules ?",
        "options": [
            "bind()",
            "invoke()",
            "apply()",
            "call()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode de fonction permet de fixer la valeur de 'this' et d'exécuter immédiatement la fonction en passant les arguments sous forme de tableau ?",
        "options": [
            "apply()",
            "execute()",
            "call()",
            "bind()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode de fonction retourne une nouvelle fonction avec 'this' fixé de façon permanente ?",
        "options": [
            "apply()",
            "call()",
            "bind()",
            "freeze()"
        ],
        "correct": 2
    },
    {
        "question": "Quel opérateur permet de regrouper un nombre indéfini d'arguments dans un tableau (paramètres du reste) ?",
        "options": [
            "& (varargs)",
            ".. (range operator)",
            "... (rest operator)",
            "* (splat operator)"
        ],
        "correct": 2
    },
    {
        "question": "Dans une déclaration de fonction, où doit obligatoirement être placé le paramètre du reste '...rest' ?",
        "options": [
            "Au milieu uniquement",
            "En première position",
            "N'importe où",
            "En dernière position"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut la propriété 'length' d'une fonction JavaScript ?",
        "options": [
            "Le nombre de lignes de code",
            "La taille en octets",
            "Le nombre de paramètres formels attendus",
            "Le nombre d'arguments reçus à l'exécution"
        ],
        "correct": 2
    },
    {
        "question": "Que vaut '((a, b, c = 1) => {}).length' ?",
        "options": [
            "1",
            "3",
            "0",
            "2 (les paramètres avec valeur par défaut ne sont pas comptés)"
        ],
        "correct": 3
    },
    {
        "question": "Quelle est la valeur retournée par une fonction sans instruction 'return' explicite ?",
        "options": [
            "undefined",
            "void",
            "null",
            "0"
        ],
        "correct": 0
    },
    {
        "question": "Les déclarations de fonctions 'function foo() {}' sont-elles hissées (hoisted) avec leur corps complet ?",
        "options": [
            "Non, seule la variable est hissée",
            "Non, jamais",
            "Oui",
            "Seulement en mode strict"
        ],
        "correct": 2
    },
    {
        "question": "Les expressions de fonctions 'const foo = function() {}' sont-elles hissées avec leur corps ?",
        "options": [
            "Uniquement avec var",
            "Non, la variable est soumise à la TDZ",
            "Oui, comme les déclarations",
            "Oui, totalement"
        ],
        "correct": 1
    },
    {
        "question": "Dans une méthode d'objet classique 'obj.method()', quelle est la valeur de 'this' lors de l'appel direct ?",
        "options": [
            "L'objet 'obj'",
            "La fonction elle-même",
            "window",
            "undefined"
        ],
        "correct": 0
    },
    {
        "question": "Si on extrait une méthode 'const fn = obj.method' et qu'on l'appelle 'fn()', que devient 'this' en mode strict ?",
        "options": [
            "obj",
            "TypeError",
            "window",
            "undefined"
        ],
        "correct": 3
    },
    {
        "question": "Comment s'appelle le motif consistant à transformer une fonction à N arguments en une chaîne de fonctions à 1 argument ?",
        "options": [
            "Le throttling",
            "Le currying (curryfication)",
            "La mémorisation",
            "Le debouncing"
        ],
        "correct": 1
    },
    {
        "question": "Comment appelle-t-on une fonction qui prend en argument une autre fonction ou qui en retourne une ?",
        "options": [
            "Une fonction racine",
            "Une fonction d'ordre supérieur (Higher-Order Function)",
            "Une fonction générique",
            "Une macro-fonction"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la particularité d'une fonction pure ?",
        "options": [
            "Mêmes entrées donnent mêmes sorties, sans effets de bord",
            "Elle s'exécute en temps constant",
            "Elle ne peut contenir que du code synchrone",
            "Elle ne manipule que des nombres"
        ],
        "correct": 0
    },
    {
        "question": "Quelle fonction native permet d'exécuter une chaîne de caractères comme du code JavaScript (déconseillée pour des raisons de sécurité) ?",
        "options": [
            "eval()",
            "compile()",
            "run()",
            "exec()"
        ],
        "correct": 0
    },
    {
        "question": "Quel mot-clé est utilisé pour créer une fonction génératrice ?",
        "options": [
            "function async*",
            "generator",
            "function*",
            "yield function"
        ],
        "correct": 2
    },
    {
        "question": "Quel mot-clé permet de suspendre l'exécution dans une fonction génératrice et d'émettre une valeur ?",
        "options": [
            "yield",
            "return*",
            "pause",
            "emit"
        ],
        "correct": 0
    },
    {
        "question": "Quel mot-clé permet de déléguer la génération à un autre itérable ou générateur ?",
        "options": [
            "yield*",
            "yield all",
            "delegate",
            "yield from"
        ],
        "correct": 0
    },
    {
        "question": "Que retourne l'appel d'une fonction génératrice 'function* gen() {}' ?",
        "options": [
            "La première valeur yieldée",
            "undefined",
            "Un objet Generator (itérateur)",
            "Une promesse"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode appelle-t-on sur un itérateur pour obtenir la valeur suivante ?",
        "options": [
            "get()",
            "next()",
            "forward()",
            "step()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la structure de l'objet retourné par 'iterator.next()' ?",
        "options": [
            "{ value: any, done: boolean }",
            "{ data: any, finished: boolean }",
            "{ item: any, complete: boolean }",
            "{ result: any, end: boolean }"
        ],
        "correct": 0
    },
    {
        "question": "Quelle boucle ES6 permet d'itérer directement sur les valeurs d'un objet itérable (tableau, Map, générateur) ?",
        "options": [
            "for...in",
            "loop...of",
            "for...each",
            "for...of"
        ],
        "correct": 3
    },
    {
        "question": "Quelle boucle permet d'itérer sur les clés énumérables d'un objet ?",
        "options": [
            "for...keys",
            "for...each",
            "for...of",
            "for...in"
        ],
        "correct": 3
    },
    {
        "question": "Comment appelle-t-on la technique consistant à stocker le résultat d'appels de fonction coûteux pour les réutiliser ?",
        "options": [
            "La mise en cache mémoire virtuelle",
            "La compilation JIT",
            "La mémorisation (memoization)",
            "Le hoisting dynamique"
        ],
        "correct": 2
    },
    {
        "question": "Dans une fonction récursive, comment appelle-t-on la condition qui arrête la récursion ?",
        "options": [
            "Le point d'ancrage",
            "La limite de pile",
            "La condition d'échappement",
            "Le cas de base (base case)"
        ],
        "correct": 3
    },
    {
        "question": "Que provoque une récursion infinie en JavaScript ?",
        "options": [
            "TypeError: Recursion limit",
            "RangeError: Maximum call stack size exceeded",
            "TimeoutError",
            "OutOfMemoryException"
        ],
        "correct": 1
    },
    {
        "question": "Qu'est-ce que l'optimisation des appels terminaux (Tail Call Optimization - TCO) ?",
        "options": [
            "Le précalcul à la compilation",
            "L'élimination du cadre de pile pour les fonctions appelées en position finale",
            "La parallélisation des fonctions",
            "L'inlining automatique des boucles"
        ],
        "correct": 1
    },
    {
        "question": "Comment définir une valeur par défaut pour un paramètre de fonction 'b' ?",
        "options": [
            "function f(a, default b: 10) {}",
            "function f(a, b: 10) {}",
            "function f(a, b || 10) {}",
            "function f(a, b = 10) {}"
        ],
        "correct": 3
    },
    {
        "question": "Les paramètres par défaut sont-ils évalués au moment de la définition ou à chaque appel de fonction ?",
        "options": [
            "À chaque appel de fonction (évaluation à la volée)",
            "Une seule fois au premier chargement",
            "Au moment de la définition",
            "À la compilation JIT"
        ],
        "correct": 0
    },
    {
        "question": "Quelle portée est créée pour la liste des paramètres lorsqu'ils contiennent des expressions par défaut ?",
        "options": [
            "La portée globale",
            "Aucune portée",
            "Une portée intermédiaire distincte",
            "La portée de bloc interne"
        ],
        "correct": 2
    },
    {
        "question": "Que produit 'function test(a = b, b = 1) {}' lors d'un appel 'test()' sans argument ?",
        "options": [
            "ReferenceError (TDZ sur b)",
            "1 pour a",
            "null pour a",
            "undefined pour a"
        ],
        "correct": 0
    },
    {
        "question": "Comment peut-on déstructurer directement un objet passé en paramètre de fonction ?",
        "options": [
            "function f([ name, age ]) {}",
            "function f({ name, age }) {}",
            "function f(name, age from obj) {}",
            "function f(obj -> { name, age }) {}"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur de 'this' dans un gestionnaire d'événement attaché avec 'button.addEventListener('click', function() {})' ?",
        "options": [
            "window",
            "L'événement Event",
            "L'élément 'button'",
            "undefined"
        ],
        "correct": 2
    },
    {
        "question": "Quelle est la valeur de 'this' dans un gestionnaire d'événement attaché avec 'button.addEventListener('click', () => {})' ?",
        "options": [
            "Le 'this' de l'environnement englobant",
            "L'objet Event",
            "L'élément 'button'",
            "null"
        ],
        "correct": 0
    },
    {
        "question": "Comment appelle-t-on la technique limitant la fréquence d'exécution d'une fonction à un intervalle fixe ?",
        "options": [
            "Le chaining",
            "Le throttling",
            "Le currying",
            "Le debouncing"
        ],
        "correct": 1
    },
    {
        "question": "Comment appelle-t-on la technique retardant l'exécution d'une fonction jusqu'à ce qu'un certain délai se soit écoulé depuis le dernier appel ?",
        "options": [
            "Le pooling",
            "Le debouncing",
            "Le batching",
            "Le throttling"
        ],
        "correct": 1
    },
    {
        "question": "Que se passe-t-il si une fonction retourne explicitement un objet lorsqu'elle est appelée avec 'new' ?",
        "options": [
            "L'objet retourné est fusionné avec l'instance",
            "Une erreur est levée",
            "L'objet retourné explicitement remplace l'instance créée",
            "L'instance par défaut est retournée quand même"
        ],
        "correct": 2
    },
    {
        "question": "Que se passe-t-il si une fonction constructeur retourne un nombre primitif avec 'new' ?",
        "options": [
            "Une TypeError est levée",
            "undefined est retourné",
            "Le nombre est retourné",
            "Le nombre est ignoré, la nouvelle instance est retournée"
        ],
        "correct": 3
    },
    {
        "question": "Quelle propriété permet à une fonction d'accéder à son propre nom ?",
        "options": [
            "fn.constructorName",
            "fn.name",
            "fn.identifier",
            "fn.label"
        ],
        "correct": 1
    },
    {
        "question": "Quelle propriété de 'Function.prototype' permet d'obtenir la chaîne du code source de la fonction ?",
        "options": [
            "serialize()",
            "toString()",
            "inspect()",
            "toSource()"
        ],
        "correct": 1
    },
    {
        "question": "Quel objet standard est utilisé pour créer des fonctions dynamiquement à partir de chaînes de texte ?",
        "options": [
            "new Lambda('a + b')",
            "new Evaluator()",
            "new Function('a', 'b', 'return a + b')",
            "new Script('a + b')"
        ],
        "correct": 2
    },
    {
        "question": "Dans un module ES, quelle est la valeur de 'this' au niveau supérieur (top-level) ?",
        "options": [
            "window",
            "global",
            "undefined",
            "module.exports"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode ajoute un ou plusieurs éléments à la fin d'un tableau et retourne sa nouvelle longueur ?",
        "options": [
            "push()",
            "shift()",
            "pop()",
            "unshift()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode retire et retourne le dernier élément d'un tableau ?",
        "options": [
            "slice()",
            "shift()",
            "push()",
            "pop()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode retire et retourne le premier élément d'un tableau ?",
        "options": [
            "unshift()",
            "pop()",
            "shift()",
            "slice()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode ajoute un ou plusieurs éléments au début d'un tableau ?",
        "options": [
            "unshift()",
            "shift()",
            "prepend()",
            "push()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode transforme tous les éléments d'un tableau via une fonction de rappel et retourne un nouveau tableau ?",
        "options": [
            "forEach()",
            "transform()",
            "map()",
            "filter()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode retourne un nouveau tableau contenant uniquement les éléments qui satisfont un prédicat ?",
        "options": [
            "reduce()",
            "find()",
            "map()",
            "filter()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode applique un accumulateur sur chaque élément du tableau pour le réduire à une seule valeur ?",
        "options": [
            "accumulate()",
            "reduce()",
            "compress()",
            "fold()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode permet de trouver le premier élément d'un tableau qui satisfait une condition ?",
        "options": [
            "find()",
            "filter()",
            "first()",
            "search()"
        ],
        "correct": 0
    },
    {
        "question": "Que retourne 'find()' si aucun élément ne correspond au prédicat ?",
        "options": [
            "undefined",
            "false",
            "null",
            "-1"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode permet de trouver l'indice du premier élément satisfaisant une condition ?",
        "options": [
            "search()",
            "findIndex()",
            "indexOf()",
            "locate()"
        ],
        "correct": 1
    },
    {
        "question": "Que retourne 'findIndex()' ou 'indexOf()' si l'élément n'est pas trouvé ?",
        "options": [
            "undefined",
            "-1",
            "false",
            "null"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode teste si TOUS les éléments du tableau valident une condition ?",
        "options": [
            "every()",
            "validate()",
            "all()",
            "some()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode teste si AU MOINS UN élément du tableau valide une condition ?",
        "options": [
            "any()",
            "every()",
            "some()",
            "contains()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode vérifie si un tableau contient une valeur donnée (avec égalité SameValueZero) ?",
        "options": [
            "contains()",
            "includes()",
            "has()",
            "exists()"
        ],
        "correct": 1
    },
    {
        "question": "Que retourne '[NaN].includes(NaN)' ?",
        "options": [
            "true",
            "TypeError",
            "false",
            "undefined"
        ],
        "correct": 0
    },
    {
        "question": "Que retourne '[NaN].indexOf(NaN)' ?",
        "options": [
            "TypeError",
            "undefined",
            "0",
            "-1 (car indexOf utilise ===)"
        ],
        "correct": 3
    },
    {
        "question": "Quelle est la différence fondamentale entre 'slice()' et 'splice()' ?",
        "options": [
            "'slice()' ne fonctionne que sur les chaînes",
            "'slice()' ne modifie pas le tableau original, 'splice()' le modifie en place",
            "'splice()' est immuable, 'slice()' mute le tableau",
            "'splice()' ajoute des éléments à la fin seulement"
        ],
        "correct": 1
    },
    {
        "question": "Que fait '[1, 2, 3, 4, 5].slice(1, 3)' ?",
        "options": [
            "Modifie le tableau original",
            "Retourne [2, 3, 4]",
            "Retourne [2, 3]",
            "Retourne [1, 2, 3]"
        ],
        "correct": 2
    },
    {
        "question": "Par défaut, comment la méthode 'sort()' trie-t-elle les éléments ?",
        "options": [
            "Par ordre numérique décroissant",
            "Par ordre alphabétique en convertissant les éléments en chaînes",
            "Par ordre d'insertion",
            "Par ordre numérique croissant"
        ],
        "correct": 1
    },
    {
        "question": "Que donne '[10, 5, 20, 1].sort()' sans comparateur ?",
        "options": [
            "[1, 10, 20, 5]",
            "[5, 1, 10, 20]",
            "[1, 5, 10, 20]",
            "[20, 10, 5, 1]"
        ],
        "correct": 0
    },
    {
        "question": "Comment trier un tableau de nombres 'arr' par ordre croissant de façon correcte ?",
        "options": [
            "arr.sort((a, b) => a > b)",
            "arr.sort((a, b) => a - b)",
            "arr.sort()",
            "arr.sortNumbers()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode inverse l'ordre des éléments d'un tableau en place ?",
        "options": [
            "reverse()",
            "invert()",
            "toReversed()",
            "flip()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode introduite dans ES2023 retourne une copie inversée d'un tableau sans modifier l'original ?",
        "options": [
            "asReversed()",
            "reverse()",
            "toReversed()",
            "copyReverse()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode introduite dans ES2023 retourne une copie triée d'un tableau sans modifier l'original ?",
        "options": [
            "toSorted()",
            "asSorted()",
            "sorted()",
            "sortCopy()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode introduite dans ES2023 retourne une copie avec un élément remplacé à un index donné ?",
        "options": [
            "toUpdated(index, value)",
            "replace(index, value)",
            "with(index, value)",
            "setCopy(index, value)"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode permet d'aplatir un tableau multi-niveaux d'une certaine profondeur ?",
        "options": [
            "unwrap()",
            "compact()",
            "flat()",
            "flatten()"
        ],
        "correct": 2
    },
    {
        "question": "Que retourne '[1, [2, [3]]].flat(2)' ?",
        "options": [
            "[[1, 2, 3]]",
            "[1, 2, [3]]",
            "[1, 2, 3]",
            "[1, [2, 3]]"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode combine 'map()' et 'flat()' de profondeur 1 en une seule étape ?",
        "options": [
            "flatMap()",
            "flattenMap()",
            "mapFlat()",
            "deepMap()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode crée une chaîne en concaténant tous les éléments d'un tableau séparés par un délimiteur ?",
        "options": [
            "concat()",
            "toStringWith()",
            "join()",
            "implode()"
        ],
        "correct": 2
    },
    {
        "question": "Que retourne '[1, 2, 3].join('-')' ?",
        "options": [
            "'-1-2-3-'",
            "'1-2-3'",
            "'1,2,3'",
            "'[1-2-3]'"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode permet de fusionner deux ou plusieurs tableaux en retournant un nouveau tableau ?",
        "options": [
            "combine()",
            "concat()",
            "merge()",
            "append()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode remplit tous les éléments d'un tableau avec une valeur statique ?",
        "options": [
            "fill()",
            "populate()",
            "setAll()",
            "pad()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode copie une séquence d'éléments d'un tableau à un autre emplacement dans le même tableau ?",
        "options": [
            "copyTo()",
            "cloneSlice()",
            "copyWithin()",
            "shiftWithin()"
        ],
        "correct": 2
    },
    {
        "question": "Comment créer un tableau d'une taille de 5 rempli de zéros ?",
        "options": [
            "Array.create(5, 0)",
            "Array.zeros(5)",
            "[0 * 5]",
            "new Array(5).fill(0)"
        ],
        "correct": 3
    },
    {
        "question": "Comment créer un tableau à partir d'un objet itérable ou pseudo-tableau comme une NodeList ou 'arguments' ?",
        "options": [
            "new Array(iterable)",
            "Array.of()",
            "Array.from()",
            "Array.toArray()"
        ],
        "correct": 2
    },
    {
        "question": "Que produit 'Array.from({ length: 3 }, (_, i) => i * 2)' ?",
        "options": [
            "[undefined, undefined, undefined]",
            "[0, 2, 4]",
            "[2, 4, 6]",
            "[0, 1, 2]"
        ],
        "correct": 1
    },
    {
        "question": "Que fait 'Array.of(7)' contrairement à 'new Array(7)' ?",
        "options": [
            "Crée un tableau de 7 zéros",
            "Crée un tableau vide de longueur 7",
            "Crée le tableau [7]",
            "Lève une erreur"
        ],
        "correct": 2
    },
    {
        "question": "Que se passe-t-il si on assigne une valeur à 'arr.length = 0' sur un tableau ?",
        "options": [
            "La longueur devient 0 mais les données restent accessibles",
            "Rien ne change",
            "Le tableau est vidé de tous ses éléments",
            "Une erreur TypeError est levée"
        ],
        "correct": 2
    },
    {
        "question": "Que se passe-t-il si on accède à un indice inexistant dans un tableau comme 'arr[99]' ?",
        "options": [
            "NaN est retourné",
            "undefined est retourné",
            "Une IndexOutOfBoundsException est levée",
            "null est retourné"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode permet d'obtenir un itérateur sur les paires [clé, valeur] d'un tableau ?",
        "options": [
            "pairs()",
            "entries()",
            "values()",
            "keys()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode retourne un itérateur sur les clés (indices) d'un tableau ?",
        "options": [
            "keys()",
            "indices()",
            "indexes()",
            "getIterator()"
        ],
        "correct": 0
    },
    {
        "question": "Comment cloner superficiellement un tableau 'arr' en utilisant la syntaxe de décomposition (spread) ?",
        "options": [
            "[...arr]",
            "arr.clone()",
            "[..arr]",
            "{...arr}"
        ],
        "correct": 0
    },
    {
        "question": "Que vaut '[1, 2] + [3, 4]' en JavaScript ?",
        "options": [
            "'1,23,4'",
            "NaN",
            "[1, 2, 3, 4]",
            "TypeError"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode introduite dans ES2022 permet d'accéder à un élément avec des indices négatifs (ex: arr.at(-1)) ?",
        "options": [
            "item()",
            "at()",
            "get()",
            "index()"
        ],
        "correct": 1
    },
    {
        "question": "Que retourne '[10, 20, 30].at(-1)' ?",
        "options": [
            "undefined",
            "10",
            "30",
            "TypeError"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode itère sur un tableau et exécute un callback mais retourne TOUJOURS 'undefined' ?",
        "options": [
            "forEach()",
            "filter()",
            "map()",
            "each()"
        ],
        "correct": 0
    },
    {
        "question": "Peut-on interrompre une boucle '.forEach()' avec l'instruction 'break' ?",
        "options": [
            "Seulement en retournant false",
            "Oui, comme dans toute boucle",
            "Non, 'break' n'est pas autorisé dans une fonction de rappel forEach",
            "Uniquement avec 'break forEach'"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode ES2023 permet d'obtenir le dernier élément d'un tableau vérifiant un prédicat ?",
        "options": [
            "findLast()",
            "findEnd()",
            "lastMatch()",
            "findBack()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode ES2023 permet d'obtenir l'indice du dernier élément vérifiant un prédicat ?",
        "options": [
            "lastIndex()",
            "findReverseIndex()",
            "findLastIndex()",
            "findEndIndex()"
        ],
        "correct": 2
    },
    {
        "question": "Comment appelle-t-on un tableau contenant des 'trous' où certains indices n'ont pas de valeur assignée ?",
        "options": [
            "Un tableau discontinu",
            "Un tableau troué",
            "Un tableau creux (sparse array)",
            "Un tableau virtuel"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode permet de copier les propriétés énumérables d'un ou plusieurs objets sources vers un objet cible ?",
        "options": [
            "Object.copy()",
            "Object.assign()",
            "Object.merge()",
            "Object.extend()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode empêche toute modification d'un objet (ni ajout, ni suppression, ni modification de valeurs) ?",
        "options": [
            "Object.freeze()",
            "Object.lock()",
            "Object.seal()",
            "Object.preventExtensions()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode empêche l'ajout et la suppression de propriétés, mais autorise la modification des propriétés existantes ?",
        "options": [
            "Object.protect()",
            "Object.seal()",
            "Object.freeze()",
            "Object.preventExtensions()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode empêche uniquement l'ajout de nouvelles propriétés à un objet ?",
        "options": [
            "Object.seal()",
            "Object.noExtend()",
            "Object.freeze()",
            "Object.preventExtensions()"
        ],
        "correct": 3
    },
    {
        "question": "Comment vérifier si un objet a été gelé avec 'Object.freeze()' ?",
        "options": [
            "Object.isFrozen(obj)",
            "obj.isFrozen()",
            "Object.status(obj) === 'frozen'",
            "Object.isSealed(obj)"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode retourne un tableau contenant les noms des propriétés énumérables propres d'un objet ?",
        "options": [
            "Object.names()",
            "Object.entries()",
            "Object.properties()",
            "Object.keys()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode retourne un tableau des valeurs des propriétés énumérables propres d'un objet ?",
        "options": [
            "Object.keys()",
            "Object.items()",
            "Object.data()",
            "Object.values()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode retourne un tableau de paires [clé, valeur] pour chaque propriété énumérable propre ?",
        "options": [
            "Object.items()",
            "Object.entries()",
            "Object.toList()",
            "Object.pairs()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode inverse de 'Object.entries()' reconstruit un objet à partir d'une liste de paires [clé, valeur] ?",
        "options": [
            "Object.fromEntries()",
            "Object.createFrom()",
            "Object.inflate()",
            "Object.toObject()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode crée un nouvel objet avec un prototype spécifié ?",
        "options": [
            "Object.create()",
            "Object.clone()",
            "Object.new()",
            "Object.instantiate()"
        ],
        "correct": 0
    },
    {
        "question": "Comment créer un objet qui n'hérite d'aucun prototype (pas même Object.prototype) ?",
        "options": [
            "Object.create(null)",
            "new Object(null)",
            "Object.empty()",
            "{}"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode moderne permet d'obtenir le prototype d'un objet donné ?",
        "options": [
            "obj.prototype",
            "Object.getPrototype(obj)",
            "Object.getPrototypeOf(obj)",
            "obj.__proto__"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode permet de définir le prototype d'un objet (bien que souvent déconseillée pour les performances) ?",
        "options": [
            "obj.proto = proto",
            "Object.prototypeOf(obj, proto)",
            "Object.setPrototypeOf(obj, proto)",
            "obj.setPrototype(proto)"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode vérifie si une propriété appartient en propre à un objet sans chercher dans sa chaîne de prototypes (ES2022) ?",
        "options": [
            "obj.hasProp(prop)",
            "prop in obj",
            "obj.hasOwnProperty(prop)",
            "Object.hasOwn(obj, prop)"
        ],
        "correct": 3
    },
    {
        "question": "Pourquoi 'Object.hasOwn(obj, prop)' est-il préférable à 'obj.hasOwnProperty(prop)' ?",
        "options": [
            "Il prend en charge les Symbol automatiquement",
            "Il vérifie aussi le type de la propriété",
            "Il fonctionne même si l'objet n'a pas de prototype (ex: Object.create(null)) ou surcharge la méthode",
            "Il est plus rapide de 50%"
        ],
        "correct": 2
    },
    {
        "question": "Comment définir une propriété avec des descripteurs précis (writable, enumerable, configurable) ?",
        "options": [
            "Object.bindProp()",
            "Object.setDescriptor()",
            "Object.defineProperty()",
            "Object.createProp()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle est la valeur par défaut des descripteurs 'writable', 'enumerable' et 'configurable' lors de l'utilisation de 'Object.defineProperty()' ?",
        "options": [
            "null",
            "undefined",
            "false",
            "true"
        ],
        "correct": 2
    },
    {
        "question": "Que contrôle le descripteur 'enumerable' ?",
        "options": [
            "Si la propriété a un getter",
            "Si la propriété apparaît dans les boucles for...in et Object.keys()",
            "Si la propriété peut être supprimée avec delete",
            "Si la propriété peut être modifiée par assignation"
        ],
        "correct": 1
    },
    {
        "question": "Que contrôle le descripteur 'configurable' ?",
        "options": [
            "Si la propriété peut être supprimée et ses descripteurs modifiés",
            "Si la valeur peut changer",
            "Si elle est exportable en JSON",
            "Si elle est clonable"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode retourne tous les descripteurs de propriétés d'un objet ?",
        "options": [
            "Object.propertyConfig()",
            "Object.allDescriptors()",
            "Object.getDescriptors()",
            "Object.getOwnPropertyDescriptors()"
        ],
        "correct": 3
    },
    {
        "question": "Comment appelle-t-on la chaîne de liaison qui permet à un objet d'accéder aux propriétés et méthodes de ses ancêtres ?",
        "options": [
            "L'arbre des classes",
            "La chaîne des prototypes (prototype chain)",
            "La pile d'héritage",
            "La hiérarchie statique"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la racine terminale de la chaîne de prototypes pour la majorité des objets JavaScript ?",
        "options": [
            "Object.prototype",
            "Function.prototype",
            "null",
            "undefined"
        ],
        "correct": 2
    },
    {
        "question": "Que vaut 'Object.getPrototypeOf(Object.prototype)' ?",
        "options": [
            "Object",
            "null",
            "Function",
            "undefined"
        ],
        "correct": 1
    },
    {
        "question": "Comment définir un accesseur en lecture (getter) dans un littéral d'objet ?",
        "options": [
            "getter prop() { return this._prop; }",
            "prop: get() => this._prop",
            "read prop() { return this._prop; }",
            "get prop() { return this._prop; }"
        ],
        "correct": 3
    },
    {
        "question": "Comment définir un mutateur en écriture (setter) dans un littéral d'objet ?",
        "options": [
            "setter prop(v) { this._prop = v; }",
            "write prop(v) { this._prop = v; }",
            "prop: set(v) => this._prop = v",
            "set prop(v) { this._prop = v; }"
        ],
        "correct": 3
    },
    {
        "question": "Comment nommer dynamiquement une propriété dans un littéral d'objet (computed property name) ?",
        "options": [
            "{ eval(key): value }",
            "{ [key]: value }",
            "{ (key): value }",
            "{ ${key}: value }"
        ],
        "correct": 1
    },
    {
        "question": "Comment créer un clone superficiel (shallow copy) d'un objet 'obj' avec la décomposition ?",
        "options": [
            "const clone = obj.copy();",
            "const clone = { ...obj };",
            "const clone = Object.clone(obj);",
            "const clone = [ ...obj ];"
        ],
        "correct": 1
    },
    {
        "question": "Quelle fonction native moderne permet d'effectuer un clone profond (deep copy) de structures de données imbriquées ?",
        "options": [
            "Object.clone()",
            "Object.deepCopy()",
            "JSON.deepClone()",
            "structuredClone()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle limite possède 'JSON.parse(JSON.stringify(obj))' pour le clonage profond ?",
        "options": [
            "Il ne supporte pas les chaînes Unicode",
            "Il ne fonctionne pas sur les tableaux",
            "Il ignore les fonctions, les Symbols, undefined et convertit les Date en chaînes",
            "Il est trop lent"
        ],
        "correct": 2
    },
    {
        "question": "Quel objet standard permet d'intercepter et de personnaliser les opérations fondamentales sur un objet (get, set, has, etc.) ?",
        "options": [
            "Proxy",
            "Handler",
            "Interceptor",
            "Reflect"
        ],
        "correct": 0
    },
    {
        "question": "Comment s'appelle le deuxième argument fourni au constructeur 'new Proxy(target, handler)' contenant les pièges (traps) ?",
        "options": [
            "Le piège (trap)",
            "Le gestionnaire (handler)",
            "Le dispatcher",
            "L'intercepteur"
        ],
        "correct": 1
    },
    {
        "question": "Quel objet global fournit des méthodes statiques reflétant les opérations internes de JavaScript, souvent utilisé avec Proxy ?",
        "options": [
            "Reflect",
            "Mirror",
            "ProxyUtils",
            "Meta"
        ],
        "correct": 0
    },
    {
        "question": "Quel piège de Proxy intercepte la lecture d'une propriété ?",
        "options": [
            "access(target, prop)",
            "get(target, prop, receiver)",
            "read(target, prop)",
            "propertyGet(target, prop)"
        ],
        "correct": 1
    },
    {
        "question": "Quel piège de Proxy intercepte l'écriture d'une propriété ?",
        "options": [
            "set(target, prop, value, receiver)",
            "write(target, prop, value)",
            "put(target, prop, value)",
            "update(target, prop, value)"
        ],
        "correct": 0
    },
    {
        "question": "Quel piège de Proxy intercepte l'opérateur 'delete' ?",
        "options": [
            "delete(target, prop)",
            "removeProperty(target, prop)",
            "deleteProperty(target, prop)",
            "unset(target, prop)"
        ],
        "correct": 2
    },
    {
        "question": "Quel piège de Proxy intercepte l'appel de fonction sur un objet cible fonction ?",
        "options": [
            "execute(target, args)",
            "invoke(target, args)",
            "apply(target, thisArg, argumentsList)",
            "call(target, thisArg, args)"
        ],
        "correct": 2
    },
    {
        "question": "Quel symbole bien connu (Well-Known Symbol) permet de rendre un objet itérable avec 'for...of' ?",
        "options": [
            "Symbol.iterable",
            "Symbol.iterator",
            "Symbol.asyncIterator",
            "Symbol.iterate"
        ],
        "correct": 1
    },
    {
        "question": "Quel symbole bien connu permet de personnaliser la conversion d'un objet en valeur primitive ?",
        "options": [
            "Symbol.primitive",
            "Symbol.valueOf",
            "Symbol.cast",
            "Symbol.toPrimitive"
        ],
        "correct": 3
    },
    {
        "question": "Quel symbole bien connu est appelé par 'instanceof' pour vérifier la compatibilité ?",
        "options": [
            "Symbol.instanceOf",
            "Symbol.isInstance",
            "Symbol.hasInstance",
            "Symbol.checkType"
        ],
        "correct": 2
    },
    {
        "question": "Quel symbole bien connu permet de personnaliser la chaîne retournée par 'Object.prototype.toString.call(obj)' ?",
        "options": [
            "Symbol.tag",
            "Symbol.customType",
            "Symbol.typeName",
            "Symbol.toStringTag"
        ],
        "correct": 3
    },
    {
        "question": "Comment obtenir tous les symboles d'un objet donné ?",
        "options": [
            "Object.getOwnPropertySymbols(obj)",
            "Object.keys(obj, { symbols: true })",
            "Object.getSymbols(obj)",
            "Object.symbols(obj)"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode permet d'enregistrer et de partager un Symbol dans le registre global de symboles ?",
        "options": [
            "Symbol.global(key)",
            "Symbol.register(key)",
            "Symbol.for(key)",
            "Symbol.createShared(key)"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode permet de retrouver la clé d'un Symbol enregistré dans le registre global ?",
        "options": [
            "Symbol.keyFor(sym)",
            "Symbol.getRegisteredName(sym)",
            "Symbol.getKey(sym)",
            "sym.key"
        ],
        "correct": 0
    },
    {
        "question": "Que vaut 'Symbol('a') === Symbol('a')' ?",
        "options": [
            "true",
            "undefined",
            "false (chaque appel génère un symbole unique)",
            "TypeError"
        ],
        "correct": 2
    },
    {
        "question": "Que vaut 'Symbol.for('a') === Symbol.for('a')' ?",
        "options": [
            "TypeError",
            "true (ils partagent la même entrée dans le registre global)",
            "undefined",
            "false"
        ],
        "correct": 1
    },
    {
        "question": "Quelle syntaxe permet d'extraire la propriété 'nom' et de la renommer en 'pseudo' lors d'une déstructuration ?",
        "options": [
            "const { nom: pseudo } = user;",
            "const { pseudo = nom } = user;",
            "const { nom as pseudo } = user;",
            "const { nom -> pseudo } = user;"
        ],
        "correct": 0
    },
    {
        "question": "Comment définir une valeur par défaut 'age = 18' lors d'une déstructuration ?",
        "options": [
            "const { default age = 18 } = user;",
            "const { age: 18 } = user;",
            "const { age || 18 } = user;",
            "const { age = 18 } = user;"
        ],
        "correct": 3
    },
    {
        "question": "Quelle syntaxe permet de capturer les propriétés restantes d'un objet déstructuré ?",
        "options": [
            "const { a, ..rest } = obj;",
            "const { a, ...rest } = obj;",
            "const { a, others: rest } = obj;",
            "const { a, *rest } = obj;"
        ],
        "correct": 1
    },
    {
        "question": "Que se passe-t-il si l'on déstructure une propriété inexistante sans valeur par défaut ?",
        "options": [
            "Elle prend la valeur undefined",
            "Elle prend la valeur null",
            "Une ReferenceError est levée",
            "L'assignation échoue"
        ],
        "correct": 0
    },
    {
        "question": "Comment interdire l'ajout d'une propriété tout en maintenant les propriétés existantes modifiables et non supprimables ?",
        "options": [
            "Object.protect(obj)",
            "Object.lock(obj)",
            "Object.freeze(obj)",
            "Object.seal(obj)"
        ],
        "correct": 3
    },
    {
        "question": "Quel mot-clé introduit dans ES6 permet de déclarer une classe en JavaScript ?",
        "options": [
            "struct",
            "blueprint",
            "type",
            "class"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode spéciale sert à initialiser un nouvel objet lors de l'instanciation d'une classe ?",
        "options": [
            "__construct",
            "init",
            "create",
            "constructor"
        ],
        "correct": 3
    },
    {
        "question": "Quel mot-clé permet d'hériter d'une classe parente ?",
        "options": [
            "super",
            "implements",
            "inherits",
            "extends"
        ],
        "correct": 3
    },
    {
        "question": "Dans une classe dérivée, quelle fonction doit impérativement être appelée avant d'accéder à 'this' dans le constructeur ?",
        "options": [
            "parent()",
            "super()",
            "this.super()",
            "super.init()"
        ],
        "correct": 1
    },
    {
        "question": "Comment déclarer un champ privé dans une classe JavaScript moderne ?",
        "options": [
            "Avec un trait de soulignement _",
            "Avec le préfixe # (ex: #score)",
            "Avec @private",
            "Avec le mot-clé private"
        ],
        "correct": 1
    },
    {
        "question": "Peut-on accéder à un champ privé '#champ' depuis l'extérieur de la classe ?",
        "options": [
            "Oui, via Object.keys()",
            "Oui, avec la notation obj['#champ']",
            "Oui, en mode non-strict",
            "Non, une erreur de syntaxe ou d'accès est générée"
        ],
        "correct": 3
    },
    {
        "question": "Comment vérifier la présence d'un champ privé '#prop' sur une instance 'obj' (ES2022) ?",
        "options": [
            "obj.#prop !== undefined",
            "obj.has(#prop)",
            "Object.hasPrivate(obj, '#prop')",
            "#prop in obj"
        ],
        "correct": 3
    },
    {
        "question": "Quel mot-clé permet de définir une méthode ou propriété rattachée directement à la classe plutôt qu'à ses instances ?",
        "options": [
            "class",
            "const",
            "shared",
            "static"
        ],
        "correct": 3
    },
    {
        "question": "Comment appelle-t-on une méthode statique 'static test()' définie dans la classe 'User' ?",
        "options": [
            "User::test()",
            "new User().test()",
            "userInstance.static.test()",
            "User.test()"
        ],
        "correct": 3
    },
    {
        "question": "Comment exécuter du code d'initialisation statique complexe dans une classe (ES2022) ?",
        "options": [
            "static { /* bloc d'initialisation */ }",
            "static init() {}",
            "class.setup() {}",
            "static constructor() {}"
        ],
        "correct": 0
    },
    {
        "question": "Les déclarations de classe 'class Person {}' sont-elles soumises au hoisting avec initialisation ?",
        "options": [
            "Non, elles sont dans la Temporal Dead Zone (TDZ)",
            "Oui, comme les fonctions classiques",
            "Non, elles ne sont jamais hissées",
            "Oui, elles sont totalement hissées"
        ],
        "correct": 0
    },
    {
        "question": "Le corps d'une classe JavaScript s'exécute-t-il automatiquement en mode strict ?",
        "options": [
            "Non, jamais",
            "Oui, toujours obligatoirement",
            "Uniquement pour les méthodes privées",
            "Non, seulement si 'use strict' est écrit"
        ],
        "correct": 1
    },
    {
        "question": "Que retourne l'expression 'typeof (class {})' ?",
        "options": [
            "'type'",
            "'function'",
            "'class'",
            "'object'"
        ],
        "correct": 1
    },
    {
        "question": "Peut-on instancier une classe sans le mot-clé 'new' ?",
        "options": [
            "Oui, elle s'exécute comme une fonction",
            "Oui, en mode non-strict",
            "Non, un TypeError est systématiquement levé",
            "Seulement si elle n'a pas de constructeur"
        ],
        "correct": 2
    },
    {
        "question": "Comment appeler une méthode 'afficher()' de la classe parente depuis une classe enfant ?",
        "options": [
            "parent.afficher()",
            "this.super.afficher()",
            "super.afficher()",
            "Class.parent.afficher()"
        ],
        "correct": 2
    },
    {
        "question": "Comment définir une méthode d'instance 'saluer()' dans une classe ?",
        "options": [
            "saluer() { ... }",
            "function saluer() { ... }",
            "def saluer() { ... }",
            "method saluer() { ... }"
        ],
        "correct": 0
    },
    {
        "question": "Comment définir un accesseur 'score' dans une classe ?",
        "options": [
            "getter score() { return this.#score; }",
            "get score() { return this.#score; }",
            "score: get() { return this.#score; }",
            "function get score() { return this.#score; }"
        ],
        "correct": 1
    },
    {
        "question": "Comment définir un mutateur 'score' dans une classe ?",
        "options": [
            "score: set(val) { this.#score = val; }",
            "setter score(val) { this.#score = val; }",
            "set score(val) { this.#score = val; }",
            "function set score(val) { this.#score = val; }"
        ],
        "correct": 2
    },
    {
        "question": "Que se passe-t-il si une sous-classe ne déclare pas de constructeur ?",
        "options": [
            "L'instanciation retourne null",
            "Une erreur de compilation survient",
            "La classe parente n'est pas initialisée",
            "Un constructeur par défaut 'constructor(...args) { super(...args); }' est créé"
        ],
        "correct": 3
    },
    {
        "question": "Une classe peut-elle hériter de plusieurs classes en JavaScript (héritage multiple direct) ?",
        "options": [
            "Oui, avec 'implements'",
            "Non, JavaScript supporte uniquement l'héritage simple",
            "Oui, grâce aux interfaces",
            "Oui, avec 'extends A, B'"
        ],
        "correct": 1
    },
    {
        "question": "Comment implémente-t-on habituellement le partage de comportements multiples en JavaScript à défaut d'héritage multiple ?",
        "options": [
            "Par le motif de Mixin (fonctions de composition)",
            "Par l'héritage circulaire",
            "Par des interfaces multiples",
            "Par la directive include"
        ],
        "correct": 0
    },
    {
        "question": "Peut-on étendre une fonction constructeur classique avec le mot-clé 'class Sub extends ParentFunction' ?",
        "options": [
            "Seulement avec Babel",
            "Non, c'est interdit",
            "Non, uniquement d'autres classes ES6",
            "Oui, les classes peuvent hériter de toute fonction ayant un prototype valide"
        ],
        "correct": 3
    },
    {
        "question": "Peut-on étendre des classes intégrées natives comme 'Array' ou 'Error' avec 'class MyArray extends Array' ?",
        "options": [
            "Uniquement avec Object.create",
            "Non, c'est interdit en JavaScript",
            "Seulement en Node.js",
            "Oui, l'extension des types intégrés est totalement supportée"
        ],
        "correct": 3
    },
    {
        "question": "Quelle propriété spéciale 'new.target' permet de détecter si une fonction/classe a été invoquée avec 'new' ?",
        "options": [
            "new.instance",
            "new.target",
            "instance.target",
            "this.constructor.target"
        ],
        "correct": 1
    },
    {
        "question": "Comment créer une classe abstraite (qui ne peut pas être instanciée directement) en JavaScript standard ?",
        "options": [
            "En vérifiant 'if (new.target === AbstractClass) throw new Error(...)' dans le constructeur",
            "En marquant le constructeur 'private'",
            "Ce n'est pas réalisable en JavaScript",
            "Avec le mot-clé 'abstract class'"
        ],
        "correct": 0
    },
    {
        "question": "Où sont stockées les méthodes d'instance non-statiques définies dans une classe ?",
        "options": [
            "Dans le module global",
            "Directement sur chaque instance créée",
            "Dans la fermeture de l'instance",
            "Sur le prototype de la classe (ClassName.prototype)"
        ],
        "correct": 3
    },
    {
        "question": "Où sont stockés les champs de classe publics déclarés avec 'x = 10;' dans le corps de la classe ?",
        "options": [
            "Sur ClassName.prototype",
            "Dans l'objet global",
            "Directement sur chaque instance créée",
            "Dans une table statique"
        ],
        "correct": 2
    },
    {
        "question": "Si on déclare 'handleClick = () => { console.log(this); }' comme champ de classe, quel est son comportement ?",
        "options": [
            "Elle est statique",
            "Elle ne peut pas accéder aux champs privés",
            "Elle est attachée à l'instance et a son 'this' lié de façon permanente à l'instance",
            "Elle est placée sur le prototype"
        ],
        "correct": 2
    },
    {
        "question": "Quel est l'inconvénient principal de lier des méthodes via des champs fléchés 'fn = () => {}' plutôt que des méthodes de prototype ?",
        "options": [
            "Chaque instance possède sa propre copie de la fonction, ce qui augmente la consommation mémoire",
            "Elles ne peuvent pas prendre de paramètres",
            "Elles ne peuvent pas être asynchrones",
            "Elles sont plus lentes à exécuter"
        ],
        "correct": 0
    },
    {
        "question": "Comment déclarer une méthode génératrice dans une classe ?",
        "options": [
            "monGenerateur*() {}",
            "generator monGenerateur() {}",
            "*monGenerateur() {}",
            "function* monGenerateur() {}"
        ],
        "correct": 2
    },
    {
        "question": "Comment déclarer une méthode asynchrone dans une classe ?",
        "options": [
            "maMethode() async {}",
            "promise maMethode() {}",
            "async maMethode() {}",
            "async function maMethode() {}"
        ],
        "correct": 2
    },
    {
        "question": "Comment déclarer une méthode privée dans une classe ?",
        "options": [
            "_maMethodePrivee()",
            "def private maMethodePrivee() {}",
            "private maMethodePrivee() {}",
            "#maMethodePrivee() {}"
        ],
        "correct": 3
    },
    {
        "question": "Comment déclarer une méthode statique privée dans une classe ?",
        "options": [
            "static #monHelper() {}",
            "private static monHelper() {}",
            "static private monHelper() {}",
            "#static monHelper() {}"
        ],
        "correct": 0
    },
    {
        "question": "Quelle fonction permet de vérifier si un prototype donné fait partie de la chaîne de prototypes d'un objet ?",
        "options": [
            "Object.hasProto(obj, proto)",
            "obj.hasPrototype(proto)",
            "proto in obj",
            "proto.isPrototypeOf(obj)"
        ],
        "correct": 3
    },
    {
        "question": "Que vaut 'p instanceof Person' si la chaîne de prototypes de 'p' a été altérée pour pointer ailleurs ?",
        "options": [
            "TypeError",
            "undefined",
            "true",
            "false"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode spéciale Symbol est appelée lorsque l'on utilise l'opérateur 'instanceof' sur une classe ?",
        "options": [
            "Symbol.typeCheck",
            "Symbol.hasInstance",
            "Symbol.instanceOf",
            "Symbol.isInstance"
        ],
        "correct": 1
    },
    {
        "question": "Une classe peut-elle être anonyme en JavaScript ?",
        "options": [
            "Non, une classe doit obligatoirement avoir un nom",
            "Non, c'est une erreur de syntaxe",
            "Oui, ex: const MaClasse = class {};",
            "Seulement si elle est passée en paramètre"
        ],
        "correct": 2
    },
    {
        "question": "Peut-on utiliser le mot-clé 'super' dans un littéral d'objet pour invoquer une méthode du prototype ?",
        "options": [
            "Non, 'super' est réservé aux classes",
            "Oui, grâce à la syntaxe concise de méthode 'methode() { super.methode(); }'",
            "Seulement en mode strict",
            "Seulement avec Object.bind()"
        ],
        "correct": 1
    },
    {
        "question": "Que retourne 'new class { constructor() { return { x: 42 }; } }' ?",
        "options": [
            "undefined",
            "{ x: 42 }",
            "Une instance de la classe",
            "TypeError"
        ],
        "correct": 1
    },
    {
        "question": "Comment cloner une instance de classe tout en conservant son prototype ?",
        "options": [
            "{ ...instance }",
            "Object.assign(Object.create(Object.getPrototypeOf(instance)), instance)",
            "instance.clone()",
            "Object.clone(instance)"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la visibilité par défaut des membres de classe en JavaScript (sans préfixe #) ?",
        "options": [
            "Protégée",
            "Privée",
            "Publique",
            "Package-private"
        ],
        "correct": 2
    },
    {
        "question": "Existe-t-il un mot-clé natif 'protected' fonctionnel en JavaScript standard ?",
        "options": [
            "Non, il n'existe que public et privé (#)",
            "Oui, activable en mode strict",
            "Oui, avec le symbole @protected",
            "Oui, comme en TypeScript"
        ],
        "correct": 0
    },
    {
        "question": "Quelle convention historique était utilisée pour signaler qu'une propriété est 'privée' avant l'introduction de '#' ?",
        "options": [
            "Écrire le nom en majuscules",
            "Suffixer d'un dollar $",
            "Préfixer le nom d'un trait de soulignement (ex: _prop)",
            "Utiliser une clé Symbol"
        ],
        "correct": 2
    },
    {
        "question": "Les champs statiques d'une classe parente sont-ils hérités par les classes enfants ?",
        "options": [
            "Seulement si explicitement redéclarés",
            "Non, les membres statiques ne s'héritent jamais",
            "Uniquement avec la méthode Object.assign",
            "Oui, l'héritage statique fonctionne via la chaîne de prototypes des constructeurs"
        ],
        "correct": 3
    },
    {
        "question": "Que donne 'class A { static x = 1; } class B extends A {} B.x;' ?",
        "options": [
            "undefined",
            "1",
            "ReferenceError",
            "NaN"
        ],
        "correct": 1
    },
    {
        "question": "Peut-on définir des getters et setters statiques dans une classe ?",
        "options": [
            "Non, uniquement sur les instances",
            "Oui, avec 'static get prop()' et 'static set prop(v)'",
            "Seulement avec Object.defineProperty",
            "Non, c'est invalide"
        ],
        "correct": 1
    },
    {
        "question": "Comment appelle-t-on le principe consistant à restreindre l'accès direct aux détails internes d'un composant ?",
        "options": [
            "L'héritage",
            "L'abstraction",
            "L'encapsulation",
            "Le polymorphisme"
        ],
        "correct": 2
    },
    {
        "question": "Comment appelle-t-on la capacité pour des classes dérivées de redéfinir une méthode avec un comportement spécifique ?",
        "options": [
            "Le polymorphisme",
            "La récursivité",
            "L'agrégation",
            "L'encapsulation"
        ],
        "correct": 0
    },
    {
        "question": "Quelle structure de données interne permet à JavaScript de lier dynamiquement les méthodes lors de l'exécution ?",
        "options": [
            "Le registre statique",
            "La table des prototypes (prototype lookup)",
            "La vtable C++ compilée",
            "La table de hachage de l'instance"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la valeur de 'Person.prototype.constructor === Person' pour une classe standard ?",
        "options": [
            "false",
            "undefined",
            "true",
            "TypeError"
        ],
        "correct": 2
    },
    {
        "question": "Quels sont les trois états possibles d'une promesse (Promise) en JavaScript ?",
        "options": [
            "waiting, resolved, failed",
            "idle, running, done",
            "pending, fulfilled, rejected",
            "started, successful, error"
        ],
        "correct": 2
    },
    {
        "question": "Une promesse qui a été 'settled' (résolue ou rejetée) peut-elle changer d'état ultérieurement ?",
        "options": [
            "Oui, si on lui attache un nouveau catch()",
            "Non, la transition d'état est irréversible (immuable)",
            "Seulement dans un bloc try/catch",
            "Oui, en appelant à nouveau resolve()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode de Promesse permet d'attacher un gestionnaire de succès et éventuellement un gestionnaire d'échec ?",
        "options": [
            ".done()",
            ".catch()",
            ".then(onFulfilled, onRejected)",
            ".finally()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode permet d'attacher un gestionnaire appelé quel que soit le résultat (succès ou rejet) d'une promesse ?",
        "options": [
            ".always()",
            ".then()",
            ".complete()",
            ".finally()"
        ],
        "correct": 3
    },
    {
        "question": "Que retourne l'instruction 'Promise.resolve(val)' ?",
        "options": [
            "La valeur directe 'val'",
            "Une fonction de rappel",
            "Une promesse immédiatement résolue avec la valeur 'val'",
            "undefined"
        ],
        "correct": 2
    },
    {
        "question": "Que retourne l'instruction 'Promise.reject(err)' ?",
        "options": [
            "Une promesse immédiatement rejetée avec l'erreur 'err'",
            "Une exception synchrone",
            "null",
            "false"
        ],
        "correct": 0
    },
    {
        "question": "Comment fonctionne 'Promise.all([p1, p2, p3])' ?",
        "options": [
            "Résout dès que la première réussit",
            "Exécute les promesses de façon séquentielle",
            "Attend que toutes réussissent, ou échoue dès la première promesse rejetée",
            "Attend que toutes soient terminées même s'il y a des erreurs"
        ],
        "correct": 2
    },
    {
        "question": "Comment fonctionne 'Promise.race([p1, p2, p3])' ?",
        "options": [
            "Attend que toutes réussissent",
            "Résout uniquement si toutes réussissent",
            "S'établit dès que la première promesse se termine (succès ou échec)",
            "Prend la promesse avec le score le plus haut"
        ],
        "correct": 2
    },
    {
        "question": "Comment fonctionne 'Promise.allSettled([p1, p2, p3])' (ES2020) ?",
        "options": [
            "Retourne uniquement les promesses réussies",
            "Échoue dès le premier rejet",
            "Attend que toutes les promesses soient terminées et retourne un tableau décrivant le statut et la valeur/raison de chacune",
            "Filtre les erreurs silencieusement"
        ],
        "correct": 2
    },
    {
        "question": "Comment fonctionne 'Promise.any([p1, p2, p3])' (ES2021) ?",
        "options": [
            "S'établit dès la première terminée quel que soit l'état",
            "Résout dès que la première promesse RÉUSSIT, et ne rejette que si TOUTES échouent (AggregateError)",
            "Retourne la dernière promesse",
            "Rejette dès la première erreur"
        ],
        "correct": 1
    },
    {
        "question": "Quelle erreur est levée par 'Promise.any()' lorsque toutes les promesses sont rejetées ?",
        "options": [
            "MultiError",
            "AllRejectedError",
            "PromiseError",
            "AggregateError"
        ],
        "correct": 3
    },
    {
        "question": "Que retourne une fonction déclarée avec le mot-clé 'async' ?",
        "options": [
            "La valeur de retour brute synchrone",
            "Toujours une promesse (Promise)",
            "Un générateur",
            "Un thread"
        ],
        "correct": 1
    },
    {
        "question": "Où peut-on utiliser le mot-clé 'await' dans le code moderne ?",
        "options": [
            "Dans les fonctions async ou au niveau supérieur (Top-level await) des modules ES",
            "Uniquement dans les boucles for",
            "Uniquement dans les constructeurs de classe",
            "N'importe où dans n'importe quelle fonction synchrone"
        ],
        "correct": 0
    },
    {
        "question": "Que se passe-t-il si une promesse attendue avec 'await' est rejetée ?",
        "options": [
            "Une exception est levée, interceptable avec un bloc try...catch",
            "Le mot-clé await retourne null",
            "La fonction async retourne false",
            "Le programme plante immédiatement sans possibilité d'interception"
        ],
        "correct": 0
    },
    {
        "question": "Comment appelle-t-on le mécanisme interne de JavaScript gérant l'exécution du code, la pile d'appels et les files d'attente de tâches ?",
        "options": [
            "Le Thread Scheduler",
            "Le Garbage Collector",
            "Le Dispatcher Asynchrone",
            "La boucle d'événements (Event Loop)"
        ],
        "correct": 3
    },
    {
        "question": "Quelle est la priorité d'exécution entre la file des microtâches (microtasks) et la file des macrotâches (macrotasks/task queue) ?",
        "options": [
            "Les tâches réseau sont toujours prioritaires",
            "Les macrotâches ont la priorité absolue",
            "Elles sont exécutées en alternance équitable 1 pour 1",
            "Les microtâches sont vidées immédiatement après l'exécution synchrone courante avant la prochaine macrotâche"
        ],
        "correct": 3
    },
    {
        "question": "Parmi les éléments suivants, lequel planifie une microtâche ?",
        "options": [
            "Promise.then / queueMicrotask()",
            "setInterval()",
            "setImmediate() (Node.js)",
            "setTimeout()"
        ],
        "correct": 0
    },
    {
        "question": "Parmi les éléments suivants, lequel planifie une macrotâche (task) ?",
        "options": [
            "process.nextTick() (Node.js)",
            "queueMicrotask()",
            "Promise.resolve().then()",
            "setTimeout()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle fonction globale permet de planifier explicitement une microtâche ?",
        "options": [
            "addMicroTask()",
            "queueMicrotask()",
            "scheduleMicro()",
            "setTimeoutMicro()"
        ],
        "correct": 1
    },
    {
        "question": "Que produit 'setTimeout(fn, 0)' ?",
        "options": [
            "Exécute 'fn' de manière immédiatement synchrone",
            "Planifie l'exécution de 'fn' dans la prochaine itération de la file des macrotâches",
            "Bloque l'Event Loop pendant 0 seconde",
            "Exécute 'fn' dans un thread parallèle"
        ],
        "correct": 1
    },
    {
        "question": "Quelle fonction permet d'annuler un délai planifié avec 'const id = setTimeout(...)' ?",
        "options": [
            "cancelTimeout(id)",
            "stopTimeout(id)",
            "deleteTimeout(id)",
            "clearTimeout(id)"
        ],
        "correct": 3
    },
    {
        "question": "Quelle fonction permet d'exécuter une fonction de rappel répétée à intervalles réguliers ?",
        "options": [
            "loopInterval()",
            "setRepeatingTimeout()",
            "setInterval()",
            "schedulePeriodic()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle fonction permet d'annuler un intervalle planifié avec 'setInterval' ?",
        "options": [
            "clearInterval(id)",
            "endInterval(id)",
            "stopInterval(id)",
            "cancelInterval(id)"
        ],
        "correct": 0
    },
    {
        "question": "Quel est l'intervalle minimal de temporisation garanti par la spécification HTML pour les minuteries imbriquées après 5 niveaux ?",
        "options": [
            "4 millisecondes",
            "1 milliseconde",
            "0 milliseconde",
            "10 millisecondes"
        ],
        "correct": 0
    },
    {
        "question": "Comment exécuter plusieurs requêtes réseau asynchrones en parallèle avec 'async/await' plutôt que séquentiellement ?",
        "options": [
            "const [r1, r2] = await Promise.all([fetch(u1), fetch(u2)]);",
            "await fetch(u1) & await fetch(u2);",
            "const r1 = await fetch(u1); const r2 = await fetch(u2);",
            "parallel await (fetch(u1), fetch(u2));"
        ],
        "correct": 0
    },
    {
        "question": "Comment itérer sur un flux d'itérables asynchrones avec 'async/await' ?",
        "options": [
            "for (const item of await asyncIterable) {}",
            "for async (const item of asyncIterable) {}",
            "for await (const item of asyncIterable) {}",
            "await for (const item of asyncIterable) {}"
        ],
        "correct": 2
    },
    {
        "question": "Quelle interface permet d'annuler une requête fetch ou toute opération asynchrone compatible ?",
        "options": [
            "CancelToken",
            "PromiseBreaker",
            "OperationCancellation",
            "AbortController (et AbortSignal)"
        ],
        "correct": 3
    },
    {
        "question": "Comment annuler une requête fetch associée à un AbortController 'controller' ?",
        "options": [
            "controller.abort()",
            "controller.cancel()",
            "controller.terminate()",
            "controller.stop()"
        ],
        "correct": 0
    },
    {
        "question": "Comment associer un contrôleur d'abandon à un appel 'fetch' ?",
        "options": [
            "fetch(url, { signal: controller.signal })",
            "controller.attachTo(fetch(url))",
            "fetch(url, { cancelSignal: controller })",
            "fetch(url, { controller })"
        ],
        "correct": 0
    },
    {
        "question": "Quel événement est déclenché sur 'AbortSignal' lorsque l'abandon est demandé ?",
        "options": [
            "'interrupted'",
            "'stop'",
            "'abort'",
            "'cancel'"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode statique de Promise introduite dans ES2024 permet de créer une promesse et d'exposer ses fonctions resolve/reject ?",
        "options": [
            "Promise.createDeferred()",
            "Promise.deferred()",
            "Promise.withResolvers()",
            "Promise.exposeResolvers()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle est la structure retournée par 'Promise.withResolvers()' ?",
        "options": [
            "{ instance, fulfill, reject }",
            "{ promise, done, fail }",
            "{ promise, resolve, reject }",
            "[promise, resolve, reject]"
        ],
        "correct": 2
    },
    {
        "question": "Que se passe-t-il si une erreur survient dans un '.then()' sans '.catch()' associé ?",
        "options": [
            "L'événement 'unhandledrejection' est émis sur la portée globale",
            "Une erreur synchrone stoppe le navigateur",
            "La promesse reste pending indéfiniment",
            "L'erreur est ignorée sans trace"
        ],
        "correct": 0
    },
    {
        "question": "Sur quel objet du navigateur écoute-t-on les rejets de promesses non gérés ?",
        "options": [
            "console.onUnhandledRejection(e => {})",
            "window.addEventListener('unhandledrejection', e => {})",
            "document.addEventListener('promiseerror', e => {})",
            "Promise.onError(e => {})"
        ],
        "correct": 1
    },
    {
        "question": "Que contient 'event.reason' dans un écouteur 'unhandledrejection' ?",
        "options": [
            "L'erreur ou la raison du rejet de la promesse",
            "La pile d'appels formatée en JSON",
            "Le code HTTP",
            "La promesse elle-même"
        ],
        "correct": 0
    },
    {
        "question": "Comment transformer une fonction à base de callback 'fs.readFile(path, cb)' en promesse ?",
        "options": [
            "Avec 'Promise.cast(fs.readFile)'",
            "Avec 'eval(fs.readFile)'",
            "Avec 'await fs.readFile(path)' directement",
            "En l'enveloppant dans 'new Promise((resolve, reject) => { ... })'"
        ],
        "correct": 3
    },
    {
        "question": "Dans quel ordre s'affichent les logs : `console.log(1); Promise.resolve().then(() => console.log(2)); console.log(3);` ?",
        "options": [
            "3, 1, 2",
            "1, 2, 3",
            "1, 3, 2",
            "2, 1, 3"
        ],
        "correct": 2
    },
    {
        "question": "Dans quel ordre s'affichent les logs : `setTimeout(() => console.log('timeout'), 0); Promise.resolve().then(() => console.log('promise'));` ?",
        "options": [
            "'promise', 'timeout'",
            "Simultanément",
            "Aléatoire selon le CPU",
            "'timeout', 'promise'"
        ],
        "correct": 0
    },
    {
        "question": "Dans un environnement Node.js, quelle file de microtâches a une priorité supérieure même à 'Promise.then' ?",
        "options": [
            "setImmediate()",
            "process.nextTick()",
            "queueMicrotask()",
            "setTimeout()"
        ],
        "correct": 1
    },
    {
        "question": "Que vaut la valeur résolue par 'Promise.resolve(Promise.resolve(42))' ?",
        "options": [
            "Une promesse imbriquée",
            "42 (dépaquetage automatique des thenables)",
            "TypeError",
            "undefined"
        ],
        "correct": 1
    },
    {
        "question": "Qu'est-ce qu'un objet 'thenable' en JavaScript ?",
        "options": [
            "Tout objet ou fonction possédant une méthode '.then()'",
            "Une promesse native uniquement",
            "Un objet avec un callback",
            "Une fonction asynchrone"
        ],
        "correct": 0
    },
    {
        "question": "Comment chaîner plusieurs étapes asynchrones successives avec des promesses ?",
        "options": [
            "En utilisant 'Promise.chain()'",
            "En imbriquant les fonctions then() les unes dans les autres",
            "En retournant une nouvelle promesse ou valeur dans chaque callback '.then()'",
            "En appelant 'promise.next()'"
        ],
        "correct": 2
    },
    {
        "question": "Que se passe-t-il si un gestionnaire '.catch()' retourne une valeur normale sans lever d'erreur ?",
        "options": [
            "La promesse suivante dans la chaîne passe à l'état fulfilled avec cette valeur",
            "undefined est retourné obligatoirement",
            "La chaîne reste en échec",
            "La valeur est rejetée"
        ],
        "correct": 0
    },
    {
        "question": "Quel est l'équivalent moderne de la 'Pyramid of Doom' ou 'Callback Hell' ?",
        "options": [
            "L'utilisation de récursions imbriquées",
            "L'utilisation de Web Workers",
            "L'utilisation de 'async / await'",
            "L'utilisation de boucles infinies"
        ],
        "correct": 2
    },
    {
        "question": "Peut-on rendre le constructeur d'une classe 'async' ?",
        "options": [
            "Non, les constructeurs de classe ne peuvent pas être déclarés async",
            "Oui, si la classe hérite de Promise",
            "Oui, avec 'async constructor()'",
            "Oui, en mode strict"
        ],
        "correct": 0
    },
    {
        "question": "Comment implémente-t-on couramment l'initialisation asynchrone d'une classe ?",
        "options": [
            "Via une méthode factory statique 'static async create()'",
            "Avec 'async new MyClass()'",
            "En retournant une promesse depuis le constructeur",
            "En mettant 'await' dans le constructeur"
        ],
        "correct": 0
    },
    {
        "question": "Que fait 'await Promise.all([])' avec un tableau vide ?",
        "options": [
            "Reste bloqué indéfiniment",
            "Résout immédiatement avec un tableau vide '[]'",
            "Retourne null",
            "Rejette une exception"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode statique de AbortSignal permet de créer un signal qui s'abandonne automatiquement après un délai en ms (ES2022) ?",
        "options": [
            "AbortSignal.after(ms)",
            "AbortSignal.delay(ms)",
            "AbortSignal.timed(ms)",
            "AbortSignal.timeout(ms)"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode statique de AbortSignal combine plusieurs signaux d'abandon en un seul (ES2024) ?",
        "options": [
            "AbortSignal.any([s1, s2])",
            "AbortSignal.race([s1, s2])",
            "AbortSignal.merge([s1, s2])",
            "AbortSignal.all([s1, s2])"
        ],
        "correct": 0
    },
    {
        "question": "Le moteur JavaScript est-il par nature mono-thread (single-threaded) pour l'exécution du code utilisateur sur le fil principal ?",
        "options": [
            "Non, le moteur crée automatiquement 8 threads de calcul",
            "Non, chaque fonction s'exécute dans un thread OS distinct",
            "Oui, il possède un fil d'exécution unique avec boucle d'événements",
            "Seulement dans le navigateur, pas en Node.js"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode moderne permet de sélectionner le premier élément correspondant à un sélecteur CSS ?",
        "options": [
            "document.selectFirst()",
            "document.querySelector()",
            "document.findCSS()",
            "document.getElementBySelector()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode permet de sélectionner tous les éléments correspondant à un sélecteur CSS sous forme de NodeList ?",
        "options": [
            "document.getAll()",
            "document.getElementsBySelector()",
            "document.selectNodes()",
            "document.querySelectorAll()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle est la principale différence entre une 'NodeList' retournée par 'querySelectorAll' et une 'HTMLCollection' retournée par 'getElementsByClassName' ?",
        "options": [
            "Une NodeList ne supporte pas forEach",
            "Une NodeList statique ne change pas lors des modifications du DOM, alors qu'une HTMLCollection est vivante (live)",
            "Une HTMLCollection est asynchrone",
            "Une HTMLCollection est un vrai tableau, pas la NodeList"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode permet d'attacher un écouteur d'événement à un élément DOM ?",
        "options": [
            "element.addEventListener()",
            "element.attachEvent()",
            "element.listen()",
            "element.on()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode permet de retirer un écouteur d'événement préalablement attaché ?",
        "options": [
            "element.unlisten()",
            "element.off()",
            "element.detachEvent()",
            "element.removeEventListener()"
        ],
        "correct": 3
    },
    {
        "question": "Pour pouvoir retirer un écouteur avec 'removeEventListener()', quelle condition est nécessaire ?",
        "options": [
            "Utiliser une fonction fléchée",
            "Passer exactement la même référence de fonction de rappel",
            "Passer le nom de l'événement uniquement",
            "Avoir mis un ID sur l'écouteur"
        ],
        "correct": 1
    },
    {
        "question": "Quelles sont les trois phases de propagation d'un événement dans le DOM ?",
        "options": [
            "Propagation, Écoute, Nettoyage",
            "Départ, Transition, Arrivée",
            "Trigger, Execution, Resolution",
            "Capture (capturing), Cible (target), Bouillonnement (bubbling)"
        ],
        "correct": 3
    },
    {
        "question": "Par défaut, à quelle phase de propagation les écouteurs ajoutés avec 'addEventListener(type, listener)' sont-ils déclenchés ?",
        "options": [
            "Phase de bouillonnement (bubbling)",
            "Phase d'initialisation",
            "Phase de terminaison",
            "Phase de capture (capturing)"
        ],
        "correct": 0
    },
    {
        "question": "Comment attacher un écouteur pour qu'il s'exécute lors de la phase de capture ?",
        "options": [
            "element.addEventListener(type, listener, { bubble: false })",
            "element.listenCapture(type, listener)",
            "element.addCaptureListener(type, listener)",
            "element.addEventListener(type, listener, true) ou { capture: true }"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode de l'objet Event empêche la poursuite de la propagation de l'événement dans l'arbre DOM ?",
        "options": [
            "event.stopPropagation()",
            "event.halt()",
            "event.stop()",
            "event.preventDefault()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode de l'objet Event empêche la propagation ET bloque les autres écouteurs sur le même élément ?",
        "options": [
            "event.stopPropagation()",
            "event.stopImmediatePropagation()",
            "event.cancelAll()",
            "event.preventDefault()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode de l'objet Event empêche le comportement par défaut imposé par le navigateur (comme la soumission d'un formulaire) ?",
        "options": [
            "event.cancel()",
            "event.stopPropagation()",
            "event.avoidDefault()",
            "event.preventDefault()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle propriété de l'objet Event fait référence à l'élément sur lequel l'écouteur a été attaché ?",
        "options": [
            "event.srcElement",
            "event.owner",
            "event.currentTarget",
            "event.target"
        ],
        "correct": 2
    },
    {
        "question": "Quelle propriété de l'objet Event fait référence à l'élément précis qui a déclenché l'événement à l'origine ?",
        "options": [
            "event.delegate",
            "event.currentTarget",
            "event.target",
            "event.source"
        ],
        "correct": 2
    },
    {
        "question": "Comment s'appelle le motif consistant à écouter un événement sur un élément parent pour gérer tous ses enfants dynamiques ?",
        "options": [
            "Le bubbling forcé",
            "Le pooling d'événements",
            "La délégation d'événements (event delegation)",
            "La capture d'événements"
        ],
        "correct": 2
    },
    {
        "question": "Comment modifier les classes CSS d'un élément via son API dédiée ?",
        "options": [
            "element.style.classes",
            "element.classList (avec add, remove, toggle, contains)",
            "element.classes.set()",
            "element.setAttributeClass()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode de 'classList' ajoute une classe si elle est absente ou la retire si elle est présente ?",
        "options": [
            "element.classList.flip('ma-classe')",
            "element.classList.toggle('ma-classe')",
            "element.classList.switch('ma-classe')",
            "element.classList.alter('ma-classe')"
        ],
        "correct": 1
    },
    {
        "question": "Quelle propriété permet d'insérer du texte brut dans un élément DOM en évitant les failles XSS ?",
        "options": [
            "element.textContent",
            "element.outerHTML",
            "element.innerHTML",
            "element.rawText"
        ],
        "correct": 0
    },
    {
        "question": "Quelle propriété permet d'obtenir ou définir le balisage HTML à l'intérieur d'un élément ?",
        "options": [
            "element.innerText",
            "element.textContent",
            "element.nodesHTML",
            "element.innerHTML"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode permet de créer un nouvel élément DOM en mémoire ?",
        "options": [
            "document.newElement('div')",
            "document.createElement('div')",
            "DOM.create('div')",
            "new DOMElement('div')"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode permet de créer un nouveau nœud de texte brut ?",
        "options": [
            "new TextNode('texte')",
            "document.createTextNode('texte')",
            "document.buildText('texte')",
            "document.createText('texte')"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode moderne permet d'insérer un ou plusieurs nœuds à la fin de la liste des enfants d'un élément ?",
        "options": [
            "element.insertLast(...nodes)",
            "element.appendChild(...nodes)",
            "element.append(...nodes)",
            "element.pushChild(...nodes)"
        ],
        "correct": 2
    },
    {
        "question": "Quelle est la différence principale entre 'element.append()' et 'element.appendChild()' ?",
        "options": [
            "'appendChild()' fonctionne en asynchrone",
            "'append()' retourne le nœud ajouté alors qu'appendChild ne retourne rien",
            "'append()' accepte plusieurs nœuds et des chaînes directes, 'appendChild()' n'accepte qu'un seul nœud DOM",
            "'appendChild()' est plus récent"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode permet d'insérer du code HTML parsé à une position relative donnée ('beforebegin', 'afterbegin', 'beforeend', 'afterend') ?",
        "options": [
            "element.insertAdjacentHTML(position, text)",
            "element.addHTML(position, text)",
            "element.insertHTML(position, text)",
            "element.embedHTML(position, text)"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode permet de supprimer un élément directement du DOM ?",
        "options": [
            "element.delete()",
            "document.remove(element)",
            "element.destroy()",
            "element.remove()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode permet de cloner un nœud DOM avec tous ses enfants ?",
        "options": [
            "element.copyDeep()",
            "element.clone(true)",
            "element.cloneNode(true)",
            "element.duplicate()"
        ],
        "correct": 2
    },
    {
        "question": "Comment accéder à la valeur d'un attribut de données personnalisées 'data-user-id=\"42\"' en JavaScript ?",
        "options": [
            "element.getData('user-id')",
            "element.data.user_id",
            "element.customData.userId",
            "element.dataset.userId"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode permet de lire un attribut HTML arbitraire sur un élément ?",
        "options": [
            "element.getAttribute('href')",
            "element.getProp('href')",
            "element.readAttribute('href')",
            "element.attrs.href"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode permet de modifier ou ajouter un attribut HTML sur un élément ?",
        "options": [
            "element.attr('name', 'value')",
            "element.setAttribute('name', 'value')",
            "element.writeAttr('name', 'value')",
            "element.putAttribute('name', 'value')"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode permet de vérifier si un élément contient un attribut spécifique ?",
        "options": [
            "element.isAttribute('disabled')",
            "element.hasAttribute('disabled')",
            "element.containsAttr('disabled')",
            "element.has('disabled')"
        ],
        "correct": 1
    },
    {
        "question": "Quelle propriété fournit les dimensions et la position d'un élément par rapport à la zone d'affichage (viewport) ?",
        "options": [
            "element.getBoundingClientRect()",
            "element.getCoordinates()",
            "element.computeLayout()",
            "element.getBounds()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle propriété retourne la largeur intérieure d'un élément incluant le padding mais hors bordures et barres de défilement ?",
        "options": [
            "element.clientWidth",
            "element.innerWidth",
            "element.offsetWidth",
            "element.scrollWidth"
        ],
        "correct": 0
    },
    {
        "question": "Quelle propriété retourne la largeur totale d'un élément incluant le padding, les bordures et la barre de défilement éventuelle ?",
        "options": [
            "element.offsetWidth",
            "element.outerWidth",
            "element.scrollWidth",
            "element.clientWidth"
        ],
        "correct": 0
    },
    {
        "question": "Quel conteneur léger en mémoire permet de regrouper des nœuds DOM avant de les insérer en une seule opération pour limiter les reflows ?",
        "options": [
            "DocumentFragment (document.createDocumentFragment())",
            "ShadowRoot",
            "DOMGroup",
            "VirtualDOM"
        ],
        "correct": 0
    },
    {
        "question": "Quel événement est déclenché lorsque le document HTML initial a été complètement chargé et analysé sans attendre les feuilles de style et images ?",
        "options": [
            "domReady",
            "DOMContentLoaded",
            "load",
            "readystatechange"
        ],
        "correct": 1
    },
    {
        "question": "Quel événement est déclenché lorsque l'ensemble de la page (y compris images, styles et sous-ressources) a fini de se charger ?",
        "options": [
            "ready",
            "complete",
            "load (window.onload)",
            "DOMContentLoaded"
        ],
        "correct": 2
    },
    {
        "question": "Quel événement est déclenché sur un champ de formulaire dès que sa valeur change en temps réel à chaque frappe ?",
        "options": [
            "input",
            "change",
            "update",
            "keypress"
        ],
        "correct": 0
    },
    {
        "question": "Quel événement est déclenché sur un champ de formulaire seulement lorsque sa valeur est validée et que l'élément perd le focus ?",
        "options": [
            "submit",
            "input",
            "blur",
            "change"
        ],
        "correct": 3
    },
    {
        "question": "Quel événement se déclenche lorsqu'un élément reçoit le focus ?",
        "options": [
            "focus",
            "blur",
            "select",
            "activate"
        ],
        "correct": 0
    },
    {
        "question": "Quel événement se déclenche lorsqu'un élément perd le focus ?",
        "options": [
            "blur",
            "focusout",
            "leave",
            "deactivate"
        ],
        "correct": 0
    },
    {
        "question": "Comment déclencher manuellement un événement personnalisé dans le DOM ?",
        "options": [
            "document.emit('mon-event', element, data)",
            "element.trigger('mon-event', data)",
            "element.fireEvent('mon-event', data)",
            "element.dispatchEvent(new CustomEvent('mon-event', { detail: data }))"
        ],
        "correct": 3
    },
    {
        "question": "Dans un CustomEvent, sous quelle propriété transmet-on traditionnellement les données personnalisées ?",
        "options": [
            "detail",
            "data",
            "payload",
            "state"
        ],
        "correct": 0
    },
    {
        "question": "Quelle option passée à 'addEventListener' permet d'exécuter l'écouteur une seule fois puis de le supprimer automatiquement ?",
        "options": [
            "{ maxCalls: 1 }",
            "{ once: true }",
            "{ single: true }",
            "{ autoRemove: true }"
        ],
        "correct": 1
    },
    {
        "question": "Quelle option passée à 'addEventListener' garantit au navigateur que la fonction n'appellera jamais 'preventDefault()' pour optimiser le défilement ?",
        "options": [
            "{ passive: true }",
            "{ smooth: true }",
            "{ fast: true }",
            "{ nonBlocking: true }"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode permet de faire défiler la page ou un élément jusqu'à ce qu'un élément cible soit visible ?",
        "options": [
            "element.bringToView()",
            "element.scrollIntoView({ behavior: 'smooth' })",
            "element.scrollToVisible()",
            "window.scrollToElement(element)"
        ],
        "correct": 1
    },
    {
        "question": "Quel sélecteur DOM permet de trouver l'ancêtre le plus proche correspondant à un sélecteur CSS donné ?",
        "options": [
            "element.closest('.container')",
            "element.ancestor('.container')",
            "element.findParent('.container')",
            "element.parentSelector('.container')"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode permet de vérifier si un élément correspond à un sélecteur CSS donné ?",
        "options": [
            "element.isMatch('.active')",
            "element.hasSelector('.active')",
            "element.testSelector('.active')",
            "element.matches('.active')"
        ],
        "correct": 3
    },
    {
        "question": "Comment créer un arbre DOM encapsulé et isolé pour un composant Web (Web Component) ?",
        "options": [
            "element.createShadowDOM()",
            "element.attachShadow({ mode: 'open' })",
            "element.encapsulate()",
            "element.attachSubDOM()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la différence entre le mode 'open' et 'closed' d'un Shadow Root ?",
        "options": [
            "En mode 'closed', les événements ne remontent pas",
            "En mode 'closed', le composant ne s'affiche pas",
            "En mode 'open', les styles CSS externes pénètrent le composant",
            "En mode 'open', l'élément conserve l'accès via 'element.shadowRoot' depuis le JS externe"
        ],
        "correct": 3
    },
    {
        "question": "Quel élément HTML standard sert de modèle réutilisable non affiché par défaut jusqu'à son instanciation en JavaScript ?",
        "options": [
            "<template>",
            "<component>",
            "<slot>",
            "<blueprint>"
        ],
        "correct": 0
    },
    {
        "question": "Quelle API standard remplace l'ancien XMLHttpRequest pour effectuer des requêtes HTTP asynchrones ?",
        "options": [
            "Axios API",
            "RESTClient",
            "Fetch API",
            "HttpQuery API"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode de l'objet Response retourné par 'fetch()' permet de lire et parser le corps au format JSON ?",
        "options": [
            "JSON.parse(response)",
            "response.parseJSON()",
            "response.json()",
            "response.toJSON()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode de l'objet Response permet de lire le corps de la réponse sous forme de texte brut ?",
        "options": [
            "response.toString()",
            "response.readString()",
            "response.text()",
            "response.bodyText()"
        ],
        "correct": 2
    },
    {
        "question": "Que vérifie la propriété 'response.ok' après un appel fetch ?",
        "options": [
            "Si le statut HTTP est compris entre 200 et 299",
            "Si la connexion réseau est active",
            "Si la réponse est en cache",
            "Si le corps JSON est valide"
        ],
        "correct": 0
    },
    {
        "question": "Un appel 'fetch()' rejette-t-il sa promesse lors d'une erreur HTTP 404 ou 500 ?",
        "options": [
            "Oui, toute erreur HTTP >= 400 rejette la promesse",
            "Seulement si configuré en mode strict",
            "Seulement pour les erreurs 500",
            "Non, il résout avec response.ok = false (il ne rejette qu'en cas d'erreur réseau)"
        ],
        "correct": 3
    },
    {
        "question": "Comment envoyer une requête POST avec un corps JSON via l'API Fetch ?",
        "options": [
            "fetch(url, { type: 'POST', json: data })",
            "fetch(url, { method: 'POST', payload: data })",
            "fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })",
            "fetch.post(url, data)"
        ],
        "correct": 2
    },
    {
        "question": "Quelle API de stockage web persiste les données sans limite de temps même après la fermeture du navigateur ?",
        "options": [
            "sessionStorage",
            "cookieStorage",
            "localStorage",
            "tempStorage"
        ],
        "correct": 2
    },
    {
        "question": "Quelle API de stockage web ne conserve les données que pour la durée de l'onglet ou de la session de navigation courante ?",
        "options": [
            "localStorage",
            "pageStorage",
            "tabStorage",
            "sessionStorage"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode permet d'enregistrer une valeur dans 'localStorage' ?",
        "options": [
            "localStorage.set('clé', 'valeur')",
            "localStorage.put('clé', 'valeur')",
            "localStorage.setItem('clé', 'valeur')",
            "localStorage.write('clé', 'valeur')"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode permet de récupérer une valeur depuis 'localStorage' ?",
        "options": [
            "localStorage.get('clé')",
            "localStorage.getItem('clé')",
            "localStorage.read('clé')",
            "localStorage.fetch('clé')"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode permet de supprimer toutes les entrées de 'localStorage' ?",
        "options": [
            "localStorage.clear()",
            "localStorage.purge()",
            "localStorage.removeAll()",
            "localStorage.reset()"
        ],
        "correct": 0
    },
    {
        "question": "Quel type de données 'localStorage' et 'sessionStorage' peuvent-ils stocker nativement ?",
        "options": [
            "Tous les objets JavaScript",
            "Des nombres et booléens uniquement",
            "Uniquement des chaînes de caractères (strings)",
            "Des structures binaires Buffer"
        ],
        "correct": 2
    },
    {
        "question": "Comment stocker un objet JavaScript complexe dans 'localStorage' ?",
        "options": [
            "localStorage.setItem('user', user.toStorage())",
            "localStorage.setItem('user', JSON.stringify(user))",
            "localStorage.setObject('user', user)",
            "localStorage.setItem('user', user)"
        ],
        "correct": 1
    },
    {
        "question": "Comment relire un objet complexe stocké sous forme de JSON dans 'localStorage' ?",
        "options": [
            "localStorage.getObject('user')",
            "JSON.parse(localStorage.getItem('user'))",
            "JSON.inflate(localStorage.getItem('user'))",
            "localStorage.getItem('user').toJSON()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle base de données transactionnelle orientée documents est disponible nativement dans les navigateurs ?",
        "options": [
            "SQLite Web",
            "IndexedDB",
            "WebSQL",
            "MongoBrowser"
        ],
        "correct": 1
    },
    {
        "question": "Quelle API permet d'exécuter des scripts JavaScript en arrière-plan dans des threads séparés sans bloquer l'UI ?",
        "options": [
            "Threadpool API",
            "Background Threads",
            "Service Workers",
            "Web Workers"
        ],
        "correct": 3
    },
    {
        "question": "Comment le fil d'exécution principal communique-t-il avec un Web Worker ?",
        "options": [
            "Via des callbacks directs",
            "Via 'worker.postMessage()' et l'écouteur 'onmessage'",
            "Via des variables globales partagées",
            "Via le DOM partagé"
        ],
        "correct": 1
    },
    {
        "question": "Un Web Worker standard a-t-il un accès direct à l'objet 'window' ou au DOM ?",
        "options": [
            "Oui, en lecture seule",
            "Seulement via document.querySelector",
            "Oui, avec des permissions spéciales",
            "Non, il s'exécute dans un contexte isolé (DedicatedWorkerGlobalScope)"
        ],
        "correct": 3
    },
    {
        "question": "Quelle API permet de gérer la mise en cache réseau hors-ligne, les notifications push et les requêtes interceptées ?",
        "options": [
            "Cache Manager",
            "Service Workers",
            "Network Interceptor",
            "Web Workers"
        ],
        "correct": 1
    },
    {
        "question": "Quelle API permet d'observer de façon asynchrone l'entrée ou la sortie d'éléments dans la zone de visibilité (viewport) ?",
        "options": [
            "IntersectionObserver",
            "MutationObserver",
            "VisibilityObserver",
            "ResizeObserver"
        ],
        "correct": 0
    },
    {
        "question": "Quelle API permet d'observer les modifications de la structure ou des attributs du DOM ?",
        "options": [
            "IntersectionObserver",
            "NodeWatcher",
            "MutationObserver",
            "DOMChangeListener"
        ],
        "correct": 2
    },
    {
        "question": "Quelle API permet de surveiller les changements de dimensions d'un élément HTML ?",
        "options": [
            "ResizeObserver",
            "SizeListener",
            "LayoutWatcher",
            "DimensionObserver"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode demande au navigateur d'exécuter une fonction d'animation avant le prochain rafraîchissement d'écran ?",
        "options": [
            "setAnimationTimeout(callback)",
            "requestScreenFrame(callback)",
            "window.animate(callback)",
            "requestAnimationFrame(callback)"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode permet d'annuler une animation planifiée avec 'requestAnimationFrame' ?",
        "options": [
            "stopAnimationFrame(id)",
            "cancelAnimationFrame(id)",
            "clearAnimationFrame(id)",
            "endAnimationFrame(id)"
        ],
        "correct": 1
    },
    {
        "question": "Quelle API permet de manipuler l'historique du navigateur sans recharger la page (SPA) ?",
        "options": [
            "BrowserHistory API",
            "History API (pushState, replaceState)",
            "NavigationController",
            "URLRouter API"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode de l'API History ajoute une nouvelle entrée à l'historique du navigateur ?",
        "options": [
            "history.appendState(url)",
            "history.navigate(url)",
            "history.add(url)",
            "history.pushState(state, '', url)"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode de l'API History modifie l'entrée courante de l'historique sans en créer de nouvelle ?",
        "options": [
            "history.updateState(url)",
            "history.replaceState(state, '', url)",
            "history.set(url)",
            "history.modify(url)"
        ],
        "correct": 1
    },
    {
        "question": "Quel événement est déclenché lorsque l'utilisateur navigue en arrière ou en avant dans l'historique avec l'API History ?",
        "options": [
            "popstate",
            "historystep",
            "navigated",
            "hashchange"
        ],
        "correct": 0
    },
    {
        "question": "Quelle classe native permet de manipuler facilement les paramètres d'URL (?q=js&page=2) ?",
        "options": [
            "URLQuery",
            "HttpParams",
            "QueryString",
            "URLSearchParams"
        ],
        "correct": 3
    },
    {
        "question": "Comment extraire la valeur du paramètre 'page' avec 'URLSearchParams' ?",
        "options": [
            "params.read('page')",
            "params.find('page')",
            "params.page",
            "params.get('page')"
        ],
        "correct": 3
    },
    {
        "question": "Quelle API permet d'obtenir la position géographique d'un utilisateur après autorisation ?",
        "options": [
            "navigator.geolocation.getCurrentPosition()",
            "window.getGPSLocation()",
            "document.location.getCoords()",
            "navigator.getCoordinates()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode permet de copier du texte dans le presse-papiers avec l'API Clipboard moderne ?",
        "options": [
            "navigator.clipboard.set('texte')",
            "document.copyToClipboard('texte')",
            "navigator.clipboard.writeText('texte')",
            "window.clipboard.copy('texte')"
        ],
        "correct": 2
    },
    {
        "question": "Quelle API permet de mesurer les performances et d'enregistrer des repères de temps précis ?",
        "options": [
            "Performance API (performance.now(), performance.mark())",
            "Benchmark API",
            "Timer API",
            "Date.preciseNow()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle est la différence principale entre 'performance.now()' et 'Date.now()' ?",
        "options": [
            "'Date.now()' est mesuré en secondes",
            "'performance.now()' retourne une date formatée",
            "'Date.now()' est plus précis",
            "'performance.now()' est monotone avec une précision en microsecondes, insensible aux ajustements d'horloge système"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode de 'console' permet d'afficher des données sous forme de tableau interactif dans la console de développement ?",
        "options": [
            "console.matrix()",
            "console.table()",
            "console.grid()",
            "console.list()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode de 'console' démarre un chronomètre avec un label donné ?",
        "options": [
            "console.chrono('label')",
            "console.timer('label')",
            "console.time('label')",
            "console.startTimer('label')"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode de 'console' arrête le chronomètre et affiche le temps écoulé ?",
        "options": [
            "console.stopTime('label')",
            "console.timeStop('label')",
            "console.timeEnd('label')",
            "console.endTimer('label')"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode de 'console' affiche une trace complète de la pile d'appels ?",
        "options": [
            "console.stack()",
            "console.trace()",
            "console.dump()",
            "console.callstack()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle méthode de 'console' affiche un message uniquement si une assertion est fausse ?",
        "options": [
            "console.check(condition, message)",
            "console.expect(condition, message)",
            "console.assert(condition, message)",
            "console.test(condition, message)"
        ],
        "correct": 2
    },
    {
        "question": "Quelle API permet de planifier des tâches non essentielles lorsque le navigateur est inactif ?",
        "options": [
            "requestPassiveCallback()",
            "requestIdleCallback()",
            "queueIdleTask()",
            "scheduleBackgroundWork()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle API permet d'envoyer des données analytiques vers un serveur de manière garantie même lors de la fermeture de la page ?",
        "options": [
            "navigator.pushAnalytics(url, data)",
            "fetch(url, { urgent: true })",
            "navigator.sendBeacon(url, data)",
            "window.postUnload(url, data)"
        ],
        "correct": 2
    },
    {
        "question": "Quelle API permet de partager des fichiers ou textes vers d'autres applications via le menu de partage natif du système ?",
        "options": [
            "navigator.systemShare()",
            "navigator.share()",
            "window.shareNative()",
            "document.openShareDialog()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle API permet de créer des flux audio en temps réel et de synthétiser des sons dans le navigateur ?",
        "options": [
            "MediaStream Audio",
            "Web Audio API (AudioContext)",
            "AudioSynthesizer",
            "SoundManager API"
        ],
        "correct": 1
    },
    {
        "question": "Quelle API permet de capturer le flux vidéo de la webcam ou le flux du micro de l'utilisateur ?",
        "options": [
            "navigator.mediaDevices.getUserMedia()",
            "window.getCameraStream()",
            "navigator.getMedia()",
            "document.captureMedia()"
        ],
        "correct": 0
    },
    {
        "question": "Quelle interface permet de manipuler les fichiers sélectionnés par l'utilisateur via '<input type=\"file\">' ?",
        "options": [
            "FileSystemSync",
            "DiskReader",
            "FileStream",
            "FileReader (ou File API)"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode de 'FileReader' permet de lire un fichier sous forme d'URL Base64 pour l'afficher dans une balise '<img>' ?",
        "options": [
            "reader.toImageURL(file)",
            "reader.readAsDataURL(file)",
            "reader.readAsBase64(file)",
            "reader.readAsText(file)"
        ],
        "correct": 1
    },
    {
        "question": "Quelle API permet de créer des graphiques 2D ou 3D accélérés matériellement par le GPU dans une balise '<canvas>' ?",
        "options": [
            "HardwareCanvas API",
            "Canvas3D Direct",
            "DirectGPU API",
            "WebGL (et WebGPU)"
        ],
        "correct": 3
    },
    {
        "question": "Comment sérialiser un objet JavaScript en chaîne JSON avec une indentation de 2 espaces ?",
        "options": [
            "JSON.stringify(obj, 2)",
            "JSON.format(obj, 2)",
            "JSON.stringify(obj, null, 2)",
            "JSON.pretty(obj)"
        ],
        "correct": 2
    },
    {
        "question": "Quel est le rôle du second paramètre (replacer) dans 'JSON.stringify(obj, replacer)' ?",
        "options": [
            "Spécifier le mot de passe de chiffrement",
            "Filtrer ou transformer les propriétés incluses dans la sérialisation",
            "Définir le préfixe de chaque clé",
            "Définir la table d'encodage de caractères"
        ],
        "correct": 1
    },
    {
        "question": "Quel est le rôle du second paramètre (reviver) dans 'JSON.parse(str, reviver)' ?",
        "options": [
            "Ignorer les champs inconnus",
            "Réguler la mémoire tampon",
            "Gérer les erreurs de syntaxe JSON",
            "Transformer les valeurs et structures lors de la désérialisation (ex: recréer des objets Date)"
        ],
        "correct": 3
    },
    {
        "question": "Quel mot-clé est utilisé dans les modules ES pour exporter une fonction ou constante nommée ?",
        "options": [
            "expose",
            "module.export",
            "public export",
            "export"
        ],
        "correct": 3
    },
    {
        "question": "Quel mot-clé est utilisé pour déclarer l'export principal unique d'un module ES ?",
        "options": [
            "export primary",
            "default module",
            "export main",
            "export default"
        ],
        "correct": 3
    },
    {
        "question": "Comment importer dynamiquement un module de manière asynchrone à l'exécution ?",
        "options": [
            "import('./module.js')",
            "require.async('./module.js')",
            "loadModule('./module.js')",
            "System.import('./module.js')"
        ],
        "correct": 0
    },
    {
        "question": "Que retourne l'instruction d'import dynamique 'import(\"./mod.js\")' ?",
        "options": [
            "Une fonction constructeur",
            "Un objet Proxy",
            "Une promesse (Promise) résolue avec l'espace de noms du module",
            "Le module directement et de façon synchrone"
        ],
        "correct": 2
    },
    {
        "question": "Quelle est la syntaxe pour importer tous les exports nommés d'un module sous un alias unique 'Utils' ?",
        "options": [
            "import * as Utils from './utils.js';",
            "import Utils from './utils.js';",
            "import { * as Utils } from './utils.js';",
            "import all as Utils from './utils.js';"
        ],
        "correct": 0
    },
    {
        "question": "Dans l'écosystème Node.js historique (CommonJS), comment exporte-t-on une valeur ?",
        "options": [
            "export.named = ...",
            "export default ...",
            "module.exports = ...",
            "return exports;"
        ],
        "correct": 2
    },
    {
        "question": "Dans l'écosystème CommonJS, quelle fonction synchrone permet de charger un module ?",
        "options": [
            "load()",
            "import()",
            "require()",
            "include()"
        ],
        "correct": 2
    },
    {
        "question": "Quelle structure de données native garantit l'unicité des valeurs qu'elle contient ?",
        "options": [
            "ArrayUnique",
            "Set",
            "Map",
            "List"
        ],
        "correct": 1
    },
    {
        "question": "Comment éliminer instantanément les doublons d'un tableau 'arr' avec ES6 ?",
        "options": [
            "const unique = Set.toArray(arr);",
            "const unique = Array.dedup(arr);",
            "const unique = arr.unique();",
            "const unique = [...new Set(arr)];"
        ],
        "correct": 3
    },
    {
        "question": "Quelle structure de données native associe des paires clé-valeur où les clés peuvent être de N'IMPORTE QUEL type (y compris objets) ?",
        "options": [
            "Set",
            "Dictionary",
            "Object",
            "Map"
        ],
        "correct": 3
    },
    {
        "question": "Quelle méthode permet d'ajouter ou mettre à jour un élément dans une 'Map' ?",
        "options": [
            "map.add(key, value)",
            "map.put(key, value)",
            "map.set(key, value)",
            "map.insert(key, value)"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode permet de récupérer une valeur par sa clé dans une 'Map' ?",
        "options": [
            "map.find(key)",
            "map.read(key)",
            "map.get(key)",
            "map[key]"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode permet de vérifier si une clé existe dans une 'Map' ou une valeur dans un 'Set' ?",
        "options": [
            "includes()",
            "exists()",
            "contains()",
            "has()"
        ],
        "correct": 3
    },
    {
        "question": "Quelle propriété retourne le nombre d'éléments dans une 'Map' ou un 'Set' ?",
        "options": [
            ".count",
            ".size",
            ".total",
            ".length"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est la particularité principale d'une 'WeakMap' comparée à une 'Map' classique ?",
        "options": [
            "Elle a une taille fixe",
            "Ses clés doivent être des objets (ou Symbol non enregistrés) et sont référencées de manière faible pour le Garbage Collector",
            "Elle stocke les données sur le disque",
            "Elle est triée par ordre alphabétique"
        ],
        "correct": 1
    },
    {
        "question": "Une 'WeakMap' est-elle énumérable (peut-on itérer dessus ou connaître sa taille) ?",
        "options": [
            "Oui, avec for...of",
            "Non, elle n'est pas itérable et ne possède pas de propriété .size",
            "Oui, avec Object.keys()",
            "Oui, avec weakMap.entries()"
        ],
        "correct": 1
    },
    {
        "question": "Quelle est l'utilité principale de 'WeakSet' ?",
        "options": [
            "Garantir des ensembles triés",
            "Créer des tableaux légers",
            "Sauvegarder des chaînes en mémoire partagée",
            "Stocker un ensemble d'objets sans empêcher leur libération par le ramasse-miettes (Garbage Collector)"
        ],
        "correct": 3
    },
    {
        "question": "Quel objet standard permet d'enregistrer des fonctions de nettoyage (cleanup) lorsque des objets sont collectés par le Garbage Collector (ES2021) ?",
        "options": [
            "MemoryManager",
            "WeakRef",
            "FinalizationRegistry",
            "GarbageCleaner"
        ],
        "correct": 2
    },
    {
        "question": "Quelle classe permet de créer une référence faible vers un objet sans empêcher sa libération mémoire (ES2021) ?",
        "options": [
            "PhantomRef",
            "WeakPointer",
            "WeakRef",
            "SoftRef"
        ],
        "correct": 2
    },
    {
        "question": "Comment récupérer la cible d'une instance 'weakRef = new WeakRef(target)' ?",
        "options": [
            "weakRef.deref()",
            "weakRef.target",
            "weakRef.value",
            "weakRef.get()"
        ],
        "correct": 0
    },
    {
        "question": "Quel objet standard fournit des outils avancés d'internationalisation (formatage de dates, nombres, devises, pluralisation) ?",
        "options": [
            "Intl",
            "Format",
            "I18n",
            "Locale"
        ],
        "correct": 0
    },
    {
        "question": "Comment formater un nombre '123456.78' au format monétaire en euros pour la France ?",
        "options": [
            "Number.formatCurrency(123456.78, 'EUR', 'fr')",
            "(123456.78).toEuros('fr')",
            "new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(123456.78)",
            "Intl.format('EUR', 123456.78)"
        ],
        "correct": 2
    },
    {
        "question": "Comment formater une date selon les conventions de la langue française avec 'Intl' ?",
        "options": [
            "new Intl.DateTimeFormat('fr-FR').format(date)",
            "Intl.formatDate('fr-FR', date)",
            "date.formatIntl('fr-FR')",
            "DateTime.localize(date, 'fr')"
        ],
        "correct": 0
    },
    {
        "question": "Quelle expression régulière vérifie qu'une chaîne ne contient que des chiffres ?",
        "options": [
            "/^\\d+$/",
            "/^\\D+$/",
            "/^\\w+$/",
            "/^[0-9]$/"
        ],
        "correct": 0
    },
    {
        "question": "Quel drapeau (flag) de RegExp permet d'effectuer une recherche insensible à la casse ?",
        "options": [
            "s",
            "i",
            "g",
            "m"
        ],
        "correct": 1
    },
    {
        "question": "Quel drapeau de RegExp permet d'effectuer une recherche globale (toutes les occurrences) ?",
        "options": [
            "a",
            "g",
            "u",
            "i"
        ],
        "correct": 1
    },
    {
        "question": "Quel drapeau de RegExp permet au point '.' de correspondre également aux sauts de ligne (mode dotAll) ?",
        "options": [
            "s",
            "u",
            "d",
            "m"
        ],
        "correct": 0
    },
    {
        "question": "Quelle méthode de RegExp teste si un motif correspond à une chaîne et retourne un booléen ?",
        "options": [
            "regex.check(str)",
            "regex.verify(str)",
            "regex.test(str)",
            "regex.match(str)"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode de chaîne retourne toutes les correspondances d'une RegExp avec leurs groupes de capture sous forme d'itérateur (ES2020) ?",
        "options": [
            "str.execAll(regex)",
            "str.findAll(regex)",
            "str.matchAll(regex)",
            "str.match(regex)"
        ],
        "correct": 2
    },
    {
        "question": "Quelle méthode de chaîne permet de remplacer toutes les occurrences d'une sous-chaîne sans utiliser de RegExp globale (ES2021) ?",
        "options": [
            "str.replaceAll(search, replacement)",
            "str.replace(search, replacement, 'g')",
            "str.substituteAll(search, replacement)",
            "str.modifyAll(search, replacement)"
        ],
        "correct": 0
    },
    {
        "question": "Comment appelle-t-on le ramasse-miettes automatique chargé de récupérer la mémoire inutilisée en JavaScript ?",
        "options": [
            "Le Heap Cleaner",
            "Le Garbage Collector (GC)",
            "Le Memory Freeer",
            "Le Stack Scavenger"
        ],
        "correct": 1
    },
    {
        "question": "Quel algorithme principal de Garbage Collection est utilisé par les moteurs JavaScript modernes ?",
        "options": [
            "Mark-and-Sweep (Marquage et Balayage)",
            "Comptage de références uniquement",
            "Stop-and-Copy systématique",
            "FIFO Memory Eviction"
        ],
        "correct": 0
    },
    {
        "question": "Quelle fuite de mémoire (memory leak) classique survient couramment avec les événements DOM ?",
        "options": [
            "Utiliser trop de fonctions fléchées",
            "Utiliser JSON.stringify",
            "Déclarer des variables avec const",
            "Oublier de détacher les écouteurs d'événements (addEventListener) sur des éléments détruits"
        ],
        "correct": 3
    },
    {
        "question": "Quel type d'erreur est levé lors d'une tentative d'accès à une variable non déclarée ?",
        "options": [
            "ReferenceError",
            "RangeError",
            "TypeError",
            "SyntaxError"
        ],
        "correct": 0
    },
    {
        "question": "Quel type d'erreur est levé lors d'une tentative d'appel d'une valeur qui n'est pas une fonction (ex: null()) ?",
        "options": [
            "EvalError",
            "SyntaxError",
            "ReferenceError",
            "TypeError"
        ],
        "correct": 3
    },
    {
        "question": "Quel type d'erreur est levé lorsqu'un nombre est en dehors de la plage de valeurs autorisée (ex: new Array(-1)) ?",
        "options": [
            "OverflowError",
            "RangeError",
            "TypeError",
            "ValueError"
        ],
        "correct": 1
    },
    {
        "question": "Quel type d'erreur est levé lors de l'analyse d'un code JavaScript avec des fautes d'écriture grammaticales ?",
        "options": [
            "ParseError",
            "TypeError",
            "GrammarError",
            "SyntaxError"
        ],
        "correct": 3
    },
    {
        "question": "Comment lever manuellement une exception personnalisée en JavaScript ?",
        "options": [
            "raise Error('Message')",
            "panic('Message')",
            "error.emit('Message')",
            "throw new Error('Message d\\'erreur')"
        ],
        "correct": 3
    },
    {
        "question": "Comment enchaîner une cause d'erreur sous-jacente lors de la création d'une nouvelle Error (ES2022) ?",
        "options": [
            "new Error('Échec').setCause(originalError)",
            "new Error('Échec').wrap(originalError)",
            "new Error('Échec', { cause: originalError })",
            "new Error('Échec', originalError)"
        ],
        "correct": 2
    },
    {
        "question": "Dans un bloc 'try...catch...finally', le bloc 'finally' s'exécute-t-il même si une instruction 'return' est exécutée dans 'try' ?",
        "options": [
            "Uniquement en mode strict",
            "Non, le return quitte immédiatement la fonction",
            "Oui, 'finally' s'exécute TOUJOURS avant la fin de la fonction",
            "Seulement s'il n'y a pas d'erreur"
        ],
        "correct": 2
    },
    {
        "question": "Peut-on omettre le paramètre d'erreur dans une clause catch (Optional Catch Binding - ES2019) ?",
        "options": [
            "Uniquement si on utilise un bloc finally",
            "Non, 'catch (e)' est toujours obligatoire",
            "Oui : try { ... } catch { ... } est syntaxiquement valide",
            "Seulement en TypeScript"
        ],
        "correct": 2
    },
    {
        "question": "Quel outil de build JavaScript est réputé pour être écrit en Go et offrir des performances de bundling ultra-rapides ?",
        "options": [
            "esbuild",
            "Parcel",
            "Rollup",
            "Webpack"
        ],
        "correct": 0
    },
    {
        "question": "Quel outil de développement moderne utilise les modules ES natifs du navigateur pour offrir un Hot Module Replacement (HMR) instantané ?",
        "options": [
            "Vite",
            "Gulp",
            "Grunt",
            "Browserify"
        ],
        "correct": 0
    },
    {
        "question": "Quel linter standard est massivement utilisé pour analyser statiquement le code JavaScript et repérer les erreurs ou écarts de style ?",
        "options": [
            "JSHint",
            "Babel",
            "Prettier",
            "ESLint"
        ],
        "correct": 3
    },
    {
        "question": "Quel outil est principalement utilisé pour formater automatiquement le code selon des règles strictes sans modifier le comportement logique ?",
        "options": [
            "Prettier",
            "TypeScript",
            "ESLint",
            "Webpack"
        ],
        "correct": 0
    },
    {
        "question": "Quel compilateur/transpileur est utilisé pour transformer le code JavaScript moderne en une version compatible avec les anciens navigateurs ?",
        "options": [
            "Terser",
            "SWC",
            "UglifyJS",
            "Babel"
        ],
        "correct": 3
    },
    {
        "question": "Qu'est-ce qu'un 'Polyfill' en JavaScript ?",
        "options": [
            "Un analyseur de performances",
            "Un compresseur de code binaire",
            "Un gestionnaire de paquets",
            "Un bout de code fournissant une implémentation d'une fonctionnalité récente sur des navigateurs anciens qui ne la possèdent pas"
        ],
        "correct": 3
    },
    {
        "question": "Qu'est-ce que le 'Tree Shaking' dans les bundlers modernes ?",
        "options": [
            "La réorganisation des dossiers de composants",
            "L'élimination automatique du code mort non utilisé (dead code elimination) lors de la génération du bundle",
            "La compilation des styles SCSS",
            "L'offuscation des variables"
        ],
        "correct": 1
    },
    {
        "question": "Quel fichier à la racine d'un projet JavaScript/Node.js contient les métadonnées, les scripts et la liste des dépendances du projet ?",
        "options": [
            "config.json",
            "manifest.json",
            "project.json",
            "package.json"
        ],
        "correct": 3
    },
    {
        "question": "Quelle commande du gestionnaire de paquets npm permet d'installer les dépendances d'un projet de manière reproductible et exacte selon le 'package-lock.json' ?",
        "options": [
            "npm install",
            "npm restore",
            "npm sync",
            "npm ci"
        ],
        "correct": 3
    }
];


