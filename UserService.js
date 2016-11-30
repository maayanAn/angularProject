/**
 * Created by Jbt on 11/30/2016.
 */
(function () {
    'use strict';

    angular.module('users').service('userService', UserService);

    function UserService($q) {
        var users = [
            {
                name: 'Danna Smith',
                avatar: 'girl.svg',
                content: 'Nero Claudius Caesar Augustus Germanicus (December 15, 37 – June 9, 68), born Lucius Domitius Ahenobarbus, also called Nero Claudius Caesar Drusus Germanicus, was the fifth and last Roman Emperor of the Julio-Claudian dynasty.'
            },
            {
                name: 'Jhon Collins',
                avatar: 'boy.svg',
                content: 'Nero was adopted by his grand-uncle Claudius to become heir to the throne. As Nero Claudius Caesar Drusus, he succeeded to the throne on October 13, 54, following Claudius.'
            },
            {
                name: 'Rayn Collings',
                avatar: 'boy_2.svg',
                content: 'The Rendille (also known as Rendille, Reendile, Rendili, Randali, Randile, and Randille[2]) are a Cushitic-speaking ethnic group inhabiting the northern Eastern Province of Kenya.'
            },
            {
                name: 'Bella McAdams',
                avatar: 'girl_2.svg',
                content: 'The Rendille are believed to have originally migrated down into the Great Lakes area from Ethiopia in the more northerly Horn region, following southward population expansions by the Oromo and later the Somali.'
            }
        ]

    }
})();
