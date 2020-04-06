class StoredDefinition {
    constructor(within_dec, final_dec, name, class_definition) {
        this.within = (final_dec.length > 0 ? name : null);
        this.prefix = (final_dec.length > 0 ? final_dec : null);
        this.class_definition = (class_definition.length > 0 ? class_definition : null);
    }
}

module.exports = StoredDefinition;