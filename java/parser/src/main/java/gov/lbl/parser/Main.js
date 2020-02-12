var path = require('path');
const fs = require('fs');

/**
 * Returns the absolute path of the modelica file
 * @param {String} modelicaFilePath
 * @returns {String} absolute path of modelica file
 */
function fullInputPath(modelicaFilePath) {
    var fullPath = '';
    if (path.isAbsolute(modelicaFilePath)) {
        fullPath = modelicaFilePath;
    } else {
        // TODO: Incorrect path.
        fullPath = path.join(path.dirname(__filename), modelicaFilePath);
    }
    return fullPath;
}

/**
 * Search directory for file name
 * @param {String} dirName 
 * @param {String} fileName
 * @returns {Array<String>} list of modelica "fileName" in "dirName"
 */
function searchDirectory(dirName, fileName) {
    glob(dirName + '/**/*' + fileName, function(err, files) {
        return files;
    });
}

/**
 * Exports jsonOut object into a json file.
 * @param {String} searchedFile 
 * @param {String} moFileName 
 * @param {String} jsonOut 
 * @param {String} jsFile 
 * @param {Boolean} singleMo 
 */
function exportJsonFile(searchedFile, moFileName, jsonOut, jsFile, singleMo) {
    // export file to .json
}

/**
 * 
 * @param {Array<String>} args 
 */
function moParser(args) {

    try {

        var log = [];

        var helpMessage = "\n Input arguments should be like: \n" 
                        + "    \'-h\' : help info; \n"
                        + "or, \'--mo xx/xx/*.mo --out-dir xx/\' : parsed json text will be stored in folder xx/; \n"
                        + "or, \'--mo xx/xx/\' : parse .mo files in the folder, parsed json text will be stored in memory; \n"
                        + "or, \'--mo xx/xx/ --out-dir xx/\' : parse .mo files in the folder, parsed json text will be stored in folder xx/; \n"
                        + "or, \'--mo xx/xx/*.mo\' : parsed json text will be stored in memory; \n";

        if ((args.length == 1 && !args[0].equals("-h")) 
            || (args.length == 2 && !args[0].equals("--mo"))
            || (args.length == 4 && (!args[0].equals("--mo") || !args[2].equals("--out-dir")))) {
            throw new IOException(argsInfo);
        }

        // Return help message
        if (args.length == 1) {
            console.log(helpMessage);
            log.append(helpMessage);
            return log;
        }

        var modelicaFilePath = fullInputPath(args[1]);
        var singleModelicaFile = '';
        var modelicaFileName = '';
        var modelicaFileDir = '';

        // Get modelica file name and directory name
        if (fs.existsSync(modelicaFilePath)) {
            singleModelicaFile = true;
            modelicaFileName = path.parse(modelicaFilePath).base;
            modelicaFileDir = path.parse(modelicaFilePath).dir;
        } else {
            singleModelicaFile = false;
            modelicaFileName = '.mo';
            modelicaFileDir = modelicaFilePath;
        }

        var listFiles = searchDirectory(modelicaFileDir, modelicaFileName);
        if (listFiles.length > 0) {
            // Parse each file
            for (let i = 0; i < listFiles.length; i += 1) {
                var content = fs.readFileSync(listFiles[i], 'utf8');

                var antlrParseOut = new StoredDefintion();
                antlrParseOut = new VisitorOrientedParser().parse(modelicaSource);

                // Convert to JSON
                var jsonOut = antlrParseOut.toJson();

                if (args.length > 2) {
                    var jsFilePath = args[3];
                    var jsFile = fullInputPath(jsFilePath);
                    exportJsonFile(listFiles[i], modelicaFileName, jsonOut, jsFile, singleModelicaFile);
                } else {
                    console.log(jsonOut);
                    log.append(jsonOut);
                }
            }
            return log;
        } else {
            var errorMsg = modelicaFileName + ' cannot be found. \nCheck file name & path: ' + modelicaFilePath;
            log.append(errorMsg);
            throw errorMsg;
        }
    } catch (error) {
        log.append(error.message);
    }
}

/**
 *
 * @param {Array<String>} args
 */
function main(args) {
    moParser(args);
}