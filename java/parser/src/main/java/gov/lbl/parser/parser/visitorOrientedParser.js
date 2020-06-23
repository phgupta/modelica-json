const Parser = require('./Parser.js');
// const StoredDefinition = require('../domain/storedDefinition.js');
const ModelicaParser = require('../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaParser.js');
const ModelicaLexer = require('../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaLexer.js');
const ModelicaVisitor = require('../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');
const antlr4 = require('antlr4/index');

const Class_definitionVisitor = require('./Identifiers/Class_definitionVisitor.js');
const Class_prefixesVisitor = require('./Identifiers/Class_prefixesVisitor.js');
const Class_specifierVisitor = require('./Identifiers/Class_specifierVisitor.js');
const CompositionVisitor = require('./Identifiers/CompositionVisitor.js');
const Element_listVisitor = require('./Identifiers/Element_listVisitor.js');
const Long_class_specifierVisitor = require('./Identifiers/Long_class_specifierVisitor.js');
const NameVisitor = require('./Identifiers/NameVisitor.js');
const StoredDefinitionVisitor = require('./Identifiers/StoredDefinitionVisitor.js');
const String_commentVisitor = require('./Identifiers/String_commentVisitor.js');

/**
 * NOTE
 * 1. Class declarations aren't hoisted so they can't be used before they are defined in the code.
 */

class VisitorOrientedParser extends Parser.ParserClass {

    // CHECK
    // 1. Output_expression_listVisitor
    // 2. Component_referenceVisitor
    // 3. Simple_expressionVisitor
    // 4. When_statementVisitor
    // 5. When_equationVisitor
    // 6. While_statementVisitor
    // 7. For_statementVisitor
    // 8. For_equationVisitor
    // 9. If_statementVisitor
    // 10. If_equationVisitor
    // 11. StatementVisitor (String.valueOf)

    // To Do for Block1.mo to work and test
    // - parse
    // - visitStored_definition
    // - visitName
    // - visitClass_definition
    // - visitClass_prefixes
    // - visitClass_specifier
    // - visitLong_class_specifier
    // - visitString_comment
    // - visitComposition
    // - visitElement_list

    constructor() { super() }

    parse(modelicaSourceCode) {

        const chars = new antlr4.InputStream(modelicaSourceCode);
        const lexer = new ModelicaLexer.modelicaLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ModelicaParser.modelicaParser(tokens);

        console.log('chars: ', chars);
        console.log('lexer: ', lexer);
        console.log('tokens: ', tokens);
        console.log('parser: ', parser);

        const storedDefinitionVisitor = new StoredDefinitionVisitor.StoredDefinitionVisitor();
        const traverseResult = storedDefinitionVisitor.visit(parser.stored_definition);
        return traverseResult;

        // Stored_definitionVisitor stored_definitionVisitor = new Stored_definitionVisitor();
        // Stored_definition traverseResult = stored_definitionVisitor.visit(parser.stored_definition());
        // return traverseResult;
    }
}

module.exports = { VisitorOrientedParserClass: VisitorOrientedParser }
