jslint
======

jslint command line tool using PHP and NodeJS (or Rhino)

```
Usage: jslint [options]
              [-f <filename> | -d <directory> | -g | -r]
              [-o <output_file>]
              [-i <ignore_entries>]
              [-e <extensions>]
              [-n nodejs | rhino]
              [-q]

  -h        This help
  -r, -R    Check sub directories recursively
  -f        Specify a filename to do jslint check
  -g        Specify a git repository path to do jslint check
  -d        Specify a directory to do jslint check. By default, jslint runs the check in current directory.
  -o        Ouput file (not implement yet.)
  -i        Ignore entries seperate by comma. The default value is 'yui'
  -e        Extensions seperate by comma. The default value is 'js'
  -n        Specify a JavaScript engine, currently supports nodejs and rhino.
  -q        Quiet mode, without success message.
```
