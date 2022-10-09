allPayments = {};

describe("Helpers test", function(){
    it('sumPaymentTotal should sum correctly for each type', function(){
        for (let i = 1; i < 4; i++){
            payment = {
                billAmt: 100*i,
                tipAmt: 20*i,
                tipPercent: 20
            };
            allPayments['payment'+i] = payment;
        }
        expect(sumPaymentTotal('billAmt')).toEqual(600);
        expect(sumPaymentTotal('tipAmt')).toEqual(120);
        expect(sumPaymentTotal('tipPercent')).toEqual(60);
    });

    it('calculateTipPercent should return correct value', function(){
        expect(calculateTipPercent(100,15)).toEqual(15);
        expect(calculateTipPercent(100, 0)).toEqual(0);
    });

    it('append Td should append td to tr', function(){
        let newTr = document.createElement('tr');
        let value = 'test'
        let newTd = document.createElement('td');
        newTd.innerText = value;
        appendTd(newTr, value);
        expect(newTr.firstChild).toEqual(newTd);
    });

    afterEach(function() {
        allPayments = {};
    });

})