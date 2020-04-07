var path = require('path');
var glob = require('glob');
const fs = require('fs');
const StoredDefinition = require('./domain/storedDefinition.js');
const VisitorOrientedParser = require('./parser/visitorOrientedParser.js');

/**
 * Returns the absolute path of the modelica file
 * @param {String} modelicaFilePath
 * @returns {String} absolute path of modelica file
 */
function getAbsolutePath(modelicaFilePath) {
    var fullPath = '';
    if (path.isAbsolute(modelicaFilePath)) {
        fullPath = modelicaFilePath;
    } else {
        fullPath = path.join(__dirname + '../../../../../../../../../', modelicaFilePath)
    }
    return fullPath;
}

/**
 * Search directory recursively for file name
 * If it is a single filename, no need to search directory 
 * because the 'modelicaFilePath' has already been validated prev to func call.
 * @param {String} dirName 
 * @param {String} extension e.g. '.mo', '.txt'...
 * @returns {Array<String>} list of modelica "fileName" in "dirName"
 */
function searchDirectoryRecursively(dirName, extension) {       
    glob(dirName + '/**/*' + extension, function(err, files) {
        if (err) {
            console.log(err);
        } else {
            console.log(files);
        }
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

        if ((args.length == 1 && !(args[0] == "-h")) 
            || (args.length == 2 && !(args[0] == "--mo"))
            || (args.length == 4 && (!(args[0] == "--mo") || !(args[2] == "--out-dir")))) {
            throw helpMessage;
        }

        // Return help message
        if (args.length == 1) {            
            log.push(helpMessage);
            return log;
        }

        var modelicaFilePath = getAbsolutePath(args[1]);
        var singleModelicaFile = '';
        var modelicaFileName = '';
        var modelicaFileDir = '';
        var listFiles = [];

        // Get modelica file name and directory name
        if (fs.existsSync(modelicaFilePath)) {
            singleModelicaFile = true;
            modelicaFileName = path.parse(modelicaFilePath).base;
            modelicaFileDir = path.parse(modelicaFilePath).dir;
            listFiles.push(modelicaFilePath);
        } else {
            singleModelicaFile = false;
            modelicaFileName = '.mo';
            modelicaFileDir = modelicaFilePath;
            listFiles = searchDirectoryRecursively(modelicaFileDir, '.mo');
        }

        console.log('single?: ', singleModelicaFile);
        console.log('filename: ', modelicaFileName);
        console.log('dir: ', modelicaFileDir);
        console.log('list of files: ', listFiles);

        if (listFiles.length == 0) {
            var errorMessage = modelicaFileName + ' cannot be found.';
            errorMessage += '\nCheck file name and path: ' + modelicaFilePath;
            log.push(errorMessage);
            throw errorMessage;
        } else {
            for (let i = 0; i < listFiles.length; i += 1) {
                var content = fs.readFileSync(listFiles[i], 'utf8');
                console.log('content: ', content);

                // var antlrParseOut = new StoredDefinition();
                try {
                    var antlrParseOut = new VisitorOrientedParser.VisitorOrientedParserClass().parse(content);
                } catch (error) {
                    console.log('error: ', error);
                    log.push(error.message);
                    throw error.message;
                }

                // Gson gson = new GsonBuilder().disableHtmlEscaping().setPrettyPrinting().create();
                // // Gson gson = new Gson();
                // jsonOut = gson.toJson(antlrParseOut);

                // // Convert antlrParseOut to JSON.
                // var jsonOut = antlrParseOut.toJson();

                if (args.length > 2) {
                    var jsFilePath = args[3];
                    var jsFile = fullInputPath(jsFilePath);
                    exportJsonFile(listFiles[i], modelicaFileName, jsonOut, jsFile, singleModelicaFile);
                } else {
                    console.log(jsonOut);
                    log.push(jsonOut);
                }
            }
            return log;
        }
    } catch (error) {
        console.log('error: ', error.message);
        log.push(error.message);
    }
}

/**
 *
 * @param {Array<String>} args
 */
function main(args) {
    moParser(args);
}


/**
 * Main
 */
args = [];
args.push('--mo');
args.push('test/FromModelica/Block1.mo');
// args.push('test/FromModelica/') // Modelica mode - not fully tested yet
main(args);