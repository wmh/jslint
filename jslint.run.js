/*global JSLINT, toString, run*/
/*jslint evil: true, node: true, stupid: true */
if (require !== "undefined" && toString.call(require) === "[object Function]") {
    //  Rhino shim for node.js
    var jslint_content = '',
        fs = require('fs'),
        sys = require('sys'),
        getFileContent = function (name) {
            var content = fs.readFileSync(name).toString();
            return content;
        },
        printLine = function (message) {
            sys.puts(message);
        },
        exit = function (code) {
            process.exit(code);
        };
    //printLine("[DEBUG] using nodejs");
    eval(getFileContent(__dirname + '/JSLint/jslint.js'));
    run(process.argv.slice(2));

} else {
    //printLine("[DEBUG] using rhino");
    load('/PATH/TO/YOUR/JSLint/jslint.js');
    run(arguments);
}

// This is the Rhino companion to fulljslint.js.
function run(a) {
    var e, i, input;
    if (!a[0]) {
        printLine("Usage: jslint.js file.js");
        exit(1);
    }
    input = getFileContent(a[0]);
    if (!input) {
        printLine("jslint: Couldn't open file '" + a[0] + "'.");
        exit(1);
    }
    if (!JSLINT(input, {'continue': true, eqeq: false, node: true, nomen: true,
            vars: false, plusplus: true, regexp: true, rhino: true,
            sloppy: true, undef: false, white: true})) {
        for (i = 0; i < JSLINT.errors.length; i += 1) {
            e = JSLINT.errors[i];
            if (e) {
                printLine('Lint at line ' + e.line + ' character ' +
                        e.character + ': ' + e.reason);
                printLine((e.evidence || '').
                        replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"));
                printLine('');
            }
        }
        exit(2);
    } else {
        if (!(a[1] && a[1] === '-q')) {
            printLine("jslint: No problems found in " + a[0]);
        }
        exit();
    }
}
