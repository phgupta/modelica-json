const fs = require('fs')
const pa = require('./lib/parser.js')
const ut = require('./lib/util.js')

const logger = require('winston')

const ArgumentParser = require('argparse').ArgumentParser
/// ///////////////////////////////////////

var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Modelica parser'
})
parser.addArgument(
  [ '-o', '--output' ],
  {
    help: 'Specify output format.',
    // choices: ['html', 'raw-json', 'json', 'docx'],
    defaultValue: 'html'
  }
)
parser.addArgument(
  [ '-l', '--log' ],
  {
    help: "Logging level, 'info' is the default.",
    choices: ['error', 'warn', 'info', 'verbose', 'debug'],
    defaultValue: 'info'
  }
)
parser.addArgument(
  [ '-m', '--mode' ],
  {
    help: "Parsing mode, CDL model or a package of the Modelica Buildings library, 'cdl' is the default.",
    choices: ['cdl', 'modelica'],
    defaultValue: 'cdl'
  }
)
parser.addArgument(
  [ '-f', '--file' ],
  {
    help: 'Filename or packagename that contains the top-level Modelica class.',
    required: true
  }
)
parser.addArgument(
  [ '-d', '--directory' ],
  {
    help: 'Specify output directory, with the default being the current.',
    defaultValue: 'current'
  }
)
var args = parser.parseArgs()

const logFile = 'modelica-json.log'
try {
  fs.unlinkSync(logFile)
} catch (ex) {}

logger.configure({
  transports: [
    new logger.transports.Console(),
    new logger.transports.File({ filename: logFile })
  ],
  handleExceptions: true,
  humanReadableUnhandledException: true
})
logger.cli()

logger.level = args.log

// Get mo files array
var moFiles = ut.getMoFiles(args.mode, args.file)

var jsonDict = {};
for outputFormat in args.output.split("|") {
  if (outputFormat === 'json' || outputFormat === 'html' || outputFormat === 'docx') {
    if ('json' in json_dict) {
      jsonDict[outputFormat] = jsonDict['json']
    }
    else if ('html' in outputFormat) {
      jsonDict[outputFormat] = jsonDict['html']
    }
    else if ('docx' in outputFormat) {
      jsonDict[outputFormat] = jsonDict['docx']
    }
  }
  else {
    // Parse the json representation for moFiles
    jsonDict[outputFormat] = pa.getJSON(moFiles, args.mode, args.output)
  }
}

// // Parse the json representation for moFiles
// var json = pa.getJSON(moFiles, args.mode, args.output)

var outFileDict = {};
for outputFormat in args.output.split("|") {
  outFileDict[outputFormat] = ut.getOutFile(args.mode, args.file, args.output, args.directory, moFiles, jsonDict[outputFormat])
}

// // Get the name array of output files
// var outFile = ut.getOutFile(args.mode, args.file, args.output, args.directory, moFiles, json)

for outputFormat in args.output.split("|") {
  pa.exportJSON(jsonDict[outputFormat], outFileDict[outputFormat], outputFormat, args.mode, args.directory)

  setTimeout(function () { ut.jsonSchemaValidate(args.mode, outFileDict[outputFormat][0], outputFormat) }, 100)
}

// pa.exportJSON(json, outFile, args.output, args.mode, args.directory)

// setTimeout(function () { ut.jsonSchemaValidate(args.mode, outFile[0], args.output) }, 100)
