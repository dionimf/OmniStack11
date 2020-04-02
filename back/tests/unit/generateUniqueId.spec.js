const generateUnicId = require('../../src/utils/generateUniqueId');
describe('Genrete Unique ID', ()=>{
    it('should generate an unique ID', ()=>{
        const id = generateUnicId();
        expect(id).toHaveLength(8);
    });
});


