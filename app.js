(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        let list = this;
        list.items = ShoppingListCheckOffService.getToBuyItems();

        list.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        let list = this;
        this.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        let service = this;

        let toBuyItems = [  {'name':'udon noodles', 'quantity': '500g'},
                            {'name':'sukiyaki sauce', 'quantity': '1 bottles'},
                            {'name':'sugar', 'quantity': '50g'},
                            {'name':'soy sauce', 'quantity': '30g'},
                            {'name':'sliced marinated chicken thigh', 'quantity': '300g'},
                            {'name':'vegetable that you like to put into the hotpot', 'quantity': 'a bunch of'},
                            {'name':'closed friends', 'quantity': '(no, bring) several'},
                            {'name':'love heart', 'quantity': '(no, bring) one'}];

        let alreadyBoughtItems = [];

        service.getBoughtItems = function (){
            return alreadyBoughtItems;
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.buyItem = function (itemIndex) {
            let itemName = toBuyItems[itemIndex].name;
            let quantity = toBuyItems[itemIndex].quantity;

            let item = {
                name: itemName,
                quantity: quantity
            };
            console.log(item);
            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };
    }
})();
