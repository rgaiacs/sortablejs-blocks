new Sortable(block, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
    },
    animation: 150,
    sort: false // To disable sorting: set sort to false
});

new Sortable(code, {
    group: 'shared',
    filter: '.start', // 'filtered' class is not draggable
    animation: 150
});