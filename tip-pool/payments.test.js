describe('Payments Test', function() {
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('submitPaymentInfo should create a payment and add to allPayments', function(){
        submitPaymentInfo();

        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
    });

    it('createCurPayment should return a payment object', function(){
        expect(createCurPayment()).toEqual({
            billAmt: billAmtInput.value,
            tipAmt: tipAmtInput.value,
            tipPercent: 20
        });
    });

    it('appendPaymentTable should create a new tr element with table data', function(){
        let curPay = createCurPayment();
        appendPaymentTable(curPay);
        let td = paymentTbody.children[0].children;

        expect(td[0].innerText).toEqual('$100');
        expect(td[1].innerText).toEqual('$20');
        expect(td[2].innerText).toEqual('20%');
    })

    it('updateSummary should add new paymeny in summary table', function(){
        submitPaymentInfo();
        updateSummary();
        
        expect(summaryTds[0].innerText).toEqual('$100');
        expect(summaryTds[1].innerText).toEqual('$20');
        expect(summaryTds[2].innerText).toEqual('20%');
    })

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.removeChild(paymentTbody.lastChild);
    });

});